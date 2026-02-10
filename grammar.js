const grammarData = {
    // 1. 문장 구성 성분
    structure: [
        {
            num: 0,
            word: "문장성분 요약(Summary)",
            definitions: [
                {
                    pos: "개요",
                    meaning: "문장을 이루는 필수 요소와 수식 요소",
                    desc: `
                        <table style="width:100%; border-collapse: collapse; font-size:14px; text-align:center; margin-top:5px;">
                            <tr style="background:#f4f4f4; border-bottom:2px solid #ddd;">
                                <th style="padding:8px; width:30%;">성분</th>
                                <th style="padding:8px;">역할</th>
                            </tr>
                            <tr>
                                <td style="padding:8px; border-bottom:1px solid #eee;">주어(S)</td>
                                <td style="padding:8px; border-bottom:1px solid #eee; text-align:left;">동작의 주체 (주인공)</td>
                            </tr>
                            <tr>
                                <td style="padding:8px; border-bottom:1px solid #eee;">동사(V)</td>
                                <td style="padding:8px; border-bottom:1px solid #eee; text-align:left;">동작이나 상태 서술</td>
                            </tr>
                            <tr>
                                <td style="padding:8px; border-bottom:1px solid #eee;">목적어(O)</td>
                                <td style="padding:8px; border-bottom:1px solid #eee; text-align:left;">동작의 대상</td>
                            </tr>
                            <tr>
                                <td style="padding:8px; border-bottom:1px solid #eee;">보어(C)</td>
                                <td style="padding:8px; border-bottom:1px solid #eee; text-align:left;">주어/목적어 보충 설명</td>
                            </tr>
                            <tr>
                                <td style="padding:8px; color:#888;">수식어(M)</td>
                                <td style="padding:8px; text-align:left; color:#666;">꾸며주는 말 (생략 가능)</td>
                            </tr>
                        </table>
                        <br>
                        ※ <b>필수 문장성분</b>: 주어(S), 동사(V), 목적어(O), 보어(C)<br>
                        ※ 수식어(M)는 문장의 형식을 결정짓지 않는 <b>부가 성분</b>입니다.
                    `,
                    example: "",
                    ex_meaning: ""
                }
            ]
        },
        {
            num: 1,
            word: "주어(Subject)",
            definitions: [
                {
                    pos: "S",
                    meaning: "문장의 주인공, 동작을 행하는 주체",
                    desc: "기능: 문장 맨 앞에 위치합니다. <b>명사(Noun)</b>만 이 자리에 올 수 있습니다. 우리말 '은/는/이/가'가 붙습니다.",
                    example: "<span class='s'>The manager</span> <span class='v'>hired</span> <span class='o'>a new employee</span>.",
                    ex_meaning: "<span class='s'>그 매니저는</span> <span class='o'>새 직원을</span> <span class='v'>고용했다</span>."
                }
            ]
        },
        {
            num: 2,
            word: "동사(Verb)",
            definitions: [
                {
                    pos: "V",
                    meaning: "주어의 동작이나 상태를 나타내는 서술어",
                    desc: "기능: 주어 뒤에 위치합니다. 문장의 결론을 내립니다. 우리말 '~다'로 끝납니다.",
                    example: "<span class='s'>The sales</span> <span class='v'>increased</span> <span class='m'>significantly</span>.",
                    ex_meaning: "<span class='s'>매출이</span> <span class='m'>상당히</span> <span class='v'>증가했다</span>."
                }
            ]
        },
        {
            num: 3,
            word: "목적어(Object)",
            definitions: [
                {
                    pos: "O",
                    meaning: "동사가 하는 행동의 대상",
                    desc: "기능: 타동사(목적어가 필요한 동사) 뒤에 옵니다. <b>명사(Noun)</b>만 가능합니다. 우리말 '을/를'이 붙습니다.",
                    example: "<span class='s'>We</span> <span class='v'>attended</span> <span class='o'>the seminar</span>.",
                    ex_meaning: "<span class='s'>우리는</span> <span class='o'>세미나에</span> <span class='v'>참석했다</span>."
                }
            ]
        },
        {
            num: 4,
            word: "보어(Complement)",
            definitions: [
                {
                    pos: "C",
                    meaning: "주어 또는 목적어를 보충 설명해주는 말",
                    desc: "기능: <b>명사(Noun)</b> 또는 <b>형용사(Adjective)</b>가 옵니다. (부사는 절대 불가). 'A는 B이다'(A=B) 관계가 성립합니다.",
                    example: "<span class='s'>The report</span> <span class='v'>is</span> <span class='c'>informative</span>.",
                    ex_meaning: "<span class='s'>그 보고서는</span> <span class='c'>유익하다</span>."
                }
            ]
        },
        {
            num: 5,
            word: "수식어(Modifier)",
            definitions: [
                {
                    pos: "M",
                    meaning: "다른 문장성분을 꾸며주는 역할 (필수 성분 아님)",
                    desc: "기능: 문장에서 지워버려도 문법적으로 틀리지 않습니다. 주로 <b>부사(Adverb)</b>나 <b>전치사구</b>가 해당됩니다.",
                    example: "<span class='m'>Please</span> <span class='v'>review</span> <span class='o'>the file</span> <span class='m'>carefully</span>.",
                    ex_meaning: "<span class='o'>파일을</span> <span class='m'>주의 깊게</span> <span class='v'>검토해 주세요</span>."
                }
            ]
        }
    ],

    // 2. 문장의 5형식
    patterns: [
        {
            num: 1,
            word: "1형식 주어(S) + 동사(V)",
            definitions: [
                {
                    pos: "S + V",
                    meaning: "주어가 ~한다. (가장 단순한 구조)",
                    desc: "핵심: <b>자동사</b> (목적어 필요 없음). 문장이 길다면 수식어(부사, 전치사구) 때문입니다.<br>주요 동사: go, come, arrive, rise, fall, work, happen, disappear",
                    example: "<span class='s'>The stock market</span> <span class='v'>fell</span>.<br><span class='s'>I</span> <span class='v'>work</span> <span class='m'>[at Joheun Chaek Sinsago]</span>.<br><span class='s'>The accident</span> <span class='v'>happened</span> <span class='m'>[suddenly]</span>.",
                    ex_meaning: "<span class='s'>주식 시장이</span> <span class='v'>떨어졌다</span>.<br><span class='s'>나는</span> <span class='m'>[좋은책신사고에서]</span> <span class='v'>일한다</span>.<br><span class='s'>그 사고는</span> <span class='m'>[갑자기]</span> <span class='v'>일어났다</span>."
                }
            ]
        },
        {
            num: 2,
            word: "2형식 주어(S) + 동사(V) + 주격보어(S.C)",
            definitions: [
                {
                    pos: "S + V + C",
                    meaning: "주어는 (보어)이다/하게 되다/느껴지다. (주어 = 보어)",
                    desc: "핵심: <b>불완전 자동사</b>. 보어 자리에 명사/형용사만 가능 (부사 불가).<br>주요 동사: be, become, remain, seem, look, sound, smell, taste, feel",
                    example: "<span class='s'>He</span> <span class='v'>is</span> <span class='c'>a web designer</span>.<br><span class='s'>The investment</span> <span class='v'>looks</span> <span class='c'>promising</span>.",
                    ex_meaning: "<span class='s'>그는</span> <span class='c'>웹 디자이너</span><span class='v'>이다</span>.<br><span class='s'>그 투자는</span> <span class='c'>유망해</span> <span class='v'>보인다</span>."
                }
            ]
        },
        {
            num: 3,
            word: "3형식 주어(S) + 동사(V) + 목적어(O)",
            definitions: [
                {
                    pos: "S + V + O",
                    meaning: "주어가 (목적어)를 ~한다. (가장 흔한 문장)",
                    desc: "핵심: <b>타동사</b>. 대상이 되는 목적어(~을/를)가 반드시 필요.<br>주요 동사: make, study, discuss, reach, attend, want, hope",
                    example: "<span class='s'>I</span> <span class='v'>study</span> <span class='o'>English</span> <span class='m'>every day</span>.<br><span class='s'>She</span> <span class='v'>wants</span> <span class='o'>to quit her job</span>.",
                    ex_meaning: "<span class='s'>나는</span> <span class='m'>매일</span> <span class='o'>영어를</span> <span class='v'>공부한다</span>.<br><span class='s'>그녀는</span> <span class='o'>직장을 그만두기를</span> <span class='v'>원한다</span>."
                }
            ]
        },
        {
            num: 4,
            word: "4형식 주어(S) + 동사(V) + I.O + D.O",
            definitions: [
                {
                    pos: "S + V + O + O",
                    meaning: "주어가 (누구)에게 (무엇)을 주다.",
                    desc: "핵심: <b>수여동사</b>. 목적어가 2개 (사람 + 물건 순서).<br>주요 동사: give, send, show, teach, tell, buy, make",
                    example: "<span class='s'>He</span> <span class='v'>gave</span> <span class='o'>me</span> <span class='o'>a refund</span>.<br><span class='m'>Please</span> <span class='v'>show</span> <span class='o'>me</span> <span class='o'>your ID card</span>.",
                    ex_meaning: "<span class='s'>그는</span> <span class='o'>나에게</span> <span class='o'>환불을</span> <span class='v'>해주었다</span>.<br><span class='o'>저에게</span> <span class='o'>당신의 신분증을</span> <span class='v'>보여주세요</span>."
                },
                {
                    pos: "3형식 전환 규칙",
                    meaning: "4형식을 3형식으로 바꿀 때 전치사 규칙",
                    desc: "<b>to</b>: give, send, show, teach, tell (방향)<br><b>for</b>: buy, make, get, cook (정성)<br><b>of</b>: ask (질문)",
                    example: "<span class='s'>I</span> <span class='v'>sent</span> <span class='o'>the file</span> <span class='m'>to him</span>.<br><span class='s'>I</span> <span class='v'>bought</span> <span class='o'>a gift</span> <span class='m'>for my wife</span>.",
                    ex_meaning: "<span class='s'>나는</span> <span class='o'>파일을</span> <span class='m'>그에게</span> <span class='v'>보냈다</span>.<br><span class='s'>나는</span> <span class='o'>선물을</span> <span class='m'>아내를 위해</span> <span class='v'>샀다</span>."
                },
                {
                    pos: "실전 전환 연습 (Sets)",
                    meaning: "의미는 같지만 어순이 다른 3, 4형식 연습",
                    desc: "사람이 뒤로 가면 전치사(to, for)가 붙는 것을 확인하세요.<br>(관광통역안내사, 토익 필수 구문)",
                    example: 
                        "<b>[Set 1. Send]</b><br>" +
                        "4형식: <span class='s'>She</span> <span class='v'>sent</span> <span class='o'>me</span> <span class='o'>an email</span>.<br>" +
                        "3형식: <span class='s'>She</span> <span class='v'>sent</span> <span class='o'>an email</span> <span class='m'>to me</span>.<br><br>" +
                        
                        "<b>[Set 2. Make]</b><br>" +
                        "4형식: <span class='s'>I</span> <span class='v'>made</span> <span class='o'>him</span> <span class='o'>a cup of coffee</span>.<br>" +
                        "3형식: <span class='s'>I</span> <span class='v'>made</span> <span class='o'>a cup of coffee</span> <span class='m'>for him</span>.<br><br>" +
                        
                        "<b>[Set 3. Show]</b><br>" +
                        "4형식: <span class='s'>The guide</span> <span class='v'>showed</span> <span class='o'>tourists</span> <span class='o'>the palace</span>.<br>" +
                        "3형식: <span class='s'>The guide</span> <span class='v'>showed</span> <span class='o'>the palace</span> <span class='m'>to tourists</span>.<br><br>" +
                        
                        "<b>[Set 4. Cook]</b><br>" +
                        "4형식: <span class='s'>My wife</span> <span class='v'>cooked</span> <span class='o'>us</span> <span class='o'>a delicious dinner</span>.<br>" +
                        "3형식: <span class='s'>My wife</span> <span class='v'>cooked</span> <span class='o'>a delicious dinner</span> <span class='m'>for us</span>.<br><br>" +
                        
                        "<b>[Set 5. Teach]</b><br>" +
                        "4형식: <span class='s'>He</span> <span class='v'>teaches</span> <span class='o'>students</span> <span class='o'>English grammar</span>.<br>" +
                        "3형식: <span class='s'>He</span> <span class='v'>teaches</span> <span class='o'>English grammar</span> <span class='m'>to students</span>.",
                    ex_meaning: 
                        "(방향성: ~에게 보내다)<br>" +
                        "<span class='s'>그녀는</span> <span class='o'>나에게 이메일을</span> <span class='v'>보냈다</span>.<br>" +
                        "<span class='s'>그녀는</span> <span class='o'>이메일을</span> <span class='v'>보냈다</span> <span class='m'>/ 나에게</span>.<br><br>" +
                        
                        "(정성: ~를 위해 만들어주다)<br>" +
                        "<span class='s'>나는</span> <span class='o'>그에게 커피를</span> <span class='v'>만들어 주었다</span>.<br>" +
                        "<span class='s'>나는</span> <span class='o'>커피를</span> <span class='v'>만들었다</span> <span class='m'>/ 그를 위해서</span>.<br><br>" +
                        
                        "(방향성: ~에게 보여주다)<br>" +
                        "<span class='s'>가이드는</span> <span class='o'>관광객들에게 궁궐을</span> <span class='v'>보여주었다</span>.<br>" +
                        "<span class='s'>가이드는</span> <span class='o'>궁궐을</span> <span class='v'>보여주었다</span> <span class='m'>/ 관광객들에게</span>.<br><br>" +
                        
                        "(정성: ~를 위해 요리해주다)<br>" +
                        "<span class='s'>내 아내는</span> <span class='o'>우리에게 저녁을</span> <span class='v'>요리해 주었다</span>.<br>" +
                        "<span class='s'>내 아내는</span> <span class='o'>저녁을</span> <span class='v'>요리했다</span> <span class='m'>/ 우리를 위해서</span>.<br><br>" +
                        
                        "(방향성: ~에게 가르쳐주다)<br>" +
                        "<span class='s'>그는</span> <span class='o'>학생들에게 문법을</span> <span class='v'>가르친다</span>.<br>" +
                        "<span class='s'>그는</span> <span class='o'>문법을</span> <span class='v'>가르친다</span> <span class='m'>/ 학생들에게</span>."
                }
            ]
        },
        {
            num: 5,
            word: "5형식 주어(S) + 동사(V) + 목적어(O) + 목적격보어(O.C)",
            definitions: [
                {
                    pos: "S + V + O + C",
                    meaning: "주어는 (목적어)가 (보어)라고 생각하다/하게 만들다.",
                    desc: "핵심: 목적어와 보어 사이에 <b>주어-서술어 관계</b> 성립 (O = O.C 또는 O가 O.C하다).<br>주요 동사: make, keep, find, consider, call, allow, expect",
                    example: "<span class='s'>You</span> <span class='v'>make</span> <span class='o'>me</span> <span class='c'>happy</span>.<br><span class='s'>They</span> <span class='v'>call</span> <span class='o'>him</span> <span class='c'>a genius</span>.",
                    ex_meaning: "<span class='s'>너는</span> <span class='o'>나를</span> <span class='c'>행복하게</span> <span class='v'>만든다</span>.<br><span class='s'>그들은</span> <span class='o'>그를</span> <span class='c'>천재라고</span> <span class='v'>부른다</span>."
                },
                {
                    pos: "행동 유발 (O.C가 동사)",
                    meaning: "목적어가 ~한 행동을 하도록 하다 (보어 전체 범위)",
                    desc: "<b>to부정사</b>: order, allow, expect, ask<br><b>동사원형</b>: 지각동사(see, hear), 사역동사(make, have, let)",
                    example: "<span class='s'>The manager</span> <span class='v'>ordered</span> <span class='o'>him</span> <span class='c'>to leave</span>.<br><span class='s'>I</span> <span class='v'>saw</span> <span class='o'>him</span> <span class='c'>enter the room</span>.",
                    ex_meaning: "<span class='s'>매니저는</span> <span class='o'>그에게</span> <span class='c'>나가라고</span> <span class='v'>명령했다</span>.<br><span class='s'>나는</span> <span class='o'>그가</span> <span class='c'>방에 들어가는 것을</span> <span class='v'>보았다</span>."
                }
            ]
        }
    ],

    // 3. 8품사
    parts: [
        {
            num: 1,
            word: "명사(Noun)",
            definitions: [
                {
                    pos: "n.",
                    meaning: "사람, 사물, 장소, 추상적 개념의 이름입니다.",
                    desc: "기능: 주어(S), 목적어(O), 보어(C) 자리에 들어갑니다. (전치사 뒤에도 필수)",
                    example: "<span class='s'>The manager</span> <span class='v'>checked</span> <span class='o'>the schedule</span>.<br><span class='s'>Information</span> <span class='v'>is</span> <span class='c'>valuable</span>.",
                    ex_meaning: "<span class='s'>매니저가</span> <span class='o'>일정을</span> <span class='v'>확인했다</span>.<br><span class='s'>정보는</span> <span class='c'>가치가</span> <span class='v'>있다</span>."
                }
            ]
        },
        {
            num: 2,
            word: "대명사(Pronoun)",
            definitions: [
                {
                    pos: "pron.",
                    meaning: "명사를 대신해서 부르는 말입니다.",
                    desc: "기능: 명사와 똑같이 S, O, C 자리에 들어갑니다.",
                    example: "<span class='s'>She</span> <span class='v'>sent</span> <span class='o'>an email</span> <span class='m'>to him</span>.<br><span class='s'>This</span> <span class='v'>is</span> <span class='c'>my office</span>.",
                    ex_meaning: "<span class='s'>그녀는</span> <span class='m'>그에게</span> <span class='o'>이메일을</span> <span class='v'>보냈다</span>.<br><span class='s'>이것은</span> <span class='c'>내 사무실</span><span class='v'>이다</span>."
                }
            ]
        },
        {
            num: 3,
            word: "동사(Verb)",
            definitions: [
                {
                    pos: "v.",
                    meaning: "동작이나 상태를 나타내는 말입니다.",
                    desc: "기능: 문장의 동사(V) 자리에 들어갑니다.",
                    example: "<span class='s'>The team</span> <span class='v'>developed</span> <span class='o'>a new product</span>.<br><span class='s'>He</span> <span class='v'>looks</span> <span class='c'>tired</span>.",
                    ex_meaning: "<span class='s'>그 팀은</span> <span class='o'>신제품을</span> <span class='v'>개발했다</span>.<br><span class='s'>그는</span> <span class='c'>피곤해</span> <span class='v'>보인다</span>."
                }
            ]
        },
        {
            num: 4,
            word: "형용사(Adjective)",
            definitions: [
                {
                    pos: "adj.",
                    meaning: "명사의 성질, 상태, 크기, 색깔 등을 설명하는 말입니다. (~한, ~의)",
                    desc: "기능: 명사(N)를 수식하거나, 보어(C) 자리에 들어갑니다.",
                    example: "<span class='s'>She</span> <span class='v'>has</span> <span class='o'>a creative idea</span>.<br><span class='s'>The room</span> <span class='v'>is</span> <span class='c'>spacious</span>.",
                    ex_meaning: "<span class='s'>그녀는</span> <span class='o'>창의적인 아이디어를</span> <span class='v'>가지고 있다</span>.<br><span class='s'>그 방은</span> <span class='c'>넓다</span>."
                }
            ]
        },
        {
            num: 5,
            word: "부사(Adverb)",
            definitions: [
                {
                    pos: "adv.",
                    meaning: "명사를 제외한 나머지(동사, 형용사, 다른 부사, 문장 전체)를 꾸며주는 말입니다. (~게, ~히)",
                    desc: "기능: 수식어(M) 역할만 합니다. 문장 구조(뼈대)에는 포함되지 않습니다.",
                    example: "<span class='s'>He</span> <span class='v'>finished</span> <span class='o'>the work</span> <span class='m'>quickly</span>.<br><span class='s'>It</span> <span class='v'>is</span> <span class='c'>very expensive</span>.",
                    ex_meaning: "<span class='s'>그는</span> <span class='o'>일을</span> <span class='m'>빨리</span> <span class='v'>끝냈다</span>.<br><span class='s'>그것은</span> <span class='c'>매우 비싸다</span>."
                }
            ]
        },
        {
            num: 6,
            word: "전치사(Preposition)",
            definitions: [
                {
                    pos: "prep.",
                    meaning: "명사 앞에 놓여 시간, 장소, 방향 등을 나타내는 연결어입니다.",
                    desc: "기능: 반드시 뒤에 명사(N)와 한 덩어리로 쓰입니다. 이 덩어리는 형용사나 부사 역할을 합니다.",
                    example: "<span class='s'>The meeting</span> <span class='v'>is</span> <span class='m'>in the conference room</span>.<br><span class='m'>Please</span> <span class='v'>send</span> <span class='o'>it</span> <span class='m'>by Friday</span>.",
                    ex_meaning: "<span class='s'>회의는</span> <span class='m'>회의실 안에(에서)</span> <span class='v'>있다</span>.<br><span class='m'>금요일까지</span> <span class='o'>그것을</span> <span class='v'>보내주세요</span>."
                }
            ]
        },
        {
            num: 7,
            word: "접속사(Conjunction)",
            definitions: [
                {
                    pos: "conj.",
                    meaning: "단어와 단어, 문장과 문장을 연결해 주는 풀 같은 말입니다.",
                    desc: "기능: 문장을 길게 이어주는 역할을 합니다.",
                    example: "<span class='s'>I</span> <span class='v'>wanted to go</span>, <span class='m'>but</span> <span class='s'>I</span> <span class='v'>was</span> <span class='c'>busy</span>.<br><span class='m'>Please</span> <span class='v'>call</span> <span class='o'>me</span> <span class='m'>if you need help</span>.",
                    ex_meaning: "<span class='s'>나는</span> <span class='v'>가고 싶었</span><span class='m'>지만</span> <span class='c'>바빴다</span>.<br><span class='m'>도움이 필요하다면</span> <span class='o'>나에게</span> <span class='v'>전화해 주세요</span>."
                }
            ]
        },
        {
            num: 8,
            word: "감탄사(Interjection)",
            definitions: [
                {
                    pos: "interj.",
                    meaning: "기쁨, 슬픔, 놀람 등의 감정을 나타내는 말입니다.",
                    desc: "설명: 토익 문법 문제에 출제되지 않습니다. 무시하십시오.",
                    example: "<span class='m'>Wow</span>, <span class='s'>the view</span> <span class='v'>is</span> <span class='c'>amazing</span>!<br><span class='m'>Oh</span>, <span class='s'>I</span> <span class='v'>forgot</span> <span class='o'>my wallet</span>.",
                    ex_meaning: "<span class='m'>와</span>, <span class='s'>경치가</span> <span class='c'>놀랍다</span>!<br><span class='m'>아</span>, <span class='s'>나는</span> <span class='o'>지갑을</span> <span class='v'>깜빡했다</span>."
                }
            ]
        }
    ],

    // 4. 준동사 (타이틀 한글(영어)로 변경됨)
    verbals: [
        {
            num: 1,
            word: "to부정사(to-Infinitive)",
            definitions: [
                {
                    pos: "명사적 용법",
                    meaning: "명사처럼 쓰임 (~하는 것)",
                    desc: "기능: 주어, 목적어, 보어 자리에 위치",
                    example: "<span class='s'>To learn English</span> <span class='v'>is</span> <span class='c'>fun</span>.",
                    ex_meaning: "<span class='s'>영어를 배우는 것은</span> <span class='c'>재미있다</span>."
                },
                {
                    pos: "형용사적 용법",
                    meaning: "형용사처럼 쓰임 (~할)",
                    desc: "기능: 명사 뒤에서 수식",
                    example: "<span class='s'>I</span> <span class='v'>have</span> <span class='o'>a book to read</span>.",
                    ex_meaning: "<span class='s'>나는</span> <span class='o'>읽을 책이</span> <span class='v'>있다</span>."
                },
                {
                    pos: "부사적 용법",
                    meaning: "부사처럼 쓰임 (~하기 위해)",
                    desc: "기능: 동사 수식, 목적 표현",
                    example: "<span class='s'>I</span> <span class='v'>went</span> <span class='m'>there</span> <span class='m'>to meet him</span>.",
                    ex_meaning: "<span class='s'>나는</span> <span class='m'>그를 만나기 위해</span> <span class='m'>거기에</span> <span class='v'>갔다</span>."
                }
            ]
        },
        {
            num: 2,
            word: "동명사(Gerund)",
            definitions: [
                {
                    pos: "주어 역할",
                    meaning: "명사처럼 문장 맨 앞에서 주어 역할",
                    desc: "형태: V-ing (~하는 것은)",
                    example: "<span class='s'>Swimming</span> <span class='v'>is</span> <span class='c'>good for health</span>.",
                    ex_meaning: "<span class='s'>수영하는 것은</span> <span class='c'>건강에 좋다</span>."
                },
                {
                    pos: "목적어 역할",
                    meaning: "동사 뒤에서 목적어 역할",
                    desc: "형태: V-ing (~하는 것을)",
                    example: "<span class='s'>I</span> <span class='v'>enjoy</span> <span class='o'>listening to music</span>.",
                    ex_meaning: "<span class='s'>나는</span> <span class='o'>음악 듣는 것을</span> <span class='v'>즐긴다</span>."
                },
                {
                    pos: "보어 역할",
                    meaning: "주어와 동격 관계 (주어 = ~하는 것)",
                    desc: "형태: be동사 뒤 V-ing (~하는 것이다)",
                    example: "<span class='s'>My hobby</span> <span class='v'>is</span> <span class='c'>collecting stamps</span>.",
                    ex_meaning: "<span class='s'>내 취미는</span> <span class='c'>우표를 모으는 것</span><span class='v'>이다</span>."
                }
            ]
        },
        {
            num: 3,
            word: "분사(Participle)",
            definitions: [
                {
                    pos: "현재분사",
                    meaning: "능동 / 진행의 의미 (형용사 역할)",
                    desc: "형태: V-ing (~하고 있는, ~하게 하는)",
                    example: "<span class='v'>Look at</span> <span class='o'>the sleeping baby</span>.",
                    ex_meaning: "<span class='o'>저 자고 있는 아기를</span> <span class='v'>봐라</span>."
                },
                {
                    pos: "과거분사",
                    meaning: "수동 / 완료의 의미 (형용사 역할)",
                    desc: "형태: p.p. (~된, ~해진, ~당한)",
                    example: "<span class='v'>Watch out for</span> <span class='o'>the broken glass</span>.",
                    ex_meaning: "<span class='o'>깨진 유리를</span> <span class='v'>조심해라</span>."
                }
            ]
        }
    ]
};