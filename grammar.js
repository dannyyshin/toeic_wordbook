const grammarData = {
    structure: [
        {
            num: 0,
            word: "문장성분 요약(Summary)",
            definitions: [
                {
                    pos: "개요",
                    meaning: "문장을 이루는 필수 요소와 수식 요소",
                    desc: `
                        <table style="width:100%; border-collapse: collapse; font-size:14px; text-align:center; border: 1px solid #ddd; background:#fff;">
                            <tr style="background:#f4f4f4; border-bottom:2px solid #ddd;">
                                <th style="padding:10px; border-right:1px solid #ddd;">성분</th>
                                <th style="padding:10px;">역할</th>
                            </tr>
                            <tr>
                                <td style="padding:10px; border-bottom:1px solid #eee; border-right:1px solid #ddd;">주어(S)</td>
                                <td style="padding:10px; border-bottom:1px solid #eee; text-align:left;">동작의 주체 (주인공)</td>
                            </tr>
                            <tr>
                                <td style="padding:10px; border-bottom:1px solid #eee; border-right:1px solid #ddd;">동사(V)</td>
                                <td style="padding:10px; border-bottom:1px solid #eee; text-align:left;">동작이나 상태 서술</td>
                            </tr>
                            <tr>
                                <td style="padding:10px; border-bottom:1px solid #eee; border-right:1px solid #ddd;">목적어(O)</td>
                                <td style="padding:10px; border-bottom:1px solid #eee; text-align:left;">동작의 대상</td>
                            </tr>
                            <tr>
                                <td style="padding:10px; border-bottom:1px solid #eee; border-right:1px solid #ddd;">보어(C)</td>
                                <td style="padding:10px; border-bottom:1px solid #eee; text-align:left;">주어/목적어 보충 설명</td>
                            </tr>
                            <tr>
                                <td style="padding:10px; border-right:1px solid #ddd;">수식어(M)</td>
                                <td style="padding:10px; text-align:left;">꾸며주는 말 (생략 가능)</td>
                            </tr>
                        </table>
                        <br>
                        ※ 필수 문장성분: 주어(S), 동사(V), 목적어(O), 보어(C)<br>
                        ※ 수식어(M)는 문장의 형식을 결정짓지 않는 부가 성분입니다.
                    `,
                    example: "", ex_meaning: ""
                }
            ]
        },
        {
            num: 1,
            word: "주어(Subject)",
            definitions: [{
                pos: "S", meaning: "문장의 주인공, 동작을 행하는 주체",
                desc: "기능: 문장 맨 앞에 위치합니다. <b>명사(Noun)</b>만 가능합니다. 우리말 '은/는/이/가'가 붙습니다.",
                example: "<span class='s'>The manager</span> <span class='v'>hired</span> <span class='o'>a new employee</span>.",
                ex_meaning: "<span class='s'>그 매니저는</span> <span class='o'>새 직원을</span> <span class='v'>고용했다</span>."
            }]
        },
        {
            num: 2,
            word: "동사(Verb)",
            definitions: [{
                pos: "V", meaning: "주어의 동작이나 상태를 나타내는 서술어",
                desc: "기능: <span class='s'>주어</span> 뒤에 위치합니다. 문장의 결론을 내립니다. 우리말 '~다'로 끝납니다.",
                example: "<span class='s'>The sales</span> <span class='v'>increased</span> <span class='m'>significantly</span>.",
                ex_meaning: "<span class='s'>매출이</span> <span class='m'>상당히</span> <span class='v'>증가했다</span>."
            }]
        },
        {
            num: 3,
            word: "목적어(Object)",
            definitions: [{
                pos: "O", meaning: "동사가 하는 행동의 대상",
                desc: "기능: <span class='v'>타동사</span> 뒤에 옵니다. <b>명사(Noun)</b>만 가능합니다. 우리말 '을/를'이 붙습니다.",
                example: "<span class='s'>We</span> <span class='v'>attended</span> <span class='o'>the seminar</span>.",
                ex_meaning: "<span class='s'>우리는</span> <span class='o'>세미나에</span> 참석했다."
            }]
        },
        {
            num: 4,
            word: "보어(Complement)",
            definitions: [{
                pos: "C", meaning: "주어 또는 목적어를 보충 설명해주는 말",
                desc: "기능: <b>명사(Noun)</b> 또는 <b>형용사(Adjective)</b>가 옵니다. '<span class='s'>주어</span> = <span class='c'>보어</span>' 관계가 성립합니다.",
                example: "<span class='s'>The report</span> <span class='v'>is</span> <span class='c'>informative</span>.",
                ex_meaning: "<span class='s'>그 보고서는</span> <span class='c'>유익하다</span>."
            }]
        },
        {
            num: 5,
            word: "수식어(Modifier)",
            definitions: [{
                pos: "M", meaning: "다른 문장성분을 꾸며주는 역할 (필수 성분 아님)",
                desc: "기능: 문장에서 지워버려도 문법적으로 틀리지 않습니다. 주로 <span class='m'>부사(Adverb)</span>나 <b>전치사구</b>가 해당됩니다.",
                example: "<span class='m'>Please</span> <span class='v'>review</span> <span class='o'>the file</span> <span class='m'>carefully</span>.",
                ex_meaning: "<span class='o'>파일을</span> <span class='m'>주의 깊게</span> <span class='v'>검토해 주세요</span>."
            }]
        }
    ],
    patterns: [
        {
            num: 1,
            word: "1형식 주어(S) + 동사(V)",
            definitions: [{
                pos: "S + V", meaning: "주어가 ~한다.",
                desc: "핵심: <b>자동사</b>. 문장이 길다면 <span class='m'>수식어(M)</span> 때문입니다.",
                example: "<span class='s'>The sun</span> <span class='v'>rises</span>.<br><span class='s'>I</span> <span class='v'>work</span> <span class='m'>[in an office]</span>.",
                ex_meaning: "<span class='s'>태양이</span> <span class='v'>뜬다</span>.<br><span class='s'>나는</span> <span class='m'>[사무실에서]</span> <span class='v'>일한다</span>."
            }]
        },
        {
            num: 2,
            word: "2형식 주어(S) + 동사(V) + 주격보어(S.C)",
            definitions: [{
                pos: "S + V + C", meaning: "주어는 (보어)이다/하게 되다. (주어 = 보어)",
                desc: "핵심: <b>불완전 자동사</b>. 보어 자리에 명사/형용사만 가능합니다.",
                example: "<span class='s'>He</span> <span class='v'>is</span> <span class='c'>a teacher</span>.<br><span class='s'>The idea</span> <span class='v'>sounds</span> <span class='c'>great</span>.",
                ex_meaning: "<span class='s'>그는</span> <span class='c'>선생님</span><span class='v'>이다</span>.<br><span class='s'>그 아이디어는</span> <span class='c'>좋게</span> <span class='v'>들린다</span>."
            }]
        },
        {
            num: 3,
            word: "3형식 주어(S) + 동사(V) + 목적어(O)",
            definitions: [{
                pos: "S + V + O", meaning: "주어가 (목적어)를 ~한다.",
                desc: "핵심: <b>타동사</b>. 대상이 되는 <span class='o'>목적어(O)</span>가 반드시 필요합니다.",
                example: "<span class='s'>I</span> <span class='v'>ordered</span> <span class='o'>coffee</span>.<br><span class='s'>She</span> <span class='v'>likes</span> <span class='o'>her new job</span>.",
                ex_meaning: "<span class='s'>나는</span> <span class='o'>커피를</span> <span class='v'>주문했다</span>.<br><span class='s'>그녀는</span> <span class='o'>그녀의 새 직업을</span> 좋아한다."
            }]
        },
        {
            num: 4,
            word: "4형식 주어(S) + 동사(V) + I.O + D.O",
            definitions: [{
                pos: "Set 연습", meaning: "4형식 ↔ 3형식 전환 연습",
                desc: "사람이 뒤로 가면 전치사(to, for)가 붙습니다.",
                example: "4형식: <span class='s'>She</span> <span class='v'>sent</span> <span class='o'>me</span> <span class='o'>an email</span>.<br>3형식: <span class='s'>She</span> <span class='v'>sent</span> <span class='o'>an email</span> <span class='m'>to me</span>.",
                ex_meaning: "그녀는 <b>나에게 이메일을</b> 보냈다.<br>그녀는 이메일을 보냈다 <b>나에게</b>."
            }]
        },
        {
            num: 5,
            word: "5형식 주어(S) + 동사(V) + 목적어(O) + 목적격보어(O.C)",
            definitions: [{
                pos: "S + V + O + C", meaning: "주어는 (목적어)가 (보어)라고 생각하다.",
                desc: "핵심: 목적어와 보어 사이에 <b>주어-서술어 관계</b> 성립 (O = O.C).",
                example: "<span class='s'>The news</span> <span class='v'>made</span> <span class='o'>us</span> <span class='c'>happy</span>.<br><span class='s'>I</span> <span class='v'>saw</span> <span class='o'>him</span> <span class='c'>enter the room</span>.",
                ex_meaning: "<span class='s'>그 뉴스는</span> <span class='o'>우리를</span> <span class='c'>행복하게</span> 만들었다.<br><span class='s'>나는</span> <span class='o'>그가</span> <span class='c'>방에 들어가는 것을</span> 보았다."
            }]
        }
    ],
    parts: [
        {
            num: 1, word: "명사(Noun)",
            definitions: [{
                pos: "n.", meaning: "이름 (주어, 목적어, 보어 자리)",
                example: "The <b>manager</b> checked the <b>schedule</b>.",
                ex_meaning: "<b>매니저</b>가 <b>일정</b>을 확인했다."
            }]
        },
        {
            num: 2, word: "동사(Verb)",
            definitions: [{
                pos: "v.", meaning: "동작/상태",
                example: "The team <b>developed</b> a new product.",
                ex_meaning: "그 팀은 신제품을 <b>개발했다</b>."
            }]
        }
        // ... (나머지 품사도 동일한 방식으로 <b> 하이라이트 적용)
    ],
    verbals: [
        {
            num: 1, word: "to부정사(to-Infinitive)",
            definitions: [{
                pos: "명사적", meaning: "<b>~하는 것</b>",
                example: "<b>To learn English</b> is fun.",
                ex_meaning: "<b>영어를 배우는 것은</b> 재미있다."
            }]
        },
        {
            num: 2, word: "동명사(Gerund)",
            definitions: [{
                pos: "명사화", meaning: "<b>~하는 것</b>",
                example: "<b>Swimming</b> is good for health.",
                ex_meaning: "<b>수영하는 것은</b> 건강에 좋다."
            }]
        }
    ]
};