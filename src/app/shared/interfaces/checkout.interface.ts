export interface ICheckoutRequest {
    ProcessingCode: number,
    SystemTraceNr: number,
    FunctionCode: number,
    CardNo: number,
    CardHolder: string,
    AmountTrxn: number,
    CurrencyCode: number
}

export interface ICheckoutResponse {
    ResponseCode: string
    Message: string
    ApprovalCode: number
    DateTime: string
}
