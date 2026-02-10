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
                        <table style="width:100%; border-collapse: collapse; font-size:14px; text-align:center; margin-top:5px; border: 1px solid #ddd; background:#fff;">
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
                    desc: "기능: <span class='s'>주어</span> 뒤에 위치합니다. 문장의 결론을 내립니다. 우리말 '~다'로 끝납니다.",
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
                    desc: "기능: <span class='v'>타동사</span> 뒤에 옵니다. <b>명사(Noun)</b>만 가능합니다. 우리말 '을/를'이 붙습니다.",
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
                    desc: "기능: <b>명사(Noun)</b> 또는 <b>형용사(Adjective)</b>가 옵니다. '<span class='s'>주어</span> = <span class='c'>보어</span>' 관계가 성립합니다.",
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
                    desc: "기능: 문장에서 지워버려도 문법적으로 틀리지 않습니다. 주로 <span class='m'>부사(Adverb)</span>나 <b>전치사구</b>가 해당됩니다.",
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
                    desc: "핵심: <b>자동사</b> (목적어 필요 없음). 문장이 길다면 <span class='m'>수식어(M)</span> 때문입니다.",
                    example: "<span class='s'>The sun</span> <span class='v'>rises</span>.<br><span class='s'>I</span> <span class='v'>work</span> <span class='m'>[in an office]</span>.<br><span class='s'>The bus</span> <span class='v'>arrived</span> <span class='m'>[late]</span>.",
                    ex_meaning: "<span class='s'>태양이</span> <span class='v'>뜬다</span>.<br><span class='s'>나는</span> <span class='m'>[사무실에서]</span> <span class='v'>일한다</span>.<br><span class='s'>버스가</span> <span class='m'>[늦게]</span> <span class='v'>도착했다</span>."
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
                    desc: "핵심: <b>불완전 자동사</b>. 보어 자리에 명사/형용사만 가능 (부사 불가).",
                    example: "<span class='s'>He</span> <span class='v'>is</span> <span class='c'>a teacher</span>.<br><span class='s'>The idea</span> <span class='v'>sounds</span> <span class='c'>great</span>.",
                    ex_meaning: "<span class='s'>그는</span> <span class='c'>선생님</span><span class='v'>이다</span>.<br><span class='s'>그 아이디어는</span> <span class='c'>좋게</span> <span class='v'>들린다</span>."
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
                    desc: "핵심: <b>타동사</b>. 대상이 되는 <span class='o'>목적어(O)</span>가 반드시 필요.",
                    example: "<span class='s'>I</span> <span class='v'>ordered</span> <span class='o'>coffee</span>.<br><span class='s'>She</span> <span class='v'>likes</span> <span class='o'>her new job</span>.",
                    ex_meaning: "<span class='s'>나는</span> <span class='o'>커피를</span> <span class='v'>주문했다</span>.<br><span class='s'>그녀는</span> <span class='o'>그녀의 새 직업을</span> <span class='v'>좋아한다</span>."
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
                    desc: "핵심: <b>수여동사</b>. 목적어가 2개 (사람 + 물건 순서).",
                    example: "<span class='s'>He</span> <span class='v'>gave</span> <span class='o'>me</span> <span class='o'>a discount</span>.<br><span class='m'>Please</span> <span class='v'>send</span> <span class='o'>us</span> <span class='o'>the report</span>.",
                    ex_meaning: "<span class='s'>그는</span> <span class='o'>나에게</span> <span class='o'>할인을</span> <span class='v'>해주었다</span>.<br><span class='o'>저희에게</span> <span class='o'>보고서를</span> <span class='v'>보내주세요</span>."
                },
                {
                    pos: "실전 연습",
                    meaning: "의미는 같지만 어순이 다른 3, 4형식 연습",
                    desc: "사람이 뒤로 가면 전치사(to, for)가 붙는 것을 확인하세요.",
                    example: 
                        "<b>[Set 1. Send]</b><br>" +
                        "4형식: <span class='s'>She</span> <span class='v'>sent</span> <span class='o'>me</span> <span class='o'>an email</span>.<br>" +
                        "3형식: <span class='s'>She</span> <span class='v'>sent</span> <span class='o'>an email</span> <span class='m'>to me</span>.<br><br>" +
                        "<b>[Set 2. Make]</b><br>" +
                        "4형식: <span class='s'>I</span> <span class='v'>made</span> <span class='o'>him</span> <span class='o'>a sandwich</span>.<br>" +
                        "3형식: <span class='s'>I</span> <span class='v'>made</span> <span class='o'>a sandwich</span> <span class='m'>for him</span>.",
                    ex_meaning: 
                        "(방향성: ~에게 보내다)<br>" +
                        "<span class='s'>그녀는</span> <span class='o'>나에게 이메일을</span> <span class='v'>보냈다</span>.<br>" +
                        "<span class='s'>그녀는</span> <span class='o'>이메일을</span> <span class='v'>보냈다</span> <span class='m'>/ 나에게</span>.<br><br>" +
                        "(정성: ~를 위해 만들어주다)<br>" +
                        "<span class='s'>나는</span> <span class='o'>그에게 샌드위치를</span> <span class='v'>만들어 주었다</span>.<br>" +
                        "<span class='s'>나는</span> <span class='o'>샌드위치를</span> <span class='v'>만들었다</span> <span class='m'>/ 그를 위해서</span>."
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
                    desc: "핵심: 목적어와 보어 사이에 <b>주어-서술어 관계</b> 성립 (O = O.C).",
                    example: "<span class='s'>The news</span> <span class='v'>made</span> <span class='o'>us</span> <span class='c'>happy</span>.<br><span class='s'>They</span> <span class='v'>found</span> <span class='o'>the movie</span> <span class='c'>interesting</span>.",
                    ex_meaning: "<span class='s'>그 뉴스는</span> <span class='o'>우리를</span> <span class='c'>행복하게</span> <span class='v'>만들었다</span>.<br><span class='s'>그들은</span> <span class='o'>그 영화가</span> <span class='c'>흥미롭다는 것을</span> <span class='v'>알게 되었다</span>."
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
                    meaning: "사람, 사물, 장소, 추상적 개념의 이름",
                    desc: "기능: 주어(S), 목적어(O), 보어(C) 자리에 들어갑니다.",
                    example: "The <b>manager</b> checked the <b>schedule</b>.<br><b>Information</b> is valuable.",
                    ex_meaning: "<b>매니저</b>가 <b>일정</b>을 확인했다.<br><b>정보</b>는 가치가 있다."
                }
            ]
        },
        {
            num: 2,
            word: "대명사(Pronoun)",
            definitions: [
                {
                    pos: "pron.",
                    meaning: "명사를 대신해서 부르는 말",
                    desc: "기능: 명사와 똑같이 주어, 목적어, 보어 자리에 들어갑니다.",
                    example: "<b>She</b> sent an email to <b>him</b>.<br><b>This</b> is my office.",
                    ex_meaning: "<b>그녀</b>는 <b>그</b>에게 이메일을 보냈다.<br><b>이것</b>은 내 사무실이다."
                }
            ]
        },
        {
            num: 3,
            word: "동사(Verb)",
            definitions: [
                {
                    pos: "v.",
                    meaning: "동작이나 상태를 나타내는 말",
                    desc: "기능: 문장의 서술어 자리에 들어갑니다.",
                    example: "The team <b>developed</b> a new product.<br>He <b>looks</b> tired.",
                    ex_meaning: "그 팀은 신제품을 <b>개발했다</b>.<br>그는 피곤해 <b>보인다</b>."
                }
            ]
        },
        {
            num: 4,
            word: "형용사(Adjective)",
            definitions: [
                {
                    pos: "adj.",
                    meaning: "명사의 성질이나 상태를 설명하는 말",
                    desc: "기능: 명사를 수식하거나, 보어(C) 자리에 들어갑니다.",
                    example: "She has a <b>creative</b> idea.<br>The room is <b>spacious</b>.",
                    ex_meaning: "그녀는 <b>창의적인</b> 아이디어를 가지고 있다.<br>그 방은 <b>넓다</b>."
                }
            ]
        },
        {
            num: 5,
            word: "부사(Adverb)",
            definitions: [
                {
                    pos: "adv.",
                    meaning: "명사 빼고 다(동사, 형용사, 다른 부사 등) 꾸며주는 말",
                    desc: "기능: 수식어(M) 역할만 합니다. 문장 구조에는 포함되지 않습니다.",
                    example: "He finished the work <b>quickly</b>.<br>It is <b>very</b> expensive.",
                    ex_meaning: "그는 일을 <b>빨리</b> 끝냈다.<br>그것은 <b>매우</b> 비싸다."
                }
            ]
        },
        {
            num: 6,
            word: "전치사(Preposition)",
            definitions: [
                {
                    pos: "prep.",
                    meaning: "명사 앞에 놓여 시간, 장소, 방향 등을 나타내는 연결어",
                    desc: "기능: 뒤에 명사와 함께 수식어(M) 덩어리를 만듭니다.",
                    example: "The meeting is <b>in</b> the conference room.<br>Please send it <b>by</b> Friday.",
                    ex_meaning: "회의는 회의실 <b>안에</b>(에서) 있다.<br>금요일<b>까지</b> 그것을 보내주세요."
                }
            ]
        },
        {
            num: 7,
            word: "접속사(Conjunction)",
            definitions: [
                {
                    pos: "conj.",
                    meaning: "단어와 단어, 문장과 문장을 연결해 주는 말",
                    desc: "기능: 문장을 길게 이어주는 역할을 합니다.",
                    example: "I wanted to go, <b>but</b> I was busy.<br>Please call me <b>if</b> you need help.",
                    ex_meaning: "나는 가고 싶었<b>지만</b> 바빴다.<br>도움이 필요하다<b>면</b> 전화해 주세요."
                }
            ]
        },
        {
            num: 8,
            word: "감탄사(Interjection)",
            definitions: [
                {
                    pos: "interj.",
                    meaning: "기쁨, 슬픔, 놀람 등의 감정을 나타내는 말",
                    desc: "설명: 토익 시험에는 출제되지 않으며, 문장 성분에 영향이 없습니다.",
                    example: "<b>Wow</b>, the view is amazing!<br><b>Oh</b>, I forgot my wallet.",
                    ex_meaning: "<b>와</b>, 경치가 놀랍다!<br><b>아</b>, 지갑을 깜빡했다."
                }
            ]
        }
    ],

    // 4. 준동사
    verbals: [
        {
            num: 1,
            word: "to부정사(to-Infinitive)",
            definitions: [
                {
                    pos: "명사적",
                    meaning: "명사처럼 쓰임 (<b>~하는 것</b>)",
                    desc: "기능: 주어, 목적어, 보어 자리에 위치",
                    example: "<b>To learn English</b> is fun.",
                    ex_meaning: "영어를 <b>배우는 것은</b> 재미있다."
                },
                {
                    pos: "형용사적",
                    meaning: "형용사처럼 쓰임 (<b>~할</b>)",
                    desc: "기능: 명사 뒤에서 수식",
                    example: "I have a book <b>to read</b>.",
                    ex_meaning: "나는 <b>읽을</b> 책이 있다."
                },
                {
                    pos: "부사적",
                    meaning: "부사처럼 쓰임 (<b>~하기 위해</b>)",
                    desc: "기능: 동사 수식, 목적 표현",
                    example: "I went there <b>to meet him</b>.",
                    ex_meaning: "나는 그를 <b>만나기 위해</b> 거기에 갔다."
                }
            ]
        },
        {
            num: 2,
            word: "동명사(Gerund)",
            definitions: [
                {
                    pos: "명사화",
                    meaning: "동사를 명사로 바꾼 것 (<b>~하는 것</b>)",
                    desc: "형태: V-ing. 주어, 목적어, 보어 자리에 들어갑니다.",
                    example: "<b>Swimming</b> is good for health.<br>I enjoy <b>listening to music</b>.",
                    ex_meaning: "<b>수영하는 것은</b> 건강에 좋다.<br>나는 음악 <b>듣는 것을</b> 즐긴다."
                }
            ]
        },
        {
            num: 3,
            word: "분사(Participle)",
            definitions: [
                {
                    pos: "형용사화",
                    meaning: "동사를 형용사로 바꾼 것",
                    desc: "V-ing(현재분사): 능동/진행 (~하고 있는)<br>p.p.(과거분사): 수동/완료 (~된, ~해진)",
                    example: "Look at the <b>sleeping</b> baby.<br>Watch out for the <b>broken</b> glass.",
                    ex_meaning: "저 <b>자고 있는</b> 아기를 봐라.<br><b>깨진</b> 유리를 조심해라."
                }
            ]
        }
    ]
};