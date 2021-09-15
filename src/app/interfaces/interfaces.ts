export interface ResponseProduct{
    statusID: number;
    statusName: string;
    statusDescription: string;
    data: Product [];
}

export interface Product{
    ID_Product?: number;
    ID_Category?: number;
    ID_CategoryName?: string;
    Name?: string;
    Description?: string;
    Price?: number;
    Unit?: string;
    StockQty?: string;
    Shipping?: string;
    ShippingPrice?: string;
    Image?: string;
    Created?: string;
    CreatedBy?: string;
    Updated?: string;
    UpdatedBy?: string;
}


export interface ResponseCategory{
    statusID: number;
    statusName: string;
    statusDescription: string;
    data: Category [];
}



export interface Category{
    ID_Category?: number;
    Name?: number;
    Description?: string;
    Image?: string;
    Created?: string;
    CreatedBy?: string;
    Updated?: string;
    UpdatedBy?: string;
}







export interface LocalOrderResponse{
    statusID: number;
    statusName: String;
    statusDescription: String;
    data: LocalOrder[];
}



export class LocalOrder{
    ID_Product: number;
    Name: String;
    Photo: String;
    Unit: String;
    Price: number;
    Qty: number;
    Total: number;
}








export interface UserResponse{
    statusID: number;
    statusName: string;
    statusDescription: string;
    data: UserModel[];
}

export class UserModel{
    ID_User: number;
    ID_Facebook:string;
    Name: string;
    Phone: string;
    Email: string;
    Password: string;
    Address: string;
    AddressColone: string;
    AddressZipCode: string;
    AddressState: string;
    AddressCity: string;
    CardNumber: string;
    CardMonth: string;
    CardYear: string;
    CardName: string;
    Created: string;
    CreatedBy: string;
    Updated: string;
    UpdatedBy: string;
}





export interface OrderResponse{
    statusID: number;
    statusName: string;
    statusDescription: string;
    data: OrderModel[];
}

export class OrderModel{
    ID_User: number;
    Name: string;
    Phone: string;
    Email: string;
    Address: string;
    AddressColone: string;
    AddressZipCode: string;
    AddressState: string;
    AddressCity: string;
    StripeID: string;
    Status:string;
    Products: OrderProductsModel[];

    AdminNotes: string;
    Created: string;
    CreatedBy: string;
    ID_Order:  number;
    Total: string;
    TotalProducts:string;
    Updated: string;
    UpdatedBy: string;
    UserNotes:string;
    orderProductsArray: string;


}


export class OrderProductsModel{
    ID_OrderProduct: number;
    ID_Order: number;
    ID_Product: number;
    Name:string;
    Photo:string;
    Unit:string;
    Price:string;
    Qty:string;
    Total:string;
    Created:string;
    CreatedBy:string;
    Updated:string;
    UpdatedBy:string;


}




export interface StrpieClientSecretResponse{
    statusID: number;
    statusName: string;
    statusDescription: string;
    clientSecret: string;
}



export interface OrderHistoryResponse{
    statusID: number;
    statusName: string;
    statusDescription: string;
    data: OrderHistory[];
}


export class OrderHistory{
    ID_Order: number;
    ID_User: number;
    Name: string;
    Phone: string;
    Email: string;
    Address: string;
    AddressColone: string;
    AddressZipCode: string;
    AddressState: string;
    AddressCity: string;
    StripeID: string;
    AdminNotes: string;
    UserNotes: string;
    Status: string;
    Created: string;
    CreatedBy: string;
    Updated: string;
    UpdatedBy: string;
    TotalProducts: number;
    Total: number;
}

    
export interface ResponseUserLocationGoogleAPI{
    statusID: number;
    statusName: string;
    statusDescription: string;
}








export interface UserNotificationsResponse{
    statusID: number;
    statusName: string;
    statusDescription: string;
    data: UserNotificationsResponseData[];
}
export class UserNotificationsResponseData{
    ID_User: number;
    Name: string;
    Phone: string;
    Email: string;
    Created: string;
    CreatedBy: string;
    Updated: string;
    UpdatedBy: string;
    Notifications: UserNotifications[];
}
export class UserNotifications{
    ID_Notification: number;
    Message: string;
    Created: string;
    CreatedBy: string;
    Status: string;
}



export interface facebookLoginResponse{
    id: string;
    name: string;
    email: string;
}