const grammarData = {
    // 1. 문장 구성 성분 데이터
    structure: [
        {
            num: 1,
            word: "Subject (주어)",
            definitions: [
                {
                    pos: "S",
                    meaning: "문장의 주인, 동작을 행하는 주체 ('~은/는/이/가'로 해석). 명사(N)만 가능.",
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
                    meaning: "주어의 동작이나 상태를 서술하는 말 ('~다'로 해석).",
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
                    meaning: "동사의 대상이 되는 말 ('~을/를'로 해석). 명사(N)만 가능.",
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
                    meaning: "주어 설명(주격보어) 또는 목적어 설명(목적격보어)을 하여 뜻을 보충하는 말.",
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
                    meaning: "문장의 주요 성분을 꾸며주는 말. 생략해도 문법적으로 문제 없음.",
                    example: "Please review the file carefully.",
                    ex_meaning: "파일을 주의 깊게 검토해 주세요."
                }
            ]
        }
    ],

    // 2. 8품사 데이터
    parts: [
        {
            num: 1,
            word: "Noun (명사)",
            definitions: [
                {
                    pos: "n.",
                    meaning: "사람, 사물, 장소, 추상적인 개념의 이름. (주어, 목적어, 보어 역할)",
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
                    meaning: "명사를 대신하여 쓰는 말.",
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
                    meaning: "주어의 움직임이나 상태를 나타내는 말.",
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
                    meaning: "명사의 성질이나 상태를 설명하거나 꾸며주는 말. (명사 수식, 보어 역할)",
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
                    meaning: "동사, 형용사, 다른 부사, 문장 전체를 꾸며주는 말. (명사 수식 불가)",
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
                    meaning: "명사 앞에 놓여 시간, 장소, 방향 등을 나타내는 연결어.",
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
                    meaning: "단어와 단어, 문장과 문장을 연결해 주는 말.",
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
                    meaning: "기쁨, 슬픔, 놀람 등의 감정을 나타내는 말. (토익 출제 안 됨)",
                    example: "Oh!, Wow!, Ouch!",
                    ex_meaning: "오!, 와!, 아야!"
                }
            ]
        }
    ]
};