import React, { Component } from 'react'
import Text from './widgets/Text'
import Image from './widgets/Image'
import QRCode from './widgets/QRCode'
import Clock from './widgets/Clock'
import '../styles/dash_body.css'

const dashboardBodyProps = {
  widgets: [
    {
      type: 'Text',
      title: 'Text',
      size: '1x1',
      x: '10px',
      y: '340px',
      message: {
        one: { text: 'Body text', type: 'Text' },
        two: { text: 'blarg', type: 'Alert' },
        three: { text: 'blarg', type: 'Info' },
        four: { text: 'blarg', type: 'Text' },
      },
    },
    {
      type: 'Image',
      title: 'Image',
      size: '1x1',
      x: '10px',
      y: '100px',
      path: 'http://www.easypano.com/images/pw/v3/banner.jpg',
      reload: 3
    },
    {
      type: 'Clock',
      title: 'Clock',
      size: '1x1',
      x: '10px',
      y: '820px',
      format: 0,
      country: 'United States',
      city: 'Los Angeles'
    },
    {
      type: 'QRCode',
      title: 'QR Code',
      size: '1x1',
      x: '10px',
      y: '580px',
      url: 'http://www.easypano.com/images/pw/v3/banner.jpg'
    },
  ]
}

class DashboardBody extends Component {

  render() {
    const textProps = dashboardBodyProps.widgets[0]
    const imageProps = dashboardBodyProps.widgets[1]
    const qrProps = dashboardBodyProps.widgets[3]
    const clock = dashboardBodyProps.widgets[2]

    return (
      <div className="dash-main">
        <Text
          title={textProps.title}
          size={textProps.size}
          x={textProps.x}
          y={textProps.y}
          message={textProps.message}
        />
        <Image
          title={imageProps.title}
          size={imageProps.size}
          x={imageProps.x}
          y={imageProps.y}
          path={imageProps.path}
          reload={imageProps.reload}
        />
        <QRCode
          title={qrProps.title}
          size={qrProps.size}
          x={qrProps.x}
          y={qrProps.y}
          url={qrProps.url}
        />
        <Clock
          title={clock.title}
          x={clock.x}
          y={clock.y}
          format={clock.format}
          country={clock.country}
          city={clock.city}
        />
        <div className="chat-icon">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAkCAYAAADo6zjiAAAAAXNSR0IArs4c6QAAAr5JREFUWAntVz2MEkEUluXnTuGQwxAwV2ihMRcLicTSaywwdhZezsbKmtrKikQajN0lhsLC2JlcYujBGEJBIZ5iAwnEkJCYEORfWBa/b8Pc7S23d7kTttqXPObtvDfv++bN7DJju3Aotpkp2kPPYq3pLJ1o1UeCSv1+f1tRlO/T6VSGLlpk5N4HxhNiQQ8mqoJ3Op3tRSMa5QPWERIk4JxMJvtGAxbdD6xvxGQV1NnzASBdtA6oGSLbbDYPgMZcCwpbs8CJRywVWxA42BD0miQqpiBgEuY8jEXAqoBVAasCVgWsChhWQJblOs4I8vzfx9l7cABpGI06lsB4PC47nc576XT64Wg0+mE0+LR+5KkVCoWnDofjLuyKUTxJXNIeu8D4TyaTuY9+XygUCpRKpec4TH5mRbRxBrYyHA4L5XI5FolEriLHejab3WJObTwxoWoB5gjMAv92u93k7u7uBgIvQ6/EYrGbxWLxWb1ef9VsNt+32+096CfYHxqNxmsSTSQStxkL9aVSqWvI8Qb5Rlpw2vCfSkAdg6N0ezAYvK1UKg/C4bAPA0mGrV+n6/RFo1F/tVp9hDHvMLanBxbPiFUJiEPpKhw9dJ4oiGmhlF+xQX9Cf8PuYIAdsoZ1DkE3Yd/BgdN9YiI4ZzFDQWAFyX5JksTSmSKCgHgLpr1eb88UZB0ICXBDKPF4/CV27xedf+mPXAKxDC7Yq/l8fisYDN5Cic5zT7B7vd5Nt9sdcblcN5BPVHhuImIJBAEGMJjXJXFpoO+sIiYjJZPJjR1IIBDYwUftuj6RICD6BRGSIAESOY+yiivQi1BevXwejyeQy+Uet1qtj3gtB/rXEDFHRBD5n5aTEBMhIZJZg/r5IavVai/weefllP0SgZYh2ryCkCBlB6ACHUFlbeAyiDCnwGBLJREKSSjCqfYs+edYrH/16LJPC4LGtQAAAABJRU5ErkJggg==" role="presentation"/>
        </div>
      </div>
    )
  }
}

export default DashboardBody
