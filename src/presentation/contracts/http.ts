export type HttpResponse<T = any> = {
  statusCode: number
  body: T
}

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})
