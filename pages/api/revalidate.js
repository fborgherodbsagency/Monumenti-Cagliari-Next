import { revalidate } from '@teleporthq/cms-mappers/caisy/revalidate'

export default async function handler(req, res) {
  try {
    await revalidate(req, async (data, contentType) => {
      switch (contentType) {
        case '800d19a9-2491-4fc8-8071-0ae1854e5c43': {
          try {
            await res.revalidate(`/monumenti`)
            await res.revalidate(`/monumenti/${data.id}`)
          } catch (error) {
            console.log('Failed in clearing cache')
            console.log(error)
          }
          break
        }
        default:
          throw new Error('Invalid content typ, received', contentType)
      }
    })
    return res.status(200).json({
      revalidated: true,
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      revalidated: false,
    })
  }
}
