<template>
    <section class="sign_a_contract">
        <div class="ad_img"><img src="~@/assets/images/hetong_a.jpg"></div>
        <div class="ad_img ad_imgb"><img src="~@/assets/images/hetong_b.jpg"></div>
        <div class="button_submit" @click="hetong_show_hide('show')">签订</div>
        <div class="signatureBox">
        	<van-icon name="cross" class="close_hetong" @click="hetong_show_hide('hide')" />
            <div class="canvasBox" ref="canvasHW">
                <canvas @touchstart='touchStart'
                        @touchmove='touchMove'
                        @touchend='touchEnd'
                        ref="canvasF"
                        @mousedown="mouseDown"
                        @mousemove="mouseMove"
                        @mouseup="mouseUp"></canvas>
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
        </div>
    </section>
</template>

<script>
export default {
  name: 'sign_a_contract',
  data() {
    return {
    	hetong_show:false,
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
  	hetong_show_hide(type){
  		if(type=='show')
  		{
  			$(".signatureBox").css('opacity',1);
  		}
  		else
  		{
  			$(".signatureBox").css('opacity',0);
  		}
  	},
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
	.ad_img{width:100%; float:left;
	img{width:100%; height:auto; float:left;}
	}
	.ad_imgb{padding-bottom:100px;}
   .signatureBox{
   	opacity:0;
    position:fixed;
    z-index:100;
    background:#fff;
    top:30px;
    width:calc(100% - 60px);
    height:300px;
    left:30px;
    .close_hetong{position:absolute; right:10px; top:10px; color:#999; font-size:40px; border:1px solid #999; border-radius:50%; padding:10px;}
    .canvasBox {
		  width:100%;
		  height:300px;
		  float: left;
		  canvas {
			  border-bottom:1px solid #e3e3e3;
			}
		}
	.btnBox {
	  width:100%; float:left; text-align:center; background:#fff; padding:20px 0px;
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
}
</style>