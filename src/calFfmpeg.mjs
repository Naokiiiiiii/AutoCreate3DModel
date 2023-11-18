import AWS from 'aws-sdk'
const lambda = new AWS.Lambda()

export const callFfmpeg = async (event) => {
  const fpsList = [1, 3]
  await Promise.all(
    fpsList.map(async (fps) => {
      const params = {
        FunctionName: process.env.LAMBDA,
        Payload: JSON.stringify({
          bucket_name: event['detail']['bucket']['name'],
          bucket_key: event['detail']['object']['key'],
          fps: fps,
        }),
      }
      await lambda.invoke(params).promise()
    })
  )
}
