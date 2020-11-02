import http from './http';

export default async (params) => {

    let { router, store, data } = params;

    const play = {

        /**
         * 访问限制
         * course_id  课程id
         * */
        async limitPlay() {
            let res = await http.get(
                `/api/app/course/limit/visit/${data.course_id}`
            );
            return new Promise((resolve) => {
                if (res.limit) {
                    http.toast("您已被限制访问，请联系管理员");
                } else {
                    resolve()
                }
            })
        },

        /**
         * 直播课 
         * course_id : 课程id
         * chapter_id: 章id
         * period_id: 节id
         * play_type: 直播状态
         * course_type: 课程类型
         * query: 双师课程大小班参数
         * */
        async zhiBoPlaying() {
            let { course_id, chapter_id, period_id, play_type, course_type, query } = data;
            await http.get(
                `/api/app/getPcRoomCode/course_id=${course_id}/chapter_id=${chapter_id}`,
                { ...query }
            )
            if (
                course_type == 3 &&
                store.config.app_download_on == 1 &&
                play_type == 2
            ) {
                // 小班课直播 开启下载app功能
                router.push({
                    name: "PlayMiddle",
                    query: {
                        chapter_id,
                        period_id,
                    }
                });
            } else {
                router.push({
                    name: "LivePlay",
                    query: {
                        course_id,
                        chapter_id,
                        period_id,
                        ...query
                    }
                });
            }
        },
    }

    await play[data.type]();
}


