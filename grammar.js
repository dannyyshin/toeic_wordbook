const grammarData = {
    // 1. 문장 구성 성분
    structure: [
        {
            num: 1,
            word: "Subject (주어)",
            definitions: [
                {
                    pos: "S",
                    meaning: "문장의 주체가 되는 말. 우리말의 '은/는/이/가'가 붙습니다.",
                    desc: "기능: 문장 맨 앞에 위치합니다. 명사(N)만 이 자리에 올 수 있습니다.",
                    example: "<b>The manager</b> hired a new employee.",
                    ex_meaning: "<b>그 매니저는</b> 새 직원을 고용했다."
                }
            ]
        },
        {
            num: 2,
            word: "Verb (동사)",
            definitions: [
                {
                    pos: "V",
                    meaning: "주어의 동작이나 상태를 서술하는 말. 우리말의 '~다'로 끝납니다.",
                    desc: "기능: 주어 뒤에 위치합니다. 문장의 결론을 내립니다.",
                    example: "The sales <b>increased</b> significantly.",
                    ex_meaning: "매출이 상당히 <b>증가했다</b>."
                }
            ]
        },
        {
            num: 3,
            word: "Object (목적어)",
            definitions: [
                {
                    pos: "O",
                    meaning: "동사가 하는 행동의 대상. 우리말의 '을/를'이 붙습니다.",
                    desc: "기능: 타동사(목적어가 필요한 동사) 뒤에 옵니다. 명사(N)만 이 자리에 올 수 있습니다.",
                    example: "We attended <b>the seminar</b>.",
                    ex_meaning: "우리는 <b>세미나에</b> 참석했다."
                }
            ]
        },
        {
            num: 4,
            word: "Complement (보어)",
            definitions: [
                {
                    pos: "C",
                    meaning: "주어(S)나 목적어(O)에 대한 보충 설명. 'A는 B이다'(A=B) 관계가 성립합니다.",
                    desc: "기능: 명사(N) 또는 형용사(a)가 이 자리에 옵니다. (부사는 절대 불가)",
                    example: "The report is <b>informative</b>.",
                    ex_meaning: "그 보고서는 <b>유익하다</b>. (보고서=유익함)"
                }
            ]
        },
        {
            num: 5,
            word: "Modifier (수식어)",
            definitions: [
                {
                    pos: "M",
                    meaning: "문장 성분(S,V,O,C)을 제외한 나머지 꾸며주는 말들입니다.",
                    desc: "기능: 문장에서 지워버려도 문법적으로 틀리지 않습니다. 주로 부사(ad)나 전치사구가 해당됩니다.",
                    example: "Please review the file <b>carefully</b>.",
                    ex_meaning: "파일을 <b>주의 깊게</b> 검토해 주세요."
                }
            ]
        }
    ],

    // 2. 8품사 (예문 2개씩 추가됨)
    parts: [
        {
            num: 1,
            word: "Noun (명사)",
            definitions: [
                {
                    pos: "n.",
                    meaning: "사람, 사물, 장소, 추상적 개념의 이름입니다.",
                    desc: "기능: 주어(S), 목적어(O), 보어(C) 자리에 들어갑니다. (전치사 뒤에도 필수)",
                    example: "The <b>manager</b> checked the <b>schedule</b>.<br><b>Information</b> is valuable.",
                    ex_meaning: "<b>매니저</b>가 <b>일정</b>을 확인했다.<br><b>정보</b>는 가치가 있다."
                }
            ]
        },
        {
            num: 2,
            word: "Pronoun (대명사)",
            definitions: [
                {
                    pos: "pron.",
                    meaning: "명사를 대신해서 부르는 말입니다.",
                    desc: "기능: 명사와 똑같이 S, O, C 자리에 들어갑니다.",
                    example: "<b>She</b> sent an email to <b>him</b>.<br><b>This</b> is my office.",
                    ex_meaning: "<b>그녀</b>는 <b>그</b>에게 이메일을 보냈다.<br><b>이것</b>은 내 사무실이다."
                }
            ]
        },
        {
            num: 3,
            word: "Verb (동사)",
            definitions: [
                {
                    pos: "v.",
                    meaning: "동작이나 상태를 나타내는 말입니다.",
                    desc: "기능: 문장의 동사(V) 자리에 들어갑니다.",
                    example: "The team <b>developed</b> a new product.<br>He <b>looks</b> tired.",
                    ex_meaning: "그 팀은 신제품을 <b>개발했다</b>.<br>그는 피곤해 <b>보인다</b>."
                }
            ]
        },
        {
            num: 4,
            word: "Adjective (형용사)",
            definitions: [
                {
                    pos: "adj.",
                    meaning: "명사의 성질, 상태, 크기, 색깔 등을 설명하는 말입니다. (~한, ~의)",
                    desc: "기능: 명사(N)를 수식하거나, 보어(C) 자리에 들어갑니다.",
                    example: "She has a <b>creative</b> idea.<br>The room is <b>spacious</b>.",
                    ex_meaning: "그녀는 <b>창의적인</b> 아이디어를 가지고 있다.<br>그 방은 <b>넓다</b>."
                }
            ]
        },
        {
            num: 5,
            word: "Adverb (부사)",
            definitions: [
                {
                    pos: "adv.",
                    meaning: "명사를 제외한 나머지(동사, 형용사, 다른 부사, 문장 전체)를 꾸며주는 말입니다. (~게, ~히)",
                    desc: "기능: 수식어(M) 역할만 합니다. 문장 구조(뼈대)에는 포함되지 않습니다.",
                    example: "He finished the work <b>quickly</b>.<br>It is <b>very</b> expensive.",
                    ex_meaning: "그는 일을 <b>빨리</b> 끝냈다.<br>그것은 <b>매우</b> 비싸다."
                }
            ]
        },
        {
            num: 6,
            word: "Preposition (전치사)",
            definitions: [
                {
                    pos: "prep.",
                    meaning: "명사 앞에 놓여 시간, 장소, 방향 등을 나타내는 연결어입니다.",
                    desc: "기능: 반드시 뒤에 명사(N)와 한 덩어리로 쓰입니다. 이 덩어리는 형용사나 부사 역할을 합니다.",
                    example: "The meeting is <b>in</b> the conference room.<br>Please send it <b>by</b> Friday.",
                    ex_meaning: "회의는 회의실 <b>안에</b>(에서) 있다.<br>금요일<b>까지</b> 그것을 보내주세요."
                }
            ]
        },
        {
            num: 7,
            word: "Conjunction (접속사)",
            definitions: [
                {
                    pos: "conj.",
                    meaning: "단어와 단어, 문장과 문장을 연결해 주는 풀 같은 말입니다.",
                    desc: "기능: 문장을 길게 이어주는 역할을 합니다.",
                    example: "I wanted to go, <b>but</b> I was busy.<br>Please call me <b>if</b> you need help.",
                    ex_meaning: "나는 가고 싶었<b>지만</b> 바빴다.<br>도움이 필요하다<b>면</b> 전화해 주세요."
                }
            ]
        },
        {
            num: 8,
            word: "Interjection (감탄사)",
            definitions: [
                {
                    pos: "interj.",
                    meaning: "기쁨, 슬픔, 놀람 등의 감정을 나타내는 말입니다.",
                    desc: "설명: 토익 문법 문제에 출제되지 않습니다. 무시하십시오.",
                    example: "<b>Wow</b>, the view is amazing!<br><b>Oh</b>, I forgot my wallet.",
                    ex_meaning: "<b>와</b>, 경치가 놀랍다!<br><b>아</b>, 지갑을 깜빡했다."
                }
            ]
        }
    ],

    // 3. 준동사 (동명사 보어 역할 추가됨)
    verbals: [
        {
            num: 1,
            word: "to-Infinitive (to부정사)",
            definitions: [
                {
                    pos: "명사적 용법",
                    meaning: "명사처럼 쓰임 (~하는 것)",
                    desc: "기능: 주어, 목적어, 보어 자리에 위치",
                    example: "<b>To learn</b> English is fun.",
                    ex_meaning: "영어를 <b>배우는 것은</b> 재미있다. (주어)"
                },
                {
                    pos: "형용사적 용법",
                    meaning: "형용사처럼 쓰임 (~할)",
                    desc: "기능: 명사 뒤에서 수식",
                    example: "I have a book <b>to read</b>.",
                    ex_meaning: "나는 <b>읽을</b> 책이 있다. (명사 수식)"
                },
                {
                    pos: "부사적 용법",
                    meaning: "부사처럼 쓰임 (~하기 위해)",
                    desc: "기능: 동사 수식, 목적 표현",
                    example: "I went there <b>to meet</b> him.",
                    ex_meaning: "나는 그를 <b>만나기 위해</b> 거기에 갔다."
                }
            ]
        },
        {
            num: 2,
            word: "Gerund (동명사)",
            definitions: [
                {
                    pos: "주어 역할",
                    meaning: "명사처럼 문장 맨 앞에서 주어 역할",
                    desc: "형태: V-ing (~하는 것은)",
                    example: "<b>Swimming</b> is good for health.",
                    ex_meaning: "<b>수영하는 것은</b> 건강에 좋다."
                },
                {
                    pos: "목적어 역할",
                    meaning: "동사 뒤에서 목적어 역할",
                    desc: "형태: V-ing (~하는 것을)",
                    example: "I enjoy <b>listening</b> to music.",
                    ex_meaning: "나는 음악 <b>듣는 것을</b> 즐긴다."
                },
                {
                    pos: "보어 역할",
                    meaning: "주어와 동격 관계 (주어 = ~하는 것)",
                    desc: "형태: be동사 뒤 V-ing (~하는 것이다)",
                    example: "My hobby is <b>collecting</b> stamps.",
                    ex_meaning: "내 취미는 우표를 <b>모으는 것이다</b>."
                }
            ]
        },
        {
            num: 3,
            word: "Participle (분사)",
            definitions: [
                {
                    pos: "현재분사",
                    meaning: "능동 / 진행의 의미 (형용사 역할)",
                    desc: "형태: V-ing (~하고 있는, ~하게 하는)",
                    example: "Look at the <b>sleeping</b> baby.",
                    ex_meaning: "저 <b>자고 있는</b> 아기를 봐라."
                },
                {
                    pos: "과거분사",
                    meaning: "수동 / 완료의 의미 (형용사 역할)",
                    desc: "형태: p.p. (~된, ~해진, ~당한)",
                    example: "Watch out for the <b>broken</b> glass.",
                    ex_meaning: "<b>깨진</b> 유리를 조심해라."
                }
            ]
        }
    ]
};