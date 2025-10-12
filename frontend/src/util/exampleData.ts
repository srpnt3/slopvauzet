import type { Course } from "../components/Search";

export const exampleCourses: Course[] = [
	{
		"course_id": "402-1701-00L",
		"title": "Physics I",
		"semester": "Autumn Semester 2025",
		"periodicity": "yearly recurring course",
		"language_of_instruction": "German",
		"comment": "A slow-paced week is offered in cw46.",
		"lecturers": [
			"K. Ensslin"
		],
		"classes": [
			{
				"type": "Lecture",
				"notes": "Findet im HPH G1 statt mit Videoübertragung Di 10-12 ins HCI G7 und Do 14-16 ins HCI J7",
				"hours_per_week": 4,
				"schedule": [
					{
						"venue": [
							"HCIG 7",
							"HPHG 1"
						],
						"day": "Tue",
						"time": "09:45-11:30"
					},
					{
						"venue": [
							"HCIJ 7",
							"HPHG 1"
						],
						"day": "Thu",
						"time": "13:45-15:30"
					},
					{
						"venue": [
							"HPHG 1"
						],
						"day": "20.10.",
						"time": "15:45-17:30"
					}
				]
			},
			{
				"type": "Exercise",
				"notes": "Zusätzlich wird das StudyCenter angeboten: http://studycenter.ethz.ch/",
				"hours_per_week": 2,
				"schedule": [
					{
						"venue": [
							"HCID 4",
							"HCID 6",
							"HCIE 2",
							"HCIE 8",
							"HCIF 2",
							"HCIJ 4",
							"HCIJ 8",
							"HCPE 47.3",
							"HCPE 47.4",
							"HILB 21",
							"HILC 10.2",
							"HILD 10.2",
							"HILD 60.1",
							"HILE 6",
							"HILE 7",
							"HILF 10.3",
							"HITF 32",
							"HITH 42",
							"HITJ 51",
							"HITJ 53",
							"HITK 51",
							"HITK 52",
							"HPKD 24.2",
							"HPKD 3",
							"HPLD 34",
							"HPTC 103"
						],
						"day": "Thu",
						"time": "11:45-13:30"
					}
				]
			}
		],
		"notes": "",
		"catalogue_data": {
			"description": "This course gives a first introduction to Physics with an emphasis on classical mechanics.",
			"learning_objectives": "Acquire knowledge of the basic principles regarding the physics of classical mechanics. Skills in solving physics problems."
		},
		"performance_assessment": [
			{
				"ects_credits": 7,
				"assessment_type": "session examination",
				"language_of_examination": "German",
				"repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
				"examination": "written 180 minutes",
				"additional_info": "Durch Bearbeitung der Übungsserien und Teilnahme an Kontrollfragen kann ein Bonus von maximal 0.25 Notenpunkten erarbeitet werden. Durch Bearbeitung der Übungsserien kann ein Bonus von maximal 0.15 Notenpunkten erarbeitet werden. Für eine erfolgreiche aktive Teilnahme wird erwartet, dass in jedem Semester 50% der Übungsserien selbständig bearbeitet und eingereicht wurden. Die Kontrollfragen werden in einen Notenbonus von maximal 0.1 umgerechnet. Die im Semester erreichten Punkte werden in einen Notenbonus von 0 bis 0.25 umgerechnet und anschliessend ungerundet zu der ungerundeten Note aus der Prüfung addiert. Der erreichte Notenbonus verfällt, sobald die Vorlesung neu gelesen wird.",
				"exam_aid": "Mathematische Formelsammlung wird in Moodle und an der Prüfung zur Verfügung gestellt, Übersetzungswörterbuch.",
				"assessment_description": "Performance assessment as a semester course"
			}
		],
		"offered_in": [
			{
				"program": "Computer Science Bachelor",
				"section": "Minor Courses",
				"type": "W"
			},
			{
				"program": "Interdisciplinary Sciences Bachelor",
				"section": "Compulsory Subjects First Year Examinations",
				"type": "O"
			},
			{
				"program": "Mathematics Bachelor",
				"section": "First Year Examination Block 1",
				"type": "O"
			},
			{
				"program": "Physics Bachelor",
				"section": "First Year Examination Block 1",
				"type": "O"
			}
		],
		"tags": [
			"physics",
			" high",
			" physic",
			" symmetry",
			" neutron",
			" standard",
			" experiment",
			" complementary",
			" energy"
		]
	},
	{
		"course_id": "227-0523-00L",
		"title": "Railway Systems I",
		"semester": "Autumn Semester 2025",
		"periodicity": "yearly recurring course",
		"language_of_instruction": "German",
		"comment": "",
		"lecturers": [
			"M. Meyer"
		],
		"classes": [
			{
				"type": "Mixture of lectures and exercises",
				"notes": "",
				"hours_per_week": 4,
				"schedule": [
					{
						"venue": [
							"LFWC 1"
						],
						"day": "Fri",
						"time": "08:15-12:00"
					}
				]
			}
		],
		"notes": "",
		"catalogue_data": {
			"description": "Basic characteristis of railway vehicles and their interfaces with the railway infrastructure:\n- Transportation tasks and vehicle types\n- Running dynamics\n- Mechanical part of rail vehicles\n- Brakes\n- Traction chain and auxiliary supply\n- Railway power supply\n- Signalling systems\n- Standards\n- Availability and safety\n- Traffic control and maintenance",
			"learning_objectives": "- Overview of the technical characteristics of railway systems\n- Know-how about the design and construction principles of rail vehicles\n- Interrelationship between different fields of engineering sciences (mechanics, electro and information technology, transport systems)\n- Understanding tasks and opportunities of engineers working in an environment which has strong economical and political boundaries\n- Insight into the activities of the railway vehicle industry and railway operators in Switzerland\n- Motivation of young engineers to start a career in the railway industry or with railway operators",
			"content": "EST I (Herbstsemester) - Begriffen, Grundlagen, Merkmale\n1 Einführung:\n1.1  Geschichte und Struktur des Bahnsystems\n1.2 Fahrdynamik\n2 Vollbahnfahrzeuge:\n2.3 Mechanik: Kasten, Drehgestelle, Lauftechnik, Adhäsion\n2.2   Bremsen\n2.3   Traktionsantriebssysteme \n2.4 Hilfsbetriebe und Komfortanlagen\n2.5 Steuerung und Regelung\n3 Infrastruktur:\n3.1  Fahrweg\n3.2 Bahnstromversorgung\n3.3 Sicherungsanlagen\n4 Betrieb:\n4.1 Interoperabilität, Normen und Zulassung\n4.2 RAMS, LCC\n4.3 Anwendungsbeispiele\nVoraussichtlich ein oder zwei Gastreferate\nGeplante Exkursionen:\nBetriebszentrale SBB, Zürich Flughafen\nReparatur und Unterhalt, SBB Zürich Altstetten\nFahrzeugfertigung, Stadler Bussnang",
			"lecture_notes": "Abgabe der Unterlagen (gegen eine Schutzgebühr) zu Beginn des Semesters. Rechtzeitig eingschriebene Teilnehmer können die Unterlagen auf Wunsch und gegen eine Zusatzgebühr auch in Farbe beziehen.",
			"prerequisites": "Dozent:\nDr. Markus Meyer, Emkamatik GmbH\nVoraussichtlich ein oder zwei Gastvorträge von anderen Referenten.\nEST I (Herbstsemester) kann als in sich geschlossene einsemestrige Vorlesung besucht werden. EST II (Frühjahrssemester) dient der weiteren Vertiefung der Fahrzeugtechnik und der Integration in die Bahninfrastruktur."
		},
		"performance_assessment": [
			{
				"ects_credits": 6,
				"assessment_type": "session examination",
				"language_of_examination": "German",
				"repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
				"examination": "oral 30 minutes",
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
				"program": "Electrical Engineering and Information Technology Master",
				"section": "Tracks (all): Electives",
				"type": "W"
			},
			{
				"program": "Mechanical Engineering Master",
				"section": "Core Courses",
				"type": "W"
			},
			{
				"program": "Spatial Development and Infrastructure Systems Master",
				"section": "Major in Transport Systems and Behaviour",
				"type": "W"
			}
		],
		"tags": [
			"numerical",
			" linear",
			" methods",
			" fourier",
			" transform",
			" algorithm",
			" direct",
			" non",
			" solution"
		]
	},
	{
		"course_id": "636-0007-00L",
		"title": "Computational Systems Biology",
		"semester": "Autumn Semester 2025",
		"periodicity": "yearly recurring course",
		"language_of_instruction": "English",
		"comment": "",
		"lecturers": [
			"J. Stelling"
		],
		"classes": [
			{
				"type": "Lecture",
				"notes": "",
				"hours_per_week": 3,
				"schedule": [
					{
						"venue": [
							"HGD 3.2"
						],
						"day": "Wed",
						"time": "14:15-17:00"
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
							"HGD 1.2"
						],
						"day": "Fri",
						"time": "10:15-12:00"
					}
				]
			}
		],
		"notes": "",
		"catalogue_data": {
			"description": "Study of fundamental concepts, models and computational methods for the analysis of complex biological networks. Topics: Systems approaches in biology, biology and reaction network fundamentals, modeling and simulation approaches (topological, probabilistic, stoichiometric, qualitative, linear / nonlinear ODEs, stochastic), and systems analysis (complexity reduction, stability, identification).",
			"learning_objectives": "The aim of this course is to provide an introductory overview of mathematical and computational methods for the modeling, simulation and analysis of biological networks.",
			"content": "Biology has witnessed an unprecedented increase in experimental data and, correspondingly, an increased need for computational methods to analyze this data. The explosion of sequenced genomes, and subsequently, of bioinformatics methods for the storage, analysis and comparison of genetic sequences provides a prominent example. Recently, however, an additional area of research, captured by the label \"Systems Biology\", focuses on how networks, which are more than the mere sum of their parts' properties, establish biological functions. This is essentially a task of reverse engineering. The aim of this course is to provide an introductory overview of corresponding computational methods for the modeling, simulation and analysis of biological networks.                                                                                                                                                                                                 We will start with an introduction into the basic units, functions and design principles that are relevant for biology at the level of individual cells. Making extensive use of example systems, the course will then focus on methods and algorithms that allow for the investigation of biological networks with increasing detail. These include (i) graph theoretical approaches for revealing large-scale network organization, (ii) probabilistic (Bayesian) network representations, (iii) structural network analysis based on reaction stoichiometries, (iv) qualitative methods for dynamic modeling and simulation (Boolean and piece-wise linear approaches), (v) mechanistic modeling using ordinary differential equations (ODEs) and finally (vi) stochastic simulation methods.",
			"literature": "U. Alon, An introduction to systems biology. Chapman & Hall / CRC, 2nd ed., 2019.\nZ. Szallasi et al. (eds.), System modeling in cellular biology. MIT Press, 2010.\nB. Ingalls, Mathematical modeling in systems biology: an introduction. MIT Press, 2013"
		},
		"performance_assessment": [
			{
				"ects_credits": 6,
				"assessment_type": "session examination",
				"language_of_examination": "English",
				"repetition": "The performance assessment is offered every session. Repetition possible without re-enrolling for the course unit.",
				"examination": "written 120 minutes",
				"exam_aid": "keine",
				"assessment_description": "Performance assessment as a semester course"
			}
		],
		"offered_in": [
			{
				"program": "Biology Master",
				"section": "Elective Compulsory Master Courses I: Computation",
				"type": "W"
			},
			{
				"program": "Biology Master",
				"section": "Elective Compulsory Master Courses",
				"type": "W"
			},
			{
				"program": "Chemical and Bioengineering Master",
				"section": "Biochemical Engineering",
				"type": "W"
			},
			{
				"program": "Computational Biology and Bioinformatics Master",
				"section": "Biosystems",
				"type": "W"
			},
			{
				"program": "Doctorate Biosystems Science and Engineering",
				"section": "Subject Specialisation",
				"type": "W"
			},
			{
				"program": "Electrical Engineering and Information Technology Master",
				"section": "Specialisation Courses",
				"type": "W"
			},
			{
				"program": "Computer Science Bachelor",
				"section": "Minor Courses",
				"type": "W"
			},
			{
				"program": "Mathematics Master",
				"section": "Biology",
				"type": "W"
			},
			{
				"program": "Computational Science and Engineering Bachelor",
				"section": "Biology",
				"type": "W"
			},
			{
				"program": "Computational Science and Engineering Master",
				"section": "Biology",
				"type": "W"
			},
			{
				"program": "Robotics, Systems and Control Master",
				"section": "Core Courses",
				"type": "W"
			}
		],
		"tags": [
			"biology",
			" genetic",
			" evolution",
			" evolutionary",
			" biological",
			" molecular",
			" gene",
			" diversity",
			" life"
		]
	},
]