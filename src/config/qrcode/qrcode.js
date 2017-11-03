/* eslint-disable no-new */
import './qrcode.scss'
import QRCode from 'qrcodejs2'
import image from './1505013818.png'

class PageCode {
  init () {
    let codeWrapper = document.createElement('div')
    codeWrapper.className = 'qrcode-container'
    codeWrapper.id = 'qrcode-container'
    let codeButton = document.createElement('div')
    codeButton.className = 'qrcode-button'
    codeButton.innerHTML = `<img src=${image}>`
    codeWrapper.appendChild(codeButton)
    let codeRect = document.createElement('div')
    codeRect.className = 'qrcode'
    codeRect.id = 'qrcode'
    let codeContent = document.createElement('div')
    codeContent.className = 'qrcode-content'
    codeContent.id = 'qrcode-content'
    codeContent.style.display = 'none'
    codeContent.appendChild(codeRect)
    codeWrapper.appendChild(codeContent)
    document.body.appendChild(codeWrapper)
    codeButton.onclick = () => {
      codeContent.style.display = 'block'
    }
    codeContent.onclick = () => {
      codeContent.style.display = 'none'
    }
    var that = this
    window.onpopstate = function (event) {
      that.refresh()
    }
    this.refresh()
  }

  refresh () {
    new QRCode(document.getElementById('qrcode'), window.location.href.replace(/localhost|127\.0\.0\.1/, process.localip))
  }
}

export default new PageCode().init()
