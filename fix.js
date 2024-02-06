(window["webpackJsonpTchApp"] = window["webpackJsonpTchApp"] || []).push([[8072], {
    71845: function(e, t, n) {
        var r = {
            "./ar.js": 77537,
            "./en-US.js": 97516,
            "./en.js": 52482,
            "./zh-CN.js": 62132,
            "./zh-HK.js": 22164,
            "@sdp.nd/elearning-general-module/lib/exam-answer-ui-player/locale/ar.js": 77537,
            "@sdp.nd/elearning-general-module/lib/exam-answer-ui-player/locale/en-US.js": 97516,
            "@sdp.nd/elearning-general-module/lib/exam-answer-ui-player/locale/en.js": 52482,
            "@sdp.nd/elearning-general-module/lib/exam-answer-ui-player/locale/zh-CN.js": 62132,
            "@sdp.nd/elearning-general-module/lib/exam-answer-ui-player/locale/zh-HK.js": 22164
        };
        function i(e) {
            var t = o(e);
            return n(t)
        }
        function o(e) {
            if (!n.o(r, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return r[e]
        }
        i.keys = function() {
            return Object.keys(r)
        }
        ,
        i.resolve = o,
        e.exports = i,
        i.id = 71845
    },
    16422: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return d
            }
        });
        n(70384);
        var r = n(67840)
          , i = n(64164)
          , o = n(25720)
          , a = n(67294)
          , c = n(94184)
          , l = n.n(c)
          , u = {
            back: "index-module_back_epPNe"
        }
          , s = function(e, t) {
            var n = e.width
              , c = void 0 === n ? 800 : n
              , s = e.closable
              , d = void 0 === s || s
              , m = e.maskClosable
              , v = void 0 === m || m
              , f = e.className
              , p = (0,
            a.useRef)()
              , _ = (0,
            a.forwardRef)((function(e, n) {
                var s = e.title
                  , m = (0,
                a.useState)(!1)
                  , p = (0,
                o.Z)(m, 2)
                  , _ = p[0]
                  , g = p[1]
                  , h = function() {
                    g(!0)
                }
                  , y = function() {
                    g(!1)
                };
                return (0,
                a.useImperativeHandle)(n, (function() {
                    return {
                        open: h,
                        close: y
                    }
                }
                )),
                _ ? a.createElement(r.Z, {
                    className: l()(u.mask, f),
                    onCancel: y,
                    visible: _,
                    title: s,
                    footer: null,
                    width: c,
                    closable: d,
                    maskClosable: v
                }, a.createElement(t, (0,
                i.Z)({}, e, {
                    close: y
                }))) : null
            }
            ));
            return {
                FormModal: (0,
                a.useCallback)((function(e) {
                    return a.createElement(_, (0,
                    i.Z)({
                        ref: p
                    }, e))
                }
                ), []),
                modalRef: p
            }
        }
          , d = s
    },
    54004: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            default: function() {
                return jn
            }
        });
        n(59749),
        n(81919),
        n(99474),
        n(12826),
        n(77049),
        n(21694),
        n(7409),
        n(86544),
        n(84254),
        n(752),
        n(76265),
        n(21057),
        n(74407);
        var r = n(36584)
          , i = n(76109)
          , o = n(10369)
          , a = n(46514)
          , c = n(25720)
          , l = (n(35666),
        n(34284),
        n(25728),
        n(60228),
        n(76801),
        n(89730),
        n(47522),
        n(64043),
        n(57267),
        n(34338),
        n(61514),
        n(43843),
        n(70560),
        n(69358),
        n(38077),
        n(91719),
        n(48324),
        n(67294))
          , u = n(26353)
          , s = n(93649)
          , d = n(94184)
          , m = n.n(d)
          , v = n(96486)
          , f = n(96208)
          , p = n(93411)
          , _ = n(41865)
          , g = n(35929)
          , h = n(81972)
          , y = n(10673)
          , x = n(64164)
          , w = n(18860)
          , b = n(74021)
          , k = (n(70384),
        n(50886),
        n(94698),
        n(16422),
        n(26032))
          , E = n(80163)
          , C = (n(52983),
        n(83763))
          , Z = n(78419)
          , I = n(86405);
        n(6568),
        n(45516);
        window.location.href.indexOf("ykt.eduyun.cn") > -1 || window.location.href.indexOf("localhost") > -1 || window.location.href.indexOf("127.0.0.1");
        var S = n(24812);
        n(25297),
        n(90255),
        n(86961);
        var P = n(88454)
          , N = n(96288)
          , R = n(92474)
          , O = n(26500)
          , T = {}
          , L = {}
          , j = function() {
            var e = (0,
            o.Z)(regeneratorRuntime.mark((function e(t) {
                var n, r, i, o;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            n = t.alias,
                            r = t.onLogined,
                            i = t.onNewMessage,
                            T[n] ? L[n] = i : (o = new O.Z,
                            o.open({
                                url: k["default"].api["iot-push-ws"],
                                appId: k["default"].app.appid,
                                disableSharedWorker: !0
                            }),
                            o.setAlias("".concat(n)),
                            T[n] = o,
                            L[n] = i,
                            o.onLogined = r,
                            o.onNewMessage = function(e) {
                                L[n] && L[n](e)
                            }
                            );
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , M = n(41138)
          , A = n(76995)
          , D = n(74568)
          , U = n(52626)
          , F = n(86748)
          , z = n(22085)
          , q = n(60553)
          , H = n(4165)
          , B = n(94415)
          , W = n(21975)
          , X = n(53530)
          , V = n(37865)
          , J = n(84062)
          , Q = n(73059)
          , G = (n(98981),
        n(88362))
          , K = n.n(G)
          , Y = n(67840)
          , $ = n(60592)
          , ee = (n(6203),
        n(12600))
          , te = n(93606)
          , ne = n(1859)
          , re = n(82563)
          , ie = (n(79288),
        n(17604))
          , oe = n(72611)
          , ae = n(72209)
          , ce = n(34394)
          , le = (n(29356),
        n(87314))
          , ue = (n(83155),
        n(37107))
          , se = n.n(ue)
          , de = (n(73964),
        {
            "course-player": "index-module_course-player_uq5bZ",
            markerExercise: "index-module_markerExercise_6+JoR",
            box: "index-module_box_tSctU",
            header: "index-module_header_zN2MV",
            title: "index-module_title_vgMfR",
            index: "index-module_index_7boRm",
            skip: "index-module_skip_HRYs0",
            body: "index-module_body_-4uJX",
            footer: "index-module_footer_wewZ2",
            greenMarker: "index-module_greenMarker_Bljy5",
            alertModal: "index-module_alertModal_mOiea"
        })
          , me = se().ExamAnswerPlayer
          , ve = se().ExamAnswerEventBus
          , fe = se().ExamAnswerEvent
          , pe = 0
          , _e = {}
          , ge = {
            AnswerAll: 0,
            CorrectNum: 1,
            CorrectRate: 2
        };
        function he(e) {
            var t = e.questions
              , n = e.sessionId
              , r = e._useLocalAnswer
              , i = e.onCancel
              , o = e.passed
              , a = e.allowSkip
              , u = e.completionType
              , s = e.completionDetail
              , d = e.setPlayRef
              , m = e.libraryId
              , v = e.courseId
              , f = e.resourceId
              , p = e.status
              , _ = void 0 === p ? 0 : p
              , g = (0,
            l.useState)(!1)
              , h = (0,
            c.Z)(g, 2)
              , y = h[0]
              , x = h[1]
              , w = (0,
            l.useState)(!1)
              , b = (0,
            c.Z)(w, 2)
              , E = b[0]
              , Z = b[1]
              , S = (0,
            l.useState)(!1)
              , P = (0,
            c.Z)(S, 2)
              , N = P[0]
              , R = P[1]
              , O = (0,
            l.useState)(null)
              , T = (0,
            c.Z)(O, 2)
              , L = T[0]
              , j = T[1]
              , M = (0,
            l.useState)(0)
              , A = (0,
            c.Z)(M, 2)
              , D = A[0]
              , U = A[1]
              , F = (0,
            l.useState)(null)
              , z = (0,
            c.Z)(F, 2)
              , q = z[0]
              , H = z[1]
              , B = (0,
            l.useState)(r)
              , W = (0,
            c.Z)(B, 2)
              , X = W[0]
              , V = W[1]
              , J = (0,
            l.useState)(!0)
              , Q = (0,
            c.Z)(J, 2)
              , G = Q[0]
              , K = Q[1]
              , $ = (0,
            l.useState)(Date.now())
              , ee = (0,
            c.Z)($, 2)
              , te = ee[0]
              , re = ee[1]
              , ie = function() {
                return new Promise((function(e) {
                    Y.Z.confirm({
                        content: "离开将无法继续学习，确认离开吗？",
                        okText: "确定",
                        onOk: function() {
                            e(!0),
                            (0,
                            C.XN)({
                                eventName: "edu_Platform_exercise_quit_click",
                                params: {
                                    channel_code: (0,
                                    I.getPageChannelCode)(),
                                    column_code: m,
                                    resource_id: f,
                                    training_id: k["default"].library.trainingId,
                                    course_id: v,
                                    answer_type: (0,
                                    ne.dz)(_),
                                    exercise_type: "断点练习"
                                }
                            })
                        },
                        cancelText: "继续作答",
                        onCancel: function() {
                            e(!1),
                            (0,
                            C.XN)({
                                eventName: "edu_Platform_exercise_page",
                                params: {
                                    channel_code: (0,
                                    I.getPageChannelCode)(),
                                    column_code: m,
                                    resource_id: f,
                                    training_id: k["default"].library.trainingId,
                                    course_id: v,
                                    answer_type: (0,
                                    ne.dz)(_),
                                    exercise_type: "断点练习"
                                }
                            })
                        }
                    })
                }
                ))
            };
            (0,
            l.useEffect)((function() {
                d({
                    onExit: ie
                }),
                _e = {},
                pe = 0,
                (0,
                C.XN)({
                    eventName: "edu_Platform_exercise_page",
                    params: {
                        channel_code: (0,
                        I.getPageChannelCode)(),
                        column_code: m,
                        resource_id: f,
                        training_id: k["default"].library.trainingId,
                        course_id: v,
                        answer_type: (0,
                        ne.dz)(_),
                        exercise_type: "断点练习"
                    }
                }),
                (0,
                C._A)({
                    eventName: "edu_Platform_exercise_click",
                    params: {
                        channel_code: (0,
                        I.getPageChannelCode)(),
                        column_code: m,
                        resource_id: f,
                        training_id: k["default"].library.trainingId,
                        course_id: v,
                        answer_type: (0,
                        ne.dz)(_),
                        exercise_type: "断点练习"
                    }
                }),
                ve.on(fe.QUESTIONCHANGED, (function(e) {
                    H(e),
                    U(e.index),
                    pe = e.index,
                    X && !_e[e.id] && 0 !== e.state && (_e[e.id] = !0,
                    e.editable ? (Z(!0),
                    x(!1)) : (Z(!1),
                    x(!0),
                    pe + 1 === t.length && (x(!1),
                    R(!0))))
                }
                )),
                ve.on(fe.USERANSWERCHANGED, (function(e) {
                    1 === e.state ? Z(!0) : Z(!1)
                }
                )),
                ve.on("statisticChanged", (function(e) {
                    j(e)
                }
                ));
                var e = function(e) {
                    return e.preventDefault(),
                    e.returnValue = "离开将无法继续学习，确认离开吗？",
                    "离开将无法继续学习，确认离开吗？"
                };
                return window.addEventListener("beforeunload", e),
                function() {
                    _e = {},
                    window.removeEventListener("beforeunload", e)
                }
            }
            ), [te]);
            var oe = function() {
                _e[q.id] = !0,
                Z(!1),
                ve.emit(fe.COMMITQUESTION),
                ve.emit(fe.SHOWANALYSIS, !1),
                x(!0),
                D + 1 === t.length ? R(!0) : x(!0)
            }
              , ae = function() {
                D + 1 < t.length && (ve.emit(fe.NEXTQUESTION),
                x(!1))
            }
              , ue = function() {
                var e = L || {}
                  , t = e.totalCount
                  , n = void 0 === t ? 1 : t
                  , r = e.doneCount
                  , a = e.correctCount
                  , c = r === n
                  , l = function(e) {
                    Y.Z.confirm({
                        content: e,
                        okText: "重新作答",
                        onOk: function() {
                            V(!1),
                            K(!1),
                            R(!1),
                            setTimeout((function() {
                                K(!0),
                                re(Date.now())
                            }
                            ), 50)
                        },
                        cancelText: "退出学习",
                        onCancel: function() {
                            i(!1, c),
                            (0,
                            C.XN)({
                                eventName: "edu_Platform_exercise_quit_click",
                                params: {
                                    channel_code: (0,
                                    I.getPageChannelCode)(),
                                    column_code: m,
                                    resource_id: f,
                                    training_id: k["default"].library.trainingId,
                                    course_id: v,
                                    answer_type: (0,
                                    ne.dz)(_),
                                    exercise_type: "断点练习"
                                }
                            })
                        }
                    })
                }
                  , d = u === ge.AnswerAll;
                if (u === ge.CorrectNum ? d = a >= s : u === ge.CorrectRate && (d = a / n * 100 >= s),
                o || d)
                    i(d, c);
                else {
                    if (u === ge.AnswerAll)
                        return l("您还有".concat(n - r, "题未答，退出练习后将不能继续学习")),
                        !1;
                    if (u === ge.CorrectNum)
                        return l("您只答对了".concat(a, "道题目，需要答对").concat(s, "道题目后才能继续学习")),
                        !1;
                    if (u === ge.CorrectRate) {
                        var p = Math.round(a / n * 100);
                        return l("您答题正确率为".concat(p, "%，需正确率达到").concat(s, "%后才能继续学习")),
                        !1
                    }
                }
            }
              , se = function() {
                i(!0, !0)
            }
              , he = function() {
                return N ? l.createElement(le.Z, {
                    type: "primary",
                    onClick: function() {
                        ve.emit(fe.DELETELOCALANSWER);
                        var e = L || {}
                          , t = e.totalCount
                          , n = void 0 === t ? 1 : t
                          , r = e.correctCount;
                        (0,
                        C._A)({
                            eventName: "edu_Platform_exercise_submit_click",
                            params: {
                                channel_code: (0,
                                I.getPageChannelCode)(),
                                column_code: m,
                                resource_id: f,
                                training_id: k["default"].library.trainingId,
                                course_id: v,
                                answer_type: (0,
                                ne.dz)(_),
                                answer_num: n,
                                answer_correctly_num: r,
                                exercise_type: "断点练习"
                            }
                        }),
                        ue()
                    }
                }, "完成") : E ? l.createElement(le.Z, {
                    type: "primary",
                    onClick: oe
                }, "确定") : y ? l.createElement(le.Z, {
                    type: "primary",
                    onClick: ae
                }, "下一题") : void 0
            };
            return l.createElement("div", {
                className: de.markerExercise
            }, l.createElement("div", {
                className: de.box
            }, l.createElement("div", {
                className: de.header
            }, l.createElement("div", null, l.createElement("span", {
                className: de.title
            }, "练习"), l.createElement("span", {
                className: de.index
            }, D + 1), l.createElement("span", null, "/", t.length)), l.createElement("div", null, a && !o && l.createElement("a", {
                className: de.skip,
                onClick: function() {
                    se()
                }
            }, "跳过"), o && l.createElement(ce.Z, {
                type: "close",
                onClick: function() {
                    ue()
                }
            }))), l.createElement("div", {
                className: de.body
            }, G && l.createElement(me, {
                key: "answer_area_".concat(n),
                config: {
                    useSession: !1,
                    sessionId: n,
                    status: 0,
                    examModel: "simplify",
                    questions: t,
                    enableLocalMark: !0,
                    answerMode: 0,
                    useLocalAnswer: X,
                    gaea_js_config: {
                        "static.url": "//s1.ykt.cbern.com.cn/",
                        "cs.download.url": "//cdncs.ykt.cbern.com.cn/v0.1/static",
                        "general-ability-common.exam.ndplayer_version": "1.10.0"
                    },
                    cdnCs: "//cdncs.ykt.cbern.com.cn"
                },
                startFromUndo: X,
                questionRenderOptions: {
                    showScore: !1,
                    showMarkCando: !1,
                    attachmentsAllowed: !1,
                    smartKeyboard: {
                        enable: !1
                    }
                },
                lang: "zh-CN"
            })), l.createElement("div", {
                className: de.footer
            }, he())))
        }
        n(62506);
        var ye = {
            M3U8_FILE: 6,
            MP3_FILE: 3,
            MP4_FILE: 2,
            FLASH_FILE: 1
        };
        function xe(e) {
            var t, n = [], r = we(e);
            if (r[ye.M3U8_FILE].length > 0 ? t = r[ye.M3U8_FILE] : r[ye.MP4_FILE].length > 0 ? t = r[ye.MP4_FILE] : r[ye.FLASH_FILE].length > 0 ? t = r[ye.FLASH_FILE] : r[ye.MP3_FILE].length > 0 && (t = r[ye.MP3_FILE]),
            t) {
                var i = t.map((function(t) {
                    var n;
                    return t.data.src = null === (n = e.find((function(e) {
                        return e.quality === t.quality && e.type === t.type && e.audio_index === t.audio_index
                    }
                    )).urls) || void 0 === n ? void 0 : n[0],
                    t
                }
                ))
                  , o = i.length;
                if (o) {
                    for (var a = null, c = -1, l = 0; l < o; l++) {
                        var u = i[l];
                        n.push(u.data),
                        u.quality > c && (c = u.quality,
                        a = {
                            src: "".concat(u.data.src),
                            type: "".concat(u.data.type),
                            label: "默认"
                        })
                    }
                    a && n.splice(0, 0, a)
                }
            }
            return n
        }
        function we(e) {
            for (var t = {
                6: [],
                3: [],
                2: [],
                1: []
            }, n = 0; n < e.length; n++)
                t[e[n].type] && (e[n].data = {
                    src: "",
                    type: {
                        6: "application/x-mpegURL",
                        2: "video/mp4",
                        1: "video/x-flv"
                    }[e[n].type],
                    label: {
                        0: "极速",
                        1: "流畅",
                        2: "标清",
                        3: "高清",
                        4: "超清"
                    }[e[n].quality]
                },
                t[e[n].type].push(e[n]));
            return t
        }
        function be(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function ke(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? be(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : be(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var Ee, Ce, Ze, Ie = {
            ALL: 1,
            PART: 2
        }, Se = {
            currentTime: 0,
            videoCurrentTime: 0
        };
        function Pe(e) {
            var t, n, r = e.resources, i = e.poster, a = e.trackInfo, u = e.aspectRatio, s = e.onPlayChange, d = e.onPlayFinish, m = e.onTimeUpdate, f = e.onReload, p = e.onReady, _ = void 0 === p ? function() {}
            : p, g = e.pageName, h = e.origin, y = e.controlSeeking, x = e.maxPosition, w = void 0 === x ? 0 : x, k = e.controlSpeed, E = e.forcedLogin, C = e.onlyone, Z = e.mediaType, S = void 0 === Z ? "video" : Z, P = e.userId, N = void 0 === P ? "" : P, R = e.activityId, O = void 0 === R ? "" : R, T = e.resourceId, L = void 0 === T ? "" : T, j = e.setPlayRef, M = void 0 === j ? function() {}
            : j, A = e.activityEvent, D = e.courseId, U = e.libraryId, F = e.limitPlaybackRate, z = (0,
            l.useState)(!1), q = (0,
            c.Z)(z, 2), H = q[0], B = q[1], W = (0,
            l.useState)(null), X = (0,
            c.Z)(W, 2), V = X[0], J = X[1], Q = (0,
            l.useState)(null), G = (0,
            c.Z)(Q, 2), K = G[0], $ = G[1], ee = (0,
            l.useState)(!0), te = (0,
            c.Z)(ee, 2), ne = te[0], ce = te[1], le = (0,
            l.useState)(null), ue = (0,
            c.Z)(le, 2), se = ue[0], me = ue[1], ve = (0,
            l.useState)(!1), fe = (0,
            c.Z)(ve, 2), pe = fe[0], _e = fe[1], ge = (0,
            l.useContext)(b.Z), ye = ge.userInfo;
            function we(e, t) {
                return t.map((function(t) {
                    return e.find((function(e) {
                        return e.id === t
                    }
                    ))
                }
                )).filter((function(e) {
                    return e
                }
                ))
            }
            function be(e, t, n) {
                if (t === Ie.ALL)
                    return e;
                if (n >= e.length)
                    return e;
                var r = []
                  , i = e.map((function(e) {
                    return e.id
                }
                ));
                while (r.length < n) {
                    var o = Math.floor(Math.random() * i.length)
                      , a = i[o];
                    r.includes(a) || r.push(a)
                }
                return we(e, r)
            }
            function Pe(e, t) {
                return Ne.apply(this, arguments)
            }
            function Ne() {
                return Ne = (0,
                o.Z)(regeneratorRuntime.mark((function e(t, n) {
                    var r, i, o, a, c, l, u, s, d, m, v, f;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                if (i = t.activity_event_behavior || {},
                                o = i.behavior_type,
                                a = i.data.paper_url,
                                "exercise" !== o || !a || (null === (r = t.progress) || void 0 === r ? void 0 : r.status) === ae.w.PASS && !n) {
                                    e.next = 36;
                                    break
                                }
                                return (0,
                                re.F5)(),
                                null === (c = Ee) || void 0 === c || c.pause(),
                                Ee.isFullscreen() && Ee.exitFullscreen(),
                                e.next = 7,
                                (0,
                                oe.ZP)().get(a);
                            case 7:
                                return l = e.sent,
                                u = l.data,
                                s = null,
                                d = t.activity_event_behavior.setting,
                                m = d.exercise_type,
                                v = d.exercise_num,
                                ce(!n),
                                e.next = 14,
                                ae.Z.getAnswerQuestionIds(t.id);
                            case 14:
                                if (f = e.sent,
                                0 !== f.length) {
                                    e.next = 22;
                                    break
                                }
                                return e.next = 18,
                                be(u.question, m, v);
                            case 18:
                                s = e.sent,
                                ce(!1),
                                e.next = 28;
                                break;
                            case 22:
                                if (s = we(u.question, f),
                                s.length === f.length) {
                                    e.next = 28;
                                    break
                                }
                                return e.next = 26,
                                be(u.question, m, v);
                            case 26:
                                s = e.sent,
                                ce(!1);
                            case 28:
                                return e.next = 30,
                                ae.Z.setAnswerQuestionIds(t.id, s.map((function(e) {
                                    return e.id
                                }
                                )));
                            case 30:
                                $(s),
                                J(t),
                                _e(!0),
                                setTimeout((function() {
                                    var e;
                                    null === (e = Ee) || void 0 === e || e.pause()
                                }
                                ), 800),
                                e.next = 37;
                                break;
                            case 36:
                                $(null);
                            case 37:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                Ne.apply(this, arguments)
            }
            (0,
            l.useEffect)((function() {
                var e = function() {
                    var e = (0,
                    o.Z)(regeneratorRuntime.mark((function e() {
                        var t, n, r, i, o;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    if ("video" !== S && "audio" !== S) {
                                        e.next = 19;
                                        break
                                    }
                                    return ae.Z.setKey(O, L),
                                    e.next = 4,
                                    ae.Z.getMarkerList();
                                case 4:
                                    t = e.sent,
                                    n = (null === A || void 0 === A ? void 0 : A[L]) || {},
                                    r = 0;
                                case 7:
                                    if (!(r < t.length)) {
                                        e.next = 16;
                                        break
                                    }
                                    if (o = t[r],
                                    2 !== Number(null === (i = n[o.condition_params.time]) || void 0 === i ? void 0 : i.status)) {
                                        e.next = 13;
                                        break
                                    }
                                    return o.progress.status = ae.w.PASS,
                                    e.next = 13,
                                    ae.Z.updateOneMarkerProgress(o.id, o.progress);
                                case 13:
                                    r++,
                                    e.next = 7;
                                    break;
                                case 16:
                                    (0,
                                    v.isEqual)(se, t) || me((0,
                                    v.cloneDeep)(t) || []),
                                    e.next = 20;
                                    break;
                                case 19:
                                    me([]);
                                case 20:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                e()
            }
            ), [A]);
            var Re = function() {
                return [{
                    audio_index: null,
                    data: {
                        label: "标清",
                        src: "https://gcdncs.101.com/v0.1/static/fish/media/test.mp4",
                        type: "video/mp4"
                    },
                    encrypt: !1,
                    encrypt_urls: null,
                    quality: 2,
                    size: 8945,
                    type: 2,
                    urls: ["https://gcdncs.101.com/v0.1/static/fish/media/test.mp4"]
                }]
            }
              , Oe = (0,
            l.useCallback)((function(e) {
                var t, n, r = e.time % 60, i = parseInt(e.time / 60, 10) % 60, o = parseInt(e.time / 3600, 10), a = function(e) {
                    return "00".concat(e).substr(-2)
                }, c = '<div class="marker-name">'.concat(a(o), ":").concat(a(i), ":").concat(a(r), " ").concat(e.text, "</div>");
                return (null === (t = e.data.progress) || void 0 === t ? void 0 : t.status) === ae.w.PASS && (c += '<div class="marker-redo" data-marker-id="'.concat(e.data.id, '">再做一次</div>')),
                (null === (n = e.data.progress) || void 0 === n ? void 0 : n.status) === ae.w.DOING && (c += '<div class="marker-continue" data-marker-id="'.concat(e.data.id, '">继续答题</div>')),
                "".concat(c)
            }
            ), [])
              , Te = (0,
            l.useMemo)((function() {
                return {
                    sources: xe((0,
                    I.isLocalhost)() ? Re() : r),
                    poster: i,
                    playbackRates: k ? [] : [.5, 1, 1.25, 1.5, 2],
                    mediaType: S,
                    markers: {
                        markerStyle: {
                            width: "4px",
                            borderRadius: "6px",
                            fontSize: "14px",
                            backgroundColor: "#FFFFFF"
                        },
                        markerTip: {
                            display: !0,
                            text: function(e) {
                                return "<div id='marker_".concat(e.data.id, "'>").concat(Oe(e), "</div>")
                            }
                        },
                        onMarkerReached: function(e) {
                            var t, n = function() {
                                var t = (0,
                                o.Z)(regeneratorRuntime.mark((function t() {
                                    var n, r, i;
                                    return regeneratorRuntime.wrap((function(t) {
                                        while (1)
                                            switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2,
                                                ae.Z.getMarker(e.data.id);
                                            case 2:
                                                if (i = t.sent,
                                                !(Math.ceil(Ee.currentTime()) >= (null === i || void 0 === i || null === (n = i.condition_params) || void 0 === n ? void 0 : n.time)) || null !== (r = Ee) && void 0 !== r && r.seeking()) {
                                                    t.next = 6;
                                                    break
                                                }
                                                return t.next = 6,
                                                Pe(i);
                                            case 6:
                                            case "end":
                                                return t.stop()
                                            }
                                    }
                                    ), t)
                                }
                                )));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }();
                            null !== (t = Ee) && void 0 !== t && t.seeking() ? setTimeout(n, 1e3) : n()
                        }
                    }
                }
            }
            ), [])
              , Le = (0,
            l.useCallback)(function() {
                var e = (0,
                o.Z)(regeneratorRuntime.mark((function e(t) {
                    var n, r, i;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                return n = -1 !== t.target.className.indexOf("marker-redo"),
                                r = t.target.getAttribute("data-marker-id"),
                                e.next = 4,
                                ae.Z.getMarker(r);
                            case 4:
                                return i = e.sent,
                                i.progress = ke(ke({}, i.progress), {}, {
                                    status: n ? ae.w.PASS : ae.w.DOING
                                }),
                                e.next = 8,
                                ae.Z.updateOneMarkerProgress(i.id, i.progress);
                            case 8:
                                return e.next = 10,
                                (0,
                                re.pS)({
                                    courseId: D,
                                    resourceId: L,
                                    markerTime: i.condition_params.time,
                                    markerState: i.progress.status === ae.w.PASS ? 2 : 1
                                });
                            case 10:
                                return e.next = 12,
                                Pe(i, !0);
                            case 12:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [])
              , je = (0,
            l.useCallback)((0,
            o.Z)(regeneratorRuntime.mark((function e() {
                var t, n, r, i, o, a, c, l, u, s, d, m, v, f, p, _, g, h, y;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (console.log("=== markerInit"),
                            se && 0 !== se.length && Ee) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return");
                        case 3:
                            for (Ee.markers.reset((null === se || void 0 === se ? void 0 : se.map((function(e) {
                                return {
                                    time: e.condition_params.time,
                                    text: e.name,
                                    data: e,
                                    class: e.progress.status === ae.w.PASS ? de.greenMarker : ""
                                }
                            }
                            ))) || []),
                            t = Ee.el().querySelectorAll(".marker-redo"),
                            n = 0; t && n < t.length; n++)
                                r = t[n],
                                r.addEventListener("click", Le);
                            for (i = Ee.el().querySelectorAll(".marker-continue"),
                            o = 0; i && o < i.length; o++)
                                a = i[o],
                                a.addEventListener("click", Le);
                            for (c = Ee.el().querySelectorAll(".vjs-tip"),
                            l = Ee.el().getBoundingClientRect(),
                            u = l.left,
                            s = l.right,
                            d = 0; c && d < c.length; d++)
                                m = c[d],
                                v = m.getBoundingClientRect(),
                                f = v.left,
                                p = v.right,
                                _ = v.width,
                                g = m.querySelector(".vjs-tip-inner"),
                                h = f - u,
                                y = s - p,
                                h < 0 && y < 0 || h > 0 && y > 0 ? g.style.position = "static" : h < 0 ? (g.style.position = "relative",
                                g.style.left = "".concat(Math.abs(h) - 2, "px"),
                                g.style.right = "auto") : y < 0 && (g.style.position = "relative",
                                g.style.left = "auto",
                                g.style.right = "".concat(Math.abs(y) - 2, "px")),
                                _ >= 200 && (g.style.width = "200px",
                                g.style.whiteSpace = "normal");
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))), [se]);
            (0,
            l.useEffect)((function() {
                se && 0 !== se.length && H && (console.log("=== useEffect play"),
                je(),
                Ee.on("useractive", je),
                Ee.one("play", je))
            }
            ), [se, H]);
            var Me = function() {
                var e = (0,
                o.Z)(regeneratorRuntime.mark((function e(t, n) {
                    var r, i;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                if (M(null),
                                (0,
                                re.eN)(),
                                !n) {
                                    e.next = 6;
                                    break
                                }
                                return e.next = 5,
                                ae.Z.setAnswerQuestionIds(V.id, []);
                            case 5:
                                ce(!1);
                            case 6:
                                if (V.progress.status === ae.w.PASS) {
                                    e.next = 16;
                                    break
                                }
                                return t ? V.progress.status = ae.w.PASS : !1 !== t && (V.progress.status = ae.w.DOING),
                                e.next = 10,
                                ae.Z.updateOneMarkerProgress(V.id, V.progress);
                            case 10:
                                return e.next = 12,
                                (0,
                                re.pS)({
                                    courseId: D,
                                    resourceId: L,
                                    markerTime: V.condition_params.time,
                                    markerState: V.progress.status === ae.w.PASS ? 2 : 1
                                });
                            case 12:
                                return e.next = 14,
                                ae.Z.getMarkerList();
                            case 14:
                                r = e.sent,
                                me(r);
                            case 16:
                                _e(!1),
                                V.progress.status === ae.w.PASS ? (Ee.ended() || Ee.play(),
                                $(null)) : Ee.currentTime() >= V.condition_params.time && (i = V.condition_params.time - 2,
                                Ee.currentTime(i >= 0 ? i : 0)),
                                J(null),
                                je();
                            case 20:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }()
              , Ae = function() {
            }
              , De = function(e, t) {
                Ee = t,
                (0,
                re.eN)(),
                _(e, t),
                console.log("=== handleReady"),
                B(!0)
            };
            (0,
            l.useEffect)((function() {
                Ce && clearInterval(Ce),
                F && Ee && (Ce = setInterval((function() {
                    Ae()
                }
                ), 1e3))
            }
            ), [F, Ee]),
            (0,
            l.useEffect)((function() {
                var e = function() {
                    var e;
                    document.hidden && (null === (e = Ee) || void 0 === e || e.pause())
                };
                return window.addEventListener("visibilitychange", e),
                function() {
                    window.removeEventListener("visibilitychange", e),
                    (0,
                    re.eN)(),
                    clearInterval(Ce)
                }
            }
            ), []);
            var Ue = function(e, t) {
                Ae(),
                document.hidden && (null === t || void 0 === t || t.pause()),
                e && (Se.videoCurrentTime = t.currentTime(),
                Se.currentTime = Date.now()),
                s(e, t)
            };
            return l.createElement(l.Fragment, null, l.createElement(ie.Z, {
                key: r.resource_id,
                className: "fish-ndrVideo vjs-big-play-centered",
                options: Te,
                trackInfo: a,
                pageName: g,
                onReady: De,
                aspectRatio: u,
                onPlayChange: Ue,
                onPlayFinish: d,
                onTimeUpdate: m,
                onReload: f,
                origin: h,
                controlSeeking: y,
                maxPosition: w,
                forcedLogin: E,
                onlyone: C
            }), pe && K && l.createElement(he, {
                setPlayRef: M,
                questions: K,
                sessionId: "".concat(V.id, "_").concat(N, "_").concat(K.map((function(e) {
                    return e.id.substring(0, 3)
                }
                )).join("")),
                _useLocalAnswer: ne,
                onCancel: Me,
                libraryId: U,
                courseId: D,
                resourceId: L,
                status: null === (t = V.progress) || void 0 === t ? void 0 : t.status,
                passed: (null === (n = V.progress) || void 0 === n ? void 0 : n.status) === ae.w.PASS,
                allowSkip: V.allow_skip,
                completionType: V.activity_event_behavior.setting.completion_type,
                completionDetail: V.activity_event_behavior.setting.completion_detail,
                questionProps: {
                    watermark: {
                        userInfo: ye
                    }
                }
            }))
        }
        var Ne = ["courseId", "resources", "onUploadProgress", "changeStudyStatus", "forcedLogin", "onlyone", "resourceMaxPos", "activityEvent", "reportToTrain", "from", "onPlay", "trainId", "libraryId"];
        function Re(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Oe(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Re(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Re(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var Te, Le, je, Me, Ae = ne.hX.NotStart, De = ne.hX.Studying, Ue = ne.hX.Finish, Fe = 1e4, ze = !1, qe = !1, He = null, Be = 0, We = null, Xe = !0, Ve = !1, Je = !1, Qe = !1, Ge = 0, Ke = 1, Ye = !1, $e = window.rawWindow || window, et = void 0 !== $e.orientation || /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent), tt = (0,
        l.forwardRef)((function(e, t) {
            var n, r, i, u = e.courseId, s = e.resources, d = e.onUploadProgress, m = e.changeStudyStatus, f = void 0 === m ? function() {}
            : m, p = e.forcedLogin, _ = void 0 !== p && p, g = e.onlyone, y = void 0 !== g && g, w = e.resourceMaxPos, Z = e.activityEvent, S = e.reportToTrain, P = void 0 === S ? (0,
            o.Z)(regeneratorRuntime.mark((function e() {
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))) : S, N = e.from, R = e.onPlay, O = void 0 === R ? function() {}
            : R, T = e.trainId, L = e.libraryId, j = (0,
            $.Z)(e, Ne);
            Me = j.dataSessionId;
            var M = (0,
            l.useState)(!1)
              , A = (0,
            c.Z)(M, 2)
              , D = A[0]
              , U = A[1]
              , F = (0,
            l.useState)(null)
              , z = (0,
            c.Z)(F, 2)
              , q = z[0]
              , H = z[1]
              , B = (0,
            l.useState)({})
              , W = (0,
            c.Z)(B, 2)
              , X = W[0]
              , V = W[1]
              , J = (0,
            l.useState)(!1)
              , Q = (0,
            c.Z)(J, 2)
              , G = Q[0]
              , ie = Q[1]
              , oe = (0,
            l.useState)(!1)
              , ae = (0,
            c.Z)(oe, 2)
              , ce = ae[0]
              , le = ae[1]
              , ue = (0,
            l.useState)(0)
              , se = (0,
            c.Z)(ue, 2)
              , me = se[0]
              , ve = se[1]
              , fe = (0,
            l.useContext)(b.Z)
              , pe = fe.userInfo
              , _e = function(e, t) {
                return "videoPlayTimes_".concat(e, "_").concat(t)
            }
              , ge = function() {
                var e = _e(s.resource_id, Me);
                window.sessionStorage.removeItem(e)
            }
              , he = function() {
                var e, t = _e(s.resource_id, Me);
                return (null === (e = window.sessionStorage.getItem(t)) || void 0 === e ? void 0 : e.split(",")) || []
            }
              , ye = function(e) {
                var t = _e(s.resource_id, Me);
                try {
                    var n, r = (null === (n = window.sessionStorage.getItem(t)) || void 0 === n ? void 0 : n.split(",")) || [];
                    if (r.includes(e.toString()))
                        return;
                    r.push(e),
                    window.sessionStorage.setItem(t, r.join(","))
                } catch (i) {
                    console.log(i)
                }
            }
              , xe = function(e) {
                var t, n = !(null === (t = j.progressConfig) || void 0 === t || !t.spi);
                if (!n)
                    return !0;
                var r = _e(s.resource_id, Me);
                try {
                    var i, o = (null === (i = window.sessionStorage.getItem(r)) || void 0 === i ? void 0 : i.split(",")) || [], a = o.includes(e.toString());
                    if (!a)
                        for (var c = 30, l = e - c; l <= e + c && !a; l++)
                            a = o.includes(e.toString());
                    return a
                } catch (u) {
                    return console.log(u),
                    !1
                }
            }
              , we = function(e, t) {
                if (!He || xe(t)) {
                    for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
                        r[i - 2] = arguments[i];
                    return P.apply(void 0, [e, t].concat(r))
                }
            }
              , be = function(e, t) {
                if (!He || xe(t)) {
                    for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
                        r[i - 2] = arguments[i];
                    return f.apply(void 0, [e, t].concat(r))
                }
            }
              , ke = function() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : We;
                if (t > 0) {
                    var n = Math.ceil(He.duration());
                    e = n > 0 && t >= n ? Ue : De
                } else
                    e = Ae;
                return e
            };
            (0,
            l.useImperativeHandle)(t, (function() {
                return {
                    stopVideo: function() {
                        He && !He.paused() && (He.pause(),
                        Y.Z.warn({
                            content: "你已在其他端进入学习，本端自动暂停学习。",
                            getContainer: function() {
                                return He.el()
                            },
                            className: de.alertModal
                        }))
                    },
                    reportVideoBegined: function() {
                        if (He && !He.paused()) {
                            var e = Math.ceil(He.currentTime())
                              , t = Math.ceil(He.duration());
                            e > t && (e = t);
                            var n = ke(e);
                            we(n, e, !1, !0)
                        }
                    }
                }
            }
            )),
            (0,
            l.useEffect)((function() {
                "e_exercise_activity" === s.resource_type && ie(!0),
                Ye = !1
            }
            ), [s]);
            var Ee = function() {
                var e = (0,
                o.Z)(regeneratorRuntime.mark((function e(t) {
                    var n, r, i, o;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                if (r = t.currentPage,
                                i = t.pageCount,
                                i) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return");
                            case 3:
                                if (ze = !0,
                                Me) {
                                    e.next = 7;
                                    break
                                }
                                return console.log("not login, document not trigger report data"),
                                e.abrupt("return");
                            case 7:
                                o = r,
                                o > i && (o = i),
                                Ke = o,
                                console.log("document trigger report data", o),
                                o === i && (clearTimeout(je),
                                we(Ue, i)),
                                qe = Math.max((null === w || void 0 === w || null === (n = w[s.resource_id]) || void 0 === n ? void 0 : n.pos) || o) === i,
                                d && d(),
                                "prepare" !== N && (0,
                                re.Xq)({
                                    documentId: s.resource_id,
                                    userId: Me,
                                    position: o
                                }),
                                be(qe ? Ue : De, o);
                            case 16:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , Ce = function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                Me && (clearTimeout(je),
                je = setTimeout((0,
                o.Z)(regeneratorRuntime.mark((function t() {
                    var n, r;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                if (!qe) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return");
                            case 2:
                                if (t.prev = 2,
                                "prepare" === N) {
                                    t.next = 7;
                                    break
                                }
                                return t.next = 6,
                                we(De, Ke);
                            case 6:
                                n = t.sent;
                            case 7:
                                t.next = 11;
                                break;
                            case 9:
                                t.prev = 9,
                                t.t0 = t["catch"](2);
                            case 11:
                                "prepare" !== N && e(1e3 * ((null === (r = n) || void 0 === r ? void 0 : r.frequency) || 60));
                            case 12:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, null, [[2, 9]])
                }
                ))), t))
            }
              , Ze = function() {
                return !!He && He.playbackRate() > 1
            }
              , Ie = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (Me && xe(e)) {
                    try {
                        "prepare" !== N && (0,
                        re.Mz)({
                            videoId: s.resource_id || s.id,
                            userId: Me,
                            position: e,
                            immediate: t
                        })
                    } catch (n) {}
                    d && d()
                }
            }
              , Se = function e() {
                Me && (clearTimeout(Te),
                Te = setTimeout((0,
                o.Z)(regeneratorRuntime.mark((function t() {
                    var n;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                n = Math.ceil(He.currentTime()),
                                Ie(n, !1),
                                n < Math.ceil(He.duration()) && e();
                            case 3:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                ))), Fe))
            }
              , Re = function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                Me && (clearTimeout(Le),
                Le = setTimeout((0,
                o.Z)(regeneratorRuntime.mark((function t() {
                    var n, r, i;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                if (n = Math.ceil(He.currentTime()),
                                t.prev = 1,
                                "prepare" === N) {
                                    t.next = 6;
                                    break
                                }
                                return t.next = 5,
                                we(De, n, Ze());
                            case 5:
                                r = t.sent;
                            case 6:
                                t.next = 11;
                                break;
                            case 8:
                                t.prev = 8,
                                t.t0 = t["catch"](1),
                                console.error(t.t0);
                            case 11:
                                "prepare" !== N && n < Math.ceil(He.duration()) && e(1e3 * ((null === (i = r) || void 0 === i ? void 0 : i.frequency) || 60));
                            case 12:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, null, [[1, 8]])
                }
                ))), t))
            }
              , $e = function() {
                clearTimeout(Te),
                clearTimeout(Le)
            }
              , tt = function() {
                if (ze && (!Je || !qe)) {
                    var e = (He ? Je : qe) ? Ue : De
                      , t = He ? Ge : Ke;
                    Ie(t, !0),
                    "prepare" !== N && we(e, t),
                    be(e, t)
                }
                $e()
            }
              , nt = function() {
                He && (Qe = !0)
            }
              , rt = function(e) {
                if (e) {
                    Je = !0,
                    $e();
                    var t = Math.ceil(e.duration());
                    We = t || 0,
                    Ie(t, !0),
                    "prepare" !== N && we(Ue, t),
                    be(Ue, t)
                }
            }
              , it = (0,
            v.debounce)((function(e, t) {
                var n, r, i;
                ze = e,
                console.log("===== onVideoPlayChange  resource_id： ".concat(s.resource_id), e, Math.ceil(t.duration()), Math.ceil(t.currentTime()));
                var o = Math.max(X || 0, (null === w || void 0 === w || null === (n = w[s.resource_id]) || void 0 === n ? void 0 : n.pos) || 0);
                if (e && !Ye && !o && 0 === Math.floor(t.currentTime()) && null !== (r = j.videoStudyConfig) && void 0 !== r && r.alert_before_study && (null === (i = j.state) || void 0 === i || !i[s.resource_id]))
                    return Ye = !0,
                    t.pause(),
                    void Y.Z.info({
                        title: "提示",
                        icon: null,
                        content: j.videoStudyConfig.alert_content || "须学习完课程的视频并完成相应测试题才可获得该课程视频的学时",
                        okText: "我知道了",
                        onOk: function() {
                            t.play()
                        }
                    });
                Ye = !0;
                var a = Math.ceil(t.currentTime())
                  , c = Math.ceil(t.duration());
                a > c && (a = c);
                var l = ke(a);
                if (!0 === e && (window.postMessage({
                    type: "playStart"
                }, "*"),
                O(),
                we(l, a, !1, !0),
                !0 === Xe && (Xe = !1,
                console.log("===== lastPos: ".concat(Be, "  maxPos: ").concat(We)),
                We > 0 && We < c ? (t.currentTime(We),
                console.log("===== seekTo: ".concat(We))) : Be > 0 && Be < c && (t.currentTime(Be),
                console.log("===== seekTo: ".concat(Be)))),
                $e(),
                Se(),
                ke() !== Ue && Re(6e4),
                !Qe)) {
                    var u = ke();
                    be(u, a)
                }
                Ve || Je || e || Qe ? (Ve = !1,
                Qe = !1) : ($e(),
                Ie(a, !1),
                "prepare" !== N && we(l, a))
            }
            ), 300)
              , ot = function(e, t) {
                He = t,
                t.on("seeking", (function() {
                    var e, t;
                    Ve = !0;
                    var n = 2 !== (null === (e = j.state) || void 0 === e ? void 0 : e[s.resource_id]) && !1 === (null === (t = j.progressConfig) || void 0 === t ? void 0 : t.is_allow_drag);
                    if (n) {
                        var r = he()
                          , i = r.length > 0 ? Math.max.apply(null, r) : 0;
                        He.currentTime() - 1 > i && He.currentTime(i)
                    }
                }
                ))
            }
              , at = function(e) {
                Ge = Math.ceil(e),
                !He || He.paused() || Ve || ye(Ge)
            };
            (0,
            l.useEffect)((function() {
                return (0,
                o.Z)(regeneratorRuntime.mark((function e() {
                    var t, n, r, i, o, c, l, d, m, v;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                if (Me) {
                                    e.next = 3;
                                    break
                                }
                                return U(!0),
                                e.abrupt("return");
                            case 3:
                                if (window.addEventListener("beforeunload", tt),
                                n = !1,
                                r = "teacherTraining" === (null === (t = j.progressConfig) || void 0 === t ? void 0 : t.type),
                                !(r && T && Me)) {
                                    e.next = 11;
                                    break
                                }
                                return e.next = 9,
                                (0,
                                re.Vh)(T, u, Me);
                            case 9:
                                n = e.sent,
                                n && Y.Z.warn({
                                    content: "你的学习记录被判定为异常，请重新学习课程。"
                                });
                            case 11:
                                if ("document" !== s.resource_type) {
                                    e.next = 24;
                                    break
                                }
                                return console.log("document init report data"),
                                e.next = 15,
                                (0,
                                re.xC)({
                                    documentId: s.resource_id || s.id,
                                    userId: Me
                                });
                            case 15:
                                if (e.t0 = e.sent,
                                e.t0) {
                                    e.next = 18;
                                    break
                                }
                                e.t0 = 1;
                            case 18:
                                o = e.t0,
                                c = (null === w || void 0 === w || null === (i = w[s.resource_id]) || void 0 === i ? void 0 : i.pos) || 1,
                                l = 1,
                                l = n && o > c ? c : Math.max(o, c),
                                H(l),
                                Ce(6e4);
                            case 24:
                                if ("video" !== s.resource_type && "audio" !== s.resource_type && "x_video" !== s.resource_type) {
                                    e.next = 44;
                                    break
                                }
                                return console.log("video init report data"),
                                Xe = !0,
                                Ve = !1,
                                Je = !1,
                                Qe = !1,
                                e.next = 32,
                                (0,
                                re.Tc)({
                                    videoId: s.resource_id || s.id,
                                    userId: Me
                                });
                            case 32:
                                if (e.t1 = e.sent,
                                e.t1) {
                                    e.next = 35;
                                    break
                                }
                                e.t1 = 0;
                            case 35:
                                m = e.t1,
                                v = (null === w || void 0 === w || null === (d = w[s.resource_id]) || void 0 === d ? void 0 : d.pos) || 0,
                                n && m > v ? (Be = v,
                                We = v) : (Be = m,
                                We = Math.max(m, v)),
                                V(Oe(Oe({}, X), {}, (0,
                                a.Z)({}, s.resource_id, Be))),
                                ge(),
                                ye(Be),
                                ye(We),
                                console.log("===== setVideoLastPos  lastPos：".concat(m, "  videoLastMaxPos：").concat(We)),
                                U(!0);
                            case 44:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))(),
                function() {
                    Me && (tt(),
                    window.removeEventListener("beforeunload", tt)),
                    ze = !1,
                    He = null,
                    Be = 0,
                    We = null,
                    Xe = !0,
                    Ve = !1,
                    Je = !1,
                    Qe = !1,
                    Ge = 0,
                    Ye = !1,
                    V({})
                }
            }
            ), [s, w]),
            (0,
            l.useEffect)((function() {
                if (D && s)
                    var e = setInterval((function() {
                        He && null !== We && (clearInterval(e),
                        He.one("canplay", (function() {
                            if ("prepare" !== N)
                                if (We) {
                                    var e = ke(We);
                                    we(e, We)
                                } else
                                    we(Ae, 0)
                        }
                        )))
                    }
                    ), 200)
            }
            ), [s, D]);
            var ct = (0,
            l.useCallback)((0,
            v.debounce)((function() {
                var e, t = !(null === (e = j.progressConfig) || void 0 === e || !e.spi);
                if (t) {
                    var n = document.querySelector(".course-video video");
                    if (null !== n.getAttribute("style")) {
                        var r = document.querySelector(".course-video").parentElement;
                        r.innerText = "不支持在小窗口播放，请关闭小窗口刷新网页重试！",
                        r.style.fontSize = "20px",
                        r.style.lineHeight = "120px",
                        r.style.textAlign = "center",
                        r.style.background = "#fff"
                    }
                }
            }
            ), 200));
            (0,
            l.useEffect)((function() {
                return window.addEventListener("resize", ct),
                function() {
                    window.removeEventListener("resize", ct)
                }
            }
            ), []);
            var lt, ut, st, dt, mt, vt, ft, pt, _t, gt, ht, yt, xt = (0,
            l.useCallback)((0,
            v.debounce)((function() {
                Y.Z.info({
                    closable: !0,
                    centered: !0,
                    width: 550,
                    title: "提示",
                    okText: "我知道了",
                    content: "请在WEB端或者APP端观看",
                    afterClose: function() {
                        U(!1)
                    }
                })
            }
            ), 1e3), []), wt = !(null === (n = j.progressConfig) || void 0 === n || !n.spi);
            if (wt && et)
                return xt(),
                null;
            if (("video" === s.resource_type || "audio" === s.resource_type) && null !== (r = s.video_extend) && void 0 !== r && r.urls)
                return D ? l.createElement("div", {
                    className: de["course-player"]
                }, l.createElement(Pe, (0,
                x.Z)({
                    libraryId: L,
                    key: s.resource_id,
                    courseId: u,
                    resources: null === (lt = s.video_extend) || void 0 === lt ? void 0 : lt.urls,
                    poster: null !== (ut = null === (st = s.video_extend) || void 0 === st ? void 0 : st.front_cover_url) && void 0 !== ut ? ut : "",
                    onReady: ot,
                    onPlayChange: it,
                    onPlayFinish: rt,
                    onReload: nt,
                    onTimeUpdate: at,
                    origin: "TCH",
                    activityEvent: Z,
                    controlSeeking: 2 !== (null === (dt = j.state) || void 0 === dt ? void 0 : dt[s.resource_id]) && !1 === (null === (mt = j.progressConfig) || void 0 === mt ? void 0 : mt.is_allow_drag),
                    maxPosition: We,
                    controlSpeed: !1 === (null === (vt = j.progressConfig) || void 0 === vt ? void 0 : vt.is_allow_speed),
                    forcedLogin: _,
                    onlyone: y,
                    mediaType: s.resource_type,
                    userId: j.dataSessionId,
                    activityId: s.activity_id,
                    resourceId: s.resource_id
                }, j))) : null;
            if ("x_video" === s.resource_type && s.urls)
                return D ? l.createElement("div", {
                    className: de["course-player"]
                }, l.createElement(Pe, (0,
                x.Z)({
                    key: s.id,
                    courseId: u,
                    resources: s.urls,
                    poster: null !== (ft = s.cover) && void 0 !== ft ? ft : "",
                    onReady: ot,
                    onPlayChange: it,
                    onPlayFinish: rt,
                    onReload: nt,
                    origin: "TCH",
                    activityEvent: Z,
                    controlSeeking: 2 !== (null === (pt = j.state) || void 0 === pt ? void 0 : pt[s.resource_id]) && !1 === (null === (_t = j.progressConfig) || void 0 === _t ? void 0 : _t.is_allow_drag),
                    maxPosition: We,
                    controlSpeed: !1 === (null === (gt = j.progressConfig) || void 0 === gt ? void 0 : gt.is_allow_speed),
                    forcedLogin: _,
                    onlyone: y,
                    userId: j.dataSessionId,
                    activityId: s.activity_id,
                    resourceId: s.resource_id
                }, j))) : null;
            if ("document" === s.resource_type && null !== (i = s.document_extend) && void 0 !== i && i.files)
                return O(),
                l.createElement(ee.Z, (0,
                x.Z)({
                    key: s.resource_id,
                    data: Oe(Oe({
                        resource_id: s.resource_id
                    }, s.document_extend), {}, {
                        init_page_num: q
                    }),
                    beginPage: q,
                    onPageChange: Ee,
                    origin: "TCH",
                    controlSeeking: 2 !== (null === (ht = j.state) || void 0 === ht ? void 0 : ht[s.resource_id]) && (!!j.progressConfig && !j.progressConfig.is_allow_drag),
                    maxPosition: Math.max((null === w || void 0 === w || null === (yt = w[s.resource_id]) || void 0 === yt ? void 0 : yt.pos) || q + 1)
                }, j));
            if ("e_exercise_activity" === s.resource_type) {
                var bt, kt, Et;
                O();
                var Ct = function(e) {
                    var t;
                    if (2 !== (null === (t = j.state) || void 0 === t ? void 0 : t[s.resource_id])) {
                        var n = e || {}
                          , r = n.totalCount
                          , i = void 0 === r ? 1 : r
                          , o = n.correctCount
                          , a = void 0 === o ? 0 : o
                          , c = s.ext_info || {}
                          , l = c.pass_model
                          , d = c.pass_value
                          , m = 4 === l;
                        1 === l ? m = a / i * 100 >= d : 3 === l && (m = a >= d),
                        m && (be(2, a),
                        we(2, a)),
                        (0,
                        C._A)({
                            eventName: "edu_Platform_exercise_submit_click",
                            params: {
                                channel_code: (0,
                                I.getPageChannelCode)(),
                                column_code: L,
                                training_id: k["default"].library.trainingId,
                                course_id: u,
                                answer_type: (0,
                                ne.dz)(me),
                                answer_num: i,
                                answer_correctly_num: a,
                                exercise_type: "在线练习"
                            }
                        })
                    }
                }
                  , Zt = function(e) {
                    if (e) {
                        var t, n = null === e || void 0 === e || null === (t = e.userExamSessionVo) || void 0 === t ? void 0 : t.status;
                        ve(n)
                    } else
                        le(!0);
                    (0,
                    C.XN)({
                        eventName: "edu_Platform_exercise_page",
                        params: {
                            channel_code: (0,
                            I.getPageChannelCode)(),
                            column_code: L,
                            training_id: k["default"].library.trainingId,
                            course_id: u,
                            answer_type: (0,
                            ne.dz)(me),
                            exercise_type: "在线练习"
                        }
                    }),
                    ie(!1)
                }
                  , It = function() {
                    var e;
                    (0,
                    C._A)({
                        eventName: "edu_Platform_exercise_click",
                        params: {
                            channel_code: (0,
                            I.getPageChannelCode)(),
                            column_code: L,
                            training_id: k["default"].library.trainingId,
                            course_id: u,
                            answer_type: (0,
                            ne.dz)(me),
                            exercise_type: "在线练习"
                        }
                    }),
                    2 !== (null === (e = j.state) || void 0 === e ? void 0 : e[s.resource_id]) && be(1, 0)
                }
                  , St = function() {
                    (0,
                    C._A)({
                        eventName: "edu_Platform_exercise_quit_click",
                        params: {
                            channel_code: (0,
                            I.getPageChannelCode)(),
                            column_code: L,
                            training_id: k["default"].library.trainingId,
                            course_id: u,
                            answer_type: (0,
                            ne.dz)(me),
                            exercise_type: "在线练习"
                        }
                    })
                };
                return l.createElement(h.Z, {
                    loading: G,
                    loadingProps: {
                        delay: 0,
                        withChildren: !0
                    },
                    empty: ce,
                    emptyProps: {
                        tip: "哎呀，练习不见了~"
                    }
                }, l.createElement(K(), {
                    ref: function(e) {
                        return j.setPlayRef(e)
                    },
                    onlineExamId: s.online_exam_id,
                    uc: E.uc,
                    userId: Me,
                    env: k["default"].env || "ncet-xedu",
                    passed: 2 === (null === (bt = j.state) || void 0 === bt ? void 0 : bt[s.resource_id]),
                    passModel: null === (kt = s.ext_info) || void 0 === kt ? void 0 : kt.pass_model,
                    passValue: null === (Et = s.ext_info) || void 0 === Et ? void 0 : Et.pass_value,
                    sdpAppParams: {
                        "sdp-app-id": k["default"].app.appid
                    },
                    onInited: Zt,
                    onSubmited: Ct,
                    onStartAnswer: It,
                    onExit: St,
                    questionProps: {
                        watermark: {
                            userInfo: pe
                        }
                    }
                }))
            }
            return l.createElement(te.Z, {
                tip: "哎呀，资源不存在",
                hideBack: !0,
                className: de["list-empty"]
            })
        }
        )), nt = n(58533), rt = n(81659), it = {
            "course-catalog": "index-module_course-catalog_ro+eA",
            endMessage: "index-module_endMessage_iYxWE",
            resources: "index-module_resources_OrOyy",
            progress0: "index-module_progress0_Gvic2",
            progress1: "index-module_progress1_f+uHp",
            progress2: "index-module_progress2_3umF4",
            "course-catalog2": "index-module_course-catalog2_9zMd3"
        }, ot = n(9314);
        function at() {
            return l.createElement("div", {
                style: {
                    transform: "rotate(180deg)"
                }
            }, l.createElement("svg", {
                version: "1.1",
                className: "coursePlayingIcon",
                x: "0px",
                y: "0px",
                width: "18px",
                height: "12px",
                viewBox: "0 0 24 24"
            }, l.createElement("rect", {
                x: "0",
                y: "0",
                width: "6",
                height: "7",
                fill: "#1E62EC"
            }, l.createElement("animateTransform", {
                attributeType: "xml",
                attributeName: "transform",
                type: "scale",
                values: "1,1; 1,3; 1,1",
                begin: "0s",
                dur: "0.6s",
                repeatCount: "indefinite"
            })), l.createElement("rect", {
                x: "10",
                y: "0",
                width: "6",
                height: "7",
                fill: "#1E62EC"
            }, l.createElement("animateTransform", {
                attributeType: "xml",
                attributeName: "transform",
                type: "scale",
                values: "1,1; 1,3; 1,1",
                begin: "0.2s",
                dur: "0.6s",
                repeatCount: "indefinite"
            })), l.createElement("rect", {
                x: "20",
                y: "0",
                width: "6",
                height: "7",
                fill: "#1E62EC"
            }, l.createElement("animateTransform", {
                attributeType: "xml",
                attributeName: "transform",
                type: "scale",
                values: "1,1; 1,3; 1,1",
                begin: "0.4s",
                dur: "0.6s",
                repeatCount: "indefinite"
            }))))
        }
        function ct(e) {
            var t = e.onBeforeChangeCatalog
              , n = void 0 === t ? (0,
            o.Z)(regeneratorRuntime.mark((function e() {
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", !0);
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))) : t
              , r = e.onChangeCatalog
              , a = e.initResourceId
              , u = e.progress
              , s = e.libraryId
              , d = e.needActiveEffect
              , m = void 0 === d || d
              , f = e.teachProps
              , p = (0,
            I.getUrlQuery)()
              , _ = p.courseId
              , g = void 0 === _ ? "" : _
              , h = (0,
            l.useState)("")
              , y = (0,
            c.Z)(h, 2)
              , w = y[0]
              , b = y[1]
              , E = (0,
            l.useState)([])
              , C = (0,
            c.Z)(E, 2)
              , Z = C[0]
              , S = C[1]
              , P = (0,
            l.useState)(!0)
              , N = (0,
            c.Z)(P, 2)
              , R = N[0]
              , O = N[1]
              , T = (0,
            l.useState)(0)
              , L = (0,
            c.Z)(T, 2)
              , j = L[0]
              , M = L[1]
              , A = function() {
                var e = (0,
                o.Z)(regeneratorRuntime.mark((function e() {
                    var t, n, r, a, c, l;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                return t = 100,
                                e.next = 3,
                                (0,
                                H.ZA)(g, {
                                    limit: t
                                });
                            case 3:
                                if (n = e.sent,
                                !(n.total > t)) {
                                    e.next = 15;
                                    break
                                }
                                for (r = [],
                                a = t; a < n.total; a += t)
                                    r.push(a);
                                return e.next = 9,
                                Promise.all(r.map(function() {
                                    var e = (0,
                                    o.Z)(regeneratorRuntime.mark((function e(n, r) {
                                        var i;
                                        return regeneratorRuntime.wrap((function(e) {
                                            while (1)
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2,
                                                    (0,
                                                    H.ZA)(g, {
                                                        offset: (r + 1) * t,
                                                        limit: t
                                                    });
                                                case 2:
                                                    return i = e.sent,
                                                    e.abrupt("return", i);
                                                case 4:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e)
                                    }
                                    )));
                                    return function(t, n) {
                                        return e.apply(this, arguments)
                                    }
                                }()));
                            case 9:
                                return c = e.sent,
                                l = (0,
                                i.Z)(n.items),
                                c.forEach((function(e) {
                                    l = [].concat((0,
                                    i.Z)(l), (0,
                                    i.Z)(e.items))
                                }
                                )),
                                e.abrupt("return", l);
                            case 15:
                                return e.abrupt("return", n.items);
                            case 16:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
              , D = function() {
                var e = (0,
                o.Z)(regeneratorRuntime.mark((function e() {
                    var t;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                A();
                            case 2:
                                t = e.sent,
                                S(t),
                                M(t.length),
                                O(!1);
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
              , U = function() {
                var e = (0,
                o.Z)(regeneratorRuntime.mark((function e(t, i) {
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                if (t.work_id !== w.work_id) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return e.next = 4,
                                (0,
                                re.N_)({
                                    courseId: t.course_id,
                                    workId: t.work_id
                                });
                            case 4:
                                if (e.t0 = n,
                                !e.t0) {
                                    e.next = 10;
                                    break
                                }
                                return e.next = 8,
                                n(t);
                            case 8:
                                e.t1 = e.sent,
                                e.t0 = !1 !== e.t1;
                            case 10:
                                if (!e.t0) {
                                    e.next = 13;
                                    break
                                }
                                m && b(t),
                                r && r(t, i);
                            case 13:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }();
            (0,
            l.useEffect)((function() {
                D()
            }
            ), []),
            (0,
            l.useEffect)((function() {
                if (Z.length > 0) {
                    var e = (0,
                    v.find)(Z, {
                        work_id: a
                    }) || Z[0];
                    U(e)
                }
            }
            ), [Z]);
            var F = function(e) {
                var t;
                if (s === k["default"].library.trainingId && u)
                    switch (String(null === (t = u[e]) || void 0 === t ? void 0 : t.status)) {
                    case "0":
                        return l.createElement("i", {
                            className: "iconfont icon_checkbox_linear",
                            title: "未开始"
                        });
                    case "1":
                        return l.createElement("i", {
                            className: "iconfont icon_processing_fill",
                            title: "进行中"
                        });
                    case "2":
                        return l.createElement("i", {
                            className: "iconfont icon_checkbox_fill",
                            title: "已学完"
                        });
                    default:
                        return l.createElement("i", {
                            className: "iconfont icon_checkbox_linear",
                            title: "未开始"
                        })
                    }
            }
              , z = function(e) {
                return l.createElement("div", {
                    key: e.id,
                    className: "resource-item ".concat(s === k["default"].library.trainingId && "resource-item-train", " ").concat(e.work_id === w.work_id ? "resource-item-active" : ""),
                    onClick: function() {
                        U(e, !0)
                    }
                }, l.createElement("div", null, l.createElement("img", {
                    src: ot
                }), e.title), l.createElement("div", {
                    style: {
                        display: "flex",
                        alignItems: "center"
                    }
                }, l.createElement("div", {
                    className: "status-icon"
                }, e.work_id === w.work_id && at(), F(e.work_id)), f && l.createElement(rt.Z, (0,
                x.Z)({
                    activity: e
                }, f))))
            }
              , q = function() {
                return Z.map((function(e) {
                    return l.createElement("div", {
                        key: e.work_id,
                        className: it.resources
                    }, z(e))
                }
                ))
            };
            return l.createElement("div", {
                className: it["course-catalog"],
                id: "work-catelog"
            }, l.createElement(nt.Z, {
                dataLength: Z.length,
                next: (0,
                o.Z)(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                D(Z.length);
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                hasMore: Z.length < j,
                loader: R ? l.createElement(ce.Z, {
                    type: "loading",
                    style: {
                        padding: "20px"
                    }
                }) : null,
                scrollableTarget: "work-catelog"
            }, q()))
        }
        n(11254);
        var lt = n(10677)
          , ut = (n(79793),
        n(21523))
          , st = n(82300)
          , dt = n(50100)
          , mt = n(73006)
          , vt = n.n(mt)
          , ft = n(10497)
          , pt = k["default"].env
          , _t = "mywork_".concat(pt)
          , gt = function() {
            function e() {
                (0,
                st.Z)(this, e),
                this.enable = !0,
                this.idb = new ft.Z,
                this.lock = new (vt()),
                this.initSchema = this._withCo(this._initSchema),
                this.get = this._withCo(this._get),
                this.put = this._withCo(this._put),
                this.removeByKey = this._withCo(this._removeByKey)
            }
            return (0,
            dt.Z)(e, [{
                key: "_initSchema",
                value: function() {
                    var e = (0,
                    o.Z)(regeneratorRuntime.mark((function e(t) {
                        var n, r;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.idb.checkDB(_t, (function(e) {
                                        var o = e.version
                                          , a = (0,
                                        i.Z)(e.objectStoreNames);
                                        r = -1 === a.indexOf(t),
                                        n = r ? o + 1 : o
                                    }
                                    ));
                                case 2:
                                    return e.next = 4,
                                    this.idb.openDB(_t, n, [{
                                        name: t
                                    }]);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "_get",
                value: function() {
                    var e;
                    return (e = this.idb).get.apply(e, arguments)
                }
            }, {
                key: "_put",
                value: function() {
                    var e = (0,
                    o.Z)(regeneratorRuntime.mark((function e() {
                        var t, n = arguments;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    (t = this.idb).put.apply(t, n);
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "_removeByKey",
                value: function() {
                    var e = (0,
                    o.Z)(regeneratorRuntime.mark((function e() {
                        var t, n = arguments;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    (t = this.idb).removeByKey.apply(t, n);
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "_withCo",
                value: function(e) {
                    var t = this
                      , n = e.bind(this);
                    return (0,
                    o.Z)(regeneratorRuntime.mark((function e() {
                        var r, i, o = arguments;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t.enable) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4,
                                    t.lock.request();
                                case 4:
                                    return r = e.sent,
                                    e.prev = 5,
                                    e.next = 8,
                                    n.apply(void 0, o);
                                case 8:
                                    i = e.sent,
                                    t.lock.release(r),
                                    e.next = 16;
                                    break;
                                case 12:
                                    e.prev = 12,
                                    e.t0 = e["catch"](5),
                                    t.lock.release(r),
                                    t.errorHandle(e.t0);
                                case 16:
                                    return e.abrupt("return", i);
                                case 17:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[5, 12]])
                    }
                    )))
                }
            }, {
                key: "errorHandle",
                value: function(e) {
                    e instanceof Event && (this.enable = !1,
                    console.error("an error occurred using indexDB, will use memory instead in this session"),
                    console.dir(e))
                }
            }]),
            e
        }()
          , ht = "all"
          , yt = function() {
            function e() {
                (0,
                st.Z)(this, e),
                this.isHang = !1,
                this.storage = new gt,
                this.init()
            }
            return (0,
            dt.Z)(e, [{
                key: "init",
                value: function() {
                    var e = (0,
                    o.Z)(regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    (0,
                                    E.bG)();
                                case 2:
                                    return t = e.sent,
                                    this.userId = null === t || void 0 === t ? void 0 : t.user_id,
                                    this.tableName = "MyWork_".concat(this.userId),
                                    e.next = 7,
                                    this.storage.initSchema(this.tableName);
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "setCacheExpired",
                value: function(e) {
                    var t = e || ht;
                    this.storage.removeByKey(this.tableName, t),
                    t !== ht && this.storage.removeByKey(this.tableName, ht)
                }
            }, {
                key: "isExpired",
                value: function(e) {
                    var t = 3e5;
                    return !e || Date.now() - e > t
                }
            }, {
                key: "getWorkResult",
                value: function() {
                    var e = (0,
                    o.Z)(regeneratorRuntime.mark((function e(t) {
                        var n, r;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return n = t,
                                    e.next = 3,
                                    this.storage.get(this.tableName, n);
                                case 3:
                                    if (e.t0 = e.sent,
                                    e.t0) {
                                        e.next = 6;
                                        break
                                    }
                                    e.t0 = null;
                                case 6:
                                    return r = e.t0,
                                    e.abrupt("return", r);
                                case 8:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "setWorkResult",
                value: function() {
                    var e = (0,
                    o.Z)(regeneratorRuntime.mark((function e(t, n) {
                        var r;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    r = t,
                                    this.storage.put(this.tableName, r, n);
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t, n) {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }]),
            e
        }()
          , xt = new yt
          , wt = n(80584)
          , bt = (n(5322),
        n(91616))
          , kt = (n(37691),
        n(54589))
          , Et = (n(2918),
        n(39772),
        n(42260))
          , Ct = n(52838)
          , Zt = n.n(Ct)
          , It = n(70054)
          , St = ["expire_at"];
        function Pt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Nt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Pt(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pt(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var Rt = k["default"].cs
          , Ot = function() {
            function e() {
                (0,
                st.Z)(this, e),
                this.client = null,
                this.init()
            }
            return (0,
            dt.Z)(e, [{
                key: "init",
                value: function() {
                    var e = this;
                    return Zt()({
                        serviceName: k["default"].api.serviceName["x-course"],
                        getToken: this.getToken,
                        host: Rt.host.substring(2),
                        protocol: "https"
                    }).then((function(t) {
                        return console.log("client", "name", t),
                        t._validateFileName = function(e) {
                            return e.replace(/[\\\\/:*?"<>|]+/g, "-")
                        }
                        ,
                        e.client = t,
                        t
                    }
                    )).catch((function(e) {
                        console.log("e"),
                        console.log(e)
                    }
                    ))
                }
            }, {
                key: "getToken",
                value: function(e) {
                    var t = e.javaSDKParams
                      , n = e.name
                      , r = t.params
                      , i = t.path
                      , o = t.tokenType;
                    return (0,
                    It.nV)({
                        token_type: o,
                        path: "".concat(i, "/").concat(n),
                        params: r
                    }).then((function(e) {
                        var t = e.expire_at
                          , n = (0,
                        $.Z)(e, St);
                        return Nt(Nt({}, n), {}, {
                            expireAt: t
                        })
                    }
                    ))
                }
            }]),
            e
        }()
          , Tt = new Ot
          , Lt = n(37471);
        function jt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Mt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? jt(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jt(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var At = {
            image: "image/*",
            video: ".mp4"
        }
          , Dt = "".concat(wt.qr, ",").concat(wt.TD, ",").concat(wt.hY)
          , Ut = function(e) {
            var t = {
                originType: e.type,
                bigtype: "",
                filetype: "",
                contentType: ""
            }
              , n = e.name.toLowerCase();
            return wt.qr.split(",").some((function(e) {
                return n.endsWith(e)
            }
            )) ? (t.filetype = "video",
            t.bigtype = "video",
            t.contentType = "x_audio_video") : wt.TD.split(",").some((function(e) {
                return n.endsWith(e)
            }
            )) ? (t.filetype = "document",
            t.bigtype = "document",
            t.contentType = "x_document") : wt.hY.split(",").some((function(e) {
                return n.endsWith(e)
            }
            )) ? (t.filetype = "image",
            t.bigtype = "image",
            t.contentType = "x_image_list") : (t.filetype = "",
            t.bigtype = "",
            t.contentType = ""),
            t
        }
          , Ft = (0,
        l.forwardRef)((function(e, t) {
            var n = e.maxCount
              , u = e.multiple
              , s = void 0 === u || u
              , d = e.accept
              , m = void 0 === d ? "" : d
              , f = e.onUploadSuccess
              , p = void 0 === f ? function() {}
            : f
              , _ = e.onUploadFail
              , g = void 0 === _ ? function() {}
            : _
              , h = e.showUploadList
              , y = void 0 === h || h
              , x = e.libraryId
              , w = (0,
            l.useRef)([])
              , b = (0,
            l.useState)([])
              , E = (0,
            c.Z)(b, 2)
              , C = E[0]
              , Z = E[1]
              , I = (0,
            l.useState)({})
              , S = (0,
            c.Z)(I, 2)
              , P = S[0]
              , N = S[1]
              , R = 10
              , O = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                w.current = e.map((function(e) {
                    return e
                }
                )),
                Z(w.current)
            }
              , T = function() {
                return w.current.filter((function(e) {
                    return "success" === e.status
                }
                )).map((function(e) {
                    var t = e.dentry;
                    return t
                }
                ))
            }
              , L = function(e) {
                var t = e.fileType
                  , n = e.fileName
                  , r = e.dentryUrl
                  , i = e.screenshot
                  , o = e.dentry_id
                  , a = {};
                if ((i || P[o]) && (a.screenshot = P[o] || i),
                t)
                    return a.type = t,
                    a;
                var c = n.split(".")
                  , l = c[c.length - 1];
                return ["jpg", "jpeg", "png"].some((function(e) {
                    return e === l
                }
                )) ? (a.type = "image",
                a.screenshot = r) : ["mp4"].some((function(e) {
                    return e === l
                }
                )) ? a.type = "video" : a.type = "file",
                a
            }
              , j = function() {
                return T().map((function(e) {
                    return Mt({
                        path: e.dentryUrl,
                        name: e.fileName,
                        dentry_id: e.dentry_id,
                        cover_image_dentry_id: "",
                        extend_info: {}
                    }, L(e))
                }
                ))
            }
              , M = function() {
                var e = w.current.filter((function(e) {
                    return "error" !== e.status
                }
                ));
                return e.map((function(e) {
                    var t = e.dentry;
                    return "success" === e.status ? Mt(Mt({}, (0,
                    v.pick)(e, ["uid", "status", "percent", "emitter"])), {}, {
                        path: null === t || void 0 === t ? void 0 : t.dentryUrl,
                        name: null === t || void 0 === t ? void 0 : t.fileName,
                        dentry_id: null === t || void 0 === t ? void 0 : t.dentry_id
                    }, L(t)) : e
                }
                ))
            }
              , A = function() {
                return w.current.some((function(e) {
                    return "error" === e.status
                }
                ))
            }
              , D = function() {
                return !w.current.some((function(e) {
                    return "success" !== e.status && "error" !== e.status
                }
                ))
            }
              , U = function(e) {
                var t = (0,
                i.Z)(w.current)
                  , n = t.findIndex((function(t) {
                    return e.uid === t.uid
                }
                ));
                -1 !== n && (t[n] = Mt({}, e),
                w.current = t,
                Z(w.current))
            }
              , F = function(e, t) {
                var n, r = "https:".concat((0,
                Et.xC)("cdnHot")).concat(null === t || void 0 === t || null === (n = t.data) || void 0 === n ? void 0 : n.path), i = Mt(Mt({}, t.data), {}, {
                    dentryUrl: r,
                    fileName: e.name
                });
                U(Mt(Mt({}, e), {}, {
                    dentry: i,
                    status: "success",
                    emitter: void 0
                })),
                p(i)
            }
              , z = function(e, t) {
                var n = (0,
                v.get)(t, "data");
                n || (n = (0,
                v.get)(t, "responseJSON")),
                U(Mt(Mt({}, e), {}, {
                    error: n,
                    status: "error",
                    emitter: void 0
                })),
                g(n)
            }
              , q = function(e, t) {
                var n = t.loaded;
                U(Mt(Mt({}, e), {}, {
                    percent: n * (R / 100)
                }))
            }
              , H = function(e, t) {
                var n = t.loaded;
                U(Mt(Mt({}, e), {}, {
                    percent: R + n * ((100 - R) / 100)
                }))
            }
              , B = function() {
                var e = (0,
                o.Z)(regeneratorRuntime.mark((function e(t, n) {
                    var r;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                Tt.client.upload(t.originFileObj, {
                                    name: t.name,
                                    scope: 1,
                                    infoJson: JSON.stringify({
                                        identify_param: {
                                            strategy: "strategy_before_origin_illegal_replace",
                                            sensitive_word_lib: k["default"].app.appid
                                        }
                                    })
                                });
                            case 2:
                                r = e.sent,
                                r.on("success", (function(e) {
                                    F(t, e, n)
                                }
                                )),
                                r.on("error", (function(e) {
                                    z(t, e, n)
                                }
                                )),
                                r.on("md5Progress", (function(e) {
                                    q(t, e)
                                }
                                )),
                                r.on("progress", (function(e) {
                                    H(t, e)
                                }
                                )),
                                r.emit("start"),
                                U(Mt(Mt({}, t), {}, {
                                    emitter: r,
                                    status: "uploading"
                                }));
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }()
              , W = function(e) {
                if (0 === e.size)
                    return r.ZP.warn("不能上传0字节的文件"),
                    !1;
                var t = e.name.toLowerCase();
                return ".mp4" === At[m] && "video/mp4" !== e.type ? (r.ZP.warn("不支持 ".concat(t.split(".").slice(-1)[0], " 类型，请上传mp4文件")),
                !1) : (e.extend = Ut(e),
                -1 === ["video", "document", "image"].indexOf(e.extend.bigtype) ? (r.ZP.warn("不支持 ".concat(t.split(".").slice(-1)[0], " 类型，请换个文件")),
                !1) : !(0 === e.type.indexOf("video/") && e.size > 3221225472) || (r.ZP.warn({
                    content: "不能发送超过3G的视频",
                    key: "不能发送超过3G的视频"
                }),
                !1))
            }
              , X = function(e) {
                var t = e.filter((function(e) {
                    var t = !w.current.some((function(t) {
                        var n = t.uid;
                        return n === e.uid
                    }
                    ));
                    return t && W(e)
                }
                ));
                t.length && (w.current = w.current.concat(t),
                Z(w.current),
                t.forEach((function(e) {
                    B(e)
                }
                )))
            };
            (0,
            l.useImperativeHandle)(t, (function() {
                return {
                    hasUploaded: D,
                    hasUploadFailFiles: A,
                    getDentrys: T,
                    setDentrys: O,
                    getAttachmentList: j
                }
            }
            ), [P]);
            var V = function(e) {
                X((0,
                i.Z)(e.fileList))
            }
              , Q = function(e) {
                var t;
                w.current = w.current.filter((function(t) {
                    return t.uid !== e.uid
                }
                )),
                null === (t = e.emitter) || void 0 === t || t.emit("pause"),
                Z(w.current)
            }
              , G = function() {
                return !1
            }
              , K = M()
              , Y = function(e, t) {
                var n = e.url;
                N(Mt(Mt({}, P), {}, (0,
                a.Z)({}, t.dentry_id, n)))
            };
            return l.createElement(l.Fragment, null, l.createElement(kt.Z.Dragger, {
                name: "file",
                maxCount: n,
                fileList: C,
                onChange: V,
                onRemove: Q,
                beforeUpload: G,
                multiple: s,
                accept: m ? At[m] : Dt,
                showUploadList: y
            }, e.children, n && C.length >= n && l.createElement("span", {
                className: Lt.Z.errorTip
            }, "（最多可添加", n, "个附件）")), l.createElement("div", {
                className: Lt.Z["attachments-list"]
            }, !y && K && !!K.length && l.createElement(J.Z, {
                edit: !0,
                libraryId: x,
                showTitle: !1,
                values: K,
                onDelete: Q,
                onUpdateCover: Y
            })))
        }
        ))
          , zt = Ft
          , qt = {
            editor: "index-module_editor_Mbmgi",
            "is-full-screen": "index-module_is-full-screen_Cmf02"
        }
          , Ht = n(48670);
        function Bt(e) {
            var t = e.libraryId
              , n = void 0 === t ? "0" : t
              , i = e.onUploadSuccess
              , o = void 0 === i ? function() {}
            : i
              , a = (0,
            l.useState)()
              , u = (0,
            c.Z)(a, 2)
              , s = u[0]
              , d = u[1]
              , m = (0,
            l.useState)()
              , v = (0,
            c.Z)(m, 2)
              , f = (v[0],
            v[1]);
            (0,
            l.useEffect)((function() {
                f(n)
            }
            ), [n]);
            var p = function() {
                return (0,
                It.nV)().then((function(e) {
                    var t = e.payload ? e.payload : e;
                    return d(null === t || void 0 === t ? void 0 : t.path),
                    Promise.resolve(e)
                }
                )).catch((function(e) {
                    return r.ZP.error("封面上传失败"),
                    Promise.reject(e)
                }
                ))
            }
              , _ = function() {
                var e = function() {
                    return p().then((function(e) {
                        var t = e.token
                          , n = e.policy
                          , r = e.date_time;
                        return "".concat(k["default"].api["cs-server"], "/v0.1/upload?token=").concat(t, "&policy=").concat(n, "&date=").concat(encodeURIComponent(r))
                    }
                    ))
                }
                  , t = function(e) {
                    return {
                        scope: "1",
                        path: s,
                        name: e.name
                    }
                }
                  , n = ".jpg,.png,.jpeg";
                return {
                    action: e,
                    accept: n,
                    name: "file",
                    data: t,
                    showUploadList: !1,
                    beforeUpload: function(e) {
                        var t = e.name.toLowerCase();
                        return n.split(",").some((function(e) {
                            return t.endsWith(e) > -1
                        }
                        )) ? 0 === e.size ? (r.ZP.error("不能上传0字节的文件"),
                        !1) : e.size > 20971520 ? (r.ZP.error("不能上传超过20M的文件"),
                        !1) : void 0 : (r.ZP.error("只能上传jpg、png图片"),
                        !1)
                    },
                    onChange: function(e) {
                        var t, n;
                        "done" === e.file.status ? (e.url = "https:".concat((0,
                        Et.xC)("cdnHot")).concat(null === (t = e.file) || void 0 === t || null === (n = t.response) || void 0 === n ? void 0 : n.path),
                        o(e),
                        r.ZP.success("封面上传成功")) : "error" === e.file.status && r.ZP.error("封面上传失败")
                    }
                }
            };
            return l.createElement(kt.Z, (0,
            x.Z)({
                className: Lt.Z["resource-cover-uploader"]
            }, _()), e.children)
        }
        var Wt = Bt
          , Xt = {
            "upload-cover": "index-module_upload-cover_3IW7A",
            "upload-cover__oper": "index-module_upload-cover__oper_+BeE4",
            tip: "index-module_tip_U9XyD"
        }
          , Vt = (0,
        l.forwardRef)((function(e, t) {
            var r = (0,
            l.useState)(!1)
              , i = (0,
            c.Z)(r, 2)
              , o = i[0]
              , a = i[1]
              , u = (0,
            l.useState)("")
              , s = (0,
            c.Z)(u, 2)
              , d = s[0]
              , m = s[1]
              , v = (0,
            l.useState)()
              , f = (0,
            c.Z)(v, 2)
              , p = f[0]
              , _ = f[1];
            (0,
            l.useImperativeHandle)(t, (function() {
                return {
                    open: function(e) {
                        m(null === e || void 0 === e ? void 0 : e.poster),
                        _(e),
                        a(!0)
                    }
                }
            }
            ), []);
            var g = function() {
                a(!1),
                e.onClose && e.onClose()
            }
              , h = function() {
                null !== p && void 0 !== p && p.element && (p.element.dataset.poster = d),
                g()
            }
              , y = function(e) {
                var t = e.url;
                m(t)
            };
            return l.createElement(Y.Z, {
                className: "reset-theme",
                width: 450,
                title: "修改封面",
                okText: "确认",
                visible: o,
                onCancel: g,
                onOk: h
            }, l.createElement("div", {
                className: Xt["upload-cover"]
            }, l.createElement("img", {
                src: (0,
                Ht.Z)(d),
                onError: function(e) {
                    e.target.src = n(81451)
                }
            }), l.createElement("div", {
                className: Xt["upload-cover__oper"]
            }, l.createElement(Wt, {
                libraryId: e.libraryId,
                onUploadSuccess: y
            }, l.createElement(le.Z, {
                type: "primary"
            }, "上传封面")), l.createElement("div", {
                className: Xt.tip
            }, "建议上传封面大小n*n"))))
        }
        ))
          , Jt = Vt
          , Qt = window.MICRO_STUDIO || "https://teacher-studio.ykt.eduyun.cn";
        ("web-bd.ykt.eduyun.cn" === window.location.host || "xue-test.ykt.eduyun.cn" === window.location.host || window.location.host.indexOf("localhost") > -1) && (Qt = window.MICRO_STUDIO || "https://teacher-studio-test.ykt.eduyun.cn");
        var Gt = function(e, t) {
            var n = e.dentryUrl
              , r = e.fileName
              , i = 900;
            if (n) {
                var o = new Image;
                o.onload = function() {
                    var e = {
                        src: this.src,
                        alt: r
                    };
                    this.width > i ? (e.width = i,
                    e.height = parseInt(this.height * i / this.width, 10)) : (e.width = this.width,
                    e.height = this.height),
                    t(e)
                }
                ,
                o.src = n
            }
        }
          , Kt = function(e, t) {
            var n = e.dentryUrl;
            n && t({
                url: n,
                width: 420,
                height: 280
            })
        }
          , Yt = (0,
        l.forwardRef)((function(e, t) {
            var n = (0,
            l.useRef)()
              , i = (0,
            l.useRef)()
              , o = (0,
            l.useRef)()
              , u = e.maxLength
              , s = e.value
              , d = e.initialContent
              , v = e.autoClearinitialContent
              , f = (0,
            l.useState)(!1)
              , p = (0,
            c.Z)(f, 2)
              , _ = p[0]
              , g = p[1]
              , h = (0,
            l.useState)("image")
              , y = (0,
            c.Z)(h, 2)
              , x = y[0]
              , w = y[1]
              , b = (0,
            l.useState)(!1)
              , k = (0,
            c.Z)(b, 2)
              , E = k[0]
              , C = k[1];
            (0,
            l.useEffect)((function() {
                return function() {
                    var e;
                    null !== (e = n.current) && void 0 !== e && e.destory && n.current.destory()
                }
            }
            ), [n.current]);
            var Z = {
                initialContent: d,
                initialFrameWidth: "100%",
                maximumWords: u,
                autoClearinitialContent: v,
                focus: !1,
                enableAutoSave: !1,
                autoHeightEnabled: !1,
                initialStyle: "body{font-family:Arial;font-size:18px;line-height:1.5;color:rgb(0, 0, 0);}",
                initialFrameHeight: 450,
                elementPathEnabled: !1,
                toolbars: [["source", "undo", "redo", "formatmatch", "removeformat", "fontfamily", "fontsize", "bold", "italic", "underline", "strikethrough", "forecolor", "backcolor", "justifyleft", "justifyright", "justifycenter", "justifyjustify", "indent", "lineheight", "insertorderedlist", "insertunorderedlist", "upload-image", "full-screen"]]
            }
              , I = function(e, t, n) {
                t.registerUI("upload-image", (function(e, n) {
                    var r = new t.ui.Button({
                        name: "upload-image",
                        title: "上传图片",
                        onclick: function() {
                            var e;
                            null === i || void 0 === i || null === (e = i.current) || void 0 === e || e.setDentrys(),
                            g(!0),
                            w("image")
                        }
                    });
                    return e.addListener("selectionchange", (function() {
                        var t = e.queryCommandState(n);
                        -1 === t ? (r.setDisabled(!0),
                        r.setChecked(!1)) : (r.setDisabled(!1),
                        r.setChecked(t))
                    }
                    )),
                    r
                }
                ), void 0, n),
                t.registerUI("full-screen", (function(e, n) {
                    var r = new t.ui.Button({
                        name: "full-screen",
                        title: "全屏",
                        onclick: function() {
                            e.fullscreen = !e.fullscreen,
                            C(e.fullscreen)
                        }
                    });
                    return e.addListener("selectionchange", (function() {
                        var t = e.queryCommandState(n);
                        -1 === t ? (r.setDisabled(!0),
                        r.setChecked(!1)) : (r.setDisabled(!1),
                        r.setChecked(t))
                    }
                    )),
                    r
                }
                ), void 0, n)
            }
              , S = function(e) {
                var t = document.createElement("div");
                t.innerHTML = e;
                for (var r = !1, i = t.querySelectorAll(".edui-faked-video-container"), o = 0; o < i.length; o++)
                    i[o].querySelector(".edui-faked-video") || (i[o].remove(),
                    r = !0);
                return r && n.current.setContent(t.innerHTML),
                t.innerHTML
            }
              , P = s
              , N = function(t) {
                n.current = t,
                t.addListener("contentchange", (function() {
                    var n = t.getContent();
                    if (t.getContentLength(!0) > t.options.maximumWords) {
                        r.ZP.error("已达到最大限制1w字符"),
                        t.setContent(P);
                        var i = t.selection.getRange();
                        i.startOffset = i.endOffset,
                        i.select(),
                        t.focus()
                    } else
                        n.includes("edui-faked-video-container") && (n = S(n)),
                        P = n,
                        e.onChange(n)
                }
                )),
                t.addListener("afterscalehide", (function() {
                    var e = t.selection.getRange();
                    e.startOffset = e.endOffset,
                    e.select(),
                    t.focus()
                }
                )),
                t.addListener("click", (function(e, n) {
                    var r;
                    ("edui-faked-video" === n.target.className && t.focus(!0),
                    "edui-faked-video__update-cover" === n.target.className) && (null === o || void 0 === o || null === (r = o.current) || void 0 === r || r.open({
                        element: n.target,
                        poster: n.target.dataset.poster
                    }))
                }
                )),
                e.onReady(t)
            }
              , R = function() {
                var e, t = (null === (e = n.current) || void 0 === e ? void 0 : e.getContentLength(!0)) || 0;
                return t
            }
              , O = function() {
                var e, t = null === i || void 0 === i || null === (e = i.current) || void 0 === e ? void 0 : e.hasUploaded();
                t ? g(!1) : r.ZP.warning("".concat("image" === x ? "图片" : "视频", "正在上传"))
            }
              , T = function(e) {
                "image" === x ? Gt(e, (function(e) {
                    n.current.execCommand("insertimage", [e]),
                    O()
                }
                )) : Kt(e, (function(e) {
                    var t = '<img width="'.concat(e.width, '" height="').concat(e.height, '" _url="').concat(e.url, '" class="edui-faked-video" src="').concat(Qt, '/fish/editor/themes/default/images/spacer.gif" style="background:url(').concat(Qt, '/fish/editor/themes/default/images/videologo.gif) no-repeat center center; border:1px solid gray;background-size: cover;"></img>')
                      , r = '<span contenteditable="false" class="edui-faked-video__update-cover" style="margin-left: -80px;vertical-align: 12px;padding-right: 24px;cursor: pointer;color: #fff;font-size: 14px;cursor: pointer;">修改封面</span>'
                      , i = '<span contenteditable="false" class="edui-faked-video-container">'.concat(t).concat(r, "</span>");
                    n.current.focus(),
                    n.current.execCommand("inserthtml", i),
                    O()
                }
                ))
            }
              , L = function() {
                r.ZP.error("上传失败"),
                O()
            };
            (0,
            l.useImperativeHandle)(t, (function() {
                return {
                    getContentLength: R
                }
            }
            ), []);
            var j = function() {
                e.onChange(n.current.getContent()),
                n.current.focus(!0)
            };
            return l.createElement(l.Fragment, null, l.createElement(bt.Z, {
                value: s,
                className: m()(qt.editor, (0,
                a.Z)({}, qt["is-full-screen"], E)),
                editorConfig: Z,
                onBeforeReady: I,
                onReady: N
            }), l.createElement(Y.Z, {
                title: "image" === x ? "选择图片" : "选择视频",
                visible: _,
                onCancel: O,
                footer: null
            }, l.createElement("div", {
                className: qt.uploader
            }, l.createElement(zt, {
                ref: i,
                multiple: !1,
                accept: x,
                onUploadSuccess: T,
                onUploadFail: L
            }, l.createElement(ce.Z, {
                type: "plus"
            })))), l.createElement(Jt, {
                ref: o,
                libraryId: e.workId,
                onClose: j
            }))
        }
        ))
          , $t = Yt
          , en = n(51201);
        function tn(e) {
            var t = e.visible
              , n = e.courseId
              , i = e.workId
              , a = e.isAdd
              , u = void 0 === a || a
              , s = e.scopeName
              , d = void 0 === s ? "作答" : s
              , m = e.onOk
              , v = e.onCancel
              , f = ut.Z.useForm()
              , p = (0,
            c.Z)(f, 1)
              , _ = p[0]
              , g = (0,
            l.useRef)()
              , h = (0,
            l.useState)(!1)
              , y = (0,
            c.Z)(h, 2)
              , x = y[0]
              , w = y[1]
              , b = (0,
            l.useState)()
              , k = (0,
            c.Z)(b, 2)
              , E = k[0]
              , C = k[1]
              , Z = (0,
            l.useState)("")
              , I = (0,
            c.Z)(Z, 2)
              , S = I[0]
              , P = I[1]
              , N = (0,
            l.useState)([])
              , R = (0,
            c.Z)(N, 2)
              , O = R[0]
              , T = R[1]
              , L = (0,
            l.useState)([])
              , j = (0,
            c.Z)(L, 2)
              , M = j[0]
              , A = j[1];
            (0,
            l.useEffect)((function() {
                (0,
                X.Jj)().onbeforeunload = t ? function(e) {
                    e.preventDefault(),
                    e.returnValue = ""
                }
                : null
            }
            ), [t]);
            var D = function() {
                var e = _.getFieldsValue();
                P(),
                null !== e && void 0 !== e && e.title || (null === S || void 0 === S ? void 0 : S.length) > 0 || (null === O || void 0 === O ? void 0 : O.length) > 0 ? Y.Z.confirm({
                    title: "提示",
                    content: "保留本次编辑的内容？",
                    onOk: function() {
                        var t = (0,
                        o.Z)(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        xt.setWorkResult(i, {
                                            course_id: n,
                                            title: e.title,
                                            content: S,
                                            attachments: O
                                        }),
                                        v();
                                    case 2:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )));
                        function r() {
                            return t.apply(this, arguments)
                        }
                        return r
                    }(),
                    onCancel: function() {
                        v()
                    }
                }) : v()
            }
              , U = function() {
                var e = (0,
                o.Z)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                Y.Z.confirm({
                                    title: "确认提交",
                                    content: "作答内容提交后，无法修改，请确认是否提交",
                                    onOk: function() {
                                        var e = (0,
                                        o.Z)(regeneratorRuntime.mark((function e() {
                                            return regeneratorRuntime.wrap((function(e) {
                                                while (1)
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return w(!0),
                                                        e.next = 3,
                                                        (0,
                                                        H.jq)(i, {
                                                            course_id: n,
                                                            title: t.title,
                                                            content: S,
                                                            attachments: O
                                                        });
                                                    case 3:
                                                        r.ZP.success("提交成功！"),
                                                        w(!1),
                                                        m();
                                                    case 6:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )));
                                        function a() {
                                            return e.apply(this, arguments)
                                        }
                                        return a
                                    }()
                                });
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , F = function(e) {
                xt.getWorkResult(i).then((function(t) {
                    P((null === t || void 0 === t ? void 0 : t.content) || ""),
                    A((null === t || void 0 === t ? void 0 : t.attachments) || []),
                    C((null === t || void 0 === t ? void 0 : t.title) || ""),
                    e.setContent((null === t || void 0 === t ? void 0 : t.content) || ""),
                    _.setFieldsValue({
                        title: (null === t || void 0 === t ? void 0 : t.title) || ""
                    })
                }
                ))
            }
              , z = function() {
                return l.createElement(ut.Z, {
                    form: _,
                    layout: "vertical",
                    onFinish: U,
                    autoComplete: "off",
                    initialValues: {
                        title: E,
                        content: S,
                        attachments: O
                    }
                }, l.createElement(ut.Z.Item, {
                    name: "title",
                    label: "标题",
                    rules: [{
                        required: !0,
                        message: "请输入标题"
                    }, {
                        whitespace: !0,
                        message: "不能全为空格"
                    }]
                }, l.createElement(lt.Z, {
                    placeholder: "标题",
                    maxLength: 30,
                    lengthRule: function(e) {
                        return (0,
                        wt.x)(e, 30)
                    }
                })), l.createElement(ut.Z.Item, {
                    name: "content",
                    label: "作答内容",
                    rules: [{
                        required: !0,
                        message: "请输入作答内容"
                    }, {
                        whitespace: !0,
                        message: "不能全为空格"
                    }]
                }, i && l.createElement($t, {
                    ref: g,
                    workId: i,
                    maxLength: 1e4,
                    value: S,
                    initialContent: u ? "请输入".concat(d, "内容") : "",
                    autoClearinitialContent: u,
                    onReady: F,
                    onChange: P
                })), l.createElement(ut.Z.Item, null, l.createElement(J.Z, {
                    edit: !0,
                    showTitle: !1,
                    values: M,
                    onChange: function(e) {
                        T(e)
                    },
                    onUploadSuccess: function() {
                        w(!1)
                    },
                    onUploadLoading: function() {
                        w(!0)
                    }
                })), l.createElement(ut.Z.Item, null, l.createElement("div", {
                    className: en.Z.btns
                }, l.createElement(le.Z, {
                    htmlType: "button",
                    onClick: D,
                    className: en.Z.cancelBtn
                }, "取消"), l.createElement(le.Z, {
                    loading: x,
                    type: "primary",
                    htmlType: "submit",
                    className: en.Z.submitBtn,
                    style: {
                        marginRight: 8
                    }
                }, "提交"))))
            };
            return l.createElement("div", null, l.createElement(Y.Z, {
                destroyOnClose: !0,
                visible: t,
                title: "提交作业",
                onOk: U,
                onCancel: D,
                footer: null,
                wrapClassName: en.Z.modal,
                width: 820,
                height: 620
            }, z()))
        }
        n(76965);
        var nn = n(81109)
          , rn = n(27484)
          , on = n.n(rn)
          , an = n(9927)
          , cn = n(88061);
        function ln(e) {
            var t = e.courseId
              , n = e.workId
              , r = e.workQuery
              , i = (0,
            I.getUrlQuery)()
              , o = i["x-edu-theme"]
              , a = (0,
            l.useState)([])
              , s = (0,
            c.Z)(a, 2)
              , d = s[0]
              , m = s[1]
              , v = (0,
            l.useState)(0)
              , f = (0,
            c.Z)(v, 2)
              , p = f[0]
              , _ = f[1]
              , g = (0,
            l.useState)(1)
              , h = (0,
            c.Z)(g, 2)
              , y = h[0]
              , x = h[1]
              , w = (0,
            u.k6)()
              , b = 10;
            (0,
            l.useEffect)((function() {
                n && (0,
                H.sY)(t, n, {
                    limit: b,
                    offset: (y - 1) * b
                }).then((function(e) {
                    _(e.total),
                    m(e.items)
                }
                ))
            }
            ), [n, y]);
            var k = function(e) {
                var i = e.title
                  , a = e.name
                  , c = e.submit_time
                  , u = e.user_id
                  , s = e.work_result_id;
                return l.createElement("div", {
                    className: en.Z.item,
                    onClick: function() {
                        var e = "".concat((0,
                        cn.Zq)(), "/courseDetail/work?courseId=").concat(t, "&workId=").concat(n, "&workResultId=").concat(s, "&").concat(r).concat(o ? "&x-edu-theme=".concat(o) : "");
                        w.push(e)
                    }
                }, l.createElement("div", {
                    className: en.Z.item_title
                }, i), l.createElement("div", {
                    className: en.Z.item_detail
                }, l.createElement(an.Z, {
                    src: (0,
                    E.Kw)(u)
                }), l.createElement("span", {
                    className: en.Z.name
                }, a), l.createElement("span", {
                    className: en.Z.time
                }, on()(c).format("YYYY/MM/DD"))))
            };
            return (null === d || void 0 === d ? void 0 : d.length) > 0 ? l.createElement("div", {
                className: en.Z.work_result_list
            }, l.createElement("div", {
                className: en.Z.title
            }, "优秀作业推荐"), d.map((function(e) {
                return k(e)
            }
            )), Math.ceil(p / b) > 1 && l.createElement(nn.Z, {
                total: p,
                pageSize: b,
                current: y,
                showQuickJumper: !0,
                showTotal: function(e) {
                    return "总共 ".concat(Math.ceil(e / b), " 页")
                },
                onChange: function(e) {
                    x(e)
                },
                className: en.Z.pagination
            })) : l.createElement(l.Fragment, null)
        }
        var un = ln
          , sn = (n(81132),
        n(57535))
          , dn = {
            "course-detail": "index-module_course-detail_bL7S7",
            "detail-top": "index-module_detail-top_OVeDo",
            title: "index-module_title_b9nPw",
            name: "index-module_name_A1bKn",
            work_result: "index-module_work_result_LqHRt",
            extends: "index-module_extends_SpNKk",
            source: "index-module_source_JBWIu",
            learned: "index-module_learned_oDo4W",
            actions: "index-module_actions_SRWzI",
            "detail-main": "index-module_detail-main_8Msgy",
            "detail-main-content": "index-module_detail-main-content_Yr-Qr",
            "detail-main-l": "index-module_detail-main-l_0fEZ-",
            "work-wrapper": "index-module_work-wrapper_wZbym",
            "video-wrapper": "index-module_video-wrapper_r6ONu",
            "detail-main-drawer-box": "index-module_detail-main-drawer-box_bWU4o",
            "detail-main-l-work": "index-module_detail-main-l-work_QgVYD",
            "detail-main-r": "index-module_detail-main-r_CLkZZ",
            "sub-title": "index-module_sub-title_Oawjz",
            "catalog-wrapper": "index-module_catalog-wrapper_X52ZR",
            "catalog-title": "index-module_catalog-title_hdItN",
            "theme-dark": "index-module_theme-dark_89oZp",
            "detail-bottom": "index-module_detail-bottom_GoNXB",
            "related-recommend": "index-module_related-recommend_76kw1",
            "course-intro": "index-module_course-intro_ZxUDg",
            "extend-reading": "index-module_extend-reading_fV22e",
            info: "index-module_info_zjO6R",
            lecturer: "index-module_lecturer_1szL6",
            "intro-text": "index-module_intro-text_buwTy",
            lecturer_title: "index-module_lecturer_title_AMdVA",
            lecturer_name: "index-module_lecturer_name_B91Up",
            download: "index-module_download_ZT7Ah",
            "related-recommend-content": "index-module_related-recommend-content_pzUxy",
            "related-recommend-content__title": "index-module_related-recommend-content__title_Pdqio",
            "related-recommend-content__cover": "index-module_related-recommend-content__cover_Ncwmp",
            "related-recommend-content__info": "index-module_related-recommend-content__info_67kYX",
            "related-recommend-content__source": "index-module_related-recommend-content__source_1qrLR",
            "related-recommend-content__link": "index-module_related-recommend-content__link_yt9WB",
            "related-recommend-content__uv": "index-module_related-recommend-content__uv_cH+0e",
            "related-recommend-content__stat": "index-module_related-recommend-content__stat_Ibe-f",
            empty: "index-module_empty_5ofeS"
        };
        function mn(e) {
            var t = e.lecturer
              , r = e.intro;
            return t || r ? l.createElement("div", {
                className: dn["course-intro"]
            }, l.createElement("div", {
                className: dn.title
            }, "课程简介"), l.createElement(sn.Z, {
                className: "x-edu-divider"
            }), l.createElement("div", {
                className: dn.info
            }, t && l.createElement("div", {
                className: dn.lecturer
            }, l.createElement("img", {
                src: n(99569),
                style: {
                    width: 24,
                    height: 24,
                    marginRight: 6
                }
            }), l.createElement("span", {
                className: dn.lecturer_title
            }, "授课教师"), l.createElement("span", {
                className: dn.lecturer_name
            }, t)), r && l.createElement("div", {
                className: dn["intro-text"],
                dangerouslySetInnerHTML: {
                    __html: r
                }
            }))) : null
        }
        var vn = mn
          , fn = (n(268),
        k["default"].api);
        function pn(e) {
            var t = e.extendReadingData
              , n = e.onDownload;
            return 0 === t.length ? null : l.createElement("div", {
                className: dn["extend-reading"]
            }, l.createElement("div", {
                className: dn.title
            }, "延伸阅读"), l.createElement(sn.Z, null), l.createElement("ul", null, t.map((function(e, t) {
                var r = e.url;
                r.startsWith("http") || (r = "".concat(fn.cdn).concat(fn["cdn-prefix"]).concat(r));
                var i = e.name.substring(0, e.name.lastIndexOf("."));
                return l.createElement("li", {
                    key: e.name
                }, l.createElement("div", {
                    className: dn.name,
                    title: i
                }, i), l.createElement("div", {
                    className: dn.download
                }, l.createElement(le.Z, {
                    type: "primary",
                    onClick: n,
                    href: (0,
                    I.urlWithTheme)(r)
                }, "下载")))
            }
            ))))
        }
        var _n = pn
          , gn = n(89591)
          , hn = n(67627)
          , yn = n(92441)
          , xn = {
            live: "live-module_live_tXiMZ",
            container: "live-module_container_jjeGM",
            info: "live-module_info_FI4lF",
            player: "live-module_player_jQjR6",
            desc: "live-module_desc_nJz97"
        };
        function wn(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function bn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? wn(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wn(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function kn(e) {
            var t = e.liveId
              , n = e.trainId
              , r = e.courseId
              , i = e.resourceId
              , o = e.columnCode
              , a = e.channelCode
              , c = e.reportToTrain
              , u = (0,
            I.getUrlQuery)()
              , s = u["x-edu-theme"]
              , d = ne.hX.Finish
              , m = (0,
            l.useContext)(b.Z)
              , v = function() {
                var e = (0,
                E.Zd)()
                  , t = s ? "".concat(e).concat(null !== e && void 0 !== e && e.includes("?") ? "&" : "?", "x-edu-theme=").concat(s) : e;
                window.location.href = t
            }
              , f = function(e) {
                console.log(e)
            }
              , p = function(e) {
                console.log(e)
            }
              , _ = function() {}
              , g = function() {
                var e = (new Date).getTime();
                c(d, e)
            }
              , h = function(e) {
                var t = bn(bn({}, e.params), {}, {
                    course_id: r,
                    resource_id: i,
                    training_id: n,
                    column_code: o,
                    channel_code: a
                });
                (0,
                C._A)(bn(bn({}, e), {}, {
                    params: t
                }))
            }
              , y = "preproduction" === k["default"].env ? yn.PublicLiveDetail : hn.PublicLiveDetail;
            return l.createElement("div", {
                className: xn.live
            }, l.createElement(y, {
                key: t,
                className: xn.live,
                containerClassName: xn.container,
                infoClassName: xn.info,
                playerClassName: xn.player,
                descriptionClassName: xn.desc,
                liveId: t,
                appId: k["default"].appId,
                uc: E.uc,
                loginInfo: m,
                handleLogin: v,
                onOnlineCountChange: f,
                onStateChange: p,
                onReportProgress: _,
                onReportTeacherTrain: g,
                onSendSensors: h
            }))
        }
        var En = l.memo(kn)
          , Cn = n(30038)
          , Zn = (0,
        Cn.oJ)("@/page/tchTraining/component/Card/img/default_cover.png")
          , In = function(e) {
            return e && e.startsWith("http")
        };
        function Sn(e) {
            var t = e.courseDetail
              , n = e.libraryId
              , r = (0,
            I.getUrlQuery)()
              , i = r["x-edu-theme"]
              , a = (0,
            u.k6)()
              , s = (0,
            l.useState)([])
              , d = (0,
            c.Z)(s, 2)
              , m = d[0]
              , v = d[1];
            (0,
            l.useEffect)((function() {
                if (t && n) {
                    var e = function() {
                        var e = (0,
                        o.Z)(regeneratorRuntime.mark((function e() {
                            var r, i, o, a, c, l, u, s, d, m, f;
                            return regeneratorRuntime.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0,
                                        e.next = 3,
                                        (0,
                                        z.P6)(n);
                                    case 3:
                                        if (e.t0 = e.sent,
                                        e.t0) {
                                            e.next = 6;
                                            break
                                        }
                                        e.t0 = [];
                                    case 6:
                                        if (r = e.t0,
                                        i = [],
                                        o = [],
                                        a = t.context_id.split("auxo-train:")[1],
                                        a || n !== k["default"].library.trainingId || (a = k["default"].library.trainingId),
                                        !a) {
                                            e.next = 31;
                                            break
                                        }
                                        return e.next = 14,
                                        (0,
                                        F.ye)(a);
                                    case 14:
                                        c = e.sent,
                                        l = (null === c || void 0 === c ? void 0 : c.map((function(e) {
                                            return null === e || void 0 === e ? void 0 : e.course_id
                                        }
                                        ))) || [],
                                        r = r.filter((function(e) {
                                            var t;
                                            return -1 !== l.indexOf(e.unit_id) && !(null !== (t = e.extra) && void 0 !== t && t.begin_time && on()(e.extra.begin_time) > on()())
                                        }
                                        )),
                                        u = Math.min(8, r.length - 1),
                                        u <= 0 && console.log("库id".concat(n, "没有可推荐的内容")),
                                        s = regeneratorRuntime.mark((function e() {
                                            var n, o;
                                            return regeneratorRuntime.wrap((function(e) {
                                                while (1)
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        n = Math.floor(Math.random() * r.length),
                                                        o = r[n],
                                                        o.unit_id !== t.id && -1 === i.findIndex((function(e) {
                                                            return e.unit_id === o.unit_id
                                                        }
                                                        )) && i.push(o);
                                                    case 3:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        ));
                                    case 20:
                                        if (!(u > 0 && i.length < u)) {
                                            e.next = 24;
                                            break
                                        }
                                        return e.delegateYield(s(), "t1", 22);
                                    case 22:
                                        e.next = 20;
                                        break;
                                    case 24:
                                        if (!(i.length > 0)) {
                                            e.next = 29;
                                            break
                                        }
                                        return d = r.map((function(e) {
                                            var t = e.resource_id;
                                            return t
                                        }
                                        )),
                                        e.next = 28,
                                        (0,
                                        q.nC)(d);
                                    case 28:
                                        o = e.sent;
                                    case 29:
                                        e.next = 40;
                                        break;
                                    case 31:
                                        return e.next = 33,
                                        (0,
                                        B.vr)(t.id, n);
                                    case 33:
                                        if (m = e.sent,
                                        i = (null === m || void 0 === m ? void 0 : m.items) || [],
                                        !(i.length > 0)) {
                                            e.next = 40;
                                            break
                                        }
                                        return f = i.map((function(e) {
                                            var t = e.resource_id;
                                            return t
                                        }
                                        )),
                                        e.next = 39,
                                        (0,
                                        q.nC)(f);
                                    case 39:
                                        o = e.sent;
                                    case 40:
                                        o.forEach((function(e) {
                                            var t = i.find((function(t) {
                                                return t.resource_id === e.id
                                            }
                                            ));
                                            t && (t.stat = {
                                                like: e.like_count,
                                                uv: e.total_uv
                                            })
                                        }
                                        )),
                                        v(i),
                                        e.next = 47;
                                        break;
                                    case 44:
                                        e.prev = 44,
                                        e.t2 = e["catch"](0),
                                        console.error(e.t2);
                                    case 47:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, null, [[0, 44]])
                        }
                        )));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    e()
                }
            }
            ), [t, n]);
            var f = (0,
            l.useCallback)((function(e) {
                var t;
                if (In(e.description))
                    window.open(i ? "".concat(e.description).concat(e.description.includes("?") ? "&" : "?", "x-edu-theme=").concat(i) : e.description);
                else if ("x_url" !== e.resource_type && "x_smarturl" !== e.resource_type || null === (t = e.extra) || void 0 === t || !t.url) {
                    var r = (e.tags[e.tags.length - 1] || {}).title || ""
                      , o = (0,
                    I.getUrlQuery)()
                      , c = o.channelId
                      , l = void 0 === c ? "" : c
                      , u = o.breadcrumb
                      , s = void 0 === u ? "" : u
                      , d = "".concat((0,
                    cn.Zq)(), "/courseDetail?courseId=").concat(null === e || void 0 === e ? void 0 : e.resource_id, "&tag=").concat(encodeURIComponent(r), "&channelId=").concat(l, "&libraryId=").concat((null === e || void 0 === e ? void 0 : e.library_id) || n, "&breadcrumb=").concat(encodeURIComponent(s))
                      , m = i ? "".concat(d).concat(null !== d && void 0 !== d && d.includes("?") ? "&" : "?", "x-edu-theme=").concat(i) : d;
                    a.push(m)
                } else {
                    var v;
                    window.open(i ? "".concat(e.extra.url).concat(null !== (v = e.extra.url) && void 0 !== v && v.includes("?") ? "&" : "?", "x-edu-theme=").concat(i) : e.extra.url)
                }
            }
            ), [])
              , p = (0,
            l.useCallback)((function(e) {
                var t, n, r = e.item, i = e.onClick, o = void 0 === i ? function() {}
                : i;
                return l.createElement("div", {
                    key: r.unit_id,
                    onClick: function() {
                        o(r)
                    }
                }, l.createElement("div", {
                    className: dn["related-recommend-content__cover"]
                }, l.createElement("img", {
                    src: r.cover_url ? (0,
                    Ht.Z)(r.cover_url, 240) : Zn
                })), l.createElement("div", {
                    className: dn["related-recommend-content__info"]
                }, l.createElement("div", {
                    className: dn["related-recommend-content__title"],
                    title: r.title
                }, r.title), (null === r || void 0 === r || null === (t = r.extra) || void 0 === t ? void 0 : t.source) && l.createElement("div", {
                    className: dn["related-recommend-content__source"]
                }, l.createElement("i", {
                    className: "iconfont icon_hotel_fill"
                }), l.createElement("span", null, null === r || void 0 === r || null === (n = r.extra) || void 0 === n ? void 0 : n.source)), r.stat && !In(r.description) && "x_url" !== r.resource_type && "x_smarturl" !== r.resource_type && "train" !== r.resource_type && l.createElement("div", {
                    className: dn["related-recommend-content__stat"]
                }, l.createElement("span", {
                    className: dn["related-recommend-content__uv"]
                }, l.createElement("i", {
                    className: "iconfont web_icon_guanzhu_fill"
                }), l.createElement("span", null, (0,
                g.HR)(r.stat.uv || 0))), l.createElement("span", {
                    className: dn["related-recommend-content__link"]
                }, l.createElement("i", {
                    className: "iconfont web_icon_dianzan_fill"
                }), l.createElement("span", null, (0,
                g.mf)(r.stat.like || 0))))))
            }
            ), []);
            return 0 === m.length ? null : l.createElement("div", {
                className: dn["detail-bottom"]
            }, l.createElement("div", {
                className: dn["related-recommend"]
            }, l.createElement("div", {
                className: dn.title
            }, "相关推荐"), l.createElement(sn.Z, {
                className: "x-edu-divider"
            }), l.createElement("div", {
                className: dn["related-recommend-content"]
            }, m.map((function(e) {
                return l.createElement(p, {
                    item: e,
                    key: e.unit_id,
                    onClick: f
                })
            }
            )))))
        }
        function Pn(e, t) {
            var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = Nn(e)) || t && e && "number" === typeof e.length) {
                    n && (e = n);
                    var r = 0
                      , i = function() {};
                    return {
                        s: i,
                        n: function() {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, a = !0, c = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return a = e.done,
                    e
                },
                e: function(e) {
                    c = !0,
                    o = e
                },
                f: function() {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (c)
                            throw o
                    }
                }
            }
        }
        function Nn(e, t) {
            if (e) {
                if ("string" === typeof e)
                    return Rn(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Rn(e, t) : void 0
            }
        }
        function Rn(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function On(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Tn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? On(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : On(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        n(41310);
        function Ln() {
            var e, t, n, d, x, b = (0,
            I.getUrlQuery)(), O = b.tag, T = void 0 === O ? "" : O, L = b.libraryId, G = void 0 === L ? "" : L, K = b.breadcrumb, Y = void 0 === K ? "" : K, $ = b.firstLevel, ee = void 0 === $ ? "" : $, te = b.secondLevel, ne = void 0 === te ? "" : te, ie = b.channelId, oe = void 0 === ie ? "" : ie, ae = b.thirdLevel, ce = void 0 === ae ? "" : ae, le = b.courseId, ue = b.resourceId, se = void 0 === ue ? "" : ue, de = b.workFlag, me = void 0 === de ? "0" : de, ve = (0,
            s.gV)(), fe = (0,
            l.useState)(""), pe = (0,
            c.Z)(fe, 2), _e = pe[0], ge = pe[1], he = (0,
            l.useState)(null), ye = (0,
            c.Z)(he, 2), xe = ye[0], we = ye[1], be = (0,
            l.useState)(null), ke = (0,
            c.Z)(be, 2), Ee = ke[0], Ce = ke[1], Ze = (0,
            l.useState)(!1), Ie = (0,
            c.Z)(Ze, 2), Se = Ie[0], Pe = Ie[1], Ne = (0,
            l.useState)(!1), Re = (0,
            c.Z)(Ne, 2), Oe = Re[0], Te = Re[1], Le = (0,
            l.useState)(null), je = (0,
            c.Z)(Le, 2), Me = je[0], Ae = je[1], De = (0,
            l.useState)(null), Ue = (0,
            c.Z)(De, 2), Fe = Ue[0], ze = Ue[1], qe = (0,
            l.useState)(null), He = (0,
            c.Z)(qe, 2), Be = He[0], We = He[1], Xe = (0,
            l.useState)(null), Ve = (0,
            c.Z)(Xe, 2), Je = Ve[0], Qe = Ve[1], Ge = (0,
            l.useState)({}), Ke = (0,
            c.Z)(Ge, 2), Ye = Ke[0], $e = Ke[1], et = (0,
            l.useState)([]), nt = (0,
            c.Z)(et, 2), rt = nt[0], it = nt[1], ot = (0,
            l.useMemo)(cn.NH, []), at = (0,
            l.useState)({}), lt = (0,
            c.Z)(at, 2), ut = lt[0], st = lt[1], dt = (0,
            l.useState)({}), mt = (0,
            c.Z)(dt, 2), vt = mt[0], ft = mt[1], pt = (0,
            l.useState)(!0), _t = (0,
            c.Z)(pt, 2), gt = _t[0], ht = _t[1], yt = (0,
            l.useState)(null), xt = (0,
            c.Z)(yt, 2), wt = xt[0], bt = xt[1], kt = (0,
            l.useState)(null), Et = (0,
            c.Z)(kt, 2), Ct = Et[0], Zt = Et[1], It = (0,
            l.useState)(!1), St = (0,
            c.Z)(It, 2), Pt = St[0], Nt = St[1], Rt = "1" === me, Ot = (0,
            u.k6)(), Tt = (0,
            l.useRef)(), Lt = function(e, t) {
                var n = Tn({}, Je);
                n[e] = (n[e] || 0) - t > 0 ? n[e] : t,
                Qe(Tn({}, n))
            }, jt = function() {
                var e;
                return -1 !== (null === Me || void 0 === Me || null === (e = Me.resource_type) || void 0 === e ? void 0 : e.indexOf("video")) ? "video" : "e_exercise_activity" === (null === Me || void 0 === Me ? void 0 : Me.resource_type) ? "exam" : "e_live_activity" === (null === Me || void 0 === Me ? void 0 : Me.resource_type) ? "live" : "doc"
            }, Mt = function(e) {
                var t;
                return "e_live_activity" === (null === Me || void 0 === Me ? void 0 : Me.resource_type) ? (null === Me || void 0 === Me ? void 0 : Me.study_time) || (null === Me || void 0 === Me || null === (t = Me.ext_info) || void 0 === t ? void 0 : t.duration) || 0 : e
            }, At = (0,
            l.useCallback)(function() {
                var e = (0,
                o.Z)(regeneratorRuntime.mark((function e(t, n) {
                    var r, i, o, a, c;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                if (Ee && Me) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                if (i = M.pn.getProgressData(M.pn.userId, Ee.id),
                                i) {
                                    e.next = 6;
                                    break
                                }
                                return console.log("课程进度不存在, 是否调用`await initProgressInfo`"),
                                e.abrupt("return");
                            case 6:
                                if (o = (null === (r = i.ext_info.resource_progress) || void 0 === r ? void 0 : r[null === Me || void 0 === Me ? void 0 : Me.resource_id]) || 0,
                                e.t0 = t > o && 0 !== t,
                                !e.t0) {
                                    e.next = 12;
                                    break
                                }
                                return e.next = 11,
                                (0,
                                E.iT)();
                            case 11:
                                e.t0 = e.sent;
                            case 12:
                                if (!e.t0) {
                                    e.next = 14;
                                    break
                                }
                                (0,
                                re.bL)({
                                    courseId: le,
                                    activityId: Me.activity_id || Me.id,
                                    activityName: (null === (a = Me.video_extend) || void 0 === a ? void 0 : a.title) || (null === (c = Me.document_extend) || void 0 === c ? void 0 : c.title) || Me.name,
                                    resourceId: null === Me || void 0 === Me ? void 0 : Me.resource_id,
                                    studyTime: null === Me || void 0 === Me ? void 0 : Me.study_time
                                });
                            case 14:
                                (0,
                                re.fJ)({
                                    courseId: Ee.id,
                                    resourceId: null === Me || void 0 === Me ? void 0 : Me.resource_id,
                                    activityId: Me.activity_id || Me.id,
                                    resources: [Me],
                                    state: t,
                                    type: jt(),
                                    position: n
                                }),
                                Lt(null === Me || void 0 === Me ? void 0 : Me.resource_id, t);
                            case 16:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }(), [Me, Ee]), Dt = function() {
                var e = (0,
                o.Z)(regeneratorRuntime.mark((function e(t, n) {
                    var r, i, o, a, c, l, u, s, d, m, v, f, p = arguments;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                if (u = p.length > 2 && void 0 !== p[2] && p[2],
                                s = p.length > 3 && void 0 !== p[3] && p[3],
                                null !== Ee && void 0 !== Ee && null !== (r = Ee.ext_info) && void 0 !== r && null !== (i = r.progress_config) && void 0 !== i && i.spi && (!s || null !== Ee && void 0 !== Ee && null !== (o = Ee.ext_info) && void 0 !== o && null !== (a = o.progress_config) && void 0 !== a && a["begin-spi"])) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return", null);
                            case 4:
                                return d = "",
                                "teacherTraining" === (null === (c = Ee.ext_info) || void 0 === c || null === (l = c.progress_config) || void 0 === l ? void 0 : l.type) && (d = Ee.ext_info.progress_config.source_train_exid),
                                e.next = 8,
                                (0,
                                E.bG)();
                            case 8:
                                return m = e.sent,
                                v = m.user_id,
                                e.next = 12,
                                (0,
                                re.EK)({
                                    url: Ee.ext_info.progress_config.spi,
                                    fixUrl: Ee.ext_info.progress_config.fix_spi,
                                    beginUrl: s ? Ee.ext_info.progress_config["begin-spi"] : "",
                                    trainReportTokenUrlEncode: d,
                                    courseId: Ee.id,
                                    resourceId: null === Me || void 0 === Me ? void 0 : Me.resource_id,
                                    activityId: (null === Me || void 0 === Me ? void 0 : Me.activity_id) || (null === Me || void 0 === Me ? void 0 : Me.id),
                                    resources: [Me],
                                    state: t,
                                    type: jt(),
                                    position: Mt(n),
                                    userId: v,
                                    trainId: Ee.ext_info.source_train_id,
                                    ignoreHackCheck: u
                                });
                            case 12:
                                return f = e.sent,
                                e.abrupt("return", f);
                            case 14:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }(), Ut = function() {
                var e = (0,
                o.Z)(regeneratorRuntime.mark((function e(t, n) {
                    var r, i, o, c, l, u, s, d, m, f, p, _, g, h, y, x, w, b, E, Z, S, P, R = arguments;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                return c = R.length > 2 && void 0 !== R[2] ? R[2] : [],
                                l = null === c || void 0 === c ? void 0 : c.find((function(e) {
                                    return e.id === oe
                                }
                                )),
                                u = (0,
                                v.get)(n, "nodes[0]", {}),
                                Me && (u = {
                                    node_id: null === Me || void 0 === Me ? void 0 : Me.resource_id,
                                    node_name: (null === Me || void 0 === Me || null === (s = Me.video_extend) || void 0 === s ? void 0 : s.title) || (null === Me || void 0 === Me || null === (d = Me.document_extend) || void 0 === d ? void 0 : d.title) || (null === Me || void 0 === Me ? void 0 : Me.name)
                                }),
                                e.next = 6,
                                (0,
                                D.v2)(G, [ee, ne]);
                            case 6:
                                m = e.sent,
                                f = m.first_tag_name,
                                p = m.first_tag_id,
                                _ = m.first_tag_code,
                                g = m.second_tag_name,
                                h = m.second_tag_id,
                                y = m.second_tag_code,
                                x = "教师研修",
                                w = "TCH_webPlatform_detail_page",
                                b = (0,
                                cn.Zq)(),
                                b === N.Xg.SPORT ? (x = "体育",
                                w = "edu_webPlatform_articleDetail_SportsArt_page") : b === N.Xg.ART && (x = "美育",
                                w = "edu_webPlatform_articleDetail_SportsArt_page"),
                                E = {
                                    content_id: t.id,
                                    content_name: null === t || void 0 === t ? void 0 : t.name,
                                    resource_id: null === (r = u) || void 0 === r ? void 0 : r.node_id,
                                    resource_name: null === (i = u) || void 0 === i ? void 0 : i.node_name,
                                    channel_name: x,
                                    Subchannel_id: oe,
                                    channel_code: (0,
                                    I.getPageChannelCode)()
                                },
                                E = (0,
                                I.isTwy)() ? Tn(Tn({}, E), {}, {
                                    column_code: _,
                                    column_name: f,
                                    first_tag_name: g,
                                    first_tag_id: h,
                                    first_tag_code: y,
                                    second_tag_name: "",
                                    second_tag_code: "",
                                    third_tag_name: "",
                                    third_tag_code: "",
                                    fourth_tag_code: "",
                                    fourth_tag_name: "",
                                    fifth_tag_code: "",
                                    fifth_tag_name: "",
                                    sixth_tag_code: "",
                                    sixth_tag_name: "",
                                    seventh_tag_code: "",
                                    seventh_tag_name: "",
                                    eightth_tag_code: "",
                                    eightth_tag_name: "",
                                    nineth_tag_code: "",
                                    nineth_tag_name: "",
                                    tenth_tag_code: "",
                                    tenth_tag_name: ""
                                }) : Tn(Tn({}, E), {}, {
                                    first_tag_name: f,
                                    first_tag_id: p,
                                    first_tag_code: _,
                                    column_code: G,
                                    column_name: Y,
                                    second_tag_name: g,
                                    second_tag_id: h,
                                    second_tag_code: y,
                                    Subchannel_name: null === l || void 0 === l ? void 0 : l.title,
                                    third_tag_name: "",
                                    third_tag_code: "",
                                    fourth_tag_code: "",
                                    fourth_tag_name: "",
                                    fifth_tag_code: "",
                                    fifth_tag_name: "",
                                    sixth_tag_code: "",
                                    sixth_tag_name: "",
                                    seventh_tag_code: "",
                                    seventh_tag_name: "",
                                    eightth_tag_code: "",
                                    eightth_tag_name: "",
                                    nineth_tag_code: "",
                                    nineth_tag_name: "",
                                    tenth_tag_code: "",
                                    tenth_tag_name: ""
                                }),
                                k["default"].library.trainingId === G && (E = Tn(Tn({}, E), {}, {
                                    training_name: (null === wt || void 0 === wt ? void 0 : wt.title) || "2022暑期专题培训",
                                    training_id: null === wt || void 0 === wt ? void 0 : wt.id
                                })),
                                ze(Tn(Tn({}, E), {}, {
                                    course_type: "t_course",
                                    course_id: le,
                                    lesson_id: le,
                                    resource_id: null === Me || void 0 === Me ? void 0 : Me.resource_id,
                                    resource_type: null === Me || void 0 === Me ? void 0 : Me.resource_type,
                                    organ_id: "",
                                    training_id: (null === wt || void 0 === wt ? void 0 : wt.id) || "",
                                    studio_id: "",
                                    column_code: (0,
                                    I.isTwy)() ? _ : G,
                                    channel_code: (0,
                                    I.getPageChannelCode)()
                                })),
                                setTimeout((function() {
                                    (0,
                                    V.hn)({
                                        eventName: w,
                                        params: E
                                    })
                                }
                                ), 300),
                                ("document" === (null === Me || void 0 === Me ? void 0 : Me.resource_type) && null !== Me && void 0 !== Me && null !== (o = Me.document_extend) && void 0 !== o && o.files || ["e_live_activity", "e_exercise_activity", "live"].includes(Me.resource_type)) && (P = (0,
                                a.Z)((0,
                                a.Z)((0,
                                a.Z)((0,
                                a.Z)({}, null === Me || void 0 === Me ? void 0 : Me.resource_type, null === Me || void 0 === Me ? void 0 : Me.resource_type), "e_exercise_activity", "exercise"), "e_live_activity", "livebroadcast"), "live", "livebroadcast"),
                                (0,
                                C.Zk)({
                                    eventName: "resource_invite",
                                    params: {
                                        resource_type: P[null === Me || void 0 === Me ? void 0 : Me.resource_type],
                                        resource_id: null === Me || void 0 === Me ? void 0 : Me.resource_id,
                                        content_id: null === Me || void 0 === Me ? void 0 : Me.resource_id,
                                        course_id: le,
                                        content_name: (null === Me || void 0 === Me || null === (Z = Me.video_extend) || void 0 === Z ? void 0 : Z.title) || (null === Me || void 0 === Me || null === (S = Me.document_extend) || void 0 === S ? void 0 : S.title) || (null === Me || void 0 === Me ? void 0 : Me.name),
                                        column_code: (0,
                                        I.isTwy)() ? _ : G,
                                        channel_code: (0,
                                        I.getPageChannelCode)(),
                                        training_id: (null === wt || void 0 === wt ? void 0 : wt.id) || ""
                                    }
                                }));
                            case 23:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }(), Ft = function() {
                var e = (0,
                o.Z)(regeneratorRuntime.mark((function e(t) {
                    var n, r, i, o, a, c, l, u, s, d, m, v, f, p, _, g, h, y, x, w, b, k, E, C, Z, S, P, N, R, O, L, j, M, F, q = arguments;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                if (c = q.length > 1 && void 0 !== q[1] ? q[1] : [],
                                l = q.length > 2 ? q[2] : void 0,
                                G && 0 !== (null === (n = G) || void 0 === n ? void 0 : n.length)) {
                                    e.next = 7;
                                    break
                                }
                                return e.next = 5,
                                A.Z.getTeacherCourseList(null, (function(e) {
                                    return e.unit_id === le
                                }
                                ));
                            case 5:
                                u = e.sent,
                                G = null !== u && void 0 !== u && u.length && (null === (s = u[0]) || void 0 === s ? void 0 : s.library_id) || t;
                            case 7:
                                if (oe && 0 !== (null === (r = oe) || void 0 === r ? void 0 : r.length)) {
                                    e.next = 48;
                                    break
                                }
                                m = (0,
                                I.isTwy)() ? c : c.slice(2),
                                v = Pn(m),
                                e.prev = 10,
                                v.s();
                            case 12:
                                if ((f = v.n()).done) {
                                    e.next = 40;
                                    break
                                }
                                return p = f.value,
                                e.next = 16,
                                (0,
                                U.kR)(p.id);
                            case 16:
                                _ = e.sent,
                                g = Pn(_),
                                e.prev = 18,
                                g.s();
                            case 20:
                                if ((h = g.n()).done) {
                                    e.next = 27;
                                    break
                                }
                                if (y = h.value,
                                -1 === (0,
                                cn.e0)(y).indexOf(G)) {
                                    e.next = 25;
                                    break
                                }
                                return oe = p.id,
                                e.abrupt("break", 27);
                            case 25:
                                e.next = 20;
                                break;
                            case 27:
                                e.next = 32;
                                break;
                            case 29:
                                e.prev = 29,
                                e.t0 = e["catch"](18),
                                g.e(e.t0);
                            case 32:
                                return e.prev = 32,
                                g.f(),
                                e.finish(32);
                            case 35:
                                if (!oe) {
                                    e.next = 38;
                                    break
                                }
                                return d = _,
                                e.abrupt("break", 40);
                            case 38:
                                e.next = 12;
                                break;
                            case 40:
                                e.next = 45;
                                break;
                            case 42:
                                e.prev = 42,
                                e.t1 = e["catch"](10),
                                v.e(e.t1);
                            case 45:
                                return e.prev = 45,
                                v.f(),
                                e.finish(45);
                            case 48:
                                return e.prev = 48,
                                e.next = 51,
                                (0,
                                z.Ug)(G, le);
                            case 51:
                                return w = e.sent,
                                e.next = 54,
                                (0,
                                z.aM)(G);
                            case 54:
                                b = e.sent,
                                x = (0,
                                cn.Nu)(w.tags, b),
                                k = x,
                                E = k.firstLevelCode,
                                C = k.secondLevelCode,
                                Z = k.thirdLevelCode,
                                S = k.lastLevelName,
                                ee = E,
                                ne = C,
                                ce = Z,
                                T = S,
                                e.next = 66;
                                break;
                            case 63:
                                e.prev = 63,
                                e.t2 = e["catch"](48),
                                console.log(e.t2);
                            case 66:
                                if (d || !oe) {
                                    e.next = 70;
                                    break
                                }
                                return e.next = 69,
                                (0,
                                U.kR)(oe);
                            case 69:
                                d = e.sent;
                            case 70:
                                if (P = null === (i = d) || void 0 === i ? void 0 : i.find((function(e) {
                                    return (0,
                                    cn.e0)(e)[0] === G
                                }
                                )),
                                N = "library_id",
                                ee && (N = "catalog_id"),
                                null === (o = d) || void 0 === o || o.forEach((function(e) {
                                    var t = (0,
                                    cn.mD)(e, N).find((function(e) {
                                        return e === (ee || G)
                                    }
                                    ));
                                    t && (P = e)
                                }
                                )),
                                !(0,
                                I.isTwy)()) {
                                    e.next = 82;
                                    break
                                }
                                return e.next = 77,
                                (0,
                                D.v2)(G, [ee]);
                            case 77:
                                R = e.sent,
                                O = R.first_tag_name,
                                Y = O,
                                e.next = 104;
                                break;
                            case 82:
                                if (11 !== (null === (a = P) || void 0 === a ? void 0 : a.type)) {
                                    e.next = 103;
                                    break
                                }
                                L = Pn(c),
                                e.prev = 84,
                                L.s();
                            case 86:
                                if ((j = L.n()).done) {
                                    e.next = 93;
                                    break
                                }
                                if (M = j.value,
                                (null === M || void 0 === M ? void 0 : M.id) !== oe) {
                                    e.next = 91;
                                    break
                                }
                                return Y = (null === M || void 0 === M ? void 0 : M.title) || "",
                                e.abrupt("break", 93);
                            case 91:
                                e.next = 86;
                                break;
                            case 93:
                                e.next = 98;
                                break;
                            case 95:
                                e.prev = 95,
                                e.t3 = e["catch"](84),
                                L.e(e.t3);
                            case 98:
                                return e.prev = 98,
                                L.f(),
                                e.finish(98);
                            case 101:
                                e.next = 104;
                                break;
                            case 103:
                                Y = null === (F = P) || void 0 === F ? void 0 : F.setting.data.title;
                            case 104:
                                if (null === l || void 0 === l || !l.title || !G) {
                                    e.next = 107;
                                    break
                                }
                                return (0,
                                D.F1)({
                                    courseId: le,
                                    libraryId: G,
                                    tag: l.title,
                                    breadcrumb: l.title
                                }),
                                e.abrupt("return", l.title);
                            case 107:
                                return Y && (0,
                                D.F1)({
                                    courseId: le,
                                    channelId: oe,
                                    breadcrumb: Y,
                                    libraryId: G,
                                    firstLevel: ee,
                                    secondLevel: ne,
                                    thirdLevel: ce,
                                    tag: T
                                }),
                                e.abrupt("return", Y);
                            case 109:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[10, 42, 45, 48], [18, 29, 32, 35], [48, 63], [84, 95, 98, 101]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), zt = (0,
            l.useCallback)((function() {
                var e = "".concat(window.location.pathname).concat(window.location.search).concat(window.location.hash).replace("courseDetail", "courseIndex")
                  , t = ve ? "".concat(e).concat(null !== e && void 0 !== e && e.includes("?") ? "&" : "?", "x-edu-theme=").concat(ve) : e;
                Ot.push(t)
            }
            ), []), qt = (0,
            l.useCallback)(function() {
                var e = (0,
                o.Z)(regeneratorRuntime.mark((function e(t) {
                    var n, r, i, o, a, c, l, u;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                if (!t.action_rule_link) {
                                    e.next = 24;
                                    break
                                }
                                return e.next = 3,
                                (0,
                                E.iT)();
                            case 3:
                                if (r = e.sent,
                                r) {
                                    e.next = 7;
                                    break
                                }
                                return zt(),
                                e.abrupt("return", !1);
                            case 7:
                                return e.next = 9,
                                (0,
                                E.bG)();
                            case 9:
                                if (i = e.sent,
                                o = i.user_id,
                                a = (0,
                                w.J_)({
                                    userId: o
                                }),
                                c = [R.P0.TEACHER, R.P0.ACADEMIC_STAFF, R.P0.ELECTRIC_TEACHER, R.P0.EDU_ADMIN],
                                (0,
                                v.includes)(c, a)) {
                                    e.next = 16;
                                    break
                                }
                                return zt(),
                                e.abrupt("return", !1);
                            case 16:
                                return l = "".concat(t.action_rule_link, "&identity_code=").concat(a),
                                -1 === l.indexOf("course_id") && (l = "".concat(l, "&course_id=").concat(t.id)),
                                e.next = 20,
                                (0,
                                B.b8)(t.id, l, o);
                            case 20:
                                if (u = e.sent,
                                u.result || !(["NOT_VERIFY_PROFILE", "NOT_ENROLL", "COURSE_NOT_START"].indexOf(null === (n = u.action) || void 0 === n ? void 0 : n.business_code) > -1)) {
                                    e.next = 24;
                                    break
                                }
                                return zt(),
                                e.abrupt("return", !1);
                            case 24:
                                return e.abrupt("return", !0);
                            case 25:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), []);
            (0,
            l.useEffect)((function() {
                return (0,
                o.Z)(regeneratorRuntime.mark((function e() {
                    var t, n, r, i, o, a, c, l, u, s, d, m, v, f, p, _, g, h, y, x, w, b, Z, S, P, R, O, T, L, M, A, z, H, V, J, Q, K;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                return window.addEventListener("beforeunload", C.di),
                                window.addEventListener("visibilitychange", C.gi),
                                Te(!0),
                                r = null,
                                i = null,
                                o = null,
                                e.prev = 6,
                                e.next = 9,
                                (0,
                                B.XU)(le);
                            case 9:
                                if (r = e.sent,
                                0 !== (null === (a = r) || void 0 === a || null === (c = a.course_detail) || void 0 === c ? void 0 : c.status)) {
                                    e.next = 14;
                                    break
                                }
                                return Pe(!0),
                                Te(!1),
                                e.abrupt("return");
                            case 14:
                                if (rt.length) {
                                    e.next = 18;
                                    break
                                }
                                return e.next = 17,
                                (0,
                                U.mj)();
                            case 17:
                                i = e.sent;
                            case 18:
                                return null !== (l = r) && void 0 !== l && l.course_detail.action_rule_link && (r.course_detail.action_rule_link = r.course_detail.action_rule_link.replace("${action}", "access")),
                                e.next = 21,
                                qt(null === (u = r) || void 0 === u ? void 0 : u.course_detail);
                            case 21:
                                if (e.sent) {
                                    e.next = 23;
                                    break
                                }
                                return e.abrupt("return");
                            case 23:
                                if (Ce(null === (s = r) || void 0 === s ? void 0 : s.course_detail),
                                S = (null === (d = r) || void 0 === d || null === (m = d.library_tags) || void 0 === m || null === (v = m[0]) || void 0 === v ? void 0 : v.library_id) || (null === (f = r) || void 0 === f ? void 0 : f.course_detail.context_id.split(":")[1]),
                                I.isTwy && (P = window.location.href,
                                S === k["default"].library.LibraryId.sportCourse.id && -1 === P.indexOf(N.Xg.SPORT) ? (P = "".concat(N.Xg.SPORT, "/courseDetail?courseId=").concat(le),
                                window.location.replace(P)) : S === k["default"].library.LibraryId.art.id && -1 === P.indexOf(N.Xg.ART) && (P = "".concat(N.Xg.ART, "/courseDetail?courseId=").concat(le),
                                window.location.replace(P))),
                                (0,
                                X.et)({
                                    smartLink: null === (p = r) || void 0 === p || null === (_ = p.course_detail) || void 0 === _ || null === (g = _.ext_info) || void 0 === g ? void 0 : g.smart_link
                                }),
                                !(S === k["default"].library.trainingId || (null === (h = r) || void 0 === h ? void 0 : h.course_detail.context_id.indexOf("auxo-train:")) > -1)) {
                                    e.next = 34;
                                    break
                                }
                                if (R = r.course_detail.context_id.split("auxo-train:")[1] || k["default"].library.trainingId,
                                !R) {
                                    e.next = 34;
                                    break
                                }
                                return e.next = 32,
                                (0,
                                F.N4)(R);
                            case 32:
                                o = e.sent,
                                bt(o.train);
                            case 34:
                                if (Y) {
                                    e.next = 38;
                                    break
                                }
                                return e.next = 37,
                                Ft(S, i, null === (O = o) || void 0 === O ? void 0 : O.train);
                            case 37:
                                Y = e.sent;
                            case 38:
                                return it(i || []),
                                $e({
                                    content_id: le,
                                    content_type: 0,
                                    content_cover: null === (y = r) || void 0 === y ? void 0 : y.course_detail.front_cover_object_url,
                                    content_name: null === (x = r) || void 0 === x ? void 0 : x.course_detail.name,
                                    content_source: (null === (w = r) || void 0 === w ? void 0 : w.course_detail.ext_info.source) || "智慧中小学",
                                    sub_content: {
                                        sub_content_num: null === (b = r) || void 0 === b ? void 0 : b.course_detail.total_activity_count,
                                        video_duration: null === (Z = r) || void 0 === Z ? void 0 : Z.course_detail.total_time
                                    }
                                }),
                                e.next = 42,
                                (0,
                                q.JW)(le);
                            case 42:
                                T = e.sent,
                                ft(T || {}),
                                e.next = 51;
                                break;
                            case 46:
                                e.prev = 46,
                                e.t0 = e["catch"](6),
                                Pe(!0),
                                Te(!1),
                                console.error(e.t0);
                            case 51:
                                return L = null === (t = r) || void 0 === t || null === (n = t.course_detail) || void 0 === n ? void 0 : n.activity_set_id,
                                ge(L),
                                e.next = 55,
                                (0,
                                B.z_)(L);
                            case 55:
                                if (M = e.sent,
                                M.activity_total) {
                                    e.next = 60;
                                    break
                                }
                                return Pe(!0),
                                Te(!1),
                                e.abrupt("return");
                            case 60:
                                return A = {},
                                e.next = 63,
                                (0,
                                E.iT)();
                            case 63:
                                if (!e.sent) {
                                    e.next = 73;
                                    break
                                }
                                return e.next = 66,
                                (0,
                                E.bG)();
                            case 66:
                                return J = e.sent,
                                e.next = 69,
                                (0,
                                re.ST)({
                                    userId: J.user_id,
                                    courseDetail: null === (z = r) || void 0 === z ? void 0 : z.course_detail,
                                    courseActiveSet: M,
                                    channelId: oe.length > 0 ? oe : null === (H = r) || void 0 === H ? void 0 : H.course_detail.id,
                                    resourceId: se,
                                    tags: Y
                                });
                            case 69:
                                A = e.sent,
                                We(Tn(Tn({}, A), {}, {
                                    userId: J.user_id
                                })),
                                Qe(null === (V = A) || void 0 === V ? void 0 : V.resource_progress),
                                o && (Q = function(e) {
                                    var t, n = (null === e || void 0 === e ? void 0 : e.extraFields) || {}, r = n.device_id, i = n.event;
                                    "com.nd.sdp.traincourse/study" === i && r !== W.y && (null === (t = Tt.current) || void 0 === t || t.stopVideo())
                                }
                                ,
                                j({
                                    alias: J.user_id,
                                    onNewMessage: Q,
                                    onLogined: function() {
                                        var e;
                                        return null === (e = Tt.current) || void 0 === e ? void 0 : e.reportVideoBegined()
                                    }
                                }));
                            case 73:
                                if (we(M),
                                !(0,
                                I.isTwy)()) {
                                    e.next = 79;
                                    break
                                }
                                return e.next = 77,
                                (0,
                                D.v2)(G, [ee]);
                            case 77:
                                K = e.sent,
                                st(Tn({}, K));
                            case 79:
                                Te(!1);
                            case 80:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[6, 46]])
                }
                )))(),
                function() {
                    window.removeEventListener("beforeunload", C.di),
                    window.removeEventListener("visibilitychange", C.gi)
                }
            }
            ), []),
            (0,
            l.useEffect)((function() {
                Me && xe && rt.length > 0 && Ee && (Ut(Ee, xe, rt),
                (0,
                C.di)())
            }
            ), [Me, xe, rt, Ee]);
            var Ht = function() {
                var e = (0,
                o.Z)(regeneratorRuntime.mark((function e(t) {
                    var n;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                if (n = t.activity_remark || "",
                                0 !== n.indexOf("http")) {
                                    e.next = 4;
                                    break
                                }
                                return window.open(ve ? "".concat(n).concat(n.includes("?") ? "&" : "?", "x-edu-theme=").concat(ve) : n, "_blank"),
                                e.abrupt("return", !1);
                            case 4:
                                if (null === Ct || void 0 === Ct || !Ct.onExit) {
                                    e.next = 6;
                                    break
                                }
                                return e.abrupt("return", Ct.onExit());
                            case 6:
                                return e.abrupt("return", !0);
                            case 7:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , Bt = function() {
                var e = (0,
                o.Z)(regeneratorRuntime.mark((function e(t, n) {
                    var r, i, o, a, c, l, u, s, d;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                if (n) {
                                    e.next = 9;
                                    break
                                }
                                return e.next = 3,
                                (0,
                                D.v2)(G, [ee, ne]);
                            case 3:
                                o = e.sent,
                                a = o.first_tag_code,
                                (0,
                                C.XN)({
                                    eventName: "edu_Platform_resourceDetail_page",
                                    params: {
                                        course_type: "t_course",
                                        parentchannel_code: "",
                                        channel_code: (0,
                                        I.getPageChannelCode)(),
                                        subchannel_id: oe,
                                        column_code: (0,
                                        I.isTwy)() ? a : G,
                                        course_id: le,
                                        lesson_id: null === t || void 0 === t ? void 0 : t.id,
                                        resource_type: (0,
                                        I.isTwy)() ? "x_course" : "t_course",
                                        resource_id: (null === t || void 0 === t ? void 0 : t.resource_id) || "",
                                        organ_id: "",
                                        platform_category: "EDU"
                                    }
                                }),
                                G === k["default"].library.trainingId && (0,
                                C.XN)({
                                    eventName: "edu_Platform_training_page",
                                    params: {
                                        training_id: k["default"].library.trainingId,
                                        channel_code: (0,
                                        I.getPageChannelCode)(),
                                        course_id: le,
                                        resource_id: (null === t || void 0 === t ? void 0 : t.resource_id) || ""
                                    }
                                }),
                                e.next = 14;
                                break;
                            case 9:
                                return e.next = 11,
                                (0,
                                D.v2)(G, [ee, ne]);
                            case 11:
                                c = e.sent,
                                l = c.first_tag_code,
                                (0,
                                C._A)({
                                    eventName: "edu_Platform_content_click",
                                    params: {
                                        content_type: "e_live_activity" === (null === t || void 0 === t ? void 0 : t.type) ? "publiclive_type" : "t_course",
                                        content_id: le,
                                        channel_code: (0,
                                        I.getPageChannelCode)(),
                                        first_column_code: (0,
                                        I.isTwy)() ? l : oe,
                                        clickPage_type: (0,
                                        I.getPageChannelType)(),
                                        content_name: Ee.name,
                                        page_code: (0,
                                        I.getPageCode)(),
                                        locatePage_channel: (0,
                                        I.getPageChannelCode)()
                                    }
                                });
                            case 14:
                                return Zt(null),
                                Ae(t),
                                e.next = 18,
                                (0,
                                re.bL)({
                                    courseId: le,
                                    activityId: t.activity_id || t.id,
                                    activityName: (null === (r = t.video_extend) || void 0 === r ? void 0 : r.title) || (null === (i = t.document_extend) || void 0 === i ? void 0 : i.title) || (null === t || void 0 === t ? void 0 : t.name),
                                    resourceId: null === t || void 0 === t ? void 0 : t.resource_id,
                                    studyTime: null === t || void 0 === t ? void 0 : t.study_time
                                });
                            case 18:
                                Fe && (d = Tn(Tn({}, Fe), {}, {
                                    resource_id: null === t || void 0 === t ? void 0 : t.resource_id,
                                    resource_name: (null === t || void 0 === t || null === (u = t.video_extend) || void 0 === u ? void 0 : u.title) || (null === t || void 0 === t || null === (s = t.document_extend) || void 0 === s ? void 0 : s.title) || (null === t || void 0 === t ? void 0 : t.name)
                                }),
                                ze(d),
                                (0,
                                V.hC)({
                                    eventName: "document" === t.resource_type ? "TCH_webPlatform_detail_Document_switchFileList_click" : "TCH_webPlatform_detail_Switchvideo_click",
                                    params: d
                                })),
                                n && 2 === (null === t || void 0 === t ? void 0 : t.complete_mode) && fn(t);
                            case 20:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }()
              , Wt = function() {
                (0,
                V.hC)({
                    eventName: "TCH_webPlatform_detail_download_click",
                    params: Fe
                })
            }
              , Xt = function() {
                var e = (0,
                o.Z)(regeneratorRuntime.mark((function e() {
                    var t, n, r, i, o, a;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                (0,
                                D.v2)(G, [ee, ne]);
                            case 2:
                                return t = e.sent,
                                n = t.first_tag_code,
                                (0,
                                C._A)({
                                    eventName: "edu_webPlatform_touchScreen_click",
                                    params: {
                                        channel_code: (0,
                                        I.getPageChannelCode)(),
                                        first_column_code: (0,
                                        I.isTwy)() ? n : oe,
                                        content_type: null === Ee || void 0 === Ee ? void 0 : Ee.biz_type,
                                        content_id: null === Ee || void 0 === Ee ? void 0 : Ee.id
                                    }
                                }),
                                e.next = 7,
                                (0,
                                E.EV)({
                                    content: "需要登录才可以使用授课模式，是否登录？"
                                });
                            case 7:
                                if (!e.sent) {
                                    e.next = 17;
                                    break
                                }
                                return r = "https://bb.basic.smartedu.cn/",
                                e.next = 11,
                                (0,
                                gn.J)();
                            case 11:
                                return i = e.sent,
                                e.next = 14,
                                (0,
                                gn.$)();
                            case 14:
                                o = e.sent,
                                a = "".concat(r, "#teach_course_id=").concat(le, "&node_id=").concat(Me.relation_node_id, "&").concat(i).concat(o),
                                (0,
                                I.urlJumpInElectron)(a, "_blank", "forceExternal");
                            case 17:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
              , Vt = function() {
                var e = (0,
                v.cloneDeep)(sn);
                e[e.length - 1].href = window.location.href,
                (0,
                Z.mo)((0,
                I.getPageChannelCode)(), le, "t_course", e, Me.relation_node_id)
            }
              , Jt = function() {
                var e = (0,
                o.Z)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                (0,
                                V.hC)({
                                    eventName: "edu_webPlatform_articleDetail_collect_click",
                                    params: {
                                        content_name: Fe.content_name,
                                        resource_id: Fe.content_id,
                                        column_name: Fe.column_name,
                                        channel_name: Fe.channel_name,
                                        channel_code: Fe.channel_code,
                                        resource_type: "课程",
                                        status: t ? "收藏" : "取消收藏"
                                    }
                                });
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , Qt = function() {
                var e = (0,
                o.Z)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                (0,
                                V.hC)({
                                    eventName: "edu_webPlatform_articleDetail_likes_click",
                                    params: {
                                        content_name: Fe.content_name,
                                        resource_id: Fe.content_id,
                                        column_name: Fe.column_name,
                                        channel_name: Fe.channel_name,
                                        channel_code: Fe.channel_code,
                                        resource_type: "课程",
                                        status: t ? "点赞" : "取消点赞"
                                    }
                                }),
                                (0,
                                C._A)({
                                    eventName: "edu_Platform_contentLikes_click",
                                    params: {
                                        content_type: null === Ee || void 0 === Ee ? void 0 : Ee.biz_type,
                                        content_id: Fe.content_id,
                                        channel_code: (0,
                                        I.getPageChannelCode)(),
                                        first_column_code: (0,
                                        I.isTwy)() ? Fe.first_tag_id : Fe.Subchannel_id,
                                        status: t ? "点赞" : "取消点赞"
                                    }
                                });
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , Gt = Ee || {}
              , Kt = Gt.name
              , Yt = Gt.user_suit
              , $t = Gt.introduction
              , en = Gt.summary
              , nn = Gt.ext_info
              , rn = (null === nn || void 0 === nn ? void 0 : nn.extend_reading) || []
              , on = (null === nn || void 0 === nn ? void 0 : nn.source) || "智慧中小学"
              , an = $t || en
              , ln = Yt || an || 0 !== rn.length
              , sn = (0,
            l.useMemo)((function() {
                var e, t = (0,
                cn.i7)();
                if (oe && (0,
                I.isTwy)()) {
                    var n = "".concat(ot, "?channelId=").concat(oe, "&libraryId=").concat(G, "&breadcrumb=").concat(Y);
                    ee && ee.length > 0 && (n = "".concat(n, "&firstLevel=").concat(ee)),
                    t = [].concat((0,
                    i.Z)(t), [{
                        title: ut.first_tag_name,
                        href: n
                    }])
                }
                if (oe && !(0,
                I.isTwy)()) {
                    var r = null === rt || void 0 === rt ? void 0 : rt.find((function(e) {
                        return e.id === oe
                    }
                    ));
                    r && (e = r.title,
                    t = [].concat((0,
                    i.Z)(t), [{
                        title: r.title,
                        href: "".concat(ot, "?channelId=").concat(oe)
                    }]))
                }
                var o = t[t.length - 1];
                if (G && Y && e !== Y && (!T || Y !== T) && (!o || (null === o || void 0 === o ? void 0 : o.title) !== Y)) {
                    var a = "".concat((0,
                    cn.NH)(), "?channelId=").concat(oe, "&libraryId=").concat(G, "&breadcrumb=").concat(Y);
                    ee && ee.length > 0 && (a = "".concat(a, "&firstLevel=").concat(ee)),
                    ne && ne.length > 0 && (a = "".concat(a, "&secondLevel=").concat(ne)),
                    t = [].concat((0,
                    i.Z)(t), [{
                        title: Y,
                        href: a
                    }])
                }
                if (T && G !== k["default"].library.trainingId) {
                    var c = "".concat(ot, "?channelId=").concat(oe, "&libraryId=").concat(G, "&breadcrumb=").concat(Y);
                    ee && ee.length > 0 && (c = "".concat(c, "&firstLevel=").concat(ee)),
                    ne && ne.length > 0 && (c = "".concat(c, "&secondLevel=").concat(ne)),
                    ce && ce.length > 0 && (c = "".concat(c, "&thirdLevel=").concat(ce)),
                    t = [].concat((0,
                    i.Z)(t), [{
                        title: T,
                        href: c
                    }])
                }
                return wt && (t = [].concat((0,
                i.Z)(t), [{
                    title: wt.title,
                    href: "/training/".concat(wt.id)
                }])),
                Kt && (t = [].concat((0,
                i.Z)(t), [{
                    title: Kt || "",
                    href: "".concat(window.location.pathname.replace("courseDetail", "courseIndex")).concat(window.location.search.replace(/&resourceId=[a-z0-9-]{36}/, ""))
                }, {
                    title: "课程详情"
                }])),
                t
            }
            ), [G, Y, Kt, rt, ut, wt])
              , mn = (0,
            l.useCallback)((0,
            o.Z)(regeneratorRuntime.mark((function e() {
                var t, n, r;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return Lt(null === Me || void 0 === Me ? void 0 : Me.resource_id, 1),
                            e.next = 3,
                            (0,
                            E.bG)();
                        case 3:
                            if (t = e.sent,
                            n = P.R.myCourses(null === t || void 0 === t ? void 0 : t.user_id),
                            r = localStorage.getItem(n),
                            r)
                                try {
                                    r = JSON.parse(r)
                                } catch (i) {
                                    r = ""
                                }
                            r || (r = {
                                items: [],
                                total: 0
                            }),
                            r.items = r.items.filter((function(e) {
                                return e.content_id !== Ee.id
                            }
                            )),
                            r.items.unshift({
                                content_cover: Ee.front_cover_object_url,
                                content_id: Ee.id,
                                content_name: Ee.name,
                                content_source: Ee.ext_info.source || "智慧中小学",
                                content_type: 0,
                                progress: 0,
                                sub_content: {
                                    sub_content_num: Ee.total_activity_count,
                                    video_duration: Ee.total_time
                                }
                            }),
                            r.items.length >= 8 && r.items.pop(),
                            r.total = r.items.length,
                            localStorage.setItem(n, JSON.stringify(r));
                        case 13:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))), [Ee, Me])
              , fn = function() {
                var e = (0,
                o.Z)(regeneratorRuntime.mark((function e(t) {
                    var n, r;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                (0,
                                re.N_)({
                                    courseId: Ee.id,
                                    workId: null === (n = t || Me) || void 0 === n ? void 0 : n.work_id,
                                    status: 2
                                });
                            case 2:
                                r = e.sent,
                                We(Tn(Tn({}, Be), r));
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , pn = function() {
                return l.createElement("div", {
                    className: dn["work-wrapper"]
                }, l.createElement("div", null, null === Me || void 0 === Me ? void 0 : Me.work_detail), l.createElement("div", {
                    className: dn["work-attachments"]
                }, (null === Me || void 0 === Me ? void 0 : Me.attachments) && l.createElement(J.Z, {
                    showTitle: !0,
                    values: null === Me || void 0 === Me ? void 0 : Me.attachments
                })))
            }
              , hn = function() {
                var e, t;
                return l.createElement("div", {
                    className: dn["video-wrapper"]
                }, Me && l.createElement(tt, {
                    key: Me.resource_id,
                    ref: Tt,
                    courseId: null === Ee || void 0 === Ee ? void 0 : Ee.id,
                    resources: Me,
                    trackInfo: Fe,
                    aspectRatio: .56,
                    libraryId: G,
                    dataSessionId: null === Be || void 0 === Be ? void 0 : Be.userId,
                    onUploadProgress: mn,
                    changeStudyStatus: At,
                    trainId: null === wt || void 0 === wt ? void 0 : wt.id,
                    progressConfig: null === Ee || void 0 === Ee || null === (e = Ee.ext_info) || void 0 === e ? void 0 : e.progress_config,
                    resourceMaxPos: null === Be || void 0 === Be ? void 0 : Be.resource_max_pos,
                    state: null === Be || void 0 === Be ? void 0 : Be.resource_progress,
                    activityEvent: null === Be || void 0 === Be ? void 0 : Be.activity_event,
                    reportToTrain: Dt,
                    forcedLogin: !0,
                    onlyone: !1,
                    setPlayRef: Zt,
                    videoStudyConfig: null === Ee || void 0 === Ee || null === (t = Ee.ext_info) || void 0 === t ? void 0 : t.video_study_config,
                    limitPlaybackRate: wt ? 2 : 0
                }))
            }
              , yn = function() {
                var e, t;
                return l.createElement(En, {
                    liveId: null === Me || void 0 === Me || null === (e = Me.ext_info) || void 0 === e ? void 0 : e.live_id,
                    errorCover: null === Me || void 0 === Me || null === (t = Me.ext_info) || void 0 === t ? void 0 : t.cover_pic_web_url,
                    trainId: null === wt || void 0 === wt ? void 0 : wt.id,
                    courseId: le,
                    resourceId: null === Me || void 0 === Me ? void 0 : Me.resource_id,
                    columnCode: G,
                    channelCode: (0,
                    I.getPageChannelCode)(),
                    reportToTrain: (0,
                    o.Z)(regeneratorRuntime.mark((function e() {
                        var t, n;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return window.postMessage({
                                        type: "liveStart"
                                    }, "*"),
                                    At(2, Mt()),
                                    e.next = 4,
                                    (0,
                                    E.bG)();
                                case 4:
                                    return t = e.sent,
                                    n = t.user_id,
                                    e.next = 8,
                                    (0,
                                    re.lz)({
                                        videoId: null === Me || void 0 === Me ? void 0 : Me.resource_id,
                                        userId: n,
                                        position: Mt()
                                    });
                                case 8:
                                    Dt(2);
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))
                })
            }
              , xn = function() {
                return "live" === (null === Me || void 0 === Me ? void 0 : Me.type) || "e_live_activity" === (null === Me || void 0 === Me ? void 0 : Me.type) ? yn() : Rt ? pn() : hn()
            };
            return l.createElement(h.Z, {
                loading: Oe,
                loadingProps: {
                    delay: 0
                },
                empty: Se,
                emptyProps: {
                    tip: "哎呀，您查看的课程下线啦~"
                }
            }, l.createElement("div", {
                className: dn["course-detail"]
            }, l.createElement(f.Z, {
                config: sn,
                from: "detail",
                origin: "TCH"
            }), l.createElement("div", {
                className: dn["detail-top"]
            }, l.createElement("div", {
                className: dn.title
            }, l.createElement("div", {
                className: dn.name
            }, Kt || ""), l.createElement("div", {
                style: {
                    display: "flex"
                }
            }, Rt && 1 === (null === Me || void 0 === Me ? void 0 : Me.complete_mode) && ("2" === String(null === Be || void 0 === Be || null === (e = Be.miniwork_progress[null === Me || void 0 === Me ? void 0 : Me.work_id]) || void 0 === e ? void 0 : e.status) ? l.createElement("div", {
                className: dn.work_result,
                onClick: (0,
                o.Z)(regeneratorRuntime.mark((function e() {
                    var t, n, i, o, a;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                (0,
                                H.R_)(null === Me || void 0 === Me ? void 0 : Me.work_id);
                            case 2:
                                t = e.sent,
                                (null === t || void 0 === t ? void 0 : t.length) > 0 ? (n = t[0].biz_id,
                                i = "name=".concat(Kt, "&breadcrumb=").concat(Y, "&tag=").concat(T, "&channelId=").concat(oe, "&libraryId=").concat(G, "&resourceId=").concat(se, "&workFlag=1"),
                                o = "".concat((0,
                                cn.Zq)(), "/courseDetail/work?courseId=").concat(le, "&workId=").concat(null === Me || void 0 === Me ? void 0 : Me.work_id, "&workResultId=").concat(n, "&").concat(i),
                                a = ve ? "".concat(o).concat(null !== o && void 0 !== o && o.includes("?") ? "&" : "?", "x-edu-theme=").concat(ve) : o,
                                Ot.push(a)) : r.ZP.error("无成果文件");
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))
            }, "查看我的成果") : l.createElement("div", {
                className: dn.work_result,
                onClick: function() {
                    Nt(!0)
                }
            }, "提交作业")))), l.createElement("div", {
                className: dn.extends
            }, l.createElement("div", {
                style: {
                    display: "flex"
                }
            }, l.createElement("div", {
                className: dn.source
            }, l.createElement("i", {
                className: "iconfont icon_hotel_fill"
            }), l.createElement("span", null, " ", on)), l.createElement("div", {
                className: dn.learned
            }, l.createElement("i", {
                className: "iconfont web_icon_guanzhu_fill"
            }), l.createElement("span", null, " ", (0,
            g.HR)((null === vt || void 0 === vt ? void 0 : vt.total_uv) || 0)))), l.createElement("div", {
                className: dn.actions
            }, Ee ? l.createElement(p.Z, {
                tag: Y,
                contentId: null === Ye || void 0 === Ye ? void 0 : Ye.content_id,
                contentType: null === Ee || void 0 === Ee ? void 0 : Ee.biz_type,
                content: (0,
                cn.xr)(Tn(Tn({}, Ye), {}, {
                    introduction: an,
                    lastTag: "".concat(Y)
                })),
                onStatusChange: Jt,
                firstColumnCode: (0,
                I.isTwy)() ? ee : oe
            }) : null, l.createElement(_.Z, {
                resId: le,
                onStatusChange: Qt
            }), Ee && l.createElement(y.Z, {
                content: {
                    id: Ee.id,
                    name: Ee.name,
                    type: Ee.biz_type,
                    channelCode: (0,
                    I.getPageChannelCode)(),
                    smartlink: null === (t = Ee.ext_info) || void 0 === t ? void 0 : t.smart_link
                },
                className: "suggestion"
            })))), l.createElement("div", {
                className: dn["detail-main"]
            }, l.createElement("div", {
                className: Rt ? m()(dn["detail-main-l"], dn["detail-main-l-work"]) : dn["detail-main-l"]
            }, l.createElement("div", {
                className: dn["detail-main-content"]
            }, xn(), l.createElement("div", {
                className: dn["sub-title"]
            }, l.createElement("span", null, "感谢所有为资源建设提供资料的单位和个人", l.createElement("br", null), "未经允许不得转载或引用"), !wt && Ee ? l.createElement(S.Z, {
                channelCode: (0,
                I.getPageChannelCode)(),
                firstColumnCode: (0,
                I.isTwy)() ? ee : oe,
                contentType: null === Ee || void 0 === Ee ? void 0 : Ee.biz_type,
                contentId: null === Ye || void 0 === Ye ? void 0 : Ye.content_id,
                onJumpBB: Xt,
                onJumpResourcePlatform: Vt,
                defaultPlayType: "ppt"
            }) : null)), l.createElement("div", {
                className: dn["detail-main-drawer-box"],
                onClick: function() {
                    ht(!gt)
                }
            }, gt ? l.createElement("i", {
                className: "iconfont icon_arrowRight_linear"
            }) : l.createElement("i", {
                className: "iconfont icon_arrowLeft_linear"
            }))), l.createElement("div", {
                className: dn["detail-main-r"],
                style: {
                    display: gt ? "block" : "none"
                }
            }, l.createElement("div", {
                className: dn["catalog-wrapper"]
            }, l.createElement("div", {
                className: m()(dn["catalog-title"], dn["theme-".concat(ve)])
            }, l.createElement("i", null), l.createElement("span", null, Rt ? "研修作业" : "研修内容")), Rt ? l.createElement(ct, {
                activitySetId: _e,
                initResourceId: se.length > 0 ? se : null === Be || void 0 === Be ? void 0 : Be.activity_last_learning_resource[null === Be || void 0 === Be || null === (n = Be.last_learning_activity) || void 0 === n ? void 0 : n.activity_id],
                isOpenCatalog: !0,
                newHeight: 0,
                onBeforeChangeCatalog: Ht,
                onChangeCatalog: Bt,
                progress: null === Be || void 0 === Be ? void 0 : Be.miniwork_progress,
                libraryId: G
            }) : l.createElement(Q.Z, {
                activitySetId: _e,
                catalogData: xe,
                initResourceId: se.length > 0 ? se : null === Be || void 0 === Be ? void 0 : Be.activity_last_learning_resource[null === Be || void 0 === Be || null === (d = Be.last_learning_activity) || void 0 === d ? void 0 : d.activity_id],
                isOpenCatalog: !0,
                newHeight: 0,
                onBeforeChangeCatalog: Ht,
                onChangeCatalog: Bt,
                progress: Je,
                libraryId: G,
                isDocument: "document" === (null === Me || void 0 === Me ? void 0 : Me.resource_type) && (null === Me || void 0 === Me || null === (x = Me.document_extend) || void 0 === x ? void 0 : x.files)
            })))), Rt && null !== Me && void 0 !== Me && Me.work_id ? l.createElement(un, {
                courseId: le,
                workId: null === Me || void 0 === Me ? void 0 : Me.work_id,
                workQuery: "name=".concat(Kt, "&breadcrumb=").concat(Y, "&tag=").concat(T, "&channelId=").concat(oe, "&libraryId=").concat(G, "&resourceId=").concat(se, "&workFlag=1")
            }) : l.createElement(l.Fragment, null, ln && l.createElement("div", {
                className: dn["detail-bottom"]
            }, l.createElement(vn, {
                lecturer: Yt || "",
                intro: an || ""
            }), l.createElement(_n, {
                extendReadingData: rn,
                onDownload: Wt
            })), l.createElement(Sn, {
                courseDetail: Ee,
                libraryId: G
            }))), l.createElement(tn, {
                visible: Pt,
                workId: null === Me || void 0 === Me ? void 0 : Me.work_id,
                courseId: le,
                onOk: function() {
                    fn(),
                    Nt(!1)
                },
                onCancel: function() {
                    Nt(!1)
                }
            }))
        }
        var jn = Ln
    },
    99569: function(e, t, n) {
        "use strict";
        e.exports = n.p + "img/avatar-25fdf546.png"
    },
    41310: function(e, t, n) {
        "use strict";
        e.exports = n.p + "img/flod-8342900a.png"
    },
    81451: function(e, t, n) {
        "use strict";
        e.exports = n.p + "img/default-cover-86bfb33a.png"
    },
    9314: function(e, t, n) {
        "use strict";
        e.exports = n.p + "img/exercise2-75577d98.png"
    }
}]);
