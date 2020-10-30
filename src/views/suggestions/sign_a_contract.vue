<template>
    <section class="sign_a_contract">
        <div class="signatureBox">
            <div class="canvasBox" ref="canvasHW">
                <canvas @touchstart='touchStart'
                        @touchmove='touchMove'
                        @touchend='touchEnd'
                        ref="canvasF"
                        @mousedown="mouseDown"
                        @mousemove="mouseMove"
                        @mouseup="mouseUp"></canvas>
            </div>
        </div>
<div class="btnBox">
            <van-button
                type="default"
                @click="overwrite"
                >重写</van-button>
            <van-button
                size="small"
                type="primary"
                @click="commit"
                >
               	 提交签名
            </van-button>
        </div>
    </section>
</template>

<script>
export default {
  name: 'sign_a_contract',
  head() {
    return {
    	title:'签名',
    }
  },
  data() {
    return {
      client: {},
      points: [],
      canvasTxt: null,
      startX: 0,
      startY: 0,
      moveY: 0,
      moveX: 0,
      endY: 0,
      endX: 0,
      w: null,
      h: null,
      isDown: false,
      isViewAutograph: this.$route.query.isViews > 0,
      contractSuccess: this.$route.query.contractSuccess
    }
  },
  created() {},
  mounted() {
    let canvas = this.$refs.canvasF
    canvas.height = this.$refs.canvasHW.offsetHeight
    canvas.width = this.$refs.canvasHW.offsetWidth;
    this.canvasTxt = canvas.getContext('2d')
  },
  methods: {
    //添加图片
    handleUpload(data) {
      this.fileUrl.push(data)
    },
    backHome() {
      window.history.back(-2)
    },
    //电脑设备事件
    mouseDown(ev) {
      ev = ev || event
      ev.preventDefault()
      console.log(ev)
      if (1) {
        let obj = {
          x: ev.offsetX,
          y: ev.offsetY
        }
        console.log(obj)
        this.startX = obj.x
        this.startY = obj.y
        this.canvasTxt.beginPath()
        this.canvasTxt.moveTo(this.startX, this.startY)
        this.canvasTxt.lineTo(obj.x, obj.y)
        this.canvasTxt.stroke()
        this.canvasTxt.closePath()
        this.points.push(obj)
        this.isDown = true
        debugger
        this.imgUrl =
          (this.$refs.canvasF && this.$refs.canvasF.toDataURL()) || ''
      }
    },
    //移动设备事件
    touchStart(ev) {
      ev = ev || event
      ev.preventDefault()
      if (ev.touches.length == 1) {
        let obj = {
          x: ev.targetTouches[0].clientX,
          y: ev.targetTouches[0].clientY - 22
        }
        this.startX = obj.x
        this.startY = obj.y
        this.canvasTxt.beginPath()
        this.canvasTxt.moveTo(this.startX, this.startY)
        this.canvasTxt.lineTo(obj.x, obj.y)
        this.canvasTxt.stroke()
        this.canvasTxt.closePath()
        this.points.push(obj)
      }
    },
    //电脑设备事件
    mouseMove(ev) {
      ev = ev || event
      ev.preventDefault()
      if (this.isDown) {
        let obj = {
          x: ev.offsetX,
          y: ev.offsetY
        }
        this.moveY = obj.y
        this.moveX = obj.x
        this.canvasTxt.beginPath()
        this.canvasTxt.moveTo(this.startX, this.startY)
        this.canvasTxt.lineTo(obj.x, obj.y)
        this.canvasTxt.stroke()
        this.canvasTxt.closePath()
        this.startY = obj.y
        this.startX = obj.x
        this.points.push(obj)
      }
    },
    //移动设备事件
    touchMove(ev) {
      ev = ev || event
      ev.preventDefault()
      if (ev.touches.length == 1) {
        let obj = {
          x: ev.targetTouches[0].clientX,
          y: ev.targetTouches[0].clientY - 22
        }
        this.moveY = obj.y
        this.moveX = obj.x
        this.canvasTxt.beginPath()
        this.canvasTxt.moveTo(this.startX, this.startY)
        this.canvasTxt.lineTo(obj.x, obj.y)
        this.canvasTxt.stroke()
        this.canvasTxt.closePath()
        this.startY = obj.y
        this.startX = obj.x
        this.points.push(obj)
      }
    },
    //电脑设备事件
    mouseUp(ev) {
      ev = ev || event
      ev.preventDefault()
      if (1) {
        let obj = {
          x: ev.offsetX,
          y: ev.offsetY
        }
        this.canvasTxt.beginPath()
        this.canvasTxt.moveTo(this.startX, this.startY)
        this.canvasTxt.lineTo(obj.x, obj.y)
        this.canvasTxt.stroke()
        this.canvasTxt.closePath()
        this.points.push(obj)
        this.points.push({x: -1, y: -1})
        this.isDown = false
      }
    },
    //移动设备事件
    touchEnd(ev) {
      ev = ev || event
      ev.preventDefault()
      if (ev.touches.length == 1) {
        let obj = {
          x: ev.targetTouches[0].clientX,
          y: ev.targetTouches[0].clientY - 22
        }
        this.canvasTxt.beginPath()
        this.canvasTxt.moveTo(this.startX, this.startY)
        this.canvasTxt.lineTo(obj.x, obj.y)
        this.canvasTxt.stroke()
        this.canvasTxt.closePath()
        this.points.push(obj)
        this.points.push({x: -1, y: -1})
        debugger
        this.imgUrl =
          (this.$refs.canvasF && this.$refs.canvasF.toDataURL()) || ''
      }
    },
    //重写
    overwrite() {
      this.canvasTxt.clearRect(
        0,
        0,
        this.$refs.canvasF.width,
        this.$refs.canvasF.height
      )
      this.points = []
    },
    //提交签名
    commit() {
      console.log(this.$refs.canvasF.toDataURL()) //签名
    }
  }
}
</script>
<style lang="scss" scoped>
.sign_a_contract {
   .signatureBox {
    position:relative;
    float:left;
    margin-top:30px;
    width:calc(100% - 60px);
    height:300px;
    margin-left:30px;
    float:left;
    .canvasBox {
		  width:100%;
		  height:300px;
		  float: left;
		  canvas {
			  border: 1px solid #e3e3e3;
			}
		}
  }
  .btnBox {
	  width:100%; float:left; text-align:center;
	  margin-top:20px;
	  button:first-of-type {
		  background: transparent;
		  border-radius: 40px;
		  height: 70px;
		  width:180px;
		  font-size:24px;
		  border:1px solid #FF2411;
		}
		button:last-of-type {
		  background: #FF2411;
		  color: #fff;
		  border-radius:40px;
		  height: 70px;
		  width: 180px;
		  font-size: 24px;
		  margin-left:20px;
		  border:0px;
		}
	}
}
</style>