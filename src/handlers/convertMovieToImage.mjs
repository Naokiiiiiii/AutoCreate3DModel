export const convertMovieToImage = async (event) => {
  console.log('event', event)
  // const bucketName = event['bucket_name']
  // const bucketKey = event['bucket_key']
  // const fps = event['fps']

  // //s3からオブジェクトをダウンロード
  // const s3 = new AWS.S3()
  // const params = {
  //   Bucket: bucketName,
  //   Key: bucketKey,
  // }

  // const inputObject = await s3.getObject(params).promise()
  // await fs.writeFile('/tmp/data.MOV', inputObject.Body)

  // //動画を静止画を変換
  // const imageDirPath = await fs.mkdtemp('/tmp/image')
  // const outputImageFilePath = path.join(imageDirPath, 'image%04d.jpg')
  // console.log('静止画変換開始')
  // await spawnSync('/opt/bin/ffmpeg', ['-i', '/tmp/data.MOV', '-r', fps, outputImageFilePath], { stdio: 'inherit' })
  // console.log('静止画変換完了')

  // //静止画ディレクトリをtarに変換
  // const tarFilePath = path.join('/tmp', 'output.tgz')
  // await tar.c(
  //   {
  //     file: tarFilePath,
  //   },
  //   [imageDirPath]
  // )

  // //tarファイルをs3に保存
  // const outputBucketName = 'art-ai-image-tar-ffmpeg-ishizuka'
  // const outputObjectName = path.parse(bucketKey).name + '_' + String(fps) + 'fps.tar'
  // const s3InputParams = {
  //   Bucket: outputBucketName,
  //   Key: outputObjectName,
  //   Body: await fs.readFile(tarFilePath),
  // }
  // await s3.upload(s3InputParams).promise()
  // console.log('s3アップロード完了')

  // //一時ファイルを削除
  // await fs.unlink(tarFilePath)
  // const files = await fs.readdir(imageDirPath)
  // await Promise.all(files.map((file) => fs.unlink(path.join(imageDirPath, file))))
  // await fs.rmdir(imageDirPath)
  // console.log('一時ファイル削除')
}
