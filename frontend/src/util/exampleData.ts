import type { Course } from "../components/Search";

export const exampleCourses: Course[] = [
  {
    "course_id": "406-2005-AAL",
    "title": "Algebra I and II",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "Enrolment ONLY for MSc students with a decree declaring this course unit as an additional admission requirement.Any other students (e.g. incoming exchange students, doctoral students) CANNOT enrol for this course unit.",
    "lecturers": [
      "L. Halbeisen",
      "C. Urech"
    ],
    "classes": [
      {
        "type": "Revision course / private study",
        "notes": "Self-study course. No presence required.",
        "hours_per_week": 360,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Introduction and development of some basic algebraic structures - groups, rings, fields including Galois theory, representations of finite groups, algebras.\nThe precise content changes with the examiner. Candidates must therefore contact the examiner in person before studying the material.",
      "learning_objectives": "",
      "content": "Basic notions and examples of groups;\n Subgroups, Quotient groups  and Homomorphisms,\n Group actions and applications\nBasic notions and examples of rings;\n Ring Homomorphisms,\n ideals, and quotient rings, rings of fractions\n Euclidean domains, Principal ideal domains, Unique factorization\ndomains\n  Basic notions and examples of fields;\n Field extensions, Algebraic extensions, Classical straight edge and compass constructions\nFundamentals of Galois theory\nRepresentation theory of finite groups and algebras",
      "literature": "Joseph J. Rotman, \"Advanced Modern Algebra\" third edition, part 1,\nGraduate Studies in Mathematics,Volume 165\nAmerican Mathematical Society"
    },
    "performance_assessment": [
      {
        "ects_credits": 12,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "oral 30 minutes",
        "additional_info": "The content coincides with the content of the course units 401-2003-00L Algebra I and 401-2004-00L Algebra II and changes with the examiners. Candidates must therefore contact the examiner in person before studying the material.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Mathematics Master",
        "section": "Course Units for Additional Admission Requirements",
        "type": "E-"
      }
    ]
  },
  {
    "course_id": "529-0557-00L",
    "title": "Chemical Engineering Thermodynamics",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "A. de Mello",
      "S. Stavrakis"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "",
        "hours_per_week": 3,
        "schedule": [
          {
            "venue": [
              "HCIH 2.1"
            ],
            "day": "Wed",
            "time": "13:45-16:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "This course introduces the basic principles and concepts of chemical engineering thermodynamics. Whilst providing insights into the meaning and properties of fundamental thermodynamic quantities, the course also has a primary focus on the application of thermodynamic concepts to real chemical engineering problems.",
      "learning_objectives": "A primary objective of the course is to present a rigorous treatment of classical thermodynamics, whilst retaining a strong engineering perspective. Accordingly, real-world engineering examples will be used to highlight how thermodynamics is applied in engineering practice. The core ideas presented and developed within the course will provide a foundation for subsequent studies in such fields as fluid mechanics, heat transfer and statistical thermodynamics.",
      "content": "The first part of the course introduces the basic concepts and language of chemical engineering thermodynamics. This is followed by an analysis of energy and energy transfer, with a specific focus on the concept of work and the first law of thermodynamics. Next, the notion of a pure substance is introduced, with a discussion of the physics of phase-changes being presented. The description of pure substances is further developed through an analysis of the PVT behavior of fluids, equation of states, ideal and non-ideal gas behaviour and compressibility factors.\nThe second part of the course begins with a discussion of the use of the energy balance relation in closed systems that involve pure substances and then develops relations for the internal energy and enthalpy of ideal gases. Next, the second law of thermodynamics is introduced, with a discussion of why processes occur in certain directions and why energy has quality as well as quantity. Applications to cyclic devices such as thermal energy reservoirs, heat engines and refrigerators are provided. Entropy changes that take place during processes for pure substances, incompressible substances and ideal gases are described.\nThe third part of the course establishes thermodynamic formulations for the calculation of enthalpy, internal energy and entropy as function of pressure and temperature, Gibbs energy, fugacity and chemical potential. Two-phase systems are introduced as well as the use of equations of state to construct the complete phase diagrams of pure fluid. \nThe final part of the course focuses on the properties of mixtures and the phase behavior of multicomponent systems. The fundamental equations of phase equilibria in terms of the chemical potential and fugacity are also discussed. The concept of an ideal solution is introduced and developed. This is followed by an assessment of non-ideal behavior and the use of activity coefficients for describing phase diagrams. Particular focus is given to phase equilibria. Finally, concepts relating to chemical equilibria are introduced with the general concepts developed being applied to reacting species. Examples here include the calculation of the Gibbs free energy and the equilibrium constant of a reaction.",
      "lecture_notes": "Lecture handouts, background literature, problem sheets and notes will be made accessible to enrolled students through the lecture Moodle site.",
      "literature": "Although there is not set text for the course, the following three texts will be used in part and are excellent introductions to Chemical Engineering thermodynamics:\n1. Introduction to Chemical Engineering Thermodynamics, J.M. Smith, H.C. Van Ness, M.M. Abbott & M.T. Swihart, Eighth Edition, McGraw Hill, 2018\n2. Fundamentals of Thermodynamics, Claus Borgnakke & Richard E. Sonntag, Eighth Edition, Wiley, 2012.\n3. Fundamentals of Chemical Engineering Thermodynamics: With Applications to Chemical Processes, Themis Matsoukas, Prentice Hall, 2013.\nResources for the acquisition of material properties and data:\n1. NIST Chemistry WebBook (\nhttps://webbook.nist.gov/chemistry/\n)\n2. CRC Handbook of Chemistry & Physics, 99th Edition (\nhttp://hbcponline.com/\n)",
      "prerequisites": "A basic knowledge of chemical thermodynamics is required."
    },
    "performance_assessment": [
      {
        "ects_credits": 4,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "written 120 minutes",
        "additional_info": "0.25 extra credit will be given to students who complete and submit 10 of the 13 of the problem sheets given during the course",
        "exam_aid": "Thermodynamics Equation Sheet (provided by the instructors)",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Chemical Engineering Bachelor",
        "section": "Examination Block III",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "651-4903-00L",
    "title": "Quaternary Geology and Geomorphology",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "S. Ivy Ochs",
      "M. Büchi",
      "M. Luetscher",
      "H. Stoll"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "NOC 6"
            ],
            "day": "Fri",
            "time": "08:15-10:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "In this course the student is familiarized with the manner in which glacial, periglacial, fluvial, gravitational, karst, coastal and aeolian processes produce characteristic landforms and sedimentary deposits. The student is introduced to subdivisions of the Quaternary, with a focus on climatic changes in the Alps. Competency in these themes is gained through practical exercises and discussion.",
      "learning_objectives": ""
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition possible without re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Earth and Climate Sciences Bachelor",
        "section": "Applied",
        "type": "W+"
      }
    ]
  },
  {
    "course_id": "752-1000-AAL",
    "title": "Food Chemistry I",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "Enrolment ONLY for MSc students with a decree declaring this course unit as an additional admission requirement.Any other students (e.g. incoming exchange students, doctoral students) CANNOT enrol for this course unit.",
    "lecturers": [
      "L. Nyström",
      "S. Boulos",
      "M. Erzinger"
    ],
    "classes": [
      {
        "type": "Revision course / private study",
        "notes": "Self-study course. No presence required.",
        "hours_per_week": 90,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "To familiarise with the structure, properties and reactivity of food constituents. To understand the relationship between the multiple chemical reactions and the quality of food.",
      "learning_objectives": "To familiarise with the structure, properties and reactivity of food constituents. To understand the relationship between the multiple chemical reactions and the quality of food.",
      "content": "Descriptive chemistry of food constituents (proteins, lipids, carbohydrates, plant phenolics, flavour compounds). \nReactions which affect the colour, flavour, texture, and the nutritional value of food raw materials and food products during processing, storage and preparation in a positive or in a negative way (e.g. lipid oxidation, Maillard reaction, enzymatic browning). \nLinks to food analysis, food processing, and nutrition.",
      "lecture_notes": "The lectures are supplemented with handouts.",
      "literature": "Introductory Food Chemistry, John W. Brady, Cornell University Press, New York, 2013. Selected sections."
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition possible without re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Food Science and Nutrition Master",
        "section": "Course Units for Additional Admission Requirements",
        "type": "E-"
      }
    ]
  },
  {
    "course_id": "853-0063-02L",
    "title": "Military History I (Without Exercises)",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "German",
    "comment": "",
    "lecturers": [
      "M. Olsansky",
      "T. Cubito",
      "A. Wettstein"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "IFWA 32.1"
            ],
            "day": "Mon",
            "time": "16:15-18:00"
          },
          {
            "venue": [
              "HGD 7.1"
            ],
            "day": "26.11.",
            "time": "18:15-20:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The purpose of the lecture is to outline the development of the armed forces (assets regarding manpower, technology and armament), the concepts of warfare and the actual warfare in the 19th and 20th century.",
      "learning_objectives": "- Distinguish between military history as a subject and historiography as a way of describing events;\n- Analyse the modern developments regarding armed forces and warfare in the context of socio-economic changes;\n- Based on the approach regarding revolution in military affairs, describe the evolution of the armed forces and of warfare;\n- Exemplify the issues regarding the evolution of the combat  (First and Second World War, Vietnam War and Algerian War).",
      "content": "The lecture first examines the bases of the science of (military) history. It focuses on how military history developed from war history, on specific similarities and differences between military history and general historiography, the different ways of dealing with history in Switzerland, Germany, France and in the Anglo-Saxon cultural area (different approaches) as well as on institutions which deal with military history such as universities, military academies, national and international commissions and associations etc. \nThe lecture is structured along the lines of the concept of \"Military Revolution\" and starts with the formation of modern, European armed forces after the Oranian Army reform in the 17th century.\nBased on the \"Military Revolution\" approach, the lecture examines the structural changes regarding the armed forces and the development of warfare from the 18th to the 20th century. Special emphasis will be put on how the battlefield was revolutionized due to the Napoleonic wars, the industrialization in the 19th century, the First World War, the mechanization and totalization during the Second World War and the period of the Cold War.",
      "literature": "- Peter Browning: The Changing Nature of Warfare, Cambridge 2002.\n- MacGregor Knox/Williamson Murray: The Dynamics of Military Revolution 1300-2050, Cambridge 2001.\n- Jeremy Black: Introduction to Global Military History 1775 to the present day, London 2005.\n- Rolf-Dieter Müller: Militärgeschichte, Köln 2009."
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "graded semester performance",
        "language_of_examination": "German",
        "repetition": "Repetition possible without re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "DAS in Military Sciences",
        "section": "Courses Offered",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "401-2000-01L",
    "title": "Lunch Sessions – Thesis Basics for Mathematics Students",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "German",
    "comment": "Details and registration for the optional MathBib training course: https://www.math.ethz.ch/mathbib-schulungen",
    "lecturers": [],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "geplant über Mittag.https://math.ethz.ch/library/training-courses/lunch-sessions.html",
        "hours_per_week": 4,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Optional MathBib training course",
      "learning_objectives": ""
    },
    "performance_assessment": [
      {
        "ects_credits": 0,
        "assessment_type": "no performance assessment",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Mathematics Bachelor",
        "section": "Bachelor's Thesis",
        "type": "Z"
      },
      {
        "program": "Mathematics Master",
        "section": "Master's Thesis",
        "type": "Z"
      },
      {
        "program": "Computational Science and Engineering Bachelor",
        "section": "Bachelor's Thesis",
        "type": "Z"
      },
      {
        "program": "Computational Science and Engineering Master",
        "section": "Master's Thesis",
        "type": "Z"
      },
      {
        "program": "Statistics Master",
        "section": "Master's Thesis",
        "type": "Z"
      }
    ]
  },
  {
    "course_id": "447-6221-00L",
    "title": "Nonparametric Regression",
    "semester": "Autumn Semester 2025",
    "periodicity": "two-yearly recurring course",
    "language_of_instruction": "German",
    "comment": "Special Students \"University of Zurich (UZH)\" in the Master Program in Biostatistics at UZH cannot register for this course unit electronically. Forward the lecturer's written permission to attend to the Registrar's Office. Alternatively, the lecturer may also send an email directly to registrar@ethz.ch. The Registrar's Office will then register you for the course.",
    "lecturers": [],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "Does not take place this semester.Blockkurs im HS 2024[DATUM]",
        "hours_per_week": 10,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "This course focusses on nonparametric estimation of probability densities and regression functions. These recent methods allow modelling without restrictive assumptions such as 'linear function'. These smoothing methods require a weight function and a smoothing parameter. Focus is on one dimension, higher dimensions and samples of curves are treated briefly. Exercises at the computer.",
      "learning_objectives": "Knowledge on estimation of probability densities and regression functions via various statistical methods.\nUnderstanding of the choice of weight function and of the smoothing parameter, also done automatically.\nPractical application on data sets at the computer."
    },
    "performance_assessment": [
      {
        "ects_credits": 1,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "German",
        "repetition": "Repetition possible without re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "CAS in Applied Statistical Data Science",
        "section": "Further Courses",
        "type": "W"
      },
      {
        "program": "DAS in Applied Statistical Data Science",
        "section": "Electives",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "172-0100-00L",
    "title": "CAS Module in Robotics and AI",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [],
    "classes": [
      {
        "type": "Independent project",
        "notes": "",
        "hours_per_week": 360,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "In the CAS Robotics participants are offered a RobotX professor as a mentor together with whom they design their study plan along an individually-specified focus area in the area of Robotics and AI. Based on the individual expertise and interests of the participants, the customised Robotics and AI module consists of a combination of (i) research project, ii) lectures, (iii) knowledge transfer.",
      "learning_objectives": "The CAS Robotics and AI module offers experienced industry individuals the opportunity to undergo research-related training in Robotics and AI, to update their knowledge and to expand their area of expertise in a targeted manner and aims at:\n- training skills at the frontiers of the current state of research in Robotics and AI,\n- deepening technical know-how with state-of-the-art knowledge in the specified focus area, and\n- advancing practical competencies in the impart of expertise and knowledge transfer across disciplines and educational levels."
    },
    "performance_assessment": [
      {
        "ects_credits": 12,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition possible without re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "CAS in Robotics",
        "section": "Module",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "751-0903-00L",
    "title": "Microeconomics of the Agriculture and Food Sector",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "German",
    "comment": "",
    "lecturers": [
      "L. Zachmann"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "LFWC 1"
            ],
            "day": "Thu",
            "time": "08:15-10:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "In dieser Vorlesung werden ökonomische Charakteristika des Agrar- und Lebensmittelsektors herausgearbeitet und anderen Sektoren gegenübergestellt. Fokus ist dabei Lebensmittelindustrie in der Schweiz und in der EU. Es werden mikroökonomische Zusammenhänge, insbesondere zur Preis- und Mengenbildung in verschiedenen Wettbewerbsmodellen, am Fallbeispiel des Agrar- und Ernährungssektors vermittelt.",
      "learning_objectives": "Ziel dieser Vorlesung ist das Verständnis mikroökonomischer Modelle und deren Anwendbarkeit auf den Agrar- und Lebensmittelsektor. Nach erfolgreichem Abschluss der Lehrveranstaltung können die Studierenden die ökonomischen Folgen von verschiedenen Wettbewerbssituationen differenziert abschätzen und Empfehlungen für Management und Politik ableiten.",
      "content": "- Der Agrar- und Lebensmittelsektor in der EU und der Schweiz \n- Preiselastizitäten von Angebot und Nachfrage im Ernährungssektor \n- Gewinnmaximierung\n- Grundlagen der Spieltheorie \n- Monopol / Monopolistischer Wettbewerb\n- Oligopol (Stackelberg, Cournot, Bertrand)\n- Monopson\n- Produktdifferenzierung\n- Preisdiskriminierung\n- Kartelle",
      "literature": "- Pindyck und Rubinfeld. Mikroökonomie, 7. Aufl., Pearson Studium.\n- Carlton and Perloff: Modern Industrial Organization 4th ed., Pearson Addison  Wesley.",
      "prerequisites": "Empfohlene Vorkenntnisse: \n- Grundkenntnisse der Ökonomie/Agrarökonomie\n- Vorlesung Einführung in die Mikroökonomie"
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "end-of-semester examination",
        "language_of_examination": "German",
        "repetition": "A repetition date will be offered in the first two weeks of the semester immediately consecutive.",
        "examination": "written 90 minutes",
        "exam_aid": "Nichtprogrammierbarer Taschenrechner",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Agricultural Sciences Bachelor",
        "section": "Agricultural Economics",
        "type": "W+"
      },
      {
        "program": "Agricultural Sciences Bachelor",
        "section": "Electives",
        "type": "W"
      },
      {
        "program": "Environmental Sciences Master",
        "section": "Minor in Environmental, Resource and Food Economics",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "402-0371-62L",
    "title": "Cosmological Probes",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "A. Refregier"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "Does not take place this semester.",
        "hours_per_week": 2,
        "schedule": []
      },
      {
        "type": "Exercise",
        "notes": "Does not take place this semester.",
        "hours_per_week": 1,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Our understanding of the universe has made great progress recently thanks to the combination of several cosmological probes such as the cosmic microwave background, galaxy clustering, gravitational lensing, and supernovae. After a review of cosmology, this course will cover the physics of these different probes along with their application, combination and use to measure cosmological parameters.",
      "learning_objectives": "The goal of this course is to provide an understanding of the physics, application and combination of cosmological probes, and highlight current research topics.",
      "prerequisites": "Credits or current enrollment in Astrophysics I and II is recommended but not required."
    },
    "performance_assessment": [
      {
        "ects_credits": 6,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "oral 20 minutes",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Physics Master",
        "section": "Selection: Astrophysics",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "227-0085-54L",
    "title": "P&S: Optics and Spectroscopy Lab",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "J. Leuthold"
    ],
    "classes": [
      {
        "type": "Practical / laboratory course",
        "notes": "Does not take place this semester.Für den Zugang zum Angebot und zur Einschreibung loggen Sie sich hier ein (mit Ihrem n.ETHZ account): https://psapp.ee.ethz.ch/Bitte beachten Sie, dass die Seite jeweils erst zwei Wochen vor Semesterbeginn zugänglich ist und im Verlauf des Semesters wieder abgeschaltet wird. Die Einschreibung ist nur von Freitag vor Semesterbeginn bis zum ersten Freitagmittag im Semester möglich.To access the offer and to enroll for courses log in (with your n.ethz account): https://psapp.ee.ethz.ch/Please note that the P&S-site is accessible no earlier than two weeks before the start of the semester until four weeks after the start of the semester. Enrollment is only possible from Friday before the start of the semester until noon of the first Friday in the semester.",
        "hours_per_week": 4,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The category of \"Laboratory Courses, Projects, Seminars\" includes courses and laboratories in various formats designed to impart practical knowledge and skills. Moreover, these classes encourage independent experimentation and design, allow for explorative learning and teach the methodology of project work.",
      "learning_objectives": "The goal of this P&S is to learn the basics of working with optics and how to assemble optical systems. It is intended to show the practical side to the many optics lectures that are offered at D-ITET. \nThe course will give a very brief introduction on laser safety, basic building blocks for optics and information on how to handle such elements. The following classes allow the students to test very basics properties of lenses and lasers and how the corresponding optomechanics can be used to arrange a simple setup. After this, the different student groups rotate through four different experiments where they get the chance to build and align different optical setups and perform various measurements. No prior knowledge is required."
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Electrical Engineering and Information Technology Bachelor",
        "section": "Projects & Seminars (only for BSc EEIT)",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "701-0243-01L",
    "title": "Biology III: Essentials of Ecology",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "German",
    "comment": "",
    "lecturers": [
      "J. Alexander"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "Vorlesung im HG F 1 mit Videoübertragung ins HG F 3.",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "HGF 1",
              "HGF 3"
            ],
            "day": "Mon",
            "time": "10:15-12:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "This introductory lecture in ecology covers basic ecological concepts and the most important levels of complexity in ecological research. Ecological concepts are exemplified by using aquatic and terrestrial systems; corresponding methodological approaches are demonstrated. Threats to biodiversity and the appropriate management are discussed.",
      "learning_objectives": "The objective of this lecture is to teach basic ecological concepts and the different levels of complexity in ecological research.\nThe students should learn ecological concepts at these different levels in the context of concrete examples from terrestrial and aquatic ecology. Corresponding methods for studying the systems will be presented.\nA further aim of the lecture is that students achieve an understanding of biodiversity, why it is threatened and how it can be managed.",
      "content": "- Biodiversity: variation, threats and conservation\n- Influence of environmental factors on organisms; adaptation to environmental conditions\n- Population dynamics: causes, description, prediction and regulation\n- Interactions between species (competition, coexistence, predation, parasitism, food webs)\n- Ecological communities: structure, stability, succession\n- Ecosystems: compartments, material and energy flows",
      "lecture_notes": "Documents, lecture slides, exercises and relevant literature are available in Moodle. The documents for the next lecture will be available on Friday morning at the latest.",
      "literature": "Required reading: Begon, M.E., Howarth, R.W., Townsend, C.R. (2017): Ökologie. 3. Aufl. Springer Verlag, Berlin."
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "session examination",
        "language_of_examination": "German",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "written 60 minutes",
        "exam_aid": "Keine ausser Wörterbuch (gedruckt) für Fremdsprachige\nTaschenrechner ohne Internetzugang (kein Handy usw.)  (Pocket calculator without internet connection (no mobile phone, etc.))",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Agricultural Sciences Bachelor",
        "section": "First Year Examinations",
        "type": "O"
      },
      {
        "program": "Environmental Engineering Bachelor",
        "section": "First Year Examination Block A",
        "type": "O"
      },
      {
        "program": "Environmental Sciences Bachelor",
        "section": "First Year Examinations",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "401-2283-00L",
    "title": "Analysis III (Measure Theory)",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "F. Da Lio"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "",
        "hours_per_week": 3,
        "schedule": [
          {
            "venue": [
              "HGG 5"
            ],
            "day": "Wed",
            "time": "15:15-16:00"
          },
          {
            "venue": [
              "HGG 3"
            ],
            "day": "Fri",
            "time": "10:15-12:00"
          }
        ]
      },
      {
        "type": "Exercise",
        "notes": "ACHTUNG: Die beiden deutschsprachigen Übungsgruppen G-02 und G-03 (nicht aber G-01) finden am 6. Oktober im ML F 39 (anstatt im ML F 40 bzw. LEE D 101) statt.",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "CHNG 42",
              "LEED 101",
              "LFWC 5",
              "MLF 40",
              "MLH 41.1"
            ],
            "day": "Mon",
            "time": "16:15-18:00"
          },
          {
            "venue": [
              "MLF 39"
            ],
            "day": "06.10.",
            "time": "16:15-18:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Measure and integration theory, including: Caratheodory's theorem, Lebesgue measure, Radon measure, Hausdorff measure, convergence theorems, L^p spaces, Radon-Nikodym theorem, product measure and Fubini's theorem",
      "learning_objectives": "Basics of abstract measure and integration theory",
      "content": "Measure Spaces (Lebesgue Measure, Hausdorff Measure,\nRadon Measure)\n• Measurable Functions: definition and properties\n• Integration: definition, properties, theorems of\nconvergence, Lebesgue L^p spaces\n• Product Measures and Multiple Integrals. Fubini and\nTonelli Theorems, Convolutions\n• Differentiation of measures (if time permits)",
      "lecture_notes": "Die Vorlesung folgt dem Skript von der Dozentin",
      "literature": "1. Lecture notes by Professor Michael Struwe (\nhttp://www.math.ethz.ch/~struwe/Skripten/AnalysisIII-SS2007-18-4-08.pdf\n)\n2. L. Evans and R.F. Gariepy \"Measure theory and fine properties of functions\"\n3. Walter Rudin \"Real and complex analysis\"\n4. R. Bartle The elements of Integration and Lebesgue Measure\n5. P. Cannarsa & T. D'Aprile: Lecture notes on Measure Theory and Functional Analysis. \nhttp://www.mat.uniroma2.it/~cannarsa/cam_0607.pdf",
      "prerequisites": "Analysis 1 & 2 und basic notions of topology"
    },
    "performance_assessment": [
      {
        "regulations": "Bachelor's Degree Programme in Mathematics 2021; Version 07.04.2022 (Examination Block 2)\nBachelor's Degree Programme in Mathematics 2023 (Examination Block 2)",
        "ects_credits": 12,
        "assessment_description": "Performance assessment as a two-semester course together with 401-2464-00L Analysis IV (Fourier Theory and Hilbert Spaces)\r\n                 (next semester)"
      },
      {
        "ects_credits": 6,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "oral 20 minutes",
        "assessment_description": "Performance assessment as a semester course\r\n                 (other programmes)"
      }
    ],
    "offered_in": [
      {
        "program": "Mathematics Bachelor",
        "section": "Examination Block 2 (Programme Regulations 2024 and 2021)",
        "type": "O"
      },
      {
        "program": "Physics Bachelor",
        "section": "Electives",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "529-0961-01L",
    "title": "Mentored Work Specialised Courses in the Respective Subject with an Educational Focus Chemistry A",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "German",
    "comment": "",
    "lecturers": [
      "A. Zwyssig"
    ],
    "classes": [
      {
        "type": "Independent project",
        "notes": "",
        "hours_per_week": 60,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "In the mentored work on their subject specialisation, students link high-school and university aspects of the subject, thus strengthening their teaching competence with regard to curriculum decisions and the future development of the tuition. They compile texts under supervision that are directly comprehensible to the targeted readers - generally specialist-subject teachers at high-school level.",
      "learning_objectives": "The aim is for the students\n- to familiarise themselves with a new topic by obtaining material and studying the sources, so that they can selectively extend their specialist competence in this way.\n- to independently develop a text on the topic, with special focus on its mathematical comprehensibility in respect of the level of knowledge of the targeted readership.\n- To try out different options for specialist further training in their profession.",
      "content": "Thematische Schwerpunkte:\nDie mentorierte Arbeit in FV besteht in der Regel in einer Literaturarbeit über ein Thema, das einen Bezug zum gymnasialem Unterricht oder seiner Weiterentwicklung hat. Die Studierenden setzen darin Erkenntnisse aus den Vorlesungen in FV praktisch um.\nLernformen:\nDie Studierenden wählen ein Thema und verfassen eine eigenständige Arbeit. Sie werden dabei von ihrer Betreuungsperson begleitet. Gegebenenfalls stellen sie ihre Arbeit oder Aspekte daraus in einem Kurzvortrag vor. Die mentorierte\nArbeit ist Teil des Portfolios der Studierenden.",
      "lecture_notes": "Eine Anleitung zur mentorierten Arbeit in FV wird zur Verfügung gestellt.",
      "literature": "Die Literatur ist themenspezifisch. Sie muss je nach Situation selber beschafft werden oder wird zur Verfügung gestellt.",
      "prerequisites": "Die Arbeit sollte vor Beginn des Unterrichtspraktikums abgeschlossen werden."
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "graded semester performance",
        "language_of_examination": "German",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Chemistry Teaching Diploma",
        "section": "Spec. Courses in Resp. Subj. w/ Educ. Focus & Further Subj. Didactics",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "135-0305-00L",
    "title": "Modul 5: Transformation gestalten: Veränderungsprozesse & Change-Management",
    "semester": "Autumn Semester 2025",
    "periodicity": "two-yearly recurring course",
    "language_of_instruction": "German",
    "comment": "",
    "lecturers": [
      "D. Kaufmann"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "Does not take place this semester.Hinweis: Unterrichtszeiten 08:45-17:15 Uhr.Am [WOCHENTAG] [DATUM] im Alumni-Pavillon MM C 78.1.",
        "hours_per_week": 15,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The focus of this module is on an in-depth engagement with changes in order to actively shape new processes at the local level and translate them into practical guidelines. In doing so, various stakeholders and legal frameworks are also taken into account.",
      "learning_objectives": "To understand the ways in which visions and future scenarios can be embedded into political processes to ensure their long-term feasibility and implementation."
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "German",
        "repetition": "Repetition possible without re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "CAS in Future of Spatial Development",
        "section": "Future of Spatial Development",
        "type": "O"
      },
      {
        "program": "MAS in Spatial Development",
        "section": "Future of Spatial Development",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "151-3204-00L",
    "title": "Coaching Innovation Projects",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "German",
    "comment": "",
    "lecturers": [
      "I. Goller",
      "K. Weiss"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "Permission from lecturers required for all students. \r\n  Neu nicht mehr wöchentlich sondern im Workshop Format zu folgenden Daten:Mo 15.09 at 9:00 - 17:00 Foundation Coaching SkillsSa 27.09 at 9:00 - 17:00 Team Coaching SkillsFr 24.10 at 13:00 - 17:00 Deep-Dive in aktuelle ThemenFr 28.11 at 13:00 - 15:00 Reflective SessionOrt: ist immer in PBLabs RZ: RZ D 8",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "RZD 8"
            ],
            "day": "15.09.",
            "time": "09:15-17:00"
          },
          {
            "venue": [
              "RZD 8"
            ],
            "day": "27.09.",
            "time": "09:15-17:00"
          },
          {
            "venue": [
              "RZD 8"
            ],
            "day": "24.10.",
            "time": "13:15-17:00"
          },
          {
            "venue": [
              "RZD 8"
            ],
            "day": "28.11.",
            "time": "13:15-15:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The course is building up skills and experience in coaching engineering teams. To gain experience and to reflect real coaching situations, the participants of the course have the role of teaching assistance of the innovation project (151-0300-00L). In this framework the participants coach teams and professionalize the knowledge in the area product development methods.",
      "learning_objectives": "- Critical thinking and reasoned judgements\n- Basic knowledge about role and mindset of a coach\n- Understanding the challenges of engineering projects and design teams\n- Development of personal skills to apply and train product development methods \n- Knowledge and know-how about applying methods \n- Reflection and exchange of experiences about personal coaching situations\n- Inspiration and learning from good cases regarding organizational and team management aspects \n- Decision-making under uncertainty",
      "content": "the following topics will be covered in the lecture:\n- Kick-off & Experience Exchange\n- Coaching Role\n- Active Listening\n- Giving and Receiving Feedback\n- Team Building & Psychological Safety\n- Solution-focused coaching process\n- conflict resolution and motivation\nIn addition to the content topics, one-on-one coaching will be provided and classes will reflect on current, practical issues derived from coaching of the innovation teams. Additionally, the students will complete peer visits.",
      "prerequisites": "Only for participants (Bachelor, Master, PhD Students) who are teaching assistants in the innovation project."
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "graded semester performance",
        "language_of_examination": "German",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "additional_info": "Schriftliche Semesterarbeiten.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Mechanical Engineering Bachelor",
        "section": "Design, Mechanics and Manufacturing",
        "type": "W"
      },
      {
        "program": "Mechanical Engineering Master",
        "section": "Core Courses",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "701-0658-00L",
    "title": "Seminar for Bachelor Students: Human Environment Systems",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "German",
    "comment": "",
    "lecturers": [
      "J. W. McCaughey",
      "D. N. Bresch",
      "E. Lieberherr",
      "O. Stebler"
    ],
    "classes": [
      {
        "type": "Seminar",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "HGE 22"
            ],
            "day": "Tue",
            "time": "10:15-12:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Analysis and presentation of research papers from the involved chairs, relating to topics from human-environment systems.",
      "learning_objectives": "The students learn to read, understand, summarize and present current research papers related to human-environment systems. Furthermore, students train the critical discussion of these papers. The students alse get to know a number of innovative approaches for such presentations.",
      "content": "Research in human-environment systems is characterised by a broad range of topics and methods. This is illustrated by the research papers that are discussed in this seminar. Students choose a paper from a list and present it to the seminar participants. Furthermore, they lead the discussion and train questions and answers related to such presentations. In the first three lessons, inputs to presentation techniques and innovative approaches to presentations are provided and discussed.",
      "lecture_notes": "Will be provided in the seminar.",
      "literature": "Will be provided in the seminar.",
      "prerequisites": "none"
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "German",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "additional_info": "Es wird die aktive Teilnahme am Unterricht und an den Diskussionen/Besprechungen der Papers erwartet.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Environmental Sciences Bachelor",
        "section": "Human-Environment Systems",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "151-0083-00L",
    "title": "Kickoff Focus Projects",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "German",
    "comment": "",
    "lecturers": [
      "A. Hernández Oendra"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "Donnerstag 25. September 2025, von 09 Uhr bis 12 Uhr (Ort: HG D 16.2)",
        "hours_per_week": 3,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Introduction to focus projects and the development of important non-technical skills.",
      "learning_objectives": "The goals of the course are: 1) Conveying the framework conditions of the focus projects 2) Explaining the requirements in the categories of focus subjects and the reduced bachelor thesis 3) Developing important non-technical skills for project work.",
      "content": "Struktur Fokus-Projekte, Info Fokus-Fächer und reduzierte Bachelorarbeit, Einführung Fokus Rollout, Projektkommunikation, Patente, Burnout Prophylaxe, Arbeitssicherheit.",
      "lecture_notes": "Werden auf Moodle zu verfügung gestellt.",
      "prerequisites": "Studierende müssen in ein Fokus-Projekt eingeschrieben sein."
    },
    "performance_assessment": [
      {
        "ects_credits": 0,
        "assessment_type": "no performance assessment",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Mechanical Engineering Bachelor",
        "section": "Focus Project",
        "type": "E-"
      }
    ]
  },
  {
    "course_id": "101-0121-00L",
    "title": "Fatigue and Fracture in Materials and Structures",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "A. Taras",
      "H. Heydarinouri"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "",
        "hours_per_week": 3,
        "schedule": [
          {
            "venue": [
              "HILD 10.2"
            ],
            "day": "Tue",
            "time": "09:45-12:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The fundamentals of fatigue and fracture mechanics, which are applied across various engineering disciplines, e.g., civil, mechanical, aerospace, and materials engineering, will be covered in this course. The emphasis will be on core theories and predictive models related to fatigue crack initiation.",
      "learning_objectives": "In this course, students will learn:\n• Mechanisms of fatigue crack initiations in materials.\n• Predicition models and calculation frameworks for crack initiation prediction. \n• Linear elastic fracture mechanics and calculation framework for crack propagation. \n• Introduction to the fatigue of welded components and addtively manufactured metals. \n• Basics of using ABAQUS and fe-safe FE-software for fatigue analysis. \n• Laboratory visit and a running fatigue test.",
      "content": "The topics that are covered in this course are: \nI) Fatigue of materials:\n• Mechanisms of fatigue crack initiation in (ductile and brittle) metals.\n• Crack initiation under uniaxial loadings: Wöhler (S-N) curves, constant life diagram (CLD) approach (mean-stress effects), rainflow analysis, Miner's damage rule and Manson Method.\n• Crack initiation under multiaxial loading: multiaxial fatigue mechanisms, critical plane approach, critical distance theory, equivalent stress approach, proportional and non-proportional loading.\n• Fatigue analysis of welded components.\n• Introduction to fatigue analysis of additively manufactured metallic components.\nII) Fracture mechanics:\n• Linear elastic fracture mechanics (LEFM): stress intensity factors, crack opening displacement, mixed-mode fracture, etc.\n• Fatigue crack growth (FCG): FCG models, Paris' law, cyclic plastic zones, crack closure effects.  \nIII) Introduction to fatigue analysis using Finite Element (FE) software ABAQUS and fe-safe:\n• FE modeling of a component using CAE in ABAQUS. \n• Performing FE simulations and analyzing the stress and strain distributions.\n• Employing fe-safe for performing fatigue analysis based different fatigue prediction models.\n• Interpretation of the fatigue analyses and their correlation with the acquired knowledge. \nIV) Introduction to fatigue and fracture design in civil structures: different methods for fatigue strengthening will be disscussed. \nV) Visits to the Empa (Swiss Federal Laboratories for Materials Science and Technology) in Dübendorf, and “Laboratory Competition”. The students will:\n• Visit different small-scale and large-scale fatigue testing equipment.\n• Get to know different ongoing fatigue- and fracture-related projects.\n• Witness and help to conduct a fatigue test on a steel specimen.  \n• Compare the experimental results with the calculations performed using the acquired fatigue theories.\n• “Laboratory Competition” at Empa: the students with the closest predictions will win the “Empa Laboratory Competition” and will be awarded by a prize.",
      "lecture_notes": "Lectures are based on the lecture slides and the handouts, which will be given to the students during the semester.",
      "literature": "1. Schijve J. Fatigue of Structures and Materials, 2008: New York: Springer.\n2. Budynas, R. G., & Nisbett, J. K. (2011). Shigley's mechanical engineering design. New York: McGraw-Hill.\n3. Stephens, R. I., Fatemi, A., Stephens, R. R., & Fuchs, H. O. (2000). Metal fatigue in engineering. John Wiley & Sons.\n4. Budynas R.G., Nisbett J.K. Shigley's Mechanical Engineering Design, 2008, New York: McGraw-Hill.\n5. Socie, D., & Marquis, G. (1999). Multiaxial fatigue. SAE international.\n6. Anderson T.L. Fracture Mechanics - Fundamentals and Applications, 3rd Edition, Taylor & Francis Group, LLC. 2005.",
      "prerequisites": "A basic knowledge on mechanics of structures and structural analysis (i.e., stress-strain analysis and calculations of internal deformations, strains and stresses within structures) is recommended and will be  beneficial for this course."
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "written 150 minutes",
        "additional_info": "Interim examinations will be conducted twice during the semester (around Weeks 5 and 10). Homework assignment will be distributed every week and will be collected a week after. \nThe interim examinations and homework are optional, and, in case, they would worsen the total grade, they are disregarded. They function as a bonus, but not as a penalty. Students can still achieve the maximum grade of 6 in the course unit even if they only sit the final examination.\n- Homework (bonus 0.25 grades)\n- First interim written examination (15%)\n- Second interim written examination (15%)",
        "exam_aid": "The exams will be \"open book\", therefore, all printed and hand-written materials are allowed. Furthermore, a calculator (without the capability of wireless/internet connectivity) is allowed",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Civil Engineering Master",
        "section": "Major in Structural Engineering",
        "type": "W"
      },
      {
        "program": "Civil Engineering Master",
        "section": "Digitalisation Specific Courses",
        "type": "W"
      },
      {
        "program": "Doctorate Civil, Environmental and Geomatic Engineering",
        "section": "Subject Specialisation",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "103-0116-00L",
    "title": "Ecology and Soil Science",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "German",
    "comment": "",
    "lecturers": [
      "A. Grêt-Regamey",
      "T. Keller",
      "C. Küffer Schumacher"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "HILE 8"
            ],
            "day": "Tue",
            "time": "09:45-11:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The lecture teaches the basics of ecology and soil science with a focus on engineering and spatial planning approaches. Students learn about soil properties, soil ecosystems, water, gas and material cycles as well as soil degradation, analyze and assess human interventions on soils and deal with concepts for soil protection and sustainable soil management.",
      "learning_objectives": "By the end of the course, students will be able to:\n- describe and contextualize key concepts in soil science and ecology.\n- explain and illustrate soil properties, ecosystems, and material cycles using practical examples.\n- quantify, analyze and assess the effects of human activities on soils and their ecological functions.\n- apply and evaluate engineering and spatial planning approaches for soil protection and sustainable soil management.",
      "content": "Fundamentals of soil science & ecology: basic terms, definition of soil, soil functions, soil formation, soil composition, soil types and key parameters, connection between soil and ecology Soil use & hazards: Soil compaction, nutrient cycle & fertilization, water balance Change & disturbance Soil protection & management: soil recultivation and pedological construction monitoring, soil in the city, soil and spatial planning, soil monitoring and the role of the federal government.",
      "lecture_notes": "Lecture notes and slides can be found on the Moodle page of the course.",
      "literature": "Krebs, R. Egli, M., Schulin, R. & Tobias, S. (Hg.) (2017): Bodenschutz in der Praxis. 1. Auflage. Haupt Verlag. Bern. ISBN: 978-3-8252-4820-8\nScheffer F. Scheffer/Schachtschabel - Lehrbuch der Bodenkunde, 17. Auflage, Springer Spektrum, Berlin, 2018."
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "session examination",
        "language_of_examination": "German",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "written 90 minutes",
        "additional_info": "Hilfsmittel: Keine \nAuxiliary aid: None",
        "exam_aid": "None",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Geospatial Engineering Bachelor",
        "section": "First Year Examinations",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "406-0023-AAL",
    "title": "Physics",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "Enrolment ONLY for MSc students with a decree declaring this course unit as an additional admission requirement.Any other students (e.g. incoming exchange students, doctoral students) CANNOT enrol for this course unit.",
    "lecturers": [
      "S. Johnson"
    ],
    "classes": [
      {
        "type": "Revision course / private study",
        "notes": "Self-study course. No presence required.",
        "hours_per_week": 210,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "This course gives an overview of important concepts in classical dynamics, thermodynamics, electromagnetism, quantum physics, and special relativity.  Emphasis is placed on demonstrating key phenomena using experiments, and in developing skills for quantitative problem solving.",
      "learning_objectives": "The goal of this course is to make students able to explain and apply the basic principles and methodology of physics to problems of interest in modern science and engineering. An important component of this is learning how to solve new, complex problems by breaking them down into parts and applying approximations.",
      "content": "Oscillations and waves in matter\nThermodynamics (temperature, heat, equations of state, laws of thermodynamics, entropy, transport)\nElectromagnetism (electrostatics, magnetostatics, curcuits, Maxwell's equations, electromagnetic waves, induction, electromagnetic properties of materials)\nOverview of quantum and atomic physics\nIntroduction to special relativity",
      "lecture_notes": "Lecture notes and exercise sheets will be distributed via Moodle.",
      "literature": "P.A. Tipler and G. Mosca, Physics for scientists and engineers, W.H. Freeman and Company, New York"
    },
    "performance_assessment": [
      {
        "ects_credits": 7,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "oral 30 minutes",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Environmental Engineering Master",
        "section": "Course Units for Additional Admission Requirements",
        "type": "E-"
      }
    ]
  },
  {
    "course_id": "376-1220-00L",
    "title": "Rehabilitation and Inclusion",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "R. Riener"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "CABG 11"
            ],
            "day": "Thu",
            "time": "12:15-14:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "This course presents origins and prevention of different physical, sensory, mental impairments, their treatments, and methods of assistance in public and home environments. Rehabilitation is put into a larger context providing insights into healthcare systems, health economy, accessibility, barrier-free architecture, para-sports, legal & regulatory aspects, disability policy, and inclusion.",
      "learning_objectives": "With this lecture, we want to not only transfer a broad knowledge about rehabilitation and inclusion, but also raise awareness about the challenges and needs of people with impairments, the economy and the overall society. Students should learn about the complex and multi-facetted interaction of care, treatment, assistance, reimbursement, accessibility, legal regulation, and social inclusion. This knowledge and awareness should be presented in a multi-modal way using interactive tools and organizing group/plenar discussions.",
      "content": "The course will cover the following topics: \n• Introduction: definition of terms, historical and legal background, role of the UNO, WHO, ICRC \n• Origins: reasons and origins of physical, sensory and mental impairments; surgical and pharmaceutical treatments \n• Therapy: physical therapy, occupational therapy, speech therapy, psychotherapy \n• Technological support: Robot-aided therapy, Virtual Reality, muscle stimulation, Brain-Computer Interfaces (BCIs)\n• Home therapy: personal assistance, mobile health systems, tele-monitoring, tele-therapy \n• Assistive technologies: gait assistance, prosthesis, orthoses, seeing/hearing aids, etc. \n• Social inclusion: definition of normality and belongingness, social behaviours, UN-BRK, etc. \n• Accessibility: national and international aspects of accessibility \n• Health economy in rehabilitation: public and private cost models, health insurance, SUVA, IV\n• Barrier-free building and living: environmental obstacles, norms in architecture, inclusive design \n• Parasports: history of Olympics and Paralympics, Special Olympics, Deaflympics, Cybathlon\n• Policy: health, social, equal opportunity, disability \n• Regulatory affairs: ethics committees, Swissmedic, Bundesamt für Gesundheit (BAG), law and disability \n• Prevention: primary and secondary prevention, social prevention"
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "written 60 minutes",
        "exam_aid": "generic, non-electronic dictionary (hard copy)",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Biomedical Engineering Master",
        "section": "Recommended Elective Courses",
        "type": "W"
      },
      {
        "program": "Health Sciences and Technology Bachelor",
        "section": "Human Movement Sciences and Sports",
        "type": "W"
      },
      {
        "program": "Health Sciences and Technology Bachelor",
        "section": "Medical Technology",
        "type": "W"
      },
      {
        "program": "Health Sciences and Technology Master",
        "section": "Inclusion",
        "type": "W"
      },
      {
        "program": "Health Sciences and Technology Master",
        "section": "Elective Courses II",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "227-0085-21L",
    "title": "P&S: Quad-Rotors: Control and Estimation",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "I. Akor"
    ],
    "classes": [
      {
        "type": "Practical / laboratory course",
        "notes": "Für den Zugang zum Angebot und zur Einschreibung loggen Sie sich hier ein (mit Ihrem n.ETHZ account): https://psapp.ee.ethz.ch/Bitte beachten Sie, dass die Seite jeweils erst zwei Wochen vor Semesterbeginn zugänglich ist und im Verlauf des Semesters wieder abgeschaltet wird. Die Einschreibung ist nur von Freitag vor Semesterbeginn bis zum ersten Freitagmittag im Semester möglich.To access the offer and to enroll for courses log in (with your n.ethz account): https://psapp.ee.ethz.ch/Please note that the P&S-site is accessible no earlier than two weeks before the start of the semester until four weeks after the start of the semester. Enrollment is only possible from Friday before the start of the semester until noon of the first Friday in the semester.",
        "hours_per_week": 4,
        "schedule": [
          {
            "venue": [
              "ETLD 12"
            ],
            "day": "Wed",
            "time": "08:15-12:00"
          },
          {
            "venue": [
              "GLCE 24"
            ],
            "day": "24.09.",
            "time": "08:15-12:00"
          },
          {
            "venue": [
              "GLCE 29.1"
            ],
            "day": "01.10.",
            "time": "08:15-12:00"
          },
          {
            "venue": [
              "GLCE 29.1"
            ],
            "day": "08.10.",
            "time": "08:15-12:00"
          },
          {
            "venue": [
              "GLCE 29.1"
            ],
            "day": "15.10.",
            "time": "08:15-12:00"
          },
          {
            "venue": [
              "GLCE 29.1"
            ],
            "day": "22.10.",
            "time": "08:15-12:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The category of \"Laboratory Courses, Projects, Seminars\" includes courses and laboratories in various formats designed to impart practical knowledge and skills. Moreover, these classes encourage independent experimentation and design, allow for explorative learning and teach the methodology of project work.",
      "learning_objectives": "The objective of this P&S is to make a real-world quad-rotor fly autonomously by applying the control and estimation theory taught in class.\nDetails of this P&S course can be found at: \nhttps://www.dfall.ethz.ch/pands.php\nA video showing highlights from HS2018 can be seen here: \nhttps://www.youtube.com/watch?v=PEg-XHSXd58\nA video showing how we adapted to the online setting for COVID-19 can be seen here: \nhttps://www.youtube.com/watch?v=nHcfb3OprB",
      "content": "In the first half of the P&S, we will introduce the physical model for a quad-rotor and use this to apply the control and estimation techniques that are taught in the 5th semester in the Control Systems 1 (CS1) class. The students will then create their own control functions for a quad-rotor and test these in simulation. The second half of the course will involve the students implementing the control and estimation algorithms they design in the real-world on our fleet of nano-quad-rotors. Once stable flight is achieved, the students will have the freedom to perform tasks with the quad-rotor. By implementing the control and estimation algorithms on a real quad-rotor, the students will gain experience in how decisions in the modelling and design stage affect real-world performance.\nThe simulations will be coded in MATLAB, and the real-world implementation in C++.\nImportant Information:\nStudents must be in the 5th semester.\nThe first class will be on Wednesday, September 24 for all students.\nClasses will then occur every second week. The students will be split into two groups and the classes for each group will occur on alternating weeks.\nIt is preferable to be taking the Control Systems 1 (CS1) course but not mandatory. Those students who are not taking CS1 will need to complete some extra reading to understand some aspects of this P&S.The simulations will be coded in MATLAB, and the real-world implementation in C++."
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Electrical Engineering and Information Technology Bachelor",
        "section": "Projects & Seminars (only for BSc EEIT)",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "327-1210-10L",
    "title": "Research Project",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "Only for Materials Science MSc, Programme Regulations 2023",
    "lecturers": [],
    "classes": [
      {
        "type": "Independent project",
        "notes": "Ausführung in der Regel während der vorlesungsfreien Zeit",
        "hours_per_week": 320,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Independent scientific practice of 8 weeks which is completed with a written report.",
      "learning_objectives": "Projects, with themes from the chosen scientific fields of interest, are intended to familiarise candidates with scientific procedures and operational methodologies through supervised participation in current research work."
    },
    "performance_assessment": [
      {
        "ects_credits": 12,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Materials Science Master",
        "section": "Research Project (only for Programme Regulations 2023)",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "052-0845-25L",
    "title": "Reflection on Exhibition and Art Practice Now. Colonial Influence? Focus on the Graphic Arts Collect",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "German",
    "comment": "",
    "lecturers": [
      "P. Ursprung"
    ],
    "classes": [
      {
        "type": "Exercise",
        "notes": "Does not take place this semester.Permission from lecturers required for all students. \r\n  ",
        "hours_per_week": 2,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "In autumn 2024, two exhibitions take place in Zurich focusing on Switzerland and its colonial interdependencies. In the seminar, this topic will be addressed using the Graphische Sammlung ETH Zürich as an example. The students will research a selection of works from the collection, read specialized texts and discuss the jointly visited exhibitions.",
      "learning_objectives": "Students learn about the history of the collection and work on individual works of the Graphische Sammlung ETH Zürich with a possibly colonial influence – whether in terms of provenance, titles or pictorial content. At the same time, students read and contextualize selected specialized texts on decolonization. During the two exhibition visits (Landesmuseum Zürich: kolonial – Globale Verflechtungen der Schweiz / exhibition space extract at ETH Zürich: Koloniale Spuren – Sammlungen im Kontext), participants will familiarize themselves with various forms of presentation and ways of communicating the topic.",
      "content": "It has long been known that although Switzerland itself was not a colonial power, it nevertheless has complex colonial ties. This will be the subject of two different exhibitions in Zurich in autumn 2024 and will also be the topic of a seminar focusing on a collection of ETH Zurich: Graphische Sammlung ETH Zürich. In addition to reading specialized texts and visiting the exhibitions at Landesmuseum ((kolonial – Globale Verflechtungen der Schweiz) as well as at extract at ETH Zurich (Koloniale Spuren – Sammlungen im Kontext), the focus will be on analyzing individual works from the collection. Are there titles, pictorial contents or provenances that need to be critically questioned? If so, how should they be dealt with? What possibilities are conceivable with regard to the cataloguing and presentation of colonial works? And finally, what new insights can be gained by taking a different look at one's own collection, its history, and its art collection? Through theoretical reflection and practical work with specific case studies, students will familiarize the topic from two different angles.",
      "literature": "The compulsory texts will be available at the beginning of the seminar.",
      "prerequisites": "Students have to attend regularly at the seminar inside and outside of ETH, to take part in the discussions and to prepare the selected texts. Each participant is required to research a work and to summarize the results in a text as well as in a short presentation.\nThe seminar is limited to 20 people. There will be a waiting list.\nPlease note:\nSeveral meetings will take place at Graphische Sammlung ETH Zürich in the main building or in museums in Zurich. Time for travel before and after the meetings is therefore necessary."
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "German",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Architecture Bachelor",
        "section": "History and Theory of Architecture",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "701-0201-00L",
    "title": "Introduction to Environmental Organic Chemistry",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "M. Sander",
      "K. McNeill"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "CHNF 46"
            ],
            "day": "Tue",
            "time": "10:15-12:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Important organic environmental pollutants are presented. The physical and chemical basics required for understanding the environmental behavior of such pollutants are taught and deepened in exercises.",
      "learning_objectives": "The students are able to\n- name and recognize the most important classes of environmentally relevant anthropogenic chemicals and identify chemical moieties governing their fate processes.\n- explain, on the basis of physical-chemical foundations, the most important processes (i.e., partitioning and substitution and elimination reactions) which determine the environmental behavior of organic pollutants.\n- identify, on the basis of chemical structure, the processes relevant for the environmental behavior of a compound.\n- critically evaluate published work and data.",
      "content": "- Overview of the most important classes of environmental organic pollutants\n- Molecular interactions that determine the partitioning behavior (adsorption and absorption processes) of organic compounds between different environmental compartments (gas, liquid, solid)\n- Physical-chemical properties (vapor pressure, aqueous solubility, air-water partition constant, organic solvent-water partition constants, etc) and partitioning behavior of organic compounds between environmentally relevant phases (air, aerosols, soil, water, biota)\n- Chemical transformation reactions of organic pollutants in aquatic and in terrestrial environments (hydrolysis, elimination, addition)",
      "lecture_notes": "Script will be distributed",
      "literature": "Schwarzenbach, R.P., P.M. Gschwend, and D.M. Imboden. \nEnvironmental Organic Chemistry. 2nd Ed. Wiley, New York, 1313 p.(2003) \nGoss, K.U. and Schwarzenbach, R.P. (2003). \"Rules of thumb for assessing equilibrium partitioning of organic compounds-success and pitfalls\", Journal of Chemical Education, 80, 4, 450-455.",
      "prerequisites": "Die Lehrveranstaltung richtet sich nicht nur an jene Studierenden, welche sich später chemisch vertiefen wollen, sondern ausdrücklich auch an alle jene, welche sich mit der Problematik von organischen Schadstoffen in der Umwelt vertraut machen wollen, um dieses Wissen in anderen Vertiefungen anzuwenden"
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "written 60 minutes, oral 30 minutes",
        "additional_info": "The exam questions will be in both German and English.   \nDie Prüfungsfragen werden in Deutsch und Englisch gestellt.",
        "exam_aid": "none",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Environmental Sciences Bachelor",
        "section": "Biogeochemistry",
        "type": "W"
      },
      {
        "program": "Environmental Sciences Bachelor",
        "section": "Environmental Chemistry/Ecotoxicology",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "052-0843-25L",
    "title": "History of Art and Architecture: Spatial Histories of Cultural Displacement",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "German",
    "comment": "",
    "lecturers": [
      "M. Gnehm"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "Keine Lehrveranstaltung am 23.10.2025 (Seminarwoche) sowie in den beiden letzten Semesterwochen (vor Schlussabgaben).",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "HILF 10.3"
            ],
            "day": "Thu",
            "time": "15:45-17:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The seminar discusses histories of cultural displacement in the postcolonial space.",
      "learning_objectives": "Participants gain familiarity with the critical analysis of postcolonial discourse and its application to architecture.",
      "content": "Inspired by Gayatri C. Spivak's postcolonial positioning \"in terms of reversing, displacing and seizing\" imperialist value-coding and Homi K. Bhabha's analysis of \"shifting margins of cultural displacement\", the seminar discusses texts and buildings on and from so-called \"non-Western\" spaces. With reference to postcolonial approaches, topics include, in addition to Western colonial and \"ethnographic\" interests, Charles Correa and Balkrishna Doshi's \"quest for identity\" in India against the backdrop of an \"imposed\" Western modernism, Minnette de Silva's retreat into local communities and Geoffrey Bawa's juggling with national and global expectations in Sri Lanka, or Hassan Fathy's attempts to revive ancient techniques and types in Egypt.",
      "literature": "Syllabus and readings will be presented in the first class.",
      "prerequisites": "Maximum 20 participants"
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "German",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Architecture Bachelor",
        "section": "History and Theory of Architecture",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "752-1000-00L",
    "title": "Food Chemistry I",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "German",
    "comment": "",
    "lecturers": [
      "L. Nyström",
      "S. Boulos",
      "M. Erzinger"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "LFOC 13"
            ],
            "day": "Fri",
            "time": "14:15-16:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Descriptive chemistry of food constituents (focus on proteins, lipids, carbohydrates). \nReactions which affect the colour, flavour, texture, and the nutritional value of food raw materials and food products during processing, storage and preparation in a positive or in a negative way (introduction to lipid oxidation, Maillard reaction).",
      "learning_objectives": " Recognize chemical structures of the main ingredients and be able to draw them themselves\n Being able to recognize functional groups and assess their properties\n Understand chemical reactions and be able to estimate their influence on the quality of a food product\n Being able to explain the Maillard reaction and lipid oxidation",
      "content": "Descriptive chemistry of food constituents (focus on proteins, lipids, carbohydrates). \nReactions which affect the colour, flavour, texture, and the nutritional value of food raw materials and food products during processing, storage and preparation in a positive or in a negative way (introduction to lipid oxidation, Maillard reaction). \nLinks to food analysis, food processing, and nutrition. \nTopics:\n- Structure, properties, reactivity of food ingredients\n- Focus: Main ingredients (carbohydrates, proteins, lipids)\n- Influence of chemical reactions on food quality\n- Introduction Maillard, lipid oxidation\n- Selected (possibly changing) food chemistry topics (e.g. baking, milk, flavor, alcoholic beverages, bioactive substances, etc.)\nThe lectures Food Chemistry I and Food Chemistry II constitute a unit.",
      "lecture_notes": "The lectures are supplemented with handouts.",
      "literature": "H.-D. Belitz, W. Grosch, P. Schieberle, Food Chemistry, 4. Edition, Springer-Verlag, Berlin, Heidelberg, 2009\nO.R. Fennema, Fennema's food chemistry, 5. Edition, edited by S. Damodaran, K.L. Parkin, CRC Press, Boca Raton, 2017"
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "end-of-semester examination",
        "language_of_examination": "German",
        "repetition": "A repetition date will be offered in the first two weeks of the semester immediately consecutive.",
        "examination": "written 105 minutes",
        "additional_info": "Die Gesamtnote setzt sich zusammen aus der Leistung der Semesterendprüfung (90%) sowie der selbständig zu bearbeitenden Aufgaben (10%). Diese Aufgaben sind ein obligatorisches Leistungselement. Ohne Absolvierung der Aufgaben wird für das Leistungselement die Note 1 erteilt (10% der Gesamtnote). Zusätzlich kann das erfolgreiche Lösen von zusätzlichen Lernelementen zur Erhöhung der Gesamtnote im Umfang von maximal 0.25 Notenpunkten führen.",
        "exam_aid": "Keine",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Food Science and Nutrition Bachelor",
        "section": "Core Courses",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "376-1222-00L",
    "title": "Motor Neurorehabilitation",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "M. Branscheidt",
      "C. E. Awai",
      "C. Bauer",
      "B. De las Heras de Miguel",
      "S. Giovanoli",
      "R. Gonzenbach",
      "L. Legrand",
      "A. Luft",
      "W. Mahmoud",
      "J. Pohl"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "CHNE 42"
            ],
            "day": "Tue",
            "time": "12:15-14:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "This course provides a holistic, clinical view on the in- and outpatient rehabilitation process of neurological diseases with a special focus on movement deficits. Pharmacological, training and medical device-supported interventions with their potential and limitations are discussed from a clinical perspective along the patient journey – covering the different phases of inpatient rehab.",
      "learning_objectives": "Students are expected to:\n- develop a holistic, clinical view on the different phases of neurorehabilitation\n- understand how motor deficits develop, which pathology to the central nervous system\ncauses which type of deficit and how each deficit can be treated\n- understand different patient journeys in dependence on the underlying deficits and individual personal and environmental factors\n- discuss and interpret the impact of clinical trial findings for rehabilitation",
      "content": "- Symptomatology: Motor deficits in clinical practice\n- Disorders leading to motor deficits 1: Stroke and brain trauma\n- Disorders leading to motor deficits 2: Spinal cord injury\n- Disorders leading to motor deficits 3: Peripheral nerve injury and muscle diseases\n- Disorders leading to motor deficits 4: Movement disorders\n- Brain plasticity in the motor system\n- Training interventions 1: Strength and endurance\n- Training interventions 2: Stance and gait\n- Training interventions 3: Arm and fine motor control\n- Pharmacological support for recovery\n- Brain stimulation to support motor recovery\n- Movement and cognition & vision\n- Motor learning based training interventions\n- Clinical importance of motivation for movement recovery",
      "prerequisites": "Basic knowledge on anatomy and physiology of the central nervous system required."
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is only offered in the session after the course unit. Repetition only possible after re-enrolling.",
        "examination": "written 90 minutes",
        "additional_info": "Compulsory Continuous Performance Assessment: Mandatory group presentations in the last semester week. \nThe compulsory continuous performance assessment is ungraded (pass/fail) but must be passed to take the written examination. The written examination contributes 100% to the overall grade.",
        "exam_aid": "None",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Health Sciences and Technology Master",
        "section": "Rehabilitation Medicine",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "102-0000-10L",
    "title": "Excursions for Environmental Engineers I",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "German",
    "comment": "No registration through myStudies. The registration for excursions and field courses goes through http://exkursionen.umwelting.ethz.ch/ only.",
    "lecturers": [
      "J. Wang"
    ],
    "classes": [
      {
        "type": "Practical / laboratory course",
        "notes": "Exkursionsprogramme gemäss separater Information.",
        "hours_per_week": 2,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Half-day to one-day excursions as a supplement to the environmental engineering lectures.",
      "learning_objectives": "As a supplement to the environmental engineering-specific lectures, the professorships offer half-day to one-day excursions in various subject areas. \nDuring the excursions, the students deepen the specialist knowledge acquired in the lectures and self-study and establish a link to practice and research.\nThese excursions are open to all Bachelor's students of Environmental Engineering, depending on availability, and can be assessed with credit points as part of the subject-specific electives. \nThe excursions are voluntary and should preferably be attended from the 4th semester onwards."
    },
    "performance_assessment": [
      {
        "ects_credits": 1,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "German",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Environmental Engineering Bachelor",
        "section": "Excursions of Subject-specific electives",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "078-0101-00L",
    "title": "Postproduction I (EPFL)",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "**Course at EPFL**",
        "hours_per_week": 30,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The post-production is an intensive three-week design workshop where individual projects are revised to fit into a collective design narrative.",
      "learning_objectives": "Collective design skills and methods, and spatial upscaling.",
      "content": "Collective design session, feedback sessions."
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition possible without re-enrolling for the course unit.",
        "additional_info": "Registration modalities, date and venue of this performance assessment are specified solely by the EPFL.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "MAS in Urban and Territorial Design",
        "section": "Design Studio and Postproduction",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "511-1001-00L",
    "title": "Biopharmacy (Crash Course)",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "Obligatory course if assigned by the Admission committee.",
    "lecturers": [
      "S.‑D. Krämer"
    ],
    "classes": [
      {
        "type": "Seminar",
        "notes": "",
        "hours_per_week": 14,
        "schedule": [
          {
            "venue": [
              "HCIJ 8"
            ],
            "day": "Tue/1",
            "time": "09:45-11:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "This course provides the basic concepts of biopharmacy (ADMET, absorption, distribution, metabolism, excretion, toxicity of drugs) and pharmacokinetics. After an introduction to the fundamental parameters and concepts, the participants will study independently and apply and consolidate their knowledge in tutorials.",
      "learning_objectives": "- Knowledge of the ADMET processes and the respective pharmacokinetic parameters.\n- Interpretation of pharmacokinetic parameters.\n- Analysis of drug plasma concentration-time curves.\n- Prediction of pharmacokinetic parameters based on in vitro assays and physicochemical drug properties.\n- Knowledge of the effects of physiological factors on the pharmacokinetic parameters and on drug plasma and tissue concentrations.\n- Design of dosage regimens, based on pharmacokinetic parameters.\n- Prediction of drug-drug interaction potentials based on in vitro assays and pharmacokinetic parameters.",
      "content": "- Introduction to biopharmacy (ADMET) and pharmacokinetics.\n- Definition of the most important pharmacokinetic parameters and their calculation from plasma concentration-time curves.\n- Introduction to compartment models, statistical models, physiological models.\n- Pharmacokinetic profiling of drugs for therapy optimization and for the analysis of the interaction potential.\n- Design of dosage regimens. In vitro assays to predict pharmacokinetic parameters.",
      "lecture_notes": "Slides, see documents repository.",
      "literature": "Dennis A. Smith, Charlotte Allerton, Amit S. Kalgutkar, Han van de Waterbeemd, Don K. Walker (Eds.) Pharmacokinetics and Metabolism in Drug Design. 3rd edition, 2012. Wiley online library.\nDOI: 10.1002/9783527645763\nhttp://onlinelibrary.wiley.com/book/10.1002/9783527645763",
      "prerequisites": "Obligatory course if assigned by the Admission committee.\nCredit points restricted to students assigned by the Admission committee."
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition possible without re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Pharmaceutical Sciences Master",
        "section": "Electives I",
        "type": "E-"
      }
    ]
  },
  {
    "course_id": "063-0901-00L",
    "title": "Construction History: The Construction Site and Its Technology",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "German",
    "comment": "",
    "lecturers": [
      "S. Holzer"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "Keine Lehrveranstaltung am 23.10.2025 (Seminarwoche) sowie in den beiden letzten Semesterwochen (vor Schlussabgaben).",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "HILE 1"
            ],
            "day": "Thu",
            "time": "08:00-09:35"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "History of the construction site and its technology",
      "learning_objectives": "Introduction to Construction History and the so-called \"building archeology\": ability to perform a \"cloe reading\" of historic built fabric, based on an in-depth knowledge on historic production techniques, both in the workshop and on the construction site itself. The focus is on constructions in stone.",
      "content": "This lecture series deals with the history of the production of buildings. This history draws heavily on pictorial and archival sources, but the lecture will always establish the link to traces observable on site. In that sense, the lecture is an introduction to the wide topic of \"building archeology\". Among others, we will cover the following topics:\n- construction materials, tools and tooling of construction elements\n- material flow and economic boundary conditions of the construction site\n- construction site technology and construction machinery (scaffolding, cranes, etc.)\n- history of building production \nThe autumn semester is primarily dedicated to building with stone: from quarrying to dressing and lifting. We consider tools, construction site technology such as scaffolding, centring and other temporary works, cranes. We study all types of stone constructions, from foundations to walls to vaults, from concrete-like rubble stone through small dressed stone to huge monoliths.\nThe spring term lecture, conversely, is mostly dedicated to timber construction and to the evolution of structural concepts over time.",
      "lecture_notes": "PDFs of the lecture slides will be provided before the lecture. Furthermore, the audience will be granted access to recent journal articles and book chapters providing in-depth insight into the topics covered by the lecture."
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "session examination",
        "language_of_examination": "German",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "written 45 minutes",
        "exam_aid": "Wörterbuch (nicht elektronisch)",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Architecture Master",
        "section": "Field of Historic Building Research and Conservation",
        "type": "W"
      },
      {
        "program": "MAS in Preservation and Construction History",
        "section": "Major Courses and Cooperations",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "052-1107-25L",
    "title": "Architectural Design V - IX: sutura (M. Voser)",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "German",
    "comment": "Please register (www.mystudies.ethz.ch) only after the internal enrolment for the design classes (see http://www.einschreibung.arch.ethz.ch/design.php).Project grading at semester end is based on the list of enrolments on 29.10.2025 (valuation date) only. This is the ultimate deadline to unsubscribe or enroll for the studio.",
    "lecturers": [
      "M. Voser"
    ],
    "classes": [
      {
        "type": "Exercise",
        "notes": "Keine Lehrveranstaltung am 21/22.10.2025 (Seminarwoche).",
        "hours_per_week": 16,
        "schedule": [
          {
            "venue": [
              "HILC 15"
            ],
            "day": "Tue",
            "time": "09:45-17:30"
          },
          {
            "venue": [
              "HILC 15"
            ],
            "day": "Wed",
            "time": "08:00-17:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "RETHINKING LANDSCAPE STRUCTURES\nThe semester explores new ways of dealing with infrastructure projects and exemplary climate adaptations of the Swiss cultural landscape.",
      "learning_objectives": "DESIGNING LANDSCAPES AND PROCESSES\nThe primary goal of the studio is to project landscapes. This entails the constant oscillation between territorial relationships and local actions - between landscape space and place.\nTHINKING IN SYSTEMS\nDue to the dynamics of their constituent elements such as soil, water and vegetation, landscapes change their dimensions and character with cycles and time. Designing landscape consequently means thinking in and designing systems and processes.\nDEVELOPMENT OF A LANDSCAPE VOCABULARY\n'Reading' a landscape, its space-defining elements – like water, topography and vegetation – and the processes and forces that shape them is as much a focus of teaching as designing. Thus, an intensive examination of our understanding of landscape and our relationship to nature goes hand-in-hand with the semester.\nMETHOD TO DESIGN FROM AND WITH PROCESSES\nBecause of the complexity of territory and task, the iterative design method is followed, oscillating between designing and analyzing, and between large and small scales. Developing an attitude, crystallizing the specific themes, and choosing the appropriate design tools are as much a part of the work process as designing the transformation processes.",
      "content": "PROTOTYPICAL CASE STUDIES ON THE CLIMATE ADAPTATION OF THE SWISS LANDSCAPE\nBased on specific issues such as landslide risks or planned tunnel projects, new innovative ways of dealing with natural events and infrastructure projects are designed - always in search of multi-layered added value for people, flora and fauna. \nParallel to the landscape design, the students get to know landscape architecture as one of the instruments with which today's questions can be answered. Because these increasingly demand different answers - systemic thinking, designing processes, accepting change and a differentiated landscape vocabulary are prerequisites for this.",
      "prerequisites": "Group work only\nAdditional costs: ~ CHF 350 including a guided site visit at the beginning of the semester"
    },
    "performance_assessment": [
      {
        "ects_credits": 14,
        "assessment_type": "graded semester performance",
        "language_of_examination": "German",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "additional_info": "Letzter Abmeldetermin für das Entwurfssemester ist der 30.10.2024, 24:00 Uhr. \nDas Löschen einer Belegung nach diesem Datum ist nicht zulässig.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Architecture Bachelor",
        "section": "Architectural Design (from 5. Semester on)",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "101-5000-00L",
    "title": "Ethics and Scientific Integrity for Doctoral Students of D-BAUG",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "C. Sailer"
    ],
    "classes": [
      {
        "type": "Seminar",
        "notes": "Groups are selected in myStudies.Individual study time about 20 hours (online lectures) plus two half days in person.The two half days in person as f2f-workshops will be in 2 runs.",
        "hours_per_week": 20,
        "schedule": [
          {
            "venue": [
              "HILE 19.3"
            ],
            "day": "03.10.",
            "time": "13:45-17:30"
          },
          {
            "venue": [
              "HILE 19.3"
            ],
            "day": "31.10.",
            "time": "13:45-17:30"
          },
          {
            "venue": [
              "HILE 19.3"
            ],
            "day": "28.11.",
            "time": "13:45-17:30"
          },
          {
            "venue": [
              "HILE 19.3"
            ],
            "day": "12.12.",
            "time": "13:45-17:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "This course sensitises doctoral students to ethical issues that may arise during their doctorate. After an introduction to ethics and good scientific practice, students are familiarised with resources that can assist them with ethical decision-making. Students are given the opportunity to apply their knowledge and train their newly acquired skills in an interactive, discipline specific context.",
      "learning_objectives": "Doctoral students learn how to identify, analyse and address ethical issues in their own scientific research. Furthermore, they are encouraged to reflect on their professional role as scientific researchers.",
      "content": "Part I\nThe self-paced e-learning course consists of several modules:\nModule Ethics:\nIntroduction to moral theory (with emphasis on practical guidance regarding decision making)\nModule Ethics in scientific research:\nIntroduction to ethical issues that occur within scientific research (i.e. regarding authorship, cooperation, data use and sharing, and other aspects that are subject to scientific integrity and good scientific practice).\nModule Identification of ethical issues:\nA variety of tools and resources that help identify ethical issues are presented and explained\nModule Setting up a strategy:\nExample examination of a case regarding its ethical scope (students develop their own strategy to examine situations for their ethical implications).\nModule Making decisions:\nDifferent ways of addressing ethical issues are presented and explained (i.e. how to make hard choices or solve ethical dilemmas).\nPart II\nThe second, face-to-face part of this course focuses on discipline-specific aspects in the general area of Engineering Sciences. It provides an interactive learning environment. Students get to apply their knowledge, and they are encouraged to reflect on ethical problems and to critically discuss them with fellow doctoral students",
      "prerequisites": "For doctoral students only. Course"
    },
    "performance_assessment": [
      {
        "ects_credits": 1,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Doctorate Civil, Environmental and Geomatic Engineering",
        "section": "Transferable Skills",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "535-0900-00L",
    "title": "Seminars on Drug Discovery and Development",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "R. Schibli",
      "A. E. Fraley",
      "N. Grob",
      "C. Halin Winter",
      "J. Hall",
      "J.‑C. Leroux",
      "U. Quitterer",
      "H. U. Zeilhofer"
    ],
    "classes": [
      {
        "type": "Colloquium",
        "notes": "Guests and titles are published in the ETH Events Calendar.",
        "hours_per_week": 1,
        "schedule": [
          {
            "venue": [
              "HCIJ 4"
            ],
            "day": "Wed",
            "time": "16:45-18:30"
          },
          {
            "venue": [
              "HILE 9"
            ],
            "day": "22.10.",
            "time": "11:45-13:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "State-of-the-art information on drug discovery and development by experts from academia and industry.",
      "learning_objectives": "State-of-the-art information on drug discovery and development.",
      "content": "Seminar series of the Institute of Pharmaceutical Sciences. Experts from academia and industry report on relevant topics."
    },
    "performance_assessment": [
      {
        "ects_credits": 1,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Doctorate Chemistry and Applied Biosciences",
        "section": "Pharmaceutical Sciences",
        "type": "E-"
      }
    ]
  },
  {
    "course_id": "103-0298-10L",
    "title": "Project 1",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [],
    "classes": [
      {
        "type": "Independent project",
        "notes": "",
        "hours_per_week": 330,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The projects are supervised by a professorship and teach the students in-depth specialist knowledge in the context of projects to be worked on independently in selected areas of Geomatics, promoting teamwork,\nproject organisation and technical writing and presentation.",
      "learning_objectives": "The projects teach the students in-​depth specialist knowledge in the context of projects to be worked on independently in selected areas of Geomatics, promoting teamwork, project organisation and technical writing and presentation."
    },
    "performance_assessment": [
      {
        "ects_credits": 12,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Geomatics Master",
        "section": "Project Works",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "376-1103-00L",
    "title": "Frontiers in Nanotechnology",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "X.‑H. Qin",
      "M. Aramesh",
      "P. Wick"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "",
        "hours_per_week": 4,
        "schedule": [
          {
            "venue": [
              "HGF 26.5"
            ],
            "day": "Mon",
            "time": "10:15-12:00"
          },
          {
            "venue": [
              "LFWB 1"
            ],
            "day": "Fri",
            "time": "14:15-16:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Many disciplines are meeting at the nanoscale, from physics, chemistry to engineering, from the life sciences to medicine.  The course will prepare students to communicate more effectively across disciplinary boundaries, and will provide them with deep insights into the various frontiers.",
      "learning_objectives": "Building upon advanced technologies to create, visualize, analyze and manipulate nano-structures, as well as to probe their nano-chemistry, nano-mechanics and other properties within manmade and living systems, many exciting discoveries are currently made.  They change the way we do science and result in so many new technologies.\nThe goal of the course is to give Master and Graduate students from all interested departments an overview of what nanotechnology is all about, from analytical techniques to nanosystems, from physics to biology.  Students will start to appreciate the extent to which scientific communities are meeting at the nanoscale.  They will learn about the specific challenges and what is currently “sizzling” in the respective fields, and learn the vocabulary that is necessary to communicate effectively across departmental boundaries.\nEach lecturer will first give an overview of the state-of-the art in his/her field, and then describe the research highlights in his/her own research group. While preparing their Final Projects and discussing them in front of the class, the students will deepen their understanding of how to apply a range of new technologies to solve specific scientific problems and technical challenges. Exposure to the different frontiers will also improve their ability to conduct effective nanoscale research, recognize the broader significance of their work and to start collaborations.",
      "content": "Starting with the fabrication and analysis of nanoparticles and nanostructured materials that enable a variety of scientific and technical applications, we will transition to discussing biological nanosystems, how they work and what bioinspired engineering principles can be derived, to finally discussing biomedical applications and potential health risk issues. Scientific aspects as well as the many of the emerging technologies will be covered that start impacting so many aspects of our lives.  This includes new phenomena in physics, advanced materials, novel technologies and new methods to address major medical challenges.",
      "lecture_notes": "All the enrolled students will get access to a password protected website where they can find pdf files of the lecture notes, and typically 1-2 journal articles per lecture that cover selected topics."
    },
    "performance_assessment": [
      {
        "ects_credits": 4,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "additional_info": "The final grade consists of graded projects.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Biomedical Engineering Master",
        "section": "Track Core Courses",
        "type": "W"
      },
      {
        "program": "Biomedical Engineering Master",
        "section": "Recommended Elective Courses",
        "type": "W"
      },
      {
        "program": "Biomedical Engineering Master",
        "section": "Recommended Elective Courses",
        "type": "W"
      },
      {
        "program": "Doctorate Materials Science",
        "section": "Soft Materials (MaP Doctoral School)",
        "type": "W"
      },
      {
        "program": "Health Sciences and Technology Master",
        "section": "Elective Courses",
        "type": "W"
      },
      {
        "program": "Human Medicine Bachelor",
        "section": "Compensatory Courses",
        "type": "W"
      },
      {
        "program": "Human Medicine Bachelor",
        "section": "Compensatory Courses",
        "type": "W"
      },
      {
        "program": "MAS in Medical Physics",
        "section": "Core Courses",
        "type": "W"
      },
      {
        "program": "MAS in Medical Physics",
        "section": "Electives",
        "type": "W"
      },
      {
        "program": "MAS in Medical Physics",
        "section": "Electives",
        "type": "W"
      },
      {
        "program": "MAS in Medical Physics",
        "section": "Electives",
        "type": "W"
      },
      {
        "program": "Materials Science Master",
        "section": "Elective Courses",
        "type": "W"
      },
      {
        "program": "Science, Technology, and Policy Master",
        "section": "Life Science and Health",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "551-1005-00L",
    "title": "Bioanalytics",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "P. Picotti",
      "F. Allain",
      "V. Korkhov",
      "M. Pilhofer",
      "R. Schlapbach",
      "K. Weis"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "",
        "hours_per_week": 4,
        "schedule": [
          {
            "venue": [
              "HPVG 5"
            ],
            "day": "Mon",
            "time": "07:45-09:30"
          },
          {
            "venue": [
              "HPVG 5"
            ],
            "day": "Fri",
            "time": "09:45-11:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The course will introduce students to a selected set of laboratory techniques that are foundational to modern biological research.",
      "learning_objectives": "For each of the techniques covered in the course, the students will be able to explain:\na) the physical, chemical and biological principles underlying the technique, \nb) the requirements for the sample, \nc) the type of raw data collected by the technique, \nd) the assumptions and auxiliarry information used in the interpretation of the data and \ne) how these data can be used to answer a given biological question. \nBy the end of the course the students will be able to select the appropriate experimental technique to answer a given biological problem and will be able to discuss the \nadvantages and limitations of individual techniques as well as how different techniques can be combined to gain a more complete understanding of a given biological questions.",
      "content": "The course will be based on a combination of lectures, selfstudy elements and exercises.\nThe focus will be on the following experimental techniques:\n- DNA sequencing\n- chromatography\n-  mass-spectrometry\n- UV/Vis and fluorescence spectrometry\n- light microscopy\n- electron microscopy\n- X-ray crystallography\n- NMR spectroscopy",
      "lecture_notes": "The course is supported by a Moodle page that gives access to all supporting materials necessary for the course."
    },
    "performance_assessment": [
      {
        "ects_credits": 4,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "written 150 minutes",
        "additional_info": "The examination will be carried out electronically.",
        "exam_aid": "A calculator and dictionary will be available via apps inside the exam browser.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Biochemistry - Chemical Biology Master",
        "section": "Electives",
        "type": "W"
      },
      {
        "program": "Biology Bachelor",
        "section": "Second Year Courses",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "227-0615-00L",
    "title": "Simulation of Photovoltaic Devices - From Materials to Modules",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "U. Aeberhard"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "LEEC 104"
            ],
            "day": "Thu",
            "time": "14:15-16:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The lecture provides an introduction to the theoretical foundations and numerical approaches for the simulation of photovoltaic power conversion, from the microscopic description of component materials to macroscopic continuum modelling of solar cells and network simulation or effective models for performance prediction of entire solar modules.",
      "learning_objectives": "Get an overview of the current status of photovoltaic technology. Understand the physics of photovoltaic energy conversion and solar cell device operation. Know how to obtain and assess by simulation the key material properties and device parameters. Be able to use standard device simulation tools to analyze, optimize, and predict the performance of solar cells and modules.",
      "content": "Photovoltaic technology: history and overview; The solar spectrum; Thermodynamics of solar energy conversion; Detailed balance models and efficiency limit; Microscopic rates of charge carrier generation and recombination; Optical simulation of solar cells; Models for charge transport in semiconductor devices; High-efficiency wafer-based (silicon) photovoltaics; Thin film photovoltaics based on disordered materials (amorphous silicon, organic PV); High-efficiency thin film photovoltaics (CIGS, CdTe, metal-halide perovskites); PV beyond the single junction detailed balance (Shockley-Queisser) limit; Simulation of photovoltaic modules; Energy yield and performance modelling for PV systems; Quantum simulation of nanostructure-based solar cell devices (bonus lecture)",
      "literature": "- P. Würfel &U. Würfel, „Physics of Solar Cells – From Basic Principles to Advanced Concepts“, Wiley-VCH, 2005.\n- J. Nelson, „Physics of Solar Cells“, Imperial College Press, 2003.\n- M. A. Green, „Solar cells: operating principles, technology, and system applications“, Prentice Hall, 1982.\n- B. K. Ridley, \"Quantum Processes in Semiconductors\", Oxford Science Publications, 1993.\n- P.T. Landsberg, \"Recombination in semiconductors\", Cambridge University Pr., 1991.\n- C. Hamaguchi, \"Basic Semiconductor Physics\", Springer, Berlin, 2001.",
      "prerequisites": "Undergraduate physics (including basic quantum mechanics), mathematics, semiconductor devices, optics. Knowledge of some scripting language (e.g. python) is of advantage."
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "oral 30 minutes",
        "additional_info": "Compulsory continuous performance assessment task (must be passed on its own, assessed pass/fail):\nThe students have to prepare and give a short presentation based on a recent paper about a topic of the lecture (teams of up to 3 students possible).",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Doctorate Materials Science",
        "section": "Science & Technology of the Small (MaP Doctoral School)",
        "type": "W"
      },
      {
        "program": "Electrical Engineering and Information Technology Master",
        "section": "Specialisation Courses",
        "type": "W"
      },
      {
        "program": "Electrical Engineering and Information Technology Master",
        "section": "Specialisation Courses",
        "type": "W"
      },
      {
        "program": "Energy Science and Technology Master",
        "section": "Electrical Power Engineering",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "752-3000-AAL",
    "title": "Food Process Engineering I",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "Enrolment ONLY for MSc students with a decree declaring this course unit as an additional admission requirement.Any other students (e.g. incoming exchange students, doctoral students) CANNOT enrol for this course unit.",
    "lecturers": [
      "P. A. Fischer"
    ],
    "classes": [
      {
        "type": "Revision course / private study",
        "notes": "Self-study course. No presence required.",
        "hours_per_week": 120,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "To procure students with the basic physics of food process engineering, especially with the mechanical futures of food systems, i.e. basic principles of engineering mechanics, of thermodynamics, fluid dynamics and of dimension analyses for process design and Non-Newtonian fluid mechanics.",
      "learning_objectives": "1. Verständnis der Grundprinzipien der Thermodynamik, Fluiddynamik und ingenieurtechnischen Apparateauslegung. 2. Anwendung dieser Prinzipien auf Prozesse der Lebensmittelverfahrenstechnik.3. Molekulares Verständnis der Fliesseigenschaften von Lebensmittelsystemen mit nicht-Newtonschem Fliessverhalten.",
      "content": "1. Einführung 2. Grundlagen der Fluiddynamik 3. Grundlagen derThermodynamik 4. Grundlagen der Mechanik 5. Austausch und Transportvorgänge 6. Grundlagen der Ingenieurtechnischen Apparateauslegung 7. Grundlagen der Rheologie 8. Grundlagen der Schüttgutmechanik",
      "literature": "P. Grassmann: Einführung in die thermische Verfahrenstechnik, de Gruyter Berlin, 1997\nH.D. Baehr: Thermodynamik, Springer Verlag, Berlin, 1984"
    },
    "performance_assessment": [
      {
        "ects_credits": 4,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition possible without re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Food Science and Nutrition Master",
        "section": "Course Units for Additional Admission Requirements",
        "type": "E-"
      }
    ]
  },
  {
    "course_id": "860-0005-00L",
    "title": "Colloquium Science, Technology, and Policy (HS)",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "T. Schmidt",
      "E. Tilley"
    ],
    "classes": [
      {
        "type": "Colloquium",
        "notes": "Please find the programme on the ISTP website: http://www.istp.ethz.ch/events/colloquium.htmlThe series is open to the public. Lectures are from 12:15 - 13:15 and will be live-streamed on Zoom. The lecture will not be recorded. Registration to participate in the lecture hall is optional. If you wish to receive the Zoom link, please register on the website.",
        "hours_per_week": 1,
        "schedule": [
          {
            "venue": [
              "HGD 5.2"
            ],
            "day": "Wed",
            "time": "12:15-13:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Presentations by guest speakers from academia and practice/policy. Students are assigned to play a leading role in the discussion and write a report on the respective event.",
      "learning_objectives": "Students obtain insights into different policy-related research fields and participate in scientific discussions.",
      "content": "See the program on the ISTP website: \nhttp://www.istp.ethz.ch/events/colloquium.html\nThe series is open to the public. The lectures start at 12:15 and last 30  minutes, followed by an open discussion of 30 minutes.",
      "prerequisites": "open to anyone from ETH"
    },
    "performance_assessment": [
      {
        "ects_credits": 1,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Science, Technology, and Policy Master",
        "section": "Social Sciences",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "529-0632-00L",
    "title": "Homogeneous Reaction Engineering",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "P. Arosio"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "",
        "hours_per_week": 3,
        "schedule": [
          {
            "venue": [
              "HCIH 8.1"
            ],
            "day": "Tue",
            "time": "09:45-11:30"
          },
          {
            "venue": [
              "HCID 8"
            ],
            "day": "Wed",
            "time": "12:45-13:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Kinetics of homogeneous reactions. Ideal reactors: optimization of conversion and selectivity for complex kinetic networks. Thermal effects in chemical reactors. Residence time distribution. Analysis and design of real reactors. Fast reactions in turbulent flows. Sensitivity and stability of chemical reactors.",
      "learning_objectives": "Provide to the students a complete methodology for the analysis and design of homogeneous reactors",
      "content": "Kinetic models for homogeneous reactions. Collection and analysis of experimental rate data. Isothermal ideal reactors. Complex reaction networks. Reactor design for conversion and selectivity optimization. Adiabatic and non-isothermal reactors. Temperature effect on reversible reactions. Residence time distribution in chemical reactors. Role of mixing in turbolent reacting systems. Design of real reactors. Parametric sensitivity and stability in chemical reactors.",
      "lecture_notes": "Scripts are available on line on the web page of the Arosio group.",
      "literature": "H.S. Fogler, Elements of Chemical Reaction Engineering, Prentice Hall, 3rd edition, 1999\nO. Levenspiel, Chemical Reaction Engineering, John Wiley, 3rd edition, 1999"
    },
    "performance_assessment": [
      {
        "ects_credits": 4,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "oral 30 minutes",
        "additional_info": "The exam may start with a discussion of the exercises treated during the semester.\nSprache der Leistungskontrolle: Deutsch oder Englisch\nLanguage German or English\n0.25 extra credit for the final mark will be given to students who successfully complete and submit 80% of the problem sheets given during the course",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Chemical Engineering Bachelor",
        "section": "Examination Block IV",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "402-0830-00L",
    "title": "General Relativity",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "L. Senatore"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "",
        "hours_per_week": 4,
        "schedule": [
          {
            "venue": [
              "HPVG 4"
            ],
            "day": "Thu",
            "time": "11:45-13:30"
          },
          {
            "venue": [
              "HPVG 4"
            ],
            "day": "Fri",
            "time": "11:45-13:30"
          }
        ]
      },
      {
        "type": "Exercise",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "HITF 31.1",
              "HITJ 53",
              "HITK 51",
              "HITK 52"
            ],
            "day": "Thu",
            "time": "15:45-17:30"
          },
          {
            "venue": [
              "HITF 31.2",
              "HPLD 32"
            ],
            "day": "Fri",
            "time": "07:45-09:30"
          },
          {
            "venue": [
              "HILC 10.2",
              "HILD 10.2"
            ],
            "day": "Fri",
            "time": "08:00-09:35"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Introduction to the theory of general relativity. The course puts a strong focus on the mathematical foundations of the theory as well as the underlying physical principles and concepts. It covers selected applications, such as the Schwarzschild solution and gravitational waves.",
      "learning_objectives": "Basic understanding of general relativity, its mathematical foundations (in particular the relevant aspects of differential geometry), and some of the phenomena it predicts (with a focus on black holes).",
      "content": "Introduction to the theory of general relativity. The course puts a strong focus on the mathematical foundations, such as differentiable manifolds, the Riemannian and Lorentzian metric, connections, and curvature. It discusses the underlying physical principles, e.g., the equivalence principle, and concepts, such as curved spacetime and the energy-momentum tensor. The course covers some basic applications and special cases, including the Newtonian limit, post-Newtonian expansions, the Schwarzschild solution, light deflection, and gravitational waves.",
      "literature": "Parts of the lecture are based on the book \"General Relativity\" by R. Wald.\nOther suggested textbooks:\n“Gravitation\" by C. Misner, K, Thorne and J. Wheeler\n\"Spacetime and Geometry: An Introduction to General Relativity” by S. Carroll\n\"Gravitation and Cosmology\" by S. Weinberg"
    },
    "performance_assessment": [
      {
        "ects_credits": 10,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "written 180 minutes",
        "exam_aid": "10 double-sided A4 pages",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "High-Energy Physics (Joint Master with IP Paris)",
        "section": "Optional Subjects in Physics",
        "type": "W"
      },
      {
        "program": "Mathematics Bachelor",
        "section": "Selection: Mathematical Physics, Theoretical Physics",
        "type": "W"
      },
      {
        "program": "Mathematics Master",
        "section": "Selection: Mathematical Physics, Theoretical Physics",
        "type": "W"
      },
      {
        "program": "Mathematics Master",
        "section": "Theoretical Physics",
        "type": "W"
      },
      {
        "program": "Physics Master",
        "section": "Core Courses in Theoretical Physics",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "701-1271-00L",
    "title": "Statistical Learning for Atmospheric and Climate Science",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "L. Gudmundsson",
      "D. Nerini"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "CHNF 42"
            ],
            "day": "Thu",
            "time": "10:15-12:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "This course offers a systematic introduction to statistical and machine learning methods with focus on applications in atmospheric and climate science. Focus is on the theoretical and mathematical basis of supervised statistical learning (advanced regression, nonparametric methods) and their application in practice with hands-on exercises.",
      "learning_objectives": "Students:\n- Understand the theoretical basis of machine learning\n- Are familiar with overarching concepts such as bias-variance trade-off, cost-functions, hyper parameters, cross-validation \n- Have good command of the theoretical basis of selected machine learning tools\n- Are able to select the appropriate statistical learning tools to tackle atmospheric and climate research problems\n- Can apply methods of statistical learning in atmospheric and climate research",
      "content": "- Data in atmospheric and climate research (data types, observations, models)\n- Exploring properties of atmospheric and climate data (data in space and time, multivariate data)\n- Concepts of supervised learning (bias variance trade-off, overfitting, cross-validation)\n- Advanced linear regression (multiple linear regression, regularization)\n- Non-linear regression (local linear regression, regression trees, gradient boosting, random forests, neural networks)\n- Bootstrapping\n- Keynote speakers showcasing recent topics in statistical learning and high-level applications for atmospheric and climate research",
      "literature": "Hastie, T., Tibshirani, R. & Friedman, J. (2009). The elements of statistical learning (Ed. 2). New York: Springer series in statistics.\n(Link to book: \nhttps://web.stanford.edu/~hastie/Papers/ESLII.pdf\n, book homepage: \nhttp://web.stanford.edu/~hastie/ElemStatLearn/\n )\nJames, G., Witten, D., Hastie, T., & Tibshirani, R. (2013). An introduction to statistical learning. New York: springer. (Link to book: \nhttp://www-bcf.usc.edu/~gareth/ISL/ISLR%20First%20Printing.pdf\n, book homepage (exercises, etc.): \nhttp://www-bcf.usc.edu/~gareth/ISL/\n)\nBishop & Bishop (2023), Deep Learning Foundation and Concepts. Springer. (Link to book: \nhttps://doi.org/10.1007/978-3-031-45468-4\n). Book homepage: \nhttps://www.bishopbook.com/",
      "prerequisites": "- Knowledge of introductory statistics\n- Overview on the climate system\n- Basic experience in a programming language\nCourse is limited to 30 participants.\nExercises will be in the R for most of the sessions and in Python for deep learning."
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Space Systems Master",
        "section": "Deep Track Planetary Science",
        "type": "W+"
      },
      {
        "program": "Environmental Sciences Master",
        "section": "Additional Elective Courses",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "151-0525-00L",
    "title": "Dynamic Behavior of Materials",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "T. Tancogne-Dejean",
      "G. Pappas",
      "C. Roth"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "HGD 3.2"
            ],
            "day": "Fri",
            "time": "10:15-12:00"
          }
        ]
      },
      {
        "type": "Exercise",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "HGD 3.2"
            ],
            "day": "Fri",
            "time": "12:15-14:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Lectures and computer labs concerned with the modeling of the deformation response and failure of engineering materials (metals, polymers and composites) subject to extreme loadings during manufacturing, crash, impact and blast events.",
      "learning_objectives": "Students will learn to apply, understand and develop computational models of a large spectrum of engineering materials to predict their dynamic deformation response and failure in finite element simulations. Students will become familiar with important dynamic testing techniques to identify material model parameters from experiments. The ultimate goal is to provide the students with the knowledge and skills required to engineer modern multi-material solutions for high performance structures in automotive, aerospace and naval engineering.",
      "content": "Topics include temperature and strain rate dependent elasto-plasticity, dynamic brittle and ductile fracture; impulse transfer, impact and wave propagation in solids; computational aspects of material model implementation; simulation of dynamic failure of structures;",
      "lecture_notes": "Slides of the lectures, relevant journal papers and user manuals will be provided.",
      "literature": "Various books will be recommended pertaining to the topics covered.",
      "prerequisites": "Course in continuum mechanics (mandatory), finite element method (recommended)"
    },
    "performance_assessment": [
      {
        "ects_credits": 4,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "additional_info": "The computer lab sessions are elements of a compulsory performance assessments (Pass/Fail). The final exam consists of an oral presentation of a group project after the end of the semester. This project is devoted to the investigation of an engineering problem related to the course content. The groups will be able to choose from a selection of projects, which will be presented mid-semester. The work load on the project should not exceed 35h per student.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Doctorate Materials Science",
        "section": "Strength & Durability of Materials (MaP Doctoral School)",
        "type": "W"
      },
      {
        "program": "Mechanical Engineering Master",
        "section": "Core Courses",
        "type": "W"
      },
      {
        "program": "Micro- and Nanosystems Master",
        "section": "Elective Core Courses",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "227-0085-38L",
    "title": "P&S: Controlling Biological Neuronal Networks Using Machine Learning",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "J. Vörös"
    ],
    "classes": [
      {
        "type": "Practical / laboratory course",
        "notes": "Does not take place this semester.Für den Zugang zum Angebot und zur Einschreibung loggen Sie sich hier ein (mit Ihrem n.ETHZ account): https://psapp.ee.ethz.ch/Bitte beachten Sie, dass die Seite jeweils erst zwei Wochen vor Semesterbeginn zugänglich ist und im Verlauf des Semesters wieder abgeschaltet wird. Die Einschreibung ist nur von Freitag vor Semesterbeginn bis zum ersten Freitagmittag im Semester möglich.To access the offer and to enroll for courses log in (with your n.ethz account): https://psapp.ee.ethz.ch/Please note that the P&S-site is accessible no earlier than two weeks before the start of the semester until four weeks after the start of the semester. Enrollment is only possible from Friday before the start of the semester until noon of the first Friday in the semester.",
        "hours_per_week": 72,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The category of \"Laboratory Courses, Projects, Seminars\" includes courses and laboratories in various formats designed to impart practical knowledge and skills. Moreover, these classes encourage independent experimentation and design, allow for explorative learning and teach the methodology of project work.",
      "learning_objectives": "The way memory and learning is achieved in the brain is an unsolved problem. Due to its relative simplicity, in-vitro neuroscience can help us discover the fundamentals of information processing in the brain. For this we can simulate a small number of biological neurons on top of an array of microelectrodes. Such an approach allows us to simulate the electrical activity of the neurons when they get stimulated.\nFollowing this approach, we can investigate biological neural networks, that have about 5-50 neurons and a controlled network architecture. Still, their behavior remains highly unpredictable. Therefore, it is not yet clear how such networks need to be stimulated electrically in order to control their behavior. However, we can use machine learning to find a mapping between a stimulus and a desired response. More specifically, we can use reinforcement learning, since finding the right stimulation pattern is an instance of the so called multi-armed bandit problem.\nThis P&S consists of two parts. In the first part we will introduce you to the way neurons can be simulated. You will learn how neurons work and how they communicate. The second part will be about machine learning. We will discuss the basics of both artificial neural networks (ANN) and reinforcement learning. As homework exercises you will implement a reward function for a provided reinforcement learner, which will control your biological networks. In addition you will\nimplement an ANN, that replaces unsatisfactorily performing stimulation patterns with new patterns, that this network evaluates to perform better.\nIf the current situation will allow, the developed ANNs will be tested on real neurons in our laboratory.\nThis P&S will be given in English. In total, the P&S takes 8 afternoons and about 50 hours of homework (ANN implementation)."
    },
    "performance_assessment": [
      {
        "ects_credits": 4,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Electrical Engineering and Information Technology Bachelor",
        "section": "Projects & Seminars (only for BSc EEIT)",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "701-1339-00L",
    "title": "Soil Solids Laboratory",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "M. Plötze"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "Permission from lecturers required for all students. \r\n  ",
        "hours_per_week": 4,
        "schedule": [
          {
            "venue": [
              "HILE 5"
            ],
            "day": "Thu/1",
            "time": "08:00-09:35"
          },
          {
            "venue": [
              "HIFC 92.2"
            ],
            "day": "Thu/1",
            "time": "08:00-16:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The main part of the course is the investigation of real samples of soils/sediments in the lab working in groups. A brief theoretical introduction into the overall principle and the meaning of physical, mineralogical and chemical parameters of soils and sediments and into each analytical method for their investigation will be given in advance.",
      "learning_objectives": "Upon successful completion of this course students are able to:\n- describe structural, mineralogical and chemical properties of the inorganic solid part of soils and sediments,\n- propose and apply different advanced methods and techniques to measure these properties,\n- critically assess the data and explain the relationships between them,\n- communicate the results in a scientific report.\nThe competencies of process understanding, system understanding, concept development, and measurement methods are taught and assessed.",
      "content": "Basic introduction to mineralogy and texture of soils\nAnalytical techniques\nPractical exercises in sample preparation\nMeasurement and evaluation of the data:\n - physical parameters (grain size distribution, surface, densities, porosity, (micro)structur)\n- mineralogical/geochemical parameters (quantitative mineralogical composition, thermal analysis, cation exchange etc.)",
      "lecture_notes": "Selected handouts will be distributed during the course.",
      "literature": "Jasmund, K. , Lagaly, G. 1993. Tonminerale und Tone. Steinkopff: Darmstadt.\nScheffer, F. 2002. Lehrbuch der Bodenkunde / Scheffer/Schachtschabel. Spektrum: Heidelberg. 15. Aufl.\nDixon, J.B., Weed, S.B. 1989. Minerals in Soil Environments. SSSA Book Series: 1, 2nd Edition.\nSparks, D.L. 1996: Chemical Methods. SSSA Book Series 5, Part 3.\nDane, J.H., Topp, G.C. 2002: Physical Methods. SSSA Book Series 5, Part 4.\nUlery, A.L. & Drees, L.R. 2008: Mineralogical Methods. SSSA Book Series 5, Part 5.",
      "prerequisites": "In order to allow for effective lab work not more than 12 students can join the course.\nUseful preparatory courses are: \"Soil Chemistry\", \"“Clays in Geotechnics\"”, and  \"“X-ray powder diffraction”\"."
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Environmental Sciences Master",
        "section": "Electives Soils",
        "type": "W"
      },
      {
        "program": "Environmental Sciences Master",
        "section": "Methods and Tools: Lab Courses",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "406-0064-AAL",
    "title": "Physics I and II",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "Enrolment ONLY for MSc students with a decree declaring this course unit as an additional admission requirement.Any other students (e.g. incoming exchange students, doctoral students) CANNOT enrol for this course unit.",
    "lecturers": [
      "A. Vaterlaus"
    ],
    "classes": [
      {
        "type": "Revision course / private study",
        "notes": "Self-study course. No presence required.",
        "hours_per_week": 300,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Concepts and tools in physics: mechanics of point-like and rigid bodies, elasticity theory, elements of hydrostatics and hydrodynamics, periodic motion and mechanical waves.\nThe \"way of thinking\" and the methodology in Physics. Magnetism, Refraction and Diffraction of Waves, Elements of Quantum Mechanics with applications to Spectroscopy, Thermodynamics, Phase Transitions, Transport Phenomena.",
      "learning_objectives": "Introduction to the scientific methodology. The student should develop his/her capability to turn physical observations into mathematical models, and to solve the latter.\nThe student should acquire an overview over the basic concepts used in mechanics, in the theory of heat and electricity.",
      "content": "Book: \nPhysics for Scientists and Engineers, Douglas C. Giancoli, Pearson Education (2009), ISBN: 978-0-13-157849-4\nChapters:\n1, 2, 3, 4, 5, 6 (without: 6-5, 6-6, 6-8), 7, 8 (without 8-9), 9, 10 (without 10-10), 11 (without 11-7), 13 (without 13-13, 13-14), 14 (without 14-6), 15 (without 15-3, 15-5, 15-7, 15-9, 15-10, 15-11),\n17 (without 17-5, 17-10), 18 (without 18-5, 18-6, 18-7), 19, 20 (without 20-7, 20-8, 20-9, 20-10, 20-11), 21 (without 21-12), 23, 25 (without 25-9, 25-10), 26 (without 26-4, 26-5, 26-7), 27, 28 (without 28-4, 28-5, 28-8. 28-9, 28-10), 29 (without 29-5, 29-8), 32 (without 32-8), 33 (without 33-4, 33-5, 33-9, 33-10), 34 (without 34-4, 34-6, 34-7), 35 (without 35-2, 35-3, 35-9, 35-11, 35-12, 35-13).",
      "literature": "see \"Content\"\nFriedhelm Kuypers\nPhysik für Ingenieure und Naturwissenschaftler\nBand 1: Mechanik und Thermodynamik\nWiley-VCH Verlag, 2002,\n4th edition 2022\nFriedhelm Kuypers\nPhysik für Ingenieure und Naturwissenschaftler\nBand 2 Elektrizität, Optik, Wellen\nVerlag Wiley-VCH, 2003\n4th edition 2022"
    },
    "performance_assessment": [
      {
        "ects_credits": 10,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "written 180 minutes",
        "exam_aid": "10 pages DIN A4 (210 mm x 297 mm) self-authored (handwritten or typed) summary (no solutions to problem sets!). Handbook of formulas and tables as specified by the examiner (see Moodle page of the corresponding course in German).\nFurthermore, a calculator is allowed that cannot establish a connection with another device.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Environmental Sciences Master",
        "section": "Course Units for Additional Admission Requirements",
        "type": "E-"
      }
    ]
  },
  {
    "course_id": "851-0724-01L",
    "title": "Real Estate Property Law",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "German",
    "comment": "Particularly suitable for students of D-ARCH, D-BAUG, D-USYS.",
    "lecturers": [
      "S. Stucki",
      "R. Müller-Wyss"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "",
        "hours_per_week": 3,
        "schedule": [
          {
            "venue": [
              "RZF 21"
            ],
            "day": "Fri",
            "time": "09:15-12:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Real estate property law (esp. content, acquisition, restrictions under private and public law, transmission and loss). Legal presentation: land register, surveying, cadastre. Basic questions of contract and tax law.",
      "learning_objectives": "The legal principles of real estate property law can be correctly interpreted and applied in daily life.",
      "content": "Real estate property law (esp. content, acquisition, restrictions under private and public law, transmission and loss). Legal presentation: land register, surveying, cadastre. Basic questions of contract and tax law.",
      "lecture_notes": "Abgegebene Unterlagen: Skript in digitaler Form",
      "literature": "- Adrian Mühlematter / Stephan Stucki: Grundbuchrecht für die Praxis, Zürich 2016\n- Wolfgang Ernst / Samuel Zogg: Sachenrecht in a nutshell, Zürich 2020\n- Jörg Schmid / Bettina Hürlimann-Kaup: Sachenrecht, Zürich 2017\n- Meinrad Huser, Schweizerisches Vermessungsrecht, unter besonderer Berücksichtigung des Geoinformationsrecht und des Grundbuchrechts, Zürich 2014\n- Meinrad Huser, Geo-Informationsrecht, Rechtlicher Rahmen für Geographische Informationssyteme, Zürich 2005\n- Meinrad Huser, Darstellung von Grenzen zur Sicherung dinglicher Rechte, in ZBGR 2013, 238 ff.\n- Meinrad Huser, Baubeschränkungen und Grundbuch, in BR/DC 4/2016, 197 ff.\n- Meinrad Huser, Publikation von Eigentumsbeschränkungen - neue Regeln, in Baurecht 4/2010, S. 169\n- Meinrad Huser, Der Aufteilungsplan im Stockwerkeigentum: Neue Darstellung – grössere Rechtsverbindlichkeit, in ZBGR 2020, S. 203 ff.\n- Meinrad Huser, Datenschutz bei Geodaten, in: Passadelis/Rosenthal/Thür, Datenschutzrecht, Basel 2015, S. 513 ff."
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "end-of-semester examination",
        "language_of_examination": "German",
        "repetition": "A repetition date will be offered in the first two weeks of the semester immediately consecutive.",
        "examination": "written 60 minutes",
        "exam_aid": "open book-prüfung",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Geomatics Master",
        "section": "Core Electives",
        "type": "W"
      },
      {
        "program": "Science in Perspective",
        "section": "D-ARCH",
        "type": "W"
      },
      {
        "program": "Science in Perspective",
        "section": "D-BAUG",
        "type": "W"
      },
      {
        "program": "Science in Perspective",
        "section": "Law",
        "type": "W"
      },
      {
        "program": "Science in Perspective",
        "section": "D-USYS",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "529-0950-00L",
    "title": "Subject Didactics Chemistry I",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "German",
    "comment": "Simultaneous enrolment in Introductory Internship Chemistry - course 529-0966-00L - is compulsory.",
    "lecturers": [
      "P. Aschwanden"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "ORT: Kantonsschule Zürich Nord, Campus Irchel, Y32/Y34, Winterthurerstrasse 190, 8057 ZürichZimmer siehe http://fdchemie.pbworks.com/w/page/45801830/Übersicht%20und%20OrganisationGENAUE ZEIT: 15.15 bis 18.00 Uhr",
        "hours_per_week": 3,
        "schedule": [
          {
            "venue": [
              "Exte rn"
            ],
            "day": "Fri",
            "time": "15:00-18:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Implementing findings from research into teaching and learning for chemistry lessons and coverage of subject-specific teaching and learning specialities.",
      "learning_objectives": "The students have basic subject didactic knowledge for teaching chemistry at a secondary school. \nThey are able to design lessons that are effective for learning, actively involve students in lessons, explain challenging concepts simply, use experiments for theory and reflect on teaching.",
      "content": "Schwerpunkte im ersten Studiensemester bilden die folgenden Themen:\n- Auswahl gymnasiumsrelevanter Lerninhalte\n- Didaktische Vereinfachung\n- Modelle und chemischen Formeln zur Beschreibung von Aufbau und Umwandlung der Substanzen\n- Wechselspiel zwischen Beobachtung in der realen Welt und Deutung auf Modell-Ebene\n- Skizzen entwerfen und zur Erklärung von Reaktionen nutzen \n- Chemie im 8. Schuljahr: Das Teilchenmodell erklärt viele Phänomene im Anfangsunterricht\n- Atommodelle und chemische Bindung\n- Radioaktivität und Kernspaltung\n- Struktur und Eigenschaft\n- Auswahl, Konzeption, Vorbereitung, Durchführung, Einbettung und Auswertung von Demonstrations-Experimenten",
      "lecture_notes": "Die Unterlagen sind auf der Plattform \nhttp://fdchemie.pbworks.com\n zugänglich",
      "literature": "- E. Rossa: Chemie-Didaktik, Cornelsen Verlag, 2015\n- H.-D. Barke et al: Chemiedidaktik kompakt, Lernprozesse in Theorie und Praxis, Springer Verlag, 2. Auflage, 2015\n- H.-D. Barke: Chemiedidaktik: Diagnose und Korrektur von Schülervorstellungen, Springer Verlag, 2006\n- H.-J. Bader et al: Konkrete Fachdidaktik Chemie, Oldenbourg Verlag, 2002",
      "prerequisites": "Der Chemieunterricht am Gymnasium soll einerseits grundlegende chemische Kenntnisse für den Alltag vermitteln und andererseits auf ein naturwissenschaftlich orientiertes Hochschulstudium vorbereiten. Diese beiden Ziele sind im Unterricht gleichermassen zu berücksichtigen.\nDa viele Lerninhalte sequentiell und einander benützend strukturiert sind, ist dem logischen Aufbau des Unterrichts besonderes Augenmerk zu schenken. Dies bedingt eine feine Abstimmung von fachlichen Inhalten und didaktischen Methoden auf die kognitive Leistungsfähigkeit der Lernenden.\nAnhand der Diskussion bewährter Beispiele und dem Entwurf eigener Unterrichtsbausteine soll die zukünftige Lehrperson befähigt werden, einen den spezifischen Rahmenbedingungen angepassten Unterricht zu entwickeln, der diesem hohen Qualitätsanspruch genügt."
    },
    "performance_assessment": [
      {
        "ects_credits": 4,
        "assessment_type": "graded semester performance",
        "language_of_examination": "German",
        "repetition": "Repetition possible without re-enrolling for the course unit.",
        "additional_info": "5 Übungen müssen eingereicht und angenommen werden\nKlausur am Ende des Semesters",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Chemistry Teaching Diploma",
        "section": "Subject Didactics in Chemistry",
        "type": "O"
      },
      {
        "program": "Science Education Master",
        "section": "Subject Didactics",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "376-0019-00L",
    "title": "Laboratory Course in Medical Technology",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "Only for BSc HST students. Students from other degree programmes please contact: hcooper@ethz.ch.",
    "lecturers": [
      "J. G. Snedeker",
      "C. Harshbarger"
    ],
    "classes": [
      {
        "type": "Practical / laboratory course",
        "notes": "Findet auf dem Campus Balgrist und im Zentrum statt. Weitere Informationen hierzu sind in Moodle zu finden.",
        "hours_per_week": 4,
        "schedule": [
          {
            "venue": [
              "LEEC 104",
              "LEEC 114"
            ],
            "day": "Tue",
            "time": "08:15-12:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "This practical course is designed to give students hands on experience in CAD, FEM, product optimization, mechanical load testing, software development and hardware utilization in robotics.",
      "learning_objectives": "The course aims at teaching and solidifying following topics:\nCAD\nFEM\nProduct optimization\nMechanical testing\nSoftware development\nHardware usage in robotics",
      "content": "The course is aimed at improving the students knowledge on certain topics such as programming in python and biomechanics, but also teaches new skills such as using CAD software, FEM and mechanical testing. The course is split into 6 sessions, which will be completed in groups. The students will be assigned to groups at the beginning of the semester. 4 of the experiments will be geared towards the use case of designing a bone plate to bridge a critical size gap of a femur. The experiments are therefore 1) using CAD to reconstruct the initial condition and the bone plate 2) running a FEM in order to analyze the performance of the bone plate 3) with the knowledge of the FEM, optimizing the bone plate and 4) testing of the designed bone plate, the bone plate will be 3D printed. The remaining 2 experiments will 1) focus on programming a robotic arm used in rehabilitation engineering and 2) on the hardware usage of the robotic arm including force sensors and EMG.",
      "lecture_notes": "Each of the 6 sessions has its own tutorial and will be handed out to the students.",
      "prerequisites": "Only motivation and curiosity is required."
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Health Sciences and Technology Bachelor",
        "section": "Individual Subjects and Laboratory Courses",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "529-0265-00L",
    "title": "Research Project II",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [],
    "classes": [
      {
        "type": "Independent project",
        "notes": "",
        "hours_per_week": 480,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "In a research project students extend their knowledge in a particular field, get acquainted with the scientific way of working, and learn to work on an actual research topic. Research projects are carried out in a core or optional subject area as chosen by the student.",
      "learning_objectives": "Students are accustomed to scientific work and they get to know one specific research field.",
      "content": "This laboratory project is organised during the spring vacation before the sixth semester. The participant can choose his topic from the list of projects suggested. Main emphasis during this research work is to get experience in using different engineering tools and evaluation and the interpretation of the results. Those are presented as a scientific report."
    },
    "performance_assessment": [
      {
        "ects_credits": 16,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Biochemistry - Chemical Biology Master",
        "section": "Semester Theses",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "701-1241-00L",
    "title": "Atmospheric Remote Sensing",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "J. Gröbner",
      "S. Kazantzis"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "LFWC 4"
            ],
            "day": "Wed",
            "time": "14:15-16:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The  course will provide advanced physical understanding on the fundamentals of passive and active remote sensing, measuring sensors and retrieval methods. A series of diverse remote sensing applications will be presented, including measurements/retrievals of various atmospheric composition parameters (ozone, aerosols, clouds, others) from surface based and satellite based instruments.",
      "learning_objectives": "Main objectives of the course and what the students will be able to explain and use at the end of it are:\n- The major atmospheric laws used for the retrieval of atmospheric composition and solar radiation parameters\n- Ground based and satellite based retrieval examples for major atmospheric constituents\n- Practical and experimental aspects on measuring atmospheric aerosols through the use of relevant instrumentation\n- Explore major atmospheric measurement databases and use of the available data\n-Interpretation of measurement and retrieval related results on atmospheric composition and solar radiation based on using combined retrieval data products",
      "content": "Atmospheric passive and active remote sensing is connected with a large number of applications including: atmospheric composition, Earth-atmosphere radiative balance, atmospheric and weather prediction model assimilation, agriculture, energy and health related applications and many others.\nThe proposed lesson is divided in three sections including exercises:\n• Fundamentals of remote sensing \n• Sensors (surface based and satellites) and retrieval methods\n• Applications\nThe first aim of the lecture is to provide an in-depth understand of the physical aspects and basic laws on the fundamentals of remote sensing to the students. The lectures will provide a basic to intermediate understanding of radiative transfer of electromagnetic radiation through the atmosphere, covering the spectrum from UV to thermal. Examples of atmospheric components that will be addressed are: ozone, aerosols, greenhouse gases, clouds, water vapor. \nIn addition, measuring sensors used from the surface or from satellites and the relevant retrieval methods based on passive and active remote sensing of atmospheric composition will be presented (e.g. Spectroradiometers, filter radiometers, Lidars and others). \nFinally, we aim to demonstrate a series of diverse remote sensing applications, including atmospheric composition measurements and retrievals from surface- and satellite-based instruments, including calibration and validation aspects.\nThe exercises will be embedded in the overall course lectures to provide hands-on experience with the measurements and retrieval methods conducting measurements and organiying small field experiments. Also with the use of atmospheric  datasets available from specific instruments (e.g. satellite sensors) and networks (e.g. AERONET, GAWPFR).\nMore specific the course include:\n- 3 introductory courses on climate variables, sensors, solar measurements  and radiative transfer basics\n- 7 courses including reomote sensing techniques on solar UV measurements, total column ozone, trace gases, greenhouse gases, aerosols, cloud retrievals and lidar active remote sensing.\n-3 exercises:\na. Conducting sun photometric measurements in the field and retrieve aerosol optical depth, including a visit in Davos, World Calibration Center\nb. Exploring ground and satellite based solar UV, Ozone and aerosol measurements \nc. Using radiative transfer modeling tools\nFinally, students are involved on presenting scientific literature on subjects they are interested in.\nAll exercises are conducted in student-forming teams",
      "lecture_notes": "Lecture slides will be provided via Moodle before every lecture.",
      "prerequisites": "none"
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Space Systems Master",
        "section": "Deep Track Earth Observation",
        "type": "W+"
      },
      {
        "program": "Space Systems Master",
        "section": "Deep Track Planetary Science",
        "type": "W+"
      },
      {
        "program": "Environmental Sciences Master",
        "section": "Additional Elective Courses",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "052-0597-00L",
    "title": "Construction I",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "German",
    "comment": "",
    "lecturers": [
      "D. Mettler",
      "D. Studer"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "HPHG 1"
            ],
            "day": "Mon",
            "time": "07:45-09:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Construction I is both an independent and supplementary course\nThe lecture teaches the content and methodical basics of construction",
      "learning_objectives": "Understanding and dominating the methodology of constructing",
      "content": "Lectures to achieve the methodology and ability of constructing",
      "lecture_notes": "construction BUK ETHZ\nImage and drawing material (PDF) within the lecture",
      "literature": "construction BUK ETHZ\nDaniel Mettler/Daniel Studer\nBUK ETHZ  Hybrid, Masonry, Timber, Concrete, Steel\nIrene von Meiss-Leuthold/Daniel Mettler/Daniel Studer\nmade of concrete\nDaniel Mettler/Daniel Studer\nmade of solar\nDaniel Mettler/Daniel Studer/Yufei He",
      "prerequisites": "Interest and engagement\nAttending the lecture"
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "session examination",
        "language_of_examination": "German",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "written 180 minutes",
        "exam_aid": "None",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Architecture Bachelor",
        "section": "First Year Examination Block 1",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "136-0202-00L",
    "title": "Constructive Details & Regenerative Envelops",
    "semester": "Autumn Semester 2025",
    "periodicity": "two-yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "G. Habert"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "Does not take place this semester.Blockkurs, lecture hours 08.45 - 17.30.",
        "hours_per_week": 40,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The course is focused on constructive details for regenerative materials used to build high-quality envelops and high-comfort environments. The participant are learning through a hands-​on workshop during which they will produce samples and conduct field test analysis in small groups.",
      "learning_objectives": "- Apply knowledge from previous course on high-quality envelops built with regenerative materials\n- Learn how to compare different constructive systems built with regenerative materials to conventional building techniques considering thermal insulation, thermal mass, moisture regulation and air tightness\n- Ensure an efficient and durable impact on participants' professional development",
      "content": "Small groups are producing samples and conducting field test analysis to explore a specific constructive technique using Regenerative Materials, considering thermal insulation, thermal mass, moisture regulation and air tightness. Results from measurements and monitoring are used to compare a constructive technique to reference conventional building techniques."
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "CAS in Regenerative Materials - Hygrothermal Specialisation",
        "section": "Modules",
        "type": "O"
      },
      {
        "program": "DAS in Regenerative Materials",
        "section": "Elective Module Hygrothermal Specialisation",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "364-1179-00L",
    "title": "Calibration in Macroeconomics",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "K. Walsh"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "CABG 57"
            ],
            "day": "Thu",
            "time": "14:15-16:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Macroeconomic models allow us to perform policy counterfactuals related to inequality, monetary policy, and trade. But to believe our predictions, the models’ parameters must be reasonable.  Calibration is the process of choosing parameters (usually related to technology and preferences). This course explores common approaches with applications to inequality, trade, finance, and monetary policy.",
      "learning_objectives": "Using examples from both classic and frontier papers in quantitative macroeconomics, this course teaches students popular approaches to calibrating models and evaluating model fit. While the emphasis is on calibration methodology, students will also learn about a variety of model solution algorithms, key datasets, standard parameter values, and the contributions/takeaways of the various papers. After taking this course, students will be able to:\n- understand and implement the main approaches to calibration\n- assess the plausibility and fit of calibrations in new papers or their own research\n- integrate standard functional forms and parameter values into their research\n- gather and analyse key datasets used in calibration\n- understand the basics of a variety of solution algorithms for equilibrium models\nAdditionally, the course gives students a sense of the frontier of research in some of the fields covered.",
      "content": "The course is designed for PhD students in economics, finance, and related fields, especially those who wish to use quantitative macroeconomic models for research or policy. Enrolling students should have experience with graduate-level economic theory and be able to code in one of the programming languages commonly used in macroeconomics (e.g., Matlab, Python, Julia, Fortran, etc.).\nThe purpose of the course is to show students how calibration is and has been used in quantitative macroeconomics. The predictions and implications of macroeconomic models – the costs of trade barriers, the causes of changes in inequality, the effects of fiscal and monetary policy shocks, and the consequences of sovereign default for example – depend on the underlying parameters. Typical parameters include consumer risk aversion and patience, firm and consumer elasticities of substitution, the variance and persistence of shocks to firms and consumers, and credit constraints. To believe the welfare implications, counterfactuals, or forecasts of our models, the parameters must be set to “reasonable” values. Calibration is the process of choosing reasonable parameters using, for example, previous research, estimates from microeconomic data, or the comparison of model moments with empirical counterparts.\nCalibration is an essential tool in macroeconomics. It is employed in a large fraction of the academic literature as well as in many influential policy analyses. The course is directed towards researchers interested in the frontier of macroeconomic theory, but it is also relevant for anyone working on policy-related theoretical models in public finance, trade, and international finance.\nThe instructor will prepare and present lecture slides, but class discussion is strongly encouraged. Students are expected to read the papers assigned for each week. Assessment is based on a final project: each student must replicate the main result of a paper from the class or another paper approved by the instructor.",
      "literature": "The course is framed around papers that discuss or employ calibration, likely including:\n1) Cooley (1997): “Calibrated Models,” Oxford Review of Economic Policy.\n2) Aiyagari (1994): “Uninsured Idiosyncratic Risk and Aggregate Saving,” Quarterly Journal of Economics.\n3) Hubmer, Krusell, and Smith (2020): “Sources of U.S. Wealth Inequality: Past, Present, and Future,” Macroeconomics Annual.\n4) Toda and Walsh (2020): “The Equity Premium and the One Percent,” Review of Financial Studies.\n5) Chatterjee and Eyigungor (2012): “Default Risk and Income Fluctuations in Emerging Markets,” American Economic Review.\n6) Miranda-Pinto, Murphy, Walsh, Young (2022): “A Model of Expenditure Shocks,’’ Working Paper.\n7) Caliendo and Parro (2015): “Estimates of the Trade and Welfare Effects of NAFTA,” Review of Economic Studies.",
      "prerequisites": "Knowledge of graduate-level economic theory."
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "additional_info": "Assessment is based on a final project: each student must replicate the main result of a paper from the class or another paper approved by the instructor.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Doctorate Management, Technology, and Economics",
        "section": "Economics",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "263-5054-00L",
    "title": "Patenting Digital Innovations",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "A. Ilic",
      "B. Best"
    ],
    "classes": [
      {
        "type": "Seminar",
        "notes": "Block course: dates and room tba",
        "hours_per_week": 25,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "In this seminar dedicated to digital innovations, we will bust the most stubborn myths around AI software patents such as “Software/AI isn’t patentable”, “AI patents are useless because you can’t figure out if they are infringed”, and many others. We will look at how AI and software start-ups can use patents to create a strong IP position in a scalable way.",
      "learning_objectives": "After attending this course, students will be able to:\n- Understand the basics of patenting in the digital space relevant for a global market\n- Evaluate patenting opportunities with a more differentiated view on the topic\n- Effectively use patents as a cost-effective part of a technology startup’s business plan\n- Conduct patent searches, freedom-to-operate analysis and infringement analyses\n- Write their first software/AI-related invention disclosure suitable for patenting",
      "content": "The course is focused on patenting digital innovations. It is designed for students with entrepreneurial interests that like to get a hands-on perspective on the topic of intellectual property strategies and patents. \nThe seminar includes presentations and practical group exercises to apply the acquired knowledge in practice. Entrepreneurs and leading IP experts are joining the seminar as guest speakers for discussion of real-life examples.\nTopics that will be covered include:\n- Best practices that any AI/software startups should know about IP and patents\n- How investors evaluate a strong IP situation of a start-up\n- How to efficiently monitor competitor patent activity and obtain “FTO”\n- How to create an effective patent filing strategy that grows with the business\n- How to efficiently create AI patents while not getting distracted from the founder’s core business\nThe course also contains a group work of a “FTO battle” where two teams compete in a freedom-to-operate analysis and individual work to write their first invention disclosure related to an AI or software topic."
    },
    "performance_assessment": [
      {
        "ects_credits": 1,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "additional_info": "Short presentation (15 mins + Q&A) & group work: Freedom-to-Operate analysis & defense",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Doctorate Computer Science",
        "section": "Subject Specialisation",
        "type": "W"
      },
      {
        "program": "Computer Science Master",
        "section": "Elective Courses",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "751-2205-00L",
    "title": "Management for Enterprises in the Agri-Food-Chain II",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "German",
    "comment": "",
    "lecturers": [
      "M. Weber"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "Diese Lehrveranstaltung findet im HS2025 zum letzten Mal statt.",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "LFWB 2"
            ],
            "day": "Mon",
            "time": "08:15-10:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Advanced Management in the Agri-Food Chain:\nFramework and models for management of organizations in the Agri-Food Chain in a complex environment",
      "learning_objectives": "After the lecture the students ...\n... know the characteristics and consequences of complexity in the organizational world,\n... know and can apply selected comprehensive models for managing in complex situations,\n... know possible practical applications and examples of the treated contents to organizations in the Agri-Food Chain and\n... are able to deepen the relevant topics in an autonomous way.",
      "content": "In the lecture the following contents will be treated:\n- State, reasons and effects of complexity in the organizational world.\n- A basic framework for shaping and governing intelligent organizations.\n- Selected contemporary models for managing in the complex organizational world.\n- Transfer and adaption of the models to organizations in the Agri-Food Chain.",
      "lecture_notes": "Reader with selected contents.",
      "prerequisites": "Vorlesung wird in deutscher Sprache abgehalten"
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "graded semester performance",
        "language_of_examination": "German",
        "repetition": "Repetition possible without re-enrolling for the course unit.",
        "additional_info": "Gruppenvortrag & Dokumentation dazu",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Agricultural Sciences Master",
        "section": "Agricultural Economics and Policy",
        "type": "W"
      },
      {
        "program": "Agricultural Sciences Master",
        "section": "Decision Making and Management",
        "type": "W+"
      }
    ]
  },
  {
    "course_id": "052-0521-25L",
    "title": "3D Scanning and Freeform Modeling",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "Enrolment in agreement with the lecturer only kiryk@arch.ethz.",
    "lecturers": [],
    "classes": [
      {
        "type": "Exercise",
        "notes": "Does not take place this semester.Permission from lecturers required for all students. \r\n  Keine Lehrveranstaltung während der Seminarwoche (20.10.2025) und in den letzten beiden Semesterwochen.",
        "hours_per_week": 2,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "This course explores the concept of \"Hybrid Reality,\" blending digital and physical spaces using VR technologies. Students will learn to digitize spaces, create immersive environments, and design interactive exhibitions.",
      "learning_objectives": "The goal is to digitize an existing space and use it in virtual reality as a context for further design. During the course, AI tools will be utilized to enhance the photogrammetry 3D scanning process. In the first part of the course, we learn the tools; then we work on architectural VR projects, either in groups or individually. Throughout the course, we will examine VR workflows to create immersive and interactive architectural spaces. At the end of the course, we will present the works in a VR exhibition. Each student receives an Oculus Quest VR headset to work with at home throughout the semester.",
      "content": "Fusions of digital-analog relationships have accompanied us since the very beginning of the digitalization era. The rapidly growing impact of digital technologies on our life necessitates constant adaptation. The course introduces the term \"Hybrid Reality,\" which represents the coexistence of physical and digital spaces. Using state-of-the-art VR technologies, the methodology focuses on immersive, real-time, 1:1 scale space creation, exploring corporeal design, and reinventing conventional methods. Students will learn to digitize physical spaces, create hybrid reality environments, and design interactive exhibitions.",
      "prerequisites": "The course \"360 – Reality to Virtuality\" is interconnected with “3D Scanning and Freeform Modeling”.\nYou must register for both courses: \"360 – Reality to Virtuality\" and \"3D-Modeling\" (2x 2 ETCS). \nClassroom teaching as 4h block + self-teaching and research at home.\nMax. number of participants 15 students.\nA 200 CHF deposit will be charged for the VR Headset. It will be refunded upon the return of the headset on the last day of the course.\nIf you already have an Oculus Quest 2, you do not need to pay any deposit and can work on your own device.\nPlease send a short letter of motivation (max 150 words) to Adam Kiryk: \nkiryk@arch.ethz.ch"
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition possible without re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Architecture Bachelor",
        "section": "Design and Architecture",
        "type": "W"
      },
      {
        "program": "Doctorate Architecture",
        "section": "Subject Specialisation",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "151-0620-00L",
    "title": "Embedded MEMS Lab",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "C. Hierold",
      "A. Güntner",
      "M. Haluska"
    ],
    "classes": [
      {
        "type": "Practical / laboratory course",
        "notes": "- First part of the compulsory introductory lecture: Monday 22.09.2025 at 13:15-18:00 (venue: HG F 26.1)- Second part of the compulsory introductory lecture: 29.09.2025 at 13:15-18:00 (venue: HG F 26.1)- Practical portion of the course in the cleanrooms of CLA: 7 consecutive Mondays from 13:00 (exact) to ~18:30 during the semester.- First group practicum activities start from Monday 06.10.2025. Starting days for groups are staggered.- Attendance is required at all meetings of the course.",
        "hours_per_week": 45,
        "schedule": [
          {
            "venue": [
              "MLH 34.3",
              "MLJ 34.1",
              "MLJ 34.3",
              "MLJ 37.1"
            ],
            "day": "Mon",
            "time": "13:15-14:00"
          },
          {
            "venue": [
              "CLAG 2"
            ],
            "day": "Mon",
            "time": "13:15-17:00"
          },
          {
            "venue": [
              "HGF 26.1"
            ],
            "day": "22.09.",
            "time": "13:15-18:00"
          },
          {
            "venue": [
              "HGF 26.1"
            ],
            "day": "29.09.",
            "time": "13:15-18:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Practical course: Students are introduced to the process steps required for the fabrication of MEMS (Micro Electro Mechanical System) and carry out the fabrication and testing steps in the clean rooms by themselves. Additionally, they learn the requirements for working in clean rooms. Processing and characterization will be documented and analyzed in a final report.",
      "learning_objectives": "Students learn the individual process steps that are required to make a MEMS (Micro Electro Mechanical System). Students carry out the process steps themselves in laboratories and clean rooms. Furthermore, participants become familiar with the special requirements (cleanliness, safety, operation of equipment and handling hazardous chemicals) of working in the clean rooms and laboratories. The entire production, processing, and characterization of the MEMS is documented and evaluated in a final report.",
      "content": "With guidance from a tutor, the individual silicon microsystem process steps that are required for the fabrication of an accelerometer are carried out:\n- Photolithography, dry etching, wet etching, sacrificial layer etching, various cleaning procedures\n- Packaging and electrical connection of a MEMS device\n- Testing and characterization of the MEMS device\n- Written documentation and evaluation of the entire production, processing and characterization",
      "lecture_notes": "A document containing theory, background and practical course content is distributed at the Introductory lecture day of the course.",
      "literature": "The document provides sufficient information for the participants to successfully participate in the course.",
      "prerequisites": "Participating students are required to attend all scheduled lectures and meetings of the course. \nParticipating students are required to provide proof that they have personal accident insurance prior to the start of the laboratory portion of the course. \nFor safety and efficiency reasons the number of participating students is limited. We regret to restrict access to this course by the following rules:\nPriority 1: master students of the master's program in \"Micro and Nanosystems\"\nPriority 2: master students of the master's program in \"Mechanical Engineering\" from the domain Micro & Nanosystems and Processes (MAVT-tutors Daniel Ahmed, Inge Herrmann, Christofer Hierold, Dennis Kochmann, Brad Nelson, David Norris, Salvador Pané i Vidal, Romain Quidant, Mark Tibbitt), who attended the bachelor course \"151-0621-00L Microsystems Technology\" successfully.\nPriority 3: master students, who attended the bachelor course \"151-0621-00L Microsystems Technology\" successfully.\nPriority 4: all other students (PhD, bachelor, master) with a background in silicon or microsystems process technology.\nIf there are more students in one of these priority groups than places available, we will decide by (in following order) best achieved grade from 151-0621-00L Microsystems Technology, registration to this practicum at previous semester, and by drawing lots.\nStudents will be notified at the first lecture of the course (introductory lecture) as to whether they are able to participate.\nThe course is offered in autumn and spring semester."
    },
    "performance_assessment": [
      {
        "ects_credits": 5,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "additional_info": "Participation in both introductory lectures and all lab modules is mandatory.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Doctorate Materials Science",
        "section": "Science & Technology of the Small (MaP Doctoral School)",
        "type": "W"
      },
      {
        "program": "Electrical Engineering and Information Technology Master",
        "section": "Specialisation Courses",
        "type": "W"
      },
      {
        "program": "Mechanical Engineering Master",
        "section": "Core Courses",
        "type": "W"
      },
      {
        "program": "Micro- and Nanosystems Master",
        "section": "Laboratory Course",
        "type": "W+"
      },
      {
        "program": "Physics Master",
        "section": "General Electives",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "636-0126-00L",
    "title": "Multicellular Systems",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "P. Liberali"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "On-site course at BSSE in BASEL.Attention: the course starts in the second week of the semester.",
        "hours_per_week": 3,
        "schedule": [
          {
            "venue": [
              "BSSE 23"
            ],
            "day": "Fri",
            "time": "11:15-14:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "This course explores multicellular systems from their evolutionary origins to their roles in development, regeneration, disease, and drug discovery. It examines how single cells coordinate across scales through metabolism, signaling, and mechanics. Emphasis is placed on organoid technology, advanced imaging, and analytical techniques to study and quantify multicellularity.",
      "learning_objectives": "Student are able to\n- Interpret and discuss the role of multicellular systems in development, regeneration, and drug development\n- Compare systematically metabolism, signaling and mechanisms in generating emergent behaviors.\n- Develop a critical understanding of organoids systems and their application\n- Apply and design image analysis pipelines for studying multicellular organization",
      "content": "This course explores the principles of multicellular organization, from evolutionary transitions to emergent behaviors. Key topics include metabolic and signaling networks, mechanical interactions, and their role in tissue dynamics. We will examine experimental and computational approaches, focusing on organoid models, live imaging, and quantitative analysis of multicellular systems.",
      "lecture_notes": "Required papers and lecture slides will be made available before the lectures",
      "literature": "The main literature will be made available during the course.\nSelected papers:\n1. Liberali P, Schier AF. The evolution of developmental biology through conceptual and technological revolutions. Cell. 2024 Jul 11;187(14):3461-3495. doi: 10.1016/j.cell.2024.05.053. Epub 2024 Jun 20. PMID: 38906136.\n2. Verstegen MMA, Coppes RP, Beghin A, De Coppi P, Gerli MFM, de Graeff N, Pan Q, Saito Y, Shi S, Zadpoor AA, van der Laan LJW. Clinical applications of human organoids. Nat Med. 2025 Feb 3. doi: 10.1038/s41591-024-03489-3. Epub ahead of print. PMID: 39901045.\n3. Zinner M, Lukonin I, Liberali P. Design principles of tissue organisation: How single cells coordinate across scales. Curr Opin Cell Biol. 2020 Dec;67:37-45. doi: 10.1016/j.ceb.2020.07.004. Epub 2020 Sep 2. PMID: 32889170.",
      "prerequisites": "Students are required to bring their own laptop to class."
    },
    "performance_assessment": [
      {
        "ects_credits": 4,
        "assessment_type": "end-of-semester examination",
        "language_of_examination": "English",
        "repetition": "A repetition date will be offered in the first two weeks of the semester immediately consecutive.",
        "examination": "written 90 minutes",
        "exam_aid": "None",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Biotechnology Master",
        "section": "Advanced Courses",
        "type": "W"
      },
      {
        "program": "Biotechnology Master",
        "section": "Electives",
        "type": "W"
      },
      {
        "program": "Doctorate Biosystems Science and Engineering",
        "section": "Subject Specialisation",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "851-0703-00L",
    "title": "Introduction to Law",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "German",
    "comment": "",
    "lecturers": [
      "O.  Streiff Gnöpff"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "HGE 3"
            ],
            "day": "Mon",
            "time": "14:15-16:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "This class introduces students into basic features of the legal system. Fundamental issues of constitutional law, administrative law, private law and the law of the EU are covered. The focus is on legal problems related to space. Active participation is expected in short interactive sequences.",
      "learning_objectives": "Students are able to identify basic structures of the legal system. They unterstand selected topics of public and private law. They are able to apply the fundamentals in more advanced law classes and to recognize the relevance of law in their own field.",
      "content": "Basic concepts of law, sources of law.\nPrivate law: Contract law (particularly contract for work and services), tort law, property law.\nPublic law: Human rights, administrative law, procurement law, procedural law.\nInsights into the law of the EU.",
      "lecture_notes": "Jaap Hage, Bram Akkermans (Eds.), Introduction to Law, Cham 2017 (Online Resource ETH Library)",
      "literature": "Further documents will be available online."
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "session examination",
        "language_of_examination": "German",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "written 60 minutes",
        "additional_info": "Die Prüfung wird als On-Campus Online-Prüfung durchgeführt. \nZur Prüfung sind keine Hilfsmittel (also keine Gesetzestexte, Bücher oder Ähnliches) zugelassen. Ausgenommen davon sind Wörterbücher für Studierende, deren Muttersprache nicht Deutsch ist.\nStudierende des Studiengangs Raumbezogene Ingenieurwissenschaften Bachelor legen die Prüfung in einem Prüfungsblock ab.",
        "exam_aid": "keine\nWörterbücher für Studierende, deren Muttersprache nicht Deutsch ist",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Electrical Engineering and Information Technology Bachelor",
        "section": "Economics, Law and Management Electives",
        "type": "W"
      },
      {
        "program": "Electrical Engineering and Information Technology Master",
        "section": "Tracks (all): Electives",
        "type": "W"
      },
      {
        "program": "Geospatial Engineering Bachelor",
        "section": "Examination Block 1",
        "type": "O"
      },
      {
        "program": "Science in Perspective",
        "section": "D-ARCH",
        "type": "W"
      },
      {
        "program": "Science in Perspective",
        "section": "Law",
        "type": "W"
      },
      {
        "program": "Science in Perspective",
        "section": "D-MATL",
        "type": "W"
      },
      {
        "program": "Science in Perspective",
        "section": "D-MAVT",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "401-0643-13L",
    "title": "Statistics II",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "German",
    "comment": "",
    "lecturers": [
      "J. Dambon"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "Vorlesung im HG F 1 mit Videoübertragung ins HG F 3.",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "HGF 1",
              "HGF 3"
            ],
            "day": "Wed",
            "time": "10:15-12:00"
          }
        ]
      },
      {
        "type": "Exercise",
        "notes": "Groups are selected in myStudies.Do 8-9 oder Do 9-10 für Studiengang Pharmazeutische Wissenschaften.Do 10-11 oder Do 11-12 für Studiengang Biologie.[Do 11-12 auch als Ausweichtermin für diverse Studiengänge.]Do 12-13 oder Do 13-14 für Studiengang Gesundheitswissenschaften und Technologie (HST).Fr 11-12  für Studiengang Lebensmittelwissenschaften und Ernährung.Fr 13-14 für Studiengang Biochemie – Chemische Biologie.[Fr 9-10 und Fr 14-15 sind keine Übungsgruppen vorgesehen.]",
        "hours_per_week": 1,
        "schedule": [
          {
            "venue": [
              "MLF 39"
            ],
            "day": "Thu",
            "time": "08:15-09:00"
          },
          {
            "venue": [
              "MLF 39"
            ],
            "day": "Thu",
            "time": "09:15-10:00"
          },
          {
            "venue": [
              "HCIH 2.1"
            ],
            "day": "Thu",
            "time": "09:45-10:30"
          },
          {
            "venue": [
              "HCIH 2.1"
            ],
            "day": "Thu",
            "time": "10:45-11:30"
          },
          {
            "venue": [
              "HGE 21",
              "HGE 33.5",
              "HGF 26.5"
            ],
            "day": "Thu",
            "time": "12:15-13:00"
          },
          {
            "venue": [
              "HGE 21",
              "HGE 33.5",
              "HGF 26.5"
            ],
            "day": "Thu",
            "time": "13:15-14:00"
          },
          {
            "venue": [
              "HGG 26.5"
            ],
            "day": "Fri",
            "time": "09:15-10:00"
          },
          {
            "venue": [
              "MLF 39"
            ],
            "day": "Fri",
            "time": "11:15-12:00"
          },
          {
            "venue": [
              "HCIJ 3"
            ],
            "day": "Fri",
            "time": "12:45-13:30"
          },
          {
            "venue": [
              "HCIJ 3"
            ],
            "day": "Fri",
            "time": "13:45-14:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Vertiefung von Statistikmethoden. Nach dem detailierten Fundament aus Statistik I liegt nun der Fokus auf konzeptueller Breite und konkreter Problemlösungsfähigkeit mit der Statistiksoftware R.",
      "learning_objectives": "Nach diesem Kurs können Sie mit der Statistiksoftware R Daten einlesen, auf vielfältige Art verarbeiten und Grafiken für Berichte oder Vorträge exportieren. Sie verstehen die Konzepte von Methoden wie Lineare Regression (mit Faktoren, Interaktion, Modellwahl), ANOVA (1-weg, 2-weg), Chi-Quadrat-Test, Fisher-Test, GLMs, Mixed Models, Clustering, PCA und können diese mit der Statistiksoftware R in der Praxis umsetzen. Zudem kennen Sie die Grundprinzipien von gutem experimentellem Design und können bestehende Studien kritisch hinterfragen."
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "session examination",
        "language_of_examination": "German",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "written 180 minutes",
        "exam_aid": "Eine Zusammenfassung auf 5 Blättern (maximal DIN-A 4; beliebig beschrieben).",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Biochemistry – Chemical Biology Bachelor",
        "section": "Examination Block I",
        "type": "O"
      },
      {
        "program": "Biology Bachelor",
        "section": "Second Year Courses",
        "type": "O"
      },
      {
        "program": "Health Sciences and Technology Bachelor",
        "section": "Examination Block A",
        "type": "O"
      },
      {
        "program": "Food Science and Nutrition Bachelor",
        "section": "Examination Block",
        "type": "O"
      },
      {
        "program": "Pharmaceutical Sciences Bachelor",
        "section": "Core Courses",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "701-1676-01L",
    "title": "Genomics of Environmental Adaptation",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "Prerequisites: good knowledge in population genetics and R.",
    "lecturers": [
      "C. Rellstab",
      "B. Dauphin",
      "F. Gugerli"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "Blockkurs: 26.-30.1.2026Zeit: 8:45-17:00Ort: WSL EP D1",
        "hours_per_week": 40,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "This five-day winter school aims at teaching advanced Master students, PhD students and postdoctoral researchers on aspects of the genomics of environmental adaptation. It provides both theoretical background and hands-on exercises on major topics of contemporary environmental genomics such as signatures of selection, outlier analysis, genotype-environment associations, or GWAS.",
      "learning_objectives": "The genomics of environmental adaptation is an evolving scientific field of both basic and applied interest. Researchers make increasing use of diverse methodological approaches built on concepts from ecology, evolutionary biology and population genomics. This five-day winter school introduces students to some major concepts and methods of environmental genomics, i.e., (i) how the environment and adaptive genetic variation are related and (ii) how signatures of genomic adaptation can be detected in natural populations. The winter school focuses on current methods and hands-on exercises, emphasizing an understanding of the underlying concepts and a discussion of benefits, limitations and pitfalls of environmental genomics. It is specifically aimed at the needs of advanced Master students, PhD students and early postdoctoral researchers.",
      "content": "Topics:\n(1) Molecular markers and next generation sequencing techniques; neutral and adaptive genetic variation, genetic drift and population genetic structure.\n(2) Outlier analysis: concept, methodology and types of outlier analyses.\n \n(3) Environmental data: which environmental data are available and used to identify signatures of adaptation; data limitations; collinearity.\n(4) Genotype-environment associations (landscape genomics): concept and types of genotype-environment associations; false discovery rates; genomic offset.\n(5) Genotypes and phenotypes: GWAS; follow-up analyses.",
      "lecture_notes": "Hand-outs will be distributed.",
      "literature": "The course requires 4 hours of preparatory reading of selected papers on the genomics of environmental adaptation. The papers will be distributed by e-mail.",
      "prerequisites": "Grading will be according to a written report (8-10 pages), in which students will have to design a complete study in environmental genomics, and according to student contributions during the course.\nPrerequisites: students must have good knowledge in population genetics and  R."
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "additional_info": "Full presence in the course is mandatory; grading will be according to a written report (8-10 pages) and according to student contributions during the course.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Doctorate Environmental Systems Sciences",
        "section": "Ecology and Evolution",
        "type": "W"
      },
      {
        "program": "Environmental Sciences Master",
        "section": "Advanced Concept Classes",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "535-0021-00L",
    "title": "Vitamins in Health and Disease",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "German",
    "comment": "",
    "lecturers": [
      "C. Müller"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "Anzahl Plätze begrenzt.",
        "hours_per_week": 1,
        "schedule": [
          {
            "venue": [
              "HITJ 53"
            ],
            "day": "Wed/1",
            "time": "13:45-15:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Vitamins are essential organic compounds that cannot be synthesized by an organism and hence, thy have to be acquired from the diet. This lecture will give an overview about the application of vitamins in health and disease.",
      "learning_objectives": "The aim of this lecture is a critical examination of the students with the topic of \"Vitamins in Health and Disease\". The students will get an overview of vitamins, of their medical applications and the role of the pharmacist with \"over-the-counter\" products.",
      "content": "Deficiencies of particular vitamins result in specific diseases such as for example scurvy (vitamin C deficiency). Such disease patterns are usually easily recognized and facile to be treated. The clinical utility of supplementation concerns people with severe deficiencies and a risk of complications. Latent vitamin deficiencies might result in variable disorders and risks. As an example neurological disorders in elderly as a consequence of chronic lack of vitamin B12 should be mentioned. Subclinical deficiencies are often difficult to assess. However, these are exactly the cases where advice of a pharmacist is requested.\nA large intake of vitamins by over-supplementation or food fortification might be dangerous (hypervitaminosis). This is in particular the case for fat-soluble vitamins or in the case of constant intake of high amounts of water-soluble vitamins over a long time period.\nThe lecture 'Vitamins in Heath and Disease' will give an overview over the history and applications of vitamins and their functions to preserve good health. The utility of vitamin supplementation during conditions of deficiencies, potential consequences of a latent deficiency as well as risks of over-supplementation will be discussed.",
      "lecture_notes": "Hand-outs will be distributed during the lecture (partly in English, partly in German).",
      "literature": "Book recommendation: reference books:\n- Handbuch Nährstoffe, Burgerstein,\nTrias Verlag ISBN 978-3-8304-6071-8\nArzneimittel und Mikronährstoffe - Medikationsorientierte Supplementierung\nWVG, ISBN 978-3-8047-2779-3",
      "prerequisites": "Requirements: Basic knowledge in biochemistry and pharmacology. Ability to read and understand scientific publications in English."
    },
    "performance_assessment": [
      {
        "ects_credits": 1,
        "assessment_type": "graded semester performance",
        "language_of_examination": "German",
        "repetition": "Repetition possible without re-enrolling for the course unit.",
        "additional_info": "Die Leistungskontrolle erfolgt einerseits in einer kurzen Multiple Choice Umfrage während dem Semster sowie in Form von Vorträgen zu einem Thema im Zusammenhang mit einem Vitamin. Die Vorträge werden in Gruppen vorbereitet und gehalten.\nDie Benotung erfolgt aufgrund der Punkteanzahl der Multiple Choice Umfrage sowie aufgrunde definierter Kriterien der Vorträge (Themenwahl und Themenbearbeitung, Inhalt der Präsentation, Verständnis, Slides, Moderation der Diskussion etc). Die Dozentin kann den Studierenden im Rahmen der Leistungskontrolle auch konkrete Fragen zum Stoff der Vorlesung stellen.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Pharmaceutical Sciences Master",
        "section": "Electives I",
        "type": "W"
      },
      {
        "program": "Pharmaceutical Sciences Bachelor",
        "section": "Electives",
        "type": "W"
      },
      {
        "program": "Pharmaceutical Sciences Bachelor",
        "section": "Compensatory Courses",
        "type": "W"
      },
      {
        "program": "Pharmacy Master",
        "section": "Electives",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "535-0041-00L",
    "title": "Pharmacology and Toxicology III",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "U. Quitterer",
      "M. Arand",
      "Y. Yamauchi"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "HCIJ 6"
            ],
            "day": "Mon",
            "time": "13:45-15:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The course is divided into three parts. The first part provides an overview of drugs used for the pharmacotherapy of infectious diseases, osteoporosis, autoimmune diseases and cancer. The second part gives an overview of the field of medical virology, and the third part is focused on pharmacogenomics of drug metabolism and basic concepts of toxicology.",
      "learning_objectives": "The course advances basic knowledge in pharmacology and toxicology.  Special emphasis is placed on the interrelationship between pharmacological, pathophysiological and clinical aspects of drug therapy in the fields of infectious diseases, osteoporosis, autoimmune diseases and cancer. The course also provides an overview of the fields of medical virology, toxicology, and pharmacogenomics with a special focus on the role of genetic polymorphisms in drug response and adverse effects.",
      "content": "Topics include the pharmacology and pharmacotherapy of infectious diseases, osteoporosis, autoimmune diseases and cancer. Medical virology covers important viral infections and their pharmacotherapy with different classes of antiviral drugs. In the field of pharmacogenomics, the course is focused on examples of genetic variability of drug metabolism and drug responses, and the relevance of pharmacogenomics and toxicogenomcis for clinical drug development. Finally, basic concepts of toxicology are introduced.",
      "lecture_notes": "A script is provided for each lecture. The scripts define important and exam-relevant contents of the lectures. Scripts do not replace the lectures.",
      "literature": "Recommended reading: \nThe classic textbook in Pharmacology:\nGoodman and Gilman`s The Pharmacological Basis of Therapeutics\nLaurence Brunton, Bjorn C. Knollman.\n14th edition (2022)\nISBN-10: 1264258070\nISBN-13: 978-1264258079\nor\nKlaus Aktories, Veit Flockerzi, Ulrich Förstermann, Franz Hofmann.\nAllgemeine und spezielle Pharmakologie und Toxikologie.\n13th edition (2022)\nUrban & Fischer (Elsevier)\nISBN-13: 978-3-437-42622-3"
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "written 60 minutes",
        "additional_info": "In frame of the lecture course each student has to prepare and give a 5-minute oral presentation on a topic of pharmacology and toxicology III. The list of topics is provided during the first lecture. The oral presentation (and the electronic PDF-File of the presentation) is graded as passed or failed. The successful presentation improves the grade of the final session exam by 0.25.",
        "exam_aid": "None",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "DAS Preparation for the Swiss Federal Examination in Pharmacy",
        "section": "Compulsory Courses II",
        "type": "W"
      },
      {
        "program": "Pharmaceutical Sciences Master",
        "section": "Core Courses I",
        "type": "O"
      },
      {
        "program": "Pharmacy Master",
        "section": "Core Courses I",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "529-0433-01L",
    "title": "Advanced Physical Chemistry: Statistical Thermodynamics",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "R. Riek",
      "J. Richardson"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "Vorlesung: Fr 12-14Übungen Di 10-11 oder Do 14-15In der ersten Woche findet während der Übungsstunde eine Vorlesung statt.",
        "hours_per_week": 3,
        "schedule": [
          {
            "venue": [
              "HCIE 2",
              "HCIF 2"
            ],
            "day": "Tue",
            "time": "09:45-10:30"
          },
          {
            "venue": [
              "HCID 4",
              "HCID 6",
              "HCIE 8",
              "HCIF 2",
              "HCIJ 8"
            ],
            "day": "Thu",
            "time": "13:45-14:30"
          },
          {
            "venue": [
              "HCIJ 4"
            ],
            "day": "Fri",
            "time": "11:45-13:30"
          },
          {
            "venue": [
              "HCIG 3"
            ],
            "day": "19.09.",
            "time": "13:45-14:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Introduction to statistical mechanics and thermodynamics. Prediction of thermodynamic and kinetic properties from molecular data.",
      "learning_objectives": "Introduction to statistical mechanics and thermodynamics. Prediction of thermodynamic and kinetic properties from molecular data.",
      "content": "Basics of statistical mechanics and thermodynamics of classical and quantum systems. Concept of ensembles, microcanonical and canonical ensembles, ergodic theorem. Molecular and canonical partition functions and their connection with classical thermodynamics. Quantum statistics. Translational, rotational, vibrational, electronic and nuclear spin partition functions of gases. Determination of the equilibrium constants and (transition-state theory) rates of gas phase reactions. Description of ideal gases and ideal crystals. Lattice models, mixing entropy of polymers, and entropic elasticity.",
      "lecture_notes": "See homepage of the lecture.",
      "literature": "See homepage of the lecture.",
      "prerequisites": "Chemical Thermodynamics, Reaction Kinetics, Molecular Quantum Mechanics and Spectroscopy; Mathematical Foundations (Analysis, Combinatorial Relations, Integral and Differential Calculus)"
    },
    "performance_assessment": [
      {
        "ects_credits": 6,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "oral 25 minutes",
        "additional_info": "Will be announced in the lecture at the beginning of the semester and published on the homepage of the lecture.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Chemistry Master",
        "section": "Physical Chemistry",
        "type": "W"
      },
      {
        "program": "Chemistry Master",
        "section": "Physical Chemistry",
        "type": "W+"
      },
      {
        "program": "Doctorate Materials Science",
        "section": "Soft Materials (MaP Doctoral School)",
        "type": "W"
      },
      {
        "program": "Physics Master",
        "section": "General Electives",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "112-0007-00L",
    "title": "Module 7: Synthesis",
    "semester": "Autumn Semester 2025",
    "periodicity": "two-yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "Does not take place this semester.",
        "hours_per_week": 30,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "In this final module, participants are asked to submit a comprehensive self-reflection that encapsulates their learning experience. This reflection exercise is designed to demonstrate the participants' deep understanding of systems thinking and resilience, underpinned by evidence-based research and diverse, creative expressions of their insights.",
      "learning_objectives": "The learning goals are to summarize and reflect on what was learned from the last modules, relate them to each other, and integrate them with the development of the personal Quest project. The methods taught, navigation techniques, and cultures will be reflected upon and tied to the specific needs for advancing the Quests and developing the CAS deliverable. The role and application of AI are also among the specific learning goals in this module.\nThe module is designed to empower participants to integrate their knowledge of systems thinking, resilience, and circularity in practical ways. Participants are encouraged to discuss holistic and transformative approaches to navigate and intervene in complex systems, using their network analysis, resilience strategies, and systems modeling knowledge.\nThe objective extends to cultivating the capacity to express this understanding in diverse formats, from academic writing to visual and designerly expressions, ensuring that participants can communicate their insights effectively across different mediums. This includes a strong emphasis on evidence-based approaches underpinned by peer-reviewed literature. The self-reflection of their Quests in textual and graphical form aims to assess the participants' ability to independently finalize and articulate their comprehensive learning journey,  demonstrating a deep integration of the course content and personal insights into systems and resilience.\nThe learning objective assessment starts with the preceding MOOC and its final multiple-choice quiz. To pass the MOOC, 70 percent of the questions must be answered correctly across all modules. During the CAS, active attendance in the live sessions with experts is required for each module. In addition, the Quest’s progress is monitored continuously in the peer-learning process and through individual discussions with the lecturers. Students are asked to contribute at least once per week during the course to the DRRS virtual community on Mighty Networks with internal-public sharing, commenting, or liking. The final learning and progress assessment step is submitting a Quest delivery, which - through all three DRRS CAS’ - builds the base for the Master design thesis, for those taking the full MAS in Regenerative Systems programme.",
      "content": "This closing CAS module is about bringing the previous modules into a systemic context with the individual students’ Quest projects. This includes recapping the content of the other modules and synthesizing the learnings through systems mapping and visual dialogues. We develop specific module summaries in relation to the DRRS programme and the specific Quest contexts.  \nThe CAS deliverables process has started, and we begin to mentor peer processes and individual work.",
      "lecture_notes": "See Module 2.7 in MOOC#2 Beyond systems thinking: \nhttps://www.edx.org/learn/social-science/eth-zurich-beyond-systems-thinking-2",
      "literature": "See Module 2.7 in MOOC#2 Beyond systems thinking: \nhttps://www.edx.org/learn/social-science/eth-zurich-beyond-systems-thinking-2",
      "prerequisites": "MOOC#2 Beyond Systems Thinking is a pathway to the same-named CAS#2. To be accepted into the CAS, applicants must have completed MOOC#1 and have started MOOC#2 by the time the CAS starts. The content from the MOOC will be supplemented in the CAS by live virtual events with experts from all over the world. After the first month of virtual live conversations, the course takes a field design trip to three emerging Living Systems Labs across Norway. This trip is obligatory.\nThe final delivery of the CAS should demonstrate the scientific base of our work in evidence-based writing with a foundation in the peer-reviewed literature and graphical, visual, systems-mapping, and spatial ways of designerly expressions. As the main deliverable, students must submit a .pdf document consisting of three main parts: (1) A framing text bracket that motivates, introduces, explains, discusses, and concludes the Quest’s synthesis map and specifically the learnt content of CAS#2 in their critical application to the Quest; (2) a graphical Quest synthesis process map; (3) a personal reflection on the meta-aware learning and self-development process throughout the CAS."
    },
    "performance_assessment": [
      {
        "ects_credits": 1,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition possible without re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "CAS in Regenerative Systems: Beyond Systems Thinking",
        "section": "Modules",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "327-2126-00L",
    "title": "Microscopy Training TEM I - Introduction to TEM",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "Limited number of participants.Master students will have priority over PhD students. PhD students may still enroll, but will be asked for a fee. https://scopem.ethz.ch/education/MTP.html",
    "lecturers": [
      "P. Zeng",
      "E. J. Barthazy Meier",
      "A. G. Bittermann",
      "F. Gramm",
      "S. Handschin",
      "M. Peterek",
      "B. Qureshi",
      "A. Sologubenko"
    ],
    "classes": [
      {
        "type": "Practical / laboratory course",
        "notes": "This block course will take place during 5 full days 24-28 November 2025. Lectures will be held in the seminar room, practical exercises in rooms of ScopeM.There will be no repetition of this course, but it's offered every semester.",
        "hours_per_week": 35,
        "schedule": [
          {
            "venue": [
              "HITF 11.1"
            ],
            "day": "24.11.",
            "time": "07:45-13:30"
          },
          {
            "venue": [
              "HITF 11.1"
            ],
            "day": "25.11.",
            "time": "07:45-13:30"
          },
          {
            "venue": [
              "HITF 11.1"
            ],
            "day": "26.11.",
            "time": "07:45-13:30"
          },
          {
            "venue": [
              "HITF 11.1"
            ],
            "day": "28.11.",
            "time": "11:45-15:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The introductory course on Transmission Electron Microscopy (TEM) provides theoretical and hands-on learning for beginners who are interested in using TEM for their Master or PhD thesis. TEM sample preparation techniques are also discussed. During hands-on sessions at different TEM instruments, students will have the opportunity to examine their own samples if time allows.",
      "learning_objectives": "Understanding of \n1. the set-up and individual components of a TEM\n2. the basics of electron optics and image formation\n3. the basics of electron beam – sample interactions\n4. the contrast mechanism\n5. various sample preparation techniques\nLearning how to \n  1. align and operate a TEM \n  2. acquire data using different operation modes of a TEM instrument, i.e. Bright-field and Dark-field imaging\n  3. record electron diffraction patterns and index diffraction patterns\n  4. interpret TEM data",
      "content": "Lectures:\n- basics of electron optics and the TEM instrument set-up\n- TEM imaging modes and image contrast\n- STEM operation mode\n- Sample preparation techniques for hard and soft materials \nPracticals:\n- Demo, practical demonstration of a TEM: instrument components, alignment, etc.\n- Hands-on training for students: sample loading, instrument alignment and data acquisition. \n- Sample preparation for different types of materials\n- Practical work with TEMs \n- Demonstration of advanced Transmission Electron Microscopy techniques",
      "lecture_notes": "Lecture notes will be distributed.",
      "literature": "- Williams, Carter: Transmission Electron Microscopy, Plenum Press, 1996\n- Hawkes, Valdre: Biophysical Electron Microscopy, Academic Press, 1990\n- Egerton: Physical Principles of Electron Microscopy: an introduction to TEM, SEM and AEM, Springer Verlag, 2007",
      "prerequisites": "No mandatory prerequisites. Please consider the prior attendance to EM Basic lectures (551-1618-00V; 227-0390-00L; 327-0703-00L) as suggested prerequisite."
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "additional_info": "Oral presentation and discussion of the data acquired during the course.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Doctorate Materials Science",
        "section": "General Subjects",
        "type": "W"
      },
      {
        "program": "Health Sciences and Technology Master",
        "section": "Elective Courses",
        "type": "W"
      },
      {
        "program": "Health Sciences and Technology Master",
        "section": "Elective Courses",
        "type": "W"
      },
      {
        "program": "Health Sciences and Technology Master",
        "section": "Elective Courses",
        "type": "W"
      },
      {
        "program": "Health Sciences and Technology Master",
        "section": "Elective Courses II",
        "type": "W"
      },
      {
        "program": "Materials Science Master",
        "section": "Elective Courses",
        "type": "W"
      },
      {
        "program": "Physics Master",
        "section": "General Electives",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "102-0527-00L",
    "title": "Experimental and Computer Laboratory I (Year Course)",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "D. Braun",
      "M. Floriancic",
      "S. Frei",
      "P. U. Lehmann Grunder",
      "B. Lüthi",
      "I. Nicholson Thomas",
      "S. Pfister",
      "F. Rüsch",
      "S. Strub",
      "D. F. Vetsch",
      "L. von Känel"
    ],
    "classes": [
      {
        "type": "Practical / laboratory course",
        "notes": "Semester performance as year course together with 102-0528-00L Experimental and Computer Laboratory II.The rooms and lectures times are listed mainly for organizational purposes. The students will be informed separately by the lecturers about the time and place (e.g. for the field measurements).",
        "hours_per_week": 6,
        "schedule": [
          {
            "venue": [
              "HIFC 33"
            ],
            "day": "Tue/1",
            "time": "13:45-17:30"
          },
          {
            "venue": [
              "HIFC 33"
            ],
            "day": "Thu",
            "time": "13:45-17:30"
          },
          {
            "venue": [
              "HILB 18.2"
            ],
            "day": "Thu/2",
            "time": "13:45-17:30"
          },
          {
            "venue": [
              "HIFC 33"
            ],
            "day": "Fri",
            "time": "13:45-17:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "In the Experimental and Computer Laboratory students are introduced to research and good scientific practice. Experiments are conducted in different disciplines of environmental engineering. Data collected during experiments are compared to the corresponding numeric simulations. The results are documented in reports or presentations.",
      "learning_objectives": "The student will learn the following skills: basic scientific work, planning and conducting scientific experiments, uncertainty estimations of measurements, applied numerical simulations, modern sensor technology, writing reports.",
      "content": "The Experimental and Computer Laboratory is building on courses in the corresponding modules. Material from these courses is a prerequisite or co-requisite (as specified below) for participating in the Experimental and Computer Laboratory (MODULE: Project in the Experimental and Computer Laboratory):\n- WatInfra: Water Network Management\n- UWM: SysUWM + ProcUWM: Operation of Lab-WWTP\n- AIR: Air Quality Measurements\n- WasteBio: Anaerobic Digestion\n- WasteRec: Plastic Recycling\n- ESD: Environmental Assessment\n- GROUND: Groundwater Field Course Kappelen\n- WRM: Modelling Optimal Water Allocation\n- FLOW: 1D Open Channel Flow Modelling\n- LAND: Landscape Planning and Environmental Systems\n- RIVER: Discharge Measurements\n- HydEngr: Hydraulic Experiments\n- RemSens: Earth Observation and Landscape Planning\n- SOIL: Soil and Environmental Measurements Lab",
      "lecture_notes": "Written material will be available."
    },
    "performance_assessment": [
      {
        "ects_credits": 0,
        "assessment_type": "no performance assessment",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Environmental Engineering Master",
        "section": "Specialized Computer Laboratory",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "701-0967-00L",
    "title": "Project Development in Renewable Energies",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "German",
    "comment": "",
    "lecturers": [
      "R. Rechsteiner",
      "A. Appenzeller"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "CHNF 46"
            ],
            "day": "Thu/2w",
            "time": "14:15-18:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The focus is on the implementation of projects:\n- photovoltaics \n- wind energy \n- hydropower \nYou will learn about new business models, including storage and sector coupling, discuss framework conditions, economic efficiency, security of supply, market organization and business risks. Guidance from experts with many years of political and project experience.",
      "learning_objectives": "You will receive a practice-oriented introduction to the regulatory and economic requirements for renewable energy projects. \nYou will be familiar with the options for integrating fluctuating energy production in an environment of volatile prices. \nYou will be familiar with the opportunities and risks and strategies for economic security.",
      "content": "Detailed program\nhttps://www.rechsteiner-basel.ch/lehrmittel?no_cache=1#c273",
      "lecture_notes": "PPT presentation will be distributed (in German)",
      "literature": "Literaturliste mit funktionierenden Links: \nhttps://www.rechsteiner-basel.ch/lehrmittel\n \nRudolf Rechsteiner: Die Energiewende im Wartesaal, Verlag Zocher & Peter, Zürich 2021 (wird als PDF abgegeben)\nFaktenblätter Bundesamt für Energie:\n- Stromgesetz: Zusammenfassung  \n- Faktenblatt zu Verordnungsänderungen\n- Solar-Contracting\n- Investitionsbeiträge für Klein- und Grosswasserkraftanlagen\n- Investitionsbeiträge für Windenergieanlagen\n- Faktenblatt Marktprämie 2022\n-  Temporäres Reservekraftwerk Birr\nBundesamt für Energie: Handbuch Eigenverbrauch \nBundesverband Windenergie:  Mit einer grünen Anlage schwarze Zahlen schreiben \nREN21: Renewables 2024 Global Status Report (global overview)\nIRENA and CPI (2023), Global landscape of renewable energy finance, 2023, International Renewable Energy Agency, Abu Dhabi. \nEnergiestrategie 2050 Faktenblätter des Bundes (PDF): \nhttps://www.uvek.admin.ch/uvek/de/home/energie/energiestrategie-2050.html\n \nWind Technologies Market Report, Lawrence Berkeley National Laboratory \nLink\n \nIEA PVPS: TRENDS IN PHOTOVOLTAIC APPLICATIONS\nSnapshots 2024 \nhttp://www.iea-pvps.org\n \nBundesamt für Energie: Perspektiven für die Grosswasserkraft in der Schweiz \nhttp://www.news.admin.ch/NSBSubscriber/message/attachments/33285.pdf\nWindenergie-Report Deutschland \nLink\n \nUnterlagen Kleinwasserkraft-Projekte\nLink\nUnterlagen Windkraft-Projekte\nLink\nLeitfaden zur Beglaubigung von Anlagedaten der Pronovo\nLink",
      "prerequisites": "For group exercise and presentation reasons the number of participants is limited at 30 students. \nFor exercices students build learning and presentational groups. Credit points are based on group performance."
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "German",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "additional_info": "Es wird die Teilnahme an den Gruppen-Übungen während des Unterrichts benotet. \nWer mehr als einmal fehlt, muss die Absenz mit einer speziellen Arbeit (Eigenleistung zuhause) nachholen.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Environmental Sciences Bachelor",
        "section": "Environmental Planning",
        "type": "W"
      },
      {
        "program": "Environmental Sciences Master",
        "section": "Minor in Sustainable Energy Use",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "529-0432-AAL",
    "title": "Physical Chemistry IV: Magnetic Resonance",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "Enrolment ONLY for MSc students with a decree declaring this course unit as an additional admission requirement.Any other students (e.g. incoming exchange students, doctoral students) CANNOT enrol for this course unit.",
    "lecturers": [
      "G. Jeschke",
      "R. Riek"
    ],
    "classes": [
      {
        "type": "Revision course / private study",
        "notes": "Self-study course. No presence required.",
        "hours_per_week": 120,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Theoretical foundations of magnetic resonance (NMR,EPR) and selected applications.",
      "learning_objectives": "Introduction to magnetic resonance in isotropic and anisotropic phase.",
      "content": "The course gives an introduction to magnetic resonance spectroscopy (NMR and EPR) in liquid, liquid crystalline and solid phase. It starts from a classical description in the framework of the Bloch equations. The implications of chemical exchange are studied and two-dimensional exchange spectroscopy is introduced. An introduction to Fourier spectroscopy in one and two dimensions is given and simple 'pulse trickery' is described. A quantum-mechanical description of magnetic resonance experiments is introduced and the spin Hamiltonian is derived. The chemical shift term as well as the scalar, dipolar and quadrupolar terms are discussed. The product-operator formalism is introduced and various experiments are described, e.g. polarization transfer. Applications in chemistry, biology, physics and medicine, e.g. determination of 3D molecular structure of dissolved molecules, determination of the structure of  paramagnetic compounds and imaging (MRI) are presented.",
      "lecture_notes": "handed out in the lecture (in english)",
      "literature": "see \nhttp://www.ssnmr.ethz.ch/education/PC_IV_Lecture"
    },
    "performance_assessment": [
      {
        "ects_credits": 4,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "oral 30 minutes",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Chemistry Master",
        "section": "Course Units for Additional Admission Requirements",
        "type": "E-"
      }
    ]
  },
  {
    "course_id": "262-0304-00L",
    "title": "Industry Internship Long",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "MSc CBB students starting after AS 2021.",
    "lecturers": [],
    "classes": [
      {
        "type": "Independent project",
        "notes": "MSc CBB students starting after AS 2021.",
        "hours_per_week": 480,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Industry internship of at least 12 weeks, completed with a written report.",
      "learning_objectives": "Students gain experience in an industrial environment and an overview of different research areas by applying concepts taught in the core courses and advanced courses.",
      "prerequisites": "The students look for a placement themselves.\nIndustry internship lasts for 12 weeks, longer duration will delay the completion of studies beyond two years. Recognition of the industry internship requires a meaningful 10-page report."
    },
    "performance_assessment": [
      {
        "ects_credits": 18,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "additional_info": "Recognition of the industry internship requires a meaningful 10-page report.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Computational Biology and Bioinformatics Master",
        "section": "Lab Rotations",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "102-0357-00L",
    "title": "Waste Recycling Technologies",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "M. Haupt",
      "V. Burg"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "HILE 9"
            ],
            "day": "Tue/2",
            "time": "13:45-17:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Waste Recycling Technology (WRT) depicts technologies used to produce secondary raw materials from various waste streams. The course focuses on the mechanical and biological processes while also considering new concepts such as AI and chemical recycling.",
      "learning_objectives": "After this course, students can explain mechanical, biological, chemical and pyrometallurgical waste recycling technologies. Furthermore, students can decide on suitable technologies for specific waste materials. The Swiss waste recycling schemes for household waste, building and construction waste and industrial wastes can be described connecting the technological knowledge with background knowledge on waste management schemes.",
      "content": "The foci will be mechanical and biological recycling processes of solid wastes including biogenic waste. In addition, pyrometallurgical treatment processes and chemical recycling processes as well as newer technologies such as the use of AI for waste recycling will be discussed.\nMechanical waste treatment: separation technologies, properties of particles, flow sheet basics, assessment of separation success\nBiological green waste treatment: composting and anaerobic digestion",
      "lecture_notes": "The script consists of the slides shown during the lectures. Background material will be provided.",
      "literature": "A list of recommended books will be provided."
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition possible without re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Doctorate Materials Science",
        "section": "Advanced Manufacturing (MaP Doctoral School)",
        "type": "W"
      },
      {
        "program": "Environmental Engineering Master",
        "section": "Waste Management",
        "type": "O"
      },
      {
        "program": "Environmental Engineering Master",
        "section": "Waste Management",
        "type": "O"
      },
      {
        "program": "Environmental Engineering Master",
        "section": "EM: Waste Management",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "900-0106-DRL",
    "title": "Transferable Skills Course I (1 week)",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "Only for doctoral students.Please select your doctoral thesis supervisor as a lecturer and prove your participation with the appropriate certificate.",
    "lecturers": [],
    "classes": [
      {
        "type": "Seminar",
        "notes": "",
        "hours_per_week": 60,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Acquisition of transferable skills and cross-disciplinary competences in the range of courses or workshops with a minimum duration of 1 week.",
      "learning_objectives": "Acquisition of transferable skills and cross-disciplinary competences in the range of courses or workshops with a minimum duration of 1 week."
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Doctorate Architecture",
        "section": "Transferable Skills",
        "type": "W"
      },
      {
        "program": "Doctorate Civil, Environmental and Geomatic Engineering",
        "section": "Transferable Skills",
        "type": "W"
      },
      {
        "program": "Doctorate Biology",
        "section": "Transferable Skills",
        "type": "W"
      },
      {
        "program": "Doctorate Chemistry and Applied Biosciences",
        "section": "Transferable Skills",
        "type": "W"
      },
      {
        "program": "Doctorate Earth and Planetary Sciences",
        "section": "Transferable Skills",
        "type": "W"
      },
      {
        "program": "Doctorate Humanities, Social and Political Sciences",
        "section": "Transferable Skills",
        "type": "W"
      },
      {
        "program": "Doctorate Health Sciences and Technology",
        "section": "Transferable Skills",
        "type": "W"
      },
      {
        "program": "Doctorate Computer Science",
        "section": "Transferable Skills",
        "type": "W"
      },
      {
        "program": "Doctorate Information Technology and Electrical Engineering",
        "section": "Transferable Skills",
        "type": "W"
      },
      {
        "program": "Doctorate Management, Technology, and Economics",
        "section": "Transferable Skills",
        "type": "W"
      },
      {
        "program": "Doctorate Mechanical and Process Engineering",
        "section": "Transferable Skills",
        "type": "W"
      },
      {
        "program": "Doctorate Materials Science",
        "section": "Transferable Skills",
        "type": "W"
      },
      {
        "program": "Doctorate Mathematics",
        "section": "Transferable Skills",
        "type": "W"
      },
      {
        "program": "Doctorate Physics",
        "section": "Transferable Skills",
        "type": "W"
      },
      {
        "program": "Doctorate Environmental Systems Sciences",
        "section": "Transferable Skills",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "401-3490-75L",
    "title": "Seminar in Riemannian and Metric Geometry",
    "semester": "Autumn Semester 2025",
    "periodicity": "non-recurring course",
    "language_of_instruction": "English",
    "comment": "Number of participants limited to 12.Fully booked.",
    "lecturers": [
      "U. Lang"
    ],
    "classes": [
      {
        "type": "Seminar",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "HGG 26.1"
            ],
            "day": "Fri",
            "time": "10:15-12:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "This seminar treats selected topics in Riemannian Geometry, complementing the lecture course Differential Geometry II (Spring Semester 2025).",
      "learning_objectives": "",
      "prerequisites": "Differential Geometry II is a prerequisite."
    },
    "performance_assessment": [
      {
        "ects_credits": 4,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Mathematics Bachelor",
        "section": "Seminars",
        "type": "W"
      },
      {
        "program": "Mathematics Master",
        "section": "Seminars",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "551-1801-01L",
    "title": "Research Project II",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "Only for Biology Master, Programme Regulations 2018",
    "lecturers": [],
    "classes": [
      {
        "type": "Independent project",
        "notes": "",
        "hours_per_week": 480,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Research projects, with themes from the chosen scientific fields of interest, are intended to familiarise candidates with scientific procedures and operational methodologies through supervised participation in current research work.",
      "learning_objectives": ""
    },
    "performance_assessment": [
      {
        "ects_credits": 15,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Biology Master",
        "section": "Research Projects",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "752-0100-AAL",
    "title": "Biochemistry",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "Enrolment ONLY for MSc students with a decree declaring this course unit as an additional admission requirement.Any other students (e.g. incoming exchange students, doctoral students) CANNOT enrol for this course unit.",
    "lecturers": [
      "C. Frei"
    ],
    "classes": [
      {
        "type": "Revision course / private study",
        "notes": "Self-study course. No presence required.",
        "hours_per_week": 60,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Basic knowledge of enzymology, in particular the structure, kinetics and chemistry of enzyme-catalysed reaction in vitro and in vivo. Biochemistry of metabolism: Those completing the course are able to describe and understand fundamental cellular metabolic processes.",
      "learning_objectives": "Based on the biology and chemistry courses in the 1. and 2. semester more detailed biochemical knowledge about enzymology, membrane biochemistry, and central metabolism will be presented",
      "content": "Program\nIntroduction, basics, composition of cells, biochemical units, repetition of relevant organic chemistry\nStructure and function of proteins\nLipids an biological membranes\nEnzymes and enzyme kinetics\nCatalytic strategies\nMetabolism: Basic concepts and design. Repetition of basic thermodynamics\nGlycolysis\nThe citric acid cycle\nOxidative phosphorylation",
      "lecture_notes": "Principles of Biochemistry (5th Edition) 5th Edition\nby Laurence A. Moran (Author), Robert A Horton (Author), Gray Scrimgeour (Author), Marc Perry (Author)",
      "literature": "Principles of Biochemistry (5th Edition) 5th Edition\nby Laurence A. Moran (Author), Robert A Horton (Author), Gray Scrimgeour (Author), Marc Perry (Author)",
      "prerequisites": "Basic knowledge in biology and chemistry is a precondition."
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition possible without re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Food Science and Nutrition Master",
        "section": "Course Units for Additional Admission Requirements",
        "type": "E-"
      },
      {
        "program": "Environmental Engineering Master",
        "section": "Course Units for Additional Admission Requirements",
        "type": "E-"
      }
    ]
  },
  {
    "course_id": "103-0187-02L",
    "title": "Satellite Geodesy",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "German",
    "comment": "",
    "lecturers": [
      "M. Aichinger-Rosenberger"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "",
        "hours_per_week": 3,
        "schedule": [
          {
            "venue": [
              "HCIJ 6"
            ],
            "day": "Tue",
            "time": "12:45-15:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Die Satellitengeodäsie beschäftigt sich mit der Bewegung von künstlichen Satelliten  und liefert mit den geodätischen Weltraumverfahren präzise Beobachtungen für die Vermessung und Kartierung von Prozessen im System Erde. Dies beinhaltet die Bestimmung von Geometrie, Rotation und Schwerefeld als z.B. auch die Überwachung des Meeresspiegels.",
      "learning_objectives": "- Sicherheit im Umgang mit Koordinaten-, Referenz- und Zeitsystemen\n- Grundlegendes Verständnis der Berechnung von Satellitenbahnen\n- Grundlegendes Verständnis der geodätischen Weltraumverfahren und deren Stärken und Schwächen\n- Kenntnis der wichtigsten Prozesse, die für Änderungen in der Geometrie, der Rotation und dem Schwerefeld der Erde verantwortlich sind.\n- Erkennen der Anwendungsmöglichkeiten der Satellitengeodäsie für interdisziplinäre Aufgaben (System Erde).",
      "content": "- Koordinatensysteme, Transformationen\n- Referenz- und Zeitsysteme\n- Grundlagen Satellitenbahnen\n- Weltraumverfahren: VLBI, SLR, DORIS, Altimetrie\n- Schwerefeldmissionen\n- Kombination der Weltraumverfahren zur Bestimmung der Geometrie, Orientierung sowie des Schwerefeldes der Erde\n- Interdisziplinäre Anwendungen (Meteorologie, Klimatologie, Hydrologie, etc..)",
      "lecture_notes": "Zugang zu den Unterrichtsmaterialen wird über polybox möglich sein.\nLink und Passwort werden in der 1. Vorlesung bekannt gegeben."
    },
    "performance_assessment": [
      {
        "ects_credits": 4,
        "assessment_type": "session examination",
        "language_of_examination": "German",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "oral 30 minutes",
        "additional_info": "Die Benotung erfolgt auf Basis der Sessionsprüfung (100 %).  Zusätzlich wird die Möglichkeit eingeräumt über optionale Lernelemente (in Form von Übungsberichten), die Endnote um bis zu 0.25 Notenpunkte zu verbessern (Bonus)",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Geospatial Engineering Bachelor",
        "section": "Examination Block 1",
        "type": "O"
      },
      {
        "program": "Space Systems Master",
        "section": "Deep Track Aerospace Engineering",
        "type": "W+"
      }
    ]
  },
  {
    "course_id": "402-0083-00L",
    "title": "Physics I",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "German",
    "comment": "",
    "lecturers": [
      "K. S. Kirch"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "",
        "hours_per_week": 3,
        "schedule": [
          {
            "venue": [
              "HPHG 1"
            ],
            "day": "Wed",
            "time": "14:45-15:30"
          },
          {
            "venue": [
              "HPHG 1"
            ],
            "day": "Fri",
            "time": "09:45-11:30"
          }
        ]
      },
      {
        "type": "Exercise",
        "notes": "",
        "hours_per_week": 1,
        "schedule": [
          {
            "venue": [
              "HCIH 8.1",
              "HCIJ 4",
              "HILF 10.3",
              "HITF 31.1",
              "HITH 42",
              "HITH 51",
              "HITJ 51",
              "HITJ 53",
              "HITK 51",
              "HITK 52",
              "HPKD 24.2"
            ],
            "day": "Wed",
            "time": "15:45-16:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "This course is an introduction to classical physics, with special focus on applications in medicine.",
      "learning_objectives": "Obtain an understanding of basic concepts in classical physics and their application (using mathematical pre-knowledge) to the solution of simple problems, including certain applications in medicine.\nObtain an understanding of relevant quantities and of orders of magnitude.",
      "content": "General introduction; Positron-Emission-Tomography as appetizer, including ionising radiation; kinematics of a point mass; dynamics of a point mass (Newton's axioms and forces); physical work, power and energy; conservation of linear and angular momentum; oscillations and waves; mechanics of a rigid body; fluid mechanics; introduction to electricity.",
      "lecture_notes": "Will be distributed at the start of the semester.",
      "literature": "\"Physik für Mediziner, Biologen, Pharmazeuten\", von Alfred Trautwein, Uwe Kreibig, Jürgen Hüttermann;  De Gruyter Verlag.",
      "prerequisites": "Voraussetzung Mathematik I+II (Studiengänge Gesundheitswissenschaften und Technologie bzw. Humanmedizin) / Mathematik-Lehrveranstaltungen des Basisjahres (Studiengänge Chemie, Chemieingenieurwissenschaften bzw. Interdisziplinäre Naturwissenschaften)"
    },
    "performance_assessment": [
      {
        "regulations": "Bachelor's Degree Programme in Health Sciences and Technology 2017; Version 07.10.2021 (Examination Block 3)\nBachelor's Degree Programme in Health Sciences and Technology 2020; Version 07.11.2024 (Examination Block B)\nBachelor's Degree Programme in Human Medicine 2018; Version 24.02.2022 (Examination Block B)\nBachelor's Degree Programme in Human Medicine 2022 (Examination Block B)",
        "ects_credits": 8,
        "assessment_description": "Performance assessment as a two-semester course together with 402-0084-00L Physics II\r\n                 (next semester)"
      },
      {
        "ects_credits": 4,
        "assessment_type": "session examination",
        "language_of_examination": "German",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "oral 30 minutes",
        "additional_info": "ACHTUNG: Die folgenden Angaben betreffen den JAHRESKURS Physik I und II.\nAls Lernelement wird die aktive Teilnahme im Übungsbetrieb bewertet. Für eine erfolgreiche aktive Teilnahme wird erwartet, dass in JEDEM Semester 50% der Übungsserien selbständig bearbeitet und eingereicht wurden. Ist die aktive Teilnahme erfüllt, wird die ungerundete Prüfungsnote um 0.25 Notenpunkte ergänzt.",
        "assessment_description": "Performance assessment as a semester course\r\n                 (other programmes)"
      }
    ],
    "offered_in": [
      {
        "program": "Health Sciences and Technology Bachelor",
        "section": "Examination Block B",
        "type": "O"
      },
      {
        "program": "Human Medicine Bachelor",
        "section": "Examination Block B",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "401-3929-00L",
    "title": "Financial Risk Management in Social and Pension Insurance",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "P. Blum"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "HGD 7.2"
            ],
            "day": "Wed",
            "time": "16:15-18:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Investment returns are an important source of funding for social and pension insurance, and financial risk is an important threat to stability. We study short-term and long-term financial risk and its interplay with other risk factors, and we develop methods for the measurement and management of financial risk and return in an asset/liability context with the goal of assuring sustainable funding.",
      "learning_objectives": "Understand the basic asset-liability framework: essential principles and properties of social and pension insurance; cash flow matching, duration matching, valuation portfolio and loose coupling; the notion of financial risk; long-term vs. short-term risk; coherent measures of risk.\nUnderstand the conditions for sustainable funding: derivation of required returns; interplay between return levels, contribution levels and other parameters; influence of guaranteed benefits.\nUnderstand the notion of risk-taking capability: capital process as a random walk; measures of long-term risk and relation to capital; short-term solvency vs. long-term stability; effect of embedded options and guarantees; interplay between required return and risk-taking capability.\nBe able to study empirical properties of financial assets: the Normal hypothesis and the deviations from it; statistical tools for investigating relevant risk and return properties of financial assets; time aggregation properties; be able to conduct analysis of real data for the most important asset classes. \nUnderstand and be able to carry out portfolio construction: the concept of diversification; limitations to diversification; correlation breakdown; incorporation of constraints; sensitivities and shortcomings of optimized portfolios.\nUnderstand and interpret the asset-liability interplay: the optimized portfolio in the asset-liability framework; short-term risk vs. long-term risk; the influence of constraints; feasible and non-feasible solutions; practical considerations.\nUnderstand and be able to address essential problems in asset / liability management, e.g. optimal risk / return positioning, optimal discount rate, target value for funding ratio or turnaround issues.\nHave an overall view: see the big picture of what asset returns can and cannot contribute to social security; be aware of the most relevant outcomes; know the role of the actuary in the financial risk management process.",
      "content": "For pension insurance and other forms of social insurance, investment returns are an important source of funding. In order to earn these returns, substantial financial risks must be taken, and these risks represent an important threat to financial stability, in the long term and in the short term.\nRisk and return of financial assets cannot be separated from one another and, hence, asset management and risk management cannot be separated either. Managing financial risk in social and pension insurance is, therefore, the task of reconciling the contradictory dimensions of\n1. Required return for a sustainable funding of the institution,\n2. Risk-taking capability of the institution,\n3. Returns available from financial assets in the market,\n4. Risks incurred by investing in these assets.\nThis task must be accomplished under a number of constraints. Financial risk management in social insurance also means reconciling the long time horizon of the promised insurance benefits with the short time horizon of financial markets and financial risk.\nIt is not the goal of this lecture to provide the students with any cookbook recipes that can readily be applied without further reflection.  The goal is rather to enable the students to develop their own understanding of the problems and possible solutions associated with the management of financial risks in social and pension insurance.\nTo this end, a rigorous intellectual framework will be developed and a powerful set of mathematical tools from the fields of actuarial mathematics and quantitative risk management will be applied. When analyzing the properties of financial assets, an empirical viewpoint will be taken using statistical tools and considering real-world data.",
      "lecture_notes": "Extensive handouts will be provided. Moreover, practical examples and data sets in Excel will be made available.",
      "prerequisites": "Solid base knowledge of probability and statistics is indispensable. Specialized concepts from financial and insurance mathematics as well as quantitative risk management will be introduced in the lecture as needed, but some prior knowledge in some of these areas would be an advantage.\nThis course counts towards the diploma of \"Aktuar SAV\". \nThe exams ONLY take place during the official ETH examination period."
    },
    "performance_assessment": [
      {
        "ects_credits": 4,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "oral 30 minutes",
        "additional_info": "Language of examination: English or German / Prüfungssprache: Deutsch oder Englisch",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Mathematics (General Courses)",
        "section": "Actuary SAA Education at ETH Zurich",
        "type": "W"
      },
      {
        "program": "Mathematics Master",
        "section": "Economics",
        "type": "W"
      },
      {
        "program": "Quantitative Finance Master",
        "section": "MF (Mathematical Methods in Finance)",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "102-0535-00L",
    "title": "Noise Abatement",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "German",
    "comment": "",
    "lecturers": [
      "J. M. Wunderli"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "",
        "hours_per_week": 4,
        "schedule": [
          {
            "venue": [
              "HILE 10.1"
            ],
            "day": "Mon",
            "time": "08:00-09:35"
          },
          {
            "venue": [
              "HILE 10.1"
            ],
            "day": "Wed",
            "time": "08:00-09:35"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Basics of acoustics and hearing. Measurement of sound. Impact of noise (physiological, psychological, social, economic). Legislation (focus on Swiss noise abatement ordinance), spatial planning. Sound propagation outdoor and in buildings. Calculation models and measurement procedures. Traffic noise (roads, railways, airports), shooting noise, noise from industrial plants. Building acoustics.",
      "learning_objectives": "The students will understand the basics of noise abatement: acoustics, impact of noise, meas-urement techniques and legislation. The students will be able to analyze different noise prob-lems and they will be able to solve simple problems of noise abatement.\nIn the course \"Noise Abatement\", the competencies of process understanding, modeling, data analysis & interpretation and measurement methods are taught, applied and examined. System understanding is taught and examined.",
      "content": "Physikalische Grundlagen: Schalldruck, Wellen, Quellenarten.\nAkustische Messtechnik: Umgang mit Dezibel, Akustische Masse, Schallpegelmesser, Spektralanalyse.\nLärmwirkungen: Gehör, Gesundheitliche Wirkungen von Lärm, Störung/Belästigung, Belastungsmasse.\nGesetzliche Grundlagen der Lärmbekämpfung / Raumplanung: Lärmschutzverordnung/SIA 181. Zusammenhang mit der Raumplanung.\nSchallausbreitung im Freien: Abstandsgesetze, Luftdämpfung, Bodeneffekt, Abschirmung, Reflexion, Streuung, Bebauung, Wettereinflüsse.\nKurze Einführung in die Bauakustik und in die einfachsten Grundlagen der Raumakustik.\nEigenschaften von Schallquellen: Akustische Beschreibung von Schallquellen, Lärmminderung an der Quelle.\nLärmarten und Prognoseverfahren: Messen/Berechnen, Strassenlärm, Eisenbahnlärm, Fluglärm, Schiesslärm, Industrielärm.",
      "lecture_notes": "Skript \"Lärmbekämpfung\" als PDF ab Beginn der Vorlesung verfügbar.",
      "prerequisites": "1 - 2 Exkursionen"
    },
    "performance_assessment": [
      {
        "ects_credits": 5,
        "assessment_type": "session examination",
        "language_of_examination": "German",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "oral 30 minutes",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Environmental Engineering Bachelor",
        "section": "Climate and Air",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "264-5800-26L",
    "title": "Doctoral Seminar in Visual Computing (HS25)",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "D. B. Baráth",
      "M. Gross",
      "M. Pollefeys",
      "B. Solenthaler",
      "S. Tang"
    ],
    "classes": [
      {
        "type": "Seminar",
        "notes": "",
        "hours_per_week": 1,
        "schedule": [
          {
            "venue": [
              "CABG 51"
            ],
            "day": "Thu",
            "time": "13:15-14:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "In this doctoral seminar, current research at the Institute for Visual Computing will be presented and discussed. The goal is to learn about current research projects at our institute, to strengthen our expertise in the field, to provide a platform where research challenges caThis graduate seminar provides doctoral students in computer science a chance to read and discuss current research papers.",
      "learning_objectives": "In this doctoral seminar, current research at the Institute for Visual Computing will be presented and discussed. The goal is to learn about current research projects at our institute, to strengthen our expertise in the field, to provide a platform where research challenges can be discussed, and also to practice scientific presentations.",
      "content": "Current research at the IVC will be presented and discussed.",
      "prerequisites": "This course requires solid knowledge in the area of Computer Graphics and Computer Vision as well as state-of-the-art research."
    },
    "performance_assessment": [
      {
        "ects_credits": 1,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "additional_info": "Ungraded semester performance. Presence is mandatory to pass the seminar. Every participant has to present his/her reseach once a year.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Doctorate Computer Science",
        "section": "Subject Specialisation",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "401-3071-00L",
    "title": "Structural Graph Theory",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "R. M. Steiner"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "HGD 7.1"
            ],
            "day": "Tue",
            "time": "10:15-12:00"
          }
        ]
      },
      {
        "type": "Independent project",
        "notes": "",
        "hours_per_week": 2,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Structural graph theory forms, besides extremal graph theory, one of the two main pillars of modern graph theory. While the latter is concerned with maximizing the number of edges or the density of graphs, structural graph theory focuses on understanding the structural nature of all members of a class of graphs. \nThis course will cover several cornerstone results of structural graph theory.",
      "learning_objectives": "The students obtain a thorough understanding of the mathematical tools, techniques and results in structural graph theory, and understand the relations and applications which this rich theory has in other areas, such as computational complexity and logic. Additionally, they enhance their skillset for the design of efficient algorithms on structurally constrained classes of graphs.",
      "content": "Graph minors: Connectivity and versions of Menger's theorem, Planar graphs, Wagner's theorem, Tree-width, algorithmic applications of tree-width and Courcelle's theorem, balanced separators and Alon-Seymour-Thomas theorem, Grid Minor Theorem, Erdős–Pósa property and algorithmic applications, Graph Minor Structure Theorem, Membership complexity, Wagner's conjecture\nPerfect graphs: Introduction to graph coloring and definition, Proof of the weak perfect graph theorem, Strong perfect graph theorem\nHadwiger's conjecture: 4-Color-Theorem and precise results, Extremal density of graphs excluding a fixed minor, Recent advances",
      "lecture_notes": "Will be provided well before the start of the HS.",
      "literature": "Topics in Structural Graph Theory (Lowell W. Beineke, Robin J. Wilson) (Remark: Not a perfect fit for this course, but there is substantial overlap on some of the topics).",
      "prerequisites": "The students should be familiar with the basics of the following areas: graph theory, linear programming, complexity theory and probabilistic methods. Having taken a previous course covering basic graph theory is strongly advised."
    },
    "performance_assessment": [
      {
        "ects_credits": 5,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "oral 20 minutes",
        "additional_info": "The candidate gets questions and 5 minutes of preparation time. Afterwards, the oral exam takes 20 minutes.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Cyber Security Master",
        "section": "Elective Courses",
        "type": "W"
      },
      {
        "program": "Doctorate Mathematics",
        "section": "Graduate School",
        "type": "W"
      },
      {
        "program": "Computer Science Master",
        "section": "Elective Courses",
        "type": "W"
      },
      {
        "program": "Computer Science Master",
        "section": "Minor in Theoretical Computer Science",
        "type": "W"
      },
      {
        "program": "Mathematics Bachelor",
        "section": "Selection: Theoretical Computer Science",
        "type": "W"
      },
      {
        "program": "Mathematics Master",
        "section": "Selection: Theoretical Computer Science, Discrete Mathematics",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "402-0257-00L",
    "title": "Advanced Solid State Physics",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "A. Zheludev"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "",
        "hours_per_week": 3,
        "schedule": [
          {
            "venue": [
              "HPVG 5"
            ],
            "day": "Tue",
            "time": "11:45-12:30"
          },
          {
            "venue": [
              "HPVG 5"
            ],
            "day": "Thu",
            "time": "13:45-15:30"
          }
        ]
      },
      {
        "type": "Exercise",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "HITF 31.1",
              "HITF 32",
              "HITK 51"
            ],
            "day": "Tue",
            "time": "15:45-17:30"
          },
          {
            "venue": [
              "HITK 52"
            ],
            "day": "Thu",
            "time": "07:45-09:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "This course is an extension of the introductory course on solid state physics.\nThe purpose of this course is to learn to navigate the complex collective quantum phases, excitations and phase transitions\nthat are the dominant theme in modern solid state physics. The emphasis is on the main concepts and on specific experimental\nexamples, both classic ones and those from recent research.",
      "learning_objectives": "The goal is to study how novel phenomena emerge in the solid state.",
      "content": "Today's challenges and opportunities in Solid State Physics:\nPhase transitions and critical phenomena, Fermi surface instabilities, Superconductors, Magnetism of insulators, Semiconductors",
      "lecture_notes": "The printed material for this course involves: (1) a self-contained script, distributed electronically at semester start. (2) experimental examples (Power Point slide-style) selected from original publications, distributed at the start of every lecture.",
      "literature": "A list of books will be distributed. Numerous references to useful published scientific papers will be provided.",
      "prerequisites": "This course is for students who like to be engaged in active learning. The \"exercise classes\" are organized in a non-traditional way: following the idea of \"less is more\", we will work on only about half a dozen topics, and this gives students a chance to take a look at original literature (provided), and to get the grasp of a topic from a broader perspective. \nThe \"compulsory performance element\" of this lecture is a presentation of a paper complementing the lecture topics. Several topics and corresponding papers will be offered on the moodle page of this lecture."
    },
    "performance_assessment": [
      {
        "ects_credits": 10,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "oral 35 minutes",
        "additional_info": "Each student is required to participate in a presentation on a selected topic during the exercises (compulsory continuous performance assessment). Topics and preparation material will be provided during the lecture. The student's presentation will not be graded (pass/fail).\nThe effective duration of the exam is 30 minutes. \nFor technical reasons it shows 35min.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Physics Master",
        "section": "Core Courses: Experimental Physics",
        "type": "W"
      },
      {
        "program": "Quantum Engineering Master",
        "section": "Electives",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "401-5660-00L",
    "title": "DACO Seminar",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "A. Sousa Bandeira",
      "R. Weismantel",
      "R. Zenklusen"
    ],
    "classes": [
      {
        "type": "Colloquium",
        "notes": "",
        "hours_per_week": 5,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Research colloquium",
      "learning_objectives": ""
    },
    "performance_assessment": [
      {
        "ects_credits": 0,
        "assessment_type": "no performance assessment",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Doctorate Mathematics",
        "section": "Colloquia",
        "type": "E-"
      },
      {
        "program": "Mathematics Master",
        "section": "Additional Courses",
        "type": "E-"
      }
    ]
  },
  {
    "course_id": "227-1572-01L",
    "title": "Semester Project (Nr 1)",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "Registration in myStudies required!Supervisor must be a professor at D-ITET or associated, see LinkThe first semester project is compulsory both for students enrolled in the MSc EEIT under the 2008 regulations and for students enrolled under the 2018 regulations.",
    "lecturers": [],
    "classes": [
      {
        "type": "Independent project",
        "notes": "Permission from lecturers required for all students. \r\n  ",
        "hours_per_week": 360,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Semester projects are designed to train the students  for independent scientific work. A project uses the student's technical and social skills acquired during the master's program. The semester project comprises 280 hours of work and is supervised by a professor.",
      "learning_objectives": "see above",
      "prerequisites": "Supervisor must be a professor at D-ITET or associated, see \nhttps://www.ee.ethz.ch/studies/main-master/projects-and-master-thesis.html"
    },
    "performance_assessment": [
      {
        "ects_credits": 12,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "additional_info": "Upon agreement with the supervisor, the language of the Semester Project can be German.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Electrical Engineering and Information Technology Master",
        "section": "02 - Semester Projects",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "227-0423-00L",
    "title": "Neural Network Theory",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "H. Bölcskei"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "HGF 5"
            ],
            "day": "Tue",
            "time": "10:15-12:00"
          }
        ]
      },
      {
        "type": "Exercise",
        "notes": "",
        "hours_per_week": 1,
        "schedule": [
          {
            "venue": [
              "HGF 5"
            ],
            "day": "Tue",
            "time": "12:15-13:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The class focuses on fundamental mathematical aspects of neural networks with an emphasis on deep networks: Universal approximation theorems, capacity of separating surfaces, generalization, fundamental limits of deep neural network learning, VC dimension.",
      "learning_objectives": "After attending this lecture, participating in the exercise sessions, and working on the homework problem sets, students will have acquired a working knowledge of the mathematical foundations of neural networks.",
      "content": "1. Universal approximation with single- and multi-layer networks\n2. Introduction to approximation theory: Fundamental limits on compressibility of signal classes, Kolmogorov epsilon-entropy of signal classes, non-linear approximation theory\n3. Fundamental limits of deep neural network learning\n4. Geometry of decision surfaces\n5. Separating capacity of nonlinear decision surfaces\n6. Vapnik-Chervonenkis (VC) dimension\n7. VC dimension of neural networks\n8. Generalization error in neural network learning",
      "lecture_notes": "Detailed lecture notes are available on the course web page\nhttps://www.mins.ee.ethz.ch/teaching/nnt/",
      "prerequisites": "This course is aimed at students with a strong mathematical background in general, and in linear algebra, analysis, and probability theory in particular."
    },
    "performance_assessment": [
      {
        "ects_credits": 4,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is only offered in the session after the course unit. Repetition only possible after re-enrolling.",
        "examination": "written 180 minutes",
        "exam_aid": "None",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Cyber Security Master",
        "section": "Elective Courses",
        "type": "W"
      },
      {
        "program": "Data Science Master",
        "section": "Information and Learning",
        "type": "W"
      },
      {
        "program": "Doctorate Mathematics",
        "section": "Graduate School",
        "type": "W"
      },
      {
        "program": "Electrical Engineering and Information Technology Master",
        "section": "Specialisation Courses",
        "type": "W"
      },
      {
        "program": "Electrical Engineering and Information Technology Master",
        "section": "Advanced Core Courses",
        "type": "W"
      },
      {
        "program": "Computer Science Master",
        "section": "Elective Courses",
        "type": "W"
      },
      {
        "program": "Computer Science Master",
        "section": "Minor in Machine Learning",
        "type": "W"
      },
      {
        "program": "Mathematics Master",
        "section": "Selection: Further Realms and UZH Courses",
        "type": "W"
      },
      {
        "program": "Physics Master",
        "section": "General Electives",
        "type": "W"
      },
      {
        "program": "Computational Science and Engineering Master",
        "section": "Electives",
        "type": "W"
      },
      {
        "program": "Statistics Master",
        "section": "Subject Specific Electives",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "551-0001-AAL",
    "title": "General Biology I",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "Enrolment ONLY for MSc students with a decree declaring this course unit as an additional admission requirement.Any other students (e.g. incoming exchange students, doctoral students) CANNOT enrol for this course unit.",
    "lecturers": [
      "U. Sauer",
      "O. Y. Martin",
      "A. Widmer"
    ],
    "classes": [
      {
        "type": "Revision course / private study",
        "notes": "Self-study course. No presence required.Please contact Prof. Uwe Sauer for further information.",
        "hours_per_week": 90,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Organismic biology to teach the basic principles of classical and molecular genetics, evolutionary biology and phylogeny.",
      "learning_objectives": "The understanding of basic principles of biology (inheritance, evolution and phylogeny) and an overview of the diversity of life.",
      "content": "The first semester focuses on the organismal biology aspects of genetics, evolution and diversity of life in the Campbell chapters 12-34.\nWeek 1-7 by Alex Widmer, Chapters 12-25\n12 Cell biology Mitosis\n13 Genetics Sexual life cycles and meiosis\n14 Genetics Mendelian genetics\n15 Genetics Linkage and chromosomes\n20 Genetics Evolution of genomes\n21 Evolution How evolution works\n22 Evolution Phylogentic reconstructions\n23 Evolution Microevolution\n24 Evolution Species and speciation\n25 Evolution Macroevolution\nWeek 8-14 by Oliver Martin, Chapters 26-34\n26 Diversity of Life Introdution to viruses\n27 Diversity of Life Prokaryotes\n28 Diversity of Life Origin & evolution of eukaryotes\n29 Diversity of Life Nonvascular&seedless vascular plants\n30 Diversity of Life Seed plants\n31 Diversity of Life Introduction to fungi\n32 Diversity of Life Overview of animal diversity\n33 Diversity of Life Introduction to invertebrates\n34 Diversity of Life Origin & evolution of vertebrates",
      "lecture_notes": "No script",
      "literature": "Campbell et al. (2017) Biology - A Global Approach. 11th Edition (Global Edition)",
      "prerequisites": "This is a virtual self-study lecture for non-german speakers of the \"Allgemeine Biology I (551-0001-00L) lecture. The exam will be written jointly with the participants of this lecture.\nExample exam questions will be discussed during the lectures, and old exam questions are kept by the various student organisations. If necessary, please contact Prof. Uwe Sauer (\nsauer@ethz.ch\n) for details regarding the exam."
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "written 60 minutes",
        "exam_aid": "a general dictionary for non-native speakers",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Food Science and Nutrition Master",
        "section": "Course Units for Additional Admission Requirements",
        "type": "E-"
      },
      {
        "program": "Environmental Sciences Master",
        "section": "Course Units for Additional Admission Requirements",
        "type": "E-"
      }
    ]
  },
  {
    "course_id": "227-0697-00L",
    "title": "Industrial Process Control",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "A. Horch",
      "C. Ganz"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "Upon special arrangement, on some afternoons the lecture will be extended. Single lectures may be given online.",
        "hours_per_week": 3,
        "schedule": [
          {
            "venue": [
              "IFWA 32.1"
            ],
            "day": "Tue",
            "time": "14:15-17:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Introduction to industrial automation systems with application to the process industry, power generation as well as discrete manufacturing.",
      "learning_objectives": "General understanding of industrial automation systems in different industries. Purpose, architecture, technologies, application examples, current and future trends.",
      "content": "Introduction to process automation: system architecture, data handling, communication (fieldbuses), process visualization, and engineering. Differences and characteristics of discrete and process industries.\nAnalysis and design of open loop control problems: discrete automata, finite state machines, decision tables, and petri-nets. Practical analysis and design of closed-loop control for the process industry.\nAutomation Engineering: Application programming in IEC 61131-3 (ladder diagrams, function blocks, sequence control, structured text); PLC programming and simulation, process visualization and operation; engineering integration from sensors, cabling, topology design, function, visualization, diagnosis, to documentation; Industry standards (e.g. OPC, Profibus); Ergonomic design, safety (IEC61508) and availability, supervision and diagnosis.\nAutomation standards: Communication, Architecture, Engineering, dependable systems, functional safety, automation security. \nExtensive practical examples from different process industries, power generation, gas compressor control, and automotive manufacturing.",
      "lecture_notes": "Slides will be available as .PDF documents, see \"Learning materials\" (for registered students only)",
      "literature": "References will be given at the end of individual lectures.",
      "prerequisites": "Exercises: Tuesdays after the lecture (applies not to all lectures)\nPractical exercises will illustrate some topics, e.g. some control software coding using industry standard programming tools based on IEC61131-3."
    },
    "performance_assessment": [
      {
        "ects_credits": 4,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "written 90 minutes",
        "exam_aid": "Simple calculator allowed",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Electrical Engineering and Information Technology Master",
        "section": "Specialisation Courses",
        "type": "W"
      },
      {
        "program": "Electrical Engineering and Information Technology Master",
        "section": "Tracks (all): Electives",
        "type": "W"
      },
      {
        "program": "Robotics, Systems and Control Master",
        "section": "Core Courses",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "101-0492-00L",
    "title": "Microscopic Modelling and Simulation of Traffic Operations",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "K. Riehl"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "HILG 15.4"
            ],
            "day": "Thu",
            "time": "09:45-11:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The course introduces basics of microscopic modelling and simulation of traffic operations, including model design and development, calibration, validation, data analysis, identification of strategies for improving traffic flow performance, and evaluation of such strategies. \nThe aim is to provide the fundamentals for building a realistic traffic-engineering project from beginning to end.",
      "learning_objectives": "The objective of this course is to conduct a realistic traffic engineering project from beginning to end. The students will first familiarize themselves with microscopic traffic models. Students will work in groups on a project that includes a base scenario on a real traffic network. Throughout the semester, along with theoretical concepts, the students will build the base scenario (design, calibration and validation) and will develop alternative scenarios regarding modification on the infrastructure, simulation of in-vehicle technologies and vehicle-to-everything (V2X) communication. \nSimulations will be implemented in Aimsun software. The students will be asked to understand, analyze, interpret and present traffic properties. Evaluation of alternative scenarios over the same network will be performed. Finally, students will be asked to design, implement, analyze and present a novel proposal, which will be compared with the base scenario. \nUpon completion of the course, the students will:\n• Understand the basic models used in microsimulation software (car-following, lane changing, gap acceptance, give ways, on/off-ramps, etc.).\n• Design a road transport network inside the simulation software.\n• Understand the basics behind modeling traffic demand and supply, vehicle dynamics, performance indicators for evaluation and network design for a realistic road transport network.\n• Understand how to design a complete study, implement and validate it for planning purposes, e.g. creating a new road infrastructure. \n• Make valid and concrete engineering proposals based on the simulation model and alternative scenarios.",
      "content": "In this course, the students will first learn some microscopic modelling and simulation concepts, and then complete a traffic-engineering project with microscopic traffic simulator Aimsun.\nMicroscopic modelling and simulation concepts will include:\n1) Car following models\n2) Lane change models\n3) Calibration and validation methodology\nSpecific tasks for the project will include:\n1) Building a model with the simulator Aimsun in order to replicate and analyze the traffic conditions measured/observed.\n2) Calibrating and validating the simulation model.\n3) Redesigning/extending the model to improve the traffic performance through Aimsun and with/without programming in Python or C++.\nThe course will be based on a project that each group of students will build (design, calibrate, analyze and presentation) across the semester. A mid-term and final presentation of the work will be asked from each group of students.\nIt consists of weekly 2-hour lectures. The students work in pairs on a group project that completes in the end of the semester. The modelling software used is Aimsun and lectures (theory and hands on experience) are taking place in a computer room. \nThe course Road Transport Systems (Verkehr III), or simultaneously taking the course Traffic Engineering is encouraged. Previous experience with Aimsun/Python/C++ is helpful but not mandatory.",
      "lecture_notes": "The lecture notes and additional handouts will be provided before the lectures.",
      "literature": "Additional literature recommendations will be provided at the lectures.",
      "prerequisites": "Students need to know some basic road transport concepts. The course Road Transport Systems (Verkehr III), or simultaneously taking the course Traffic Engineering is encouraged. Previous experience with Aimsun is helpful but not mandatory."
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "additional_info": "The students will be assessed in lectures through in-class participation, work on a group project, a mid-term oral presentation, a final oral presentation and a written final report:\n•Participation in class: 1/10\n•In-class interim oral presentation (simulation model and problem definition): 2/10\n•In-class final oral presentation (results and analysis): 3/10\n•Project final report: 4/10",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Civil Engineering Master",
        "section": "Major in Transport Systems",
        "type": "W"
      },
      {
        "program": "Civil Engineering Master",
        "section": "Digitalisation Specific Courses",
        "type": "W"
      },
      {
        "program": "Civil Engineering Master",
        "section": "Project Based Courses",
        "type": "W"
      },
      {
        "program": "Spatial Development and Infrastructure Systems Master",
        "section": "Major in Transport Systems and Behaviour",
        "type": "W"
      },
      {
        "program": "Spatial Development and Infrastructure Systems Master",
        "section": "Major in Network Infrastructure",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "247-0500-00L",
    "title": "Master's Thesis",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [],
    "classes": [
      {
        "type": "Diploma thesis",
        "notes": "",
        "hours_per_week": 300,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The topic of the independent Master’s thesis should focus on a technical problem and can be related to a specific business case. The problem and technology evaluated are freely selectable, but must be approved in advance by the thesis supervisor.",
      "learning_objectives": "The thesis should be integrative of the science and technology material and skills learned during the programme, particularly:\n \n• Understand and apply the foundations of the area of science and technology relevant to the topic,\n• Understand and describe the technical barriers to applying a technology successfully, and\n• Respective documentation using precise and targeted technical language."
    },
    "performance_assessment": [
      {
        "ects_credits": 12,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition possible without re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "MAS in Applied Technology",
        "section": "Master's Thesis",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "701-1331-00L",
    "title": "Biogeochemistry of Trace Elements Laboratory",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "A. Grigg",
      "M. Le Bars",
      "P. Lefebvre"
    ],
    "classes": [
      {
        "type": "Practical / laboratory course",
        "notes": "",
        "hours_per_week": 4,
        "schedule": [
          {
            "venue": [
              "CHND 53.2"
            ],
            "day": "Thu/2",
            "time": "08:15-18:00"
          },
          {
            "venue": [
              "MLF 36"
            ],
            "day": "06.11.",
            "time": "08:15-10:00"
          },
          {
            "venue": [
              "HGF 26.1"
            ],
            "day": "11.12.",
            "time": "08:15-18:00"
          },
          {
            "venue": [
              "HGF 26.1"
            ],
            "day": "18.12.",
            "time": "08:15-18:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The course offers a practical introduction into the investigation of the biogeochemistry of trace elements. Laboratory experiments are performed to study a selected environmental process. Advanced techniques for the analysis of total element contents and element speciation are used. The experimental findings are interpreted and discussed in their environmental context.",
      "learning_objectives": "The objective of this course, is to offer students a practical introduction into the investigation of the biogeochemistry of trace elements. During the course, students will become familiar with some of the key experimental approaches typically used in the investigation of the biogeochemistry of trace elements in the laboratory. In addition, students will learn to use different advanced analytical techniques to measure the total content and the speciation of trace elements in both liquid and solid samples. The students will interpret and discuss their experimental findings in the context of the studied environmental system.",
      "content": "Laboratory experiments are designed and performed to study the interplay of various biogeochemical processes in a specific environmental system. Moreover, the effect of these processes on the biogeochemical cycling of trace elements in the environment will be considered. Advanced techniques for the analysis of total element contents and element speciation are used. The experimental findings are interpreted and discussed in the context of the the environmental system under investigation.",
      "lecture_notes": "Selected handouts will be distributed during the course.",
      "literature": "All neccessary literature will be uploaded to moodle during the course.",
      "prerequisites": "Pre- or corequisite: Lecture \"Biogeochemistry of Trace Elements\"."
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Environmental Sciences Master",
        "section": "Methods and Tools: Lab Courses",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "636-0119-00L",
    "title": "Introduction to Statistics and R",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "J. Kuipers"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "This lecture will take place in classroom in BASEL.Attention: the lecture starts in the second week of the semester.",
        "hours_per_week": 3,
        "schedule": [
          {
            "venue": [
              "BSSE 23",
              "BSSE 44"
            ],
            "day": "Thu",
            "time": "16:15-19:00"
          }
        ]
      },
      {
        "type": "Independent project",
        "notes": "Project Work (Compulsory continuous performance assessments), no fixed presence required.",
        "hours_per_week": 2,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "This course offers a practical introduction to the fundamentals of data analysis and R",
      "learning_objectives": "To acquire the statistical understanding to design an appropriate analysis and the practical skills to implement the analysis in R and present the results.",
      "content": "Data analysis is fundamental for arriving at scientific conclusions and testing different hypotheses. This course offers a hands-on introduction to statistical analyses including: exploratory data analysis, testing differences in populations, p-values, power calculations, multiple testing, confounding, linear regression, maximum likelihood, model selection, and logistic regression; along with the fundamentals of R programming including markdown and data handling with the tidyverse.",
      "lecture_notes": "Lecture slides will be available",
      "prerequisites": "Access to Rstudio with some markdown and tidyverse packages installed."
    },
    "performance_assessment": [
      {
        "ects_credits": 6,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is only offered in the session after the course unit. Repetition only possible after re-enrolling.",
        "examination": "oral 20 minutes",
        "additional_info": "Final grade: 62.5% oral examination, 37.5% project work.\nProject work has to be re-done in case of repetition.\nThe course includes compulsory continuous performance assessments in the form of project work/assignments, which constitute 37.5% of the final grade.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Biotechnology Master",
        "section": "Electives",
        "type": "W"
      },
      {
        "program": "Doctorate Biosystems Science and Engineering",
        "section": "Subject Specialisation",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "148-0001-00L",
    "title": "GIS-basics and -principles",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "German",
    "comment": "",
    "lecturers": [
      "L. Hurni",
      "M. Raubal"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "",
        "hours_per_week": 60,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "A Geographic Information System (GIS) is a system for collecting, managing, analyzing and visualizing spatial data (geodata). This module teaches the fundamental concepts and principles necessary for a comprehensive understanding and effective application of GIS technologies.",
      "learning_objectives": "After completion of this module, students will be able to understand the fundamentals of Geographic Information Systems (GIS) and be able to retrieve and apply them appropriately in practice. They will be able to describe and apply the essential components and principles of GIS."
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "German",
        "repetition": "Repetition possible without re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "CAS in Geoinformation Systems and Analysis",
        "section": "Modules",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "402-0402-00L",
    "title": "Ultrafast Laser Physics",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "L. Gallmann"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "",
        "hours_per_week": 3,
        "schedule": [
          {
            "venue": [
              "HCIJ 6"
            ],
            "day": "Tue",
            "time": "09:45-11:30"
          },
          {
            "venue": [
              "HCIJ 6"
            ],
            "day": "Wed",
            "time": "12:45-13:30"
          }
        ]
      },
      {
        "type": "Exercise",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "HCID 6"
            ],
            "day": "Wed",
            "time": "13:45-15:30"
          },
          {
            "venue": [
              "HITF 31.1"
            ],
            "day": "Thu",
            "time": "07:45-09:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Introduction to ultrafast laser physics with an outlook into cutting edge research topics such as attosecond science and coherent ultrafast sources from THz to X-rays.",
      "learning_objectives": "Understanding of basic physics and technology for pursuing research in ultrafast laser science. How are ultrashort laser pulses generated, how do they interact with matter, how can we measure these shortest man-made events and how can we use them to time-resolve ultrafast processes in nature? Fundamental concepts and techniques will be linked to a selection of hot topics in current research and applications.",
      "content": "The lecture covers the following topics:\na) Linear pulse propagation: mathematical description of pulses and their propagation in linear optical systems, effect of dispersion on ultrashort pulses, concepts of pulse carrier and envelope, time-bandwidth product\nb) Dispersion compensation: technologies for controlling dispersion, pulse shaping, measurement of dispersion\nc) Nonlinear pulse propagation: intensity-dependent refractive index (Kerr effect), self-phase modulation, nonlinear pulse compression, self-focusing, filamentation, nonlinear Schrödinger equation, solitons, non-instantaneous nonlinear effects (Raman/Brillouin), self-steepening, saturable gain and absorption\nd) Second-order nonlinearities with ultrashort pulses: phase-matching with short pulses and real beams, quasi-phase matching, second-harmonic and sum-frequency generation, parametric amplification and generation\ne) Relaxation oscillations: dynamical behavior of rate equations after perturbation\nf) Q-switching: active Q-switching and its theory based on rate equations, active Q-switching technologies, passive Q-switching and theory\ng) Active modelocking: introduction to modelocking, frequency comb versus axial modes, theory for various regimes of laser operation, Haus master equation formalism\nh) Passive modelocking: slow, fast and ideally fast saturable absorbers, semiconductor saturable absorber mirror (SESAM), designs of and materials for SESAMs, modelocking with slow absorber and dynamic gain saturation, modelocking with ideally fast saturable absorber, Kerr-lens modelocking, soliton modelocking, Q-switching instabilities in modelocked lasers, inverse saturable absorption\ni) Pulse duration measurements: rf cables and electronics, fast photodiodes, linear system theory for microwave test systems, intensity and interferometric autocorrelations and their limitations, frequency-resolved optical gating, spectral phase interferometry for direct electric-field reconstruction and more\nj) Noise: microwave spectrum analyzer as laser diagnostics, amplitude noise and timing jitter of ultrafast lasers, lock-in detection\nk) Ultrafast measurements: pump-probe scheme, transient absorption/differential transmission spectroscopy, four-wave mixing, optical gating and more\nl) Frequency combs and carrier-envelope offset phase: measurement and stabilization of carrier-envelope offset phase (CEP), time and frequency domain applications of CEP-stabilized sources\nm) High-harmonic generation and attosecond science: non-perturbative nonlinear optics / strong-field phenomena, high-harmonic generation (HHG), phase-matching in HHG, attosecond pulse generation, attosecond technology: detectors and diagnostics, attosecond metrology (streaking, RABBITT, transient absorption, attoclock), example experiments\nn) Ultrafast THz science: generation and detection, physics in THz domain, weak-field and strong-field applications",
      "literature": "Ultrafast Lasers, U. Keller, Springer, ISBN 978-3-030-82534-8 (soft cover), ISBN 978-3-030-82531-7 (hard cover), ISBN 978-3-030-82532-4 (ebook)\nhttps://doi.org/10.1007/978-3-030-82532-4",
      "prerequisites": "Prerequisites: Basic knowledge of quantum electronics (e. g., 402-0275-00L Quantenelektronik)."
    },
    "performance_assessment": [
      {
        "ects_credits": 10,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "oral 30 minutes",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Doctorate Materials Science",
        "section": "Science & Technology of the Small (MaP Doctoral School)",
        "type": "W"
      },
      {
        "program": "Physics Master",
        "section": "Core Courses: Experimental Physics",
        "type": "W"
      },
      {
        "program": "Quantum Engineering Master",
        "section": "Electives",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "701-3003-00L",
    "title": "Environmental Systems Data Science: Machine Learning",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "L. Pellissier"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "Does not take place this semester.Semester change: This course unit will next be offered in spring semester 26.",
        "hours_per_week": 1,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Students are introduced to advanced data science where environmental data are analyzed using state of the art machine learning methods. Starting from known statistical approaches, they learn the principle of more advanced machine learning methods with practical application. The course enables students to plan their own data science project in their specialization and to apply machine learning mode",
      "learning_objectives": "The students are able to \n• select an appropriate model related to a research question and dataset\n• describe the steps from data preparation to running and evaluating models \n• prepare data for running machine learning with dependent and independent variable\n• build and validate regressions and neural network models\n• understand convolution and deep learning models\n• access online resources to keep up with the latest data science methodology and deepen their understanding",
      "content": "• The data science workflow \n• Data preparation for running and validating machine learning models\n• Get to know machine learning approaches including regression, random forest and neural network\n• Model complexity and hyperparameters\n• Model parameterization and loss\n• Model evaluations and uncertainty\n• Deep learning with convolutions",
      "literature": "Building on existing data science resources",
      "prerequisites": "Math IV, VI (Statistics); R, Python; ESDS I"
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "additional_info": "To pass the course, you need to complete at least 4 exercises (incl. peer-review!) with at least 60 points and complete 2 applications.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Agricultural Sciences Master",
        "section": "Data Science and Technology for Agricultural Science",
        "type": "W+"
      },
      {
        "program": "Environmental Sciences Master",
        "section": "Methods and Tools",
        "type": "W"
      },
      {
        "program": "Environmental Sciences Master",
        "section": "Modeling and Statistical Analysis",
        "type": "W"
      },
      {
        "program": "Environmental Sciences Master",
        "section": "Additional Electives",
        "type": "W"
      },
      {
        "program": "Environmental Sciences Master",
        "section": "Electives Data",
        "type": "W"
      },
      {
        "program": "Environmental Sciences Master",
        "section": "Electives",
        "type": "W"
      },
      {
        "program": "Environmental Sciences Master",
        "section": "Additional Elective Courses",
        "type": "W"
      },
      {
        "program": "Environmental Sciences Master",
        "section": "Electives",
        "type": "W"
      },
      {
        "program": "Environmental Sciences Master",
        "section": "Electives",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "376-0300-00L",
    "title": "Essentials in Translational Science",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "NOT COMPULSORY ANY MORE! Instead of the course Essentials in Translational Science any elective master course(s) can be taken to cover the 3 credits.",
    "lecturers": [
      "J. Goldhahn",
      "N. K. Brasier",
      "D. Schaffarczyk"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "MLH 44"
            ],
            "day": "Fri",
            "time": "10:15-12:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Translational science is a cross disciplinary scientific research that is motivated by the need for practical applications that help people (e.g. Medicines). The course should help to clarify basics of translational science, illustrate successful applications and enable students to integrate key features into their future projects.",
      "learning_objectives": "After completing this course, students will be able to understand:\nPrinciples of translational science including medical device development, intellectual property, regulatory environment and project management\nStudents should be able to apply this knowledge in drug development programs in Pharma, Biotech or their own spin-off.",
      "content": "What is translational science and what is it not Including: \nHow to identify need?\nHow to choose the appropriate research type and methodology\nHow to measure success?\nHow are medical devices developed?\nHow to handle IP in the development process?\nHow does the regulatory environment impact innovation?\nHow to manage complex development projects?\nPositive and negative examples will be illustrated by distinguished guest speakers.",
      "literature": "Principles of Biomedical Sciences and Industry\nTranslating Ideas into Treatments\nhttps://doi.org/10.1002/9783527824014",
      "prerequisites": "4x online input lecture followed by case preparation and symposium"
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "written 45 minutes",
        "additional_info": "Handing in the mock exam and participating in the seminar will count as a 0.25 bonus for the final exam.",
        "exam_aid": "None",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Biology Master",
        "section": "Elective Compulsory Master Courses",
        "type": "W"
      },
      {
        "program": "Biology Master",
        "section": "Elective Compulsory Master Courses",
        "type": "W"
      },
      {
        "program": "Health Sciences and Technology Master",
        "section": "Compulsory Courses",
        "type": "O"
      },
      {
        "program": "Health Sciences and Technology Master",
        "section": "Compulsory Courses",
        "type": "O"
      },
      {
        "program": "Health Sciences and Technology Master",
        "section": "Compulsory Courses",
        "type": "O"
      },
      {
        "program": "Health Sciences and Technology Master",
        "section": "Compulsory Courses",
        "type": "O"
      },
      {
        "program": "Health Sciences and Technology Master",
        "section": "Compulsory Courses",
        "type": "O"
      },
      {
        "program": "Health Sciences and Technology Master",
        "section": "Compulsory Courses",
        "type": "O"
      },
      {
        "program": "MAS in Nutrition and Health",
        "section": "Electives",
        "type": "W"
      },
      {
        "program": "Science, Technology, and Policy Master",
        "section": "Life Science and Health",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "701-0328-00L",
    "title": "Advanced Ecological Processes",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "J. Hille Ris Lambers"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "CHNF 42"
            ],
            "day": "Mon",
            "time": "12:15-14:00"
          },
          {
            "venue": [
              "CHNF 46"
            ],
            "day": "12.01.",
            "time": "12:15-14:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "This course presents a broad overview of the key processes structuring ecological populations and communities, with a particular focus on understanding and managing global change impacts.",
      "learning_objectives": "COURSE GOALS\nIn this course, students will develop an integrated knowledge of how ecological theory can help us understand and manage ecological responses to global change. Specifically, the course goals are to:\n - Introduce students to the major ecological processes that together influence population dynamics and community composition.\n - Provide insight to students on the ecological impacts of anthropogenic change, and how an understanding of ecological concepts can help us predict these ecological impacts and design conservation / restoration actions to mitigate their negative impacts.\n - Teach students to work with primary ecological literature, with a focus on understanding how each study contributes to our ecological knowledge (particularly about global change impacts and mitigation), what common strengths and weaknesses of different kinds of studies are, identifying unanswered questions, and brainstorming follow up studies.\nLEARNING OBJECTIVES\nThe learning objectives follow from the course goals. After attending this course, students should be able to:\n - Describe key processes affecting the dynamics of populations and ecological communities.\n - Critically evaluate evidence and conclusions presented in primary ecological literature based on your understanding of ecological processes.\n - Apply knowledge of ecological concepts to make predictions about the major responses of ecological communities to anthropogenic perturbations, or devise strategies to minimize these impacts.",
      "content": "We will explore ecological concepts and theories, focusing on how they can provide insight into the effects of anthropogenic change as well as guide management to undo undesired impacts. Collectively, this requires us to focus on classic problems in ecology (for examples, predator-prey dynamics, diversity-ecosystem function relationships, population dynamics in patchy habitats, the role of dispersal in spread).  \nIn the first half of the course, there is either a lecture or there are online materials for students to engage with (lecture videos, readings). In the second half of the course, we will work in small groups to discuss the material and / or the assigned articles. The class will therefore meet in person for all or 1/2 of the allocated time.",
      "lecture_notes": "All course materials (videos, lecture notes, primary literature) will be provided on the course moodle."
    },
    "performance_assessment": [
      {
        "ects_credits": 4,
        "assessment_type": "end-of-semester examination",
        "language_of_examination": "English",
        "repetition": "A repetition date will be offered in the first two weeks of the semester immediately consecutive.",
        "examination": "written 90 minutes",
        "additional_info": "The final grade comes from:\n- A written final examination (90 minutes) that makes up 80% of the grade.\n- A graded compulsory continuous performance assessment that makes up 20% of the grade, and must be passed on its own. This continuous performance assessment consists of an written assignment based on an assigned primary literature article or concept.",
        "exam_aid": "only calculator",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Biology Master",
        "section": "Elective Compulsory Master Courses",
        "type": "W"
      },
      {
        "program": "Environmental Sciences Master",
        "section": "A. Fundamentals",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "052-0561-25L",
    "title": "Territories of Play - Deep Space",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "Max. number of students: 20Waiting list until September 22, 2025",
    "lecturers": [
      "J. Rauber"
    ],
    "classes": [
      {
        "type": "Seminar",
        "notes": "No course 23.10.2025 (seminar week) and in the last two semester weeks (final critiques).",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "HILB 18.2"
            ],
            "day": "Thu",
            "time": "09:45-11:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "DEEP SPACE is the 9th iteration of Voluptas' research on play and architecture. The course encourages students to analyse the relationship between play and space by focussing on depth as a spatiotemporal condition that goes beyond the question of form. It will test playfulness as a critical design tool and investigate depth as a multifaceted and desirable condition of urbanity.",
      "learning_objectives": "Participants of the course will be able to understand the importance of absence as spatial strategy and apply basic principles of critical urban design. Furthermore, students will be able to evaluate the importance of non-material aspects for the experience of our lived environments. By performing the course's exercises, participants will apply strategies that generate depth and investigate their potential to undermine established norms and rules.",
      "content": "The seminar aims at bringing together the ludic territories of play with the hidden realms of depth to attempt a critical reading of contemporary urban conditions and develop a design vocabulary for playful and deep spatial transformation. In contrast to depth as a visual phenomenon – which was formally introduced to the architectural discourse in the Renaissance by means of the linear perspective – depth will be investigated phenomenologically. The seminar is dedicated to the questions of what role depth perception plays in games, how it can be created or manipulated, and whether it can be transferred to architecture as a playful and critical design strategy.\nThese questions are addressed through a speculative exercise with four progressive steps: First, participants critically describe an urban space they know and gather its most iconic images to construct a visual arsenal. Second, they study and document a game of their choice, portray its unique spatial dimensions, and extract the main mechanisms for generating depth. This analysis will culminate in a diagrammatic representation of the game's main depth mechanic(s). Third, the identified mechanic(s) from the game in step two will be used to manipulate the space portrayed in step one. This spatial manipulation will be performed by means of montage and culminate in a \"deep image\". Finally, participants are asked to write a speculative logline that links the diagram of the game with the montage of the space.\nThe exercise structures the seminar as follows:\nEx.1: Describe an urban space and gather its most iconic images to form an arsenal.\nEx.2: Analyse a game of your choice and draw a diagram of its depth mechanic(s).\nEx.3: Manipulate the space from ex.1 by means of montage and by making use of a mechanic from ex.2.\nEx.4: Write a logline that links the diagram of the game with the montage of the space.\nFollowing the structure of the exercise, the seminar will include additional readings, lectures on architecture and game theory, as well as practical inputs (tools). The exercise of the seminar is to be completed individually. Selected projects will be presented by the respective students in the final session of the seminar.",
      "lecture_notes": "The semester reader will be made available as a download for registered participants.",
      "literature": "Required readings will be made available as a download for registered participants.",
      "prerequisites": "Recommended for students with a strong interest in conceptual design thinking, critical urban theory, and experimental forms of representation.\nThe course will be held physically at ETH Hönggerberg, HIL B 18.2.\nFor more information please contact: \nrauber@arch.ethz.ch"
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "additional_info": "The evaluation will be done through the exercise submissions, and level of participation.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Architecture Bachelor",
        "section": "Design and Architecture",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "402-0255-00L",
    "title": "Introduction to Solid State Physics",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "Physics BSc students with programme regulations 2016 need to register for \"402-0255-10L Einführung in die Festkörperphysik\".A repetition week is offered in the middle of the semester.",
    "lecturers": [
      "C. Degen"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "",
        "hours_per_week": 3,
        "schedule": [
          {
            "venue": [
              "HPHG 3"
            ],
            "day": "Thu",
            "time": "13:45-15:30"
          },
          {
            "venue": [
              "HPHG 3"
            ],
            "day": "Fri",
            "time": "12:45-13:30"
          }
        ]
      },
      {
        "type": "Exercise",
        "notes": "Die Übungen beginnen in der 2. Semesterwoche.Di 14-16 oder Mi 10-12",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "HCPE 47.2",
              "HCPE 47.3",
              "HITK 52",
              "HPKD 3"
            ],
            "day": "Tue",
            "time": "13:45-15:30"
          },
          {
            "venue": [
              "HITH 51",
              "HITJ 53",
              "HITK 52"
            ],
            "day": "Wed",
            "time": "09:45-11:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The course provides an introduction to solid state physics, covering several topics that are later discussed in more detail in other more specialized lectures. The central topics are: solids and their lattice structures; interatomic bindings; lattice dynamics, electronic properties of insulators, metals, semiconductors, transport properties, and magnetism.",
      "learning_objectives": "Introduction to Solid State Physics.",
      "content": "The course provides an introduction to solid state physics, covering several topics that are later discussed in more detail in other more specialized lectures. The central topics are: solids and their lattice structures; interatomic bindings; lattice dynamics, thermal properties of insulators; metals (classical and quantum mechanical description of electronic states, thermal and transport properties of metals); semiconductors (bandstructure and n/p-type doping);  magnetism.",
      "lecture_notes": "The script will be available on moodle.",
      "literature": "C. Kittel, Festkörperphysik\nAshcroft & Mermin, Festkörperphysik",
      "prerequisites": "Voraussetzungen: Physik I, II, III wünschenswert"
    },
    "performance_assessment": [
      {
        "ects_credits": 8,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "written 180 minutes",
        "exam_aid": "Formelsammlung von 5 Blättern A4 (10 Seiten), selbst verfasst (handgeschrieben!). Taschenrechner (ohne Kommunikationsfunktion und Massenspeicher). Wörterbuch für Fremdsprachige.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Interdisciplinary Sciences Bachelor",
        "section": "Electives",
        "type": "W"
      },
      {
        "program": "Physics Bachelor",
        "section": "Core Courses in Experimental Physics",
        "type": "W"
      },
      {
        "program": "Physics Teaching Diploma",
        "section": "Spec. Courses in Resp. Subj. w/ Educ. Focus & Further Subj. Didactics",
        "type": "W"
      },
      {
        "program": "Quantum Engineering Master",
        "section": "Physics Core Courses",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "752-1021-00L",
    "title": "Food Enzymology",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "L. Nyström",
      "M. Erzinger"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "CHND 42"
            ],
            "day": "Tue",
            "time": "14:15-16:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The course covers the fundamentals of food enzymology, application of endogenous and exogenous enzymes in food processing, as well as use of enzymes in analytics.",
      "learning_objectives": "Students can describe what enzymes are and can explain their use and functions in food and food products.\nStudents can argue why and how enzymes are used in food processing and analysis. \nStudents execute a research project independently and defend their findings during a presentation to peer students and an expert panel.",
      "content": "Enzymes in foods: the use of added enzymes in food processing, control and/or utilization of endogenous enzymes, production of enzyme preparations for food use, and chemical analysis of food components by enzymatic methods.\nCourse contains lectures and a practical group work.",
      "lecture_notes": "The lectures are supplemented with handouts.",
      "prerequisites": "Course prerequisites: Food Chemistry I/II and Food Analysis I/II (or equivalent)"
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition possible without re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Food Science and Nutrition Master",
        "section": "Disciplinary Subjects",
        "type": "W+"
      },
      {
        "program": "Food Science and Nutrition Master",
        "section": "Core courses FST",
        "type": "W+"
      },
      {
        "program": "Food Science and Nutrition Master",
        "section": "Food Chemistry",
        "type": "W+"
      },
      {
        "program": "Food Science and Nutrition Master",
        "section": "Profile courses NH",
        "type": "W+"
      }
    ]
  },
  {
    "course_id": "529-0966-00L",
    "title": "Introductory Internship Chemistry",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "German",
    "comment": "Simultaneous enrolment in Subject Didactics Chemistry I - course 529-0950-00L - is compulsory.",
    "lecturers": [
      "P. Aschwanden"
    ],
    "classes": [
      {
        "type": "Practical / laboratory course",
        "notes": "Zuteilung zu den Praktikumslehrpersonen über den Fachdidaktiker Chemie.",
        "hours_per_week": 90,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "During the introductory teaching practice, the students sit in on five lessons given by the teacher responsible for their teaching practice, and teach five lessons themselves. The students are given observation and reflection assignments by the teacher responsible for their teaching practice.",
      "learning_objectives": "Die Studierenden sammeln zu Beginn ihrer Ausbildung erste Erfahrungen mit der Beobachtung, Konzeption und Durchführung von Unterricht. Diese frühe Auseinandersetzung mit der Komplexität von Unterrichtsgeschehen hilft abzuschätzen, ob die Ausbildung weitergeführt werden soll. Sie bildet die Grundlage für die nachfolgende pädagogische und fachdidaktische Ausbildung",
      "content": "Das Einführungspraktikum gibt den Studierenden Einblick in den Berufsalltag einer Lehrperson. \nDie Praktikumslehrperson legt Beobachtungs- und Reflexionsaufträge und die Themen der zu erteilenden Lektionen fest. Die schriftlich dokumentierten Ergebnisse sind Bestandteil des Portfolios des/der Studierenden. Anlässlich der Hospitationen erläutert die Praktikumslehrperson ihre fachlichen und didaktischen Überlegungen, auf deren Basis sie den Unterricht geplant hat und tauscht sich mit der/dem Studierenden aus. Zu den Lektionen, die der/die Studierende selber hält, führt die Praktikumslehrperson Vor- und Nachbesprechungen durch",
      "literature": "Wird von der Praktikumslehrperson bestimmt.",
      "prerequisites": "Das Einführungspraktikum findet an einem Gymnasium der Deutschschweiz statt."
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "German",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Chemistry Teaching Diploma",
        "section": "Professional Training in Chemistry",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "529-0643-01L",
    "title": "Process Design and Development",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "G. Guillén Gosálbez"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "",
        "hours_per_week": 3,
        "schedule": [
          {
            "venue": [
              "HCID 8"
            ],
            "day": "Tue",
            "time": "09:45-11:30"
          },
          {
            "venue": [
              "HCIH 2.1"
            ],
            "day": "Wed",
            "time": "12:45-13:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The course is focused on the design of Chemical Processes, with emphasis on the preliminary stages of the design approach, where process creation and quick selection among many alternatives are important. The main concepts behind more detailed process design and process simulation are also examined.",
      "learning_objectives": "The course is focused on the design of Chemical Processes, with emphasis on the preliminary stage of the design approach, where process creation and quick selection among many alternatives are important. The main concepts behind more detailed process design and process simulation are also examined.",
      "content": "Process creation: heuristics vs. mathematical programming.\nHeuristics for reaction and separation operations, heat transfer and pressure change.\nIntroduction to optimization in process engineering and the modeling software GAMS.\nProcess economic evaluation: equipment sizing and costing, time value of money, cash flow calculations.\nProcess environmental evaluation: Life Cycle Assessment (LCA).\nProcess integration: sequencing of distillation columns using mixed-integer linear programming (MILP), and synthesis of heat exchanger networks using mixed-integer nonlinear programming (MINLP).\nBatch processes: scheduling, sizing, and inventories.\nPrinciples of molecular design using mixed-integer programming.",
      "lecture_notes": "no script",
      "literature": "Main books\n1. Biegler, L.T., Grossmann, I.E., Westerberg, A.W. Systematic methods of chemical process design,\nPrentice Hall International PTR (1997).\n2. Douglas, J.M. Conceptual design of chemical processes, McGraw-Hill (1988).\n3. Seider, W.D., Seader, J.D., Lwin, D.R., Widagdo, S. Product and process design principles: synthesis,\nanalysis, and evaluation, John Wiley & Sons, Inc. (2010).\n4. Sinnot, R.K., Towler, G. Chemical Engineering Design, Butterworth-Heinemann (2009).\n5. Smith, R. Chemical process design and integration, Wiley (2005).\nOther references\n6. Edgar, T. F., Himmelblau, D. M. Optimization of chemical process, Mcgraw Hill Chemical Engineering\nSeries (2001).\n7. Haydary, J. Chemical Process Design and Simulation, Wiley (2019).\n8. Turton, R., Shaeiwitz, A., Bhattacharyya, D., Whiting, W. Synthesis and Design of Chemical\nProcesses, Prentice Hall (2013).\n9. Klöpffer, W., Grahl, B. Life Cycle Assessment (LCA): A Guide to Best Practice, Wiley (2014).",
      "prerequisites": "Prerequisite: Basic knowledge on unit operations, mainly reaction engineering and distillation. It is recommended that the student takes the module \"Process Simulation and Flowsheeting\" before \"Process Design and Development\", but it is not mandatory."
    },
    "performance_assessment": [
      {
        "ects_credits": 6,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "written 180 minutes",
        "additional_info": "The compulsory continuous performance assessment is based on a set of exercises that represent 20% of the total mark. The compulsory continuous performance assessment task needs not to be passed on its own. The module is passed with 4 out of 6 points (i.e., 60 out of 100), where the total mark comes from the exam (80%) and the coursework (20%).",
        "exam_aid": "All learning material (books, lecture notes, personal notes etc.) and calculation means (calculators, scientific calculators, personal laptops etc.) are allowed",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Chemical and Bioengineering Master",
        "section": "Process Design",
        "type": "W+"
      },
      {
        "program": "Chemical and Bioengineering Master",
        "section": "Process Design",
        "type": "W"
      },
      {
        "program": "Micro- and Nanosystems Master",
        "section": "Elective Core Courses",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "402-0700-00L",
    "title": "Seminar in Elementary Particle Physics",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "LTP/PSI Colloquium",
    "lecturers": [
      "M. Spira"
    ],
    "classes": [
      {
        "type": "Seminar",
        "notes": "Gemäss Ankündigung auf https://www.psi.ch/en/ltp/thursday-colloquia",
        "hours_per_week": 1,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Research colloquium",
      "learning_objectives": "Stay informed about current research results in elementary particle physics."
    },
    "performance_assessment": [
      {
        "ects_credits": 0,
        "assessment_type": "no performance assessment",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Physics Bachelor",
        "section": "Seminars and Colloquia",
        "type": "E-"
      },
      {
        "program": "Physics Master",
        "section": "Seminars, Colloquia, and Additional Courses",
        "type": "E-"
      }
    ]
  },
  {
    "course_id": "851-0732-06L",
    "title": "Law & Tech",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "J. Merane",
      "A. Stremitzer"
    ],
    "classes": [
      {
        "type": "Seminar",
        "notes": "Lecture starts in week 2 (25/09)",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "LFWC 5"
            ],
            "day": "Thu",
            "time": "16:15-18:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "This course introduces students to scientific and technological developments that require regulation or enable legal innovation. We focus particularly on the challenges to current law posed by prominent near-future technologies, with a current emphasis on the regulation of artificial intelligence (AI).",
      "learning_objectives": "The course is designed for a wide range of ETH students as well as for law students who are keen to deepen their understanding of cutting-edge technology. It introduces core legal principles relevant to technology regulation and offers an overview of key legal areas, complemented by guest lectures on emerging technological trends.\nIn previous years, the course has featured esteemed speakers from various sectors, including speakers from leading technology companies, influential NGOs, national regulatory agencies, and distinguished universities.\nThe course is open to ETH students through the Science in Perspective program of the Department of Humanities, Social and Political Sciences.",
      "content": "The planned course outline includes the following thematic blocks:\n- Overview of Law and Technology\n- Fundamental Rights in the Digital Age\n- AI Regulation I: AI in Government\n- AI Regulation II: Liability Rules for AI\n- Content Moderation\n- Regulation of Digital Platforms \n- Landmark Big Tech Cases \n- Online Consumer Protection \n- Law and Tech Scholarship Series\nA number of recent regulations will be discussed, including the EU's AI Act, the Digital Services Act (DSA), and the Digital Markets Act (DMA), as well as emerging internet phenomena, like ChatGPT.",
      "prerequisites": "You can find all course materials and the most recent announcements on Moodle. Please log in to Moodle using your ETH or UZH credentials. Then search for \"Law & Tech (851-0732-06L Law & Tech HS2025)\" and enroll."
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "additional_info": "The final grade for the course will be based on two components: a group assignment (40%) and a written final exam (60%). The group assignment will involve collaborative work on a selected topic related to the course themes; further details will be provided during the semester. The written exam will take the form of an open-book essay exam and will be held on the last day of class.\nClass participation can positively influence the final grade by up to 0.25 grade points. Active engagement in discussions is highly encouraged and contributes to the overall quality of the learning experience. Participation will only be used to adjust grades upward.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Data Science Master",
        "section": "Interdisciplinary Electives",
        "type": "W"
      },
      {
        "program": "Doctorate Humanities, Social and Political Sciences",
        "section": "Subject Specialisation",
        "type": "W"
      },
      {
        "program": "Science, Technology, and Policy Master",
        "section": "Electives",
        "type": "W"
      },
      {
        "program": "Science in Perspective",
        "section": "D-BIOL",
        "type": "W"
      },
      {
        "program": "Science in Perspective",
        "section": "Law",
        "type": "W"
      },
      {
        "program": "Science in Perspective",
        "section": "D-INFK",
        "type": "W"
      },
      {
        "program": "Science in Perspective",
        "section": "D-ITET",
        "type": "W"
      },
      {
        "program": "Science in Perspective",
        "section": "D-MTEC",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "103-0187-AAL",
    "title": "Satellite Geodesy",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "Enrolment ONLY for MSc students with a decree declaring this course unit as an additional admission requirement.Any other students (e.g. incoming exchange students, doctoral students) CANNOT enrol for this course unit.",
    "lecturers": [
      "M. Aichinger-Rosenberger"
    ],
    "classes": [
      {
        "type": "Revision course / private study",
        "notes": "Self-study course. No presence required.",
        "hours_per_week": 37,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "GPS, VLBI, SLR/LLR and satellite altimetry: Principles, instrumentation and observation equation. Modelling and estimation of station coordinates and station motion. Ionospheric and tropospheric refraction and estimation of atmospheric parameters. Basics of satellite orbit determination.",
      "learning_objectives": "Understanding the major observation techniques in space geodesy as modern methods applied in Earth system monitoring (geometry, rotation and gravity field of the Earth and the atmosphere), in national surveying and navigation.",
      "content": "Overview of GPS, VLBI, Satellite and Lunar Laser Ranging (SLR/LLR), Satellite Radar Altimetry with the basic principles, the instruments and observation equations. Modelling of the station motions and the estimation of station coordinates. Basics of wave propagation in the atmosphere. Signal propagation in the ionosphere and troposphere for the different observation techniques and the determination of atmospheric parameters.\nBasics of satellite orbit determination.",
      "literature": "Script M. Rothacher \"Space Geodesy\""
    },
    "performance_assessment": [
      {
        "ects_credits": 4,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition possible without re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Geomatics Master",
        "section": "Course Units for Additional Admission Requirements",
        "type": "E-"
      }
    ]
  },
  {
    "course_id": "511-0003-00L",
    "title": "Practical Methods in Pharmaceutical Sciences",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [],
    "classes": [
      {
        "type": "Independent project",
        "notes": "",
        "hours_per_week": 17,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Practical Methods in Pharmaceutical Sciences familiarise students with scientific procedures and operational methodologies through supervised participation in current research work.",
      "learning_objectives": "Students get acquainted with scientific working methods and deepen their knowledge in a particular research area."
    },
    "performance_assessment": [
      {
        "ects_credits": 8,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Pharmaceutical Sciences Master",
        "section": "Research Project",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "529-0004-01L",
    "title": "Classical Simulation of (Bio)Molecular Systems",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "P. H. Hünenberger",
      "S. Riniker"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "2 hr lecture + 2 hr exercise session in the computer roomEither on Tuesdays 7:30-9:30 a.m. or on Thursdays 7:30-9:30 a.m.",
        "hours_per_week": 4,
        "schedule": [
          {
            "venue": [
              "HCID 2"
            ],
            "day": "Tue",
            "time": "09:45-11:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Molecular models, classical force fields, configuration sampling, molecular dynamics simulation, boundary conditions, electrostatic interactions, analysis of trajectories, free-energy calculations, structure refinement, applications in chemistry and biology. Exercises: hands-on computer exercises for learning progressively how to perform an analyze classical simulations (using the package GROMOS).",
      "learning_objectives": "Introduction to classical (atomistic) computer simulation of (bio)molecular systems, development of skills to carry out and interpret these simulations.",
      "content": "Molecular models, classical force fields, configuration sampling, molecular dynamics simulation, boundary conditions, electrostatic interactions, analysis of trajectories, free-energy calculations, structure refinement, applications in chemistry and biology. Exercises: hands-on computer exercises for learning progressively how to perform an analyze classical simulations (using the package GROMOS).",
      "lecture_notes": "The powerpoint slides of the lectures will be made available weekly on the website in pdf format (on the day preceding each lecture).",
      "literature": "See: \nwww.csms.ethz.ch/education/CSBMS",
      "prerequisites": "Since the exercises on the computer do convey and test essentially different skills than those being conveyed during the lectures and tested at the oral exam, the results of the exercises are taken into account when evaluating the results of the exam (learning component, possible bonus of up to 0.25 points on the exam mark).\nFor more information about the lecture: \nwww.csms.ethz.ch/education/CSBMS"
    },
    "performance_assessment": [
      {
        "ects_credits": 6,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "oral 30 minutes",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Biochemistry - Chemical Biology Master",
        "section": "Electives",
        "type": "W"
      },
      {
        "program": "Biology Master",
        "section": "Elective Compulsory Master Courses",
        "type": "W"
      },
      {
        "program": "Biology Master",
        "section": "Elective Compulsory Master Courses",
        "type": "W"
      },
      {
        "program": "Chemistry Master",
        "section": "Computational Chemistry",
        "type": "W"
      },
      {
        "program": "Chemical and Bioengineering Master",
        "section": "Modeling and Simulation",
        "type": "W"
      },
      {
        "program": "Computational Biology and Bioinformatics Master",
        "section": "Biophysics",
        "type": "W"
      },
      {
        "program": "Doctorate Materials Science",
        "section": "Soft Materials (MaP Doctoral School)",
        "type": "W"
      },
      {
        "program": "Computational Science and Engineering Bachelor",
        "section": "Chemistry",
        "type": "W"
      },
      {
        "program": "Computational Science and Engineering Master",
        "section": "Chemistry",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "052-0527-25L",
    "title": "BUK Re-Detailing",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "German",
    "comment": "Maximum number of students: 20Waiting list until October 6, 2025",
    "lecturers": [],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "Does not take place this semester.",
        "hours_per_week": 2,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Remodeling and reuse is the order of the day. This should be learned (again). In this elective course we construct with what we find. The limited range of materials requires a creative and flexible approach to joining and connecting. In addition to practical examples and lectures, we try to develop theoretical details using reused material.",
      "learning_objectives": "Questions about both application in construction and expression should be answered. Which reused materials and elements are suitable for what and how are they assembled? What new aesthetics can be created and how can they be conveyed? The aim is to prepare the young generation of architects for the constructive use of reused materials. Using theoretical exercises and practical examples, an attitude towards building with existing things and its challenges and opportunities should be developed.",
      "content": "Phase 1: Inputs and lectures give students insight into the topic of circular building. Necessities, opportunities as well as challenges and limitations of the practice are discussed together. We get an overview of processes from the organization of a component platform to non-linear planning within the architectural offices\nPhase 2: In experimental exercises (groups of two to three), details on a scale of 1:5/1:10 are constructed from the collected material. The focus is on the choice of materials for the specific location and on joining the individual elements. It is examined how one can react to a given situation with limited resources. Against the background of a new aesthetic, various forms of representation are also being examined.",
      "prerequisites": "Attending the first event is mandatory. A list will be given out in which people can sign up. The number of participants is limited to 20 students."
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "German",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Architecture Bachelor",
        "section": "Design and Architecture",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "052-0547-25L",
    "title": "Architectural Design III: Do we live a house? Or do we house a life? (J.De Vylder)",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English (lecture), German (exercise), English (exercise)",
    "comment": "Please register (www.mystudies.ethz.ch) only after the internal enrolment for the design classes (see http://www.einschreibung.arch.ethz.ch/design.php).Project grading at semester end is based on the list of enrolments on 30.10.2024 (valuation date) only.This is the ultimate deadline to unsubscribe or enroll for the studio.",
    "lecturers": [
      "J. De Vylder",
      "M. Kaijima",
      "D. Mettler",
      "A. Comte",
      "D. Mesa Molina",
      "A. Meuwly",
      "D. Studer"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "Kurssprachen: Deutsch und Englisch.Keine Lehrveranstaltung am 22. Oktober  (Seminarwoche) und in den beiden letzten Semesterwochen (Schlussabgaben).",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "HILE 3",
              "HILE 4"
            ],
            "day": "Wed",
            "time": "08:00-09:35"
          },
          {
            "venue": [
              "HPVG 5"
            ],
            "day": "16.09.",
            "time": "13:45-15:30"
          },
          {
            "venue": [
              "HILE 4"
            ],
            "day": "05.11.",
            "time": "13:45-15:30"
          },
          {
            "venue": [
              "HILE 4"
            ],
            "day": "26.11.",
            "time": "13:45-15:30"
          }
        ]
      },
      {
        "type": "Exercise",
        "notes": "Kurssprachen: Deutsch und Englisch.Keine Lehrveranstaltung vom 20. bis 24. Oktober (Seminarwoche).",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "HILE 3"
            ],
            "day": "Tue",
            "time": "08:00-09:35"
          }
        ]
      },
      {
        "type": "Exercise",
        "notes": "No course on October 21 and 22, 2025 (seminar week).Teaching languages are English and German.",
        "hours_per_week": 12,
        "schedule": [
          {
            "venue": [
              "HILF 61"
            ],
            "day": "Tue",
            "time": "09:45-17:30"
          },
          {
            "venue": [
              "HILF 61"
            ],
            "day": "Wed",
            "time": "08:00-17:30"
          },
          {
            "venue": [
              "HILE 4"
            ],
            "day": "17.09.",
            "time": "13:45-16:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Do we live a house?\nOr do we house a life?\nHow. Do. We. Live.\nDo we know HOW we live? Do we know enough about\nHOW we live? HOW do things around us shape the way we\nlive? HOW do we live the things around us? WHAT are the\nconditions around us? WHAT makes our habits? HOW do\nhabits change conditions?",
      "learning_objectives": "",
      "content": "Each movement is groupwork. We encourage the groupwork since it is the reality of architecture, it is always about working together – as also living together - but also since at school it is important to set out friendships. At the same time, it distributes work and tasks. The group finds form out of 3. These 3 students become a practice. The practice will be assigned a set of 2x HOW TO and 1x WHAT ABOUT ; that they will freely combine with 1x WHAT IS and 1x WHERE IS. They will work in the form of settings, scenographies and sequences for 3 weeks.\nIn each movement, group members and assigned sets of questions change again. Each movement will be another group constellation of students. We study 3 times a combination of words. All together we will by that collect an endless series of configurations of topics. Each Movement will be the occasion\nto focus on one media to express, represent and talk about architecture. For inspiration, a range of references and methods will be given at the beginning of each Movement.\nM1 media is the axonometric drawing. M2 media is the model.\nM3 media is the perspective.\nWEEK 1 / Circus of questions\nAll the bA-d students will be joining the CIRCUS OF QUESTIONS. 3 questions and drawings will be prepared to be\ndiscussed within the 3 families. Questions will be twisted by other teams in order to extend reflections. The circus of questions takes 3 hours per family, and is spread over 3 half-days with Jan and the teaching team. In the meantime, the other groups work independently and have table reviews with the assistants.\nWhat is ?\nWEEK 2 / Table talks\nIn groups of 3 students + 2 assistants, we will discuss at the table the SEQUENCES, SETTINGS, SCENOGRAPHIES brought by the group of students. We will share references and books and never stop questioning the norms, the spaces, the borders, the challenges and the atmospheres. WEEK 3 / Intermediate review\nIn groups, students will present their SEQUENCES, SETTINGS, SCENOGRAPHIES to the guest critics and their fellow peers. To foster the exchange the diploma students will\ntake part in the discussions. As a sign of common respect we will all be present, listen and engage. The two days of discussions and appreciation will be concluded by an APERO that is organized each time by another FAMILY.\n1x3\nThis last movement is an individual work, shaped by personal\ninterest and attitude developed during the semester. Each\nstudent will select an own combination of words and questions,\nlooking back at M1, 2 and 3. The set will be investigated through\narchitectural DETAILS in form of a series of drawings. This last exercise will result in a cascade of technical drawings developed with the help of the BUK chair.",
      "lecture_notes": "Studio days are Tuesday and Wednesday, with sessions from 10:00 to 13:00 and 14:00 to 17:00. We ask mutual respect and attendance. If you are sick or cannot attend due to medical reasons, please inform us at \nbaucj@ethz.ch\n. On all our reviews, we show mutual RESPECT by being present to each other's DISSCUSIONS, aiming to share different attitudes through these inspiring MOMENTS.",
      "prerequisites": "Construction III and IV\n“Construction III and IV” introduces students to the multiple meanings of construction – from design methods to attitudes of architects – encouraging them to find their own approach to design and construction.\nThe series is taught by four professorships in blocks of five consecutive lectures. At the end of each semester’s lecture series, students are required to submit their learnings and reflections in the form of drawings, diagrams and notes, expressing the lecture's structure and content in the A5 sketchbook - exhibition format - provided at the beginning of the semester. The submission will contribute 10% to the overall grading of the design studio."
    },
    "performance_assessment": [
      {
        "ects_credits": 14,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "additional_info": "The lecture “Construction III” (052-0505-00 V), as well as the exercises “Construction BUK III” (052-0505-00 U), are components of the performance assessment and represent an obligation to fulfil. If they are not completed, participation in the final critique of “Architectural Design III” is not possible. In this case, the learning unit must be retaken. When repeating the design course, the learning units do not have to be completed again, provided they were passed. \nThe lecture “Construction III” is recorded as a continuous performance review in a sketchbook that is handed out at the beginning of the lecture series. The sketchbook is an independent learning element with which the students process what has been presented in the form of sketches, notes and diagrams. At the end of the semester the sketchbooks will be part of a collective exhibition. The assessment is then carried out by the respective design studios and counts for 10% of the overall grade of the design course. The following criteria will be taken into account in the assessment: completeness and punctuality of the submission, understanding and representation of the content presented in the lectures, ability to interpret and more comprehensively acquire the concepts, quality of the representations and descriptions.\nFor the exercises in “Construction BUK III”, the minimum requirement is 6 passed exercises.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Architecture Bachelor",
        "section": "Architectural Design (3. Semester)",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "851-0826-06L",
    "title": "Italian B2-C1: Outside the Classroom",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "Italian",
    "comment": "No enrolment to this course at ETH Zurich. Book the corresponding course directly at \"Language Center of UZH and ETH Zürich\".Course fees: https://www.sprachenzentrum.uzh.ch/en/Sprachkurse/Kursgebuehren1.htmlRegistration dates: https://www.sprachenzentrum.uzh.ch/en/Sprachkurse.html",
    "lecturers": [],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "Does not take place this semester.**Kurs vom Sprachenzentrum der UZH und der ETH Zürich**",
        "hours_per_week": 2,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "This course allows participants to practice Italian in a real-life situation: At the Zurich art museum (Kunsthaus), participants look at art works while listening to an Italian audio guide; they then discuss the art. The course alternates between seven museum visits and seven in-class lessons. At home, participants study their chosen art works in more depth and prepare oral and written summaries.",
      "learning_objectives": "The course uses art as a means for participants to practice all four language skills: Reading, writing, speaking, and listening. \nFurther activities enable participants to enhance vocabulary and grammar learning. Participants receive written feedback on their written work, and recurring errors are discussed in class."
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "graded semester performance",
        "language_of_examination": "Italian",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "additional_info": "Anmeldemodalitäten, Datum und Ort dieser Leistungskontrolle wird ausschliesslich vom Sprachenzentrum UZH/ETH festgelegt.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Science in Perspective",
        "section": "Language Courses of the UZH and ETH Zurich",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "651-4257-00L",
    "title": "Advanced Technologies and Methods in Active Remote Sensing (University of Zurich)",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "No enrolment to this course at ETH Zurich. Book the corresponding module directly at UZH as an incoming student.UZH Module Code: GEO443Prerequisite: Remote Sensing Methods (UZH Module Code: GEO0371)Mind the enrolment deadlines at UZH:https://www.uzh.ch/cmsssl/en/studies/application/deadlines.html",
    "lecturers": [],
    "classes": [
      {
        "type": "Lecture",
        "notes": "**Course at University of Zurich**",
        "hours_per_week": 2,
        "schedule": []
      },
      {
        "type": "Exercise",
        "notes": "**Course at University of Zurich**",
        "hours_per_week": 2,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "This module introduces advanced remote sensing methods and techniques to interpret and analyse RADAR and LiDAR data. The variety of topics covered in this module begin with image focussing, move through geometric and radiometric data processing, as well as interferometric and polarimetric evaluations.",
      "learning_objectives": "The aim of the module is to give students a thorough understanding of the concepts, principles and processing of SAR and LiDAR data. Students will be able to carry out typical workflows in data processing and product generation. They will also be able to assess the quality of data products and understand the nature of errors that can affect the datasets. Students will acquire both theoretical and practical knowledge and understanding of aerial and satellite SAR imagery and LiDAR point cloud data. They will be able to derive solutions to problems presented and will have an understanding of applications including associated limitations.",
      "content": "The module provides students with the skills to use state of the art software tools (e.g. SNAP, Matlab) to process data sets and develop new tools within existing frameworks. Examples of SAR applications treated include glacier and volcano monitoring, as well as height estimation using interferometry. Laser scanning exercises are focused on understanding LiDAR intensity, terrain model creation and their respective uncertainties and terrestrial laser scanning methods and applications. The module is composed of the lecture GEO 443.1, which teaches the underlying principles, and the exercise GEO443.2, which conveys important methods and skills of data processing and analysis."
    },
    "performance_assessment": [
      {
        "ects_credits": 6,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "additional_info": "Anmeldemodalitäten, Datum und Ort dieser Leistungskontrolle werden ausschliesslich von der UZH festgelegt.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Earth Sciences Master",
        "section": "Remote Sensing: Courses of Choice",
        "type": "W"
      },
      {
        "program": "Space Systems Master",
        "section": "Deep Track Earth Observation",
        "type": "W+"
      }
    ]
  },
  {
    "course_id": "535-0310-00L",
    "title": "Glycobiology in Drug Development",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "V. I. Otto"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "",
        "hours_per_week": 1,
        "schedule": [
          {
            "venue": [
              "HITF 31.2"
            ],
            "day": "Wed/1",
            "time": "13:45-15:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Protein-based drugs constitute around 25% of new approvals and most of them are glycoproteins. Using selected examples of prominent glycoprotein drugs, the course aims at providing insight into glycosylation-activity relationships and into biotechnological production and analytics.",
      "learning_objectives": "Students gain basic knowledge in \"pharmaceutical glycobiology\". This implies knowing and understanding:\n- major mechanisms underlying the roles of glycosylation for the biological/therapeutic actions of glycoproteins (glycosylation-function relationships) using prominent examples of glycoprotein drugs. \n- the major types of protein-linked glycans and the biosynthetic pathways for their formation\n- how glycoprotein drugs are produced (including the most important expression systems used), glycoengineered and analysed (quality control).  \nStudents are able to apply this knowledge in solving simple problems in glycoprotein drug development (on paper). \nStudents gain the ability to reflect on roles of glycosylation in various biological contexts.",
      "content": "lecture plan:\n1. Glycans - information carriers in biology and pharmacotherapy\n2. Glucocerebrosidase and the biosynthesis of N-glycans\n3. Improving the therapeutic profile of monoclonal antibodies by glycoengineering\n4. Mucin-type O-glycans and sialylation as gCQA of glycoprotein hormone drugs\n5. gCQA analysis of glycoprotein hormone drugs (sialylated glycoproteins)\n6. EPO \"the same but different\"",
      "lecture_notes": "The slides used for the lectures will be provided online",
      "literature": "- Essentials of Glycobiology 4th edition, A. Varki, R.D. Cummings et al., Cold Spring Harbor Laboratory Press, New York 2022.\n- recent publications as cited/proposed on the lecture slides",
      "prerequisites": "Requirements: Basic knowledge in immunology, molecular biology, protein and carbohydrate chemistry, analytical techniques. Basic knowledge in pharmacology."
    },
    "performance_assessment": [
      {
        "ects_credits": 1,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition possible without re-enrolling for the course unit.",
        "additional_info": "A statement or question regarding the main topics of the course needs to be discussed / answered in the form of an essay (700-1000 words written in English, German, French or Italian). Sources other than the lecture slides used (including chatGPT) need to be referenced. The assay will be reviewed and graded. \nAt a later time point to be agreed upon by lecturer and students, the essays and their contents will be discussed.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Human Medicine Bachelor",
        "section": "Compensatory Courses",
        "type": "W"
      },
      {
        "program": "Human Medicine Bachelor",
        "section": "Compensatory Courses",
        "type": "W"
      },
      {
        "program": "Pharmaceutical Sciences Master",
        "section": "Electives I",
        "type": "W"
      },
      {
        "program": "Pharmaceutical Sciences Bachelor",
        "section": "Electives",
        "type": "W"
      },
      {
        "program": "Pharmaceutical Sciences Bachelor",
        "section": "Compensatory Courses",
        "type": "W"
      },
      {
        "program": "Pharmacy Master",
        "section": "Electives",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "751-4107-AAL",
    "title": "Introduction to Crop and Forage Production",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "Enrolment ONLY for MSc students with a decree declaring this course unit as an additional admission requirement.Any other students (e.g. incoming exchange students, doctoral students) CANNOT enrol for this course unit.",
    "lecturers": [
      "A. Walter",
      "N. Buchmann"
    ],
    "classes": [
      {
        "type": "Revision course / private study",
        "notes": "Self-study course offered once a year in the fall semester. Two meetings with lecturers recommended (to be arranged during the course introduction).Introduction to course on 19. Sept. 2025, 10:00-10:30 am, LFW C 54.1.",
        "hours_per_week": 60,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "This course provides an introduction into crop and forage sciences - with a focus on sustainable management methods in Switzerland and Europe.",
      "learning_objectives": "The students know the basic processes and management methods of arable and forage production in Switzerland and Central Europe. They know the most relevant arable crops. Students can assess the influence of environmental factors and management not only on individual plants, but also on meadow and pasture plant communities and on their yields. They understand the relevance of crop rotation measures and can make recommendations for the establishment of land management methods. The students are familiar with sustainable, climate-friendly and biodiversity-conserving or biodiversity-enhancing management measures and understand the value of species-rich vegetation for the provision of ecosystem services.",
      "content": "The lecture is divided into two parts, i.e., Arable Crop and Forage Production, supervised by different lecturers.\nThe part 'Arable Crop Production' deals with the most relevant arable crops and with basic steps of arable field management such as soil tillage, sowing and plant protection. Effects on soil structure, different tillage measures for different crops as well as differences in the intensity of intervention in comparison of conventional and soil-conserving tillage (e.g. no-till) are explained. The most important differences between conventional, integrated and organic production are addressed. Special emphasis is placed on the establishment of crop rotations taking into account the farm context. \nIn the part 'Forage Production', important plant functional groups and representative plant species as well as different types of grassland systems, i.e., most important mixtures as well as natural plant communities in Central Europe are presented (sward assessment). Based on the ecophysiology of individual plants, the reactions of plant stands to changing environmental conditions are elaborated. Different types of management are presented (e.g. fertilisation, grazing, cutting) and their effects on stand composition and yields are discussed. Feedback mechanisms between environment and grassland systems are addressed. The role of biodiversity is addressed.",
      "lecture_notes": "Available on moodle"
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "additional_info": "Oral exam of 30 min (appointment to be determined with the lecturers)",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Agricultural Sciences Master",
        "section": "Course Units for Additional Admission Requirements",
        "type": "E-"
      }
    ]
  },
  {
    "course_id": "529-0613-01L",
    "title": "Process Simulation and Flowsheeting",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "G. Guillén Gosálbez"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "The module combines theory-based lectures (Mondays) with practical lectures based on Aspen (Wednesdays).",
        "hours_per_week": 3,
        "schedule": [
          {
            "venue": [
              "HCIJ 7"
            ],
            "day": "Mon",
            "time": "09:45-12:30"
          },
          {
            "venue": [
              "HCIG 174"
            ],
            "day": "Wed",
            "time": "13:45-17:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "This course encompasses the theoretical principles of chemical process simulation and optimization, as well as its practical application in process analysis. The techniques for simulating stationary and dynamic processes are presented, and illustrated with case studies. Commercial software packages (Aspen) are introduced for solving process flowsheeting and optimization problems.",
      "learning_objectives": "This course aims to develop the competency of chemical engineers in process flowsheeting, process simulation and process optimization. Specifically, students will develop the following skills:\n- Deep understanding of chemical engineering fundamentals: the acquisition of new concepts and the application of previous knowledge in the area of chemical process systems and their mechanisms are crucial to intelligently simulate and evaluate processes. \n- Modeling of general chemical processes and systems: students should be able to identify the boundaries of the system to be studied and develop the set of relevant mathematical relations, which describe the process behavior.\n- Mathematical reasoning and computational skills: the familiarization with mathematical algorithms and computational tools is essential to be capable of achieving rapid and reliable solutions to simulation and optimization problems. Hence, students will learn the mathematical principles necessary for process simulation and optimization, as well as the structure and application of process simulation software. Thus, they will be able to develop criteria to correctly use commercial software packages and critically evaluate their results.\n- Process optimization: the students will learn how to formulate optimization problems in mathematical terms, the main type of optimization problems that exist (i.e., LP, NLP, MILP and MINLP) and the fundamentals of the optimization algorithms implemented in commercial solvers.",
      "content": "Overview of process simulation and flowsheeting:\n- Definition and fundamentals\n- Fields of application \n- Case studies \nProcess simulation:\n- Modeling strategies of process systems\n- Mass and energy balances and degrees of freedom of process units and process systems\nProcess flowsheeting:\n- Flowsheet partitioning and tearing  \n- Solution methods for process flowsheeting\n- Simultaneous methods \n- Sequential methods\nProcess optimization and analysis:\n- Classification of optimization problems\n- Linear programming, LP\n- Non-linear programming, NLP\n- Mixed-integer linear programming, MILP\n- Mixed-integer nonlinear programming, MINLP\nCommercial software for simulation (Aspen Plus):\n- Thermodynamic property methods\n- Reaction and reactors\n- Separation / columns\n- Convergence, optimisation & debugging",
      "literature": "An exemplary literature list is provided below:\n- Biegler, L.T., Grossmann, I.E., Westerberg, A.W. Systematic methods of chemical process design,\nPrentice Hall International PTR (1997).\n- Douglas, J.M. Conceptual design of chemical processes, McGraw-Hill (1988).\n- Edgar, T. F., Himmelblau, D. M. Optimization of chemical process, Mcgraw Hill Chemical Engineering\nSeries (2001).\n- Haydary, J. Chemical Process Design and Simulation, Wiley (2019).\n- Seider, W.D., Seader, J.D., Lwin, D.R., Widagdo, S. Product and process design principles: synthesis,\nanalysis, and evaluation, John Wiley & Sons, Inc. (2010).\n- Sinnot, R.K., Towler, G. Chemical Engineering Design, Butterworth-Heinemann (2009).\n- Smith, R. Chemical process design and integration, Wiley (2005).\n- Turton, R., A. Shaeiwitz, Bhattacharyya, D., Whiting, W. Synthesis and Design of Chemical\nProcesses, Prentice Hall (2013).",
      "prerequisites": "A basic understanding of material and energy balances, thermodynamic property methods and typical unit operations (e.g., reactors, flash separations, distillation/absorption columns etc.) is required."
    },
    "performance_assessment": [
      {
        "ects_credits": 6,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "written 180 minutes",
        "additional_info": "The compulsory continuous performance assessment is based on a set of exercises that represent 30% of the total mark. The compulsory continuous performance assessment task needs not to be passed on its own. The module is passed with 4 out of 6 points (i.e., 60 out of 100), where the total mark comes from the exam (70%) and the coursework (30%).",
        "exam_aid": "All learning material (books, lecture notes, personal notes etc.) and calculation means (calculators, scientific calculators, personal laptops etc.) are allowed",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Chemical and Bioengineering Master",
        "section": "Process Design",
        "type": "W+"
      },
      {
        "program": "Chemical and Bioengineering Master",
        "section": "Process Design",
        "type": "W"
      },
      {
        "program": "Energy Science and Technology Master",
        "section": "Energy Flows and Processes",
        "type": "W"
      },
      {
        "program": "Process Engineering Master",
        "section": "Core Courses",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "511-0004-00L",
    "title": "Research Project",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [],
    "classes": [
      {
        "type": "Independent project",
        "notes": "",
        "hours_per_week": 550,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Research project familiarises students with scientific procedures and operational methodologies through supervised participation in current research work. The research group is chosen by the student.",
      "learning_objectives": "Students get acquainted with scientific working methods and deepen their knowledge in a particular research area.",
      "prerequisites": "Prerequisite: Practical Methods in Pharmaceutical Sciences passed"
    },
    "performance_assessment": [
      {
        "ects_credits": 15,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Pharmaceutical Sciences Master",
        "section": "Electives II",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "363-1082-00L",
    "title": "Enabling Entrepreneurship: From Science to Startup",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "Students should provide a brief overview (unto 1 page) of their business ideas that they would like to commercialise through the course. If they do not have an idea, they are required to provide a motivation letter stating why they would like to do this elective. If you are unsure about the readiness of your idea or technology to be converted into a startup, please drop me a line to schedule a call or meeting to discuss.The total number of students will be limited to 50.The students should submit the necessary information until 13 September 2025 and apply to Robin De Cock: Robin.DeCock@uantwerpen.be.",
    "lecturers": [
      "R. De Cock"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "Irregular lecture",
        "hours_per_week": 26,
        "schedule": [
          {
            "venue": [
              "HGF 26.1"
            ],
            "day": "01.10.",
            "time": "14:15-18:00"
          },
          {
            "venue": [
              "ONLI NE"
            ],
            "day": "08.10.",
            "time": "16:00-18:00"
          },
          {
            "venue": [
              "ONLI NE"
            ],
            "day": "15.10.",
            "time": "16:00-18:00"
          },
          {
            "venue": [
              "ONLI NE"
            ],
            "day": "22.10.",
            "time": "16:00-18:00"
          },
          {
            "venue": [
              "ONLI NE"
            ],
            "day": "29.10.",
            "time": "16:00-18:00"
          },
          {
            "venue": [
              "LFWB 3"
            ],
            "day": "05.11.",
            "time": "14:15-18:00"
          },
          {
            "venue": [
              "ONLI NE"
            ],
            "day": "12.11.",
            "time": "16:00-18:00"
          },
          {
            "venue": [
              "ONLI NE"
            ],
            "day": "19.11.",
            "time": "16:00-18:00"
          },
          {
            "venue": [
              "ONLI NE"
            ],
            "day": "03.12.",
            "time": "16:00-18:00"
          },
          {
            "venue": [
              "HGF 26.1"
            ],
            "day": "10.12.",
            "time": "14:15-18:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "This elective is relevant for students who have developed a technology and are keen to evaluate the steps in starting a startup. This is also relevant for students who would like to start a startup but do not have a technology, but are clear on a specific market and the impact they would like to create.",
      "learning_objectives": "Students have technology competence or an idea that they would like to convert into a startup. They are now in the process of evaluating the steps necessary to do so.  In summary:\n1. Students want to become entrepreneurs.\n2. The students can be from business or science & technology.\n3. The course will enable the students to identify the relevance of their technology or idea from the market relevance perspective and thereby create a business case to take it to market.\n4. The students will have exposure to investors and entrepreneurs (with a focus on ETH spin-offs) through the course, to gain insight to commercialise their idea.",
      "content": "The students would cover the following topics, as the build their idea into a business case:\n1. Technology excellence: this assumes that the student has achieved a certain degree of competence in the area of technology that he or she expects to bring to the market\n2. Market need and market relevance: The student would then be expected to identify the possible markets that may find the technology of relevance. Market relevance implies the process of identification of how relevant the market perceives the technology, and whether this can sustain over a longer period of time\n3. IP and IP strategy: Intellectual property, whether in the form of a patent or a trade secret, implies the secret ingredient that enables the student to achieve certain results that competitors are unable to copy. This enables the student (and subsequently the startup) to hold on to the market that they create with customers\n4. Team including future capabilities required: a startup requires multiple people with complementary capabilities. They also need to be motivated while at the same time protecting the interests of the startup\n5. Financials: There is a need of funding to achieve milestones. This includes funding for salaries and running of the company\n6. Investors and funding options: There are multiple funding options for a startup. They all come with different advantages and limitations. It's important for a startup to recognise its needs and find the investors that fit these needs and are best aligned with the vision of the founders\n7. Preparation of business case: The students will finally prepare the business case that can help them to articulate the link of the technology with the market need and its willingness to pay\n8. Legal overview, company forms and shareholders’ agreements (including pitfalls)\nThe seminar includes talks from invited investors, entrepreneurs and legal experts regarding the importance of the various elements being covered in content, workshops and teamwork. There is a particular emphasis on market validation on each step of the journey, to ensure relevance.",
      "lecture_notes": "Since the course will revolve around the ideas of the students, the notes will be for the sole purpose of providing guidance to the students to help convert their technologies or ideas into business cases for the purpose of forming startups. Theoretical subject matter will be kept to a minimum and is not the focus of the course.",
      "literature": "Book\nSethi, A. \"From Science to Startup\"\nISBN 978-3-319-30422-9",
      "prerequisites": "This course is relevant for those students who aspire to become entrepreneurs.  \nStudents applying for this course are requested to submit a 1 page business idea or, in case they don't have a business idea, a brief motivation letter stating why they would like to do this course.\nIf you are unsure about the readiness of your idea or technology to be converted into a startup, please drop me a line to schedule a call or meeting to discuss."
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "additional_info": "The course will help students who want to become entrepreneurs to convert their idea into a business case. The students will be required to prepare a business case for their chosen idea, demonstrating viability for commercialization & will comprise an entrepreneurial pitch (including financials) and an executive summary. The students will be graded on a intermediate entrepreneurial pitch (20%) and the final entrepreneurial pitch (80%) at the end of the course. The formats for the deliverables will be provided to students through the course.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Electrical Engineering and Information Technology Master",
        "section": "Tracks (all): Electives",
        "type": "W"
      },
      {
        "program": "Computer Science Bachelor",
        "section": "Minor Courses",
        "type": "W"
      },
      {
        "program": "Management, Technology and Economics Master",
        "section": "Human and Entrepreneurial Behaviour",
        "type": "W"
      },
      {
        "program": "MAS in Management, Technology, and Economics",
        "section": "Electives, 1. and 3. Semester",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "063-0863-25L",
    "title": "Intersectional Histories: How Architectures Were Also Made",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "Max. number of students: 100Waiting list until September 26, 2025",
    "lecturers": [
      "A. Hultzsch"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "No course on 24.10.2025 (Seminar Week) and in the last two weeks of the semester.",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "HPVG 4"
            ],
            "day": "Fri",
            "time": "09:45-11:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "From a ‘cottage’ in Chile, a ‘tea equipage’ in London, a ‘veranda’ in Mumbai, to a ‘cathedral’ in Strasbourg, this course presents global entanglements of built spaces by tracing architectural actors such as users, critics, patrons, and other makers between, roughly, 1700 and 1900. By combining intersectional history with reception history, we ask: how and by whom were architectures also made?",
      "learning_objectives": "This course encourages students to critically reflect on the relevance and critical importance of historical research for the present and the future. By completing this course, students will: \n- develop an understanding of history as a living practice that shapes our present and future,\n- deepen knowledge about local and global entanglements of buildings and objects,\n- learn about concepts such as intersectional feminism, coloniality and decolonization, \n- become familiar with historiographic methods such as the global microhistory or collaborative reading, \n- improve both analytical and speculative writing skills.",
      "content": "This course introduces students to intersectional history – how accounts of the past are shaped by intersecting privileges and marginalizations – as well as reception history – how the meaning of architecture is and has been shaped also by those who dwell in it and use it. It draws heavily on the research of the ERC-funded group WoWA – Women Writing Architecture. It will focus, as the project, on the 18th and 19th centuries, complicating European histories within colonial contexts, especially linking to Latin America and the Indian subcontinent. However, it will also reach beyond this time frame to bring in a wider context – up to the Renaissance and into the 20th century. \nThrough a set of lectures which are interspersed with exercises over the semester, students will engage with a diverse set of primary sources – texts, objects, sites – to actively re-think and re-read the past of the built environment. Lectures will present both theories and concepts such as agency, intersectional feminism, critical theory, (de- and post-) colonialism and coloniality, as well as showcase global microhistories of texts, objects, and sites that materialise the approach of intersectional histories. We reflect on what constitutes architecture – or architectures – from the perspective of the user, critic, and patron. In several structured exercises, students will analyse an object, site, or text on both a micro and global scale, producing their own global microhistories over the semester.",
      "lecture_notes": "All readings will be available on Moodle.",
      "prerequisites": "This course is intended for students from the 5th semester onwards. Attendance is a key requirement."
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Architecture Master",
        "section": "Field of History and Theory of Architecture",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "853-0046-00L",
    "title": "Social Psychology of Groups",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "German",
    "comment": "",
    "lecturers": [
      "T. Heilmann"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "Permission from lecturers required for all students. \r\n  ",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "IFWA 34"
            ],
            "day": "Tue",
            "time": "10:15-12:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Scientific insights into group dynamics are taught with direct relevance to leadership practice. Students learn through interactive experiments and case studies how social psychological principles influence team effectiveness.",
      "learning_objectives": "You can understand and apply social psychological theories of group dynamics to leadership contexts. You master assessment tools for team diagnosis and can systematically analyze group processes. You are able to lead teams situationally and optimize team effectiveness.",
      "content": "Evidenzbasierte Sozialpsychologie für Führungskräfte: Von Social Identity Theory über Groupthink bis zu Collective Intelligence. Interaktive Experimente (Live-Gruppenbildung, Conformity-Tests, Assessment-Tools) vermitteln wissenschaftliche Erkenntnisse praxisnah. Fallstudien aus organisationalen Kontexten (Teamkonflikte, Krisensituationen, Diversitäts-Herausforderungen) ermöglichen direkten Transfer. Schwerpunkte: Gruppenidentität, Entscheidungspsychologie, Intergruppen-Dynamik, moderne Teamführung (virtuelle Teams, Diversität, Radikalisierungs-Prävention).",
      "literature": "Literatur wird in der ersten Sitzung bekannt gegeben",
      "prerequisites": "Lehrangebot im Studiengang Berufsoffizier"
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "graded semester performance",
        "language_of_examination": "German",
        "repetition": "Repetition possible without re-enrolling for the course unit.",
        "additional_info": "Die deutschen Prüfungsfragen werden den Studierenden auch in französischer und italienischer Sprache zur Verfügung gestellt.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Public Policy Bachelor",
        "section": "Remaining Core Courses of the Bachelor's Programme",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "377-0105-00L",
    "title": "Musculoskeletal System",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "German",
    "comment": "",
    "lecturers": [
      "J. Goldhahn",
      "G. Colacicco",
      "M. Ganter",
      "C. Maake",
      "M. Schieker",
      "M. Steinwachs"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "Findet in der 1. Semesterhälfte statt: 24.09. - 07.11.2025",
        "hours_per_week": 5,
        "schedule": [
          {
            "venue": [
              "GLCE 34.1",
              "GLCE 34.2"
            ],
            "day": "Mon/1",
            "time": "14:15-18:00"
          },
          {
            "venue": [
              "HGD 1.2"
            ],
            "day": "Tue/1",
            "time": "08:15-10:00"
          },
          {
            "venue": [
              "HCIJ 3"
            ],
            "day": "Tue/1",
            "time": "13:45-15:30"
          },
          {
            "venue": [
              "HGD 1.2"
            ],
            "day": "Wed/1",
            "time": "16:15-18:00"
          },
          {
            "venue": [
              "HGD 7.1"
            ],
            "day": "Fri/1",
            "time": "14:15-18:00"
          },
          {
            "venue": [
              "HGE 5"
            ],
            "day": "06.11.",
            "time": "16:15-18:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Structure and function of the human musculoskeletal system including its major disorders (acute and chronic).",
      "learning_objectives": "- The students are able to participate in team discussions with correct technical language in the clinical daily routine.\n- The students are able to describe the function of the musculoskeletal system of healthy people in a physiologically correct way.\n- The students are able to contribute to a therapy plan based on their knowledge of the regenerative capacity of the different tissues in the musculoskeletal system. \n- The students recognize pain as a leading symptom in diagnostics and successful therapy.\n- The students can assign and compare treatment methods for the most common acute and chronic clinical pictures.",
      "content": "The students learn about the structure and function of the musculoskeletal system and important disorders on the basis of exemplary clinical pictures. \nThey also learn:\n- About its tissue types as well as its function and regeneration. \n- Important acute and chronic clinical pictures and their therapeutic principles.\nIn addition, further clinical pictures are presented in the form of seminars."
    },
    "performance_assessment": [
      {
        "ects_credits": 5,
        "assessment_type": "session examination",
        "language_of_examination": "German",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "written 120 minutes",
        "additional_info": "Die Vorlesung wird ergänzt durch Seminare, in  denen Studierende ausgewählte Krankheitsbilder in Vorträgen präsentieren. Für die Vorbereitung, Durchführung und Nachbereitung der Vorträge können Studierende einen Bonus von 0.25 Notenpunkten erhalten, der auf die Schlussnote der Prüfung angerechnet werden kann. Die Maximalnote 6 für die Lerneinheit kann auch erreicht werden, wenn nur die Sessionsprüfung absolviert wird.\nBei einer allfälligen Prüfungsrepetition wird standardmässig die während des Kurses erbrachte Leistung zum Notenbonus übernommen. Wird dies nicht gewünscht muss dies entsprechend dem Hauptdozenten kommuniziert werden. \nDie Vorlesungsteile, die in Englisch gehalten wurden, werden auch auf Englisch geprüft.",
        "exam_aid": "Für Fremdsprachige ist ein allgemeines Wörterbuch (kein medizinisches Wörterbuch) erlaubt. Elektronische Wörterbücher dürfen nicht verwendet werden.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Human Medicine Bachelor",
        "section": "First Year Examination Block 1",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "113-0006-00L",
    "title": "Module 6: Cross-Scale Design",
    "semester": "Autumn Semester 2025",
    "periodicity": "two-yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "Does not take place this semester.",
        "hours_per_week": 30,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "In this module, we explore eight scales of decision-making, of science-based design interventions toward regenerative systems, and how to navigate within and across these scales with their inherent complexities, using a scientific, designerly framework.",
      "learning_objectives": "How can we bring the different data types and forms of inquiry together, with a larger aim to contribute to co-designing regenerative bioregional economies? How do small steps, tiny interventions, and different foci span together in a systemic way? We employ the circular cross-scale spiral model of auto- and sympoietic complexity with its eight scales of governance as a proven framework for navigating across systems types and scales. We practice entering a system and focusing on a specific scale, such as the product, the city, or the landscape scale, and looking at each scale’s circularities (plural), and relating this to all the other scales in continuous zoom-out-zoom-in processes. We allow for an exciting experiment and explore a potential scale 0 in the framework - Quantum physics/mechanics - and what this may mean for DRRS practice as a mental exercise.\nThrough all modules, the course integrates three high-level domains of learning competencies—cognitive (knowledge-based), affective (emotion-based), and psychomotor (action-based). In other words, the course integrates science and engineering with designerly techniques and approaches through systems thinking and sensing, building metacognition as of self- and process-awareness, relating these through embodied practices to place-specific real-world challenges in complex systems, accompanying the learning process with an inner development lens — interconnected with the individual Quest projects of the participants. The rapidly developing applications of AI with positive and potentially critical impacts and side effects are intrinsic part of the learning goals, as is the integration of “warm” data, such as intuition.\nThe learning objective assessment starts with the preceding MOOC and its final multiple-choice quiz. To pass the MOOC, 70 percent of the questions must be answered correctly across all modules. During the CAS, active attendance in the live sessions with experts is required for each module. In addition, the Quest’s progress is monitored continuously in the peer-learning process and through individual discussions with the lecturers. Students are asked to contribute at least once per week during the course to the DRRS virtual community on Mighty Networks with internal-public sharing, commenting, or liking. The final learning and progress assessment step is submitting a Quest delivery, which - through all three DRRS CAS’ - builds the base for the Master design thesis, for those taking the full MAS in Regenerative Systems program.",
      "content": "We employ the above-named spiral framework and work through each of its eight scales in the context of participants’ Quests and relating to the different methodologies we explored.\nFor example, we look at the scales of\n- green chemistry - how are nutrients and carbon equivalent cycles related to the systems we deal with? The green chemistry scale of the DRRS circular cross-scale design framework.\n- raw materials - what regenerative materials can we introduce or substitute within existing material supply chains? The materials scale of the DRRS circular cross-scale design framework.\n- product design - building upon engineering design work from before, we work on the raw material/products and goods scale of the DRRS circular cross-scale design framework.\n- service and experience design - the community, cities, and their services scale of the DRRS circular cross-scale design framework.\n- landscape design - building upon previous GIS work, we work on the landscape and community/city scale of the DRRS circular cross-scale design framework.\n- how does this feed into the (bio)regional scale of the DRRS circular cross-scale design framework?\n- and how such systems become less dependent on global supply chains - the transnational scale of the DRRS circular cross-scale design framework.\n- finally, we explore a potential “scale 0” of this framework, Quantum.",
      "prerequisites": "MOOC#3 Systemic Design is the pathway to this same-named CAS#3 with its nine study modules. To be accepted into this CAS, applicants must have completed MOOC#1 and #2 and started MOOC#3 by the time the CAS starts. The foundational content of the MOOC will be expanded in this CAS by live virtual events with experts from all over the world. After the first couple of virtual live conversations, the course takes a field design trip to an emerging Living Systems Lab in Mallorca. This trip is obligatory. The trip is followed by a series of virtual practices of methods and reflections of these methods in relation to the individual Quests.\nIn CAS#3, there is a specific focus on practicing scientific, designerly, and embodied methods and the challenge-based navigation within these methods and methodologies. The final CAS delivery should demonstrate the scientific base of our work in evidence-based writing with a foundation in the peer-reviewed literature, accompanied by graphical, visual, systems-mapping, and spatial ways of designerly expressions. The deliverable must relate the course content and practices to the student’s Quest. As the main deliverable, students must submit a .pdf document consisting of three main parts: (1) A framing text bracket that motivates, introduces, explains, discusses, and concludes the Quest’s synthesis map and specifically the learnt methods in their critical application to the Quest; (2) a graphical Quest synthesis process map; (3) a personal reflection on the meta-aware learning and self-development process throughout the CAS."
    },
    "performance_assessment": [
      {
        "ects_credits": 1,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition possible without re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "CAS in Regenerative Systems: Systemic Design",
        "section": "Modules",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "751-1060-00L",
    "title": "Introduction to Light Microscopy and Image Processing",
    "semester": "Autumn Semester 2025",
    "periodicity": "two-yearly recurring course",
    "language_of_instruction": "English",
    "comment": "For PhD students.Students of University of Zurich and of Basel have full access, but registration is only valid if registered at: https://www.ethz.ch/services/en/service/courses-continuing-education.htmlChoose ► Plant Sciences ► \"Sustainable Plant Systems\"",
    "lecturers": [],
    "classes": [
      {
        "type": "Practical / laboratory course",
        "notes": "Does not take place this semester.**together with University of Zurich and University of Basel**This block course takes place from [DATUM] at ETH Hönggerberg.",
        "hours_per_week": 1,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "This 3-day course gives a basic introduction into light microscopy. The course offers a combination of theoretical introduction with hands-on sessions teaching the fundamentals of light microscopy including transmission with phase contrast and DIC, wide-field fluorescence, deconvolution and 3D microscopy methods such as confocal imaging, including laser scanning point confocal microscopy and spinn",
      "learning_objectives": "The students learn the concept of resolution, the different ways to create contrast and how to set up a light microscope for transmission and fluorescence imaging. Students also learn how to setup the microscope for confocal imaging,  laser scanning and spinning disk, and how to operate the different acquisition modes to acquire multichannel and 3D/4D (time-lapse) image stacks."
    },
    "performance_assessment": [
      {
        "ects_credits": 1,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Doctorate Environmental Systems Sciences",
        "section": "Graduate Programme in Plant Sciences",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "227-0591-00L",
    "title": "Computer Security",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "A. Hajiabadi"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "",
        "hours_per_week": 3,
        "schedule": [
          {
            "venue": [
              "HGG 26.1"
            ],
            "day": "Thu",
            "time": "16:15-19:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "This course covers the basics of computer security. The goal of this course is to teach students how to identify and exploit security vulnerabilities through hands-on experience and a series of Capture the Flag (CTF) challenges.",
      "learning_objectives": "In this course, students will study preparatory material and then discuss the topics and solve CTF challenges in a flip classroom model.\nSolving security challenges enables the students to build a security mindset and provides fundamental and basic knowledge for a career in cybersecurity. Students will tackle challenges in cryptography, web security, and binary-level exploitation. By the end of the course, they will have gained necessary background and tools to understand cybersecurity threats and apply their knowledge in practice.\nMore specifically, students will focus on three topics:\n1. Cryptography where students learn about basics of cryptographic implementations with foundations on symmetric and asymmetric cryptography\n2. Web and network security where students learn about the vulnerabilities on the internet and how to exploit these vulnerabilities in websites (e.g., SQL injection)\n3. Assembly and binary security where students learn about low-level machine codes and how to exploit them (e.g., disassembly, return-oriented programming, buffer overflow)",
      "literature": "Guides, exercises, and challenges will be released during the course (alongside necessary software like VMs and setup guides).",
      "prerequisites": "1. Familiarity with C programming, assembly, and Linux is required for this course\n2. The course is in English and open to 5th or higher semester students. Passing the Computer Engineering course is a mandatory requirement"
    },
    "performance_assessment": [
      {
        "ects_credits": 4,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "additional_info": "This course uses continuous performance assessment. The final grade is determined by three components:\n1. CTF challenges (40%): held during class sessions.\n2. Exercises (30%): assigned throughout the course.\n3. Oral assessment (30%): conducted at the end of the course, based on the course material and challenges.\nParticipation is mandatory. Students may be absent for up to one class; additional absences require a doctor’s note.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Electrical Engineering and Information Technology Bachelor",
        "section": "Engineering Electives",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "535-0030-00L",
    "title": "Pharmaceutical Immunology II & Therapeutic Proteins",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "Prerequisites: Either 535-0830-00L Pharmaceutical Immunology I or 551-0317-00L Immunology I must have been taken.",
    "lecturers": [
      "C. Halin Winter",
      "D. Neri"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "",
        "hours_per_week": 3,
        "schedule": [
          {
            "venue": [
              "HILE 9"
            ],
            "day": "Mon",
            "time": "09:45-12:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "In this course, various topics related to the development, GMP production and application of therapeutic proteins will be discussed. Furthermore, students will expand their training in pharmaceutical immunology and will be introduced to the basic concepts of pharmaceutical product quality management.",
      "learning_objectives": "Students know and understand: \n- basic mechanisms and regulation of the immune response\n- the pathogenic mechanisms of the most important immune-mediated disorders\n- the concepts of vaccination and cancer immunotherapy\n- the most frequently used expression systems for the production of therapeutic proteins\n- the use of protein engineering tools for modifying different features of therapeutic proteins\n- the mechanism of action of selected therapeutic proteins and their application\n- basic concepts in the GMP production of therapeutic proteins",
      "content": "The course consists of two parts: \nIn the first part, students will complete their training in Pharmaceutical Immunology. This part particularly focuses on the pathogenic mechanisms of immune-mediated diseases, vaccination and cancer immunotherapy. Deepened knowledge of immunology will be relevant for understanding the mechanism of action of many therapeutic proteins, as well as for understanding one major concern related to the use of protein-based drugs, namely, immunogenicity.\nThe second part focuses on topics related to the development and application of therapeutic proteins, such as protein expression, protein engineering, reducing immunogenicity, and GMP production of therapeutic proteins. Furthermore, selected examples of approved therapeutic proteins will be discussed.",
      "lecture_notes": "Handouts to the lectures will be available for downloading under \nhttp://www.pharma.ethz.ch/scripts/index",
      "literature": "- Janeway's ImmunoBiology, by Kenneth Murphy (9th  or 10th Edition)\n- Lecture Handouts\n- Paper References provided in the Scripts\n- EMEA Dossier for Humira",
      "prerequisites": "Prerequisites: Either 535-0830-00L Pharmaceutical Immunology I or 551-0317-00L Immunology I"
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "oral 15 minutes",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Biochemistry - Chemical Biology Master",
        "section": "Electives",
        "type": "W"
      },
      {
        "program": "DAS Preparation for the Swiss Federal Examination in Pharmacy",
        "section": "Compulsory Courses II",
        "type": "W"
      },
      {
        "program": "Pharmaceutical Sciences Master",
        "section": "Core Courses I",
        "type": "O"
      },
      {
        "program": "Pharmacy Master",
        "section": "Core Courses I",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "151-2057-00L",
    "title": "Modeling and Optimization of Energy Systems (EPFL)",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "No enrolment to this course at ETH Zurich. Book the corresponding module directly at EPFL.",
    "lecturers": [],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "**Course at EPFL**",
        "hours_per_week": 4,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The goal of the lecture is to present and apply techniques for the modelling and the thermo-economic optimisation of industrial process and energy systems. The lecture covers the problem statement, the solving methods for the simulation and the single and multi-objective optimisation problems.",
      "learning_objectives": "By the end of the course, the student must be able to:\n- Master the concepts of thermodynamic efficiency, E6\n- Establish the flow diagram of an industrial process and calculate the corresponding energy and mass balance, E22\n- Analyse the energy and exergy efficiency of industrial energy systems, E23\n- Model, design and optimize energy conversion systems and ind ustrial processes, E24\n- Establish the flow diagram of an industrial process and calculate the corresponding energy and mass balance, E20\n- Explain and apply the concepts of thermodynamic efficiency, E6\n- Analyze the energy and exergy efficiency of industrial energy systems, E21\n- Model , design and optimize energy conversion systems and industrial processes, E22",
      "content": "- Concepts of Computer Aided Process System Engineering methods to tackle the problems of energy conversion systems modelling and optimisation. The students will acquire a methodology to state the problem, identify the solving procedure, solve the problem and analyse the results;\n- Definition of the basic system modelling concepts : state variables, energy and mass balances, simulation parameters and equations, degree of freedom analysis, different types of specifications, inequalities, objective functions;\n- Energy systems equipments models;\n- System models : flowsheets, degrees of freedom, sequential or simultaneous solving approach, numerical methods and their implications;\n- Measurement data reconciliation and parameter identification;\n- Calculating systems performances : operating cost, efficiency, environmental impact, investments, thermo-economic and environomic performances;\n- Stating and solving optimization problems : decision variables, objective functions and constraints, solving strategies, numerical methods and their implications;\n- Realization of a case study."
    },
    "performance_assessment": [
      {
        "ects_credits": 4,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition possible without re-enrolling for the course unit.",
        "additional_info": "Registration modalities, date and venue of this performance assessment are specified solely by the EPFL.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Nuclear Engineering Master",
        "section": "1. Semester (EPFL)",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "252-1414-00L",
    "title": "System Security",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "S. Capkun",
      "S. Shinde"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "HGD 1.2"
            ],
            "day": "Mon",
            "time": "10:15-12:00"
          }
        ]
      },
      {
        "type": "Exercise",
        "notes": "The exercises begin in the second week of the semester.",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "HGD 3.2"
            ],
            "day": "Thu",
            "time": "14:15-16:00"
          },
          {
            "venue": [
              "CABG 11"
            ],
            "day": "Thu",
            "time": "16:15-18:00"
          }
        ]
      },
      {
        "type": "Independent project",
        "notes": "",
        "hours_per_week": 2,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The first part of the course covers general security concepts and hardware-based support for security.\nIn the second part, the focus is on system design and methodologies for building secure systems.",
      "learning_objectives": "In this lecture, students learn about the security requirements and capabilities that are expected from modern hardware, operating systems, and other software environments. An overview of available technologies, algorithms and standards is given, with which these requirements can be met.",
      "content": "The first part of the lecture covers hardware-based security concepts. Topics include the concept of physical and software-based side channel attacks on hardware resources, architectural support for security (e.g., memory management and permissions, disk encryption), and trusted execution environments (Intel SGX, ARM TrustZone, AMD SEV, and RISC-​V Keystone).\nIn the second part, the focus is on system design and methodologies for building secure systems. Topics include: common software faults (e.g., buffer overflows, etc.), bug-​detection, writing secure software (design, architecture, QA, testing), compiler-​supported security (e.g., control-​flow integrity), and language-​supported security (e.g., memory safety).\nAlong the lectures, model cases will be elaborated and evaluated in the exercises."
    },
    "performance_assessment": [
      {
        "ects_credits": 7,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is only offered in the session after the course unit. Repetition only possible after re-enrolling.",
        "examination": "written 90 minutes",
        "additional_info": "Grading: 20% exercises and related reports (compulsory continuous performance assessments), 80% final exam.",
        "exam_aid": "Keine",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "CAS in Computer Science",
        "section": "Focus Courses and Electives",
        "type": "W"
      },
      {
        "program": "Cyber Security Master",
        "section": "Core Courses",
        "type": "W"
      },
      {
        "program": "Cyber Security Master",
        "section": "Elective Courses",
        "type": "W"
      },
      {
        "program": "DAS in Cyber Security",
        "section": "Core Courses",
        "type": "O"
      },
      {
        "program": "Data Science Master",
        "section": "Core Electives",
        "type": "W"
      },
      {
        "program": "Electrical Engineering and Information Technology Master",
        "section": "Advanced Core Courses",
        "type": "W"
      },
      {
        "program": "Computer Science Master",
        "section": "Core Courses",
        "type": "W"
      },
      {
        "program": "Computer Science Master",
        "section": "Elective Courses",
        "type": "W"
      },
      {
        "program": "Computer Science Master",
        "section": "Minor in Information Security",
        "type": "W"
      },
      {
        "program": "Computer Science Master",
        "section": "Minor in Systems Software",
        "type": "W"
      },
      {
        "program": "MAS in Cyber Security",
        "section": "Mandatory courses",
        "type": "O"
      },
      {
        "program": "Science, Technology, and Policy Master",
        "section": "Data and Computer Science",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "227-1601-00L",
    "title": "Master's Thesis",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "Admission only if ALL of the following apply: a) bachelor program successfully completed b) acquired (if applicable) all credits from additional requirements for admission to master program c) acquired the minimum number of credits in the ‘core courses’ category d) successfully completed the internship e) successfully completed the semester project Important: - registration in myStudies required - supervisor must be a professor authorized to supervise MEST-theses, see https://master-energy.ethz.ch/people/tutors.html.",
    "lecturers": [],
    "classes": [
      {
        "type": "Diploma thesis",
        "notes": "",
        "hours_per_week": 40,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The master program in Energy Science and Technology culminates in a six months research project which adresses a scientific research questions on one's chosen area of spezialization. The masters thesis is supervised by a program-affiliated faculty member and the topic must be approved in advance by the tutor.",
      "learning_objectives": "see above"
    },
    "performance_assessment": [
      {
        "ects_credits": 30,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Energy Science and Technology Master",
        "section": "Master's Thesis",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "851-0271-00L",
    "title": "Neuroaesthetics - Exploring the Science of Aesthetic Experience",
    "semester": "Autumn Semester 2025",
    "periodicity": "non-recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "E. Cross",
      "I. Bara"
    ],
    "classes": [
      {
        "type": "Seminar",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "CHNE 46"
            ],
            "day": "Wed",
            "time": "12:15-14:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "This seminar introduces students to theory and research, challenges, and opportunities in neuroaesthetics, with a clear emphasis on the interdisciplinary nature of the discipline situated at the intersection of neuroscience, psychology, and art appreciation. Foundational empirical methods and critical perspectives of research approaches in neuroaesthetics are considered.",
      "learning_objectives": "- to familiarize students with concepts, models, methods, brain and behavioral findings related to aesthetic experience. \n- to develop a critical understanding in evaluating the theoretical and empirical findings in neuroaesthetics \n- to integrate the acquired knowledge to critically debate and discuss the conceptual and empirical issues related to the science of aesthetic experience",
      "content": "In this seminar, students will learn about the foundational principles of neuroaesthetics, which explores the cognitive and brain processes involved in aesthetic experience. A key focus will be placed on developing an appreciation of the interdisciplinary methods used in the neuroaesthetics field – ranging from neuroscience, psychology, philosophy, and art history. The seminar is based on the active engagement of students in reading, presenting, and critically discussing selected papers in the field. In a final small-group assignment, students are expected to incorporate and elaborate upon the content covered in the seminar by presenting and discussing a novel research proposal for tackling a timely research question related to aesthetic experience."
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition possible without re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Science in Perspective",
        "section": "D-ARCH",
        "type": "W"
      },
      {
        "program": "Science in Perspective",
        "section": "D-BIOL",
        "type": "W"
      },
      {
        "program": "Science in Perspective",
        "section": "Psychology, Pedagogics",
        "type": "W"
      },
      {
        "program": "Science in Perspective",
        "section": "D-HEST",
        "type": "W"
      },
      {
        "program": "Science in Perspective",
        "section": "D-INFK",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "529-0051-AAL",
    "title": "Analytical Chemistry I",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "Enrolment ONLY for MSc students with a decree declaring this course unit as an additional admission requirement.Any other students (e.g. incoming exchange students, doctoral students) CANNOT enrol for this course unit.The underlying lecture (529-0051-00L) is offered in autumn semester but only in German.",
    "lecturers": [
      "D. Günther",
      "R. Zenobi"
    ],
    "classes": [
      {
        "type": "Revision course / private study",
        "notes": "Self-study course. No presence required.",
        "hours_per_week": 90,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Introduction into the most important spectroscopical methods and their applications to gain structural information.",
      "learning_objectives": "Knowledge about the necessary theoretical background of spectroscopical methods and their practical applications",
      "content": "Application oriented basics of organic and inorganic instrumental analysis and of the empirical employment of structure elucidation methods:\nMass spectrometry: Ionization methods, mass separation, isotope signals, rules of fragmentation, rearrangements.\nNMR spectroscopy: Experimental basics, chemical shift, spin-spin coupling.\nIR spectroscopy: Revisiting topics like harmonic oscillator, normal vibrations, coupled oscillating systems (in accordance to the basics of the related lecture in physical chemistry); sample preparation, acquisition techniques, law of Lambert and Beer, interpretation of IR spectra; Raman spectroscopy.\nUV/VIS spectroscopy: Basics, interpretation of electron spectra. Circular dichroism (CD) und optical rotation dispersion (ORD).\nAtomic absorption, emission, and X-ray fluorescence spectroscopy: Basics, sample preparation.",
      "lecture_notes": "Script will be provided for the production price",
      "literature": "- R. Kellner, J.-M. Mermet, M. Otto, H. M. Widmer (Eds.) Analytical Chemistry, Wiley-VCH, Weinheim, 1998;\n- D. A. Skoog und J. J. Leary, Instrumentelle Analytik, Springer, Heidelberg, 1996;\n- M. Hesse, H. Meier, B. Zeeh, Spektroskopische Methoden in der organischen Chemie, 5. überarbeitete Auflage, Thieme, Stuttgart, 1995\n- E. Pretsch, P. Bühlmann, C. Affolter, M. Badertscher, Spektroskopische Daten zur Strukturaufklärung organischer verbindungen, 4. Auflage, Springer, Berlin/Heidelberg, 2001- \nKläntschi N., Lienemann P., Richner P., Vonmont H: Elementanalytik. Instrumenteller Nachweis und Bestimmung von Elementen und deren Verbindungen. Spektrum Analytik, 1996, Hardcover, 339 S., ISBN 3-86025-134-1.",
      "prerequisites": "Excercises are integrated in the lectures. In addition, attendance in the lecture 529-0289-00 \"Instrumental analysis of organic compounts\" (4th semester) is recommended."
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Chemistry Master",
        "section": "Course Units for Additional Admission Requirements",
        "type": "E-"
      },
      {
        "program": "Chemical and Bioengineering Master",
        "section": "Course Units for Additional Admission Requirements",
        "type": "E-"
      }
    ]
  },
  {
    "course_id": "752-2122-00L",
    "title": "Food and Consumer Behaviour",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "M. Siegrist",
      "F. Michel"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "LFWB 1"
            ],
            "day": "Mon",
            "time": "10:15-12:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "This course focuses on food consumer behavior, consumer's  decision-making processes and consumer's attitudes towards food products.",
      "learning_objectives": "Students will be able...\n- to describe heuristics that influence consumer behavior in the food domain\n- to explain the consumer led food product development\n- to summarise how consumers perceive the environmental impact and the healthiness of foods\n- to assess the cultural, the environmental and and the food policy impact on consumer behavior\n- to explain psychological factors influencing eating behavior"
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "end-of-semester examination",
        "language_of_examination": "English",
        "repetition": "A repetition date will be offered in the first two weeks of the semester immediately consecutive.",
        "examination": "written 90 minutes",
        "exam_aid": "Dictionary",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Agricultural Sciences Master",
        "section": "Safety and Quality in Agri-Food Chain",
        "type": "W"
      },
      {
        "program": "Health Sciences and Technology Master",
        "section": "Module: Nutrition and Health",
        "type": "W"
      },
      {
        "program": "Food Science and Nutrition Master",
        "section": "Optional Subjects",
        "type": "W"
      },
      {
        "program": "Food Science and Nutrition Master",
        "section": "Profile course FST",
        "type": "W+"
      },
      {
        "program": "Food Science and Nutrition Master",
        "section": "Profile courses NH",
        "type": "W+"
      },
      {
        "program": "Food Science and Nutrition Master",
        "section": "Food Sensory Science and Consumer Behaviour",
        "type": "W"
      },
      {
        "program": "Food Science and Nutrition Master",
        "section": "Safety and Quality in Agri-Food Chain",
        "type": "W"
      },
      {
        "program": "MAS in Nutrition and Health",
        "section": "Electives",
        "type": "W"
      },
      {
        "program": "Environmental Sciences Master",
        "section": "Nutrition and Health",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "851-0587-01L",
    "title": "CIS PhD Colloquium",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "No enrolment to this course at ETH Zurich. Book the corresponding module directly at UZH as an incoming student.UZH Module Code: 615G932CMind the enrolment deadlines at UZH:https://www.uzh.ch/cmsssl/en/studies/application/deadlines.html",
    "lecturers": [],
    "classes": [
      {
        "type": "Colloquium",
        "notes": "**together with University of Zurich**Ort: Institut für Politikwissenschaft, Cityport, Affolternstr. 56, Zürich Oerlikon",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "UNIZH ."
            ],
            "day": "Thu",
            "time": "14:00-17:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "In this internal colloquium doctoral students present their work after about 12 months of research.",
      "learning_objectives": "The aim of this colloquium is that the presenters receive feedback on their research at an important stage (a stage at which significant changes of direction, methodology, etc, may still be undertaken) in the PhD process.",
      "content": "Presentation of doctoral  research.",
      "lecture_notes": "Distributed electronically.",
      "literature": "Distributed electronically.",
      "prerequisites": "Dates: See \nhttp://www.cis.ethz.ch/education/index"
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition possible without re-enrolling for the course unit.",
        "additional_info": "This colloquium forms part of the review process for doctoral dissertation proposals (Forschungsplan) in accordance with D-GESS and CIS rules for PhD students.\nRegistration modalities, date and venue of this performance assessment are specified solely by the UZH.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Doctorate Humanities, Social and Political Sciences",
        "section": "Subject Specialisation",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "651-4120-00L",
    "title": "Subject Didactics Geography IV: Mentored Project",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "German",
    "comment": "Prerequisites: successful participation in Geography Didactics of Geography Teaching I, II, III",
    "lecturers": [
      "S. Hesske",
      "J. Rafflenbeul"
    ],
    "classes": [
      {
        "type": "Independent project",
        "notes": "**gemeinsam mit der Universität Zürich**Bitte melden Sie sich bei den Dozierenden zwecks Einführung und Terminplanung.",
        "hours_per_week": 60,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Mentorierte Arbeit mit Bezug zur fachdidaktischen Ausbildung.",
      "learning_objectives": "selbständige, theoriegestützte Auseinandersetzung mit konkreter, praxisbezogener Fragestellung zum Geographieunterricht.",
      "content": "selbständige, mentorierte Arbeit zu einem Thema aus der Fachdidaktik mit direktem Bezug zur Lehrpraxis im Fach Geografie (z.B. zu eigenen Übungslektionen und Praktikum oder zur Unterrichtsforschung).\nDas Thema wird zu Beginn mit der Mentorin/ dem Mentor festgelegt.",
      "literature": "Reinfried, Sibylle & Haubrich, Hartwig (Hrsg.), 2018 (2015). Geographie unterrichten lernen. Die Didaktik der Geographie. Cornelsen-Verlag, Berlin, 448 S., ISBN: 978-3-06-065212-9.",
      "prerequisites": "May be completed together with didactics III at the earliest."
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "graded semester performance",
        "language_of_examination": "German",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Geography Teaching Diploma",
        "section": "Subject Didactics in Geography",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "363-1047-00L",
    "title": "Urban Systems and Transportation",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "M. Köthenbürger",
      "G. Loumeau"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "The lecture takes place online via Zoom (recorded).",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "ONLI NE"
            ],
            "day": "Fri",
            "time": "10:00-12:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "This course is an introduction to urban and regional economics. It focuses on the formation and development of urban systems, and highlight how transport infrastructure investments can affect the location, size and composition of such systems.",
      "learning_objectives": "The main objective of this course is to provide students with some basic tools to analyze the fundamental economic forces at play in urban systems (i.e., agglomeration and congestion forces), and the role of transport networks in shaping the structure of these systems. Why do urban areas grow or decline? How do transport networks affect the location of individuals and firms? Does the location of a firm determine its productivity? Can transport infrastructure investments reduce economic disparities? These are some of the questions that students should be able to answer after having completed the course.",
      "content": "The course is organized in four parts. I start with the key observation that economic activity (both in terms of population density and productivity) is unevenly distributed in space. For instance, the share of the population living in urban centers is increasing globally, from 16% in 1900 and 50% in 2000 to about 68% by the year 2050 (UN, World Economic Prospects, 2014). The goal of the first part is then to understand the economic forces at play behind these trends, looking at the effects within and across urban areas. I will also discuss how natural or man-made geographical characteristics (e.g., rivers, mountains, borders, etc.) affect the development of such urban systems.\nIn the second part, I discuss the planning and pricing of transport networks, moving from simple local models to more complex transport models at a global scale. The key aspects include: the first and second best road pricing, the public provision of transport networks and the demographic effects of transport networks.\nIn the third part, I combine the previous two parts and analyze the interaction between urban systems and transportation. Thereby, the main focus is to understand the economic mechanisms that can lead to a general equilibrium of all actors involved. However, as the study of the historical development of urban systems and transport networks provides interesting insights, I will discuss how their interaction in the past shapes today’s economic geography.\nFinally, I broaden the scope of the course and explore related topics. There will be a particular emphasis on the relation between urban systems and fiscal federalism as well as environmental policies. Both aspects are important determinants of the contemporary developments of urban systems, and as such deserve our attention.\nIn general, this class focuses on the latest research developments in urban and regional economics, though it does not require prior knowledge in this field. It pays particular attention to economic approaches, which are based on theoretical frameworks with strong micro-foundations and allow for precise policy recommendations.",
      "lecture_notes": "Course slides will be made available to students prior to each class.",
      "literature": "Course slides will be made available to students."
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "additional_info": "presentation and project (5-6 pages)",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Civil Engineering Master",
        "section": "Major in Transport Systems",
        "type": "W"
      },
      {
        "program": "Civil Engineering Master",
        "section": "Recommended Electives of Master Programme",
        "type": "W"
      },
      {
        "program": "Management, Technology and Economics Master",
        "section": "Economic Dynamics",
        "type": "W"
      },
      {
        "program": "Spatial Development and Infrastructure Systems Master",
        "section": "Major in Transport Systems and Behaviour",
        "type": "W"
      },
      {
        "program": "Science, Technology, and Policy Master",
        "section": "Urbanization and Planning",
        "type": "W"
      },
      {
        "program": "Science, Technology, and Policy Master",
        "section": "Energy and Mobility",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "651-3521-00L",
    "title": "Tectonics",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "S. Willett"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "NOE 11"
            ],
            "day": "Fri",
            "time": "14:15-16:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Comprehensive understanding of evolution, mechanics, and rheology of divergent, convergent and wrenching tectonic systems from the lithospheric scale to local shallow crustal and outcrop-scales. Evaluation of plate tectonic and other orogenic processes through the study of reference examples of taken in Alps-Himalaya orogenic system.",
      "learning_objectives": "Comprehensive understanding of evolution, mechanics, and rheology of divergent, convergent and wrenching tectonic systems from the lithospheric scale to local shallow crustal and outcrop-scales. \nAssessment of mechanisms responsible for plate movements (the Earth as a heat transfer machine, dynamics of earth mantle, plate driving forces) and subsequent large-scale structures (oceanic basins and cycle of the oceanic lithosphere, convergence and mountain systems and continental growth, etc) through theoretical and experimental information.\nEvaluation of plate tectonic and other orogenic processes through the study of reference examples of taken in Alps-Himalaya orogenic system.",
      "content": "Plate tectonic frame work: earth cooling and mantle-plate interaction, three kinds of plate boundaries and their roles and characteristics, cycle of oceanic lithosphere, longlifety and growth of continents, supercontinents.\nRheology of layered lithosphere and upper mantle.\nObduction systems\nCollisions systems\nExtensional systems\nBasin evolution\nPassive and active continental margin evolution",
      "literature": "Condie, K. C. 1997. Plate tectonics and crustal evolution. Butterworth-Heinemann, Oxford.\nCox, A. & Hart, R. B. 1986. Plate tectonics. How it works. Blackwell Scientific Publications, Oxford.\nDewey, J. F. 1977. Suture zone complexities: A review. Tectonophysics 40, 53-67.\nDewey, J. F., Pitman III, W. C., Ryan, W. B. F. & Bonin, J. 1973. Plate tectonics and the evolution of the Alpine system. Geological Society of America Bulletin 84, 3137-3180.\nKearey, P. & Vine, F. J. 1990. Global tectonics. Blackwell Scientific Publications, Oxford.\nPark, R. G. 1993. Geological structures and moving plates. Chapman & Hall, Glasgow.\nTurcotte, D. L. & Schubert, G. 2002. Geodynamics. Cambridge University Press, Cambridge.\nWindley, B. F. 1995. The evolving continents. John Wiley & Sons Ltd, Chichester."
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Earth and Climate Sciences Bachelor",
        "section": "Advanced",
        "type": "W+"
      },
      {
        "program": "Earth Sciences Master",
        "section": "Lithosphere Structure and Tectonics",
        "type": "W"
      },
      {
        "program": "Earth Sciences Master",
        "section": "Structural Geology: Courses of Choice",
        "type": "W"
      },
      {
        "program": "Space Systems Master",
        "section": "Deep Track Planetary Science",
        "type": "W+"
      }
    ]
  },
  {
    "course_id": "364-0553-00L",
    "title": "Innovation in Digital Space",
    "semester": "Autumn Semester 2025",
    "periodicity": "two-yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "G. von Krogh"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "Does not take place this semester.Permission from lecturers required for all students. \r\n  Block course",
        "hours_per_week": 16,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The purpose of this course is to review and discuss issues in current theory and research relevant to innovation in the digital space.",
      "learning_objectives": "Through in-depth analysis of published work, doctoral candidates will identify and appraise theoretical and empirical studies, formulate research questions, and improve the positioning of their own research within the academic debate.",
      "content": "The Internet has a twofold impact on the way individuals and firms innovate. First, firms increasingly draw on digital technology to access and capture innovation-relevant knowledge in their environment. Second, individuals, firms, and other organizations extensively utilize the Internet to create, diffuse, and commercialize new digital products and services. During the past decade, theory and research on innovation in the digital space has flourished and generated extensive insights of relevance to both academia and management practice. This has brought us better understanding of working models, and some fundamental reasons for innovation success or failure. A host of new models and research designs have been created to explore the innovation in the digital space, but these have also brought out many open research questions. We will review some of the existing streams of work, and in the process explore a new research agenda. \nFormat:\nThe course is organized in one block of 2 days. The course is a combination of pre-readings, presentations by faculty and students, and discussions. The students prepare presentations of papers in order to facilitate analysis and discussion.",
      "literature": "Open source (OS) as innovation model\n1. Lerner, J., & Tirole, J. (2002). Some Simple Economics of Open Source. JIE\n2. von Hippel, E., & Von Krogh, G. (2003). Open source software and the 'private-collective' innovation model: Issues for Organization Science. OrgSci\n3. von Krogh, G., Spaeth, S., & Lakhani, K. R. (2003). Community, joining, and specialization in open source software innovation: A case study. RP\n4. Lakhani, K., & Eric, A. (2000). von Hippel (2003),“How open source software works:\" free\" user-to-user assistance”. RP\n5. Yoo, Y., Boland, R. J., Lyytinen, K., & Majchrzak, A. (2012). Organizing for Innovation in the Digitized World. OrgSci\nCoordination in OS communities\n6. Faraj, S., von Krogh, G., Monteiro, E., & Lakhani, K. (2016). Special Section Introduction - Online Community as Space for Knowledge Flows. ISR\n7. Lindberg, A., Berente, N., Gaskin, J., & Lyytinen, K. (2016). Coordinating interdependencies in online communities: A study of an open source software project. ISR\n8. Shaikh, M., & Vaast, E. (2016). Folding and unfolding: Balancing openness and transparency in open source communities. ISR\n9. Ren, Y., Chen, J., & Riedl, J. (2016). The impact and evolution of group diversity in online open collaboration. ManSci\n10. Jiang, Q., Tan, C. H., Sia, C. L., & Wei, K. K. (2019). Followership in an Open-Source Software Project and its Significance in Code Reuse. MISQ\n11. Medappa, P. K., & Srivastava, S. C. (2019). Does Superposition Influence the Success of FLOSS Projects? An Examination of Open-Source Software Development by Organizations and Individuals. ISR\n12. Howison, J., & Crowston, K. (2014). Collaboration through open superposition: A theory of the open source way. MISQ\nGovernance & Leadership \n13. He. F., Puranam P., Shrestha Y. R., & von Krogh, G. (2020) Resolving governance disputes in communities: A study of software license decisions. SMJ\n14. Gulati, R., Puranam, P., & Tushman, M. (2012). Meta-organization design: Rethinking design in interorganizational and community contexts. SMJ\n15. Fjeldstad, Ø. D., Snow, C. C., Miles, R. E., & Lettl, C. (2012). The architecture of collaboration. SMJ\n16. Klapper, H., & Reitzig, M. (2018). On the effects of authority on peer motivation: L earning from Wikipedia. SMJ\n17. Johnson, S. L., Safadi, H., & Faraj, S. (2015). The emergence of online community leadership. ISR\n18. Safadi, H., Johnson, S. L., & Faraj, S. (2020). Core-Periphery Tension in Online Innovation Communities. OrgSci\n19. Germonprez, M., Kendall, J. E., Kendall, K. E., Mathiassen, L., Young, B., & Warner, B. (2017). A theory of responsive design: A field study of corporate engagement with open source communities. ISR\n20. Greenstein, S., & Zhu, F. (2016). Open content, Linus’ law, and neutral point of view. ISR\n21. Nagle, F. (2019) Open source software and firm productivity. ManSci\n22. Fitzgerald, B. (2006). The transformation of open source software. MISQ\nMotivation to collaborate\n23. Spaeth, S., von Krogh, G., & He, F. (2015). Perceived Firm Attributes and Intrinsic Motivation in Sponsored Open Source Software Projects. ISR.\n24. Shah, S. K. (2006). Motivation, governance, and the viability of hybrid forms in open source software development. ManSci\n25. von Krogh, G., Haefliger, S., Spaeth, S., & Wallin, M. W. (2012). Carrots and rainbows: Motivation and social practice in open source software development. MISQ\n26. Hwang, E. H., Singh, P. V., & Argote, L. (2015). Knowledge sharing in online communities: Learning to cross geographic and hierarchical boundaries. OrgSci\n27. Bapna, S., Benner, M. J., & Qiu, L. (2019). Nurturing Online Communities: An Empirical Investigation. MISQ\n28. Goes, P. B., Guo, C., & Lin, M. (2016). Do incentive hierarchies induce user effort? Evidence from an online knowledge exchange. ISR"
    },
    "performance_assessment": [
      {
        "ects_credits": 1,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Doctorate Management, Technology, and Economics",
        "section": "Management",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "135-0101-00L",
    "title": "Module 2: Space as a Complex Situation",
    "semester": "Autumn Semester 2025",
    "periodicity": "two-yearly recurring course",
    "language_of_instruction": "German",
    "comment": "",
    "lecturers": [
      "M. Nollert",
      "A. Rupf"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "Hinweis: Unterrichtszeiten 08:45-12:15 Uhr.",
        "hours_per_week": 15,
        "schedule": [
          {
            "venue": [
              "HILH 35.1"
            ],
            "day": "27.10. - 31.10.",
            "time": "08:50-12:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Introduction to the nature and pitfalls of complex situations, methods and processes for treatment. Introduction to spatial planning and planning actions in multi-actor networks. (Perceiving, acting and arguing in complex situations).",
      "learning_objectives": ""
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "German",
        "repetition": "Repetition possible without re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "CAS in Spatial Development and Planning Practice",
        "section": "Spatial Development and Planning Practice",
        "type": "O"
      },
      {
        "program": "MAS in Spatial Development",
        "section": "Spatial Development and Planning Practice",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "557-0449-00L",
    "title": "Athletics III",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "German",
    "comment": "Prerequisites: Athletics I (557-0444-01L) attended.Compulsory for Teaching Diploma sports. 80% active participation required..",
    "lecturers": [
      "C. Brozzo",
      "D. Baumgartner"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "Diese Lehrveranstaltung findet nur in der ersten Hälfte des Semesters statt. Die Veranstaltung findet immer in der HSA Fluntern statt. Bei schlechter Witterung in der Halle, ansonsten draussen (Rundbahn).80 % aktive Mitarbeit wird vorausgesetzt.Der Besuch von Leichtathletik II und III ist im gleichen Semester möglich.",
        "hours_per_week": 1,
        "schedule": [
          {
            "venue": [
              "HSA- FLUNT"
            ],
            "day": "Fri/1",
            "time": "15:15-17:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "athletic skills will be trained in the course.\nthe course doesn’t include skill assessments or athletic performance tests.",
      "learning_objectives": "Skills emprovement in the athletic performance\nIt is not required to have passed the level I course, but it is mandatory to have attended it previously.",
      "content": "- Training in various track and field disciplines\n- Groupchallenges",
      "lecture_notes": "no skript",
      "literature": "J+S Manual Kinder und Jugendliche\nJ+S Broschüre Turnen - Leichtathletik",
      "prerequisites": "It is not required to have passed the level I course, but it is mandatory to have attended it previously."
    },
    "performance_assessment": [
      {
        "ects_credits": 1,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "German",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "additional_info": "Es muss an Übungen von mindestens 6 verschiedenen Disziplinen teilgenommen werden. \n«Nicht bestanden» bei weniger als 80% aktiver Mitarbeit und/oder ungenügenden Kompetenznachweisen.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Sport Teaching Diploma",
        "section": "In-depth Education",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "389-1100-00L",
    "title": "Professional Development in Bioethics",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "O. Buchholz",
      "K. Ormond"
    ],
    "classes": [
      {
        "type": "Seminar",
        "notes": "The course will take place  in the facilities of the Health Ethics & Policy Lab, seminar dates will be listed in the moodle-course.",
        "hours_per_week": 1,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "This course for doctoral students in the Health Ethics & Policy Lab covers academia essentials and troubleshooting. It is an interactive seminar focusing on time management, productive writing, feedback handling, and tools like LaTeX. Students learn from and support each other and gain an overview and resources for future academic challenges.",
      "learning_objectives": "The course will equip attendees with an overview of the necessary soft skills to successfully complete their doctoral degree, to identify and navigate relevant resources, and start their academic career. The specific learning objectives of the course are:\n- Become aware of the different components of academic work (research, teaching, service, …) and be able to adequately prioritize them in light of personal or external expectations.\n- Reflect on challenges encountered during the doctoral degree that are not (purely) related to research topics or methods and identify their sources.\n- Identify strategies for dealing with the aforementioned challenges and evaluate their characteristics.\n- Assess the extent to which different general-purpose tools might be able to improve one’s workflows and become familiar with their basic functionalities to allow for the further independent use of the tools.",
      "content": "The course starts with an introductory session that provides an overview of the course’s structure and content. This session is also meant as a first opportunity for students to communicate their specific interests and needs such that they can be incorporated in the schedule.\nThe course continues with a session covering the essentials of getting started in academia, which amounts to an overview of things to keep in mind and resources for general advice but also includes social aspects such as developing a proper working relationship with one’s supervisor.\nAfterwards, the course delves into concrete topics that the students will frequently encounter in their day-to-day academic work such as time management, applying and going to conferences as well as writing and publishing.\nSubsequently, the course comprises several sessions focusing on general-purpose tools that are useful irrespective of disciplines or research questions and, thus, likely to improve the students’ workflows. More specifically, a first session will deal with reference managers, a second one with the word processing software LaTeX, and a third one with the data analysis software Python.\nThe course concludes with a session dealing with aspects that are relevant during but also beyond the doctoral degree, as students start their careers in academia, in particular the specificities of the academic job market and of academic job applications."
    },
    "performance_assessment": [
      {
        "ects_credits": 1,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "additional_info": "Participation in class exercises (pass/fail).",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Doctorate Health Sciences and Technology",
        "section": "Transferable Skills",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "052-0651-00L",
    "title": "Building Process I",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "German",
    "comment": "",
    "lecturers": [
      "S. Menz"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "Keine Lehrveranstaltung vom 20. bis 24. Oktober (Seminarwoche) sowie in den letzten beiden Semesterwochen (vor Schlussabgaben).",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "HILE 1"
            ],
            "day": "Thu",
            "time": "11:45-13:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The building process is the main focus of this lecture series. The process is understood as a sequence of criteria in time.\nTopics: Acquisition and building law, building economics and sustainability strategies, participants and their services, construction and planning organization.\nProcess thinking and a look at neighbouring countries complement the series.",
      "learning_objectives": "Alongside a discussion of the basic principles, trends and terminologies, a closer look will be taken at each topic using case studies that investigate current structures as well as those relevant in terms of architecture and urban design. Active participation as well as interdisciplinary and process-oriented thinking on the part of students is a prerequisite.",
      "content": "The building process is the main focus of this lecture series. The process is understood as a sequence of criteria in time.\nTopics: Acquisition and building law, building economics and sustainability strategies, participants and their services, construction and planning organization.\nProcess thinking and a look at neighbouring countries complement the series.\nAlongside a discussion of the basic principles, trends and terminologies, a closer look will be taken at each topic using case studies that investigate current structures as well as those relevant in terms of architecture and urban design. Active participation as well as interdisciplinary and process-oriented thinking on the part of students is a prerequisite.",
      "lecture_notes": "https://map.arch.ethz.ch",
      "prerequisites": "The ungraded semester performance consists of participation in the two exercises and the feedback."
    },
    "performance_assessment": [
      {
        "regulations": "Bachelor's Degree Programme in Architecture 2016 (Examination Block 3)",
        "ects_credits": 4,
        "assessment_description": "Performance assessment as a two-semester course together with 052-0652-00L Building Process II\r\n                 (next semester)"
      },
      {
        "ects_credits": 2,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "German",
        "repetition": "Repetition possible without re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course\r\n                 (other programmes)"
      }
    ],
    "offered_in": [
      {
        "program": "Architecture Bachelor",
        "section": "Examination Block 3",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "227-0101-00L",
    "title": "Discrete-Time and Statistical Signal Processing",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "H.‑A. Loeliger"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "",
        "hours_per_week": 4,
        "schedule": [
          {
            "venue": [
              "HGF 3"
            ],
            "day": "Tue",
            "time": "14:15-18:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The course is about some fundamental topics of digital signal processing with a bias towards applications in communications: discrete-time linear filters, inverse filters and equalization, DFT, discrete-time stochastic processes, elements of detection theory and estimation theory, LMMSE estimation and LMMSE filtering, LMS algorithm, Viterbi algorithm.",
      "learning_objectives": "The course is about some fundamental topics of digital signal processing with a bias towards applications in communications. The two main themes are linearity and probability. In the first part of the course, we deepen our understanding of discrete-time linear filters. In the second part of the course, we review the basics of probability theory and discrete-time stochastic processes. We then discuss some basic concepts of detection theory and estimation theory, as well as some practical methods including LMMSE estimation and LMMSE filtering, the LMS algorithm, and the Viterbi algorithm. A recurrent theme throughout the course is the stable and robust \"inversion\" of a linear filter.",
      "content": "1. Discrete-time linear systems and filters:\nstate-space realizations, z-transform and spectrum, \ndecimation and interpolation, digital filter design,\nstable realizations and robust inversion.\n2. The discrete Fourier transform and its use for digital filtering.\n3. The statistical perspective: \nprobability, random variables, discrete-time stochastic processes;\ndetection and estimation: MAP, ML, Bayesian MMSE, LMMSE;\nWiener filter, LMS adaptive filter, Viterbi algorithm.",
      "lecture_notes": "Lecture Notes"
    },
    "performance_assessment": [
      {
        "ects_credits": 6,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "written 180 minutes",
        "exam_aid": "Lecture Notes (not including problems and solutions) and personal notes (max. 4 pages). No electronic devices. (Pocket calculators will be handed out, if necessary.)",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Data Science Master",
        "section": "Core Electives",
        "type": "W"
      },
      {
        "program": "Electrical Engineering and Information Technology Bachelor",
        "section": "Specialization: Communications, Control, and Signal Processing",
        "type": "W"
      },
      {
        "program": "Electrical Engineering and Information Technology Master",
        "section": "Foundation Core Courses",
        "type": "W"
      },
      {
        "program": "Electrical Engineering and Information Technology Master",
        "section": "Foundation Core Courses",
        "type": "W"
      },
      {
        "program": "Electrical Engineering and Information Technology Master",
        "section": "Specialisation Courses",
        "type": "W"
      },
      {
        "program": "Electrical Engineering and Information Technology Master",
        "section": "Tracks (all): Electives",
        "type": "W"
      },
      {
        "program": "Mathematics Master",
        "section": "Information and Communication Technology",
        "type": "W"
      },
      {
        "program": "Quantum Engineering Master",
        "section": "Electives",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "263-0800-00L",
    "title": "Master's Thesis",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "Only students who fulfill the following criteria are allowed to begin with their master thesis:a. successful completion of the bachelor programme; b. fulfilling any additional requirements necessary to gain admission to the master programme;c. \"Inter focus courses\" (16 credits) completed;d. \"Focus courses\" (26 credits) completed, from which at least 16 credits must come from the Major Core courses;e. \"Practical work\" at least 8 credits completed. f. In total, besides the master thesis, no more than 8 credits may be missing.",
    "lecturers": [],
    "classes": [
      {
        "type": "Diploma thesis",
        "notes": "",
        "hours_per_week": 900,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The Master's thesis concludes the study programme. Thesis work should prove the students' ability to independent, structured and scientific working.",
      "learning_objectives": "To work independently and to produce a scientifically structured work under the supervision of a Computer Science Professor.",
      "content": "Independent project work supervised by a Computer Science professor. The duration of the MT is 28 weeks (full-time), where the 28 weeks are composed of 26 weeks of actual processing time and 2 weeks to compensate for public holidays, sick days and other short-term absences.",
      "prerequisites": "Supervisor must be a professor at D-INFK or affiliated,\nsee \nhttps://inf.ethz.ch/people/faculty.html"
    },
    "performance_assessment": [
      {
        "ects_credits": 30,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Computer Science Master",
        "section": "Master's Thesis",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "701-0019-00L",
    "title": "Readings in Environmental Thinking",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "J. Ghazoul"
    ],
    "classes": [
      {
        "type": "Seminar",
        "notes": "",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "CHNG 42"
            ],
            "day": "Fri",
            "time": "16:15-18:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "This course introduces students to foundational texts that led to the emergence of the environment as a subject of scientific importance, and shaped its relevance to society. Above all, the course seeks to give confidence and raise enthusiasm among students to read more widely around the broad subject of environmental sciences and management both during the course and beyond.",
      "learning_objectives": "The course will provide students with opportunities to read, discuss, evaluate and interpret key texts that have shaped the environmental movement and, more specifically, the environmental sciences. Students will gain familiarity with the foundational texts, but also understand the historical context within which their academic and future professional work is based. More directly, the course will encourage debate and discussion of each text that is studied, from both the original context as well as the modern context. In so doing students will be forced to consider and justify the current societal relevance of their work.",
      "content": "The course will be run as a ‘book reading club’. The first session will provide a short introduction as to how to explore a particular text (that is not a scientific paper) to identify the key points for discussion. \nThereafter, in each week a text (typically a chapter from a book or a paper) considered to be seminal or foundational will be assigned by a course lecturer. The lecturer will introduce the selected text with a brief background of the historical and cultural context in which it was written, with some additional biographical information about the author. He/she will also briefly explain the justification for selecting the particular text.\nThe students will read the text, with two to four students (depending on class size) being assigned to present it at the next session. Presentation of the text requires the students to prepare by, for example:\n• identifying the key points made within the text\n• identifying issues of particular personal interest and resonance\n• considering the impact of the text at the time of publication, and its importance now\n• evaluating the text from the perspective of our current societal and environmental position\nSuch preparation would be supported by a mid-week ‘tutorial’ discussion (about 1 hour) with the assigning lecturer.\nThese students will then present the text (for about 15 minutes) to the rest of the class during the scheduled class session, with the lecturer facilitating the subsequent class discussion (about 45 minutes). Towards the end of the session the presenting students will summarise the emerging points (5 minutes) and the lecturer will finish with a brief discussion of how valuable and interesting the text was (10 minutes). In the remaining 15 minutes the next text will be presented by the assigning lecturer for the following week.",
      "literature": "The specific texts selected for discussion will vary, but examples include:\nLeopold (1949) A Sand County Almanach\nCarson (1962) Silent Spring\nEgli, E. (1970) Natur in Not. Gefahren der Zivilisationslandschaft\nLovelock (1979) Gaia: A new look at life on Earth\nNaess (1973) The Shallow and the Deep.\nRoderick F. Nash (1989) The Rights of Nature\nJared Diamond (2005) Collapse \nRobert Macfarlane (2007) The Wild Places\nDiscussions might also encompass films or other forms of media and communication about nature."
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Doctorate Environmental Systems Sciences",
        "section": "Basic and Scientific Skills",
        "type": "W"
      },
      {
        "program": "History and Philosophy of Knowledge Master",
        "section": "Seminars",
        "type": "W"
      },
      {
        "program": "Landscape Architecture Master",
        "section": "Advanced Courses",
        "type": "W"
      },
      {
        "program": "Environmental Sciences Master",
        "section": "Additional Electives",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "900-0105-DRL",
    "title": "Transferable Skills Course III (1-3 days, with Poster or Talk)",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "Only for doctoral students.Please select your doctoral thesis supervisor as a lecturer and prove your participation with the appropriate certificate.",
    "lecturers": [],
    "classes": [
      {
        "type": "Seminar",
        "notes": "",
        "hours_per_week": 60,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Acquisition of transferable skills and cross-disciplinary competences in the range of short courses or workshops with a maximum duration of 3 days. Participants need to present either a poster or a talk at this occasion.",
      "learning_objectives": "Acquisition of transferable skills and cross-disciplinary competences in the range of short courses or workshops with a maximum duration of 3 days. Participants need to present either a poster or a talk at this occasion."
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Doctorate Architecture",
        "section": "Transferable Skills",
        "type": "W"
      },
      {
        "program": "Doctorate Civil, Environmental and Geomatic Engineering",
        "section": "Transferable Skills",
        "type": "W"
      },
      {
        "program": "Doctorate Biology",
        "section": "Transferable Skills",
        "type": "W"
      },
      {
        "program": "Doctorate Chemistry and Applied Biosciences",
        "section": "Transferable Skills",
        "type": "W"
      },
      {
        "program": "Doctorate Earth and Planetary Sciences",
        "section": "Transferable Skills",
        "type": "W"
      },
      {
        "program": "Doctorate Humanities, Social and Political Sciences",
        "section": "Transferable Skills",
        "type": "W"
      },
      {
        "program": "Doctorate Health Sciences and Technology",
        "section": "Transferable Skills",
        "type": "W"
      },
      {
        "program": "Doctorate Computer Science",
        "section": "Transferable Skills",
        "type": "W"
      },
      {
        "program": "Doctorate Management, Technology, and Economics",
        "section": "Transferable Skills",
        "type": "W"
      },
      {
        "program": "Doctorate Mechanical and Process Engineering",
        "section": "Transferable Skills",
        "type": "W"
      },
      {
        "program": "Doctorate Materials Science",
        "section": "Transferable Skills",
        "type": "W"
      },
      {
        "program": "Doctorate Mathematics",
        "section": "Transferable Skills",
        "type": "W"
      },
      {
        "program": "Doctorate Physics",
        "section": "Transferable Skills",
        "type": "W"
      },
      {
        "program": "Doctorate Environmental Systems Sciences",
        "section": "Transferable Skills",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "402-0921-02L",
    "title": "Examination Lesson II Physics",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "German",
    "comment": "Simultaneous enrolment in \"Examination Lesson I Physics\" (402-0921-01L) is compulsory.",
    "lecturers": [
      "M. Mohr"
    ],
    "classes": [
      {
        "type": "Practical / laboratory course",
        "notes": "Permission from lecturers required for all students. \r\n  ",
        "hours_per_week": 30,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "In the context of an examination lesson conducted and graded at a high school, the candidates provide evidence of the subject-matter-based and didactic skills they have acquired in the course of their training.",
      "learning_objectives": "On the basis of a specified topic, the candidate shows that they are in a position\n- to develop and conduct teaching that is conducive to learning at high school level, substantiating it in terms of the subject-matter and from the didactic angle \n- to analyze the tuition they have given with regard to its strengths and weaknesses, and outline improvements.",
      "content": "Die Studierenden erfahren das Lektionsthema in der Regel eine Woche vor dem Prüfungstermin. Von der zuständigen Lehrperson erhalten sie Informationen über den Wissensstand der zu unterrichtenden Klasse und können sie vor dem Prüfungstermin besuchen.\nSie erstellen eine Vorbereitung gemäss Anleitung und reichen sie bis am Vortag um 12 Uhr den beiden Prüfungsexperten ein.\nDie gehaltene Lektion wird kriteriumsbasiert beurteilt. Die Beurteilung umfasst auch die schriftliche Vorbereitung und eine mündliche Reflexion des Kandidaten/ der Kandidatin über die gehaltene Lektion im Rahmen eines kurzen Kolloquiums.",
      "lecture_notes": "Dokument: Schriftliche Vorbereitung für Prüfungslektionen.",
      "prerequisites": "Nach Abschluss der übrigen Ausbildung."
    },
    "performance_assessment": [
      {
        "ects_credits": 1,
        "assessment_type": "graded semester performance",
        "language_of_examination": "German",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Physics Teaching Diploma",
        "section": "Professional Training in Physics",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "401-3740-03L",
    "title": "Semester Paper (No. 3)",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "German",
    "comment": "Successful participation in the course unit 401-2000-00L Scientific Works in Mathematics or 402-2000-00L Scientific Works in Physicsis is required.Approval via the form https://my.cse.ethz.ch/ is MANDATORY (caution: in myStudies all lecturers can be selected despite the fact that some of them are actually not authorised as supervisors).",
    "lecturers": [],
    "classes": [
      {
        "type": "Independent project",
        "notes": "Permission from lecturers required for all students. \r\n  ",
        "hours_per_week": 240,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Semester Papers help to deepen the students' knowledge of a specific subject area. Students are offered a selection of topics. These papers serve to develop the students' ability for independent mathematical work as well as to enhance skills in presenting mathematical results in writing.",
      "learning_objectives": "Semester papers serve to develop the students' ability for independent mathematical work as well as to enhance skills in presenting mathematical results in writing.",
      "prerequisites": "There are several course units \"Semester Paper\" that are all equivalent. If, during your studies, you write several semester papers, choose among the different numbers in order to be able to obtain credits again."
    },
    "performance_assessment": [
      {
        "ects_credits": 8,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "German",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Computational Science and Engineering Master",
        "section": "Semester Paper",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "529-0617-01L",
    "title": "Catalysis Engineering",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "J. Pérez-Ramírez",
      "S. J. Mitchell"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "",
        "hours_per_week": 3,
        "schedule": [
          {
            "venue": [
              "HCPE 47.2"
            ],
            "day": "Mon",
            "time": "08:45-09:30"
          },
          {
            "venue": [
              "HCID 2"
            ],
            "day": "Thu",
            "time": "15:45-17:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Heterogeneous catalysis, an enabling foundation of the chemical industry, spearheads innovation toward key sustainability targets in clean energy, carbon neutrality, and zero waste. The Catalysis Engineering course provides students with concepts bridging from the molecular-level design of catalytic materials to their technical application.",
      "learning_objectives": "To accelerate the discovery and implementation of sustainable technologies, this vibrant discipline is constantly refining its design principles, particularly at the nanoscale, a shift facilitated by the availability of increasingly powerful tools that permit the continued development of fundamental knowledge over different time and length scales. During this course, you will learn current concepts for the defossilization of the chemical industry and strategies for achieving this goal from idea to implementation. By introducing topical case studies both in lectures and through a semester project, you will see aspects of catalyst synthesis and characterization, kinetics, mass and heat transport, deactivation and process design, sustainability metrics, and the potential of digital tools to guide catalyst design. Since this area is rapidly advancing and no textbooks are available, the lectures follow slides and journal articles.",
      "content": "The aspects described above will be demonstrated through industrially-relevant examples such as:\n- Natural gas valorization\n- CO2 conversion to energy vectors\n- Plastics upcycling\n- Concept for a glycerol biorefinery\n- Halogen chemistry on catalytic surfaces\n- Ensemble design for selective hydrogenations\n- Single-atom catalysis\n- Hierarchical zeolite catalysts\nA supervised semester project conducted in small groups provides a taster of catalysis research on a timely topic. Students will learn basic skills including critical literature analysis, problem definition and solving, methods of catalyst synthesis, characterization, and testing, and data evaluation and communication through a short talk.",
      "lecture_notes": "The course material is based on slides and journal articles.",
      "prerequisites": "It is assumed that students selecting this course are familiar with basic concepts of chemistry and catalysis (chemistry or chemical engineering background). Other students are welcome to contact us to discuss the requirement for prior knowledge."
    },
    "performance_assessment": [
      {
        "ects_credits": 6,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "oral 30 minutes",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Chemical and Bioengineering Master",
        "section": "Catalysis and Separation",
        "type": "W+"
      },
      {
        "program": "Chemical and Bioengineering Master",
        "section": "Catalysis and Separation",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "063-0853-00L",
    "title": "Subject Semester in the Field of History and Theory of Architecture",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "German",
    "comment": "Allocation only after consultation with the professor (meetings as required and after consultation with the chair).A student can only register once for a \"Fachsemester\" during the Master studies!The application deadline for this \"Fachsemester\" is 3.9.2025, 8 p.m. You will receive a message about acceptance or rejection for the subject semester by 4.9.2025, 2 p.m. at the latest. Students who have been rejected have the opportunity to choose a design class (enrollment ends on 4.9.2025, at 6 p.m.).“",
    "lecturers": [
      "P. Ursprung"
    ],
    "classes": [
      {
        "type": "Independent project",
        "notes": "Permission from lecturers required for all students. \r\n  ",
        "hours_per_week": 400,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "AND. NOW. We are living in times of profound disruption. The ways we imagine the future and narrate the past are more volatile than a few years ago. The temporal horizon is shrinking. The “contemporary” dominates. Yet what is meant by “here and now” is not clear. The distinctions between observations and speculations, fears and hopes are blurred. We face these challenges by reading and writing.",
      "learning_objectives": "Our aim is to increase the knowledge and sensitivity of architecture students toward the history of art and architecture, to make their voices heard and to develop new teaching formats for the history and theory of architecture. Students will learn to take position in a field, they will practice argumentation and increase their skills in writing and presenting.",
      "content": "The Fachsemester in HS 2025 will deal with issues of ethics and esthetics in the largest sense. The syllabus will contain articles and book chapters on philosophy, performance, political science, poetry and history. Students are invited to develop their own texts in relation to the overall topic.\nThe syllabus will contain articles and book chapters on philosophy, political science, poetry and history. Students are invited to develop their own texts in relation to the overall topic.\nOur aim is to increase the facility of students for understanding spatial, political and historical interrelations. We support students to develop their skills in writing and reading, to make their voices heard, and to experiment, together with the teaching group, with new educational forms for the history and theory of art and architecture.\nThe group will meet on Wednesdays 10-13 in our office and on Thursdays 10-13 in an external location (tbc).\nStart: Wednesday, 17 September 2025.",
      "lecture_notes": "A Syllabus with source material for the lecture session will be provided.\nStarting with a visit outside ETH (on the first Monday, where is still to be defined) we will dive into theories of resistance and resilience, temporality and story-telling. We will read texts that inspire us to look back, forward, and to the present."
    },
    "performance_assessment": [
      {
        "ects_credits": 14,
        "assessment_type": "graded semester performance",
        "language_of_examination": "German",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Architecture Master",
        "section": "Architectural Design",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "557-0603-02L",
    "title": "Snowsports I - Snowboard",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "German",
    "comment": "Only for BSc / MSC HST / Teaching Diploma Sports100% presence required!Registration via Study Administration HST necessary. Compulsory for Teaching Diploma Sports.",
    "lecturers": [
      "C. Elmiger-Schnyder"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "Blockwoche in Davos vom 04.-09.01.2026100% Anwesenheit wird erwartet!",
        "hours_per_week": 2,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Education in the disciplines of winter sports.\n- J+S Education possibility\n- Transfer Offpist\n- Transfer Nordic Cross",
      "learning_objectives": "The students:\n- Experience the different winter sports!\n- Gain an understanding of how to ski off-piste!\n- Gain an understanding of how to Nordic Cross.",
      "content": "- To apply and vary personal technique of snowboarding\n- To acquire and vary personal technique of cross-country skiing\nCompetition in ski-jumping, and giant slalom\n- To gain an understanding in how to ski off-piste\n- To gain an understanding in how to Nordic Cross"
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "graded semester performance",
        "language_of_examination": "German",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Sport Teaching Diploma",
        "section": "Basic Education",
        "type": "W"
      },
      {
        "program": "Sport Teaching Diploma",
        "section": "Compensation Courses",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "402-0000-10L",
    "title": "Physics Lab 4",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "German",
    "comment": "Prerequiste: \"Physics Lab 3\" completed. Before enroling in \"Physics Lab 4\", please enrol in \"Physics Lab 3\".Enrol at most once in the course of the Bachelor programme!",
    "lecturers": [
      "A. Eggenberger"
    ],
    "classes": [
      {
        "type": "Practical / laboratory course",
        "notes": "Montag ist obligatorisch. Das Praktikum ist die ganze Woche von 8 - 18 Uhr geöffnet. Der Helpdesk ist von 9 - 18 Uhr besetzt.",
        "hours_per_week": 210,
        "schedule": [
          {
            "venue": [
              "HPP"
            ],
            "day": "Mon",
            "time": "07:45-17:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "This laboratory course provides basic training of experimental skills. These are experimental design, implementation, measurement, data analysis and interpretation, as well as error analysis. The experimental work has to be complemented by a concise written report, which trains the scientific writing skills.\nManuals for the individual experiments are available in English.",
      "learning_objectives": "Students learn to independently perform advanced experiments and document them scientifically correct.\nStudents are required to attend a safety lecture on the first day of the course and pass the corresponding online moodle-test before being allowed to access the laboratory rooms and perform the experiments.\nThe following aspects are emphasized:\n- understanding complicated physical phenomena\n- structured approach to experiments with complex instruments\n- various practical aspects of experimenting and determining uncertainties\n- learning the relevant statistical methods for data analysis\n- interpretation of measurements and uncertainties\n- describing the experiments and the results in a scientifically proper manner, in direct analogy to publishing\n- ethical aspects of experimental research and scientific communication",
      "content": "We offer experiments covering the following topics:\nBasic topics from mechanics, optics, thermodynamics, electromagnetism and electronics; as well as central topics from nuclear and particle physics, quantum electronics, quantum mechanics, solid state physics and astrophysics.",
      "lecture_notes": "Instructions for experiments are available in English.",
      "prerequisites": "From a variety of over 50 experiments, students have to perform 4 experiments covering different topics. The experimental work is complemented by writing a scientific report."
    },
    "performance_assessment": [
      {
        "ects_credits": 8,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "German",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "additional_info": "Sprache: Deutsch oder Englisch / Language: English or German",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Physics Bachelor",
        "section": "Proseminars, Experimental and Theoretical Semester Papers",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "529-1000-30L",
    "title": "Master's Thesis",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "Only students who fulfill the following criteria are allowed to begin with their Master's thesis:a. successful completion of the Bachelor's programme; b. fulfilling of any additional requirements necessary to gain admission to the Master's programme.Duration of the Master's Thesis 6 months, possible only with permission of the Director of Studies.",
    "lecturers": [],
    "classes": [
      {
        "type": "Diploma thesis",
        "notes": "",
        "hours_per_week": 900,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "In the Master thesis students prove their ability to independent, structured and scientific working. The Master thesis is usually carried out in a core or optional subject area as chosen by the student.",
      "learning_objectives": "In the Master Thesis students prove their ability to independent, structured and scientific working."
    },
    "performance_assessment": [
      {
        "ects_credits": 30,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Interdisciplinary Sciences Master",
        "section": "Master's Thesis",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "401-3612-00L",
    "title": "Stochastic Simulation",
    "semester": "Autumn Semester 2025",
    "periodicity": "two-yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [],
    "classes": [
      {
        "type": "Lecture",
        "notes": "Does not take place this semester.",
        "hours_per_week": 2,
        "schedule": []
      },
      {
        "type": "Exercise",
        "notes": "Does not take place this semester.",
        "hours_per_week": 1,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "This course provides an introduction to statistical Monte Carlo methods. This includes applications of simulations in various fields (Bayesian statistics, statistical mechanics, operations research, financial mathematics), algorithms for the generation of random variables (accept-reject, importance sampling), estimating the precision, variance reduction, introduction to Markov chain Monte Carlo.",
      "learning_objectives": "Stochastic simulation (also called Monte Carlo method) is the experimental analysis of a stochastic model by implementing it on a computer. Probabilities and expected values can be approximated by averaging simulated values, and the central limit theorem gives an estimate of the error of this approximation. The course shows examples of the many applications of stochastic simulation and explains different algorithms used for simulation. These algorithms are illustrated with the statistical software R.",
      "content": "Examples of simulations in different fields (computer science, statistics, statistical mechanics, operations research, financial mathematics). Generation of uniform random variables. Generation of random variables with arbitrary distributions (quantile transform, accept-reject, importance sampling), simulation of Gaussian processes and diffusions. The precision of simulations, methods for variance reduction. Introduction to Markov chains and Markov chain Monte Carlo (Metropolis-Hastings, Gibbs sampler, Hamiltonian Monte Carlo, reversible jump MCMC).",
      "lecture_notes": "A script will be available in English.",
      "literature": "P. Glasserman,  Monte Carlo Methods in Financial Engineering.\nSpringer 2004.\nB. D. Ripley.  Stochastic Simulation. Wiley, 1987.\nCh. Robert, G. Casella. Monte Carlo Statistical Methods. \nSpringer 2004 (2nd edition).",
      "prerequisites": "Familiarity with basic concepts of probability theory (random variables, joint and conditional distributions, laws of large numbers and central limit theorem) will be assumed."
    },
    "performance_assessment": [
      {
        "ects_credits": 5,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "written 120 minutes",
        "additional_info": "The performance assessment is offered in the session after the course unit and once more in the subsequent exam session half a year later. Apart from this, repetition is only possible after re-enrolling.",
        "exam_aid": "Closed book; simple pocket calculator with no communication capability.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "DAS in Data Science",
        "section": "Statistics",
        "type": "W"
      },
      {
        "program": "Data Science Master",
        "section": "Subject-Specific Electives",
        "type": "W"
      },
      {
        "program": "Data Science Master",
        "section": "Core Electives",
        "type": "W"
      },
      {
        "program": "Doctorate Mathematics",
        "section": "Graduate School",
        "type": "W"
      },
      {
        "program": "Mathematics Master",
        "section": "Selection: Probability Theory, Statistics",
        "type": "W"
      },
      {
        "program": "Quantitative Finance Master",
        "section": "MF (Mathematical Methods in Finance)",
        "type": "W"
      },
      {
        "program": "Statistics Master",
        "section": "Subject Specific Electives",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "529-0029-01L",
    "title": "Structure Determination",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "M. D. Wörle",
      "N. Trapp"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "",
        "hours_per_week": 3,
        "schedule": [
          {
            "venue": [
              "HCPE 47.3"
            ],
            "day": "Thu",
            "time": "08:45-11:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Advanced X-ray crystal structure analysis",
      "learning_objectives": "To gain a deeper understanding of crystal structure determination principles and practice by X-ray diffraction and the evaluation of results.",
      "content": "Review of principles of diffraction and instrumentation, unit cells, lattices, and symmetry. Inorganic structural chemistry: sphere packings, ionic crystals, covalent networks, intermetallic compounds. Overview of powder diffraction and application of crystal chemistry for structure analysis of polycrystalline phases. Working safely with X-rays, crystal growth, selection and mounting, data collection strategies, data reduction, corrections for absorption, extinction and Lp, advanced structure solution theory and techniques: Patterson function, heavy atom technique, Fourier methods, direct methods. Structure modeling and refinement, disorder, twinning, false symmetry, interpretation of anisotropic shift parameters. Determination of absolute configuration, interpretation of results and scope of chemically useful information, validation and publication of results, critical evaluation of published crystal structures.",
      "lecture_notes": "Information and exercise sheets will be distributed in loose form.",
      "literature": "Main references\n(1) W. Massa, \"Crystal Structure Determination\", 2nd Ed., 2004, Springer Verlag.\n(2) J.D. Dunitz, \"X-ray Analysis and the Structure of Organic Molecules\", 1995, Verlag HCA.\nAdditional literature\n(3) C. Hammond, \"The Basics of Crystallography and Diffraction\", 2nd Ed., 2001, International Union of Crystallography Texts on Crystallography 5, Oxford University Press.\n(4) J.P. Glusker, M. Lewis & M. Rossi, \"Crystal Structure Analysis for Chemists and Biologists\", 1994, VCH Publishers.\n(5) D. Blow, \"Outline of Crystallography for Biologists\", 2002 Oxford University Press.\n(6) D. Schwarzenbach, \"Kristallographie\", 2001, Springer Verlag.\n(7) C. Giacovazzo, H.L. Monaco, G. Artioli, D. Viterbo, G. Ferraris, G. Gilli, G. Zanotti & M. Catti, Fundamentals of Crystallography\", edited by C. Giacovazzo, 2nd Ed., 2002, International Union of Crystallography Texts on Crystallography 7, Oxford University Press.\n(8) W. Clegg, A.J. Blake, R.O. Gould & P. Main, \"Crystal Structure Analysis - Principles and Practice\", edited by W. Clegg, 2001, International Union of Crystallography Texts on Crystallography 6, Oxford University Press.\n(9) J.P. Glusker & K.N. Trueblood, \"Crystal Structure Analysis - A Primer\", 2nd Ed., 1985, Oxford University Press.\n(10) G. H. Stout, L. H. Jensen: X-Ray Structure Determination, J. Wiley & Sons, 1989. \n(11) M. M. Woolfson: X-Ray Crystallography, Cambridge University Press, 1970.",
      "prerequisites": "Students will conduct the computational exercises and examples of structure solution and refinement on personal computers.\nPrerequisite: Principles of Crystal Structure Determination (529-0039-00L)."
    },
    "performance_assessment": [
      {
        "ects_credits": 6,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "oral 30 minutes",
        "additional_info": "Examination language can be German or English according to the student's preference.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Chemistry Master",
        "section": "Chemical Crystallography",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "151-0632-00L",
    "title": "Vision Algorithms for Mobile Robotics (University of Zurich)",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "No enrolment to this course at ETH Zurich. Book the corresponding module directly at UZH as an incoming student.UZH Module Code: DINF2039Mind the enrolment deadlines at UZH:https://www.uzh.ch/cmsssl/en/studies/application/deadlines.html",
    "lecturers": [
      "D. Scaramuzza"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "**Course at University of Zurich**Follow the instructions on how to apply on the official course website: https://rpg.ifi.uzh.ch/teaching.html",
        "hours_per_week": 2,
        "schedule": []
      },
      {
        "type": "Exercise",
        "notes": "**Course at University of Zurich**Follow the instructions on how to apply on the official course website: https://rpg.ifi.uzh.ch/teaching.html",
        "hours_per_week": 2,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "For a robot to be autonomous, it has to perceive and understand the world around it. This course introduces you to the key computer vision algorithms used in mobile robotics, such as feature extraction, structure from motion, dense reconstruction, tracking, image retrieval, event-based vision, and visual-inertial odometry (the algorithms behind Hololens, Oculus Quest, and the NASA Mars rovers).",
      "learning_objectives": "Learn the fundamental computer vision algorithms used in mobile robotics, in particular: filtering, feature extraction, structure from motion, multiple view geometry, dense reconstruction, tracking, image retrieval, event-based vision, and visual-inertial odometry and Simultaneous Localization And Mapping (SLAM) (the algorithms behind Hololens, Facebook-Oculus Quest, and the NASA Mars rovers).",
      "content": "Each lecture will be followed by a lab session where you will learn to implement a building block of a visual odometry algorithm in Matlab. By the end of the course, you will integrate all these building blocks into a working visual odometry algorithm.",
      "lecture_notes": "Lecture slides will be made available on the course official website: \nhttp://rpg.ifi.uzh.ch/teaching.html",
      "literature": "[1] Computer Vision: Algorithms and Applications, by Richard Szeliski, Springer, 2010. \n[2] Robotics Vision and Control: Fundamental Algorithms, by Peter Corke 2011.\n[3] An Invitation to 3D Vision, by Y. Ma, S. Soatto, J. Kosecka, S.S. Sastry.\n[4] Multiple view Geometry, by R. Hartley and A. Zisserman.\n[5] Introduction to autonomous mobile robots 2nd Edition, by R. Siegwart, I.R. Nourbakhsh, and D. Scaramuzza, February, 2011",
      "prerequisites": "Fundamentals of algebra, geomertry, matrix calculus, and Matlab programming.\nNote: If you are interested in taking UZH courses, you must register as an incoming mobility student at UZH. For details, see as follows:\nUZH course enrollment for ETH student at University of Zurich (UZH) > Mobility within Switzerland – Incoming > Module Mobility: The easiest way to take individual modules/courses to supplement your studies at your home university is with module mobility. This option is not available to students who have dropped out of their home university or have been definitely excluded or banned from the relevant a program > Application and Deadlines: Applications are submitted via the UZH application portal (\nhttps://www.uzh.ch/cmsssl/en/studies/application/chmobilityin.html\n)\nStep-by-step guidelines on how ETH students can register for this course, are given on the official course website: \nhttps://rpg.ifi.uzh.ch/teaching.html\nATTENTION: When you book the course at UZH, you are automatically registered for the exam at UZH and you can unregister until the October deadline. After registering for the course, you as an ETH student need to check out your **UZH email account** to receive the relelated information from the lecturer."
    },
    "performance_assessment": [
      {
        "ects_credits": 6,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "additional_info": "Registration modalities, date, and venue of this performance assessment are specified solely by the UZH. All info on the examination are given on the official course website: \nhttps://rpg.ifi.uzh.ch/teaching.html",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Data Science Master",
        "section": "Interdisciplinary Electives",
        "type": "W"
      },
      {
        "program": "Mechanical Engineering Master",
        "section": "Core Courses",
        "type": "W"
      },
      {
        "program": "Computational Science and Engineering Master",
        "section": "Electives",
        "type": "W"
      },
      {
        "program": "Robotics, Systems and Control Master",
        "section": "Core Courses",
        "type": "W"
      },
      {
        "program": "Space Systems Master",
        "section": "Deep Track Robotics",
        "type": "W+"
      },
      {
        "program": "Space Systems Master",
        "section": "Deep Track Earth Observation",
        "type": "W+"
      }
    ]
  },
  {
    "course_id": "252-0027-00L",
    "title": "Introduction to Programming",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "German",
    "comment": "",
    "lecturers": [
      "M. Fischer",
      "M. Schwerhoff"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "Vorlesung im ML D28 mit Videoübertragung ins ML E12.Ausnahme: An den Donnerstagen 25.09.25 und 02.10.25 von 14-15 Uhr in ETA F5.",
        "hours_per_week": 4,
        "schedule": [
          {
            "venue": [
              "MLD 28",
              "MLE 12"
            ],
            "day": "Tue",
            "time": "10:15-12:00"
          },
          {
            "venue": [
              "MLD 28",
              "MLE 12"
            ],
            "day": "Fri",
            "time": "08:15-10:00"
          },
          {
            "venue": [
              "ETAF 5"
            ],
            "day": "25.09.",
            "time": "14:15-15:00"
          },
          {
            "venue": [
              "ETAF 5"
            ],
            "day": "02.10.",
            "time": "14:15-15:00"
          },
          {
            "venue": [
              "ETAF 5"
            ],
            "day": "17.12.",
            "time": "16:15-18:00"
          }
        ]
      },
      {
        "type": "Exercise",
        "notes": "Groups are selected in myStudies.",
        "hours_per_week": 2,
        "schedule": [
          {
            "venue": [
              "CABH 52",
              "CABH 53",
              "CHND 29",
              "CHNG 42",
              "CHNG 46",
              "ETZE 7",
              "ETZF 91",
              "ETZG 91",
              "ETZH 91",
              "ETZK 91",
              "GLCE 29.2",
              "HGD 3.3",
              "HGD 5.1",
              "HGD 5.3",
              "HGE 33.3",
              "HGG 26.1",
              "IFWC 33",
              "IFWC 35",
              "LEEC 114",
              "LEED 101",
              "LEED 105",
              "LFWB 2",
              "LFWC 1",
              "MLH 41.1",
              "NOE 11",
              "NOE 39"
            ],
            "day": "Wed",
            "time": "16:15-18:00"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Introduction to fundamental concepts of modern programming and operational skills for developing high-quality programs, including large programs as in industry. The course introduces software engineering principles with an object-oriented approach based.",
      "learning_objectives": "Many people can write programs. The \"Introduction to Programming\" course goes beyond that basic goal: it teaches the fundamental concepts and skills necessary to perform programming at a professional level. As a result of successfully completing the course, students master the fundamental control structures, data structures, reasoning patterns and programming language mechanisms characterizing modern programming, as well as the fundamental rules of producing high-quality software. They have the necessary programming  background for later courses introducing programming skills in specialized application areas.",
      "content": "Basics of object-oriented programming. Objects and classes. Pre- and postconditions, class invariants, design by contract. Fundamental control structures. Assignment and references.  Fundamental data structures and algorithms. Recursion. Inheritance and interfaces, basic concepts of Software Engineering such as the software process, specification and documentation, debugging, reuse and quality assurance.",
      "lecture_notes": "The lecture slides are available for download on the course page.",
      "literature": "See the course page for up-to-date information.",
      "prerequisites": "There are no special prerequisites. Students are expected to enroll in the other courses offered to first-year students of computer science."
    },
    "performance_assessment": [
      {
        "ects_credits": 7,
        "assessment_type": "session examination",
        "language_of_examination": "German",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "written 160 minutes",
        "additional_info": "Während des Semesters können durch aktive Mitarbeit Bonuspunkte erarbeitet werden. Die Veranstaltung bietet als \"Leistungselement\" (im Sinne der WEISUNG: Anwendung von Leistungselementen in der Lehre vom 22.12.2017) Lernelemente an. Die Lernelemente sind Bonusaufgaben und klar markierter Teil der wöchentlichen Aufgabensammlung. In maximal 13 Wochen wird es Bonusaufgaben geben. Die durch die Lernelemente erworbenen Punkte verbessern das Ergebnis der schriftlichen Prüfung um maximal 0.25 Notenpunkte, wobei für dieses Maximum nicht die Maximalpunktzahl erforderlich ist.\nDie Lernelemente müssen selbstständig bearbeitet werden. Unehrliches Verhalten bei der Bearbeitung der Lernelemente (z.B. Kopieren von Lösungen, Lösungsansätzen, Skizzen, oder Datensätzen von Mitstudierenden oder anderen Quellen, oder die Zurverfügungstellung solchen Materials zum Kopieren) haben ernste Konsequenzen inklusive der Aberkennung aller Bonuspunkte dieser Veranstaltung.\nWeitere Informationen zu den Leistungselementen finden Sie auf der Webseite der Veranstaltung.\nSchriftliche Prüfung (160 Min) -- online Programmieren am Computer (120 Min) und Bearbeiten von Aufgaben zu Grundlagen (40 Min). Die Note ergibt sich aus den beiden\nTeilen: 2/3 Programmier- und 1/3 Grundlagen-Prüfung.",
        "exam_aid": "None",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Computer Science Bachelor",
        "section": "First Year Examination Block 1",
        "type": "O"
      }
    ]
  },
  {
    "course_id": "851-0846-02L",
    "title": "Spanish B2-C1: Language and Cinema",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "Spanish",
    "comment": "No enrolment to this course at ETH Zurich. Book the corresponding course directly at \"Language Center of UZH and ETH Zürich\".Course fees: https://www.sprachenzentrum.uzh.ch/en/Sprachkurse/Kursgebuehren1.htmllRegistration dates: https://www.sprachenzentrum.uzh.ch/en/Sprachkurse.html",
    "lecturers": [],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "Does not take place this semester.**Kurs vom Sprachenzentrum der UZH und der ETH Zürich**",
        "hours_per_week": 2,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The course introduces specific thematics in Spanish-speaking regions or countries through the cinema, taking into account the geopolitical and cultural spectrum of the Spanish language.",
      "learning_objectives": "The course aims to visual observation, development of ideas, presentation, and interaction. Some basic elements of movie-making are presented. \nThe participant gets familiarized with images, customs, dialogs and vocabulary, carrying out an observation, analysis, and comment of these elements. \nGlossaries of different linguistic regions are created."
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "graded semester performance",
        "language_of_examination": "Spanish",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "additional_info": "Anmeldemodalitäten, Datum und Ort dieser Leistungskontrolle wird ausschliesslich vom Sprachenzentrum UZH/ETH festgelegt.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Science in Perspective",
        "section": "Language Courses of the UZH and ETH Zurich",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "857-0106-00L",
    "title": "International Environmental Politics (with Research Paper)",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "T. Bernauer",
      "V. Koubi"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "Does not take place this semester.The lecture will not take place in the autumn semester of the year 2025.",
        "hours_per_week": 2,
        "schedule": []
      },
      {
        "type": "Seminar",
        "notes": "Does not take place this semester.Students have to attend the lecture 'International Environmental Politics' 860-0023-00L'.Meeting dates for the research paper upon agreement with Prof. Thomas Bernauer or Prof. Vally Koubi.",
        "hours_per_week": 2,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Based on the contents of the International Environmental Politics lecture (860-0023-00L) students will develop a research question and study design on a topic of their choice, carry out independent research and write a research paper under the supervision of Prof. Bernauer, Prof. Koubi, as well as postdocs and doctoral students in their research group.",
      "learning_objectives": "Acquire skills for carrying out independent research and writing a research paper in the area of international environmental politics.",
      "content": "Based on the contents of the International Environmental Politics lecture (860-0023-00L) students will develop a research question and study design on a topic of their choice, carry out independent research and write a research paper under the supervision of Prof. Bernauer, Prof. Koubi, as well as postdocs and doctoral students in their research group.",
      "prerequisites": "Joint enrolment in this course unit AND International Environmental Politics lecture (860-0023-00L) is required."
    },
    "performance_assessment": [
      {
        "ects_credits": 8,
        "assessment_type": "graded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Comparative and International Studies Master",
        "section": "Research Seminars",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "406-0242-AAL",
    "title": "Analysis II",
    "semester": "Autumn Semester 2025",
    "periodicity": "every semester recurring course",
    "language_of_instruction": "English",
    "comment": "Enrolment ONLY for MSc students with a decree declaring this course unit as an additional admission requirement.Any other students (e.g. incoming exchange students, doctoral students) CANNOT enrol for this course unit.",
    "lecturers": [
      "M. Akveld"
    ],
    "classes": [
      {
        "type": "Revision course / private study",
        "notes": "Self-study course. No presence required.",
        "hours_per_week": 210,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Mathematical tools of an engineer",
      "learning_objectives": "Mathematics as a tool to solve engineering problems, mathematical formulation of problems in science and engineering. Basic mathematical knowledge of an engineers.",
      "content": "Multi variable calculus: gradient, directional derivative, chain rule, Taylor expansion, Lagrange multipliers. Multiple integrals: coordinate transformations, path integrals, integrals over surfaces, divergence theorem, applications in physics. Ordinary differential equations.",
      "literature": "Textbooks in English:\n- J. Stewart: Multivariable Calculus, Thomson Brooks/Cole\n- V. I. Smirnov: A course of higher mathematics. Vol. II. Advanced calculus\n- W. L. Briggs, L. Cochran: Calculus: Early Transcendentals: International Edition, Pearson Education\n- M. Akveld, R. Sperb, Analysis II, vdf\n- L. Papula: Mathematik für Ingenieure 2, Vieweg Verlag"
    },
    "performance_assessment": [
      {
        "ects_credits": 7,
        "assessment_type": "session examination",
        "language_of_examination": "English",
        "repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
        "examination": "written 120 minutes",
        "exam_aid": "2 sheets DIN A4 (= 4 pages) self-authored summary; no pocket calculator. One formulary from a list distributed in the course unit 401-0242-00L.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Geomatics Master",
        "section": "Course Units for Additional Admission Requirements",
        "type": "E-"
      },
      {
        "program": "Environmental Engineering Master",
        "section": "Course Units for Additional Admission Requirements",
        "type": "E-"
      }
    ]
  },
  {
    "course_id": "651-4088-03L",
    "title": "Physical Geography III (Geomorphology and Glaciology) (University of Zürich)",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "German",
    "comment": "No enrolment to this course at ETH Zurich. Book the corresponding module directly at UZH as an incoming student.UZH Module Code: GEO231Mind the enrolment deadlines at UZH:https://www.uzh.ch/cmsssl/en/studies/application/deadlines.html",
    "lecturers": [],
    "classes": [
      {
        "type": "Lecture",
        "notes": "**Kurs an der Universität Zürich**",
        "hours_per_week": 14,
        "schedule": []
      },
      {
        "type": "Exercise",
        "notes": "**Kurs an der Universität Zürich**",
        "hours_per_week": 14,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Das Modul bietet eine kurze Einführung in einige Komponenten und\nProzesse des hydrologischen Kreislaufes. Dabei werden einzelne\nWasserspeicher (Schnee,- Boden und Grundwasser) und Flüsse zwischen den Speichern (Verdunstung, Niederschlag und Abfluss) betrachtet. Übungen ergänzen die Vorlesung.",
      "learning_objectives": ""
    },
    "performance_assessment": [
      {
        "ects_credits": 5,
        "assessment_type": "graded semester performance",
        "language_of_examination": "German",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "additional_info": "Anmeldemodalitäten, Datum und Ort dieser Leistungskontrolle werden ausschliesslich von der UZH festgelegt.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Earth Sciences Master",
        "section": "Electives",
        "type": "W"
      },
      {
        "program": "Geography Teaching Diploma",
        "section": "Part 2",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "327-2127-00L",
    "title": "Sustainable Materials Management: Concepts, Methods and Principles",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "P. Wäger",
      "K. Remmen"
    ],
    "classes": [
      {
        "type": "Lecture",
        "notes": "",
        "hours_per_week": 1,
        "schedule": [
          {
            "venue": [
              "HCPE 47.2"
            ],
            "day": "Fri/2w",
            "time": "13:45-15:30"
          }
        ]
      },
      {
        "type": "Exercise",
        "notes": "",
        "hours_per_week": 1,
        "schedule": [
          {
            "venue": [
              "HCPE 47.2"
            ],
            "day": "Fri/2w",
            "time": "15:45-17:30"
          }
        ]
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "The aim of this course is to introduce important concepts, methods and principles for sustainable materials management and to critically reflect their possibilities and limitations. A particular focus will be laid on recycling issues.",
      "learning_objectives": "Students develop a basic understanding of important concepts, methods and principles for sustainable materials management and become acquainted with their possibilites and limitations.",
      "content": "The course consists of six lectures introducing concepts, methods and principles for a sustainable materials management (including, amongst others, material flow analysis, life cycle assessment, raw materials criticality evaluation), with a particular focus on recycling issues and exemplifications for materials relevant for Information and Communication Technologies (ICT) and emerging energy technologies."
    },
    "performance_assessment": [
      {
        "ects_credits": 2,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "additional_info": "report and oral presentation",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Materials Science Master",
        "section": "Elective Courses",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "851-0879-00L",
    "title": "Chinese III A2.1",
    "semester": "Autumn Semester 2025",
    "periodicity": "yearly recurring course",
    "language_of_instruction": "German",
    "comment": "No enrolment to this course at ETH Zurich. Book the corresponding course directly at \"Language Center of UZH and ETH Zürich\".Course fees: https://www.sprachenzentrum.uzh.ch/en/Sprachkurse/Kursgebuehren1.htmlRegistration dates: https://www.sprachenzentrum.uzh.ch/en/Sprachkurse.html",
    "lecturers": [],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "**Kurs vom Sprachenzentrum der UZH und der ETH Zürich**",
        "hours_per_week": 4,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "Chinese III leads to A2.1 level on the Common European Framework of Reference for Languages. It further develops participants’ skills in standard modern spoken Chinese and in reading Chinese characters. The goal of the course is for participants to communicate in and deal with more complex everyday situations. There is a special focus on university and student life.",
      "learning_objectives": "Participants are able to use the Chinese language adequately in selected areas and can conduct themselves in a culturally appropriate manner. The focus is on oral language skills at A2.1 level of the Common European Framework of Reference for Languages; reading and (digital) writing skills are fostered simultaneously. \nThe following topics are integrated into various communicative situations: Talking about food, going to a restaurant, directions, and public transport."
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "graded semester performance",
        "language_of_examination": "German",
        "repetition": "Repetition only possible after re-enrolling for the course unit.",
        "additional_info": "Anmeldemodalitäten, Datum und Ort dieser Leistungskontrolle wird ausschliesslich vom Sprachenzentrum UZH/ETH festgelegt.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "Science in Perspective",
        "section": "Language Courses of the UZH and ETH Zurich",
        "type": "W"
      }
    ]
  },
  {
    "course_id": "136-0302-00L",
    "title": "Constructive Details & Implementation of Regenerative Structural Systems",
    "semester": "Autumn Semester 2025",
    "periodicity": "two-yearly recurring course",
    "language_of_instruction": "English",
    "comment": "",
    "lecturers": [
      "G. Habert",
      "A. Evrard"
    ],
    "classes": [
      {
        "type": "Mixture oflectures and exercises",
        "notes": "",
        "hours_per_week": 50,
        "schedule": []
      }
    ],
    "notes": "",
    "catalogue_data": {
      "description": "",
      "learning_objectives": ""
    },
    "performance_assessment": [
      {
        "ects_credits": 3,
        "assessment_type": "ungraded semester performance",
        "language_of_examination": "English",
        "repetition": "Repetition possible without re-enrolling for the course unit.",
        "assessment_description": "Performance assessment as a semester course"
      }
    ],
    "offered_in": [
      {
        "program": "CAS in Regenerative Materials - Structural Specialisation",
        "section": "Modules",
        "type": "O"
      }
    ]
  }
]