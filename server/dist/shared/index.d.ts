export interface ObjectPrice {
    [key: string]: number;
}
export declare enum Role {
    ADMIN = "ADMIN",
    USER = "USER"
}
export declare enum Status {
    InProcessing = "\u0412 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0435",
    Sent = "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D",
    Completed = "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D"
}
