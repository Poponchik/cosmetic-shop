import s3 from '../index.js'
import * as uuid from 'uuid'


class FilesService {
    async createFile(files) {
        let filesUrl = []

        if (!Array.isArray(files)) {
            const file = files
            const fileName = uuid.v4() + '.jpg'
            const response = await s3.upload({
                Bucket: process.env.AWS_PUBLIC_BUCKET_NAME,
                Key: fileName,
                Body: file.data,
                ContentType: file.mimetype
            }).promise()
            filesUrl.push(response.Location)
        } else {
            for (const file of files) {
                const fileName = uuid.v4() + '.jpg'
                const response = await s3.upload({
                    Bucket: process.env.AWS_PUBLIC_BUCKET_NAME,
                    Key: fileName,
                    Body: file.data,
                    ContentType: file.mimetype
                }).promise()
                filesUrl.push(response.Location)
            }
        }
        return filesUrl
    }

    async deleteFiles(filesUrl) {
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

        await s3.deleteObjects(deleteParam, function (err, data) {
            if (err) console.log(err, err.stack);
            else console.log('delete', data);
        })
    }

}


export default new FilesService