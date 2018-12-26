Page({
    onReady(e) {
        // 使用 wx.createAudioContext 获取 audio 上下文 context
        this.audioCtx = wx.createAudioContext('myAudio')
    },
    data: {
        poster: 'http://imgsrc.baidu.com/forum/w=580/sign=25b3b5848913632715edc23ba18ea056/1a63114c510fd9f9e3467c31262dd42a2934a4b4.jpg',
        name: '山水之间',
        author: '许嵩',
        src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    },
    audioPlay() {
        this.audioCtx.play()
    },
    audioPause() {
        this.audioCtx.pause()
    },
    audioStart() {
        this.audioCtx.seek(0)
    }
})