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
                    example: "The manager hired a new employee.",
                    ex_meaning: "그 매니저는 새 직원을 고용했다."
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
                    example: "The sales increased significantly.",
                    ex_meaning: "매출이 상당히 증가했다."
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
                    desc: "기능: 타동사 뒤에 옵니다. 명사(N)만 이 자리에 올 수 있습니다.",
                    example: "We attended the seminar.",
                    ex_meaning: "우리는 세미나에 참석했다."
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
                    example: "The report is informative.",
                    ex_meaning: "그 보고서는 유익하다. (보고서=유익함)"
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
                    example: "Please review the file carefully.",
                    ex_meaning: "파일을 주의 깊게 검토해 주세요."
                }
            ]
        }
    ],

    // 2. 8품사
    parts: [
        {
            num: 1,
            word: "Noun (명사)",
            definitions: [
                {
                    pos: "n.",
                    meaning: "사람, 사물, 장소, 추상적 개념의 이름입니다.",
                    desc: "기능: 주어(S), 목적어(O), 보어(C) 자리에 들어갑니다. (전치사 뒤에도 필수)",
                    example: "meeting, office, information",
                    ex_meaning: "회의, 사무실, 정보"
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
                    example: "I, You, It, They, This",
                    ex_meaning: "나, 너, 그것, 그들, 이것"
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
                    example: "run, study, become, exist",
                    ex_meaning: "달리다, 공부하다, 되다, 존재하다"
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
                    example: "happy, smart, available",
                    ex_meaning: "행복한, 똑똑한, 이용 가능한"
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
                    example: "quickly, very, always",
                    ex_meaning: "빠르게, 매우, 항상"
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
                    example: "in, on, at, for, with",
                    ex_meaning: "~안에, ~위에, ~에, ~를 위해, ~와 함께"
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
                    example: "and, but, because, if",
                    ex_meaning: "그리고, 그러나, 때문에, 만약"
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
                    example: "Oh!, Wow!, Ouch!",
                    ex_meaning: "오!, 와!, 아야!"
                }
            ]
        }
    ],

    // 3. 준동사 (새로 추가됨)
    verbals: [
        {
            num: 1,
            word: "to-Infinitive (to부정사)",
            definitions: [
                {
                    pos: "to-V",
                    meaning: "원래는 동사이나 품사가 정해지지 않은 말 (형태: to + 동사원형)",
                    desc: "기능(멀티플레이어): 명사(가는 것), 형용사(갈), 부사(가기 위해)처럼 다양하게 쓰임.",
                    example: "To learn English is fun.",
                    ex_meaning: "영어를 배우는 것은 재미있다. (명사 역할)"
                }
            ]
        },
        {
            num: 2,
            word: "Gerund (동명사)",
            definitions: [
                {
                    pos: "V-ing",
                    meaning: "동사를 명사로 바꾼 것. (~하는 것) (형태: 동사원형 + ing)",
                    desc: "기능: 명사(N) 역할. 주어, 목적어, 보어 자리에 들어갑니다.",
                    example: "I enjoy swimming.",
                    ex_meaning: "나는 수영하는 것을 즐긴다. (목적어 역할)"
                }
            ]
        },
        {
            num: 3,
            word: "Participle (분사)",
            definitions: [
                {
                    pos: "a.",
                    meaning: "동사를 형용사로 바꾼 것. (형태: V-ing / p.p.)",
                    desc: "V-ing: 능동/진행 (~하고 있는) / p.p.: 수동/완료 (~된, ~해진)",
                    example: "Sleeping baby / Broken window",
                    ex_meaning: "자고 있는 아기 / 깨진 창문"
                }
            ]
        }
    ]
};