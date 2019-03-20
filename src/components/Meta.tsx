import React from 'react'
import { Helmet } from 'react-helmet'

const { NODE_ENV } = process.env

const isDev = NODE_ENV !== 'production'

const DEFAULT_TITLE = 'Mara Reviews'
const DEFAULT_URL = isDev ? 'http://localhost:8000' : 'https://mara.reviews'
const DEFAULT_DESCRIPTION = `맛있는 마라음식에 대한 정보`
const DEFAULT_IMAGE_URL = `${DEFAULT_URL}/images/mara.jpg`
const DEFAULT_IMAGE_WIDTH = 1135
const DEFAULT_IMAGE_HEIGHT = 937

interface Props {
  title?: string,
  path?: string,
  description?: string,
  imageUrl?: string,
  imageWidth?: number | null,
  imageHeight?: number | null,
}

export const Meta = ({
  title = DEFAULT_TITLE,
  path = '',
  description = DEFAULT_DESCRIPTION,
  imageUrl = DEFAULT_IMAGE_URL,
  imageWidth = !imageUrl ? DEFAULT_IMAGE_WIDTH : null,
  imageHeight = !imageUrl ? DEFAULT_IMAGE_HEIGHT : null,
}: Props) => {

  const url = `${DEFAULT_URL}/${path.indexOf('/') === 0 ? path.substr(1) : path}`
  const fullImageUrl = /^(https?:\/\/)/.test(imageUrl) ? imageUrl : `${DEFAULT_URL}${imageUrl}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="canonical" href={url} />
      <meta name="google-site-verification" content="U3sjUaSWzxwiO1hfB1qC9ghlGOM2fuXxaBKcUZzLj1M" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      { imageWidth && (
        <meta property="og:image:width" content={imageWidth + ''} />
      )}
      { imageHeight && (
        <meta property="og:image:height" content={imageHeight + ''} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@band_idiots" />
      <meta name="twitter:creator" content="@winterwolf0412" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
export default Meta
