import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import * as path from 'path'
import * as fs from 'fs'
import * as uuid from 'uuid'
import { InjectS3, S3 } from 'nestjs-s3'




@Injectable()
export class FilesService {
    constructor(@InjectS3() private readonly s3: S3) { }


    async createFile(files): Promise<any> {
        try {
            let filesUrl = []
            for (const file of files) {
                const fileName = uuid.v4() + '.jpg'
                const s3Response = await this.s3.upload({
                    Bucket: process.env.AWS_PUBLIC_BUCKET_NAME,
                    Key: fileName,
                    Body: file.buffer,
                    ContentType: file.mimetype
                }).promise()
                filesUrl.push(s3Response.Location)
            }
            return filesUrl
        } catch (e) {
            throw new HttpException('произошла ошибка при записи файла', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async deleteFiles(filesUrl): Promise<any> {
        try {
            let fileNames = []
            for (let i = 0; i < filesUrl.length; i++) {
                let file = {
                    Key: filesUrl[i].slice(-40)
                }
                fileNames.push(file)
            }

            const deleteParam = {
                Bucket: process.env.AWS_PUBLIC_BUCKET_NAME,
                Delete: {
                    Objects: fileNames
                }
            }

            await this.s3.deleteObjects(deleteParam, function (err, data) {
                if (err) throw new HttpException(err.stack, HttpStatus.INTERNAL_SERVER_ERROR)
                return console.log('delete', data)
            })

        } catch (e) {
            throw new HttpException('ошибка удаления файлов в s3', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }


}
