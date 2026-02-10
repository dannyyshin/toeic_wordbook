const vocaData = [
  // ==========================================
  // Day 1: 엑셀 넘버링 순서 반영 (1~40)
  // ==========================================
  {
    day: 1,
    num: 1,
    word: "resume",
    definitions: [
      {
        pos: "n.",
        meaning: "이력서",
        example: "Applicants must submit a resume.",
        ex_meaning: "지원자들은 이력서를 제출해야 한다."
      }
    ],
    derivatives: []
  },
  {
    day: 1,
    num: 2,
    word: "applicant",
    definitions: [
      {
        pos: "n.",
        meaning: "지원자, 신청자",
        example: "The successful applicant will be notified.",
        ex_meaning: "합격한 지원자는 통보를 받을 것이다."
      }
    ],
    derivatives: [
      {
        word: "apply",
        pos: "v.",
        meaning: "지원하다",
        example: "Apply for the job.",
        ex_meaning: "그 일자리에 지원하다."
      }
    ]
  },
  {
    day: 1,
    num: 3,
    word: "requirement",
    definitions: [
      {
        pos: "n.",
        meaning: "필요조건, 요건",
        example: "A degree is a requirement for this job.",
        ex_meaning: "학위는 이 직업의 필요조건이다."
      }
    ],
    derivatives: [
      {
        word: "require",
        pos: "v.",
        meaning: "요구하다",
        example: "The project requires time.",
        ex_meaning: "그 프로젝트는 시간을 요구한다."
      }
    ]
  },
  {
    day: 1,
    num: 4,
    word: "meet",
    definitions: [
      {
        pos: "v.",
        meaning: "(필요, 요구 등을) 만족시키다",
        example: "The product meets safety standards.",
        ex_meaning: "그 제품은 안전 기준을 만족시킨다."
      }
    ],
    derivatives: []
  },
  {
    day: 1,
    num: 5,
    word: "qualified",
    definitions: [
      {
        pos: "adj.",
        meaning: "자격있는, 적격의",
        example: "He is qualified for the position.",
        ex_meaning: "그는 그 직책에 적격이다."
      }
    ],
    derivatives: [
      {
        word: "qualify",
        pos: "v.",
        meaning: "자격을 갖추다",
        example: "Qualify for the finals.",
        ex_meaning: "결승 자격을 갖추다."
      },
      {
        word: "qualification",
        pos: "n.",
        meaning: "자격",
        example: "Check qualifications.",
        ex_meaning: "자격을 확인하다."
      }
    ]
  },
  {
    day: 1,
    num: 6,
    word: "candidate",
    definitions: [
      {
        pos: "n.",
        meaning: "후보자, 지원자",
        example: "There are three candidates for the role.",
        ex_meaning: "그 역할에 대해 세 명의 후보자가 있다."
      }
    ],
    derivatives: []
  },
  {
    day: 1,
    num: 7,
    word: "confidence",
    definitions: [
      {
        pos: "n.",
        meaning: "확신, 자신, 신임",
        example: "I have confidence in his ability.",
        ex_meaning: "나는 그의 능력에 확신이 있다."
      }
    ],
    derivatives: [
      {
        word: "confident",
        pos: "adj.",
        meaning: "확신하는",
        example: "Be confident.",
        ex_meaning: "자신감을 가져라."
      }
    ]
  },
  {
    day: 1,
    num: 8,
    word: "highly",
    definitions: [
      {
        pos: "adv.",
        meaning: "매우, 대단히",
        example: "She is highly regarded.",
        ex_meaning: "그녀는 매우 높게 평가받는다."
      }
    ],
    derivatives: []
  },
  {
    day: 1,
    num: 9,
    word: "professional",
    definitions: [
      {
        pos: "adj.",
        meaning: "전문적인, 직업의",
        example: "Professional advice.",
        ex_meaning: "전문적인 조언."
      },
      {
        pos: "n.",
        meaning: "전문가",
        example: "He is a real professional.",
        ex_meaning: "그는 진짜 전문가다."
      }
    ],
    derivatives: [
      {
        word: "profession",
        pos: "n.",
        meaning: "직업",
        example: "Medical profession.",
        ex_meaning: "의료직."
      }
    ]
  },
  {
    day: 1,
    num: 10,
    word: "interview",
    definitions: [
      {
        pos: "n.",
        meaning: "면접",
        example: "Job interview.",
        ex_meaning: "취업 면접."
      },
      {
        pos: "v.",
        meaning: "면접을 보다",
        example: "Interview a candidate.",
        ex_meaning: "후보자를 면접하다."
      }
    ],
    derivatives: []
  },
  {
    day: 1,
    num: 11,
    word: "hire",
    definitions: [
      {
        pos: "v.",
        meaning: "고용하다",
        example: "We hired a new manager.",
        ex_meaning: "우리는 새 매니저를 고용했다."
      }
    ],
    derivatives: []
  },
  {
    day: 1,
    num: 12,
    word: "training",
    definitions: [
      {
        pos: "n.",
        meaning: "교육, 훈련",
        example: "Attend a training session.",
        ex_meaning: "교육 세션에 참석하다."
      }
    ],
    derivatives: []
  },
  {
    day: 1,
    num: 13,
    word: "reference",
    definitions: [
      {
        pos: "n.",
        meaning: "추천서, 참고",
        example: "Provide a reference.",
        ex_meaning: "추천서를 제출하다."
      }
    ],
    derivatives: [
      {
        word: "refer",
        pos: "v.",
        meaning: "참조하다",
        example: "Refer to the manual.",
        ex_meaning: "매뉴얼을 참조하다."
      }
    ]
  },
  {
    day: 1,
    num: 14,
    word: "position",
    definitions: [
      {
        pos: "n.",
        meaning: "일자리, 직책; 위치",
        example: "Apply for a position.",
        ex_meaning: "일자리에 지원하다."
      },
      {
        pos: "v.",
        meaning: "두다",
        example: "Position the desk here.",
        ex_meaning: "책상을 여기에 두어라."
      }
    ],
    derivatives: []
  },
  {
    day: 1,
    num: 15,
    word: "achievement",
    definitions: [
      {
        pos: "n.",
        meaning: "성취, 달성",
        example: "A sense of achievement.",
        ex_meaning: "성취감."
      }
    ],
    derivatives: [
      {
        word: "achieve",
        pos: "v.",
        meaning: "성취하다",
        example: "Achieve success.",
        ex_meaning: "성공을 성취하다."
      }
    ]
  },
  {
    day: 1,
    num: 16,
    word: "impressed",
    definitions: [
      {
        pos: "adj.",
        meaning: "인상 깊게 생각하는, 감명을 받은",
        example: "I was impressed by the service.",
        ex_meaning: "나는 서비스에 감명받았다."
      }
    ],
    derivatives: [
      {
        word: "impress",
        pos: "v.",
        meaning: "인상을 주다",
        example: "Impress the boss.",
        ex_meaning: "상사에게 인상을 주다."
      },
      {
        word: "impression",
        pos: "n.",
        meaning: "인상",
        example: "First impression.",
        ex_meaning: "첫인상."
      }
    ]
  },
  {
    day: 1,
    num: 17,
    word: "excellent",
    definitions: [
      {
        pos: "adj.",
        meaning: "훌륭한",
        example: "Excellent results.",
        ex_meaning: "훌륭한 결과."
      }
    ],
    derivatives: []
  },
  {
    day: 1,
    num: 18,
    word: "eligible",
    definitions: [
      {
        pos: "adj.",
        meaning: "자격이 있는, 적격의",
        example: "Eligible for a refund.",
        ex_meaning: "환불 자격이 있는."
      }
    ],
    derivatives: [
      {
        word: "eligibility",
        pos: "n.",
        meaning: "적격성",
        example: "Check eligibility.",
        ex_meaning: "적격성을 확인하다."
      }
    ]
  },
  {
    day: 1,
    num: 19,
    word: "identify",
    definitions: [
      {
        pos: "v.",
        meaning: "알아보다, 확인하다",
        example: "Identify the problem.",
        ex_meaning: "문제를 확인하다."
      }
    ],
    derivatives: [
      {
        word: "identification",
        pos: "n.",
        meaning: "신분증",
        example: "Show identification.",
        ex_meaning: "신분증을 보여주다."
      }
    ]
  },
  {
    day: 1,
    num: 20,
    word: "associate",
    definitions: [
      {
        pos: "v.",
        meaning: "관련시키다",
        example: "Associate A with B.",
        ex_meaning: "A와 B를 관련시키다."
      }
    ],
    derivatives: [
      {
        word: "association",
        pos: "n.",
        meaning: "협회",
        example: "Alumni association.",
        ex_meaning: "동창회."
      }
    ]
  },
  {
    day: 1,
    num: 21,
    word: "condition",
    definitions: [
      {
        pos: "n.",
        meaning: "조건, 상태",
        example: "Working conditions.",
        ex_meaning: "근무 조건."
      }
    ],
    derivatives: []
  },
  {
    day: 1,
    num: 22,
    word: "employment",
    definitions: [
      {
        pos: "n.",
        meaning: "고용",
        example: "Employment contract.",
        ex_meaning: "고용 계약."
      }
    ],
    derivatives: [
      {
        word: "employ",
        pos: "v.",
        meaning: "고용하다",
        example: "Employ staff.",
        ex_meaning: "직원을 고용하다."
      },
      {
        word: "employee",
        pos: "n.",
        meaning: "직원",
        example: "Office employee.",
        ex_meaning: "사무실 직원."
      },
      {
        word: "employer",
        pos: "n.",
        meaning: "고용주",
        example: "The employer pays wages.",
        ex_meaning: "고용주는 임금을 지불한다."
      }
    ]
  },
  {
    day: 1,
    num: 23,
    word: "lack",
    definitions: [
      {
        pos: "v.",
        meaning: "~이 없다",
        example: "Lack resources.",
        ex_meaning: "자원이 없다."
      },
      {
        pos: "n.",
        meaning: "부족",
        example: "Lack of time.",
        ex_meaning: "시간 부족."
      }
    ],
    derivatives: []
  },
  {
    day: 1,
    num: 24,
    word: "managerial",
    definitions: [
      {
        pos: "adj.",
        meaning: "관리의",
        example: "Managerial skills.",
        ex_meaning: "관리 기술."
      }
    ],
    derivatives: [
      {
        word: "manage",
        pos: "v.",
        meaning: "관리하다",
        example: "Manage a team.",
        ex_meaning: "팀을 관리하다."
      }
    ]
  },
  {
    day: 1,
    num: 25,
    word: "diligent",
    definitions: [
      {
        pos: "adj.",
        meaning: "성실한",
        example: "A diligent worker.",
        ex_meaning: "성실한 일꾼."
      }
    ],
    derivatives: [
      {
        word: "diligence",
        pos: "n.",
        meaning: "성실",
        example: "Work with diligence.",
        ex_meaning: "성실하게 일하다."
      }
    ]
  },
  {
    day: 1,
    num: 26,
    word: "familiar",
    definitions: [
      {
        pos: "adj.",
        meaning: "익숙한, 친숙한",
        example: "I am familiar with this software.",
        ex_meaning: "나는 이 소프트웨어에 익숙하다."
      }
    ],
    derivatives: [
      {
        word: "familiarize",
        pos: "v.",
        meaning: "익숙하게 하다",
        example: "Familiarize yourself with the rules.",
        ex_meaning: "규칙에 익숙해져라."
      }
    ]
  },
  {
    day: 1,
    num: 27,
    word: "proficiency",
    definitions: [
      {
        pos: "n.",
        meaning: "숙달, 능숙",
        example: "Language proficiency.",
        ex_meaning: "언어 숙달 능력."
      }
    ],
    derivatives: [
      {
        word: "proficient",
        pos: "adj.",
        meaning: "능숙한",
        example: "Proficient in English.",
        ex_meaning: "영어에 능숙한."
      }
    ]
  },
  {
    day: 1,
    num: 28,
    word: "prospective",
    definitions: [
      {
        pos: "adj.",
        meaning: "장래의, 미래의",
        example: "Prospective customers.",
        ex_meaning: "장래의 고객들."
      }
    ],
    derivatives: [
      {
        word: "prospect",
        pos: "n.",
        meaning: "전망",
        example: "Future prospects.",
        ex_meaning: "미래 전망."
      }
    ]
  },
  {
    day: 1,
    num: 29,
    word: "appeal",
    definitions: [
      {
        pos: "v.",
        meaning: "~에 호소하다; 관심을 끌다",
        example: "The idea appeals to me.",
        ex_meaning: "그 아이디어는 내 관심을 끈다."
      }
    ],
    derivatives: []
  },
  {
    day: 1,
    num: 30,
    word: "specialize",
    definitions: [
      {
        pos: "v.",
        meaning: "~을 전공하다, 전문적으로 다루다",
        example: "Specialize in marketing.",
        ex_meaning: "마케팅을 전문으로 하다."
      }
    ],
    derivatives: []
  },
  {
    day: 1,
    num: 31,
    word: "apprehensive",
    definitions: [
      {
        pos: "adj.",
        meaning: "걱정하는, 염려하는",
        example: "Apprehensive about the changes.",
        ex_meaning: "변화에 대해 걱정하는."
      }
    ],
    derivatives: []
  },
  {
    day: 1,
    num: 32,
    word: "consultant",
    definitions: [
      {
        pos: "n.",
        meaning: "고문, 컨설턴트",
        example: "Business consultant.",
        ex_meaning: "경영 컨설턴트."
      }
    ],
    derivatives: [
      {
        word: "consult",
        pos: "v.",
        meaning: "상담하다",
        example: "Consult an expert.",
        ex_meaning: "전문가와 상담하다."
      }
    ]
  },
  {
    day: 1,
    num: 33,
    word: "entitle",
    definitions: [
      {
        pos: "v.",
        meaning: "자격을 주다",
        example: "This coupon entitles you to a discount.",
        ex_meaning: "이 쿠폰은 당신에게 할인 자격을 준다."
      }
    ],
    derivatives: []
  },
  {
    day: 1,
    num: 34,
    word: "degree",
    definitions: [
      {
        pos: "n.",
        meaning: "학위",
        example: "A master's degree.",
        ex_meaning: "석사 학위."
      }
    ],
    derivatives: []
  },
  {
    day: 1,
    num: 35,
    word: "payroll",
    definitions: [
      {
        pos: "n.",
        meaning: "임금 대장, 급료 명부",
        example: "On the payroll.",
        ex_meaning: "급여 명부에 있는 (고용된)."
      }
    ],
    derivatives: []
  },
  {
    day: 1,
    num: 36,
    word: "recruit",
    definitions: [
      {
        pos: "v.",
        meaning: "(사원 등을) 모집하다",
        example: "Recruit new staff.",
        ex_meaning: "새로운 직원을 모집하다."
      }
    ],
    derivatives: [
      {
        word: "recruitment",
        pos: "n.",
        meaning: "신규 채용",
        example: "Recruitment agency.",
        ex_meaning: "채용 대행사."
      }
    ]
  },
  {
    day: 1,
    num: 37,
    word: "certification",
    definitions: [
      {
        pos: "n.",
        meaning: "증명서, 증명",
        example: "Receive certification.",
        ex_meaning: "증명서를 받다."
      }
    ],
    derivatives: [
      {
        word: "certify",
        pos: "v.",
        meaning: "증명하다",
        example: "Certify the document.",
        ex_meaning: "문서를 증명하다."
      },
      {
        word: "certified",
        pos: "adj.",
        meaning: "공인된",
        example: "Certified accountant.",
        ex_meaning: "공인 회계사."
      }
    ]
  },
  {
    day: 1,
    num: 38,
    word: "occupation",
    definitions: [
      {
        pos: "n.",
        meaning: "직업",
        example: "What is your occupation?",
        ex_meaning: "당신의 직업은 무엇입니까?"
      }
    ],
    derivatives: [
      {
        word: "occupy",
        pos: "v.",
        meaning: "차지하다",
        example: "Occupy a seat.",
        ex_meaning: "자리를 차지하다."
      }
    ]
  },
  {
    day: 1,
    num: 39,
    word: "wage",
    definitions: [
      {
        pos: "n.",
        meaning: "임금, 급료",
        example: "Minimum wage.",
        ex_meaning: "최저 임금."
      }
    ],
    derivatives: []
  },
  {
    day: 1,
    num: 40,
    word: "unemployment",
    definitions: [
      {
        pos: "n.",
        meaning: "실업, 실업 상태",
        example: "High unemployment rate.",
        ex_meaning: "높은 실업률."
      }
    ],
    derivatives: [
        {
        word: "unemployed",
        pos: "adj.",
        meaning: "실업의",
        example: "Unemployed workers.",
        ex_meaning: "실직 근로자들."
      }
    ]
  },

  // ==========================================
  // Day 2: 엑셀 넘버링 순서 반영 (1~40)
  // ==========================================
  {
    day: 2,
    num: 1,
    word: "attire",
    definitions: [
      {
        pos: "n.",
        meaning: "복장, 옷차림새",
        example: "Business attire.",
        ex_meaning: "비즈니스 복장."
      }
    ],
    derivatives: []
  },
  {
    day: 2,
    num: 2,
    word: "code",
    definitions: [
      {
        pos: "n.",
        meaning: "규범, 관례; 암호",
        example: "Dress code.",
        ex_meaning: "복장 규정."
      }
    ],
    derivatives: []
  },
  {
    day: 2,
    num: 3,
    word: "concern",
    definitions: [
      {
        pos: "n.",
        meaning: "우려, 걱정; 관심사",
        example: "Express concern.",
        ex_meaning: "우려를 표하다."
      },
      {
        pos: "v.",
        meaning: "~을 걱정시키다; ~와 관련하다",
        example: "It concerns everyone.",
        ex_meaning: "그것은 모든 사람과 관련이 있다."
      }
    ],
    derivatives: [
      {
        word: "concerned",
        pos: "adj.",
        meaning: "염려하는; 관련된",
        example: "Concerned citizens.",
        ex_meaning: "걱정하는 시민들."
      }
    ]
  },
  {
    day: 2,
    num: 4,
    word: "policy",
    definitions: [
      {
        pos: "n.",
        meaning: "규정, 정책",
        example: "Company policy.",
        ex_meaning: "회사 규정."
      }
    ],
    derivatives: []
  },
  {
    day: 2,
    num: 5,
    word: "comply",
    definitions: [
      {
        pos: "v.",
        meaning: "준수하다, 따르다",
        example: "Comply with regulations.",
        ex_meaning: "규정을 준수하다."
      }
    ],
    derivatives: [
      {
        word: "compliance",
        pos: "n.",
        meaning: "준수",
        example: "In compliance with rules.",
        ex_meaning: "규칙을 준수하여."
      }
    ]
  },
  {
    day: 2,
    num: 6,
    word: "regulation",
    definitions: [
      {
        pos: "n.",
        meaning: "규정",
        example: "Safety regulations.",
        ex_meaning: "안전 규정."
      }
    ],
    derivatives: [
      {
        word: "regulate",
        pos: "v.",
        meaning: "규제하다, 통제하다",
        example: "Regulate the market.",
        ex_meaning: "시장을 규제하다."
      }
    ]
  },
  {
    day: 2,
    num: 7,
    word: "exception",
    definitions: [
      {
        pos: "n.",
        meaning: "예외",
        example: "Make an exception.",
        ex_meaning: "예외를 두다."
      }
    ],
    derivatives: [
      {
        word: "exceptional",
        pos: "adj.",
        meaning: "예외적인, 뛰어난",
        example: "Exceptional talent.",
        ex_meaning: "뛰어난 재능."
      }
    ]
  },
  {
    day: 2,
    num: 8,
    word: "adhere",
    definitions: [
      {
        pos: "v.",
        meaning: "지키다, 고수하다",
        example: "Adhere to the plan.",
        ex_meaning: "계획을 고수하다."
      }
    ],
    derivatives: [
      {
        word: "adherence",
        pos: "n.",
        meaning: "고수",
        example: "Adherence to standards.",
        ex_meaning: "기준 고수."
      }
    ]
  },
  {
    day: 2,
    num: 9,
    word: "severely",
    definitions: [
      {
        pos: "adv.",
        meaning: "엄격하게, 심하게",
        example: "Severely punished.",
        ex_meaning: "엄격하게 처벌받은."
      }
    ],
    derivatives: [
      {
        word: "severe",
        pos: "adj.",
        meaning: "심각한, 가혹한",
        example: "Severe weather.",
        ex_meaning: "혹독한 날씨."
      }
    ]
  },
  {
    day: 2,
    num: 10,
    word: "refrain",
    definitions: [
      {
        pos: "v.",
        meaning: "자제하다, 삼가다",
        example: "Refrain from smoking.",
        ex_meaning: "흡연을 자제하다."
      }
    ],
    derivatives: []
  },
  {
    day: 2,
    num: 11,
    word: "permission",
    definitions: [
      {
        pos: "n.",
        meaning: "허가",
        example: "Ask for permission.",
        ex_meaning: "허가를 구하다."
      }
    ],
    derivatives: [
      {
        word: "permit",
        pos: "v.",
        meaning: "허락하다",
        example: "Permit parking.",
        ex_meaning: "주차를 허락하다."
      }
    ]
  },
  {
    day: 2,
    num: 12,
    word: "access",
    definitions: [
      {
        pos: "n.",
        meaning: "이용 권한, 접근",
        example: "Access to the file.",
        ex_meaning: "파일 접근 권한."
      },
      {
        pos: "v.",
        meaning: "접근하다",
        example: "Access the internet.",
        ex_meaning: "인터넷에 접속하다."
      }
    ],
    derivatives: [
      {
        word: "accessible",
        pos: "adj.",
        meaning: "접근 가능한",
        example: "Easily accessible.",
        ex_meaning: "쉽게 접근 가능한."
      }
    ]
  },
  {
    day: 2,
    num: 13,
    word: "thoroughly",
    definitions: [
      {
        pos: "adv.",
        meaning: "철저하게, 완전히",
        example: "Check thoroughly.",
        ex_meaning: "철저하게 확인하다."
      }
    ],
    derivatives: [
      {
        word: "thorough",
        pos: "adj.",
        meaning: "철저한",
        example: "Thorough inspection.",
        ex_meaning: "철저한 점검."
      }
    ]
  },
  {
    day: 2,
    num: 14,
    word: "revise",
    definitions: [
      {
        pos: "v.",
        meaning: "(의견, 계획을) 수정하다, 변경하다",
        example: "Revise the report.",
        ex_meaning: "보고서를 수정하다."
      }
    ],
    derivatives: [
      {
        word: "revision",
        pos: "n.",
        meaning: "수정",
        example: "Make revisions.",
        ex_meaning: "수정하다."
      }
    ]
  },
  {
    day: 2,
    num: 15,
    word: "approach",
    definitions: [
      {
        pos: "n.",
        meaning: "접근법, 처리 방법",
        example: "A new approach.",
        ex_meaning: "새로운 접근법."
      },
      {
        pos: "v.",
        meaning: "다가가다",
        example: "Winter is approaching.",
        ex_meaning: "겨울이 다가오고 있다."
      }
    ],
    derivatives: []
  },
  {
    day: 2,
    num: 16,
    word: "approval",
    definitions: [
      {
        pos: "n.",
        meaning: "승인, 인가",
        example: "Final approval.",
        ex_meaning: "최종 승인."
      }
    ],
    derivatives: [
      {
        word: "approve",
        pos: "v.",
        meaning: "승인하다",
        example: "Approve the plan.",
        ex_meaning: "계획을 승인하다."
      }
    ]
  },
  {
    day: 2,
    num: 17,
    word: "form",
    definitions: [
      {
        pos: "n.",
        meaning: "종류, 유형, 서식",
        example: "Fill out the form.",
        ex_meaning: "서식을 작성하다."
      }
    ],
    derivatives: [
      {
        word: "formal",
        pos: "adj.",
        meaning: "공식적인",
        example: "Formal meeting.",
        ex_meaning: "공식 회의."
      }
    ]
  },
  {
    day: 2,
    num: 18,
    word: "immediately",
    definitions: [
      {
        pos: "adv.",
        meaning: "즉시, 곧",
        example: "Call immediately.",
        ex_meaning: "즉시 전화해라."
      }
    ],
    derivatives: [
      {
        word: "immediate",
        pos: "adj.",
        meaning: "즉각적인",
        example: "Immediate action.",
        ex_meaning: "즉각적인 조치."
      }
    ]
  },
  {
    day: 2,
    num: 19,
    word: "inspection",
    definitions: [
      {
        pos: "n.",
        meaning: "점검, 검사",
        example: "Pass inspection.",
        ex_meaning: "점검을 통과하다."
      }
    ],
    derivatives: [
      {
        word: "inspect",
        pos: "v.",
        meaning: "검사하다",
        example: "Inspect the car.",
        ex_meaning: "차를 검사하다."
      }
    ]
  },
  {
    day: 2,
    num: 20,
    word: "arrangement",
    definitions: [
      {
        pos: "n.",
        meaning: "준비, 채비, 배열",
        example: "Make arrangements.",
        ex_meaning: "준비를 하다."
      }
    ],
    derivatives: [
      {
        word: "arrange",
        pos: "v.",
        meaning: "마련하다, 배열하다",
        example: "Arrange a meeting.",
        ex_meaning: "회의를 마련하다."
      }
    ]
  },
  {
    day: 2,
    num: 21,
    word: "procedure",
    definitions: [
      {
        pos: "n.",
        meaning: "절차",
        example: "Standard procedure.",
        ex_meaning: "표준 절차."
      }
    ],
    derivatives: [
      {
        word: "proceed",
        pos: "v.",
        meaning: "진행하다",
        example: "Proceed with work.",
        ex_meaning: "작업을 진행하다."
      }
    ]
  },
  {
    day: 2,
    num: 22,
    word: "negative",
    definitions: [
      {
        pos: "adj.",
        meaning: "부정적인, 비관적인",
        example: "Negative feedback.",
        ex_meaning: "부정적인 피드백."
      }
    ],
    derivatives: []
  },
  {
    day: 2,
    num: 23,
    word: "mandate",
    definitions: [
      {
        pos: "v.",
        meaning: "명령하다, 지시하다",
        example: "Mandate a change.",
        ex_meaning: "변화를 지시하다."
      },
      {
        pos: "n.",
        meaning: "권한, 지시",
        example: "Carry out a mandate.",
        ex_meaning: "지시를 이행하다."
      }
    ],
    derivatives: [
      {
        word: "mandatory",
        pos: "adj.",
        meaning: "의무적인",
        example: "Mandatory training.",
        ex_meaning: "의무 교육."
      }
    ]
  },
  {
    day: 2,
    num: 24,
    word: "effect",
    definitions: [
      {
        pos: "n.",
        meaning: "효과, 영향; (법률의) 효력",
        example: "Have an effect.",
        ex_meaning: "영향을 미치다."
      },
      {
        pos: "v.",
        meaning: "결과로서 가져오다",
        example: "Effect a cure.",
        ex_meaning: "치료를 가져오다."
      }
    ],
    derivatives: [
      {
        word: "effective",
        pos: "adj.",
        meaning: "효과적인",
        example: "Effective solution.",
        ex_meaning: "효과적인 해결책."
      }
    ]
  },
  {
    day: 2,
    num: 25,
    word: "drastically",
    definitions: [
      {
        pos: "adv.",
        meaning: "심하게, 과감하게, 철저하게",
        example: "Change drastically.",
        ex_meaning: "급격히 변하다."
      }
    ],
    derivatives: [
      {
        word: "drastic",
        pos: "adj.",
        meaning: "과감한",
        example: "Drastic measures.",
        ex_meaning: "과감한 조치."
      }
    ]
  },
  {
    day: 2,
    num: 26,
    word: "according to",
    definitions: [
      {
        pos: "phr.",
        meaning: "~에 따라",
        example: "According to the plan.",
        ex_meaning: "계획에 따라."
      }
    ],
    derivatives: []
  },
  {
    day: 2,
    num: 27,
    word: "enable",
    definitions: [
      {
        pos: "v.",
        meaning: "가능하게 하다",
        example: "Enable us to work.",
        ex_meaning: "우리가 일할 수 있게 하다."
      }
    ],
    derivatives: []
  },
  {
    day: 2,
    num: 28,
    word: "standard",
    definitions: [
      {
        pos: "n.",
        meaning: "기준, 표준",
        example: "Meet standards.",
        ex_meaning: "기준을 충족하다."
      }
    ],
    derivatives: [
      {
        word: "standardize",
        pos: "v.",
        meaning: "표준화하다",
        example: "Standardize procedures.",
        ex_meaning: "절차를 표준화하다."
      }
    ]
  },
  {
    day: 2,
    num: 29,
    word: "constant",
    definitions: [
      {
        pos: "adj.",
        meaning: "지속적인, 끊임없는",
        example: "Constant noise.",
        ex_meaning: "끊임없는 소음."
      }
    ],
    derivatives: [
      {
        word: "constantly",
        pos: "adv.",
        meaning: "끊임없이",
        example: "Constantly improving.",
        ex_meaning: "끊임없이 개선되는."
      }
    ]
  },
  {
    day: 2,
    num: 30,
    word: "act",
    definitions: [
      {
        pos: "n.",
        meaning: "법령, 결의안; 행위",
        example: "An act of kindness.",
        ex_meaning: "친절한 행위."
      },
      {
        pos: "v.",
        meaning: "행동하다; 연기하다",
        example: "Act responsibly.",
        ex_meaning: "책임감 있게 행동하다."
      }
    ],
    derivatives: []
  },
  {
    day: 2,
    num: 31,
    word: "compensation",
    definitions: [
      {
        pos: "n.",
        meaning: "보상금, 보상",
        example: "Receive compensation.",
        ex_meaning: "보상금을 받다."
      }
    ],
    derivatives: [
      {
        word: "compensate",
        pos: "v.",
        meaning: "보상하다",
        example: "Compensate for time.",
        ex_meaning: "시간을 보상하다."
      }
    ]
  },
  {
    day: 2,
    num: 32,
    word: "ban",
    definitions: [
      {
        pos: "n.",
        meaning: "금지",
        example: "Lift the ban.",
        ex_meaning: "금지를 해제하다."
      },
      {
        pos: "v.",
        meaning: "금지하다",
        example: "Ban smoking.",
        ex_meaning: "흡연을 금지하다."
      }
    ],
    derivatives: []
  },
  {
    day: 2,
    num: 33,
    word: "obligation",
    definitions: [
      {
        pos: "n.",
        meaning: "의무, 책임",
        example: "Legal obligation.",
        ex_meaning: "법적 의무."
      }
    ],
    derivatives: []
  },
  {
    day: 2,
    num: 34,
    word: "authorize",
    definitions: [
      {
        pos: "v.",
        meaning: "~을 인가하다, 권한을 부여하다",
        example: "Authorize a purchase.",
        ex_meaning: "구매를 승인하다."
      }
    ],
    derivatives: [
      {
        word: "authorization",
        pos: "n.",
        meaning: "허가",
        example: "Get authorization.",
        ex_meaning: "허가를 받다."
      },
      {
        word: "authority",
        pos: "n.",
        meaning: "권한; 당국",
        example: "Have authority.",
        ex_meaning: "권한을 가지다."
      }
    ]
  },
  {
    day: 2,
    num: 35,
    word: "prohibit",
    definitions: [
      {
        pos: "v.",
        meaning: "금지하다",
        example: "Prohibit entry.",
        ex_meaning: "입장을 금지하다."
      }
    ],
    derivatives: [
      {
        word: "prohibition",
        pos: "n.",
        meaning: "금지",
        example: "Prohibition of drugs.",
        ex_meaning: "약물 금지."
      }
    ]
  },
  {
    day: 2,
    num: 36,
    word: "abolish",
    definitions: [
      {
        pos: "v.",
        meaning: "(제도, 법률 등을) 폐지하다",
        example: "Abolish a tax.",
        ex_meaning: "세금을 폐지하다."
      }
    ],
    derivatives: [
      {
        word: "abolition",
        pos: "n.",
        meaning: "폐지",
        example: "Abolition of slavery.",
        ex_meaning: "노예제 폐지."
      }
    ]
  },
  {
    day: 2,
    num: 37,
    word: "enforce",
    definitions: [
      {
        pos: "v.",
        meaning: "(법률을) 시행하다, 집행하다",
        example: "Enforce rules.",
        ex_meaning: "규칙을 집행하다."
      }
    ],
    derivatives: [
      {
        word: "enforcement",
        pos: "n.",
        meaning: "시행",
        example: "Strict enforcement.",
        ex_meaning: "엄격한 시행."
      }
    ]
  },
  {
    day: 2,
    num: 38,
    word: "habit",
    definitions: [
      {
        pos: "n.",
        meaning: "습관, 버릇",
        example: "Break a habit.",
        ex_meaning: "습관을 고치다."
      }
    ],
    derivatives: [
      {
        word: "habitual",
        pos: "adj.",
        meaning: "습관적인",
        example: "Habitual liar.",
        ex_meaning: "습관적인 거짓말쟁이."
      }
    ]
  },
  {
    day: 2,
    num: 39,
    word: "legislation",
    definitions: [
      {
        pos: "n.",
        meaning: "법률, 법규 제정",
        example: "Pass legislation.",
        ex_meaning: "법률을 통과시키다."
      }
    ],
    derivatives: [
      {
        word: "legislate",
        pos: "v.",
        meaning: "법률을 제정하다",
        example: "Legislate for safety.",
        ex_meaning: "안전을 위해 법을 제정하다."
      },
      {
        word: "legislator",
        pos: "n.",
        meaning: "입법자",
        example: "Legislators debated.",
        ex_meaning: "입법자들이 토론했다."
      }
    ]
  },
  {
    day: 2,
    num: 40,
    word: "restrict",
    definitions: [
      {
        pos: "v.",
        meaning: "제한하다, 한정하다",
        example: "Restrict freedom.",
        ex_meaning: "자유를 제한하다."
      }
    ],
    derivatives: [
      {
        word: "restriction",
        pos: "n.",
        meaning: "제한",
        example: "Impose restrictions.",
        ex_meaning: "제한을 두다."
      },
      {
        word: "restrictive",
        pos: "adj.",
        meaning: "제한적인",
        example: "Restrictive policy.",
        ex_meaning: "제한적인 정책."
      }
    ]
  },
// ==========================================
  // Day 3: 일반 사무 (General Business) - 엑셀 순서 반영
  // ==========================================
  {
    day: 3,
    num: 1,
    word: "accustomed",
    definitions: [
      {
        pos: "adj.",
        meaning: "익숙한",
        example: "I am accustomed to working late.",
        ex_meaning: "나는 늦게 일하는 것에 익숙하다."
      }
    ],
    derivatives: []
  },
  {
    day: 3,
    num: 2,
    word: "corporation",
    definitions: [
      {
        pos: "n.",
        meaning: "주식회사, 법인",
        example: "A multinational corporation.",
        ex_meaning: "다국적 기업."
      }
    ],
    derivatives: [
      {
        word: "corporate",
        pos: "adj.",
        meaning: "법인의, 회사의",
        example: "Corporate culture.",
        ex_meaning: "기업 문화."
      }
    ]
  },
  {
    day: 3,
    num: 3,
    word: "demanding",
    definitions: [
      {
        pos: "adj.",
        meaning: "요구가 많은, 힘든",
        example: "A demanding boss.",
        ex_meaning: "요구가 많은 상사."
      }
    ],
    derivatives: [
      {
        word: "demand",
        pos: "v.",
        meaning: "요구하다",
        example: "Demand an explanation.",
        ex_meaning: "해명을 요구하다."
      }
    ]
  },
  {
    day: 3,
    num: 4,
    word: "colleague",
    definitions: [
      {
        pos: "n.",
        meaning: "(직업상의) 동료",
        example: "Respect your colleagues.",
        ex_meaning: "동료들을 존중하라."
      }
    ],
    derivatives: []
  },
  {
    day: 3,
    num: 5,
    word: "division",
    definitions: [
      {
        pos: "n.",
        meaning: "부서",
        example: "The sales division.",
        ex_meaning: "영업 부서."
      }
    ],
    derivatives: [
      {
        word: "divide",
        pos: "v.",
        meaning: "나누다",
        example: "Divide the work.",
        ex_meaning: "일을 나누다."
      }
    ]
  },
  {
    day: 3,
    num: 6,
    word: "request",
    definitions: [
      {
        pos: "n.",
        meaning: "요청",
        example: "Submit a request.",
        ex_meaning: "요청서를 제출하다."
      },
      {
        pos: "v.",
        meaning: "요청하다",
        example: "Request information.",
        ex_meaning: "정보를 요청하다."
      }
    ],
    derivatives: []
  },
  {
    day: 3,
    num: 7,
    word: "efficiently",
    definitions: [
      {
        pos: "adv.",
        meaning: "효율적으로",
        example: "Work efficiently.",
        ex_meaning: "효율적으로 일하다."
      }
    ],
    derivatives: [
      {
        word: "efficient",
        pos: "adj.",
        meaning: "효율적인",
        example: "Efficient method.",
        ex_meaning: "효율적인 방법."
      },
      {
        word: "efficiency",
        pos: "n.",
        meaning: "효율성",
        example: "Improve efficiency.",
        ex_meaning: "효율성을 높이다."
      }
    ]
  },
  {
    day: 3,
    num: 8,
    word: "manage",
    definitions: [
      {
        pos: "v.",
        meaning: "~을 경영하다; 가까스로 하다",
        example: "Manage a hotel.",
        ex_meaning: "호텔을 경영하다."
      }
    ],
    derivatives: [
      {
        word: "management",
        pos: "n.",
        meaning: "경영, 경영진",
        example: "Senior management.",
        ex_meaning: "고위 경영진."
      },
      {
        word: "managerial",
        pos: "adj.",
        meaning: "관리의",
        example: "Managerial experience.",
        ex_meaning: "관리 경험."
      }
    ]
  },
  {
    day: 3,
    num: 9,
    word: "submit",
    definitions: [
      {
        pos: "v.",
        meaning: "제출하다",
        example: "Submit the report by Friday.",
        ex_meaning: "금요일까지 보고서를 제출하다."
      }
    ],
    derivatives: [
      {
        word: "submission",
        pos: "n.",
        meaning: "제출, 제출물",
        example: "Late submission.",
        ex_meaning: "늦은 제출."
      }
    ]
  },
  {
    day: 3,
    num: 10,
    word: "directly",
    definitions: [
      {
        pos: "adv.",
        meaning: "곧바로",
        example: "Report directly to the CEO.",
        ex_meaning: "CEO에게 곧바로 보고하다."
      }
    ],
    derivatives: [
      {
        word: "direct",
        pos: "v.",
        meaning: "지시하다",
        example: "Direct the project.",
        ex_meaning: "프로젝트를 지시하다."
      },
      {
        word: "direction",
        pos: "n.",
        meaning: "방향, 지시",
        example: "Follow directions.",
        ex_meaning: "지시를 따르다."
      }
    ]
  },
  {
    day: 3,
    num: 11,
    word: "remind",
    definitions: [
      {
        pos: "v.",
        meaning: "~에게 상기시키다",
        example: "Remind me to call him.",
        ex_meaning: "그에게 전화하라고 나에게 상기시켜 줘."
      }
    ],
    derivatives: [
      {
        word: "reminder",
        pos: "n.",
        meaning: "상기시키는 것, 메모",
        example: "Send a reminder.",
        ex_meaning: "독촉장(메모)을 보내다."
      }
    ]
  },
  {
    day: 3,
    num: 12,
    word: "instruct",
    definitions: [
      {
        pos: "v.",
        meaning: "지시하다, 가르치다",
        example: "Instruct staff on safety.",
        ex_meaning: "직원들에게 안전에 대해 지시하다."
      }
    ],
    derivatives: [
      {
        word: "instruction",
        pos: "n.",
        meaning: "지시, 설명",
        example: "Follow instructions.",
        ex_meaning: "지시를 따르다."
      },
      {
        word: "instructor",
        pos: "n.",
        meaning: "강사",
        example: "Yoga instructor.",
        ex_meaning: "요가 강사."
      }
    ]
  },
  {
    day: 3,
    num: 13,
    word: "deadline",
    definitions: [
      {
        pos: "n.",
        meaning: "마감일, 마감 시간",
        example: "Meet the deadline.",
        ex_meaning: "마감일을 맞추다."
      }
    ],
    derivatives: []
  },
  {
    day: 3,
    num: 14,
    word: "sample",
    definitions: [
      {
        pos: "n.",
        meaning: "견본, 샘플",
        example: "Free samples.",
        ex_meaning: "무료 샘플."
      },
      {
        pos: "v.",
        meaning: "시식하다, 시험하다",
        example: "Sample the food.",
        ex_meaning: "음식을 시식하다."
      }
    ],
    derivatives: []
  },
  {
    day: 3,
    num: 15,
    word: "notify",
    definitions: [
      {
        pos: "v.",
        meaning: "~에게 통지하다, 알리다",
        example: "Notify us of any changes.",
        ex_meaning: "변경 사항이 있으면 우리에게 알리시오."
      }
    ],
    derivatives: [
      {
        word: "notification",
        pos: "n.",
        meaning: "통지",
        example: "Receive notification.",
        ex_meaning: "통지를 받다."
      }
    ]
  },
  {
    day: 3,
    num: 16,
    word: "perform",
    definitions: [
      {
        pos: "v.",
        meaning: "(일, 과제 등을) 행하다, 수행하다",
        example: "Perform a task.",
        ex_meaning: "업무를 수행하다."
      }
    ],
    derivatives: [
      {
        word: "performance",
        pos: "n.",
        meaning: "실적, 성과; 공연",
        example: "Job performance.",
        ex_meaning: "직무 성과."
      }
    ]
  },
  {
    day: 3,
    num: 17,
    word: "monitor",
    definitions: [
      {
        pos: "v.",
        meaning: "감독하다, 감시하다",
        example: "Monitor progress.",
        ex_meaning: "진척 상황을 감독하다."
      },
      {
        pos: "n.",
        meaning: "화면, 모니터",
        example: "Computer monitor.",
        ex_meaning: "컴퓨터 모니터."
      }
    ],
    derivatives: []
  },
  {
    day: 3,
    num: 18,
    word: "deserve",
    definitions: [
      {
        pos: "v.",
        meaning: "~할 만하다, ~할 가치가 있다",
        example: "You deserve a promotion.",
        ex_meaning: "당신은 승진할 자격이 있다."
      }
    ],
    derivatives: [
      {
        word: "deserved",
        pos: "adj.",
        meaning: "응당한",
        example: "Well-deserved rest.",
        ex_meaning: "마땅히 누릴 만한 휴식."
      }
    ]
  },
  {
    day: 3,
    num: 19,
    word: "assignment",
    definitions: [
      {
        pos: "n.",
        meaning: "일, 임무, 과제",
        example: "Complete the assignment.",
        ex_meaning: "과제를 완료하다."
      }
    ],
    derivatives: [
      {
        word: "assign",
        pos: "v.",
        meaning: "배정하다",
        example: "Assign a task.",
        ex_meaning: "업무를 배정하다."
      }
    ]
  },
  {
    day: 3,
    num: 20,
    word: "entire",
    definitions: [
      {
        pos: "adj.",
        meaning: "전체의",
        example: "The entire staff.",
        ex_meaning: "전체 직원."
      }
    ],
    derivatives: [
      {
        word: "entirely",
        pos: "adv.",
        meaning: "전적으로",
        example: "Entirely different.",
        ex_meaning: "전적으로 다른."
      }
    ]
  },
  {
    day: 3,
    num: 21,
    word: "release",
    definitions: [
      {
        pos: "v.",
        meaning: "발표하다, 공개하다",
        example: "Release a new product.",
        ex_meaning: "신제품을 출시(공개)하다."
      },
      {
        pos: "n.",
        meaning: "출시, 발매",
        example: "Press release.",
        ex_meaning: "보도 자료."
      }
    ],
    derivatives: []
  },
  {
    day: 3,
    num: 22,
    word: "extension",
    definitions: [
      {
        pos: "n.",
        meaning: "연장, 연기; (전화의) 내선",
        example: "Apply for an extension.",
        ex_meaning: "연장을 신청하다."
      }
    ],
    derivatives: [
      {
        word: "extend",
        pos: "v.",
        meaning: "연장하다",
        example: "Extend the deadline.",
        ex_meaning: "마감 기한을 연장하다."
      },
      {
        word: "extensive",
        pos: "adj.",
        meaning: "광범위한",
        example: "Extensive knowledge.",
        ex_meaning: "광범위한 지식."
      }
    ]
  },
  {
    day: 3,
    num: 23,
    word: "electronically",
    definitions: [
      {
        pos: "adv.",
        meaning: "컴퓨터 통신망으로, 컴퓨터로",
        example: "Send data electronically.",
        ex_meaning: "데이터를 전자적으로(온라인으로) 보내다."
      }
    ],
    derivatives: [
      {
        word: "electronic",
        pos: "adj.",
        meaning: "전자의",
        example: "Electronic mail.",
        ex_meaning: "전자 우편."
      }
    ]
  },
  {
    day: 3,
    num: 24,
    word: "attendance",
    definitions: [
      {
        pos: "n.",
        meaning: "출석, 참석",
        example: "Attendance record.",
        ex_meaning: "출석 기록."
      }
    ],
    derivatives: [
      {
        word: "attend",
        pos: "v.",
        meaning: "참석하다",
        example: "Attend a meeting.",
        ex_meaning: "회의에 참석하다."
      },
      {
        word: "attendant",
        pos: "n.",
        meaning: "안내원",
        example: "Flight attendant.",
        ex_meaning: "승무원."
      }
    ]
  },
  {
    day: 3,
    num: 25,
    word: "absolutely",
    definitions: [
      {
        pos: "adv.",
        meaning: "절대적으로, 완전히",
        example: "Absolutely necessary.",
        ex_meaning: "절대적으로 필요한."
      }
    ],
    derivatives: [
      {
        word: "absolute",
        pos: "adj.",
        meaning: "완전한",
        example: "Absolute truth.",
        ex_meaning: "완전한 진실."
      }
    ]
  },
  {
    day: 3,
    num: 26,
    word: "delegate",
    definitions: [
      {
        pos: "v.",
        meaning: "(권한 등을) 위임하다",
        example: "Delegate authority.",
        ex_meaning: "권한을 위임하다."
      },
      {
        pos: "n.",
        meaning: "대표",
        example: "A delegate to the conference.",
        ex_meaning: "회의 대표."
      }
    ],
    derivatives: [
      {
        word: "delegation",
        pos: "n.",
        meaning: "대표단",
        example: "Send a delegation.",
        ex_meaning: "대표단을 보내다."
      }
    ]
  },
  {
    day: 3,
    num: 27,
    word: "attentively",
    definitions: [
      {
        pos: "adv.",
        meaning: "주의 깊게, 조심스럽게",
        example: "Listen attentively.",
        ex_meaning: "주의 깊게 듣다."
      }
    ],
    derivatives: [
      {
        word: "attentive",
        pos: "adj.",
        meaning: "주의 깊은",
        example: "Attentive audience.",
        ex_meaning: "경청하는 청중."
      }
    ]
  },
  {
    day: 3,
    num: 28,
    word: "supervision",
    definitions: [
      {
        pos: "n.",
        meaning: "감독",
        example: "Under close supervision.",
        ex_meaning: "철저한 감독 하에."
      }
    ],
    derivatives: [
      {
        word: "supervise",
        pos: "v.",
        meaning: "감독하다",
        example: "Supervise workers.",
        ex_meaning: "근로자들을 감독하다."
      },
      {
        word: "supervisor",
        pos: "n.",
        meaning: "감독관, 상사",
        example: "Ask your supervisor.",
        ex_meaning: "상사에게 물어보라."
      }
    ]
  },
  {
    day: 3,
    num: 29,
    word: "workshop",
    definitions: [
      {
        pos: "n.",
        meaning: "워크숍, 연수",
        example: "Hold a workshop.",
        ex_meaning: "워크숍을 열다."
      }
    ],
    derivatives: []
  },
  {
    day: 3,
    num: 30,
    word: "draw",
    definitions: [
      {
        pos: "v.",
        meaning: "끌다, 당기다",
        example: "Draw attention.",
        ex_meaning: "주의를 끌다."
      }
    ],
    derivatives: []
  },
  {
    day: 3,
    num: 31,
    word: "revision",
    definitions: [
      {
        pos: "n.",
        meaning: "수정, 개정",
        example: "Make revisions to the plan.",
        ex_meaning: "계획을 수정하다."
      }
    ],
    derivatives: [
      {
        word: "revise",
        pos: "v.",
        meaning: "수정하다",
        example: "Revise the document.",
        ex_meaning: "문서를 수정하다."
      }
    ]
  },
  {
    day: 3,
    num: 32,
    word: "reluctantly",
    definitions: [
      {
        pos: "adv.",
        meaning: "마지못해, 꺼려하여",
        example: "He reluctantly agreed.",
        ex_meaning: "그는 마지못해 동의했다."
      }
    ],
    derivatives: [
      {
        word: "reluctant",
        pos: "adj.",
        meaning: "꺼리는",
        example: "Reluctant to help.",
        ex_meaning: "돕기를 꺼리는."
      }
    ]
  },
  {
    day: 3,
    num: 33,
    word: "acquaint",
    definitions: [
      {
        pos: "v.",
        meaning: "~에게 숙지시키다, 알리다",
        example: "Acquaint yourself with the rules.",
        ex_meaning: "규칙을 숙지해라."
      }
    ],
    derivatives: [
      {
        word: "acquaintance",
        pos: "n.",
        meaning: "지인",
        example: "A casual acquaintance.",
        ex_meaning: "가벼운 지인."
      }
    ]
  },
  {
    day: 3,
    num: 34,
    word: "convey",
    definitions: [
      {
        pos: "v.",
        meaning: "(용건을) 전달하다",
        example: "Convey a message.",
        ex_meaning: "메시지를 전달하다."
      }
    ],
    derivatives: [
      {
        word: "conveyor",
        pos: "n.",
        meaning: "운반 장치",
        example: "Conveyor belt.",
        ex_meaning: "컨베이어 벨트."
      }
    ]
  },
  {
    day: 3,
    num: 35,
    word: "check",
    definitions: [
      {
        pos: "v.",
        meaning: "검사하다, 확인하다",
        example: "Check the details.",
        ex_meaning: "세부 사항을 확인하다."
      }
    ],
    derivatives: []
  },
  {
    day: 3,
    num: 36,
    word: "headquarters",
    definitions: [
      {
        pos: "n.",
        meaning: "본부, 본사",
        example: "Company headquarters.",
        ex_meaning: "회사 본사."
      }
    ],
    derivatives: []
  },
  {
    day: 3,
    num: 37,
    word: "file",
    definitions: [
      {
        pos: "v.",
        meaning: "(서류를) 정리하다, 철하다; 제기하다",
        example: "File a complaint.",
        ex_meaning: "불만을 제기하다."
      },
      {
        pos: "n.",
        meaning: "서류철",
        example: "Open a file.",
        ex_meaning: "파일을 열다."
      }
    ],
    derivatives: []
  },
  {
    day: 3,
    num: 38,
    word: "oversee",
    definitions: [
      {
        pos: "v.",
        meaning: "감독하다",
        example: "Oversee the project.",
        ex_meaning: "프로젝트를 감독하다."
      }
    ],
    derivatives: []
  },
  {
    day: 3,
    num: 39,
    word: "involved",
    definitions: [
      {
        pos: "adj.",
        meaning: "관여하는, 관련된",
        example: "Get involved.",
        ex_meaning: "관여하다(참여하다)."
      }
    ],
    derivatives: [
      {
        word: "involve",
        pos: "v.",
        meaning: "포함하다, 수반하다",
        example: "Involve risk.",
        ex_meaning: "위험을 수반하다."
      },
      {
        word: "involvement",
        pos: "n.",
        meaning: "관여",
        example: "Political involvement.",
        ex_meaning: "정치적 관여."
      }
    ]
  },
  {
    day: 3,
    num: 40,
    word: "concentrate",
    definitions: [
      {
        pos: "v.",
        meaning: "집중하다",
        example: "Concentrate on studies.",
        ex_meaning: "공부에 집중하다."
      }
    ],
    derivatives: [
      {
        word: "concentration",
        pos: "n.",
        meaning: "집중",
        example: "Lose concentration.",
        ex_meaning: "집중력을 잃다."
      }
    ]
  },

  // ==========================================
  // Day 4: 사무 - 회의/부서 (Office Life) - 엑셀 순서 반영
  // ==========================================
  {
    day: 4,
    num: 1,
    word: "lax",
    definitions: [
      {
        pos: "adj.",
        meaning: "(행동 등이) 느슨한",
        example: "Lax security.",
        ex_meaning: "느슨한 보안."
      }
    ],
    derivatives: []
  },
  {
    day: 4,
    num: 2,
    word: "procrastinate",
    definitions: [
      {
        pos: "v.",
        meaning: "미루다, 꾸물거리다",
        example: "Don't procrastinate.",
        ex_meaning: "미루지 마라."
      }
    ],
    derivatives: [
      {
        word: "procrastination",
        pos: "n.",
        meaning: "미룸, 지연",
        example: "Overcome procrastination.",
        ex_meaning: "미루는 습관을 극복하다."
      }
    ]
  },
  {
    day: 4,
    num: 3,
    word: "combined",
    definitions: [
      {
        pos: "adj.",
        meaning: "결합된, 합동의",
        example: "Combined effort.",
        ex_meaning: "합동 노력."
      }
    ],
    derivatives: [
      {
        word: "combine",
        pos: "v.",
        meaning: "결합하다",
        example: "Combine forces.",
        ex_meaning: "힘을 합치다."
      },
      {
        word: "combination",
        pos: "n.",
        meaning: "결합",
        example: "A combination of factors.",
        ex_meaning: "요소들의 결합."
      }
    ]
  },
  {
    day: 4,
    num: 4,
    word: "accomplish",
    definitions: [
      {
        pos: "v.",
        meaning: "성취하다",
        example: "Accomplish a mission.",
        ex_meaning: "임무를 완수하다."
      }
    ],
    derivatives: [
      {
        word: "accomplishment",
        pos: "n.",
        meaning: "성취, 업적",
        example: "Great accomplishment.",
        ex_meaning: "위대한 업적."
      },
      {
        word: "accomplished",
        pos: "adj.",
        meaning: "기량이 뛰어난",
        example: "Accomplished artist.",
        ex_meaning: "뛰어난 예술가."
      }
    ]
  },
  {
    day: 4,
    num: 5,
    word: "voluntarily",
    definitions: [
      {
        pos: "adv.",
        meaning: "자발적으로",
        example: "Resign voluntarily.",
        ex_meaning: "자발적으로 사임하다."
      }
    ],
    derivatives: [
      {
        word: "voluntary",
        pos: "adj.",
        meaning: "자발적인",
        example: "Voluntary service.",
        ex_meaning: "자원봉사."
      },
      {
        word: "volunteer",
        pos: "n.",
        meaning: "자원봉사자",
        example: "Work as a volunteer.",
        ex_meaning: "자원봉사자로 일하다."
      }
    ]
  },
  {
    day: 4,
    num: 6,
    word: "undertake",
    definitions: [
      {
        pos: "v.",
        meaning: "(일을) 떠맡다",
        example: "Undertake a task.",
        ex_meaning: "업무를 떠맡다."
      }
    ],
    derivatives: []
  },
  {
    day: 4,
    num: 7,
    word: "assume",
    definitions: [
      {
        pos: "v.",
        meaning: "(책임, 역활을) 떠맡다; 가정하다",
        example: "Assume responsibility.",
        ex_meaning: "책임을 떠맡다."
      }
    ],
    derivatives: [
      {
        word: "assumption",
        pos: "n.",
        meaning: "가정",
        example: "Make an assumption.",
        ex_meaning: "가정하다."
      }
    ]
  },
  {
    day: 4,
    num: 8,
    word: "occasionally",
    definitions: [
      {
        pos: "adv.",
        meaning: "가끔, 때때로",
        example: "Visit occasionally.",
        ex_meaning: "가끔 방문하다."
      }
    ],
    derivatives: [
      {
        word: "occasional",
        pos: "adj.",
        meaning: "가끔의",
        example: "Occasional use.",
        ex_meaning: "가끔의 사용."
      },
      {
        word: "occasion",
        pos: "n.",
        meaning: "때, 경우",
        example: "On this occasion.",
        ex_meaning: "이번 경우에."
      }
    ]
  },
  {
    day: 4,
    num: 9,
    word: "employee",
    definitions: [
      {
        pos: "n.",
        meaning: "직원, 고용인",
        example: "Full-time employee.",
        ex_meaning: "정규직 직원."
      }
    ],
    derivatives: []
  },
  {
    day: 4,
    num: 10,
    word: "assist",
    definitions: [
      {
        pos: "v.",
        meaning: "돕다",
        example: "Assist a customer.",
        ex_meaning: "고객을 돕다."
      }
    ],
    derivatives: [
      {
        word: "assistance",
        pos: "n.",
        meaning: "도움",
        example: "Ask for assistance.",
        ex_meaning: "도움을 요청하다."
      },
      {
        word: "assistant",
        pos: "n.",
        meaning: "보조, 비서",
        example: "Assistant manager.",
        ex_meaning: "부지배인."
      }
    ]
  },
  {
    day: 4,
    num: 11,
    word: "satisfied",
    definitions: [
      {
        pos: "adj.",
        meaning: "만족하는",
        example: "Satisfied with the result.",
        ex_meaning: "결과에 만족하는."
      }
    ],
    derivatives: [
      {
        word: "satisfy",
        pos: "v.",
        meaning: "만족시키다",
        example: "Satisfy needs.",
        ex_meaning: "요구를 만족시키다."
      },
      {
        word: "satisfaction",
        pos: "n.",
        meaning: "만족",
        example: "Job satisfaction.",
        ex_meaning: "직무 만족도."
      }
    ]
  },
  {
    day: 4,
    num: 12,
    word: "manner",
    definitions: [
      {
        pos: "n.",
        meaning: "방식; 태도",
        example: "In a polite manner.",
        ex_meaning: "공손한 태도로."
      }
    ],
    derivatives: []
  },
  {
    day: 4,
    num: 13,
    word: "responsible",
    definitions: [
      {
        pos: "adj.",
        meaning: "책임이 있는",
        example: "Responsible for sales.",
        ex_meaning: "영업을 책임지는."
      }
    ],
    derivatives: [
      {
        word: "responsibility",
        pos: "n.",
        meaning: "책임",
        example: "Take responsibility.",
        ex_meaning: "책임을 지다."
      }
    ]
  },
  {
    day: 4,
    num: 14,
    word: "conduct",
    definitions: [
      {
        pos: "v.",
        meaning: "(업무 등을) 수행하다",
        example: "Conduct a meeting.",
        ex_meaning: "회의를 주재(수행)하다."
      }
    ],
    derivatives: []
  },
  {
    day: 4,
    num: 15,
    word: "adjust",
    definitions: [
      {
        pos: "v.",
        meaning: "적응하다; 조절하다",
        example: "Adjust to change.",
        ex_meaning: "변화에 적응하다."
      }
    ],
    derivatives: [
      {
        word: "adjustment",
        pos: "n.",
        meaning: "조정, 적응",
        example: "Make an adjustment.",
        ex_meaning: "조정을 하다."
      },
      {
        word: "adjustable",
        pos: "adj.",
        meaning: "조절 가능한",
        example: "Adjustable straps.",
        ex_meaning: "조절 가능한 끈."
      }
    ]
  },
  {
    day: 4,
    num: 16,
    word: "personnel",
    definitions: [
      {
        pos: "n.",
        meaning: "(집합적) 직원, 인원; 인사과",
        example: "Personnel department.",
        ex_meaning: "인사과."
      }
    ],
    derivatives: []
  },
  {
    day: 4,
    num: 17,
    word: "agree",
    definitions: [
      {
        pos: "v.",
        meaning: "동의하다",
        example: "Agree to the terms.",
        ex_meaning: "조건에 동의하다."
      }
    ],
    derivatives: [
      {
        word: "agreement",
        pos: "n.",
        meaning: "합의, 계약",
        example: "Reach an agreement.",
        ex_meaning: "합의에 도달하다."
      },
      {
        word: "agreeable",
        pos: "adj.",
        meaning: "쾌활한; 동의하는",
        example: "Agreeable person.",
        ex_meaning: "쾌활한 사람."
      }
    ]
  },
  {
    day: 4,
    num: 18,
    word: "supervise",
    definitions: [
      {
        pos: "v.",
        meaning: "감독하다, 지도하다",
        example: "Supervise production.",
        ex_meaning: "생산을 감독하다."
      }
    ],
    derivatives: []
  },
  {
    day: 4,
    num: 19,
    word: "coworker",
    definitions: [
      {
        pos: "n.",
        meaning: "동료",
        example: "Get along with coworkers.",
        ex_meaning: "동료들과 잘 지내다."
      }
    ],
    derivatives: []
  },
  {
    day: 4,
    num: 20,
    word: "direct",
    definitions: [
      {
        pos: "v.",
        meaning: "~에게 길을 가리키다",
        example: "Direct him to the exit.",
        ex_meaning: "그에게 출구를 안내하다."
      },
      {
        pos: "adj.",
        meaning: "직접적인",
        example: "Direct flight.",
        ex_meaning: "직항편."
      }
    ],
    derivatives: [
      {
        word: "direction",
        pos: "n.",
        meaning: "방향, 지시",
        example: "Sense of direction.",
        ex_meaning: "방향 감각."
      },
      {
        word: "director",
        pos: "n.",
        meaning: "이사, 감독",
        example: "Board of directors.",
        ex_meaning: "이사회."
      },
      {
        word: "directly",
        pos: "adv.",
        meaning: "직접, 곧바로",
        example: "Speak directly.",
        ex_meaning: "직접 말하다."
      }
    ]
  },
  {
    day: 4,
    num: 21,
    word: "confidential",
    definitions: [
      {
        pos: "adj.",
        meaning: "기밀의, 내밀한",
        example: "Confidential information.",
        ex_meaning: "기밀 정보."
      }
    ],
    derivatives: [
      {
        word: "confidentiality",
        pos: "n.",
        meaning: "기밀성",
        example: "Maintain confidentiality.",
        ex_meaning: "기밀을 유지하다."
      }
    ]
  },
  {
    day: 4,
    num: 22,
    word: "assign",
    definitions: [
      {
        pos: "v.",
        meaning: "배정하다, 할당하다",
        example: "Assign work.",
        ex_meaning: "일을 배정하다."
      }
    ],
    derivatives: [
      {
        word: "assignment",
        pos: "n.",
        meaning: "과제, 임무",
        example: "Finish the assignment.",
        ex_meaning: "과제를 끝내다."
      }
    ]
  },
  {
    day: 4,
    num: 23,
    word: "leading",
    definitions: [
      {
        pos: "adj.",
        meaning: "선도하는, 주도적인",
        example: "A leading company.",
        ex_meaning: "선도 기업."
      }
    ],
    derivatives: [
      {
        word: "lead",
        pos: "v.",
        meaning: "이끌다",
        example: "Lead the team.",
        ex_meaning: "팀을 이끌다."
      },
      {
        word: "leader",
        pos: "n.",
        meaning: "지도자",
        example: "Team leader.",
        ex_meaning: "팀장."
      }
    ]
  },
  {
    day: 4,
    num: 24,
    word: "formal",
    definitions: [
      {
        pos: "adj.",
        meaning: "격식을 갖춘",
        example: "Formal dress.",
        ex_meaning: "정장."
      }
    ],
    derivatives: []
  },
  {
    day: 4,
    num: 25,
    word: "remove",
    definitions: [
      {
        pos: "v.",
        meaning: "해임하다; 제거하다",
        example: "Remove him from office.",
        ex_meaning: "그를 관직에서 해임하다."
      }
    ],
    derivatives: [
      {
        word: "removal",
        pos: "n.",
        meaning: "제거, 해임",
        example: "Snow removal.",
        ex_meaning: "제설."
      }
    ]
  },
  {
    day: 4,
    num: 26,
    word: "collect",
    definitions: [
      {
        pos: "v.",
        meaning: "모으다, 수집하다",
        example: "Collect data.",
        ex_meaning: "데이터를 수집하다."
      }
    ],
    derivatives: [
      {
        word: "collection",
        pos: "n.",
        meaning: "수집, 수집품",
        example: "Art collection.",
        ex_meaning: "미술 수집품."
      },
      {
        word: "collective",
        pos: "adj.",
        meaning: "집단의",
        example: "Collective effort.",
        ex_meaning: "집단적인 노력."
      }
    ]
  },
  {
    day: 4,
    num: 27,
    word: "coordinate",
    definitions: [
      {
        pos: "v.",
        meaning: "조정하다",
        example: "Coordinate the schedule.",
        ex_meaning: "일정을 조정하다."
      }
    ],
    derivatives: [
      {
        word: "coordination",
        pos: "n.",
        meaning: "조정",
        example: "Lack of coordination.",
        ex_meaning: "조정의 부재."
      },
      {
        word: "coordinator",
        pos: "n.",
        meaning: "진행자, 코디네이터",
        example: "Project coordinator.",
        ex_meaning: "프로젝트 진행자."
      }
    ]
  },
  {
    day: 4,
    num: 28,
    word: "hardly",
    definitions: [
      {
        pos: "adv.",
        meaning: "거의 ~하지 않다",
        example: "I hardly know him.",
        ex_meaning: "나는 그를 거의 모른다."
      }
    ],
    derivatives: []
  },
  {
    day: 4,
    num: 29,
    word: "abstract",
    definitions: [
      {
        pos: "adj.",
        meaning: "추상적인",
        example: "Abstract idea.",
        ex_meaning: "추상적인 아이디어."
      }
    ],
    derivatives: []
  },
  {
    day: 4,
    num: 30,
    word: "directory",
    definitions: [
      {
        pos: "n.",
        meaning: "주소록, 인명부",
        example: "Telephone directory.",
        ex_meaning: "전화번호부."
      }
    ],
    derivatives: []
  },
  {
    day: 4,
    num: 31,
    word: "accountable",
    definitions: [
      {
        pos: "adj.",
        meaning: "책임이 있는",
        example: "Held accountable for the error.",
        ex_meaning: "그 오류에 대해 책임을 지게 된."
      }
    ],
    derivatives: [
      {
        word: "accountability",
        pos: "n.",
        meaning: "책임, 의무",
        example: "Demand accountability.",
        ex_meaning: "책임을 요구하다."
      }
    ]
  },
  {
    day: 4,
    num: 32,
    word: "skillfully",
    definitions: [
      {
        pos: "adv.",
        meaning: "능숙하게, 솜씨 있게",
        example: "Skillfully handled.",
        ex_meaning: "능숙하게 처리된."
      }
    ],
    derivatives: [
      {
        word: "skill",
        pos: "n.",
        meaning: "기술",
        example: "Technical skill.",
        ex_meaning: "기술적인 능력."
      },
      {
        word: "skilled",
        pos: "adj.",
        meaning: "숙련된",
        example: "Skilled worker.",
        ex_meaning: "숙련된 노동자."
      }
    ]
  },
  {
    day: 4,
    num: 33,
    word: "exclusive",
    definitions: [
      {
        pos: "adj.",
        meaning: "독점적인; 배타적인",
        example: "Exclusive interview.",
        ex_meaning: "독점 인터뷰."
      }
    ],
    derivatives: [
      {
        word: "exclude",
        pos: "v.",
        meaning: "제외하다",
        example: "Exclude the possibility.",
        ex_meaning: "가능성을 배제하다."
      },
      {
        word: "exclusively",
        pos: "adv.",
        meaning: "독점적으로",
        example: "Sold exclusively.",
        ex_meaning: "독점적으로 판매되는."
      }
    ]
  },
  {
    day: 4,
    num: 34,
    word: "intention",
    definitions: [
      {
        pos: "n.",
        meaning: "의도, 의향",
        example: "Have no intention of leaving.",
        ex_meaning: "떠날 의도가 없다."
      }
    ],
    derivatives: [
      {
        word: "intent",
        pos: "n.",
        meaning: "의도",
        example: "Criminal intent.",
        ex_meaning: "범죄 의도."
      },
      {
        word: "intend",
        pos: "v.",
        meaning: "~할 작정이다",
        example: "Intend to stay.",
        ex_meaning: "머무를 작정이다."
      }
    ]
  },
  {
    day: 4,
    num: 35,
    word: "transform",
    definitions: [
      {
        pos: "v.",
        meaning: "변형시키다, 바꾸다",
        example: "Transform the business.",
        ex_meaning: "사업을 변모시키다."
      }
    ],
    derivatives: [
      {
        word: "transformation",
        pos: "n.",
        meaning: "변형, 변화",
        example: "Complete transformation.",
        ex_meaning: "완전한 변화."
      }
    ]
  },
  {
    day: 4,
    num: 36,
    word: "respectful",
    definitions: [
      {
        pos: "adj.",
        meaning: "정중한, 존중하는",
        example: "Be respectful to elders.",
        ex_meaning: "어른들에게 정중해라."
      }
    ],
    derivatives: [
      {
        word: "respect",
        pos: "v.",
        meaning: "존경하다",
        example: "Respect others.",
        ex_meaning: "타인을 존중하다."
      },
      {
        word: "respectfully",
        pos: "adv.",
        meaning: "정중하게",
        example: "Bow respectfully.",
        ex_meaning: "정중하게 절하다."
      }
    ]
  },
  {
    day: 4,
    num: 37,
    word: "duplicate",
    definitions: [
      {
        pos: "n.",
        meaning: "사본",
        example: "Make a duplicate.",
        ex_meaning: "사본을 만들다."
      }
    ],
    derivatives: []
  },
  {
    day: 4,
    num: 38,
    word: "contrary",
    definitions: [
      {
        pos: "n.",
        meaning: "반대",
        example: "On the contrary.",
        ex_meaning: "그와는 반대로."
      }
    ],
    derivatives: []
  },
  {
    day: 4,
    num: 39,
    word: "disturbing",
    definitions: [
      {
        pos: "adj.",
        meaning: "충격적인, 불안감을 주는",
        example: "Disturbing news.",
        ex_meaning: "충격적인 소식."
      }
    ],
    derivatives: [
      {
        word: "disturb",
        pos: "v.",
        meaning: "방해하다",
        example: "Do not disturb.",
        ex_meaning: "방해하지 마시오."
      },
      {
        word: "disturbance",
        pos: "n.",
        meaning: "방해, 소란",
        example: "Causing a disturbance.",
        ex_meaning: "소란을 피우다."
      }
    ]
  },
  {
    day: 4,
    num: 40,
    word: "engage",
    definitions: [
      {
        pos: "v.",
        meaning: "관여하다, 종사하다",
        example: "Engage in conversation.",
        ex_meaning: "대화에 참여하다."
      }
    ],
    derivatives: [
      {
        word: "engagement",
        pos: "n.",
        meaning: "약속, 관여",
        example: "Previous engagement.",
        ex_meaning: "선약."
      }
    ]
  },
// ==========================================
  // Day 5: 일반 사무 (General Business) - 엑셀 순서 반영
  // ==========================================
  {
    day: 5,
    num: 1,
    word: "sophisticated",
    definitions: [
      {
        pos: "adj.",
        meaning: "(기계가) 정교한, 복잡한; 세련된",
        example: "Sophisticated technology.",
        ex_meaning: "정교한 기술."
      }
    ],
    derivatives: []
  },
  {
    day: 5,
    num: 2,
    word: "timely",
    definitions: [
      {
        pos: "adj.",
        meaning: "시기적절한, 때를 맞춘",
        example: "A timely response.",
        ex_meaning: "시기적절한 응답."
      }
    ],
    derivatives: []
  },
  {
    day: 5,
    num: 3,
    word: "realistically",
    definitions: [
      {
        pos: "adv.",
        meaning: "현실적으로",
        example: "Think realistically.",
        ex_meaning: "현실적으로 생각하다."
      }
    ],
    derivatives: [
      {
        word: "realistic",
        pos: "adj.",
        meaning: "현실적인",
        example: "Realistic goal.",
        ex_meaning: "현실적인 목표."
      },
      {
        word: "reality",
        pos: "n.",
        meaning: "현실",
        example: "Face reality.",
        ex_meaning: "현실을 직시하다."
      }
    ]
  },
  {
    day: 5,
    num: 4,
    word: "promptly",
    definitions: [
      {
        pos: "adv.",
        meaning: "즉시; 정각에",
        example: "Arrive promptly at 9.",
        ex_meaning: "9시 정각에 도착하다."
      }
    ],
    derivatives: [
      {
        word: "prompt",
        pos: "adj.",
        meaning: "신속한; 즉각적인",
        example: "Prompt action.",
        ex_meaning: "신속한 조치."
      }
    ]
  },
  {
    day: 5,
    num: 5,
    word: "accessible",
    definitions: [
      {
        pos: "adj.",
        meaning: "출입할 수 있는, 이용할 수 있는",
        example: "Easily accessible by car.",
        ex_meaning: "차로 쉽게 접근할 수 있는."
      }
    ],
    derivatives: [
      {
        word: "access",
        pos: "n.",
        meaning: "접근, 이용 권한",
        example: "Access to the server.",
        ex_meaning: "서버 접근 권한."
      }
    ]
  },
  {
    day: 5,
    num: 6,
    word: "implement",
    definitions: [
      {
        pos: "v.",
        meaning: "실시하다, 실행하다",
        example: "Implement a plan.",
        ex_meaning: "계획을 실행하다."
      }
    ],
    derivatives: [
      {
        word: "implementation",
        pos: "n.",
        meaning: "실행, 이행",
        example: "Implementation of the policy.",
        ex_meaning: "정책의 이행."
      }
    ]
  },
  {
    day: 5,
    num: 7,
    word: "feedback",
    definitions: [
      {
        pos: "n.",
        meaning: "의견, 반응",
        example: "Customer feedback.",
        ex_meaning: "고객 의견."
      }
    ],
    derivatives: []
  },
  {
    day: 5,
    num: 8,
    word: "outstanding",
    definitions: [
      {
        pos: "adj.",
        meaning: "우수한; (부채 등이) 미지불된",
        example: "Outstanding performance.",
        ex_meaning: "우수한 성과."
      }
    ],
    derivatives: []
  },
  {
    day: 5,
    num: 9,
    word: "inform",
    definitions: [
      {
        pos: "v.",
        meaning: "~에게 알리다",
        example: "Inform him of the news.",
        ex_meaning: "그에게 소식을 알리다."
      }
    ],
    derivatives: [
      {
        word: "information",
        pos: "n.",
        meaning: "정보",
        example: "Useful information.",
        ex_meaning: "유용한 정보."
      },
      {
        word: "informative",
        pos: "adj.",
        meaning: "유익한",
        example: "Informative seminar.",
        ex_meaning: "유익한 세미나."
      }
    ]
  },
  {
    day: 5,
    num: 10,
    word: "replacement",
    definitions: [
      {
        pos: "n.",
        meaning: "교체, 후임자",
        example: "Find a replacement.",
        ex_meaning: "후임자를 찾다."
      }
    ],
    derivatives: [
      {
        word: "replace",
        pos: "v.",
        meaning: "교체하다, 대체하다",
        example: "Replace the battery.",
        ex_meaning: "배터리를 교체하다."
      }
    ]
  },
  {
    day: 5,
    num: 11,
    word: "announcement",
    definitions: [
      {
        pos: "n.",
        meaning: "공고, 발표",
        example: "Make an announcement.",
        ex_meaning: "발표하다."
      }
    ],
    derivatives: [
      {
        word: "announce",
        pos: "v.",
        meaning: "발표하다",
        example: "Announce the winner.",
        ex_meaning: "우승자를 발표하다."
      }
    ]
  },
  {
    day: 5,
    num: 12,
    word: "department",
    definitions: [
      {
        pos: "n.",
        meaning: "(조직, 기업의) 부서",
        example: "Sales department.",
        ex_meaning: "영업부."
      }
    ],
    derivatives: []
  },
  {
    day: 5,
    num: 13,
    word: "permanently",
    definitions: [
      {
        pos: "adv.",
        meaning: "영구적으로, 불변으로",
        example: "Closed permanently.",
        ex_meaning: "영구적으로 폐쇄된."
      }
    ],
    derivatives: [
      {
        word: "permanent",
        pos: "adj.",
        meaning: "영구적인",
        example: "Permanent job.",
        ex_meaning: "정규직(영구적인 일자리)."
      }
    ]
  },
  {
    day: 5,
    num: 14,
    word: "fulfill",
    definitions: [
      {
        pos: "v.",
        meaning: "(조건을) 만족시키다, (약속을) 이행하다",
        example: "Fulfill a promise.",
        ex_meaning: "약속을 이행하다."
      }
    ],
    derivatives: [
      {
        word: "fulfillment",
        pos: "n.",
        meaning: "이행, 달성",
        example: "Fulfillment of duties.",
        ex_meaning: "임무의 이행."
      }
    ]
  },
  {
    day: 5,
    num: 15,
    word: "outline",
    definitions: [
      {
        pos: "n.",
        meaning: "개요",
        example: "Brief outline.",
        ex_meaning: "간략한 개요."
      },
      {
        pos: "v.",
        meaning: "개요를 설명하다",
        example: "Outline the plan.",
        ex_meaning: "계획의 개요를 설명하다."
      }
    ],
    derivatives: []
  },
  {
    day: 5,
    num: 16,
    word: "explain",
    definitions: [
      {
        pos: "v.",
        meaning: "설명하다",
        example: "Explain the reason.",
        ex_meaning: "이유를 설명하다."
      }
    ],
    derivatives: [
      {
        word: "explanation",
        pos: "n.",
        meaning: "설명",
        example: "Give an explanation.",
        ex_meaning: "설명을 하다."
      }
    ]
  },
  {
    day: 5,
    num: 17,
    word: "contain",
    definitions: [
      {
        pos: "v.",
        meaning: "포함하다",
        example: "Contain information.",
        ex_meaning: "정보를 포함하다."
      }
    ],
    derivatives: []
  },
  {
    day: 5,
    num: 18,
    word: "compile",
    definitions: [
      {
        pos: "v.",
        meaning: "(자료를) 편집하다, 모으다",
        example: "Compile data.",
        ex_meaning: "데이터를 수집(편집)하다."
      }
    ],
    derivatives: [
      {
        word: "compilation",
        pos: "n.",
        meaning: "편집, 편집물",
        example: "Compilation of essays.",
        ex_meaning: "에세이 편집물."
      }
    ]
  },
  {
    day: 5,
    num: 19,
    word: "subsequent",
    definitions: [
      {
        pos: "adj.",
        meaning: "그 이후의, 차후의",
        example: "Subsequent events.",
        ex_meaning: "그 이후의 사건들."
      }
    ],
    derivatives: [
      {
        word: "subsequently",
        pos: "adv.",
        meaning: "그 후에",
        example: "Subsequently moved to Seoul.",
        ex_meaning: "그 후에 서울로 이사했다."
      }
    ]
  },
  {
    day: 5,
    num: 20,
    word: "overview",
    definitions: [
      {
        pos: "n.",
        meaning: "개요, 개관",
        example: "Provide an overview.",
        ex_meaning: "개요를 제공하다."
      }
    ],
    derivatives: []
  },
  {
    day: 5,
    num: 21,
    word: "provider",
    definitions: [
      {
        pos: "n.",
        meaning: "공급자, 제공자",
        example: "Internet service provider.",
        ex_meaning: "인터넷 서비스 제공자."
      }
    ],
    derivatives: [
      {
        word: "provide",
        pos: "v.",
        meaning: "제공하다",
        example: "Provide help.",
        ex_meaning: "도움을 제공하다."
      },
      {
        word: "provision",
        pos: "n.",
        meaning: "공급, 조항",
        example: "Provision of food.",
        ex_meaning: "식량 공급."
      }
    ]
  },
  {
    day: 5,
    num: 22,
    word: "matter",
    definitions: [
      {
        pos: "n.",
        meaning: "문제, 일",
        example: "A serious matter.",
        ex_meaning: "심각한 문제."
      },
      {
        pos: "v.",
        meaning: "중요하다",
        example: "It doesn't matter.",
        ex_meaning: "그것은 중요하지 않다."
      }
    ],
    derivatives: []
  },
  {
    day: 5,
    num: 23,
    word: "expertise",
    definitions: [
      {
        pos: "n.",
        meaning: "전문 지식, 전문 기술",
        example: "Technical expertise.",
        ex_meaning: "기술적 전문 지식."
      }
    ],
    derivatives: [
      {
        word: "expert",
        pos: "n.",
        meaning: "전문가",
        example: "An expert in finance.",
        ex_meaning: "금융 전문가."
      }
    ]
  },
  {
    day: 5,
    num: 24,
    word: "demonstrate",
    definitions: [
      {
        pos: "v.",
        meaning: "증명하다; (모형 등으로) 설명하다",
        example: "Demonstrate how to use it.",
        ex_meaning: "그것을 사용하는 법을 시연하다."
      }
    ],
    derivatives: [
      {
        word: "demonstration",
        pos: "n.",
        meaning: "증명, 시연",
        example: "Product demonstration.",
        ex_meaning: "제품 시연."
      }
    ]
  },
  {
    day: 5,
    num: 25,
    word: "remainder",
    definitions: [
      {
        pos: "n.",
        meaning: "나머지",
        example: "For the remainder of the day.",
        ex_meaning: "남은 하루 동안."
      }
    ],
    derivatives: [
      {
        word: "remain",
        pos: "v.",
        meaning: "남다, 여전히 ~이다",
        example: "Remain calm.",
        ex_meaning: "침착함을 유지하다(침착하게 남아있다)."
      },
      {
        word: "remaining",
        pos: "adj.",
        meaning: "남아있는",
        example: "Remaining tickets.",
        ex_meaning: "남은 표들."
      }
    ]
  },
  {
    day: 5,
    num: 26,
    word: "essential",
    definitions: [
      {
        pos: "adj.",
        meaning: "필수적인, 극히 중요한",
        example: "Water is essential for life.",
        ex_meaning: "물은 생명에 필수적이다."
      }
    ],
    derivatives: []
  },
  {
    day: 5,
    num: 27,
    word: "divide",
    definitions: [
      {
        pos: "v.",
        meaning: "나누다, 분할하다",
        example: "Divide the cake.",
        ex_meaning: "케이크를 나누다."
      }
    ],
    derivatives: [
      {
        word: "division",
        pos: "n.",
        meaning: "분할, 부서",
        example: "The sales division.",
        ex_meaning: "영업 부서."
      },
      {
        word: "dividend",
        pos: "n.",
        meaning: "배당금",
        example: "Receive dividends.",
        ex_meaning: "배당금을 받다."
      }
    ]
  },
  {
    day: 5,
    num: 28,
    word: "major",
    definitions: [
      {
        pos: "adj.",
        meaning: "주요한, 중대한",
        example: "A major problem.",
        ex_meaning: "주요한 문제."
      }
    ],
    derivatives: []
  },
  {
    day: 5,
    num: 29,
    word: "compliance",
    definitions: [
      {
        pos: "n.",
        meaning: "(명령, 법규의) 준수",
        example: "In compliance with the law.",
        ex_meaning: "법을 준수하여."
      }
    ],
    derivatives: [
      {
        word: "comply",
        pos: "v.",
        meaning: "준수하다",
        example: "Comply with standards.",
        ex_meaning: "기준을 준수하다."
      }
    ]
  },
  {
    day: 5,
    num: 30,
    word: "clarify",
    definitions: [
      {
        pos: "v.",
        meaning: "명확하게 하다",
        example: "Clarify the situation.",
        ex_meaning: "상황을 명확하게 하다."
      }
    ],
    derivatives: [
      {
        word: "clarification",
        pos: "n.",
        meaning: "설명, 해명",
        example: "Ask for clarification.",
        ex_meaning: "해명을 요구하다."
      }
    ]
  },
  {
    day: 5,
    num: 31,
    word: "face",
    definitions: [
      {
        pos: "v.",
        meaning: "(문제 등에) 직면하다",
        example: "Face a challenge.",
        ex_meaning: "도전에 직면하다."
      },
      {
        pos: "n.",
        meaning: "얼굴; 표면",
        example: "Face to face.",
        ex_meaning: "얼굴을 맞대고."
      }
    ],
    derivatives: []
  },
  {
    day: 5,
    num: 32,
    word: "follow",
    definitions: [
      {
        pos: "v.",
        meaning: "~을 따르다; ~의 뒤를 잇다",
        example: "Follow the instructions.",
        ex_meaning: "지시를 따르다."
      }
    ],
    derivatives: [
      {
        word: "following",
        pos: "adj.",
        meaning: "~후에; 다음의",
        example: "The following day.",
        ex_meaning: "다음 날."
      }
    ]
  },
  {
    day: 5,
    num: 33,
    word: "aspect",
    definitions: [
      {
        pos: "n.",
        meaning: "관점, 국면",
        example: "Every aspect of the business.",
        ex_meaning: "사업의 모든 측면."
      }
    ],
    derivatives: []
  },
  {
    day: 5,
    num: 34,
    word: "apparently",
    definitions: [
      {
        pos: "adv.",
        meaning: "보기에 ~한 듯한, 외관상으로는",
        example: "Apparently, he is sick.",
        ex_meaning: "보아하니 그는 아픈 것 같다."
      }
    ],
    derivatives: [
      {
        word: "apparent",
        pos: "adj.",
        meaning: "명백한, 외관상의",
        example: "For no apparent reason.",
        ex_meaning: "명백한 이유 없이."
      }
    ]
  },
  {
    day: 5,
    num: 35,
    word: "aware",
    definitions: [
      {
        pos: "adj.",
        meaning: "알고 있는, 인식하고 있는",
        example: "Are you aware of the risks?",
        ex_meaning: "위험을 알고 있습니까?"
      }
    ],
    derivatives: [
      {
        word: "awareness",
        pos: "n.",
        meaning: "인식",
        example: "Raise awareness.",
        ex_meaning: "인식을 높이다."
      }
    ]
  },
  {
    day: 5,
    num: 36,
    word: "extended",
    definitions: [
      {
        pos: "adj.",
        meaning: "(기간 등을) 연장한, 장기간의",
        example: "Extended hours.",
        ex_meaning: "연장된 시간."
      }
    ],
    derivatives: [
      {
        word: "extend",
        pos: "v.",
        meaning: "연장하다",
        example: "Extend the deadline.",
        ex_meaning: "마감 기한을 연장하다."
      },
      {
        word: "extension",
        pos: "n.",
        meaning: "연장",
        example: "Visa extension.",
        ex_meaning: "비자 연장."
      }
    ]
  },
  {
    day: 5,
    num: 37,
    word: "accidentally",
    definitions: [
      {
        pos: "adv.",
        meaning: "우연히, 뜻하지 않게",
        example: "Accidentally deleted the file.",
        ex_meaning: "실수로 파일을 삭제했다."
      }
    ],
    derivatives: [
      {
        word: "accident",
        pos: "n.",
        meaning: "사고",
        example: "Car accident.",
        ex_meaning: "자동차 사고."
      },
      {
        word: "accidental",
        pos: "adj.",
        meaning: "우연한",
        example: "Accidental meeting.",
        ex_meaning: "우연한 만남."
      }
    ]
  },
  {
    day: 5,
    num: 38,
    word: "advisable",
    definitions: [
      {
        pos: "adj.",
        meaning: "바람직한, 합당한",
        example: "It is advisable to book early.",
        ex_meaning: "일찍 예약하는 것이 바람직하다."
      }
    ],
    derivatives: [
      {
        word: "advise",
        pos: "v.",
        meaning: "조언하다",
        example: "Advise him to stop.",
        ex_meaning: "그에게 멈추라고 조언하다."
      },
      {
        word: "advice",
        pos: "n.",
        meaning: "조언",
        example: "Take my advice.",
        ex_meaning: "내 조언을 받아들여라."
      }
    ]
  },
  {
    day: 5,
    num: 39,
    word: "concerned",
    definitions: [
      {
        pos: "adj.",
        meaning: "염려하는, 걱정하는; 관련된",
        example: "Concerned parents.",
        ex_meaning: "걱정하는 부모들."
      }
    ],
    derivatives: [
      {
        word: "concern",
        pos: "n.",
        meaning: "걱정, 관심사",
        example: "Main concern.",
        ex_meaning: "주요 관심사."
      }
    ]
  },
  {
    day: 5,
    num: 40,
    word: "speak",
    definitions: [
      {
        pos: "v.",
        meaning: "이야기하다",
        example: "Speak clearly.",
        ex_meaning: "분명하게 말하다."
      }
    ],
    derivatives: [
      {
        word: "speech",
        pos: "n.",
        meaning: "연설",
        example: "Give a speech.",
        ex_meaning: "연설을 하다."
      },
      {
        word: "speaker",
        pos: "n.",
        meaning: "연사",
        example: "Keynote speaker.",
        ex_meaning: "기조 연설자."
      }
    ]
  },

  // ==========================================
  // Day 6: 일반 사무 (General Business) - 엑셀 순서 반영
  // ==========================================
  {
    day: 6,
    num: 1,
    word: "presentation",
    definitions: [
      {
        pos: "n.",
        meaning: "발표, 프레젠테이션",
        example: "Give a presentation.",
        ex_meaning: "발표를 하다."
      }
    ],
    derivatives: [
      {
        word: "present",
        pos: "v.",
        meaning: "제시하다; 발표하다",
        example: "Present the findings.",
        ex_meaning: "결과를 발표하다."
      },
      {
        word: "presenter",
        pos: "n.",
        meaning: "발표자",
        example: "The next presenter.",
        ex_meaning: "다음 발표자."
      }
    ]
  },
  {
    day: 6,
    num: 2,
    word: "evaluation",
    definitions: [
      {
        pos: "n.",
        meaning: "평가",
        example: "Performance evaluation.",
        ex_meaning: "성과 평가."
      }
    ],
    derivatives: [
      {
        word: "evaluate",
        pos: "v.",
        meaning: "평가하다",
        example: "Evaluate the results.",
        ex_meaning: "결과를 평가하다."
      },
      {
        word: "evaluator",
        pos: "n.",
        meaning: "평가자",
        example: "External evaluator.",
        ex_meaning: "외부 평가자."
      }
    ]
  },
  {
    day: 6,
    num: 3,
    word: "course",
    definitions: [
      {
        pos: "n.",
        meaning: "과정, 코스",
        example: "Training course.",
        ex_meaning: "교육 과정."
      }
    ],
    derivatives: []
  },
  {
    day: 6,
    num: 4,
    word: "conference",
    definitions: [
      {
        pos: "n.",
        meaning: "회의, 회담",
        example: "Press conference.",
        ex_meaning: "기자 회견."
      }
    ],
    derivatives: []
  },
  {
    day: 6,
    num: 5,
    word: "schedule",
    definitions: [
      {
        pos: "n.",
        meaning: "일정",
        example: "Tight schedule.",
        ex_meaning: "빠듯한 일정."
      },
      {
        pos: "v.",
        meaning: "일정을 잡다",
        example: "Schedule a meeting.",
        ex_meaning: "회의 일정을 잡다."
      }
    ],
    derivatives: []
  },
  {
    day: 6,
    num: 6,
    word: "attendance",
    definitions: [
      {
        pos: "n.",
        meaning: "출석",
        example: "Attendance sheet.",
        ex_meaning: "출석부."
      }
    ],
    derivatives: [
      {
        word: "attend",
        pos: "v.",
        meaning: "참석하다",
        example: "Attend school.",
        ex_meaning: "학교에 다니다."
      },
      {
        word: "attendee",
        pos: "n.",
        meaning: "참석자",
        example: "Conference attendees.",
        ex_meaning: "회의 참석자들."
      }
    ]
  },
  {
    day: 6,
    num: 7,
    word: "advance",
    definitions: [
      {
        pos: "n.",
        meaning: "진보, 전진; 사전(미리 함)",
        example: "In advance.",
        ex_meaning: "미리, 사전에."
      }
    ],
    derivatives: [
      {
        word: "advanced",
        pos: "adj.",
        meaning: "고급의, 진보된",
        example: "Advanced technology.",
        ex_meaning: "진보된 기술."
      },
      {
        word: "advancement",
        pos: "n.",
        meaning: "승진, 진보",
        example: "Career advancement.",
        ex_meaning: "승진."
      }
    ]
  },
  {
    day: 6,
    num: 8,
    word: "register",
    definitions: [
      {
        pos: "v.",
        meaning: "등록하다",
        example: "Register for a class.",
        ex_meaning: "수업에 등록하다."
      }
    ],
    derivatives: [
      {
        word: "registration",
        pos: "n.",
        meaning: "등록",
        example: "Voter registration.",
        ex_meaning: "유권자 등록."
      }
    ]
  },
  {
    day: 6,
    num: 9,
    word: "session",
    definitions: [
      {
        pos: "n.",
        meaning: "시간, 기간; 회의",
        example: "Q&A session.",
        ex_meaning: "질의응답 시간."
      }
    ],
    derivatives: []
  },
  {
    day: 6,
    num: 10,
    word: "participate",
    definitions: [
      {
        pos: "v.",
        meaning: "참가하다",
        example: "Participate in the event.",
        ex_meaning: "행사에 참가하다."
      }
    ],
    derivatives: [
      {
        word: "participation",
        pos: "n.",
        meaning: "참가",
        example: "Active participation.",
        ex_meaning: "적극적인 참가."
      },
      {
        word: "participant",
        pos: "n.",
        meaning: "참가자",
        example: "List of participants.",
        ex_meaning: "참가자 명단."
      }
    ]
  },
  {
    day: 6,
    num: 11,
    word: "access",
    definitions: [
      {
        pos: "v.",
        meaning: "접근하다",
        example: "Access the website.",
        ex_meaning: "웹사이트에 접속하다."
      },
      {
        pos: "n.",
        meaning: "접근 권한",
        example: "Unauthorized access.",
        ex_meaning: "무단 접근."
      }
    ],
    derivatives: [
      {
        word: "accessible",
        pos: "adj.",
        meaning: "접근 가능한",
        example: "Handicap accessible.",
        ex_meaning: "장애인이 이용 가능한."
      }
    ]
  },
  {
    day: 6,
    num: 12,
    word: "select",
    definitions: [
      {
        pos: "v.",
        meaning: "선택하다",
        example: "Select an option.",
        ex_meaning: "옵션을 선택하다."
      },
      {
        pos: "adj.",
        meaning: "엄선된",
        example: "Select guests.",
        ex_meaning: "엄선된 손님들."
      }
    ],
    derivatives: [
      {
        word: "selection",
        pos: "n.",
        meaning: "선택, 선발",
        example: "Make a selection.",
        ex_meaning: "선택하다."
      },
      {
        word: "selective",
        pos: "adj.",
        meaning: "선별적인, 까다로운",
        example: "Selective memory.",
        ex_meaning: "선별적인 기억."
      }
    ]
  },
  {
    day: 6,
    num: 13,
    word: "require",
    definitions: [
      {
        pos: "v.",
        meaning: "요구하다",
        example: "Require assistance.",
        ex_meaning: "도움을 필요로 하다."
      }
    ],
    derivatives: [
      {
        word: "requirement",
        pos: "n.",
        meaning: "요구 사항, 필수 조건",
        example: "Meet requirements.",
        ex_meaning: "요구 사항을 충족하다."
      }
    ]
  },
  {
    day: 6,
    num: 14,
    word: "material",
    definitions: [
      {
        pos: "n.",
        meaning: "자료; 재료",
        example: "Training materials.",
        ex_meaning: "교육 자료."
      }
    ],
    derivatives: []
  },
  {
    day: 6,
    num: 15,
    word: "review",
    definitions: [
      {
        pos: "v.",
        meaning: "검토하다",
        example: "Review the contract.",
        ex_meaning: "계약서를 검토하다."
      },
      {
        pos: "n.",
        meaning: "검토, 논평",
        example: "Book review.",
        ex_meaning: "서평."
      }
    ],
    derivatives: []
  },
  {
    day: 6,
    num: 16,
    word: "procedure",
    definitions: [
      {
        pos: "n.",
        meaning: "절차",
        example: "Safety procedure.",
        ex_meaning: "안전 절차."
      }
    ],
    derivatives: [
      {
        word: "proceed",
        pos: "v.",
        meaning: "진행하다",
        example: "Proceed with caution.",
        ex_meaning: "조심해서 진행하다."
      },
      {
        word: "procedural",
        pos: "adj.",
        meaning: "절차상의",
        example: "Procedural error.",
        ex_meaning: "절차상의 오류."
      }
    ]
  },
  {
    day: 6,
    num: 17,
    word: "distribute",
    definitions: [
      {
        pos: "v.",
        meaning: "배포하다, 나누어 주다",
        example: "Distribute leaflets.",
        ex_meaning: "전단지를 배포하다."
      }
    ],
    derivatives: [
      {
        word: "distribution",
        pos: "n.",
        meaning: "분배, 배포",
        example: "Distribution center.",
        ex_meaning: "물류 센터."
      },
      {
        word: "distributor",
        pos: "n.",
        meaning: "배급업자",
        example: "Sole distributor.",
        ex_meaning: "독점 배급업자."
      }
    ]
  },
  {
    day: 6,
    num: 18,
    word: "arrange",
    definitions: [
      {
        pos: "v.",
        meaning: "준비하다, 마련하다; 배열하다",
        example: "Arrange a meeting.",
        ex_meaning: "회의를 준비하다."
      }
    ],
    derivatives: [
      {
        word: "arrangement",
        pos: "n.",
        meaning: "준비, 배열",
        example: "Flower arrangement.",
        ex_meaning: "꽃꽂이."
      }
    ]
  },
  {
    day: 6,
    num: 19,
    word: "announce",
    definitions: [
      {
        pos: "v.",
        meaning: "발표하다, 알리다",
        example: "Announce the news.",
        ex_meaning: "뉴스를 발표하다."
      }
    ],
    derivatives: [
      {
        word: "announcement",
        pos: "n.",
        meaning: "발표, 공고",
        example: "Make an announcement.",
        ex_meaning: "발표를 하다."
      }
    ]
  },
  {
    day: 6,
    num: 20,
    word: "register",
    definitions: [
      {
        pos: "v.",
        meaning: "등록하다; (기계가) 나타내다",
        example: "Register a car.",
        ex_meaning: "자동차를 등록하다."
      }
    ],
    derivatives: []
  },
  {
    day: 6,
    num: 21,
    word: "remind",
    definitions: [
      {
        pos: "v.",
        meaning: "상기시키다",
        example: "Remind him of the meeting.",
        ex_meaning: "그에게 회의를 상기시켜라."
      }
    ],
    derivatives: [
      {
        word: "reminder",
        pos: "n.",
        meaning: "독촉장, 메모",
        example: "Gentle reminder.",
        ex_meaning: "정중한 독촉(메모)."
      }
    ]
  },
  {
    day: 6,
    num: 22,
    word: "book",
    definitions: [
      {
        pos: "v.",
        meaning: "예약하다",
        example: "Book a table.",
        ex_meaning: "테이블을 예약하다."
      },
      {
        pos: "n.",
        meaning: "책",
        example: "Read a book.",
        ex_meaning: "책을 읽다."
      }
    ],
    derivatives: [
      {
        word: "booking",
        pos: "n.",
        meaning: "예약",
        example: "Make a booking.",
        ex_meaning: "예약을 하다."
      }
    ]
  },
  {
    day: 6,
    num: 23,
    word: "host",
    definitions: [
      {
        pos: "v.",
        meaning: "주최하다",
        example: "Host a party.",
        ex_meaning: "파티를 주최하다."
      },
      {
        pos: "n.",
        meaning: "주최자, 진행자",
        example: "Talk show host.",
        ex_meaning: "토크쇼 진행자."
      }
    ],
    derivatives: []
  },
  {
    day: 6,
    num: 24,
    word: "committee",
    definitions: [
      {
        pos: "n.",
        meaning: "위원회",
        example: "The committee decided.",
        ex_meaning: "위원회가 결정했다."
      }
    ],
    derivatives: []
  },
  {
    day: 6,
    num: 25,
    word: "notify",
    definitions: [
      {
        pos: "v.",
        meaning: "통지하다",
        example: "Notify the police.",
        ex_meaning: "경찰에 알리다."
      }
    ],
    derivatives: [
      {
        word: "notification",
        pos: "n.",
        meaning: "통지",
        example: "Written notification.",
        ex_meaning: "서면 통지."
      }
    ]
  },
  {
    day: 6,
    num: 26,
    word: "welcome",
    definitions: [
      {
        pos: "v.",
        meaning: "환영하다",
        example: "Welcome guests.",
        ex_meaning: "손님을 환영하다."
      },
      {
        pos: "adj.",
        meaning: "환영받는",
        example: "You are welcome.",
        ex_meaning: "천만의 말씀입니다 (환영합니다)."
      }
    ],
    derivatives: []
  },
  {
    day: 6,
    num: 27,
    word: "participant",
    definitions: [
      {
        pos: "n.",
        meaning: "참가자",
        example: "Survey participants.",
        ex_meaning: "설문 참가자들."
      }
    ],
    derivatives: [
      {
        word: "participate",
        pos: "v.",
        meaning: "참가하다",
        example: "Participate in sports.",
        ex_meaning: "스포츠에 참가하다."
      }
    ]
  },
  {
    day: 6,
    num: 28,
    word: "upcoming",
    definitions: [
      {
        pos: "adj.",
        meaning: "다가오는, 곧 있을",
        example: "Upcoming election.",
        ex_meaning: "다가오는 선거."
      }
    ],
    derivatives: []
  },
  {
    day: 6,
    num: 29,
    word: "annual",
    definitions: [
      {
        pos: "adj.",
        meaning: "매년의, 연례의",
        example: "Annual report.",
        ex_meaning: "연례 보고서."
      }
    ],
    derivatives: [
      {
        word: "annually",
        pos: "adv.",
        meaning: "매년",
        example: "Held annually.",
        ex_meaning: "매년 열리는."
      }
    ]
  },
  {
    day: 6,
    num: 30,
    word: "duration",
    definitions: [
      {
        pos: "n.",
        meaning: "지속 기간",
        example: "For the duration of the flight.",
        ex_meaning: "비행 시간 동안."
      }
    ],
    derivatives: []
  },
  {
    day: 6,
    num: 31,
    word: "meeting",
    definitions: [
      {
        pos: "n.",
        meaning: "회의, 모임",
        example: "Hold a meeting.",
        ex_meaning: "회의를 열다."
      }
    ],
    derivatives: [
      {
        word: "meet",
        pos: "v.",
        meaning: "만나다; 충족시키다",
        example: "Meet requirements.",
        ex_meaning: "요건을 충족시키다."
      }
    ]
  },
  {
    day: 6,
    num: 32,
    word: "agenda",
    definitions: [
      {
        pos: "n.",
        meaning: "의제, 안건",
        example: "On the agenda.",
        ex_meaning: "의제에 오른."
      }
    ],
    derivatives: []
  },
  {
    day: 6,
    num: 33,
    word: "convenient",
    definitions: [
      {
        pos: "adj.",
        meaning: "편리한",
        example: "Convenient location.",
        ex_meaning: "편리한 위치."
      }
    ],
    derivatives: [
      {
        word: "convenience",
        pos: "n.",
        meaning: "편의, 편리",
        example: "Convenience store.",
        ex_meaning: "편의점."
      },
      {
        word: "conveniently",
        pos: "adv.",
        meaning: "편리하게",
        example: "Conveniently located.",
        ex_meaning: "편리하게 위치한."
      }
    ]
  },
  {
    day: 6,
    num: 34,
    word: "inquire",
    definitions: [
      {
        pos: "v.",
        meaning: "문의하다, 묻다",
        example: "Inquire about the price.",
        ex_meaning: "가격에 대해 문의하다."
      }
    ],
    derivatives: [
      {
        word: "inquiry",
        pos: "n.",
        meaning: "문의, 질문",
        example: "Make an inquiry.",
        ex_meaning: "문의하다."
      }
    ]
  },
  {
    day: 6,
    num: 35,
    word: "presentation",
    definitions: [
      {
        pos: "n.",
        meaning: "발표",
        example: "Oral presentation.",
        ex_meaning: "구두 발표."
      }
    ],
    derivatives: []
  },
  {
    day: 6,
    num: 36,
    word: "instructor",
    definitions: [
      {
        pos: "n.",
        meaning: "강사",
        example: "Fitness instructor.",
        ex_meaning: "헬스 강사."
      }
    ],
    derivatives: [
      {
        word: "instruct",
        pos: "v.",
        meaning: "가르치다",
        example: "Instruct students.",
        ex_meaning: "학생들을 가르치다."
      }
    ]
  },
  {
    day: 6,
    num: 37,
    word: "training",
    definitions: [
      {
        pos: "n.",
        meaning: "교육, 훈련",
        example: "Training session.",
        ex_meaning: "교육 시간."
      }
    ],
    derivatives: [
      {
        word: "train",
        pos: "v.",
        meaning: "훈련하다",
        example: "Train hard.",
        ex_meaning: "열심히 훈련하다."
      },
      {
        word: "trainer",
        pos: "n.",
        meaning: "트레이너",
        example: "Personal trainer.",
        ex_meaning: "개인 트레이너."
      }
    ]
  },
  {
    day: 6,
    num: 38,
    word: "seminar",
    definitions: [
      {
        pos: "n.",
        meaning: "세미나",
        example: "Attend a seminar.",
        ex_meaning: "세미나에 참석하다."
      }
    ],
    derivatives: []
  },
  {
    day: 6,
    num: 39,
    word: "enroll",
    definitions: [
      {
        pos: "v.",
        meaning: "등록하다",
        example: "Enroll in a course.",
        ex_meaning: "과정에 등록하다."
      }
    ],
    derivatives: [
      {
        word: "enrollment",
        pos: "n.",
        meaning: "등록",
        example: "Enrollment fee.",
        ex_meaning: "등록금."
      }
    ]
  },
  {
    day: 6,
    num: 40,
    word: "lecture",
    definitions: [
      {
        pos: "n.",
        meaning: "강의",
        example: "Give a lecture.",
        ex_meaning: "강의를 하다."
      },
      {
        pos: "v.",
        meaning: "강의하다",
        example: "Lecture on history.",
        ex_meaning: "역사에 대해 강의하다."
      }
    ],
    derivatives: [
      {
        word: "lecturer",
        pos: "n.",
        meaning: "강연자",
        example: "Guest lecturer.",
        ex_meaning: "초청 강사."
      }
    ]
  },
// ==========================================
  // Day 7: 마케팅 (Marketing) - 엑셀 순서 반영
  // ==========================================
  {
    day: 7,
    num: 1,
    word: "survey",
    definitions: [
      {
        pos: "n.",
        meaning: "설문조사",
        example: "Conduct a survey.",
        ex_meaning: "설문조사를 실시하다."
      }
    ],
    derivatives: []
  },
  {
    day: 7,
    num: 2,
    word: "analysis",
    definitions: [
      {
        pos: "n.",
        meaning: "분석",
        example: "Market analysis.",
        ex_meaning: "시장 분석."
      }
    ],
    derivatives: [
      {
        word: "analyze",
        pos: "v.",
        meaning: "분석하다",
        example: "Analyze data.",
        ex_meaning: "데이터를 분석하다."
      },
      {
        word: "analyst",
        pos: "n.",
        meaning: "분석가",
        example: "Financial analyst.",
        ex_meaning: "재무 분석가."
      }
    ]
  },
  {
    day: 7,
    num: 3,
    word: "respondent",
    definitions: [
      {
        pos: "n.",
        meaning: "응답자",
        example: "Survey respondents.",
        ex_meaning: "설문 응답자들."
      }
    ],
    derivatives: [
      {
        word: "respond",
        pos: "v.",
        meaning: "응답하다",
        example: "Respond to questions.",
        ex_meaning: "질문에 응답하다."
      }
    ]
  },
  {
    day: 7,
    num: 4,
    word: "competition",
    definitions: [
      {
        pos: "n.",
        meaning: "경쟁",
        example: "Fierce competition.",
        ex_meaning: "치열한 경쟁."
      }
    ],
    derivatives: [
      {
        word: "compete",
        pos: "v.",
        meaning: "경쟁하다",
        example: "Compete for the prize.",
        ex_meaning: "상을 두고 경쟁하다."
      },
      {
        word: "competitive",
        pos: "adj.",
        meaning: "경쟁력 있는",
        example: "Competitive price.",
        ex_meaning: "경쟁력 있는 가격."
      },
      {
        word: "competitor",
        pos: "n.",
        meaning: "경쟁자",
        example: "Major competitor.",
        ex_meaning: "주요 경쟁자."
      }
    ]
  },
  {
    day: 7,
    num: 5,
    word: "consistently",
    definitions: [
      {
        pos: "adv.",
        meaning: "항상, 일관되게",
        example: "Perform consistently.",
        ex_meaning: "일관되게 성과를 내다."
      }
    ],
    derivatives: [
      {
        word: "consistent",
        pos: "adj.",
        meaning: "일관된",
        example: "Consistent effort.",
        ex_meaning: "일관된 노력."
      }
    ]
  },
  {
    day: 7,
    num: 6,
    word: "demand",
    definitions: [
      {
        pos: "n.",
        meaning: "수요, 요구",
        example: "Meet the demand.",
        ex_meaning: "수요를 충족시키다."
      },
      {
        pos: "v.",
        meaning: "요구하다",
        example: "Demand an answer.",
        ex_meaning: "답변을 요구하다."
      }
    ],
    derivatives: [
      {
        word: "demanding",
        pos: "adj.",
        meaning: "요구가 많은, 힘든",
        example: "Demanding job.",
        ex_meaning: "힘든 일."
      }
    ]
  },
  {
    day: 7,
    num: 7,
    word: "do one's utmost",
    definitions: [
      {
        pos: "phr.",
        meaning: "전력을 다하다",
        example: "Do one's utmost to succeed.",
        ex_meaning: "성공하기 위해 전력을 다하다."
      }
    ],
    derivatives: []
  },
  {
    day: 7,
    num: 8,
    word: "expand",
    definitions: [
      {
        pos: "v.",
        meaning: "확장하다, 확대하다",
        example: "Expand the business.",
        ex_meaning: "사업을 확장하다."
      }
    ],
    derivatives: [
      {
        word: "expansion",
        pos: "n.",
        meaning: "확장, 팽창",
        example: "Market expansion.",
        ex_meaning: "시장 확장."
      },
      {
        word: "expansive",
        pos: "adj.",
        meaning: "광범위한",
        example: "Expansive view.",
        ex_meaning: "탁 트인 전망."
      }
    ]
  },
  {
    day: 7,
    num: 9,
    word: "advanced",
    definitions: [
      {
        pos: "adj.",
        meaning: "고급의; 진보한, 앞선",
        example: "Advanced course.",
        ex_meaning: "고급 과정."
      }
    ],
    derivatives: [
      {
        word: "advance",
        pos: "v.",
        meaning: "나아가게 하다, 증진시키다",
        example: "Advance your career.",
        ex_meaning: "경력을 증진시키다."
      },
      {
        word: "advancement",
        pos: "n.",
        meaning: "승진, 진보",
        example: "Technological advancement.",
        ex_meaning: "기술적 진보."
      }
    ]
  },
  {
    day: 7,
    num: 10,
    word: "postpone",
    definitions: [
      {
        pos: "v.",
        meaning: "연기하다, 미루다",
        example: "Postpone the meeting.",
        ex_meaning: "회의를 연기하다."
      }
    ],
    derivatives: []
  },
  {
    day: 7,
    num: 11,
    word: "additional",
    definitions: [
      {
        pos: "adj.",
        meaning: "추가의",
        example: "Additional information.",
        ex_meaning: "추가 정보."
      }
    ],
    derivatives: [
      {
        word: "add",
        pos: "v.",
        meaning: "추가하다",
        example: "Add details.",
        ex_meaning: "세부사항을 추가하다."
      },
      {
        word: "addition",
        pos: "n.",
        meaning: "추가",
        example: "In addition to...",
        ex_meaning: "~에 더하여."
      }
    ]
  },
  {
    day: 7,
    num: 12,
    word: "appreciate",
    definitions: [
      {
        pos: "v.",
        meaning: "고맙게 생각하다; 환영하다; (가치를) 인정하다",
        example: "I appreciate your help.",
        ex_meaning: "당신의 도움에 감사드립니다."
      }
    ],
    derivatives: [
      {
        word: "appreciation",
        pos: "n.",
        meaning: "감사, 감상",
        example: "Show appreciation.",
        ex_meaning: "감사를 표하다."
      },
      {
        word: "appreciative",
        pos: "adj.",
        meaning: "고마워하는",
        example: "Appreciative audience.",
        ex_meaning: "고마워하는(감탄하는) 청중."
      }
    ]
  },
  {
    day: 7,
    num: 13,
    word: "demonstration",
    definitions: [
      {
        pos: "n.",
        meaning: "설명; 드러냄, 시연",
        example: "Cooking demonstration.",
        ex_meaning: "요리 시연."
      }
    ],
    derivatives: [
      {
        word: "demonstrate",
        pos: "v.",
        meaning: "보여주다, 입증하다",
        example: "Demonstrate skills.",
        ex_meaning: "기술을 보여주다."
      }
    ]
  },
  {
    day: 7,
    num: 14,
    word: "buy",
    definitions: [
      {
        pos: "v.",
        meaning: "사다, 구입하다",
        example: "Buy groceries.",
        ex_meaning: "식료품을 사다."
      }
    ],
    derivatives: []
  },
  {
    day: 7,
    num: 15,
    word: "examine",
    definitions: [
      {
        pos: "v.",
        meaning: "조사하다",
        example: "Examine the evidence.",
        ex_meaning: "증거를 조사하다."
      }
    ],
    derivatives: [
      {
        word: "examination",
        pos: "n.",
        meaning: "조사, 시험",
        example: "Physical examination.",
        ex_meaning: "신체 검사."
      }
    ]
  },
  {
    day: 7,
    num: 16,
    word: "effective",
    definitions: [
      {
        pos: "adj.",
        meaning: "효과적인; (법률 등이) 발효되는, 유효한",
        example: "Effective solution.",
        ex_meaning: "효과적인 해결책."
      }
    ],
    derivatives: [
      {
        word: "effectively",
        pos: "adv.",
        meaning: "효과적으로",
        example: "Communicate effectively.",
        ex_meaning: "효과적으로 의사소통하다."
      },
      {
        word: "effect",
        pos: "n.",
        meaning: "효과, 영향",
        example: "Side effect.",
        ex_meaning: "부작용."
      }
    ]
  },
  {
    day: 7,
    num: 17,
    word: "like",
    definitions: [
      {
        pos: "v.",
        meaning: "좋아하다",
        example: "I like coffee.",
        ex_meaning: "나는 커피를 좋아한다."
      }
    ],
    derivatives: [
      {
        word: "likable",
        pos: "adj.",
        meaning: "호감이 가는",
        example: "Likable person.",
        ex_meaning: "호감 가는 사람."
      }
    ]
  },
  {
    day: 7,
    num: 18,
    word: "especially",
    definitions: [
      {
        pos: "adv.",
        meaning: "특히",
        example: "I like fruit, especially apples.",
        ex_meaning: "나는 과일, 특히 사과를 좋아한다."
      }
    ],
    derivatives: []
  },
  {
    day: 7,
    num: 19,
    word: "closely",
    definitions: [
      {
        pos: "adv.",
        meaning: "면밀히, 엄밀히",
        example: "Monitor closely.",
        ex_meaning: "면밀히 감시하다."
      }
    ],
    derivatives: [
      {
        word: "close",
        pos: "adj.",
        meaning: "가까운; 철저한",
        example: "Close examination.",
        ex_meaning: "정밀 검사."
      }
    ]
  },
  {
    day: 7,
    num: 20,
    word: "reserve",
    definitions: [
      {
        pos: "v.",
        meaning: "예약하다, 지정하다; 보존하다",
        example: "Reserve a table.",
        ex_meaning: "테이블을 예약하다."
      }
    ],
    derivatives: [
      {
        word: "reservation",
        pos: "n.",
        meaning: "예약",
        example: "Make a reservation.",
        ex_meaning: "예약을 하다."
      },
      {
        word: "reserved",
        pos: "adj.",
        meaning: "예약된; 내성적인",
        example: "Reserved seat.",
        ex_meaning: "예약석."
      }
    ]
  },
  {
    day: 7,
    num: 21,
    word: "cooperate",
    definitions: [
      {
        pos: "v.",
        meaning: "협력하다, 협동하다",
        example: "Cooperate with the police.",
        ex_meaning: "경찰에 협조하다."
      }
    ],
    derivatives: [
      {
        word: "cooperation",
        pos: "n.",
        meaning: "협력",
        example: "International cooperation.",
        ex_meaning: "국제 협력."
      },
      {
        word: "cooperative",
        pos: "adj.",
        meaning: "협력적인",
        example: "Cooperative effort.",
        ex_meaning: "협력적인 노력."
      }
    ]
  },
  {
    day: 7,
    num: 22,
    word: "very",
    definitions: [
      {
        pos: "adv.",
        meaning: "매우, 아주",
        example: "Very good.",
        ex_meaning: "아주 좋은."
      }
    ],
    derivatives: []
  },
  {
    day: 7,
    num: 23,
    word: "consecutive",
    definitions: [
      {
        pos: "adj.",
        meaning: "연속적인",
        example: "Three consecutive days.",
        ex_meaning: "3일 연속으로."
      }
    ],
    derivatives: [
      {
        word: "consecutively",
        pos: "adv.",
        meaning: "연속적으로",
        example: "Won consecutively.",
        ex_meaning: "연속적으로 이겼다."
      }
    ]
  },
  {
    day: 7,
    num: 24,
    word: "expectation",
    definitions: [
      {
        pos: "n.",
        meaning: "예상, 기대",
        example: "Exceed expectations.",
        ex_meaning: "기대를 뛰어넘다."
      }
    ],
    derivatives: [
      {
        word: "expect",
        pos: "v.",
        meaning: "예상하다, 기대하다",
        example: "Expect a delay.",
        ex_meaning: "지연을 예상하다."
      }
    ]
  },
  {
    day: 7,
    num: 25,
    word: "publicize",
    definitions: [
      {
        pos: "v.",
        meaning: "공표하다; 광고하다, 선전하다",
        example: "Publicize the event.",
        ex_meaning: "행사를 홍보하다."
      }
    ],
    derivatives: [
      {
        word: "publicity",
        pos: "n.",
        meaning: "홍보, 광고",
        example: "Bad publicity.",
        ex_meaning: "나쁜 평판(홍보)."
      }
    ]
  },
  {
    day: 7,
    num: 26,
    word: "raise",
    definitions: [
      {
        pos: "v.",
        meaning: "높이다, 올리다; (의문을) 제기하다",
        example: "Raise prices.",
        ex_meaning: "가격을 올리다."
      },
      {
        pos: "n.",
        meaning: "인상, 상승",
        example: "Get a pay raise.",
        ex_meaning: "임금 인상을 받다."
      }
    ],
    derivatives: []
  },
  {
    day: 7,
    num: 27,
    word: "extremely",
    definitions: [
      {
        pos: "adv.",
        meaning: "극도로, 대단히",
        example: "Extremely difficult.",
        ex_meaning: "극도로 어려운."
      }
    ],
    derivatives: [
      {
        word: "extreme",
        pos: "adj.",
        meaning: "극도의",
        example: "Extreme cold.",
        ex_meaning: "혹한."
      }
    ]
  },
  {
    day: 7,
    num: 28,
    word: "affect",
    definitions: [
      {
        pos: "v.",
        meaning: "~에 영향을 미치다, 불리하게 작용하다",
        example: "Affect the outcome.",
        ex_meaning: "결과에 영향을 미치다."
      }
    ],
    derivatives: []
  },
  {
    day: 7,
    num: 29,
    word: "target",
    definitions: [
      {
        pos: "n.",
        meaning: "목표",
        example: "Sales target.",
        ex_meaning: "판매 목표."
      },
      {
        pos: "v.",
        meaning: "목표로 삼다",
        example: "Target audience.",
        ex_meaning: "목표 청중(을 대상으로 하다)."
      }
    ],
    derivatives: []
  },
  {
    day: 7,
    num: 30,
    word: "campaign",
    definitions: [
      {
        pos: "n.",
        meaning: "운동, 캠페인",
        example: "Advertising campaign.",
        ex_meaning: "광고 캠페인."
      }
    ],
    derivatives: []
  },
  {
    day: 7,
    num: 31,
    word: "probable",
    definitions: [
      {
        pos: "adj.",
        meaning: "개연성이 높은, 유망한",
        example: "Probable cause.",
        ex_meaning: "상당한 근거(개연성 있는 원인)."
      }
    ],
    derivatives: []
  },
  {
    day: 7,
    num: 32,
    word: "focus",
    definitions: [
      {
        pos: "v.",
        meaning: "집중시키다, 집중하다",
        example: "Focus on the problem.",
        ex_meaning: "문제에 집중하다."
      },
      {
        pos: "n.",
        meaning: "초점, 집중점",
        example: "Out of focus.",
        ex_meaning: "초점이 나간."
      }
    ],
    derivatives: []
  },
  {
    day: 7,
    num: 33,
    word: "seasonal",
    definitions: [
      {
        pos: "adj.",
        meaning: "계절의, 계절적인",
        example: "Seasonal changes.",
        ex_meaning: "계절적 변화."
      }
    ],
    derivatives: [
      {
        word: "season",
        pos: "n.",
        meaning: "계절",
        example: "Holiday season.",
        ex_meaning: "휴가철."
      },
      {
        word: "seasoned",
        pos: "adj.",
        meaning: "숙련된",
        example: "Seasoned traveler.",
        ex_meaning: "노련한 여행자."
      }
    ]
  },
  {
    day: 7,
    num: 34,
    word: "impact",
    definitions: [
      {
        pos: "n.",
        meaning: "영향, 충격",
        example: "Have an impact on.",
        ex_meaning: "~에 영향을 미치다."
      }
    ],
    derivatives: []
  },
  {
    day: 7,
    num: 35,
    word: "comparison",
    definitions: [
      {
        pos: "n.",
        meaning: "비교",
        example: "In comparison with.",
        ex_meaning: "~와 비교하여."
      }
    ],
    derivatives: [
      {
        word: "compare",
        pos: "v.",
        meaning: "비교하다",
        example: "Compare prices.",
        ex_meaning: "가격을 비교하다."
      },
      {
        word: "comparable",
        pos: "adj.",
        meaning: "비슷한, 필적하는",
        example: "Comparable size.",
        ex_meaning: "비슷한 크기."
      }
    ]
  },
  {
    day: 7,
    num: 36,
    word: "gap",
    definitions: [
      {
        pos: "n.",
        meaning: "격차",
        example: "Generation gap.",
        ex_meaning: "세대 차이."
      }
    ],
    derivatives: []
  },
  {
    day: 7,
    num: 37,
    word: "mounting",
    definitions: [
      {
        pos: "adj.",
        meaning: "증가하는, 오르는",
        example: "Mounting pressure.",
        ex_meaning: "증가하는 압박."
      }
    ],
    derivatives: [
      {
        word: "mount",
        pos: "v.",
        meaning: "오르다, 증가하다",
        example: "Debts mount up.",
        ex_meaning: "빚이 늘어나다."
      }
    ]
  },
  {
    day: 7,
    num: 38,
    word: "reflective",
    definitions: [
      {
        pos: "adj.",
        meaning: "반영하는",
        example: "Reflective of the times.",
        ex_meaning: "시대를 반영하는."
      }
    ],
    derivatives: [
      {
        word: "reflect",
        pos: "v.",
        meaning: "반영하다, 반사하다",
        example: "Reflect light.",
        ex_meaning: "빛을 반사하다."
      },
      {
        word: "reflection",
        pos: "n.",
        meaning: "반영, 반사",
        example: "Reflection in the mirror.",
        ex_meaning: "거울에 비친 모습."
      }
    ]
  },
  {
    day: 7,
    num: 39,
    word: "advertisement",
    definitions: [
      {
        pos: "n.",
        meaning: "광고",
        example: "Newspaper advertisement.",
        ex_meaning: "신문 광고."
      }
    ],
    derivatives: [
      {
        word: "advertise",
        pos: "v.",
        meaning: "광고하다",
        example: "Advertise a product.",
        ex_meaning: "제품을 광고하다."
      }
    ]
  },
  {
    day: 7,
    num: 40,
    word: "marginal",
    definitions: [
      {
        pos: "adj.",
        meaning: "약간의; 주변의",
        example: "Marginal difference.",
        ex_meaning: "근소한 차이."
      }
    ],
    derivatives: [
      {
        word: "margin",
        pos: "n.",
        meaning: "여백, 차이, 수익",
        example: "Profit margin.",
        ex_meaning: "이윤 폭."
      }
    ]
  },

  // ==========================================
  // Day 8: 마케팅 (Marketing) - 엑셀 순서 반영
  // ==========================================
  {
    day: 8,
    num: 1,
    word: "customer",
    definitions: [
      {
        pos: "n.",
        meaning: "고객",
        example: "Customer service.",
        ex_meaning: "고객 서비스."
      }
    ],
    derivatives: []
  },
  {
    day: 8,
    num: 2,
    word: "influence",
    definitions: [
      {
        pos: "v.",
        meaning: "~에 영향을 주다",
        example: "Influence the decision.",
        ex_meaning: "결정에 영향을 주다."
      },
      {
        pos: "n.",
        meaning: "영향",
        example: "Under the influence.",
        ex_meaning: "영향 하에."
      }
    ],
    derivatives: [
      {
        word: "influential",
        pos: "adj.",
        meaning: "영향력 있는",
        example: "Influential leader.",
        ex_meaning: "영향력 있는 지도자."
      }
    ]
  },
  {
    day: 8,
    num: 3,
    word: "instantly",
    definitions: [
      {
        pos: "adv.",
        meaning: "즉각적으로, 즉시",
        example: "Instantly recognized.",
        ex_meaning: "즉시 알아본."
      }
    ],
    derivatives: [
      {
        word: "instant",
        pos: "adj.",
        meaning: "즉각적인",
        example: "Instant noodles.",
        ex_meaning: "즉석 면(라면)."
      }
    ]
  },
  {
    day: 8,
    num: 4,
    word: "creative",
    definitions: [
      {
        pos: "adj.",
        meaning: "창조적인, 독창적인",
        example: "Creative ideas.",
        ex_meaning: "창의적인 아이디어."
      }
    ],
    derivatives: [
      {
        word: "create",
        pos: "v.",
        meaning: "창조하다",
        example: "Create a website.",
        ex_meaning: "웹사이트를 만들다."
      },
      {
        word: "creativity",
        pos: "n.",
        meaning: "창의성",
        example: "Foster creativity.",
        ex_meaning: "창의성을 기르다."
      }
    ]
  },
  {
    day: 8,
    num: 5,
    word: "aggressively",
    definitions: [
      {
        pos: "adv.",
        meaning: "적극적으로",
        example: "Market aggressively.",
        ex_meaning: "적극적으로 마케팅하다."
      }
    ],
    derivatives: [
      {
        word: "aggressive",
        pos: "adj.",
        meaning: "적극적인; 공격적인",
        example: "Aggressive behavior.",
        ex_meaning: "공격적인 행동."
      }
    ]
  },
  {
    day: 8,
    num: 6,
    word: "aim",
    definitions: [
      {
        pos: "v.",
        meaning: "~을 겨누다",
        example: "Aim for success.",
        ex_meaning: "성공을 목표로 하다."
      },
      {
        pos: "n.",
        meaning: "목표, 목적",
        example: "Main aim.",
        ex_meaning: "주요 목표."
      }
    ],
    derivatives: []
  },
  {
    day: 8,
    num: 7,
    word: "strategy",
    definitions: [
      {
        pos: "n.",
        meaning: "전략",
        example: "Marketing strategy.",
        ex_meaning: "마케팅 전략."
      }
    ],
    derivatives: [
      {
        word: "strategic",
        pos: "adj.",
        meaning: "전략적인",
        example: "Strategic planning.",
        ex_meaning: "전략적 기획."
      }
    ]
  },
  {
    day: 8,
    num: 8,
    word: "indicate",
    definitions: [
      {
        pos: "v.",
        meaning: "보여주다, 나타내다",
        example: "Studies indicate that...",
        ex_meaning: "연구들은 ...라는 것을 보여준다."
      }
    ],
    derivatives: [
      {
        word: "indication",
        pos: "n.",
        meaning: "징후, 암시",
        example: "Indication of trouble.",
        ex_meaning: "문제의 징후."
      },
      {
        word: "indicative",
        pos: "adj.",
        meaning: "나타내는, 암시하는",
        example: "Indicative of the trend.",
        ex_meaning: "트렌드를 나타내는."
      }
    ]
  },
  {
    day: 8,
    num: 9,
    word: "attract",
    definitions: [
      {
        pos: "v.",
        meaning: "끌다, 유인하다",
        example: "Attract tourists.",
        ex_meaning: "관광객을 유치하다."
      }
    ],
    derivatives: [
      {
        word: "attraction",
        pos: "n.",
        meaning: "매력, 명소",
        example: "Tourist attraction.",
        ex_meaning: "관광 명소."
      },
      {
        word: "attractive",
        pos: "adj.",
        meaning: "매력적인",
        example: "Attractive offer.",
        ex_meaning: "매력적인 제안."
      }
    ]
  },
  {
    day: 8,
    num: 10,
    word: "experience",
    definitions: [
      {
        pos: "n.",
        meaning: "경험, 체험",
        example: "Work experience.",
        ex_meaning: "업무 경험(경력)."
      },
      {
        pos: "v.",
        meaning: "체험하다, 겪다",
        example: "Experience difficulties.",
        ex_meaning: "어려움을 겪다."
      }
    ],
    derivatives: []
  },
  {
    day: 8,
    num: 11,
    word: "analyze",
    definitions: [
      {
        pos: "v.",
        meaning: "분석하다, 검토하다",
        example: "Analyze the sample.",
        ex_meaning: "샘플을 분석하다."
      }
    ],
    derivatives: [
      {
        word: "analysis",
        pos: "n.",
        meaning: "분석",
        example: "Data analysis.",
        ex_meaning: "데이터 분석."
      },
      {
        word: "analyst",
        pos: "n.",
        meaning: "분석가",
        example: "Market analyst.",
        ex_meaning: "시장 분석가."
      }
    ]
  },
  {
    day: 8,
    num: 12,
    word: "introduce",
    definitions: [
      {
        pos: "v.",
        meaning: "(신제품을) 발표하다, 소개하다",
        example: "Introduce a new policy.",
        ex_meaning: "새로운 정책을 도입(발표)하다."
      }
    ],
    derivatives: [
      {
        word: "introduction",
        pos: "n.",
        meaning: "소개, 도입",
        example: "Introduction of technology.",
        ex_meaning: "기술의 도입."
      },
      {
        word: "introductory",
        pos: "adj.",
        meaning: "소개의",
        example: "Introductory remarks.",
        ex_meaning: "서두(소개) 발언."
      }
    ]
  },
  {
    day: 8,
    num: 13,
    word: "advise",
    definitions: [
      {
        pos: "v.",
        meaning: "조언해 주다, 충고하다",
        example: "Advise caution.",
        ex_meaning: "주의를 당부하다(조언하다)."
      }
    ],
    derivatives: [
      {
        word: "advice",
        pos: "n.",
        meaning: "조언",
        example: "Good advice.",
        ex_meaning: "좋은 조언."
      },
      {
        word: "advisor",
        pos: "n.",
        meaning: "고문",
        example: "Legal advisor.",
        ex_meaning: "법률 고문."
      }
    ]
  },
  {
    day: 8,
    num: 14,
    word: "subscribe",
    definitions: [
      {
        pos: "v.",
        meaning: "구독하다",
        example: "Subscribe to a magazine.",
        ex_meaning: "잡지를 구독하다."
      }
    ],
    derivatives: [
      {
        word: "subscription",
        pos: "n.",
        meaning: "구독(료)",
        example: "Renew subscription.",
        ex_meaning: "구독을 갱신하다."
      },
      {
        word: "subscriber",
        pos: "n.",
        meaning: "구독자",
        example: "Magazine subscriber.",
        ex_meaning: "잡지 구독자."
      }
    ]
  },
  {
    day: 8,
    num: 15,
    word: "absence",
    definitions: [
      {
        pos: "n.",
        meaning: "부재, 결근, 결석",
        example: "During my absence.",
        ex_meaning: "내가 없는 동안."
      }
    ],
    derivatives: [
      {
        word: "absent",
        pos: "adj.",
        meaning: "부재중인",
        example: "Absent from work.",
        ex_meaning: "결근한."
      }
    ]
  },
  {
    day: 8,
    num: 16,
    word: "means",
    definitions: [
      {
        pos: "n.",
        meaning: "방법, 수단",
        example: "Means of transport.",
        ex_meaning: "운송 수단."
      }
    ],
    derivatives: []
  },
  {
    day: 8,
    num: 17,
    word: "prefer",
    definitions: [
      {
        pos: "v.",
        meaning: "~을 더 좋아하다, 선호하다",
        example: "Prefer tea to coffee.",
        ex_meaning: "커피보다 차를 더 좋아하다."
      }
    ],
    derivatives: [
      {
        word: "preference",
        pos: "n.",
        meaning: "선호",
        example: "Personal preference.",
        ex_meaning: "개인적 선호."
      }
    ]
  },
  {
    day: 8,
    num: 18,
    word: "advantage",
    definitions: [
      {
        pos: "n.",
        meaning: "이점, 강점",
        example: "Take advantage of.",
        ex_meaning: "~을 이용하다."
      }
    ],
    derivatives: [
      {
        word: "advantageous",
        pos: "adj.",
        meaning: "유리한",
        example: "Advantageous position.",
        ex_meaning: "유리한 위치."
      }
    ]
  },
  {
    day: 8,
    num: 19,
    word: "forward",
    definitions: [
      {
        pos: "v.",
        meaning: "앞으로",
        example: "Move forward.",
        ex_meaning: "앞으로 나아가다."
      },
      {
        pos: "v.",
        meaning: "(물건, 정보를) 보내다",
        example: "Forward the email.",
        ex_meaning: "이메일을 전달하다."
      }
    ],
    derivatives: []
  },
  {
    day: 8,
    num: 20,
    word: "contemporary",
    definitions: [
      {
        pos: "adj.",
        meaning: "동시대의; 현대적인",
        example: "Contemporary art.",
        ex_meaning: "현대 미술."
      }
    ],
    derivatives: []
  },
  {
    day: 8,
    num: 21,
    word: "discussion",
    definitions: [
      {
        pos: "n.",
        meaning: "토론, 토의",
        example: "Under discussion.",
        ex_meaning: "토론 중인."
      }
    ],
    derivatives: [
      {
        word: "discuss",
        pos: "v.",
        meaning: "토론하다",
        example: "Discuss the matter.",
        ex_meaning: "문제를 토론하다."
      }
    ]
  },
  {
    day: 8,
    num: 22,
    word: "initial",
    definitions: [
      {
        pos: "adj.",
        meaning: "처음의, 초기의",
        example: "Initial reaction.",
        ex_meaning: "초기 반응."
      }
    ],
    derivatives: [
      {
        word: "initially",
        pos: "adv.",
        meaning: "처음에",
        example: "Initially planned.",
        ex_meaning: "당초 계획된."
      },
      {
        word: "initiate",
        pos: "v.",
        meaning: "시작하다",
        example: "Initiate a project.",
        ex_meaning: "프로젝트를 시작하다."
      }
    ]
  },
  {
    day: 8,
    num: 23,
    word: "steadily",
    definitions: [
      {
        pos: "adv.",
        meaning: "착실하게, 꾸준히",
        example: "Grow steadily.",
        ex_meaning: "꾸준히 성장하다."
      }
    ],
    derivatives: [
      {
        word: "steady",
        pos: "adj.",
        meaning: "안정된, 꾸준한",
        example: "Steady job.",
        ex_meaning: "안정된 직장."
      }
    ]
  },
  {
    day: 8,
    num: 24,
    word: "necessarily",
    definitions: [
      {
        pos: "adv.",
        meaning: "반드시",
        example: "Not necessarily true.",
        ex_meaning: "반드시 사실인 것은 아니다."
      }
    ],
    derivatives: [
      {
        word: "necessary",
        pos: "adj.",
        meaning: "필요한",
        example: "Necessary steps.",
        ex_meaning: "필요한 조치들."
      },
      {
        word: "necessitate",
        pos: "v.",
        meaning: "필요로 하다",
        example: "Necessitate action.",
        ex_meaning: "행동을 필요로 하다."
      }
    ]
  },
  {
    day: 8,
    num: 25,
    word: "resolve",
    definitions: [
      {
        pos: "v.",
        meaning: "(문제를) 해결하다",
        example: "Resolve a conflict.",
        ex_meaning: "갈등을 해결하다."
      }
    ],
    derivatives: [
      {
        word: "resolution",
        pos: "n.",
        meaning: "해결, 결의",
        example: "New Year's resolution.",
        ex_meaning: "새해 다짐(결의)."
      }
    ]
  },
  {
    day: 8,
    num: 26,
    word: "detect",
    definitions: [
      {
        pos: "v.",
        meaning: "간파하다, 탐지하다",
        example: "Detect a flaw.",
        ex_meaning: "결함을 찾아내다."
      }
    ],
    derivatives: [
      {
        word: "detection",
        pos: "n.",
        meaning: "탐지",
        example: "Early detection.",
        ex_meaning: "조기 발견."
      }
    ]
  },
  {
    day: 8,
    num: 27,
    word: "intensify",
    definitions: [
      {
        pos: "v.",
        meaning: "강화하다, 증대하다; 강해지다",
        example: "Intensify efforts.",
        ex_meaning: "노력을 강화하다."
      }
    ],
    derivatives: [
      {
        word: "intense",
        pos: "adj.",
        meaning: "강렬한",
        example: "Intense heat.",
        ex_meaning: "강렬한 열기."
      },
      {
        word: "intensity",
        pos: "n.",
        meaning: "강도",
        example: "High intensity.",
        ex_meaning: "높은 강도."
      }
    ]
  },
  {
    day: 8,
    num: 28,
    word: "favorably",
    definitions: [
      {
        pos: "adv.",
        meaning: "호의적으로; 순조롭게",
        example: "Respond favorably.",
        ex_meaning: "호의적으로 반응하다."
      }
    ],
    derivatives: [
      {
        word: "favor",
        pos: "n.",
        meaning: "호의, 친절",
        example: "Do a favor.",
        ex_meaning: "부탁을 들어주다."
      },
      {
        word: "favorable",
        pos: "adj.",
        meaning: "호의적인",
        example: "Favorable conditions.",
        ex_meaning: "유리한 조건들."
      }
    ]
  },
  {
    day: 8,
    num: 29,
    word: "cover",
    definitions: [
      {
        pos: "v.",
        meaning: "포함하다; 지불하다; 덮다",
        example: "Cover the cost.",
        ex_meaning: "비용을 대다(지불하다)."
      }
    ],
    derivatives: [
      {
        word: "coverage",
        pos: "n.",
        meaning: "보도, 범위",
        example: "Media coverage.",
        ex_meaning: "언론 보도."
      }
    ]
  },
  {
    day: 8,
    num: 30,
    word: "less",
    definitions: [
      {
        pos: "adj.",
        meaning: "더 적은, 덜한",
        example: "Less time.",
        ex_meaning: "더 적은 시간."
      }
    ],
    derivatives: [
      {
        word: "lessen",
        pos: "v.",
        meaning: "줄이다",
        example: "Lessen the impact.",
        ex_meaning: "충격을 줄이다."
      }
    ]
  },
  {
    day: 8,
    num: 31,
    word: "majority",
    definitions: [
      {
        pos: "n.",
        meaning: "대부분, 대다수",
        example: "The majority of people.",
        ex_meaning: "대다수의 사람들."
      }
    ],
    derivatives: [
      {
        word: "major",
        pos: "adj.",
        meaning: "주요한",
        example: "Major issue.",
        ex_meaning: "주요 사안."
      }
    ]
  },
  {
    day: 8,
    num: 32,
    word: "adopt",
    definitions: [
      {
        pos: "v.",
        meaning: "채택하다",
        example: "Adopt a policy.",
        ex_meaning: "정책을 채택하다."
      }
    ],
    derivatives: [
      {
        word: "adoption",
        pos: "n.",
        meaning: "채택, 입양",
        example: "Widespread adoption.",
        ex_meaning: "광범위한 채택."
      }
    ]
  },
  {
    day: 8,
    num: 33,
    word: "largely",
    definitions: [
      {
        pos: "adv.",
        meaning: "주로, 대부분",
        example: "Largely due to...",
        ex_meaning: "주로 ~ 때문에."
      }
    ],
    derivatives: [
      {
        word: "large",
        pos: "adj.",
        meaning: "큰",
        example: "Large amount.",
        ex_meaning: "많은 양."
      }
    ]
  },
  {
    day: 8,
    num: 34,
    word: "disregard",
    definitions: [
      {
        pos: "v.",
        meaning: "소홀히 하다, 무시하다",
        example: "Disregard the warning.",
        ex_meaning: "경고를 무시하다."
      }
    ],
    derivatives: []
  },
  {
    day: 8,
    num: 35,
    word: "effort",
    definitions: [
      {
        pos: "n.",
        meaning: "노력",
        example: "Make an effort.",
        ex_meaning: "노력하다."
      }
    ],
    derivatives: []
  },
  {
    day: 8,
    num: 36,
    word: "incentive",
    definitions: [
      {
        pos: "n.",
        meaning: "혜택, 장려금",
        example: "Financial incentive.",
        ex_meaning: "재정적 혜택."
      }
    ],
    derivatives: []
  },
  {
    day: 8,
    num: 37,
    word: "need",
    definitions: [
      {
        pos: "n.",
        meaning: "필요; 욕구, 요구",
        example: "Meet the needs.",
        ex_meaning: "요구를 충족시키다."
      },
      {
        pos: "v.",
        meaning: "~할 필요가 있다",
        example: "Need help.",
        ex_meaning: "도움이 필요하다."
      }
    ],
    derivatives: [
      {
        word: "needy",
        pos: "adj.",
        meaning: "가난한, 궁핍한",
        example: "Needy families.",
        ex_meaning: "빈곤 가정."
      }
    ]
  },
  {
    day: 8,
    num: 38,
    word: "mastermind",
    definitions: [
      {
        pos: "n.",
        meaning: "(계획 등의) 입안자, 지도자",
        example: "The mastermind behind the plot.",
        ex_meaning: "그 음모의 배후 조종자."
      }
    ],
    derivatives: []
  },
  {
    day: 8,
    num: 39,
    word: "incorporate",
    definitions: [
      {
        pos: "v.",
        meaning: "(일부로) 포함하다, 통합하다",
        example: "Incorporate suggestions.",
        ex_meaning: "제안을 포함시키다."
      }
    ],
    derivatives: [
      {
        word: "corporation",
        pos: "n.",
        meaning: "법인, 회사",
        example: "Large corporation.",
        ex_meaning: "대기업."
      }
    ]
  },
  {
    day: 8,
    num: 40,
    word: "overlook",
    definitions: [
      {
        pos: "v.",
        meaning: "간과하다, 못 보고 넘어가다",
        example: "Overlook a mistake.",
        ex_meaning: "실수를 눈감아주다(간과하다)."
      }
    ],
    derivatives: []
  },
// ==========================================
  // Day 10: 쇼핑 (Shopping) - 엑셀 순서 반영
  // ==========================================
  {
    day: 10,
    num: 1,
    word: "purchase",
    definitions: [
      {
        pos: "v.",
        meaning: "구매하다",
        example: "Purchase a ticket.",
        ex_meaning: "티켓을 구매하다."
      },
      {
        pos: "n.",
        meaning: "구매",
        example: "Make a purchase.",
        ex_meaning: "구매를 하다."
      }
    ],
    derivatives: []
  },
  {
    day: 10,
    num: 2,
    word: "installment",
    definitions: [
      {
        pos: "n.",
        meaning: "할부",
        example: "Pay in installments.",
        ex_meaning: "할부로 지불하다."
      }
    ],
    derivatives: [
      {
        word: "install",
        pos: "v.",
        meaning: "설치하다",
        example: "Install software.",
        ex_meaning: "소프트웨어를 설치하다."
      },
      {
        word: "installation",
        pos: "n.",
        meaning: "설치",
        example: "Easy installation.",
        ex_meaning: "쉬운 설치."
      }
    ]
  },
  {
    day: 10,
    num: 3,
    word: "affordable",
    definitions: [
      {
        pos: "adj.",
        meaning: "(가격이) 알맞은, 감당할 수 있는",
        example: "Affordable price.",
        ex_meaning: "알맞은 가격."
      }
    ],
    derivatives: [
      {
        word: "afford",
        pos: "v.",
        meaning: "~할 여유가 있다",
        example: "Can't afford to buy.",
        ex_meaning: "살 여유가 없다."
      }
    ]
  },
  {
    day: 10,
    num: 4,
    word: "exactly",
    definitions: [
      {
        pos: "adv.",
        meaning: "정확히",
        example: "Exactly right.",
        ex_meaning: "정확히 맞다."
      }
    ],
    derivatives: [
      {
        word: "exact",
        pos: "adj.",
        meaning: "정확한",
        example: "Exact amount.",
        ex_meaning: "정확한 액수."
      }
    ]
  },
  {
    day: 10,
    num: 5,
    word: "auction",
    definitions: [
      {
        pos: "n.",
        meaning: "경매",
        example: "Sell at auction.",
        ex_meaning: "경매에서 팔다."
      }
    ],
    derivatives: []
  },
  {
    day: 10,
    num: 6,
    word: "authentic",
    definitions: [
      {
        pos: "adj.",
        meaning: "진정한, 진짜의, 진품의",
        example: "Authentic Italian food.",
        ex_meaning: "진정한 이탈리아 음식."
      }
    ],
    derivatives: []
  },
  {
    day: 10,
    num: 7,
    word: "charge",
    definitions: [
      {
        pos: "n.",
        meaning: "요금, 청구 금액; 책임, 의무",
        example: "Delivery charge.",
        ex_meaning: "배송료."
      },
      {
        pos: "v.",
        meaning: "청구하다; 외상으로 달아놓다",
        example: "Charge the fee.",
        ex_meaning: "요금을 청구하다."
      }
    ],
    derivatives: []
  },
  {
    day: 10,
    num: 8,
    word: "notice",
    definitions: [
      {
        pos: "n.",
        meaning: "통지, 예고",
        example: "Until further notice.",
        ex_meaning: "추후 통지가 있을 때까지."
      },
      {
        pos: "v.",
        meaning: "알아차리다",
        example: "Did you notice him?",
        ex_meaning: "그를 알아보았습니까?"
      }
    ],
    derivatives: [
      {
        word: "noticeable",
        pos: "adj.",
        meaning: "눈에 띄는",
        example: "Noticeable difference.",
        ex_meaning: "눈에 띄는 차이."
      }
    ]
  },
  {
    day: 10,
    num: 9,
    word: "experienced",
    definitions: [
      {
        pos: "adj.",
        meaning: "경험이 있는, 노련한, 능숙한",
        example: "Experienced chef.",
        ex_meaning: "노련한 요리사."
      }
    ],
    derivatives: [
      {
        word: "experience",
        pos: "n.",
        meaning: "경험",
        example: "Gain experience.",
        ex_meaning: "경험을 쌓다."
      }
    ]
  },
  {
    day: 10,
    num: 10,
    word: "instruction",
    definitions: [
      {
        pos: "n.",
        meaning: "설명, 지시",
        example: "Read the instructions.",
        ex_meaning: "설명서를 읽어라."
      }
    ],
    derivatives: [
      {
        word: "instruct",
        pos: "v.",
        meaning: "지시하다, 가르치다",
        example: "Instruct students.",
        ex_meaning: "학생들을 가르치다."
      },
      {
        word: "instructor",
        pos: "n.",
        meaning: "강사",
        example: "Ski instructor.",
        ex_meaning: "스키 강사."
      }
    ]
  },
  {
    day: 10,
    num: 11,
    word: "expert",
    definitions: [
      {
        pos: "n.",
        meaning: "전문가",
        example: "An expert in law.",
        ex_meaning: "법률 전문가."
      },
      {
        pos: "adj.",
        meaning: "전문가의, 전문적인",
        example: "Expert advice.",
        ex_meaning: "전문적인 조언."
      }
    ],
    derivatives: [
      {
        word: "expertise",
        pos: "n.",
        meaning: "전문 지식",
        example: "Technical expertise.",
        ex_meaning: "기술적 전문 지식."
      }
    ]
  },
  {
    day: 10,
    num: 12,
    word: "warranty",
    definitions: [
      {
        pos: "n.",
        meaning: "(품질) 보증, 보증서",
        example: "Under warranty.",
        ex_meaning: "보증 기간 중인."
      }
    ],
    derivatives: []
  },
  {
    day: 10,
    num: 13,
    word: "refund",
    definitions: [
      {
        pos: "n.",
        meaning: "환불, 환불금",
        example: "Full refund.",
        ex_meaning: "전액 환불."
      },
      {
        pos: "v.",
        meaning: "환불하다",
        example: "Refund the money.",
        ex_meaning: "돈을 환불하다."
      }
    ],
    derivatives: []
  },
  {
    day: 10,
    num: 14,
    word: "subscriber",
    definitions: [
      {
        pos: "n.",
        meaning: "가입자, 구독자",
        example: "New subscribers.",
        ex_meaning: "신규 가입자들."
      }
    ],
    derivatives: [
      {
        word: "subscribe",
        pos: "v.",
        meaning: "구독하다",
        example: "Subscribe to a newsletter.",
        ex_meaning: "소식지를 구독하다."
      },
      {
        word: "subscription",
        pos: "n.",
        meaning: "구독",
        example: "Monthly subscription.",
        ex_meaning: "월간 구독."
      }
    ]
  },
  {
    day: 10,
    num: 15,
    word: "delivery",
    definitions: [
      {
        pos: "n.",
        meaning: "배달",
        example: "Free delivery.",
        ex_meaning: "무료 배달."
      }
    ],
    derivatives: [
      {
        word: "deliver",
        pos: "v.",
        meaning: "배달하다",
        example: "Deliver a package.",
        ex_meaning: "소포를 배달하다."
      }
    ]
  },
  {
    day: 10,
    num: 16,
    word: "price",
    definitions: [
      {
        pos: "n.",
        meaning: "가격",
        example: "Reasonable price.",
        ex_meaning: "합리적인 가격."
      },
      {
        pos: "v.",
        meaning: "가격을 매기다",
        example: "Priced high.",
        ex_meaning: "높게 가격이 책정된."
      }
    ],
    derivatives: []
  },
  {
    day: 10,
    num: 17,
    word: "receipt",
    definitions: [
      {
        pos: "n.",
        meaning: "영수증",
        example: "Keep the receipt.",
        ex_meaning: "영수증을 보관하다."
      }
    ],
    derivatives: [
      {
        word: "receive",
        pos: "v.",
        meaning: "받다",
        example: "Receive a gift.",
        ex_meaning: "선물을 받다."
      }
    ]
  },
  {
    day: 10,
    num: 18,
    word: "offer",
    definitions: [
      {
        pos: "v.",
        meaning: "제공하다; 제안하다",
        example: "Offer a discount.",
        ex_meaning: "할인을 제공하다."
      },
      {
        pos: "n.",
        meaning: "제안; 할인",
        example: "Special offer.",
        ex_meaning: "특별 할인(제안)."
      }
    ],
    derivatives: []
  },
  {
    day: 10,
    num: 19,
    word: "carefully",
    definitions: [
      {
        pos: "adv.",
        meaning: "주의 깊게, 신중히",
        example: "Read carefully.",
        ex_meaning: "주의 깊게 읽어라."
      }
    ],
    derivatives: [
      {
        word: "care",
        pos: "n.",
        meaning: "주의, 돌봄",
        example: "Take care.",
        ex_meaning: "조심하다."
      },
      {
        word: "careful",
        pos: "adj.",
        meaning: "주의 깊은",
        example: "Be careful.",
        ex_meaning: "조심해라."
      }
    ]
  },
  {
    day: 10,
    num: 20,
    word: "benefit",
    definitions: [
      {
        pos: "n.",
        meaning: "혜택, 이익",
        example: "Employee benefits.",
        ex_meaning: "직원 혜택."
      },
      {
        pos: "v.",
        meaning: "혜택을 보다, 이익을 얻다",
        example: "Benefit from exercise.",
        ex_meaning: "운동으로 혜택을 보다."
      }
    ],
    derivatives: [
      {
        word: "beneficial",
        pos: "adj.",
        meaning: "유익한",
        example: "Beneficial effect.",
        ex_meaning: "유익한 효과."
      }
    ]
  },
  {
    day: 10,
    num: 21,
    word: "exclusively",
    definitions: [
      {
        pos: "adv.",
        meaning: "오로지, 독점적으로",
        example: "Available exclusively online.",
        ex_meaning: "오로지 온라인에서만 이용 가능한."
      }
    ],
    derivatives: [
      {
        word: "exclude",
        pos: "v.",
        meaning: "제외하다",
        example: "Exclude tax.",
        ex_meaning: "세금을 제외하다."
      },
      {
        word: "exclusive",
        pos: "adj.",
        meaning: "독점적인",
        example: "Exclusive rights.",
        ex_meaning: "독점권."
      }
    ]
  },
  {
    day: 10,
    num: 22,
    word: "description",
    definitions: [
      {
        pos: "n.",
        meaning: "(제품 등의) 설명, 해설",
        example: "Product description.",
        ex_meaning: "제품 설명."
      }
    ],
    derivatives: [
      {
        word: "describe",
        pos: "v.",
        meaning: "묘사하다, 설명하다",
        example: "Describe the scene.",
        ex_meaning: "장면을 묘사하다."
      }
    ]
  },
  {
    day: 10,
    num: 23,
    word: "relatively",
    definitions: [
      {
        pos: "adv.",
        meaning: "상대적으로",
        example: "Relatively cheap.",
        ex_meaning: "상대적으로 저렴한."
      }
    ],
    derivatives: [
      {
        word: "relative",
        pos: "adj.",
        meaning: "상대적인",
        example: "Relative humidity.",
        ex_meaning: "상대 습도."
      }
    ]
  },
  {
    day: 10,
    num: 24,
    word: "spare",
    definitions: [
      {
        pos: "v.",
        meaning: "아끼다, 할애하다",
        example: "Spare some time.",
        ex_meaning: "시간을 좀 할애하다."
      },
      {
        pos: "adj.",
        meaning: "예비의, 여분의",
        example: "Spare tire.",
        ex_meaning: "예비 타이어."
      }
    ],
    derivatives: []
  },
  {
    day: 10,
    num: 25,
    word: "preparation",
    definitions: [
      {
        pos: "n.",
        meaning: "준비, 대비",
        example: "In preparation for.",
        ex_meaning: "~에 대비하여."
      }
    ],
    derivatives: [
      {
        word: "prepare",
        pos: "v.",
        meaning: "준비하다",
        example: "Prepare dinner.",
        ex_meaning: "저녁을 준비하다."
      }
    ]
  },
  {
    day: 10,
    num: 26,
    word: "area",
    definitions: [
      {
        pos: "n.",
        meaning: "지역, 구역",
        example: "Residential area.",
        ex_meaning: "주거 지역."
      }
    ],
    derivatives: []
  },
  {
    day: 10,
    num: 27,
    word: "clearance",
    definitions: [
      {
        pos: "n.",
        meaning: "정리, 없애기; 허가",
        example: "Clearance sale.",
        ex_meaning: "재고 정리 세일."
      }
    ],
    derivatives: [
      {
        word: "clear",
        pos: "v.",
        meaning: "치우다; 맑게 하다",
        example: "Clear the table.",
        ex_meaning: "테이블을 치우다."
      }
    ]
  },
  {
    day: 10,
    num: 28,
    word: "alter",
    definitions: [
      {
        pos: "v.",
        meaning: "(성질, 형상을) 고치다, 바꾸다",
        example: "Alter the dress.",
        ex_meaning: "드레스를 수선하다(고치다)."
      }
    ],
    derivatives: [
      {
        word: "alteration",
        pos: "n.",
        meaning: "수선, 변경",
        example: "Make alterations.",
        ex_meaning: "수선을 하다."
      }
    ]
  },
  {
    day: 10,
    num: 29,
    word: "apply",
    definitions: [
      {
        pos: "v.",
        meaning: "적용하다; 지원하다",
        example: "Apply the rule.",
        ex_meaning: "규칙을 적용하다."
      }
    ],
    derivatives: [
      {
        word: "application",
        pos: "n.",
        meaning: "적용; 지원",
        example: "Job application.",
        ex_meaning: "구직 지원."
      },
      {
        word: "applicant",
        pos: "n.",
        meaning: "지원자",
        example: "Qualified applicant.",
        ex_meaning: "자격 있는 지원자."
      }
    ]
  },
  {
    day: 10,
    num: 30,
    word: "mutually",
    definitions: [
      {
        pos: "adv.",
        meaning: "서로, 상호간에",
        example: "Mutually beneficial.",
        ex_meaning: "상호 이익이 되는."
      }
    ],
    derivatives: [
      {
        word: "mutual",
        pos: "adj.",
        meaning: "상호간의",
        example: "Mutual respect.",
        ex_meaning: "상호 존중."
      }
    ]
  },
  {
    day: 10,
    num: 31,
    word: "method",
    definitions: [
      {
        pos: "n.",
        meaning: "방법, 방식",
        example: "Payment method.",
        ex_meaning: "지불 방법."
      }
    ],
    derivatives: []
  },
  {
    day: 10,
    num: 32,
    word: "acceptable",
    definitions: [
      {
        pos: "adj.",
        meaning: "용인되는, 받아들일 수 있는",
        example: "Acceptable behavior.",
        ex_meaning: "용인되는 행동."
      }
    ],
    derivatives: [
      {
        word: "accept",
        pos: "v.",
        meaning: "받아들이다",
        example: "Accept an offer.",
        ex_meaning: "제안을 받아들이다."
      },
      {
        word: "acceptance",
        pos: "n.",
        meaning: "수락",
        example: "Letter of acceptance.",
        ex_meaning: "합격 통지서(수락 편지)."
      }
    ]
  },
  {
    day: 10,
    num: 33,
    word: "desire",
    definitions: [
      {
        pos: "n.",
        meaning: "욕구, 갈망",
        example: "Desire for success.",
        ex_meaning: "성공에 대한 갈망."
      },
      {
        pos: "v.",
        meaning: "바라다",
        example: "Desire to leave.",
        ex_meaning: "떠나기를 바라다."
      }
    ],
    derivatives: [
      {
        word: "desirable",
        pos: "adj.",
        meaning: "바람직한",
        example: "Desirable outcome.",
        ex_meaning: "바람직한 결과."
      }
    ]
  },
  {
    day: 10,
    num: 34,
    word: "redeemable",
    definitions: [
      {
        pos: "adj.",
        meaning: "(현금, 상품과) 교환할 수 있는, 환급할 수 있는",
        example: "Redeemable for cash.",
        ex_meaning: "현금으로 교환할 수 있는."
      }
    ],
    derivatives: [
      {
        word: "redeem",
        pos: "v.",
        meaning: "상환하다, 교환하다",
        example: "Redeem a coupon.",
        ex_meaning: "쿠폰을 상품으로 교환하다."
      }
    ]
  },
  {
    day: 10,
    num: 35,
    word: "officially",
    definitions: [
      {
        pos: "adv.",
        meaning: "공식적으로",
        example: "Officially announced.",
        ex_meaning: "공식적으로 발표된."
      }
    ],
    derivatives: [
      {
        word: "office",
        pos: "n.",
        meaning: "사무실",
        example: "Head office.",
        ex_meaning: "본사."
      },
      {
        word: "official",
        pos: "adj.",
        meaning: "공식적인",
        example: "Official visit.",
        ex_meaning: "공식 방문."
      }
    ]
  },
  {
    day: 10,
    num: 36,
    word: "consumption",
    definitions: [
      {
        pos: "n.",
        meaning: "소비, 소모",
        example: "Energy consumption.",
        ex_meaning: "에너지 소비."
      }
    ],
    derivatives: [
      {
        word: "consume",
        pos: "v.",
        meaning: "소비하다",
        example: "Consume time.",
        ex_meaning: "시간을 소비하다."
      },
      {
        word: "consumer",
        pos: "n.",
        meaning: "소비자",
        example: "Consumer rights.",
        ex_meaning: "소비자 권리."
      }
    ]
  },
  {
    day: 10,
    num: 37,
    word: "qualify",
    definitions: [
      {
        pos: "v.",
        meaning: "~의 자격을 얻다",
        example: "Qualify for membership.",
        ex_meaning: "회원 자격을 얻다."
      }
    ],
    derivatives: [
      {
        word: "qualification",
        pos: "n.",
        meaning: "자격",
        example: "Minimum qualifications.",
        ex_meaning: "최소 자격 요건."
      },
      {
        word: "qualified",
        pos: "adj.",
        meaning: "자격 있는",
        example: "Qualified nurse.",
        ex_meaning: "자격 있는 간호사."
      }
    ]
  },
  {
    day: 10,
    num: 38,
    word: "fabric",
    definitions: [
      {
        pos: "n.",
        meaning: "섬유, 천",
        example: "Cotton fabric.",
        ex_meaning: "면 직물."
      }
    ],
    derivatives: []
  },
  {
    day: 10,
    num: 39,
    word: "valid",
    definitions: [
      {
        pos: "adj.",
        meaning: "유효한",
        example: "Valid passport.",
        ex_meaning: "유효한 여권."
      }
    ],
    derivatives: [
      {
        word: "validate",
        pos: "v.",
        meaning: "입증하다, 유효하게 하다",
        example: "Validate the ticket.",
        ex_meaning: "티켓을 유효하게 하다(개찰하다)."
      },
      {
        word: "validity",
        pos: "n.",
        meaning: "유효함, 타당성",
        example: "Period of validity.",
        ex_meaning: "유효 기간."
      }
    ]
  },
  {
    day: 10,
    num: 40,
    word: "vendor",
    definitions: [
      {
        pos: "n.",
        meaning: "노점상, 가판대; 판매업체",
        example: "Street vendor.",
        ex_meaning: "거리의 노점상."
      }
    ],
    derivatives: []
  },

  // ==========================================
  // Day 11: 제품 개발 (Product Development)
  // ==========================================
  {
    day: 11,
    num: 1,
    word: "research",
    definitions: [
      {
        pos: "n.",
        meaning: "연구, 조사",
        example: "Scientific research.",
        ex_meaning: "과학적 연구."
      },
      {
        pos: "v.",
        meaning: "연구하다",
        example: "Research a topic.",
        ex_meaning: "주제를 연구하다."
      }
    ],
    derivatives: [
      {
        word: "researcher",
        pos: "n.",
        meaning: "연구원",
        example: "Lead researcher.",
        ex_meaning: "수석 연구원."
      }
    ]
  },
  {
    day: 11,
    num: 2,
    word: "devise",
    definitions: [
      {
        pos: "v.",
        meaning: "고안하다, 발명하다",
        example: "Devise a plan.",
        ex_meaning: "계획을 고안하다."
      }
    ],
    derivatives: [
      {
        word: "device",
        pos: "n.",
        meaning: "장치, 기기",
        example: "Electronic device.",
        ex_meaning: "전자 기기."
      }
    ]
  },
  {
    day: 11,
    num: 3,
    word: "revolutionary",
    definitions: [
      {
        pos: "adj.",
        meaning: "혁명적인",
        example: "Revolutionary idea.",
        ex_meaning: "혁명적인 아이디어."
      }
    ],
    derivatives: [
      {
        word: "revolution",
        pos: "n.",
        meaning: "혁명",
        example: "Industrial Revolution.",
        ex_meaning: "산업 혁명."
      }
    ]
  },
  {
    day: 11,
    num: 4,
    word: "innovative",
    definitions: [
      {
        pos: "adj.",
        meaning: "혁신적인",
        example: "Innovative design.",
        ex_meaning: "혁신적인 디자인."
      }
    ],
    derivatives: [
      {
        word: "innovate",
        pos: "v.",
        meaning: "혁신하다",
        example: "Innovate constantly.",
        ex_meaning: "끊임없이 혁신하다."
      },
      {
        word: "innovation",
        pos: "n.",
        meaning: "혁신",
        example: "Technological innovation.",
        ex_meaning: "기술 혁신."
      }
    ]
  },
  {
    day: 11,
    num: 5,
    word: "feature",
    definitions: [
      {
        pos: "n.",
        meaning: "특징, 특색",
        example: "Key features.",
        ex_meaning: "주요 특징들."
      },
      {
        pos: "v.",
        meaning: "특징으로 삼다",
        example: "The car features a sunroof.",
        ex_meaning: "그 차는 선루프를 특징으로 한다."
      }
    ],
    derivatives: []
  },
  {
    day: 11,
    num: 6,
    word: "inspiration",
    definitions: [
      {
        pos: "n.",
        meaning: "영감",
        example: "Source of inspiration.",
        ex_meaning: "영감의 원천."
      }
    ],
    derivatives: [
      {
        word: "inspire",
        pos: "v.",
        meaning: "영감을 주다",
        example: "Inspire others.",
        ex_meaning: "타인에게 영감을 주다."
      }
    ]
  },
  {
    day: 11,
    num: 7,
    word: "sufficiently",
    definitions: [
      {
        pos: "adv.",
        meaning: "충분히",
        example: "Sufficiently large.",
        ex_meaning: "충분히 큰."
      }
    ],
    derivatives: [
      {
        word: "sufficient",
        pos: "adj.",
        meaning: "충분한",
        example: "Sufficient time.",
        ex_meaning: "충분한 시간."
      }
    ]
  },
  {
    day: 11,
    num: 8,
    word: "patent",
    definitions: [
      {
        pos: "n.",
        meaning: "특허, 특허권",
        example: "Apply for a patent.",
        ex_meaning: "특허를 출원하다."
      },
      {
        pos: "v.",
        meaning: "특허를 얻다",
        example: "Patent an invention.",
        ex_meaning: "발명품에 대한 특허를 얻다."
      }
    ],
    derivatives: []
  },
  {
    day: 11,
    num: 9,
    word: "envision",
    definitions: [
      {
        pos: "v.",
        meaning: "(미래의 일을) 상상하다, 계획하다",
        example: "Envision the future.",
        ex_meaning: "미래를 상상하다."
      }
    ],
    derivatives: []
  },
  {
    day: 11,
    num: 10,
    word: "extend",
    definitions: [
      {
        pos: "v.",
        meaning: "연장하다; (기간을) 늘리다",
        example: "Extend a deadline.",
        ex_meaning: "마감일을 연장하다."
      }
    ],
    derivatives: [
      {
        word: "extension",
        pos: "n.",
        meaning: "연장, 확대",
        example: "Deadline extension.",
        ex_meaning: "마감일 연장."
      },
      {
        word: "extensive",
        pos: "adj.",
        meaning: "광범위한",
        example: "Extensive damage.",
        ex_meaning: "광범위한 피해."
      }
    ]
  },
  {
    day: 11,
    num: 11,
    word: "following",
    definitions: [
      {
        pos: "prep.",
        meaning: "~후에",
        example: "Following the meeting.",
        ex_meaning: "회의 후에."
      },
      {
        pos: "adj.",
        meaning: "다음의",
        example: "The following day.",
        ex_meaning: "다음 날."
      }
    ],
    derivatives: [
      {
        word: "follow",
        pos: "v.",
        meaning: "따르다",
        example: "Follow me.",
        ex_meaning: "나를 따라오라."
      }
    ]
  },
  {
    day: 11,
    num: 12,
    word: "intend",
    definitions: [
      {
        pos: "v.",
        meaning: "~할 작정이다, 의도하다",
        example: "Intend to go.",
        ex_meaning: "갈 작정이다."
      }
    ],
    derivatives: [
      {
        word: "intention",
        pos: "n.",
        meaning: "의도",
        example: "No intention of hurting.",
        ex_meaning: "해칠 의도가 없는."
      },
      {
        word: "intentional",
        pos: "adj.",
        meaning: "고의적인",
        example: "Intentional act.",
        ex_meaning: "고의적인 행동."
      }
    ]
  },
  {
    day: 11,
    num: 13,
    word: "grant",
    definitions: [
      {
        pos: "v.",
        meaning: "(인정하여 정식으로) 수여하다, 주다",
        example: "Grant permission.",
        ex_meaning: "허가를 내주다."
      },
      {
        pos: "n.",
        meaning: "보조금",
        example: "Government grant.",
        ex_meaning: "정부 보조금."
      }
    ],
    derivatives: []
  },
  {
    day: 11,
    num: 14,
    word: "allow",
    definitions: [
      {
        pos: "v.",
        meaning: "~하게 하다, 허락하다",
        example: "Allow time for questions.",
        ex_meaning: "질문할 시간을 주다."
      }
    ],
    derivatives: [
      {
        word: "allowance",
        pos: "n.",
        meaning: "수당, 용돈; 허용량",
        example: "Baggage allowance.",
        ex_meaning: "수하물 허용량."
      }
    ]
  },
  {
    day: 11,
    num: 15,
    word: "inspect",
    definitions: [
      {
        pos: "v.",
        meaning: "~을 검사하다",
        example: "Inspect the machinery.",
        ex_meaning: "기계를 검사하다."
      }
    ],
    derivatives: [
      {
        word: "inspection",
        pos: "n.",
        meaning: "검사",
        example: "Safety inspection.",
        ex_meaning: "안전 검사."
      },
      {
        word: "inspector",
        pos: "n.",
        meaning: "검사관",
        example: "Building inspector.",
        ex_meaning: "건물 검사관."
      }
    ]
  },
  {
    day: 11,
    num: 16,
    word: "improve",
    definitions: [
      {
        pos: "v.",
        meaning: "향상시키다, 개선하다",
        example: "Improve skills.",
        ex_meaning: "기술을 향상시키다."
      }
    ],
    derivatives: [
      {
        word: "improvement",
        pos: "n.",
        meaning: "향상, 개선",
        example: "Room for improvement.",
        ex_meaning: "개선의 여지."
      }
    ]
  },
  {
    day: 11,
    num: 17,
    word: "increasingly",
    definitions: [
      {
        pos: "adv.",
        meaning: "점점, 더욱더",
        example: "Increasingly popular.",
        ex_meaning: "점점 더 인기 있는."
      }
    ],
    derivatives: [
      {
        word: "increase",
        pos: "v.",
        meaning: "증가하다",
        example: "Increase sales.",
        ex_meaning: "판매를 늘리다."
      },
      {
        word: "increasing",
        pos: "adj.",
        meaning: "증가하는",
        example: "Increasing demand.",
        ex_meaning: "증가하는 수요."
      }
    ]
  },
  {
    day: 11,
    num: 18,
    word: "invest",
    definitions: [
      {
        pos: "v.",
        meaning: "투자하다, 운용하다",
        example: "Invest in stocks.",
        ex_meaning: "주식에 투자하다."
      }
    ],
    derivatives: [
      {
        word: "investment",
        pos: "n.",
        meaning: "투자",
        example: "Return on investment.",
        ex_meaning: "투자 수익."
      },
      {
        word: "investor",
        pos: "n.",
        meaning: "투자자",
        example: "Foreign investors.",
        ex_meaning: "외국인 투자자들."
      }
    ]
  },
  {
    day: 11,
    num: 19,
    word: "various",
    definitions: [
      {
        pos: "adj.",
        meaning: "여러 가지의, 다양한",
        example: "Various reasons.",
        ex_meaning: "다양한 이유들."
      }
    ],
    derivatives: [
      {
        word: "vary",
        pos: "v.",
        meaning: "다르다, 다양하다",
        example: "Prices vary.",
        ex_meaning: "가격은 다양하다."
      },
      {
        word: "variety",
        pos: "n.",
        meaning: "다양성, 종류",
        example: "A variety of colors.",
        ex_meaning: "다양한 색상."
      }
    ]
  },
  {
    day: 11,
    num: 20,
    word: "upgrade",
    definitions: [
      {
        pos: "n.",
        meaning: "업그레이드, 개량형",
        example: "Software upgrade.",
        ex_meaning: "소프트웨어 업그레이드."
      },
      {
        pos: "v.",
        meaning: "업그레이드하다, 개선하다",
        example: "Upgrade the system.",
        ex_meaning: "시스템을 업그레이드하다."
      }
    ],
    derivatives: []
  },
  {
    day: 11,
    num: 21,
    word: "manual",
    definitions: [
      {
        pos: "n.",
        meaning: "설명서, 매뉴얼",
        example: "User manual.",
        ex_meaning: "사용자 설명서."
      },
      {
        pos: "adj.",
        meaning: "수동의",
        example: "Manual labor.",
        ex_meaning: "수작업(육체노동)."
      }
    ],
    derivatives: []
  },
  {
    day: 11,
    num: 22,
    word: "explore",
    definitions: [
      {
        pos: "v.",
        meaning: "조사하다, 탐구하다",
        example: "Explore possibilities.",
        ex_meaning: "가능성을 탐구하다."
      }
    ],
    derivatives: [
      {
        word: "exploration",
        pos: "n.",
        meaning: "탐험, 탐구",
        example: "Space exploration.",
        ex_meaning: "우주 탐험."
      }
    ]
  },
  {
    day: 11,
    num: 23,
    word: "response",
    definitions: [
      {
        pos: "n.",
        meaning: "응답, 반응",
        example: "Immediate response.",
        ex_meaning: "즉각적인 반응."
      }
    ],
    derivatives: [
      {
        word: "respond",
        pos: "v.",
        meaning: "응답하다",
        example: "Respond quickly.",
        ex_meaning: "빨리 응답하다."
      },
      {
        word: "responsive",
        pos: "adj.",
        meaning: "반응하는",
        example: "Responsive to needs.",
        ex_meaning: "요구에 즉각 반응하는."
      }
    ]
  },
  {
    day: 11,
    num: 24,
    word: "appearance",
    definitions: [
      {
        pos: "n.",
        meaning: "외관, 외모; 출현",
        example: "Physical appearance.",
        ex_meaning: "신체적 외모."
      }
    ],
    derivatives: [
      {
        word: "appear",
        pos: "v.",
        meaning: "나타나다; ~인 것 같다",
        example: "Appear calm.",
        ex_meaning: "침착해 보이다."
      }
    ]
  },
  {
    day: 11,
    num: 25,
    word: "successful",
    definitions: [
      {
        pos: "adj.",
        meaning: "성공적인",
        example: "Successful career.",
        ex_meaning: "성공적인 경력."
      }
    ],
    derivatives: [
      {
        word: "succeed",
        pos: "v.",
        meaning: "성공하다; 계승하다",
        example: "Succeed in business.",
        ex_meaning: "사업에 성공하다."
      },
      {
        word: "success",
        pos: "n.",
        meaning: "성공",
        example: "Key to success.",
        ex_meaning: "성공의 열쇠."
      }
    ]
  },
  {
    day: 11,
    num: 26,
    word: "hold",
    definitions: [
      {
        pos: "v.",
        meaning: "~을 수용하다, 담다; 개최하다; 잡다",
        example: "Hold water.",
        ex_meaning: "물을 담다."
      }
    ],
    derivatives: []
  },
  {
    day: 11,
    num: 27,
    word: "advance",
    definitions: [
      {
        pos: "n.",
        meaning: "진보, 전진",
        example: "Scientific advance.",
        ex_meaning: "과학적 진보."
      },
      {
        pos: "v.",
        meaning: "나아가다, 증진되다",
        example: "Advance technology.",
        ex_meaning: "기술을 증진시키다."
      }
    ],
    derivatives: [
      {
        word: "advanced",
        pos: "adj.",
        meaning: "진보된, 고급의",
        example: "Advanced level.",
        ex_meaning: "고급 단계."
      }
    ]
  },
  {
    day: 11,
    num: 28,
    word: "reliable",
    definitions: [
      {
        pos: "adj.",
        meaning: "믿을 만한, 신뢰할 수 있는",
        example: "Reliable source.",
        ex_meaning: "믿을 만한 소식통."
      }
    ],
    derivatives: [
      {
        word: "rely",
        pos: "v.",
        meaning: "의지하다",
        example: "Rely on friends.",
        ex_meaning: "친구에게 의지하다."
      },
      {
        word: "reliability",
        pos: "n.",
        meaning: "신뢰성",
        example: "High reliability.",
        ex_meaning: "높은 신뢰성."
      }
    ]
  },
  {
    day: 11,
    num: 29,
    word: "quality",
    definitions: [
      {
        pos: "n.",
        meaning: "품질, 질",
        example: "High quality.",
        ex_meaning: "높은 품질."
      }
    ],
    derivatives: []
  },
  {
    day: 11,
    num: 30,
    word: "domestic",
    definitions: [
      {
        pos: "adj.",
        meaning: "국내의, 국산의",
        example: "Domestic market.",
        ex_meaning: "국내 시장."
      }
    ],
    derivatives: []
  },
  {
    day: 11,
    num: 31,
    word: "development",
    definitions: [
      {
        pos: "n.",
        meaning: "개발, 발전",
        example: "Product development.",
        ex_meaning: "제품 개발."
      }
    ],
    derivatives: [
      {
        word: "develop",
        pos: "v.",
        meaning: "개발하다, 발전시키다",
        example: "Develop a new drug.",
        ex_meaning: "신약을 개발하다."
      },
      {
        word: "developer",
        pos: "n.",
        meaning: "개발자",
        example: "Software developer.",
        ex_meaning: "소프트웨어 개발자."
      }
    ]
  },
  {
    day: 11,
    num: 32,
    word: "availability",
    definitions: [
      {
        pos: "n.",
        meaning: "(입수) 가능성, 유효성",
        example: "Check availability.",
        ex_meaning: "이용 가능 여부를 확인하다."
      }
    ],
    derivatives: [
      {
        word: "available",
        pos: "adj.",
        meaning: "이용 가능한",
        example: "Available seats.",
        ex_meaning: "이용 가능한 좌석들."
      }
    ]
  },
  {
    day: 11,
    num: 33,
    word: "update",
    definitions: [
      {
        pos: "n.",
        meaning: "갱신, 최신 정보",
        example: "Latest update.",
        ex_meaning: "최신 업데이트."
      },
      {
        pos: "v.",
        meaning: "갱신하다",
        example: "Update the file.",
        ex_meaning: "파일을 갱신하다."
      }
    ],
    derivatives: [
      {
        word: "updated",
        pos: "adj.",
        meaning: "갱신된, 최신의",
        example: "Updated version.",
        ex_meaning: "최신 버전."
      }
    ]
  },
  {
    day: 11,
    num: 34,
    word: "accurate",
    definitions: [
      {
        pos: "adj.",
        meaning: "정확한",
        example: "Accurate information.",
        ex_meaning: "정확한 정보."
      }
    ],
    derivatives: [
      {
        word: "accuracy",
        pos: "n.",
        meaning: "정확성",
        example: "Check for accuracy.",
        ex_meaning: "정확성을 확인하다."
      },
      {
        word: "accurately",
        pos: "adv.",
        meaning: "정확하게",
        example: "Describe accurately.",
        ex_meaning: "정확하게 묘사하다."
      }
    ]
  },
  {
    day: 11,
    num: 35,
    word: "complicated",
    definitions: [
      {
        pos: "adj.",
        meaning: "복잡한",
        example: "Complicated problem.",
        ex_meaning: "복잡한 문제."
      }
    ],
    derivatives: [
      {
        word: "complicate",
        pos: "v.",
        meaning: "복잡하게 하다",
        example: "Don't complicate things.",
        ex_meaning: "일을 복잡하게 만들지 마라."
      },
      {
        word: "complication",
        pos: "n.",
        meaning: "복잡한 문제, 합병증",
        example: "Unexpected complication.",
        ex_meaning: "예상치 못한 문제."
      }
    ]
  },
  {
    day: 11,
    num: 36,
    word: "accomplished",
    definitions: [
      {
        pos: "adj.",
        meaning: "숙달된, 노련한",
        example: "Accomplished musician.",
        ex_meaning: "노련한 음악가."
      }
    ],
    derivatives: [
      {
        word: "accomplish",
        pos: "v.",
        meaning: "성취하다",
        example: "Accomplish the task.",
        ex_meaning: "임무를 완수하다."
      },
      {
        word: "accomplishment",
        pos: "n.",
        meaning: "성취, 업적",
        example: "Sense of accomplishment.",
        ex_meaning: "성취감."
      }
    ]
  },
  {
    day: 11,
    num: 37,
    word: "inquiry",
    definitions: [
      {
        pos: "n.",
        meaning: "문의, 질문",
        example: "Make an inquiry.",
        ex_meaning: "문의하다."
      }
    ],
    derivatives: [
      {
        word: "inquire",
        pos: "v.",
        meaning: "문의하다",
        example: "Inquire about the schedule.",
        ex_meaning: "일정에 대해 문의하다."
      }
    ]
  },
  {
    day: 11,
    num: 38,
    word: "indication",
    definitions: [
      {
        pos: "n.",
        meaning: "징후, 조짐",
        example: "No indication of pain.",
        ex_meaning: "고통의 징후가 없는."
      }
    ],
    derivatives: [
      {
        word: "indicate",
        pos: "v.",
        meaning: "나타내다",
        example: "Indicate a preference.",
        ex_meaning: "선호를 나타내다."
      },
      {
        word: "indicative",
        pos: "adj.",
        meaning: "나타내는",
        example: "Indicative of success.",
        ex_meaning: "성공을 나타내는."
      }
    ]
  },
  {
    day: 11,
    num: 39,
    word: "manufacturer",
    definitions: [
      {
        pos: "n.",
        meaning: "제조업자, 제조사",
        example: "Car manufacturer.",
        ex_meaning: "자동차 제조사."
      }
    ],
    derivatives: [
      {
        word: "manufacture",
        pos: "v.",
        meaning: "제조하다",
        example: "Manufacture goods.",
        ex_meaning: "상품을 제조하다."
      }
    ]
  },
  {
    day: 11,
    num: 40,
    word: "compatible",
    definitions: [
      {
        pos: "adj.",
        meaning: "호환되는, 양립할 수 있는",
        example: "Compatible with this software.",
        ex_meaning: "이 소프트웨어와 호환되는."
      }
    ],
    derivatives: [
      {
        word: "compatibility",
        pos: "n.",
        meaning: "호환성",
        example: "Check compatibility.",
        ex_meaning: "호환성을 확인하다."
      }
    ]
  },
  {
    day: 11,
    num: 41,
    word: "superior",
    definitions: [
      {
        pos: "adj.",
        meaning: "우수한, 상급의",
        example: "Superior quality.",
        ex_meaning: "우수한 품질."
      }
    ],
    derivatives: [
      {
        word: "superiority",
        pos: "n.",
        meaning: "우월성",
        example: "Sense of superiority.",
        ex_meaning: "우월감."
      }
    ]
  },
  {
    day: 11,
    num: 42,
    word: "absolute",
    definitions: [
      {
        pos: "adj.",
        meaning: "완전한, 절대적인",
        example: "Absolute silence.",
        ex_meaning: "완전한 침묵."
      }
    ],
    derivatives: [
      {
        word: "absolutely",
        pos: "adv.",
        meaning: "전적으로",
        example: "Absolutely sure.",
        ex_meaning: "전적으로 확신하는."
      }
    ]
  },
  {
    day: 11,
    num: 43,
    word: "broaden",
    definitions: [
      {
        pos: "v.",
        meaning: "넓히다",
        example: "Broaden your horizons.",
        ex_meaning: "시야를 넓혀라."
      }
    ],
    derivatives: [
      {
        word: "broad",
        pos: "adj.",
        meaning: "폭넓은",
        example: "Broad shoulders.",
        ex_meaning: "넓은 어깨."
      },
      {
        word: "breadth",
        pos: "n.",
        meaning: "폭, 넓이",
        example: "Breadth of knowledge.",
        ex_meaning: "지식의 폭."
      }
    ]
  },
  {
    day: 11,
    num: 44,
    word: "corrosion",
    definitions: [
      {
        pos: "n.",
        meaning: "부식",
        example: "Resistant to corrosion.",
        ex_meaning: "부식에 강한."
      }
    ],
    derivatives: [
      {
        word: "corrode",
        pos: "v.",
        meaning: "부식시키다",
        example: "Acid corrodes metal.",
        ex_meaning: "산은 금속을 부식시킨다."
      }
    ]
  },
// ==========================================
  // Day 12: 생산 관리 (Production Management)
  // ==========================================
  {
    day: 12,
    num: 1,
    word: "equipment",
    definitions: [
      {
        pos: "n.",
        meaning: "장비, 설비",
        example: "Office equipment.",
        ex_meaning: "사무 장비."
      }
    ],
    derivatives: [
      {
        word: "equip",
        pos: "v.",
        meaning: "갖추다",
        example: "Equip with tools.",
        ex_meaning: "도구를 갖추다."
      }
    ]
  },
  {
    day: 12,
    num: 2,
    word: "automate",
    definitions: [
      {
        pos: "v.",
        meaning: "자동화하다",
        example: "Automate the process.",
        ex_meaning: "과정을 자동화하다."
      }
    ],
    derivatives: [
      {
        word: "automation",
        pos: "n.",
        meaning: "자동화",
        example: "Factory automation.",
        ex_meaning: "공장 자동화."
      },
      {
        word: "automatic",
        pos: "adj.",
        meaning: "자동의",
        example: "Automatic door.",
        ex_meaning: "자동문."
      }
    ]
  },
  {
    day: 12,
    num: 3,
    word: "specification",
    definitions: [
      {
        pos: "n.",
        meaning: "명세서, 설명서, 사양",
        example: "Product specifications.",
        ex_meaning: "제품 사양."
      }
    ],
    derivatives: [
      {
        word: "specify",
        pos: "v.",
        meaning: "명시하다",
        example: "Specify the color.",
        ex_meaning: "색상을 명시하다."
      },
      {
        word: "specific",
        pos: "adj.",
        meaning: "구체적인",
        example: "Specific details.",
        ex_meaning: "구체적인 세부사항."
      }
    ]
  },
  {
    day: 12,
    num: 4,
    word: "properly",
    definitions: [
      {
        pos: "adv.",
        meaning: "제대로, 정확하게",
        example: "Function properly.",
        ex_meaning: "제대로 작동하다."
      }
    ],
    derivatives: [
      {
        word: "proper",
        pos: "adj.",
        meaning: "적절한",
        example: "Proper way.",
        ex_meaning: "적절한 방법."
      }
    ]
  },
  {
    day: 12,
    num: 5,
    word: "safety",
    definitions: [
      {
        pos: "n.",
        meaning: "안전",
        example: "Safety regulations.",
        ex_meaning: "안전 규정."
      }
    ],
    derivatives: [
      {
        word: "safe",
        pos: "adj.",
        meaning: "안전한",
        example: "Safe place.",
        ex_meaning: "안전한 장소."
      },
      {
        word: "safely",
        pos: "adv.",
        meaning: "안전하게",
        example: "Drive safely.",
        ex_meaning: "안전하게 운전하다."
      }
    ]
  },
  {
    day: 12,
    num: 6,
    word: "precaution",
    definitions: [
      {
        pos: "n.",
        meaning: "예방조치, 예방책",
        example: "Take precautions.",
        ex_meaning: "예방조치를 취하다."
      }
    ],
    derivatives: []
  },
  {
    day: 12,
    num: 7,
    word: "operate",
    definitions: [
      {
        pos: "v.",
        meaning: "(기계 등이) 작동하다, 움직이다",
        example: "Operate a machine.",
        ex_meaning: "기계를 작동시키다."
      }
    ],
    derivatives: [
      {
        word: "operation",
        pos: "n.",
        meaning: "작동, 운영",
        example: "Hours of operation.",
        ex_meaning: "운영 시간."
      },
      {
        word: "operational",
        pos: "adj.",
        meaning: "가동되는",
        example: "Fully operational.",
        ex_meaning: "완전히 가동되는."
      }
    ]
  },
  {
    day: 12,
    num: 8,
    word: "processing",
    definitions: [
      {
        pos: "n.",
        meaning: "가공, 처리",
        example: "Data processing.",
        ex_meaning: "데이터 처리."
      }
    ],
    derivatives: [
      {
        word: "process",
        pos: "n.",
        meaning: "과정, 공정",
        example: "Manufacturing process.",
        ex_meaning: "제조 공정."
      },
      {
        word: "process",
        pos: "v.",
        meaning: "처리하다",
        example: "Process food.",
        ex_meaning: "음식을 가공하다."
      }
    ]
  },
  {
    day: 12,
    num: 9,
    word: "capacity",
    definitions: [
      {
        pos: "n.",
        meaning: "용량, 수용력; 역할",
        example: "Storage capacity.",
        ex_meaning: "저장 용량."
      }
    ],
    derivatives: []
  },
  {
    day: 12,
    num: 10,
    word: "assemble",
    definitions: [
      {
        pos: "v.",
        meaning: "(부품, 기계 등을) 조립하다",
        example: "Assemble furniture.",
        ex_meaning: "가구를 조립하다."
      }
    ],
    derivatives: [
      {
        word: "assembly",
        pos: "n.",
        meaning: "조립, 집회",
        example: "Assembly line.",
        ex_meaning: "조립 라인."
      }
    ]
  },
  {
    day: 12,
    num: 11,
    word: "utilize",
    definitions: [
      {
        pos: "v.",
        meaning: "이용하다, 활용하다",
        example: "Utilize resources.",
        ex_meaning: "자원을 활용하다."
      }
    ],
    derivatives: [
      {
        word: "utilization",
        pos: "n.",
        meaning: "이용",
        example: "Utilization of space.",
        ex_meaning: "공간 활용."
      }
    ]
  },
  {
    day: 12,
    num: 12,
    word: "place",
    definitions: [
      {
        pos: "v.",
        meaning: "(지시, 주문, 신청 등을) 하다; 놓다",
        example: "Place an order.",
        ex_meaning: "주문을 하다."
      }
    ],
    derivatives: [
      {
        word: "placement",
        pos: "n.",
        meaning: "배치",
        example: "Product placement.",
        ex_meaning: "제품 배치(PPL)."
      }
    ]
  },
  {
    day: 12,
    num: 13,
    word: "fill",
    definitions: [
      {
        pos: "v.",
        meaning: "~을 채우다; (주문대로) 이행하다",
        example: "Fill an order.",
        ex_meaning: "주문을 이행하다."
      }
    ],
    derivatives: []
  },
  {
    day: 12,
    num: 14,
    word: "manufacturing",
    definitions: [
      {
        pos: "n.",
        meaning: "제조(업)",
        example: "Manufacturing industry.",
        ex_meaning: "제조업."
      }
    ],
    derivatives: [
      {
        word: "manufacture",
        pos: "v.",
        meaning: "제조하다",
        example: "Manufacture cars.",
        ex_meaning: "자동차를 제조하다."
      }
    ]
  },
  {
    day: 12,
    num: 15,
    word: "renovate",
    definitions: [
      {
        pos: "v.",
        meaning: "(낡은 건물, 가구 등을) 개조하다, 보수하다",
        example: "Renovate the office.",
        ex_meaning: "사무실을 개조하다."
      }
    ],
    derivatives: [
      {
        word: "renovation",
        pos: "n.",
        meaning: "수리, 개조",
        example: "Under renovation.",
        ex_meaning: "수리 중인."
      }
    ]
  },
  {
    day: 12,
    num: 16,
    word: "decision",
    definitions: [
      {
        pos: "n.",
        meaning: "결정, 판단",
        example: "Make a decision.",
        ex_meaning: "결정을 내리다."
      }
    ],
    derivatives: [
      {
        word: "decide",
        pos: "v.",
        meaning: "결정하다",
        example: "Decide to go.",
        ex_meaning: "가기로 결정하다."
      },
      {
        word: "decisive",
        pos: "adj.",
        meaning: "결정적인",
        example: "Decisive factor.",
        ex_meaning: "결정적 요인."
      }
    ]
  },
  {
    day: 12,
    num: 17,
    word: "material",
    definitions: [
      {
        pos: "n.",
        meaning: "재료, 물질",
        example: "Raw materials.",
        ex_meaning: "원자재."
      }
    ],
    derivatives: []
  },
  {
    day: 12,
    num: 18,
    word: "success",
    definitions: [
      {
        pos: "n.",
        meaning: "성공, 성과",
        example: "Achieve success.",
        ex_meaning: "성공을 거두다."
      }
    ],
    derivatives: [
      {
        word: "succeed",
        pos: "v.",
        meaning: "성공하다",
        example: "Succeed in life.",
        ex_meaning: "인생에서 성공하다."
      },
      {
        word: "successful",
        pos: "adj.",
        meaning: "성공적인",
        example: "Successful outcome.",
        ex_meaning: "성공적인 결과."
      }
    ]
  },
  {
    day: 12,
    num: 19,
    word: "attribute",
    definitions: [
      {
        pos: "v.",
        meaning: "~의 탓(덕분)으로 돌리다",
        example: "Attribute success to hard work.",
        ex_meaning: "성공을 노력 덕분으로 돌리다."
      }
    ],
    derivatives: []
  },
  {
    day: 12,
    num: 20,
    word: "efficiency",
    definitions: [
      {
        pos: "n.",
        meaning: "효율, 능률",
        example: "Energy efficiency.",
        ex_meaning: "에너지 효율."
      }
    ],
    derivatives: [
      {
        word: "efficient",
        pos: "adj.",
        meaning: "효율적인",
        example: "Efficient use of time.",
        ex_meaning: "시간의 효율적 사용."
      }
    ]
  },
  {
    day: 12,
    num: 21,
    word: "limit",
    definitions: [
      {
        pos: "n.",
        meaning: "한계, 제한",
        example: "Speed limit.",
        ex_meaning: "속도 제한."
      },
      {
        pos: "v.",
        meaning: "한정하다, 제한하다",
        example: "Limit the number.",
        ex_meaning: "숫자를 제한하다."
      }
    ],
    derivatives: [
      {
        word: "limitation",
        pos: "n.",
        meaning: "제한, 한계",
        example: "Know your limitations.",
        ex_meaning: "자신의 한계를 알아라."
      },
      {
        word: "limited",
        pos: "adj.",
        meaning: "제한된",
        example: "Limited time.",
        ex_meaning: "제한된 시간."
      }
    ]
  },
  {
    day: 12,
    num: 22,
    word: "tailored",
    definitions: [
      {
        pos: "adj.",
        meaning: "맞춤의, 주문에 따라 만든",
        example: "Tailored suit.",
        ex_meaning: "맞춤 정장."
      }
    ],
    derivatives: [
      {
        word: "tailor",
        pos: "v.",
        meaning: "(요구, 목적에) 맞추다",
        example: "Tailor the program.",
        ex_meaning: "프로그램을 맞추다."
      }
    ]
  },
  {
    day: 12,
    num: 23,
    word: "component",
    definitions: [
      {
        pos: "n.",
        meaning: "부품, 요소",
        example: "Electronic components.",
        ex_meaning: "전자 부품."
      }
    ],
    derivatives: []
  },
  {
    day: 12,
    num: 24,
    word: "capable",
    definitions: [
      {
        pos: "adj.",
        meaning: "~을 할 수 있는, 유능한",
        example: "Capable of doing it.",
        ex_meaning: "그것을 할 수 있는."
      }
    ],
    derivatives: [
      {
        word: "capability",
        pos: "n.",
        meaning: "능력, 역량",
        example: "Military capability.",
        ex_meaning: "군사력."
      }
    ]
  },
  {
    day: 12,
    num: 25,
    word: "economize",
    definitions: [
      {
        pos: "v.",
        meaning: "절약하다, 아끼다",
        example: "Economize on fuel.",
        ex_meaning: "연료를 절약하다."
      }
    ],
    derivatives: [
      {
        word: "economy",
        pos: "n.",
        meaning: "경제, 절약",
        example: "Global economy.",
        ex_meaning: "세계 경제."
      },
      {
        word: "economical",
        pos: "adj.",
        meaning: "경제적인",
        example: "Economical car.",
        ex_meaning: "경제적인 차."
      }
    ]
  },
  {
    day: 12,
    num: 26,
    word: "flexible",
    definitions: [
      {
        pos: "adj.",
        meaning: "융통성 있는, 유연한",
        example: "Flexible schedule.",
        ex_meaning: "유동적인 일정."
      }
    ],
    derivatives: [
      {
        word: "flexibility",
        pos: "n.",
        meaning: "융통성, 유연성",
        example: "Show flexibility.",
        ex_meaning: "융통성을 보이다."
      }
    ]
  },
  {
    day: 12,
    num: 27,
    word: "comparable",
    definitions: [
      {
        pos: "adj.",
        meaning: "필적하는, 비교되는",
        example: "Comparable in size.",
        ex_meaning: "크기가 비슷한."
      }
    ],
    derivatives: [
      {
        word: "compare",
        pos: "v.",
        meaning: "비교하다",
        example: "Compare products.",
        ex_meaning: "제품들을 비교하다."
      },
      {
        word: "comparison",
        pos: "n.",
        meaning: "비교",
        example: "In comparison.",
        ex_meaning: "비교하여."
      }
    ]
  },
  {
    day: 12,
    num: 28,
    word: "produce",
    definitions: [
      {
        pos: "v.",
        meaning: "생산하다",
        example: "Produce cars.",
        ex_meaning: "자동차를 생산하다."
      }
    ],
    derivatives: [
      {
        word: "product",
        pos: "n.",
        meaning: "제품",
        example: "New product.",
        ex_meaning: "신제품."
      },
      {
        word: "production",
        pos: "n.",
        meaning: "생산",
        example: "Mass production.",
        ex_meaning: "대량 생산."
      }
    ]
  },
  {
    day: 12,
    num: 29,
    word: "respectively",
    definitions: [
      {
        pos: "adv.",
        meaning: "각각, 따로",
        example: "First and second place, respectively.",
        ex_meaning: "각각 1등과 2등."
      }
    ],
    derivatives: [
      {
        word: "respective",
        pos: "adj.",
        meaning: "각각의",
        example: "Respective homes.",
        ex_meaning: "각자의 집."
      }
    ]
  },
  {
    day: 12,
    num: 30,
    word: "device",
    definitions: [
      {
        pos: "n.",
        meaning: "장치, 기기",
        example: "Electronic device.",
        ex_meaning: "전자 기기."
      }
    ],
    derivatives: [
      {
        word: "devise",
        pos: "v.",
        meaning: "고안하다",
        example: "Devise a plan.",
        ex_meaning: "계획을 고안하다."
      }
    ]
  },
  {
    day: 12,
    num: 31,
    word: "trim",
    definitions: [
      {
        pos: "v.",
        meaning: "(깎아) 다듬다, 없애다; 삭감하다",
        example: "Trim the budget.",
        ex_meaning: "예산을 삭감하다."
      }
    ],
    derivatives: []
  },
  {
    day: 12,
    num: 32,
    word: "launch",
    definitions: [
      {
        pos: "v.",
        meaning: "(신제품을) 출시하다",
        example: "Launch a campaign.",
        ex_meaning: "캠페인을 시작하다."
      }
    ],
    derivatives: []
  },
  {
    day: 12,
    num: 33,
    word: "separately",
    definitions: [
      {
        pos: "adv.",
        meaning: "개별적으로, 따로",
        example: "Sold separately.",
        ex_meaning: "별도 판매."
      }
    ],
    derivatives: [
      {
        word: "separate",
        pos: "adj.",
        meaning: "분리된",
        example: "Separate rooms.",
        ex_meaning: "분리된 방들."
      },
      {
        word: "separation",
        pos: "n.",
        meaning: "분리",
        example: "Legal separation.",
        ex_meaning: "법적 별거(분리)."
      }
    ]
  },
  {
    day: 12,
    num: 34,
    word: "expiration",
    definitions: [
      {
        pos: "n.",
        meaning: "(기간의) 만료, 만기",
        example: "Expiration date.",
        ex_meaning: "유효 기간(만료일)."
      }
    ],
    derivatives: [
      {
        word: "expire",
        pos: "v.",
        meaning: "만료되다",
        example: "My passport expired.",
        ex_meaning: "내 여권이 만료되었다."
      }
    ]
  },
  {
    day: 12,
    num: 35,
    word: "maneuver",
    definitions: [
      {
        pos: "v.",
        meaning: "이동시키다, 움직이다",
        example: "Maneuver the vehicle.",
        ex_meaning: "차량을 조종하다."
      }
    ],
    derivatives: []
  },
  {
    day: 12,
    num: 36,
    word: "coming",
    definitions: [
      {
        pos: "adj.",
        meaning: "다가오는",
        example: "Coming soon.",
        ex_meaning: "곧 다가오는."
      }
    ],
    derivatives: [
      {
        word: "come",
        pos: "v.",
        meaning: "오다",
        example: "Come here.",
        ex_meaning: "이리 와라."
      }
    ]
  },
  {
    day: 12,
    num: 37,
    word: "damaged",
    definitions: [
      {
        pos: "adj.",
        meaning: "손상된, 손해를 입은",
        example: "Damaged goods.",
        ex_meaning: "손상된 물품."
      }
    ],
    derivatives: [
      {
        word: "damage",
        pos: "n.",
        meaning: "손상, 피해",
        example: "Cause damage.",
        ex_meaning: "피해를 입히다."
      }
    ]
  },
  {
    day: 12,
    num: 38,
    word: "prevent",
    definitions: [
      {
        pos: "v.",
        meaning: "~을 막다, 예방하다",
        example: "Prevent accidents.",
        ex_meaning: "사고를 예방하다."
      }
    ],
    derivatives: [
      {
        word: "prevention",
        pos: "n.",
        meaning: "예방",
        example: "Crime prevention.",
        ex_meaning: "범죄 예방."
      },
      {
        word: "preventive",
        pos: "adj.",
        meaning: "예방하는",
        example: "Preventive measures.",
        ex_meaning: "예방 조치."
      }
    ]
  },
  {
    day: 12,
    num: 39,
    word: "power",
    definitions: [
      {
        pos: "n.",
        meaning: "전력, 전기; 힘",
        example: "Power outage.",
        ex_meaning: "정전."
      }
    ],
    derivatives: [
      {
        word: "powerful",
        pos: "adj.",
        meaning: "강력한",
        example: "Powerful engine.",
        ex_meaning: "강력한 엔진."
      }
    ]
  },
  {
    day: 12,
    num: 40,
    word: "chemical",
    definitions: [
      {
        pos: "n.",
        meaning: "화학 제품, 화학 물질",
        example: "Toxic chemicals.",
        ex_meaning: "유독 화학 물질."
      }
    ],
    derivatives: [
      {
        word: "chemist",
        pos: "n.",
        meaning: "화학자",
        example: "Research chemist.",
        ex_meaning: "연구 화학자."
      }
    ]
  },

  // ==========================================
  // Day 13: 고객 서비스 (Customer Service)
  // ==========================================
  {
    day: 13,
    num: 1,
    word: "complaint",
    definitions: [
      {
        pos: "n.",
        meaning: "불평",
        example: "File a complaint.",
        ex_meaning: "불만을 제기하다."
      }
    ],
    derivatives: [
      {
        word: "complain",
        pos: "v.",
        meaning: "불평하다",
        example: "Complain about the noise.",
        ex_meaning: "소음에 대해 불평하다."
      }
    ]
  },
  {
    day: 13,
    num: 2,
    word: "deal",
    definitions: [
      {
        pos: "v.",
        meaning: "처리하다; 거래하다; 분배하다",
        example: "Deal with the problem.",
        ex_meaning: "문제를 처리하다."
      }
    ],
    derivatives: [
      {
        word: "dealer",
        pos: "n.",
        meaning: "상인, 판매업자",
        example: "Car dealer.",
        ex_meaning: "자동차 판매상."
      }
    ]
  },
  {
    day: 13,
    num: 3,
    word: "argumentative",
    definitions: [
      {
        pos: "adj.",
        meaning: "논쟁적인, 논쟁을 좋아하는",
        example: "He became argumentative.",
        ex_meaning: "그는 논쟁적으로 변했다."
      }
    ],
    derivatives: [
      {
        word: "argue",
        pos: "v.",
        meaning: "논쟁하다",
        example: "Argue with a colleague.",
        ex_meaning: "동료와 논쟁하다."
      },
      {
        word: "argument",
        pos: "n.",
        meaning: "논쟁",
        example: "Have an argument.",
        ex_meaning: "논쟁을 벌이다."
      }
    ]
  },
  {
    day: 13,
    num: 4,
    word: "appropriately",
    definitions: [
      {
        pos: "adv.",
        meaning: "적절하게",
        example: "Dress appropriately.",
        ex_meaning: "적절하게 옷을 입다."
      }
    ],
    derivatives: [
      {
        word: "appropriate",
        pos: "adj.",
        meaning: "적합한",
        example: "Appropriate action.",
        ex_meaning: "적합한 조치."
      }
    ]
  },
  {
    day: 13,
    num: 5,
    word: "respond",
    definitions: [
      {
        pos: "v.",
        meaning: "응답하다",
        example: "Respond to an email.",
        ex_meaning: "이메일에 답장하다."
      }
    ],
    derivatives: [
      {
        word: "response",
        pos: "n.",
        meaning: "응답",
        example: "Quick response.",
        ex_meaning: "빠른 응답."
      },
      {
        word: "responsive",
        pos: "adj.",
        meaning: "반응하는",
        example: "Responsive to needs.",
        ex_meaning: "요구에 민감하게 반응하는."
      }
    ]
  },
  {
    day: 13,
    num: 6,
    word: "infuriate",
    definitions: [
      {
        pos: "v.",
        meaning: "화나게 하다, 격분시키다",
        example: "His rudeness infuriated me.",
        ex_meaning: "그의 무례함이 나를 격분시켰다."
      }
    ],
    derivatives: [
      {
        word: "infuriating",
        pos: "adj.",
        meaning: "격분하게 하는",
        example: "Infuriating delay.",
        ex_meaning: "화나게 하는 지연."
      }
    ]
  },
  {
    day: 13,
    num: 7,
    word: "courteous",
    definitions: [
      {
        pos: "adj.",
        meaning: "예의 바른",
        example: "Be courteous to customers.",
        ex_meaning: "고객에게 예의 바르게 대하라."
      }
    ],
    derivatives: [
      {
        word: "courtesy",
        pos: "n.",
        meaning: "예의, 공손",
        example: "Treat with courtesy.",
        ex_meaning: "예의를 갖춰 대하다."
      }
    ]
  },
  {
    day: 13,
    num: 8,
    word: "satisfaction",
    definitions: [
      {
        pos: "n.",
        meaning: "만족",
        example: "Customer satisfaction.",
        ex_meaning: "고객 만족."
      }
    ],
    derivatives: [
      {
        word: "satisfy",
        pos: "v.",
        meaning: "만족시키다",
        example: "Satisfy hunger.",
        ex_meaning: "배고픔을 채우다."
      },
      {
        word: "satisfactory",
        pos: "adj.",
        meaning: "만족스러운",
        example: "Satisfactory result.",
        ex_meaning: "만족스러운 결과."
      }
    ]
  },
  {
    day: 13,
    num: 9,
    word: "inconvenience",
    definitions: [
      {
        pos: "n.",
        meaning: "불편",
        example: "Apologize for the inconvenience.",
        ex_meaning: "불편에 대해 사과하다."
      },
      {
        pos: "v.",
        meaning: "~에게 불편을 느끼게 하다",
        example: "Sorry to inconvenience you.",
        ex_meaning: "불편하게 해서 죄송합니다."
      }
    ],
    derivatives: [
      {
        word: "inconvenient",
        pos: "adj.",
        meaning: "불편한",
        example: "Inconvenient time.",
        ex_meaning: "불편한 시간."
      }
    ]
  },
  {
    day: 13,
    num: 10,
    word: "complete",
    definitions: [
      {
        pos: "v.",
        meaning: "완료하다, 완성하다",
        example: "Complete the form.",
        ex_meaning: "양식을 완성하다."
      },
      {
        pos: "adj.",
        meaning: "완료된, 완성된",
        example: "Complete set.",
        ex_meaning: "완전한 세트."
      }
    ],
    derivatives: [
      {
        word: "completion",
        pos: "n.",
        meaning: "완료, 완성",
        example: "Upon completion.",
        ex_meaning: "완료 시에."
      },
      {
        word: "completely",
        pos: "adv.",
        meaning: "완전히",
        example: "Completely different.",
        ex_meaning: "완전히 다른."
      }
    ]
  },
  {
    day: 13,
    num: 11,
    word: "specific",
    definitions: [
      {
        pos: "adj.",
        meaning: "구체적인, 명확한",
        example: "Specific instructions.",
        ex_meaning: "구체적인 지시."
      }
    ],
    derivatives: [
      {
        word: "specify",
        pos: "v.",
        meaning: "명시하다",
        example: "Specify the date.",
        ex_meaning: "날짜를 명시하다."
      },
      {
        word: "specifically",
        pos: "adv.",
        meaning: "구체적으로, 특히",
        example: "Specifically designed.",
        ex_meaning: "특별히 설계된."
      }
    ]
  },
  {
    day: 13,
    num: 12,
    word: "return",
    definitions: [
      {
        pos: "v.",
        meaning: "반품하다, 돌려주다; 돌아오다",
        example: "Return the item.",
        ex_meaning: "물건을 반품하다."
      },
      {
        pos: "n.",
        meaning: "반품, 수익",
        example: "Return policy.",
        ex_meaning: "반품 규정."
      }
    ],
    derivatives: []
  },
  {
    day: 13,
    num: 13,
    word: "replace",
    definitions: [
      {
        pos: "v.",
        meaning: "~을 교체하다, 대체하다",
        example: "Replace the battery.",
        ex_meaning: "배터리를 교체하다."
      }
    ],
    derivatives: [
      {
        word: "replacement",
        pos: "n.",
        meaning: "교체, 후임자",
        example: "Find a replacement.",
        ex_meaning: "대체자를 찾다."
      }
    ]
  },
  {
    day: 13,
    num: 14,
    word: "presentation",
    definitions: [
      {
        pos: "n.",
        meaning: "발표, 프레젠테이션",
        example: "Give a presentation.",
        ex_meaning: "발표를 하다."
      }
    ],
    derivatives: [
      {
        word: "present",
        pos: "v.",
        meaning: "제시하다",
        example: "Present ID.",
        ex_meaning: "신분증을 제시하다."
      }
    ]
  },
  {
    day: 13,
    num: 15,
    word: "evaluation",
    definitions: [
      {
        pos: "n.",
        meaning: "평가",
        example: "Performance evaluation.",
        ex_meaning: "직무 평가."
      }
    ],
    derivatives: [
      {
        word: "evaluate",
        pos: "v.",
        meaning: "평가하다",
        example: "Evaluate the cost.",
        ex_meaning: "비용을 평가하다."
      }
    ]
  },
  {
    day: 13,
    num: 16,
    word: "confident",
    definitions: [
      {
        pos: "adj.",
        meaning: "확신하는, 자신 있는",
        example: "Confident of winning.",
        ex_meaning: "승리를 확신하는."
      }
    ],
    derivatives: [
      {
        word: "confidence",
        pos: "n.",
        meaning: "확신, 자신감",
        example: "Lack confidence.",
        ex_meaning: "자신감이 부족하다."
      }
    ]
  },
  {
    day: 13,
    num: 17,
    word: "cause",
    definitions: [
      {
        pos: "v.",
        meaning: "~을 야기하다, 원인이 되다",
        example: "Cause trouble.",
        ex_meaning: "문제를 일으키다."
      },
      {
        pos: "n.",
        meaning: "원인",
        example: "Cause of the fire.",
        ex_meaning: "화재의 원인."
      }
    ],
    derivatives: []
  },
  {
    day: 13,
    num: 18,
    word: "commentary",
    definitions: [
      {
        pos: "n.",
        meaning: "해설, 설명",
        example: "Running commentary.",
        ex_meaning: "실황 해설."
      }
    ],
    derivatives: [
      {
        word: "comment",
        pos: "v.",
        meaning: "논평하다",
        example: "Comment on the issue.",
        ex_meaning: "이슈에 대해 논평하다."
      },
      {
        word: "commentator",
        pos: "n.",
        meaning: "해설자",
        example: "Sports commentator.",
        ex_meaning: "스포츠 해설자."
      }
    ]
  },
  {
    day: 13,
    num: 19,
    word: "notification",
    definitions: [
      {
        pos: "n.",
        meaning: "통지",
        example: "Receive notification.",
        ex_meaning: "통지를 받다."
      }
    ],
    derivatives: [
      {
        word: "notify",
        pos: "v.",
        meaning: "통지하다",
        example: "Notify the police.",
        ex_meaning: "경찰에 알리다."
      }
    ]
  },
  {
    day: 13,
    num: 20,
    word: "apologize",
    definitions: [
      {
        pos: "v.",
        meaning: "사과하다",
        example: "Apologize for the mistake.",
        ex_meaning: "실수에 대해 사과하다."
      }
    ],
    derivatives: [
      {
        word: "apology",
        pos: "n.",
        meaning: "사과",
        example: "Accept an apology.",
        ex_meaning: "사과를 받아들이다."
      }
    ]
  },
  {
    day: 13,
    num: 21,
    word: "interact",
    definitions: [
      {
        pos: "v.",
        meaning: "소통하다, 교류하다; 상호 작용하다",
        example: "Interact with colleagues.",
        ex_meaning: "동료들과 소통하다."
      }
    ],
    derivatives: [
      {
        word: "interaction",
        pos: "n.",
        meaning: "상호 작용",
        example: "Social interaction.",
        ex_meaning: "사회적 상호 작용."
      }
    ]
  },
  {
    day: 13,
    num: 22,
    word: "certain",
    definitions: [
      {
        pos: "adj.",
        meaning: "확신하는, 확실한; 특정한",
        example: "Certain of the outcome.",
        ex_meaning: "결과를 확신하는."
      }
    ],
    derivatives: [
      {
        word: "certainty",
        pos: "n.",
        meaning: "확실성",
        example: "With certainty.",
        ex_meaning: "확실히."
      },
      {
        word: "certainly",
        pos: "adv.",
        meaning: "확실히",
        example: "Certainly correct.",
        ex_meaning: "확실히 맞는."
      }
    ]
  },
  {
    day: 13,
    num: 23,
    word: "commitment",
    definitions: [
      {
        pos: "n.",
        meaning: "헌신, 전념",
        example: "Commitment to quality.",
        ex_meaning: "품질에 대한 헌신."
      }
    ],
    derivatives: [
      {
        word: "commit",
        pos: "v.",
        meaning: "전념하다, 저지르다",
        example: "Commit to a goal.",
        ex_meaning: "목표에 전념하다."
      },
      {
        word: "committed",
        pos: "adj.",
        meaning: "헌신적인",
        example: "Committed worker.",
        ex_meaning: "헌신적인 일꾼."
      }
    ]
  },
  {
    day: 13,
    num: 24,
    word: "applaud",
    definitions: [
      {
        pos: "v.",
        meaning: "~에게 박수를 보내다; 칭찬하다",
        example: "Applaud the decision.",
        ex_meaning: "결정에 박수를 보내다."
      }
    ],
    derivatives: [
      {
        word: "applause",
        pos: "n.",
        meaning: "박수갈채",
        example: "Loud applause.",
        ex_meaning: "큰 박수갈채."
      }
    ]
  },
  {
    day: 13,
    num: 25,
    word: "biography",
    definitions: [
      {
        pos: "n.",
        meaning: "전기, 일대기",
        example: "Read a biography.",
        ex_meaning: "전기를 읽다."
      }
    ],
    derivatives: []
  },
  {
    day: 13,
    num: 26,
    word: "critical",
    definitions: [
      {
        pos: "adj.",
        meaning: "비판적인; 중요한; 위기의",
        example: "Critical of the plan.",
        ex_meaning: "계획에 비판적인."
      }
    ],
    derivatives: [
      {
        word: "criticize",
        pos: "v.",
        meaning: "비판하다",
        example: "Criticize the government.",
        ex_meaning: "정부를 비판하다."
      },
      {
        word: "critic",
        pos: "n.",
        meaning: "비평가",
        example: "Movie critic.",
        ex_meaning: "영화 평론가."
      }
    ]
  },
  {
    day: 13,
    num: 27,
    word: "depend",
    definitions: [
      {
        pos: "v.",
        meaning: "~에 달려 있다, 의존하다",
        example: "Depend on the weather.",
        ex_meaning: "날씨에 달려 있다."
      }
    ],
    derivatives: [
      {
        word: "dependent",
        pos: "adj.",
        meaning: "의존하는",
        example: "Dependent on parents.",
        ex_meaning: "부모에게 의존하는."
      },
      {
        word: "dependable",
        pos: "adj.",
        meaning: "신뢰할 수 있는",
        example: "Dependable car.",
        ex_meaning: "믿을 만한 차."
      }
    ]
  },
  {
    day: 13,
    num: 28,
    word: "combine",
    definitions: [
      {
        pos: "v.",
        meaning: "결합시키다",
        example: "Combine ingredients.",
        ex_meaning: "재료를 섞다."
      }
    ],
    derivatives: [
      {
        word: "combination",
        pos: "n.",
        meaning: "결합, 조합",
        example: "Color combination.",
        ex_meaning: "색상 조합."
      }
    ]
  },
  {
    day: 13,
    num: 29,
    word: "priority",
    definitions: [
      {
        pos: "n.",
        meaning: "우선권, 우선 사항",
        example: "Top priority.",
        ex_meaning: "최우선 사항."
      }
    ],
    derivatives: [
      {
        word: "prioritize",
        pos: "v.",
        meaning: "우선순위를 매기다",
        example: "Prioritize tasks.",
        ex_meaning: "업무의 우선순위를 정하다."
      }
    ]
  },
  {
    day: 13,
    num: 30,
    word: "observe",
    definitions: [
      {
        pos: "v.",
        meaning: "관찰하다; (규칙을) 준수하다",
        example: "Observe the rules.",
        ex_meaning: "규칙을 준수하다."
      }
    ],
    derivatives: [
      {
        word: "observation",
        pos: "n.",
        meaning: "관찰",
        example: "Under observation.",
        ex_meaning: "관찰 중인."
      },
      {
        word: "observance",
        pos: "n.",
        meaning: "준수",
        example: "Observance of the law.",
        ex_meaning: "법률 준수."
      }
    ]
  },
  {
    day: 13,
    num: 31,
    word: "defective",
    definitions: [
      {
        pos: "adj.",
        meaning: "결함이 있는",
        example: "Defective product.",
        ex_meaning: "결함이 있는 제품."
      }
    ],
    derivatives: [
      {
        word: "defect",
        pos: "n.",
        meaning: "결함",
        example: "Birth defect.",
        ex_meaning: "선천적 결함."
      }
    ]
  },
  {
    day: 13,
    num: 32,
    word: "reflect",
    definitions: [
      {
        pos: "v.",
        meaning: "반영하다; 반사하다",
        example: "Reflect the changes.",
        ex_meaning: "변화를 반영하다."
      }
    ],
    derivatives: [
      {
        word: "reflection",
        pos: "n.",
        meaning: "반사, 반영",
        example: "Reflection in the water.",
        ex_meaning: "물에 비친 모습."
      }
    ]
  },
  {
    day: 13,
    num: 33,
    word: "attitude",
    definitions: [
      {
        pos: "n.",
        meaning: "태도, 자세",
        example: "Positive attitude.",
        ex_meaning: "긍정적인 태도."
      }
    ],
    derivatives: []
  },
  {
    day: 13,
    num: 34,
    word: "disappoint",
    definitions: [
      {
        pos: "v.",
        meaning: "실망시키다",
        example: "Disappoint the fans.",
        ex_meaning: "팬들을 실망시키다."
      }
    ],
    derivatives: [
      {
        word: "disappointment",
        pos: "n.",
        meaning: "실망",
        example: "Express disappointment.",
        ex_meaning: "실망을 표하다."
      },
      {
        word: "disappointed",
        pos: "adj.",
        meaning: "실망한",
        example: "Disappointed customers.",
        ex_meaning: "실망한 고객들."
      }
    ]
  },
  {
    day: 13,
    num: 35,
    word: "inquire",
    definitions: [
      {
        pos: "v.",
        meaning: "문의하다",
        example: "Inquire about prices.",
        ex_meaning: "가격에 대해 문의하다."
      }
    ],
    derivatives: [
      {
        word: "inquiry",
        pos: "n.",
        meaning: "문의, 조사",
        example: "Make an inquiry.",
        ex_meaning: "문의하다."
      }
    ]
  },
  {
    day: 13,
    num: 36,
    word: "insert",
    definitions: [
      {
        pos: "v.",
        meaning: "삽입하다",
        example: "Insert a coin.",
        ex_meaning: "동전을 넣다."
      }
    ],
    derivatives: [
      {
        word: "insertion",
        pos: "n.",
        meaning: "삽입",
        example: "Insertion of text.",
        ex_meaning: "텍스트 삽입."
      }
    ]
  },
  {
    day: 13,
    num: 37,
    word: "disclose",
    definitions: [
      {
        pos: "v.",
        meaning: "공개하다, 드러내다",
        example: "Disclose information.",
        ex_meaning: "정보를 공개하다."
      }
    ],
    derivatives: [
      {
        word: "disclosure",
        pos: "n.",
        meaning: "폭로, 공개",
        example: "Full disclosure.",
        ex_meaning: "완전 공개."
      }
    ]
  },
  {
    day: 13,
    num: 38,
    word: "guarantee",
    definitions: [
      {
        pos: "v.",
        meaning: "보장하다",
        example: "Guarantee satisfaction.",
        ex_meaning: "만족을 보장하다."
      },
      {
        pos: "n.",
        meaning: "보장, 보증서",
        example: "Money-back guarantee.",
        ex_meaning: "환불 보장."
      }
    ],
    derivatives: []
  },
  {
    day: 13,
    num: 39,
    word: "politely",
    definitions: [
      {
        pos: "adv.",
        meaning: "공손하게, 예의 바르게",
        example: "Ask politely.",
        ex_meaning: "공손하게 묻다."
      }
    ],
    derivatives: [
      {
        word: "polite",
        pos: "adj.",
        meaning: "공손한",
        example: "Polite manner.",
        ex_meaning: "공손한 태도."
      }
    ]
  },
  {
    day: 13,
    num: 40,
    word: "seriously",
    definitions: [
      {
        pos: "adv.",
        meaning: "진지하게",
        example: "Take it seriously.",
        ex_meaning: "그것을 진지하게 받아들이다."
      }
    ],
    derivatives: [
      {
        word: "serious",
        pos: "adj.",
        meaning: "심각한, 진지한",
        example: "Serious problem.",
        ex_meaning: "심각한 문제."
      }
    ]
  },
// ==========================================
  // Day 14: 여행, 항공 (Travel & Airlines)
  // ==========================================
  {
    day: 14,
    num: 1,
    word: "international",
    definitions: [
      {
        pos: "adj.",
        meaning: "국제적인",
        example: "International flight.",
        ex_meaning: "국제선 항공편."
      }
    ],
    derivatives: []
  },
  {
    day: 14,
    num: 2,
    word: "attraction",
    definitions: [
      {
        pos: "n.",
        meaning: "관광 명소",
        example: "Tourist attraction.",
        ex_meaning: "관광 명소."
      }
    ],
    derivatives: [
      {
        word: "attract",
        pos: "v.",
        meaning: "끌다, 유인하다",
        example: "Attract visitors.",
        ex_meaning: "방문객을 유치하다."
      },
      {
        word: "attractive",
        pos: "adj.",
        meaning: "매력적인",
        example: "Attractive price.",
        ex_meaning: "매력적인 가격."
      }
    ]
  },
  {
    day: 14,
    num: 3,
    word: "itinerary",
    definitions: [
      {
        pos: "n.",
        meaning: "여행 일정",
        example: "Travel itinerary.",
        ex_meaning: "여행 일정."
      }
    ],
    derivatives: []
  },
  {
    day: 14,
    num: 4,
    word: "exotic",
    definitions: [
      {
        pos: "adj.",
        meaning: "이국적인, 매혹적인",
        example: "Exotic places.",
        ex_meaning: "이국적인 장소들."
      }
    ],
    derivatives: []
  },
  {
    day: 14,
    num: 5,
    word: "diverse",
    definitions: [
      {
        pos: "adj.",
        meaning: "다양한",
        example: "Diverse culture.",
        ex_meaning: "다양한 문화."
      }
    ],
    derivatives: [
      {
        word: "diversify",
        pos: "v.",
        meaning: "다양화하다",
        example: "Diversify the business.",
        ex_meaning: "사업을 다양화하다."
      },
      {
        word: "diversity",
        pos: "n.",
        meaning: "다양성",
        example: "Cultural diversity.",
        ex_meaning: "문화적 다양성."
      }
    ]
  },
  {
    day: 14,
    num: 6,
    word: "superb",
    definitions: [
      {
        pos: "adj.",
        meaning: "최고의, 뛰어난",
        example: "Superb service.",
        ex_meaning: "최고의 서비스."
      }
    ],
    derivatives: []
  },
  {
    day: 14,
    num: 7,
    word: "baggage",
    definitions: [
      {
        pos: "n.",
        meaning: "수하물",
        example: "Baggage claim.",
        ex_meaning: "수하물 찾는 곳."
      }
    ],
    derivatives: []
  },
  {
    day: 14,
    num: 8,
    word: "destination",
    definitions: [
      {
        pos: "n.",
        meaning: "목적지",
        example: "Final destination.",
        ex_meaning: "최종 목적지."
      }
    ],
    derivatives: [
      {
        word: "destine",
        pos: "v.",
        meaning: "(운명으로) 정해지다",
        example: "Destined to succeed.",
        ex_meaning: "성공할 운명인."
      }
    ]
  },
  {
    day: 14,
    num: 9,
    word: "missing",
    definitions: [
      {
        pos: "adj.",
        meaning: "분실된, 없어진",
        example: "Missing luggage.",
        ex_meaning: "분실된 짐."
      }
    ],
    derivatives: [
      {
        word: "miss",
        pos: "v.",
        meaning: "놓치다; 그리워하다",
        example: "Miss the flight.",
        ex_meaning: "비행기를 놓치다."
      }
    ]
  },
  {
    day: 14,
    num: 10,
    word: "locate",
    definitions: [
      {
        pos: "v.",
        meaning: "(위치를) 찾아내다; ~에 위치하다",
        example: "Locate the store.",
        ex_meaning: "가게 위치를 찾다."
      }
    ],
    derivatives: [
      {
        word: "location",
        pos: "n.",
        meaning: "위치, 장소",
        example: "Strategic location.",
        ex_meaning: "전략적 위치."
      }
    ]
  },
  {
    day: 14,
    num: 11,
    word: "approximately",
    definitions: [
      {
        pos: "adv.",
        meaning: "대략",
        example: "Approximately one hour.",
        ex_meaning: "대략 한 시간."
      }
    ],
    derivatives: [
      {
        word: "approximate",
        pos: "adj.",
        meaning: "대략적인",
        example: "Approximate cost.",
        ex_meaning: "대략적인 비용."
      }
    ]
  },
  {
    day: 14,
    num: 12,
    word: "duty",
    definitions: [
      {
        pos: "n.",
        meaning: "관세, 세금; 의무",
        example: "Duty-free shop.",
        ex_meaning: "면세점."
      }
    ],
    derivatives: []
  },
  {
    day: 14,
    num: 13,
    word: "process",
    definitions: [
      {
        pos: "n.",
        meaning: "과정",
        example: "A complex process.",
        ex_meaning: "복잡한 과정."
      },
      {
        pos: "v.",
        meaning: "처리하다",
        example: "Process the visa.",
        ex_meaning: "비자를 처리하다."
      }
    ],
    derivatives: []
  },
  {
    day: 14,
    num: 14,
    word: "board",
    definitions: [
      {
        pos: "v.",
        meaning: "탑승하다",
        example: "Board the plane.",
        ex_meaning: "비행기에 탑승하다."
      },
      {
        pos: "n.",
        meaning: "이사회",
        example: "Board of directors.",
        ex_meaning: "이사회."
      }
    ],
    derivatives: [
      {
        word: "boarding",
        pos: "n.",
        meaning: "탑승",
        example: "Boarding pass.",
        ex_meaning: "탑승권."
      }
    ]
  },
  {
    day: 14,
    num: 15,
    word: "comfortable",
    definitions: [
      {
        pos: "adj.",
        meaning: "편안한",
        example: "Comfortable seat.",
        ex_meaning: "편안한 좌석."
      }
    ],
    derivatives: [
      {
        word: "comfort",
        pos: "n.",
        meaning: "편안함, 위로",
        example: "Live in comfort.",
        ex_meaning: "안락하게 살다."
      },
      {
        word: "comfortably",
        pos: "adv.",
        meaning: "편안하게",
        example: "Sit comfortably.",
        ex_meaning: "편안하게 앉다."
      }
    ]
  },
  {
    day: 14,
    num: 16,
    word: "declare",
    definitions: [
      {
        pos: "v.",
        meaning: "(세관에서) 신고하다",
        example: "Declare goods.",
        ex_meaning: "물품을 신고하다."
      }
    ],
    derivatives: [
      {
        word: "declaration",
        pos: "n.",
        meaning: "신고, 선언",
        example: "Customs declaration.",
        ex_meaning: "세관 신고."
      }
    ]
  },
  {
    day: 14,
    num: 17,
    word: "specify",
    definitions: [
      {
        pos: "v.",
        meaning: "명시하다",
        example: "Specify the date.",
        ex_meaning: "날짜를 명시하다."
      }
    ],
    derivatives: [
      {
        word: "specific",
        pos: "adj.",
        meaning: "구체적인",
        example: "Specific instructions.",
        ex_meaning: "구체적인 지시."
      },
      {
        word: "specification",
        pos: "n.",
        meaning: "명세서, 사양",
        example: "Product specifications.",
        ex_meaning: "제품 사양."
      }
    ]
  },
  {
    day: 14,
    num: 18,
    word: "depart",
    definitions: [
      {
        pos: "v.",
        meaning: "출발하다",
        example: "Depart on time.",
        ex_meaning: "정시에 출발하다."
      }
    ],
    derivatives: [
      {
        word: "departure",
        pos: "n.",
        meaning: "출발",
        example: "Departure time.",
        ex_meaning: "출발 시간."
      }
    ]
  },
  {
    day: 14,
    num: 19,
    word: "emergency",
    definitions: [
      {
        pos: "n.",
        meaning: "비상 사태",
        example: "In case of emergency.",
        ex_meaning: "비상시에는."
      }
    ],
    derivatives: []
  },
  {
    day: 14,
    num: 20,
    word: "passenger",
    definitions: [
      {
        pos: "n.",
        meaning: "승객",
        example: "Passenger seat.",
        ex_meaning: "조수석(승객 좌석)."
      }
    ],
    derivatives: []
  },
  {
    day: 14,
    num: 21,
    word: "outgoing",
    definitions: [
      {
        pos: "adj.",
        meaning: "(장소를) 출발하는, 떠나는; 외향적인",
        example: "Outgoing flights.",
        ex_meaning: "출발편 항공기."
      }
    ],
    derivatives: []
  },
  {
    day: 14,
    num: 22,
    word: "tightly",
    definitions: [
      {
        pos: "adv.",
        meaning: "단단히, 꽉",
        example: "Hold on tightly.",
        ex_meaning: "꽉 잡다."
      }
    ],
    derivatives: [
      {
        word: "tight",
        pos: "adj.",
        meaning: "단단한, 꽉 끼는",
        example: "Tight schedule.",
        ex_meaning: "빠듯한 일정."
      }
    ]
  },
  {
    day: 14,
    num: 23,
    word: "tour",
    definitions: [
      {
        pos: "n.",
        meaning: "견학, 여행",
        example: "Guided tour.",
        ex_meaning: "가이드 투어."
      },
      {
        pos: "v.",
        meaning: "여행하다",
        example: "Tour the city.",
        ex_meaning: "도시를 여행하다."
      }
    ],
    derivatives: [
      {
        word: "tourist",
        pos: "n.",
        meaning: "관광객",
        example: "Foreign tourists.",
        ex_meaning: "외국인 관광객들."
      }
    ]
  },
  {
    day: 14,
    num: 24,
    word: "carrier",
    definitions: [
      {
        pos: "n.",
        meaning: "항공사, 수송기; 보균자",
        example: "Low-cost carrier.",
        ex_meaning: "저가 항공사."
      }
    ],
    derivatives: [
      {
        word: "carry",
        pos: "v.",
        meaning: "나르다, 지니다",
        example: "Carry a bag.",
        ex_meaning: "가방을 나르다."
      }
    ]
  },
  {
    day: 14,
    num: 25,
    word: "customarily",
    definitions: [
      {
        pos: "adv.",
        meaning: "관례상, 습관적으로",
        example: "Customarily done.",
        ex_meaning: "관례적으로 행해지는."
      }
    ],
    derivatives: [
      {
        word: "customary",
        pos: "adj.",
        meaning: "관례적인",
        example: "Customary greeting.",
        ex_meaning: "관례적인 인사."
      },
      {
        word: "custom",
        pos: "n.",
        meaning: "관습; 세관",
        example: "Local customs.",
        ex_meaning: "지역 관습."
      }
    ]
  },
  {
    day: 14,
    num: 26,
    word: "confuse",
    definitions: [
      {
        pos: "v.",
        meaning: "혼란시키다",
        example: "Don't confuse me.",
        ex_meaning: "나를 헷갈리게 하지 마라."
      }
    ],
    derivatives: [
      {
        word: "confusion",
        pos: "n.",
        meaning: "혼란",
        example: "Cause confusion.",
        ex_meaning: "혼란을 야기하다."
      }
    ]
  },
  {
    day: 14,
    num: 27,
    word: "arrive",
    definitions: [
      {
        pos: "v.",
        meaning: "도착하다",
        example: "Arrive at the airport.",
        ex_meaning: "공항에 도착하다."
      }
    ],
    derivatives: [
      {
        word: "arrival",
        pos: "n.",
        meaning: "도착",
        example: "Arrival time.",
        ex_meaning: "도착 시간."
      }
    ]
  },
  {
    day: 14,
    num: 28,
    word: "brochure",
    definitions: [
      {
        pos: "n.",
        meaning: "(홍보용) 소책자, 브로슈어",
        example: "Travel brochure.",
        ex_meaning: "여행 책자."
      }
    ],
    derivatives: []
  },
  {
    day: 14,
    num: 29,
    word: "involve",
    definitions: [
      {
        pos: "v.",
        meaning: "수반하다, 포함하다; 참여시키다",
        example: "Involve risk.",
        ex_meaning: "위험을 수반하다."
      }
    ],
    derivatives: [
      {
        word: "involvement",
        pos: "n.",
        meaning: "관여, 개입",
        example: "Active involvement.",
        ex_meaning: "적극적인 개입."
      }
    ]
  },
  {
    day: 14,
    num: 30,
    word: "ship",
    definitions: [
      {
        pos: "v.",
        meaning: "(물건을) 수송하다, 선적하다",
        example: "Ship the goods.",
        ex_meaning: "상품을 배송하다."
      },
      {
        pos: "n.",
        meaning: "배, 선박",
        example: "Cruise ship.",
        ex_meaning: "유람선."
      }
    ],
    derivatives: [
      {
        word: "shipment",
        pos: "n.",
        meaning: "선적, 화물",
        example: "Ready for shipment.",
        ex_meaning: "선적 준비가 된."
      }
    ]
  },
  {
    day: 14,
    num: 31,
    word: "suitcase",
    definitions: [
      {
        pos: "n.",
        meaning: "여행 가방",
        example: "Pack a suitcase.",
        ex_meaning: "여행 가방을 싸다."
      }
    ],
    derivatives: []
  },
  {
    day: 14,
    num: 32,
    word: "unavailable",
    definitions: [
      {
        pos: "adj.",
        meaning: "이용할 수 없는, 손에 넣을 수 없는",
        example: "Currently unavailable.",
        ex_meaning: "현재 이용 불가능한."
      }
    ],
    derivatives: [
      {
        word: "available",
        pos: "adj.",
        meaning: "이용 가능한",
        example: "Seats available.",
        ex_meaning: "좌석 이용 가능."
      }
    ]
  },
  {
    day: 14,
    num: 33,
    word: "fill out",
    definitions: [
      {
        pos: "phr.",
        meaning: "(서류에) 기입하다, 작성하다",
        example: "Fill out the form.",
        ex_meaning: "양식을 작성하다."
      }
    ],
    derivatives: []
  },
  {
    day: 14,
    num: 34,
    word: "customs",
    definitions: [
      {
        pos: "n.",
        meaning: "세관",
        example: "Go through customs.",
        ex_meaning: "세관을 통과하다."
      }
    ],
    derivatives: []
  },
  {
    day: 14,
    num: 35,
    word: "away",
    definitions: [
      {
        pos: "adv.",
        meaning: "떨어져서",
        example: "Go away.",
        ex_meaning: "저리 가라(떠나라)."
      }
    ],
    derivatives: []
  },
  {
    day: 14,
    num: 36,
    word: "dramatic",
    definitions: [
      {
        pos: "adj.",
        meaning: "멋진, 극적인; 급격한",
        example: "Dramatic scenery.",
        ex_meaning: "멋진 풍경."
      }
    ],
    derivatives: [
      {
        word: "dramatically",
        pos: "adv.",
        meaning: "극적으로",
        example: "Changed dramatically.",
        ex_meaning: "극적으로 변했다."
      }
    ]
  },
  {
    day: 14,
    num: 37,
    word: "hospitality",
    definitions: [
      {
        pos: "n.",
        meaning: "환대, 친절",
        example: "Hospitality industry.",
        ex_meaning: "서비스업(호텔/식당 등)."
      }
    ],
    derivatives: [
      {
        word: "hospitable",
        pos: "adj.",
        meaning: "환대하는",
        example: "Hospitable host.",
        ex_meaning: "환대하는 주인."
      }
    ]
  },
  {
    day: 14,
    num: 38,
    word: "indulge",
    definitions: [
      {
        pos: "v.",
        meaning: "빠지다, 탐닉하다",
        example: "Indulge in luxury.",
        ex_meaning: "사치에 빠지다."
      }
    ],
    derivatives: [
      {
        word: "indulgence",
        pos: "n.",
        meaning: "탐닉",
        example: "Self-indulgence.",
        ex_meaning: "방종(제멋대로 함)."
      }
    ]
  },
  {
    day: 14,
    num: 39,
    word: "proximity",
    definitions: [
      {
        pos: "n.",
        meaning: "가까움, 근접",
        example: "In close proximity.",
        ex_meaning: "아주 가까이에."
      }
    ],
    derivatives: []
  },
  {
    day: 14,
    num: 40,
    word: "seating",
    definitions: [
      {
        pos: "n.",
        meaning: "(집합적) 좌석 설비; 좌석 배열",
        example: "Seating capacity.",
        ex_meaning: "좌석 수용력."
      }
    ],
    derivatives: [
      {
        word: "seat",
        pos: "n.",
        meaning: "좌석",
        example: "Take a seat.",
        ex_meaning: "자리에 앉다."
      }
    ]
  },
  {
    day: 14,
    num: 41,
    word: "unlimited",
    definitions: [
      {
        pos: "adj.",
        meaning: "무제한의",
        example: "Unlimited access.",
        ex_meaning: "무제한 접근."
      }
    ],
    derivatives: [
      {
        word: "limit",
        pos: "n.",
        meaning: "제한",
        example: "Set a limit.",
        ex_meaning: "제한을 두다."
      }
    ]
  },

  // ==========================================
  // Day 15: 계약, 협상 (Contract & Negotiation)
  // ==========================================
  {
    day: 15,
    num: 1,
    word: "proposal",
    definitions: [
      {
        pos: "n.",
        meaning: "제안, 계획",
        example: "Submit a proposal.",
        ex_meaning: "제안서를 제출하다."
      }
    ],
    derivatives: [
      {
        word: "propose",
        pos: "v.",
        meaning: "제안하다",
        example: "Propose a plan.",
        ex_meaning: "계획을 제안하다."
      }
    ]
  },
  {
    day: 15,
    num: 2,
    word: "alliance",
    definitions: [
      {
        pos: "n.",
        meaning: "동맹, 제휴",
        example: "Form an alliance.",
        ex_meaning: "동맹을 맺다."
      }
    ],
    derivatives: [
      {
        word: "ally",
        pos: "n.",
        meaning: "동맹국, 협력자",
        example: "A close ally.",
        ex_meaning: "가까운 동맹국."
      }
    ]
  },
  {
    day: 15,
    num: 3,
    word: "stipulation",
    definitions: [
      {
        pos: "n.",
        meaning: "계약 조건",
        example: "Contract stipulation.",
        ex_meaning: "계약 조건."
      }
    ],
    derivatives: [
      {
        word: "stipulate",
        pos: "v.",
        meaning: "규정하다",
        example: "The law stipulates that...",
        ex_meaning: "그 법은 ...라고 규정한다."
      }
    ]
  },
  {
    day: 15,
    num: 4,
    word: "term",
    definitions: [
      {
        pos: "n.",
        meaning: "조건; 임기, 기한",
        example: "Terms of the contract.",
        ex_meaning: "계약 조건들."
      }
    ],
    derivatives: []
  },
  {
    day: 15,
    num: 5,
    word: "compromise",
    definitions: [
      {
        pos: "n.",
        meaning: "타협, 화해",
        example: "Reach a compromise.",
        ex_meaning: "타협에 이르다."
      },
      {
        pos: "v.",
        meaning: "타협하다",
        example: "Compromise on quality.",
        ex_meaning: "품질에 대해 타협하다."
      }
    ],
    derivatives: []
  },
  {
    day: 15,
    num: 6,
    word: "negotiation",
    definitions: [
      {
        pos: "n.",
        meaning: "협상, 교섭",
        example: "Under negotiation.",
        ex_meaning: "협상 중인."
      }
    ],
    derivatives: [
      {
        word: "negotiate",
        pos: "v.",
        meaning: "협상하다",
        example: "Negotiate a deal.",
        ex_meaning: "거래를 협상하다."
      },
      {
        word: "negotiator",
        pos: "n.",
        meaning: "협상가",
        example: "Skilled negotiator.",
        ex_meaning: "숙련된 협상가."
      }
    ]
  },
  {
    day: 15,
    num: 7,
    word: "agreement",
    definitions: [
      {
        pos: "n.",
        meaning: "계약, 협정; 합의",
        example: "Sign an agreement.",
        ex_meaning: "계약서에 서명하다."
      }
    ],
    derivatives: [
      {
        word: "agree",
        pos: "v.",
        meaning: "동의하다",
        example: "Agree to the terms.",
        ex_meaning: "조건에 동의하다."
      }
    ]
  },
  {
    day: 15,
    num: 8,
    word: "deadlock",
    definitions: [
      {
        pos: "n.",
        meaning: "교착 상태",
        example: "Break the deadlock.",
        ex_meaning: "교착 상태를 타개하다."
      }
    ],
    derivatives: []
  },
  {
    day: 15,
    num: 9,
    word: "review",
    definitions: [
      {
        pos: "v.",
        meaning: "검토하다",
        example: "Review the document.",
        ex_meaning: "문서를 검토하다."
      },
      {
        pos: "n.",
        meaning: "검토, 논평",
        example: "Peer review.",
        ex_meaning: "동료 평가."
      }
    ],
    derivatives: []
  },
  {
    day: 15,
    num: 10,
    word: "contract",
    definitions: [
      {
        pos: "n.",
        meaning: "계약(서)",
        example: "Sign a contract.",
        ex_meaning: "계약을 체결하다."
      },
      {
        pos: "v.",
        meaning: "계약하다; 수축하다",
        example: "Contract with a supplier.",
        ex_meaning: "공급업체와 계약하다."
      }
    ],
    derivatives: [
      {
        word: "contractor",
        pos: "n.",
        meaning: "계약자, 도급업자",
        example: "General contractor.",
        ex_meaning: "종합 건설 업자."
      }
    ]
  },
  {
    day: 15,
    num: 11,
    word: "signature",
    definitions: [
      {
        pos: "n.",
        meaning: "서명",
        example: "Need a signature.",
        ex_meaning: "서명이 필요하다."
      }
    ],
    derivatives: [
      {
        word: "sign",
        pos: "v.",
        meaning: "서명하다",
        example: "Sign here.",
        ex_meaning: "여기에 서명하시오."
      }
    ]
  },
  {
    day: 15,
    num: 12,
    word: "originally",
    definitions: [
      {
        pos: "adv.",
        meaning: "원래, 처음에는",
        example: "Originally planned.",
        ex_meaning: "당초 계획된."
      }
    ],
    derivatives: [
      {
        word: "origin",
        pos: "n.",
        meaning: "기원",
        example: "Country of origin.",
        ex_meaning: "원산지."
      },
      {
        word: "original",
        pos: "adj.",
        meaning: "원래의, 독창적인",
        example: "Original idea.",
        ex_meaning: "독창적인 아이디어."
      }
    ]
  },
  {
    day: 15,
    num: 13,
    word: "direction",
    definitions: [
      {
        pos: "n.",
        meaning: "방향, 지시",
        example: "Follow directions.",
        ex_meaning: "지시를 따르다."
      }
    ],
    derivatives: [
      {
        word: "direct",
        pos: "v.",
        meaning: "지시하다",
        example: "Direct the traffic.",
        ex_meaning: "교통을 정리하다."
      }
    ]
  },
  {
    day: 15,
    num: 14,
    word: "initially",
    definitions: [
      {
        pos: "adv.",
        meaning: "처음에, 초기에",
        example: "Initially rejected.",
        ex_meaning: "처음에는 거절된."
      }
    ],
    derivatives: [
      {
        word: "initial",
        pos: "adj.",
        meaning: "처음의",
        example: "Initial stage.",
        ex_meaning: "초기 단계."
      },
      {
        word: "initiate",
        pos: "v.",
        meaning: "시작하다",
        example: "Initiate talks.",
        ex_meaning: "회담을 시작하다."
      }
    ]
  },
  {
    day: 15,
    num: 15,
    word: "expire",
    definitions: [
      {
        pos: "v.",
        meaning: "(계약 등이) 만료되다",
        example: "The lease expires soon.",
        ex_meaning: "임대차 계약이 곧 만료된다."
      }
    ],
    derivatives: [
      {
        word: "expiration",
        pos: "n.",
        meaning: "만료",
        example: "Expiration date.",
        ex_meaning: "만료일."
      }
    ]
  },
  {
    day: 15,
    num: 16,
    word: "collaborate",
    definitions: [
      {
        pos: "v.",
        meaning: "협력하다, 공동으로 일하다",
        example: "Collaborate on a project.",
        ex_meaning: "프로젝트에 대해 협력하다."
      }
    ],
    derivatives: [
      {
        word: "collaboration",
        pos: "n.",
        meaning: "협력",
        example: "In collaboration with.",
        ex_meaning: "~와 협력하여."
      },
      {
        word: "collaborator",
        pos: "n.",
        meaning: "협력자",
        example: "Close collaborator.",
        ex_meaning: "긴밀한 협력자."
      }
    ]
  },
  {
    day: 15,
    num: 17,
    word: "dedicate",
    definitions: [
      {
        pos: "v.",
        meaning: "전념하다, 헌신하다; 바치다",
        example: "Dedicate time to study.",
        ex_meaning: "공부에 시간을 바치다."
      }
    ],
    derivatives: [
      {
        word: "dedication",
        pos: "n.",
        meaning: "헌신",
        example: "Dedication to duty.",
        ex_meaning: "임무에 대한 헌신."
      }
    ]
  },
  {
    day: 15,
    num: 18,
    word: "revised",
    definitions: [
      {
        pos: "adj.",
        meaning: "수정된, 개정된",
        example: "Revised edition.",
        ex_meaning: "개정판."
      }
    ],
    derivatives: [
      {
        word: "revise",
        pos: "v.",
        meaning: "수정하다",
        example: "Revise the plan.",
        ex_meaning: "계획을 수정하다."
      }
    ]
  },
  {
    day: 15,
    num: 19,
    word: "imperative",
    definitions: [
      {
        pos: "adj.",
        meaning: "반드시 해야 하는, 필수적인",
        example: "It is imperative to act now.",
        ex_meaning: "지금 행동하는 것이 필수적이다."
      }
    ],
    derivatives: []
  },
  {
    day: 15,
    num: 20,
    word: "cooperatively",
    definitions: [
      {
        pos: "adv.",
        meaning: "협력하여, 협조적으로",
        example: "Work cooperatively.",
        ex_meaning: "협력하여 일하다."
      }
    ],
    derivatives: [
      {
        word: "cooperate",
        pos: "v.",
        meaning: "협력하다",
        example: "Cooperate with the team.",
        ex_meaning: "팀과 협력하다."
      },
      {
        word: "cooperation",
        pos: "n.",
        meaning: "협력",
        example: "Mutual cooperation.",
        ex_meaning: "상호 협력."
      }
    ]
  },
  {
    day: 15,
    num: 21,
    word: "commission",
    definitions: [
      {
        pos: "n.",
        meaning: "수수료; 위원회",
        example: "Sales commission.",
        ex_meaning: "판매 수수료."
      },
      {
        pos: "v.",
        meaning: "의뢰하다, 주문하다",
        example: "Commission a painting.",
        ex_meaning: "그림을 의뢰하다."
      }
    ],
    derivatives: []
  },
  {
    day: 15,
    num: 22,
    word: "omit",
    definitions: [
      {
        pos: "v.",
        meaning: "빠뜨리다, 생략하다",
        example: "Omit details.",
        ex_meaning: "세부 사항을 생략하다."
      }
    ],
    derivatives: [
      {
        word: "omission",
        pos: "n.",
        meaning: "생략, 누락",
        example: "Errors and omissions.",
        ex_meaning: "오류 및 누락."
      }
    ]
  },
  {
    day: 15,
    num: 23,
    word: "conflict",
    definitions: [
      {
        pos: "n.",
        meaning: "대립, 충돌, 갈등",
        example: "Conflict of interest.",
        ex_meaning: "이해관계의 충돌."
      },
      {
        pos: "v.",
        meaning: "대립하다",
        example: "Opinions conflict.",
        ex_meaning: "의견이 대립하다."
      }
    ],
    derivatives: []
  },
  {
    day: 15,
    num: 24,
    word: "renew",
    definitions: [
      {
        pos: "v.",
        meaning: "(계약 등을) 갱신하다",
        example: "Renew a subscription.",
        ex_meaning: "구독을 갱신하다."
      }
    ],
    derivatives: [
      {
        word: "renewal",
        pos: "n.",
        meaning: "갱신",
        example: "Contract renewal.",
        ex_meaning: "계약 갱신."
      }
    ]
  },
  {
    day: 15,
    num: 25,
    word: "proficient",
    definitions: [
      {
        pos: "adj.",
        meaning: "능숙한, 능한",
        example: "Proficient in English.",
        ex_meaning: "영어에 능숙한."
      }
    ],
    derivatives: [
      {
        word: "proficiency",
        pos: "n.",
        meaning: "숙달, 능숙",
        example: "Language proficiency.",
        ex_meaning: "언어 구사 능력."
      }
    ]
  },
  {
    day: 15,
    num: 26,
    word: "confidentiality",
    definitions: [
      {
        pos: "n.",
        meaning: "기밀, 비밀",
        example: "Maintain confidentiality.",
        ex_meaning: "기밀을 유지하다."
      }
    ],
    derivatives: [
      {
        word: "confidential",
        pos: "adj.",
        meaning: "기밀의",
        example: "Confidential data.",
        ex_meaning: "기밀 데이터."
      }
    ]
  },
  {
    day: 15,
    num: 27,
    word: "dispute",
    definitions: [
      {
        pos: "n.",
        meaning: "분쟁, 논쟁",
        example: "Settle a dispute.",
        ex_meaning: "분쟁을 해결하다."
      },
      {
        pos: "v.",
        meaning: "논쟁하다, 반박하다",
        example: "Dispute the claim.",
        ex_meaning: "주장에 반박하다."
      }
    ],
    derivatives: []
  },
  {
    day: 15,
    num: 28,
    word: "objection",
    definitions: [
      {
        pos: "n.",
        meaning: "반대, 이의",
        example: "Raise an objection.",
        ex_meaning: "이의를 제기하다."
      }
    ],
    derivatives: [
      {
        word: "object",
        pos: "v.",
        meaning: "반대하다",
        example: "Object to the plan.",
        ex_meaning: "계획에 반대하다."
      }
    ]
  },
  {
    day: 15,
    num: 29,
    word: "define",
    definitions: [
      {
        pos: "v.",
        meaning: "규정하다, 정의하다",
        example: "Define the terms.",
        ex_meaning: "조건을 규정하다(용어를 정의하다)."
      }
    ],
    derivatives: [
      {
        word: "definition",
        pos: "n.",
        meaning: "정의",
        example: "Clear definition.",
        ex_meaning: "명확한 정의."
      }
    ]
  },
  {
    day: 15,
    num: 30,
    word: "impression",
    definitions: [
      {
        pos: "n.",
        meaning: "인상",
        example: "First impression.",
        ex_meaning: "첫인상."
      }
    ],
    derivatives: [
      {
        word: "impress",
        pos: "v.",
        meaning: "인상을 주다",
        example: "Impress the audience.",
        ex_meaning: "청중에게 인상을 주다."
      },
      {
        word: "impressive",
        pos: "adj.",
        meaning: "인상적인",
        example: "Impressive performance.",
        ex_meaning: "인상적인 성과."
      }
    ]
  },
  {
    day: 15,
    num: 31,
    word: "security",
    definitions: [
      {
        pos: "n.",
        meaning: "보안, 안전, 보호",
        example: "Security guard.",
        ex_meaning: "경비원."
      }
    ],
    derivatives: [
      {
        word: "secure",
        pos: "adj.",
        meaning: "안전한",
        example: "Secure connection.",
        ex_meaning: "안전한 연결."
      },
      {
        word: "securely",
        pos: "adv.",
        meaning: "안전하게",
        example: "Fasten seatbelts securely.",
        ex_meaning: "안전벨트를 단단히 매다."
      }
    ]
  },
  {
    day: 15,
    num: 32,
    word: "option",
    definitions: [
      {
        pos: "n.",
        meaning: "선택권, 옵션",
        example: "Have no option.",
        ex_meaning: "선택의 여지가 없다."
      }
    ],
    derivatives: [
      {
        word: "optional",
        pos: "adj.",
        meaning: "선택적인",
        example: "Optional tour.",
        ex_meaning: "선택 관광."
      }
    ]
  },
  {
    day: 15,
    num: 33,
    word: "proceed",
    definitions: [
      {
        pos: "v.",
        meaning: "진행하다, 나아가다",
        example: "Proceed with the meeting.",
        ex_meaning: "회의를 진행하다."
      }
    ],
    derivatives: [
      {
        word: "process",
        pos: "n.",
        meaning: "과정",
        example: "Legal process.",
        ex_meaning: "법적 절차."
      }
    ]
  },
  {
    day: 15,
    num: 34,
    word: "modify",
    definitions: [
      {
        pos: "v.",
        meaning: "수정하다, 변경하다",
        example: "Modify the design.",
        ex_meaning: "디자인을 수정하다."
      }
    ],
    derivatives: [
      {
        word: "modification",
        pos: "n.",
        meaning: "수정, 변경",
        example: "Make a modification.",
        ex_meaning: "수정을 가하다."
      }
    ]
  },
  {
    day: 15,
    num: 35,
    word: "narrow",
    definitions: [
      {
        pos: "v.",
        meaning: "좁히다",
        example: "Narrow down the list.",
        ex_meaning: "목록을 좁히다."
      },
      {
        pos: "adj.",
        meaning: "좁은",
        example: "Narrow road.",
        ex_meaning: "좁은 길."
      }
    ],
    derivatives: []
  },
  {
    day: 15,
    num: 36,
    word: "bid",
    definitions: [
      {
        pos: "n.",
        meaning: "입찰",
        example: "Win the bid.",
        ex_meaning: "입찰을 따내다."
      },
      {
        pos: "v.",
        meaning: "입찰하다",
        example: "Bid on the project.",
        ex_meaning: "프로젝트에 입찰하다."
      }
    ],
    derivatives: []
  },
  {
    day: 15,
    num: 37,
    word: "settle",
    definitions: [
      {
        pos: "v.",
        meaning: "해결하다, 처리하다; 정착하다",
        example: "Settle the bill.",
        ex_meaning: "계산서를 처리하다(지불하다)."
      }
    ],
    derivatives: [
      {
        word: "settlement",
        pos: "n.",
        meaning: "해결, 합의",
        example: "Reach a settlement.",
        ex_meaning: "합의에 도달하다."
      }
    ]
  },
  {
    day: 15,
    num: 38,
    word: "terminate",
    definitions: [
      {
        pos: "v.",
        meaning: "끝내다, 종결시키다",
        example: "Terminate the contract.",
        ex_meaning: "계약을 종료하다."
      }
    ],
    derivatives: [
      {
        word: "termination",
        pos: "n.",
        meaning: "종료",
        example: "Termination of employment.",
        ex_meaning: "고용 계약 종료."
      }
    ]
  },
  {
    day: 15,
    num: 39,
    word: "challenging",
    definitions: [
      {
        pos: "adj.",
        meaning: "도전적인, 힘든",
        example: "Challenging task.",
        ex_meaning: "힘든 과제."
      }
    ],
    derivatives: [
      {
        word: "challenge",
        pos: "n.",
        meaning: "도전",
        example: "Face a challenge.",
        ex_meaning: "도전에 직면하다."
      }
    ]
  },
  {
    day: 15,
    num: 40,
    word: "foundation",
    definitions: [
      {
        pos: "n.",
        meaning: "토대, 기초; 설립",
        example: "Lay the foundation.",
        ex_meaning: "기초를 놓다."
      }
    ],
    derivatives: [
      {
        word: "found",
        pos: "v.",
        meaning: "설립하다",
        example: "Found a company.",
        ex_meaning: "회사를 설립하다."
      },
      {
        word: "founder",
        pos: "n.",
        meaning: "설립자",
        example: "Company founder.",
        ex_meaning: "회사 설립자."
      }
    ]
  },
// ==========================================
  // Day 16: 쇼핑, 상업 (Shopping & Commerce)
  // ==========================================
  {
    day: 16,
    num: 1,
    word: "completely",
    definitions: [
      {
        pos: "adv.",
        meaning: "전적으로, 완전히",
        example: "Completely different.",
        ex_meaning: "완전히 다른."
      }
    ],
    derivatives: [
      {
        word: "complete",
        pos: "adj.",
        meaning: "완전한",
        example: "Complete silence.",
        ex_meaning: "완전한 침묵."
      },
      {
        word: "completion",
        pos: "n.",
        meaning: "완료",
        example: "Upon completion.",
        ex_meaning: "완료 시에."
      }
    ]
  },
  {
    day: 16,
    num: 2,
    word: "refuse",
    definitions: [
      {
        pos: "v.",
        meaning: "거절하다",
        example: "Refuse an offer.",
        ex_meaning: "제안을 거절하다."
      }
    ],
    derivatives: [
      {
        word: "refusal",
        pos: "n.",
        meaning: "거절",
        example: "Flat refusal.",
        ex_meaning: "단호한 거절."
      }
    ]
  },
  {
    day: 16,
    num: 3,
    word: "temporarily",
    definitions: [
      {
        pos: "adv.",
        meaning: "일시적으로",
        example: "Temporarily closed.",
        ex_meaning: "일시적으로 문을 닫은."
      }
    ],
    derivatives: [
      {
        word: "temporary",
        pos: "adj.",
        meaning: "일시적인, 임시의",
        example: "Temporary job.",
        ex_meaning: "임시직."
      }
    ]
  },
  {
    day: 16,
    num: 4,
    word: "dealer",
    definitions: [
      {
        pos: "n.",
        meaning: "판매업자, 상인",
        example: "Car dealer.",
        ex_meaning: "자동차 판매상."
      }
    ],
    derivatives: [
      {
        word: "deal",
        pos: "v.",
        meaning: "다루다, 거래하다",
        example: "Deal with customers.",
        ex_meaning: "고객을 상대하다."
      },
      {
        word: "dealership",
        pos: "n.",
        meaning: "대리점",
        example: "Authorized dealership.",
        ex_meaning: "공인 대리점."
      }
    ]
  },
  {
    day: 16,
    num: 5,
    word: "bulk",
    definitions: [
      {
        pos: "adj.",
        meaning: "대량의",
        example: "Bulk order.",
        ex_meaning: "대량 주문."
      },
      {
        pos: "n.",
        meaning: "대량, 부피",
        example: "In bulk.",
        ex_meaning: "대량으로."
      }
    ],
    derivatives: []
  },
  {
    day: 16,
    num: 6,
    word: "inventory",
    definitions: [
      {
        pos: "n.",
        meaning: "재고품, 재고 목록",
        example: "Check inventory.",
        ex_meaning: "재고를 확인하다."
      }
    ],
    derivatives: []
  },
  {
    day: 16,
    num: 7,
    word: "short",
    definitions: [
      {
        pos: "adj.",
        meaning: "부족한; 짧은",
        example: "Short of cash.",
        ex_meaning: "현금이 부족한."
      }
    ],
    derivatives: [
      {
        word: "shortage",
        pos: "n.",
        meaning: "부족",
        example: "Water shortage.",
        ex_meaning: "물 부족."
      },
      {
        word: "shorten",
        pos: "v.",
        meaning: "줄이다",
        example: "Shorten the dress.",
        ex_meaning: "드레스를 줄이다."
      }
    ]
  },
  {
    day: 16,
    num: 8,
    word: "cost",
    definitions: [
      {
        pos: "n.",
        meaning: "비용",
        example: "Production cost.",
        ex_meaning: "생산 비용."
      },
      {
        pos: "v.",
        meaning: "비용이 들다",
        example: "It costs a lot.",
        ex_meaning: "비용이 많이 든다."
      }
    ],
    derivatives: [
      {
        word: "costly",
        pos: "adj.",
        meaning: "비싼, 손실이 큰",
        example: "Costly mistake.",
        ex_meaning: "대가가 큰 실수."
      }
    ]
  },
  {
    day: 16,
    num: 9,
    word: "selection",
    definitions: [
      {
        pos: "n.",
        meaning: "선택된 것, 정선품; 선발",
        example: "Wide selection.",
        ex_meaning: "다양한 선택(품목)."
      }
    ],
    derivatives: [
      {
        word: "select",
        pos: "v.",
        meaning: "선택하다",
        example: "Select a winner.",
        ex_meaning: "우승자를 선택하다."
      },
      {
        word: "selective",
        pos: "adj.",
        meaning: "까다로운, 선별적인",
        example: "Selective buyer.",
        ex_meaning: "까다로운 구매자."
      }
    ]
  },
  {
    day: 16,
    num: 10,
    word: "commercial",
    definitions: [
      {
        pos: "adj.",
        meaning: "상업의, 상업적인",
        example: "Commercial building.",
        ex_meaning: "상업용 건물."
      },
      {
        pos: "n.",
        meaning: "광고",
        example: "TV commercial.",
        ex_meaning: "TV 광고."
      }
    ],
    derivatives: [
      {
        word: "commerce",
        pos: "n.",
        meaning: "상업, 무역",
        example: "International commerce.",
        ex_meaning: "국제 무역."
      }
    ]
  },
  {
    day: 16,
    num: 11,
    word: "order",
    definitions: [
      {
        pos: "v.",
        meaning: "주문하다",
        example: "Order online.",
        ex_meaning: "온라인으로 주문하다."
      },
      {
        pos: "n.",
        meaning: "주문, 주문품",
        example: "Place an order.",
        ex_meaning: "주문을 하다."
      }
    ],
    derivatives: []
  },
  {
    day: 16,
    num: 12,
    word: "provide",
    definitions: [
      {
        pos: "v.",
        meaning: "공급하다, 제공하다",
        example: "Provide information.",
        ex_meaning: "정보를 제공하다."
      }
    ],
    derivatives: [
      {
        word: "provision",
        pos: "n.",
        meaning: "공급, 준비",
        example: "Provision of services.",
        ex_meaning: "서비스 제공."
      },
      {
        word: "provider",
        pos: "n.",
        meaning: "공급자",
        example: "Service provider.",
        ex_meaning: "서비스 제공자."
      }
    ]
  },
  {
    day: 16,
    num: 13,
    word: "contact",
    definitions: [
      {
        pos: "v.",
        meaning: "~와 연락하다",
        example: "Contact us.",
        ex_meaning: "우리에게 연락하세요."
      },
      {
        pos: "n.",
        meaning: "연락, 접촉",
        example: "Keep in contact.",
        ex_meaning: "계속 연락하다."
      }
    ],
    derivatives: []
  },
  {
    day: 16,
    num: 14,
    word: "invoice",
    definitions: [
      {
        pos: "n.",
        meaning: "송장, 청구서",
        example: "Send an invoice.",
        ex_meaning: "청구서를 보내다."
      }
    ],
    derivatives: []
  },
  {
    day: 16,
    num: 15,
    word: "move",
    definitions: [
      {
        pos: "v.",
        meaning: "옮기다, 움직이다; 이사하다",
        example: "Move the furniture.",
        ex_meaning: "가구를 옮기다."
      },
      {
        pos: "n.",
        meaning: "조치, 행동",
        example: "A smart move.",
        ex_meaning: "현명한 조치."
      }
    ],
    derivatives: [
      {
        word: "movement",
        pos: "n.",
        meaning: "움직임, 이동",
        example: "Free movement.",
        ex_meaning: "자유로운 이동."
      }
    ]
  },
  {
    day: 16,
    num: 16,
    word: "supply",
    definitions: [
      {
        pos: "v.",
        meaning: "공급하다",
        example: "Supply electricity.",
        ex_meaning: "전기를 공급하다."
      },
      {
        pos: "n.",
        meaning: "공급; 비품, 소모품",
        example: "Office supplies.",
        ex_meaning: "사무 용품."
      }
    ],
    derivatives: [
      {
        word: "supplier",
        pos: "n.",
        meaning: "공급업체",
        example: "Main supplier.",
        ex_meaning: "주요 공급업체."
      }
    ]
  },
  {
    day: 16,
    num: 17,
    word: "discount",
    definitions: [
      {
        pos: "n.",
        meaning: "할인",
        example: "Get a discount.",
        ex_meaning: "할인을 받다."
      },
      {
        pos: "v.",
        meaning: "할인하다",
        example: "Discounted price.",
        ex_meaning: "할인된 가격."
      }
    ],
    derivatives: []
  },
  {
    day: 16,
    num: 18,
    word: "distribute",
    definitions: [
      {
        pos: "v.",
        meaning: "배포하다, 배급하다",
        example: "Distribute flyers.",
        ex_meaning: "전단지를 배포하다."
      }
    ],
    derivatives: [
      {
        word: "distribution",
        pos: "n.",
        meaning: "유통, 배급",
        example: "Distribution network.",
        ex_meaning: "유통망."
      },
      {
        word: "distributor",
        pos: "n.",
        meaning: "유통업자",
        example: "Local distributor.",
        ex_meaning: "지역 유통업자."
      }
    ]
  },
  {
    day: 16,
    num: 19,
    word: "acquisition",
    definitions: [
      {
        pos: "n.",
        meaning: "인수, 획득",
        example: "Mergers and acquisitions.",
        ex_meaning: "인수 합병."
      }
    ],
    derivatives: [
      {
        word: "acquire",
        pos: "v.",
        meaning: "인수하다, 얻다",
        example: "Acquire a company.",
        ex_meaning: "회사를 인수하다."
      }
    ]
  },
  {
    day: 16,
    num: 20,
    word: "assure",
    definitions: [
      {
        pos: "v.",
        meaning: "~에게 보장하다, 장담하다",
        example: "I assure you.",
        ex_meaning: "내가 장담한다."
      }
    ],
    derivatives: [
      {
        word: "assurance",
        pos: "n.",
        meaning: "보장, 확신",
        example: "Quality assurance.",
        ex_meaning: "품질 보증."
      }
    ]
  },
  {
    day: 16,
    num: 21,
    word: "subject",
    definitions: [
      {
        pos: "adj.",
        meaning: "~하기 쉬운, ~의 대상이 되는",
        example: "Subject to change.",
        ex_meaning: "변경될 수 있는(변경의 대상이 되는)."
      },
      {
        pos: "n.",
        meaning: "주제, 과목",
        example: "Favorite subject.",
        ex_meaning: "가장 좋아하는 과목."
      }
    ],
    derivatives: []
  },
  {
    day: 16,
    num: 22,
    word: "seek",
    definitions: [
      {
        pos: "v.",
        meaning: "구하다, 찾다",
        example: "Seek advice.",
        ex_meaning: "조언을 구하다."
      }
    ],
    derivatives: []
  },
  {
    day: 16,
    num: 23,
    word: "satisfactory",
    definitions: [
      {
        pos: "adj.",
        meaning: "만족스러운",
        example: "Satisfactory result.",
        ex_meaning: "만족스러운 결과."
      }
    ],
    derivatives: [
      {
        word: "satisfy",
        pos: "v.",
        meaning: "만족시키다",
        example: "Satisfy needs.",
        ex_meaning: "욕구를 충족시키다."
      },
      {
        word: "satisfaction",
        pos: "n.",
        meaning: "만족",
        example: "Customer satisfaction.",
        ex_meaning: "고객 만족."
      }
    ]
  },
  {
    day: 16,
    num: 24,
    word: "confirmation",
    definitions: [
      {
        pos: "n.",
        meaning: "확인, 확증",
        example: "Booking confirmation.",
        ex_meaning: "예약 확인."
      }
    ],
    derivatives: [
      {
        word: "confirm",
        pos: "v.",
        meaning: "확인하다",
        example: "Confirm the date.",
        ex_meaning: "날짜를 확인하다."
      }
    ]
  },
  {
    day: 16,
    num: 25,
    word: "unable",
    definitions: [
      {
        pos: "adj.",
        meaning: "~할 수 없는",
        example: "Unable to attend.",
        ex_meaning: "참석할 수 없는."
      }
    ],
    derivatives: [
      {
        word: "ability",
        pos: "n.",
        meaning: "능력",
        example: "Ability to pay.",
        ex_meaning: "지불 능력."
      }
    ]
  },
  {
    day: 16,
    num: 26,
    word: "payment",
    definitions: [
      {
        pos: "n.",
        meaning: "지불, 납입",
        example: "Make a payment.",
        ex_meaning: "지불하다."
      }
    ],
    derivatives: [
      {
        word: "pay",
        pos: "v.",
        meaning: "지불하다",
        example: "Pay in cash.",
        ex_meaning: "현금으로 지불하다."
      },
      {
        word: "payable",
        pos: "adj.",
        meaning: "지불해야 하는",
        example: "Payable on demand.",
        ex_meaning: "요구 즉시 지불해야 하는."
      }
    ]
  },
  {
    day: 16,
    num: 27,
    word: "measure",
    definitions: [
      {
        pos: "n.",
        meaning: "대책, 조치",
        example: "Safety measures.",
        ex_meaning: "안전 조치."
      },
      {
        pos: "v.",
        meaning: "측정하다",
        example: "Measure the size.",
        ex_meaning: "크기를 측정하다."
      }
    ],
    derivatives: [
      {
        word: "measurement",
        pos: "n.",
        meaning: "측정, 치수",
        example: "Take measurements.",
        ex_meaning: "치수를 재다."
      }
    ]
  },
  {
    day: 16,
    num: 28,
    word: "bargain",
    definitions: [
      {
        pos: "n.",
        meaning: "특가품, 흥정",
        example: "A real bargain.",
        ex_meaning: "진짜 특가품."
      },
      {
        pos: "v.",
        meaning: "흥정하다",
        example: "Bargain over the price.",
        ex_meaning: "가격을 흥정하다."
      }
    ],
    derivatives: []
  },
  {
    day: 16,
    num: 29,
    word: "stock",
    definitions: [
      {
        pos: "n.",
        meaning: "재고; 주식",
        example: "Out of stock.",
        ex_meaning: "품절된(재고가 없는)."
      },
      {
        pos: "v.",
        meaning: "비축하다",
        example: "Stock up on food.",
        ex_meaning: "식량을 비축하다."
      }
    ],
    derivatives: []
  },
  {
    day: 16,
    num: 30,
    word: "affordability",
    definitions: [
      {
        pos: "n.",
        meaning: "감당할 수 있는 비용, 저렴함",
        example: "Affordability of housing.",
        ex_meaning: "주택 가격의 적정성."
      }
    ],
    derivatives: [
      {
        word: "afford",
        pos: "v.",
        meaning: "~할 여유가 있다",
        example: "Can afford a car.",
        ex_meaning: "차를 살 여유가 있다."
      },
      {
        word: "affordable",
        pos: "adj.",
        meaning: "저렴한, 알맞은",
        example: "Affordable rates.",
        ex_meaning: "저렴한 요금."
      }
    ]
  },
  {
    day: 16,
    num: 31,
    word: "clientele",
    definitions: [
      {
        pos: "n.",
        meaning: "(집합적) 고객들, 의뢰인",
        example: "Wealthy clientele.",
        ex_meaning: "부유한 고객층."
      }
    ],
    derivatives: [
      {
        word: "client",
        pos: "n.",
        meaning: "고객",
        example: "Regular client.",
        ex_meaning: "단골 고객."
      }
    ]
  },
  {
    day: 16,
    num: 32,
    word: "acclaim",
    definitions: [
      {
        pos: "n.",
        meaning: "호평, 찬사",
        example: "Critical acclaim.",
        ex_meaning: "비평가의 호평."
      },
      {
        pos: "v.",
        meaning: "갈채를 보내다",
        example: "Acclaimed writer.",
        ex_meaning: "호평받는 작가."
      }
    ],
    derivatives: []
  },
  {
    day: 16,
    num: 33,
    word: "represent",
    definitions: [
      {
        pos: "v.",
        meaning: "대표하다, 대신하다",
        example: "Represent the company.",
        ex_meaning: "회사를 대표하다."
      }
    ],
    derivatives: [
      {
        word: "representative",
        pos: "n.",
        meaning: "대표자, 직원",
        example: "Sales representative.",
        ex_meaning: "영업 사원."
      },
      {
        word: "representation",
        pos: "n.",
        meaning: "대표, 묘사",
        example: "Legal representation.",
        ex_meaning: "법적 대리."
      }
    ]
  },
  {
    day: 16,
    num: 34,
    word: "rating",
    definitions: [
      {
        pos: "n.",
        meaning: "등급, 평가",
        example: "Credit rating.",
        ex_meaning: "신용 등급."
      }
    ],
    derivatives: [
      {
        word: "rate",
        pos: "v.",
        meaning: "평가하다",
        example: "Rate the service.",
        ex_meaning: "서비스를 평가하다."
      }
    ]
  },
  {
    day: 16,
    num: 35,
    word: "encompass",
    definitions: [
      {
        pos: "v.",
        meaning: "포함하다, 아우르다",
        example: "Encompass various topics.",
        ex_meaning: "다양한 주제를 아우르다."
      }
    ],
    derivatives: []
  },
  {
    day: 16,
    num: 36,
    word: "finalize",
    definitions: [
      {
        pos: "v.",
        meaning: "마무리하다, 완결하다",
        example: "Finalize the deal.",
        ex_meaning: "거래를 마무리하다."
      }
    ],
    derivatives: [
      {
        word: "final",
        pos: "adj.",
        meaning: "최종의",
        example: "Final decision.",
        ex_meaning: "최종 결정."
      },
      {
        word: "finally",
        pos: "adv.",
        meaning: "마침내",
        example: "Finally arrived.",
        ex_meaning: "마침내 도착했다."
      }
    ]
  },
  {
    day: 16,
    num: 37,
    word: "market",
    definitions: [
      {
        pos: "n.",
        meaning: "시장",
        example: "Target market.",
        ex_meaning: "표적 시장."
      },
      {
        pos: "v.",
        meaning: "시장에 내놓다, 광고하다",
        example: "Market a product.",
        ex_meaning: "제품을 광고하다."
      }
    ],
    derivatives: []
  },
  {
    day: 16,
    num: 38,
    word: "retail",
    definitions: [
      {
        pos: "n.",
        meaning: "소매",
        example: "Retail price.",
        ex_meaning: "소매 가격."
      }
    ],
    derivatives: [
      {
        word: "retailer",
        pos: "n.",
        meaning: "소매업자",
        example: "Online retailer.",
        ex_meaning: "온라인 소매업체."
      }
    ]
  },
  {
    day: 16,
    num: 39,
    word: "commodity",
    definitions: [
      {
        pos: "n.",
        meaning: "상품, 원자재",
        example: "Agricultural commodities.",
        ex_meaning: "농산물(원자재)."
      }
    ],
    derivatives: []
  },
  {
    day: 16,
    num: 40,
    word: "quote",
    definitions: [
      {
        pos: "n.",
        meaning: "견적(액)",
        example: "Get a quote.",
        ex_meaning: "견적을 받다."
      },
      {
        pos: "v.",
        meaning: "견적을 내다; 인용하다",
        example: "Quote a price.",
        ex_meaning: "가격을 부르다(견적 내다)."
      }
    ],
    derivatives: [
      {
        word: "quotation",
        pos: "n.",
        meaning: "견적, 인용",
        example: "Price quotation.",
        ex_meaning: "가격 견적."
      }
    ]
  },

  // ==========================================
  // Day 17: 배송, 물류 (Shipping & Logistics)
  // ==========================================
  {
    day: 17,
    num: 1,
    word: "fragile",
    definitions: [
      {
        pos: "adj.",
        meaning: "깨지기 쉬운",
        example: "Fragile handle with care.",
        ex_meaning: "취급 주의(깨지기 쉬움)."
      }
    ],
    derivatives: []
  },
  {
    day: 17,
    num: 2,
    word: "perishable",
    definitions: [
      {
        pos: "adj.",
        meaning: "부패하기 쉬운",
        example: "Perishable goods.",
        ex_meaning: "상하기 쉬운 물품."
      }
    ],
    derivatives: [
      {
        word: "perish",
        pos: "v.",
        meaning: "소멸하다, 썩다",
        example: "Perish in the fire.",
        ex_meaning: "화재로 소멸하다."
      }
    ]
  },
  {
    day: 17,
    num: 3,
    word: "deliver",
    definitions: [
      {
        pos: "v.",
        meaning: "배달하다; (연설을) 하다",
        example: "Deliver a speech.",
        ex_meaning: "연설을 하다."
      }
    ],
    derivatives: [
      {
        word: "delivery",
        pos: "n.",
        meaning: "배달",
        example: "Express delivery.",
        ex_meaning: "빠른 배달."
      }
    ]
  },
  {
    day: 17,
    num: 4,
    word: "ensure",
    definitions: [
      {
        pos: "v.",
        meaning: "확실하게 하다, 보장하다",
        example: "Ensure safety.",
        ex_meaning: "안전을 보장하다."
      }
    ],
    derivatives: []
  },
  {
    day: 17,
    num: 5,
    word: "courier",
    definitions: [
      {
        pos: "n.",
        meaning: "급송 택배, 운반원",
        example: "Send by courier.",
        ex_meaning: "택배로 보내다."
      }
    ],
    derivatives: []
  },
  {
    day: 17,
    num: 6,
    word: "carton",
    definitions: [
      {
        pos: "n.",
        meaning: "(큰) 판지 상자",
        example: "A carton of milk.",
        ex_meaning: "우유 한 팩(상자)."
      }
    ],
    derivatives: []
  },
  {
    day: 17,
    num: 7,
    word: "address",
    definitions: [
      {
        pos: "n.",
        meaning: "주소",
        example: "Email address.",
        ex_meaning: "이메일 주소."
      },
      {
        pos: "v.",
        meaning: "(어려운 문제 등을) 처리하다, 다루다",
        example: "Address the issue.",
        ex_meaning: "문제를 다루다."
      }
    ],
    derivatives: []
  },
  {
    day: 17,
    num: 8,
    word: "shipment",
    definitions: [
      {
        pos: "n.",
        meaning: "선적, (화물의) 발송; 수송품",
        example: "Delay in shipment.",
        ex_meaning: "선적 지연."
      }
    ],
    derivatives: [
      {
        word: "ship",
        pos: "v.",
        meaning: "배송하다",
        example: "Ship overseas.",
        ex_meaning: "해외로 배송하다."
      }
    ]
  },
  {
    day: 17,
    num: 9,
    word: "particularly",
    definitions: [
      {
        pos: "adv.",
        meaning: "특히",
        example: "Particularly interested.",
        ex_meaning: "특히 관심이 있는."
      }
    ],
    derivatives: [
      {
        word: "particular",
        pos: "adj.",
        meaning: "특정한, 특별한",
        example: "In particular.",
        ex_meaning: "특히."
      }
    ]
  },
  {
    day: 17,
    num: 10,
    word: "adequately",
    definitions: [
      {
        pos: "adv.",
        meaning: "적절하게, 충분히",
        example: "Adequately prepared.",
        ex_meaning: "충분히 준비된."
      }
    ],
    derivatives: [
      {
        word: "adequate",
        pos: "adj.",
        meaning: "적절한, 충분한",
        example: "Adequate resources.",
        ex_meaning: "충분한 자원."
      }
    ]
  },
  {
    day: 17,
    num: 11,
    word: "article",
    definitions: [
      {
        pos: "n.",
        meaning: "물품, 기사; 조항",
        example: "An article of clothing.",
        ex_meaning: "의류 한 점."
      }
    ],
    derivatives: []
  },
  {
    day: 17,
    num: 12,
    word: "efficient",
    definitions: [
      {
        pos: "adj.",
        meaning: "효율적인, 능률적인",
        example: "Efficient system.",
        ex_meaning: "효율적인 시스템."
      }
    ],
    derivatives: [
      {
        word: "efficiency",
        pos: "n.",
        meaning: "효율성",
        example: "Improve efficiency.",
        ex_meaning: "효율성을 높이다."
      },
      {
        word: "efficiently",
        pos: "adv.",
        meaning: "효율적으로",
        example: "Work efficiently.",
        ex_meaning: "효율적으로 일하다."
      }
    ]
  },
  {
    day: 17,
    num: 13,
    word: "agency",
    definitions: [
      {
        pos: "n.",
        meaning: "대행 회사, 대리점",
        example: "Travel agency.",
        ex_meaning: "여행사."
      }
    ],
    derivatives: [
      {
        word: "agent",
        pos: "n.",
        meaning: "대리인, 중개인",
        example: "Real estate agent.",
        ex_meaning: "부동산 중개인."
      }
    ]
  },
  {
    day: 17,
    num: 14,
    word: "enclose",
    definitions: [
      {
        pos: "v.",
        meaning: "~을 동봉하다; 둘러싸다",
        example: "Enclose a check.",
        ex_meaning: "수표를 동봉하다."
      }
    ],
    derivatives: [
      {
        word: "enclosure",
        pos: "n.",
        meaning: "동봉(물), 울타리",
        example: "See enclosure.",
        ex_meaning: "동봉물 참조."
      }
    ]
  },
  {
    day: 17,
    num: 15,
    word: "careful",
    definitions: [
      {
        pos: "adj.",
        meaning: "조심스러운, 주의 깊은",
        example: "Be careful with fire.",
        ex_meaning: "불조심해라."
      }
    ],
    derivatives: [
      {
        word: "care",
        pos: "n.",
        meaning: "주의, 돌봄",
        example: "Handle with care.",
        ex_meaning: "취급 주의."
      },
      {
        word: "carefully",
        pos: "adv.",
        meaning: "주의 깊게",
        example: "Listen carefully.",
        ex_meaning: "주의 깊게 들어라."
      }
    ]
  },
  {
    day: 17,
    num: 16,
    word: "pick up",
    definitions: [
      {
        pos: "phr.",
        meaning: "~을 찾다, 도중에 태우다; 집어 올리다",
        example: "Pick up the package.",
        ex_meaning: "소포를 찾아오다."
      }
    ],
    derivatives: []
  },
  {
    day: 17,
    num: 17,
    word: "carry",
    definitions: [
      {
        pos: "v.",
        meaning: "지니다, 나르다; (가게에서 물건을) 취급하다",
        example: "We don't carry that item.",
        ex_meaning: "우리는 그 품목을 취급하지 않습니다."
      }
    ],
    derivatives: []
  },
  {
    day: 17,
    num: 18,
    word: "attach",
    definitions: [
      {
        pos: "v.",
        meaning: "붙이다, 첨부하다",
        example: "Attach a file.",
        ex_meaning: "파일을 첨부하다."
      }
    ],
    derivatives: [
      {
        word: "attachment",
        pos: "n.",
        meaning: "첨부(파일), 부착",
        example: "Email attachment.",
        ex_meaning: "이메일 첨부파일."
      }
    ]
  },
  {
    day: 17,
    num: 19,
    word: "formerly",
    definitions: [
      {
        pos: "adv.",
        meaning: "이전에",
        example: "Formerly known as...",
        ex_meaning: "이전에는 ...로 알려진."
      }
    ],
    derivatives: [
      {
        word: "former",
        pos: "adj.",
        meaning: "이전의, 전자의",
        example: "Former president.",
        ex_meaning: "전 대통령."
      }
    ]
  },
  {
    day: 17,
    num: 20,
    word: "package",
    definitions: [
      {
        pos: "n.",
        meaning: "소포, 꾸러미",
        example: "Send a package.",
        ex_meaning: "소포를 보내다."
      }
    ],
    derivatives: []
  },
  {
    day: 17,
    num: 21,
    word: "react",
    definitions: [
      {
        pos: "v.",
        meaning: "반응하다",
        example: "React quickly.",
        ex_meaning: "빠르게 반응하다."
      }
    ],
    derivatives: [
      {
        word: "reaction",
        pos: "n.",
        meaning: "반응",
        example: "Chemical reaction.",
        ex_meaning: "화학 반응."
      }
    ]
  },
  {
    day: 17,
    num: 22,
    word: "content",
    definitions: [
      {
        pos: "n.",
        meaning: "내용물",
        example: "Table of contents.",
        ex_meaning: "목차."
      }
    ],
    derivatives: []
  },
  {
    day: 17,
    num: 23,
    word: "convenience",
    definitions: [
      {
        pos: "n.",
        meaning: "편의, 편리",
        example: "For your convenience.",
        ex_meaning: "당신의 편의를 위해."
      }
    ],
    derivatives: [
      {
        word: "convenient",
        pos: "adj.",
        meaning: "편리한",
        example: "Convenient time.",
        ex_meaning: "편리한 시간."
      }
    ]
  },
  {
    day: 17,
    num: 24,
    word: "acknowledge",
    definitions: [
      {
        pos: "v.",
        meaning: "인정하다; (편지 등의) 수령을 알리다",
        example: "Acknowledge receipt.",
        ex_meaning: "수령을 알리다(확인하다)."
      }
    ],
    derivatives: [
      {
        word: "acknowledgment",
        pos: "n.",
        meaning: "인정, 수령 통지",
        example: "Letter of acknowledgment.",
        ex_meaning: "수령 통지서."
      }
    ]
  },
  {
    day: 17,
    num: 25,
    word: "caution",
    definitions: [
      {
        pos: "n.",
        meaning: "주의, 조심",
        example: "Proceed with caution.",
        ex_meaning: "조심해서 진행하다."
      },
      {
        pos: "v.",
        meaning: "주의를 주다",
        example: "Caution him against...",
        ex_meaning: "그에게 ...하지 않도록 주의를 주다."
      }
    ],
    derivatives: [
      {
        word: "cautious",
        pos: "adj.",
        meaning: "조심하는",
        example: "Cautious optimism.",
        ex_meaning: "조심스러운 낙관."
      }
    ]
  },
  {
    day: 17,
    num: 26,
    word: "correspondence",
    definitions: [
      {
        pos: "n.",
        meaning: "편지, 통신문",
        example: "Business correspondence.",
        ex_meaning: "사업 서신."
      }
    ],
    derivatives: [
      {
        word: "correspond",
        pos: "v.",
        meaning: "일치하다; 서신을 교환하다",
        example: "Correspond with friends.",
        ex_meaning: "친구들과 편지를 주고받다."
      }
    ]
  },
  {
    day: 17,
    num: 27,
    word: "separate",
    definitions: [
      {
        pos: "v.",
        meaning: "분리하다",
        example: "Separate waste.",
        ex_meaning: "쓰레기를 분리하다."
      },
      {
        pos: "adj.",
        meaning: "분리된, 별개의",
        example: "Separate entrance.",
        ex_meaning: "별도의 출입구."
      }
    ],
    derivatives: [
      {
        word: "separation",
        pos: "n.",
        meaning: "분리",
        example: "Separation of powers.",
        ex_meaning: "권력 분립."
      }
    ]
  },
  {
    day: 17,
    num: 28,
    word: "remarkable",
    definitions: [
      {
        pos: "adj.",
        meaning: "현저한, 놀라운",
        example: "Remarkable achievement.",
        ex_meaning: "놀라운 성취."
      }
    ],
    derivatives: [
      {
        word: "remark",
        pos: "v.",
        meaning: "언급하다",
        example: "Remark on the weather.",
        ex_meaning: "날씨에 대해 언급하다."
      },
      {
        word: "remarkably",
        pos: "adv.",
        meaning: "놀랍게도, 현저하게",
        example: "Remarkably successful.",
        ex_meaning: "놀랍도록 성공적인."
      }
    ]
  },
  {
    day: 17,
    num: 29,
    word: "handle",
    definitions: [
      {
        pos: "v.",
        meaning: "취급하다, 다루다",
        example: "Handle complaints.",
        ex_meaning: "불만 사항을 처리하다."
      }
    ],
    derivatives: []
  },
  {
    day: 17,
    num: 30,
    word: "warehouse",
    definitions: [
      {
        pos: "n.",
        meaning: "창고",
        example: "Store in a warehouse.",
        ex_meaning: "창고에 보관하다."
      }
    ],
    derivatives: []
  },
  {
    day: 17,
    num: 31,
    word: "impose",
    definitions: [
      {
        pos: "v.",
        meaning: "(세금 등을) 부과하다",
        example: "Impose a tax.",
        ex_meaning: "세금을 부과하다."
      }
    ],
    derivatives: [
      {
        word: "imposition",
        pos: "n.",
        meaning: "부과, 부담",
        example: "Imposition of fines.",
        ex_meaning: "벌금 부과."
      }
    ]
  },
  {
    day: 17,
    num: 32,
    word: "storage",
    definitions: [
      {
        pos: "n.",
        meaning: "보관, 저장소",
        example: "In storage.",
        ex_meaning: "보관 중인."
      }
    ],
    derivatives: [
      {
        word: "store",
        pos: "v.",
        meaning: "저장하다",
        example: "Store data.",
        ex_meaning: "데이터를 저장하다."
      }
    ]
  },
  {
    day: 17,
    num: 33,
    word: "detach",
    definitions: [
      {
        pos: "v.",
        meaning: "떼다, 분리하다",
        example: "Detach the coupon.",
        ex_meaning: "쿠폰을 떼어내다."
      }
    ],
    derivatives: [
      {
        word: "attached",
        pos: "adj.",
        meaning: "첨부된 (반의어)",
        example: "Attached file.",
        ex_meaning: "첨부 파일."
      }
    ]
  },
  {
    day: 17,
    num: 34,
    word: "envelope",
    definitions: [
      {
        pos: "n.",
        meaning: "봉투",
        example: "Sealed envelope.",
        ex_meaning: "밀봉된 봉투."
      }
    ],
    derivatives: []
  },
  {
    day: 17,
    num: 35,
    word: "exclusion",
    definitions: [
      {
        pos: "n.",
        meaning: "제외, 배제",
        example: "Exclusion zone.",
        ex_meaning: "출입 금지 구역."
      }
    ],
    derivatives: [
      {
        word: "exclude",
        pos: "v.",
        meaning: "제외하다",
        example: "Exclude the cost.",
        ex_meaning: "비용을 제외하다."
      },
      {
        word: "exclusive",
        pos: "adj.",
        meaning: "배타적인, 독점적인",
        example: "Exclusive interview.",
        ex_meaning: "독점 인터뷰."
      }
    ]
  },
  {
    day: 17,
    num: 36,
    word: "recipient",
    definitions: [
      {
        pos: "n.",
        meaning: "수신자",
        example: "The recipient of the letter.",
        ex_meaning: "편지 수신자."
      }
    ],
    derivatives: [
      {
        word: "receive",
        pos: "v.",
        meaning: "받다",
        example: "Receive a package.",
        ex_meaning: "소포를 받다."
      }
    ]
  },
  {
    day: 17,
    num: 37,
    word: "affix",
    definitions: [
      {
        pos: "v.",
        meaning: "(우표 등을) 붙이다",
        example: "Affix a stamp.",
        ex_meaning: "우표를 붙이다."
      }
    ],
    derivatives: []
  },
  {
    day: 17,
    num: 38,
    word: "incorrect",
    definitions: [
      {
        pos: "adj.",
        meaning: "부정확한",
        example: "Incorrect information.",
        ex_meaning: "부정확한 정보."
      }
    ],
    derivatives: [
      {
        word: "correct",
        pos: "adj.",
        meaning: "정확한 (반의어)",
        example: "Correct answer.",
        ex_meaning: "정답."
      }
    ]
  },
  {
    day: 17,
    num: 39,
    word: "oblige",
    definitions: [
      {
        pos: "v.",
        meaning: "~에게 강요하다, 어쩔 수 없이 ~하게 하다",
        example: "Obliged to pay.",
        ex_meaning: "지불할 의무가 있는."
      }
    ],
    derivatives: [
      {
        word: "obligation",
        pos: "n.",
        meaning: "의무",
        example: "Moral obligation.",
        ex_meaning: "도덕적 의무."
      },
      {
        word: "obligatory",
        pos: "adj.",
        meaning: "의무적인",
        example: "Obligatory military service.",
        ex_meaning: "의무 병역."
      }
    ]
  },
  {
    day: 17,
    num: 40,
    word: "step",
    definitions: [
      {
        pos: "n.",
        meaning: "단계; 조치, 수단",
        example: "Take steps.",
        ex_meaning: "조치를 취하다."
      }
    ],
    derivatives: []
  },

];