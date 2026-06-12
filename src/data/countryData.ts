export const countryData: Record<string, any> = {
  France: {
    code: 'FRA',
    name: 'France',
    credit: 'This factsheet was produced by Ecoprod.',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Green production is progressing gradually, driven by increasing demand and a committed group of stakeholders. The CNC advances the film industry through its Action Plan, which mandates carbon calculation. Broadcasters and production companies increasingly commit to green production standards.',
        },
        decarbonizationPlan: {
          label: 'Decarbonization plan',
          content:
            "France targets carbon neutrality by 2050 with a 40% emission reduction by 2030 and a 50% energy consumption cut by 2050 (2015 Energy Transition Act). The 2020 Circular Economy Law (AGEC) bans single-use plastics, promotes recycling, and enforces Extended Producer Responsibility (EPR).\n\nThe 2016 Biodiversity Law enhances habitat protection, and the 1996 LAURE Law regulates air quality. Water quality is governed by the EU Water Framework Directive, while urban planning follows the Grenelle Environment Laws promoting sustainable development.",
        },
        laws: {
          label: 'Relevant national legislation',
          content:
            '• Carbon Footprint Reduction: Companies must comply with national and EU greenhouse gas emission reduction standards, including the Energy Transition Law.\n• Waste Management: Productions are required to sort and recycle all waste generated on set in compliance with the AGEC Law.\n• CSR Reporting: Companies with over 500 employees must publish detailed annual reports on their social, environmental, and economic impacts (EU Directive 2014/95/EU).\n• Industrial Emissions Directive compliance for large film industry infrastructures.',
        },
        socialLegislation: {
          label: 'Social legislation',
          content:
            '• Anti-discrimination compliance with French equality laws (Equality and Citizenship Law of 2017).\n• Working Conditions: Productions must adhere to the French Labor Code, which regulates working hours, health and safety standards.\n• Gender-based violence prevention: 2010 and 2014 laws address violence and equality.\n• CNC encourages crew parity with financial bonuses and mandatory sexual/moral harassment training.',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            "The CNC's eco-conditionality requires two carbon footprints (pre-shoot and post-production) for all funded projects, fiction and documentary, feature films and short films, series or standalone (since 2024 for live-action, since 2025 for animation/video games).\n\nRegional incentives:\n• Île-de-France: €23,000-€75,000 green bonuses for innovative eco-practices.\n• Corsica: Eco-bonus for compliant productions.\n• Grand Est: Carbon footprint and environmental action plan required.\n• Southern Region: Provisional and final carbon footprint assessments mandatory.",
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• Ecoprod: Association bringing together companies and professionals of the industry, developing tools such as a free carbon calculator, a label, training and studies.\nhttps://www.ecoprod.com/fr/\n• RESSAC: National network collecting and recirculating set design/costumes through multiple resourceries (La Ressourcerie Culturelle, ArtStock, La Ressourcerie du Cinéma, La Caverne, La Réserve des Arts).\n• Concrete example (solar): Bonne Pioche\'s feature "C\'est le monde à l\'envers!" (2024, Nicolas Vanier) powered its base camp with on-site solar panels and a battery storage station (supplied by TYVA Energie) and ran electric vehicles, to avoid diesel generators: https://bonnepioche.fr/',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        trainTravel: {
          label: 'Train transport (4/5)',
          content:
            'France has one of the most extensive and efficient rail networks in Europe, with high-speed TGV services connecting major cities like Paris, Lyon, Marseille, and Bordeaux. Regional trains (TER) and Intercity services (Intercités) cover smaller towns and rural areas. The integration with European networks and extensive urban rail systems (Paris Metro, RER) further enhance accessibility.',
        },
        electricCars: {
          label: 'Electric cars (4/5)',
          content:
            'Major car rental companies (Hertz, Europcar, Avis) offer electric vehicles, especially in larger cities. Specialized services like Bluecity and Share Now provide short-term electric car rentals. The growing network of charging stations supports this trend, though availability in rural areas remains limited.\n\nCharging stations map: https://fr.chargemap.com/map',
        },
        gridConnection: {
          label: 'Grid connection',
          content:
            'France has a well-developed grid available for film productions, particularly in major cities (Paris, Lyon, Marseille) but also smaller cities. Less carbon-intensive due to nuclear power. In more remote or less-developed areas, access to reliable grid connections can be a challenge.\n\nEnergy mix source: https://ourworldindata.org/energy/country/france (Our World in Data).',
        },
        wasteManagement: {
          label: 'Waste management rules',
          content:
            'Mandatory sorting; companies producing more than 1,100 liters of waste per week must use an approved service provider. Separate systems exist for packaging, electronic waste, hazardous waste, and construction waste. Authorities conduct inspections, and non-compliance can result in fines. Businesses must report their waste management practices.',
        },
        socialRules: {
          label: 'Social rules (gender equality, inclusion)',
          content:
            'Comprehensive legislation combats gender-based violence, promotes inclusion, and advances gender equality. Key laws include the 2010 law on violence against women and the 2014 law for real equality between women and men. The CNC promotes gender parity in film crews through a financial bonus for gender-balanced teams. Anti-discrimination laws protect against bias based on gender, sexual orientation, and disability.',
        },
        otherFacts: {
          label: 'Other important facts',
          content:
            'Labels:\n• Ecoprod Label with independent audit certification.\n• Afnor Spec 2308 guidelines.\n\nCertified Calculators:\n• Carbon\'Clap (Ecoprod)\n• SecoSet (Flying Secoya)\n• Carbon\'Stage (Greenly)\n• Carbulator (animation)',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        caseStudies: {
          label: 'Case studies & reports',
          content:
            '• CNC, "Écologie et développement durable" dossier: studies, reports and the eco-conditionality action plan: https://www.cnc.fr/cinema/dossiers/ecologie-et-developpement-durable_1451402',
        },
        greenConsultants: {
          label: 'Green consultants',
          content:
            'Hireable eco-coordinators (éco-référents) and the directories to find them:\n• ACCEPTE: French association of eco-production coordinators (éco-référents), working to structure and professionalise the role; its members are bookable green coordinators.\n• The Ecoprod directory of green professionals and consultants: https://ecoprod.com/annuaire/\n• A list of green professionals by Nausicä: https://nausicacinemadurable.fr/2023/04/25/charges-deco-production/',
        },
        consultancies: {
          label: 'Sustainability consultancies',
          content:
            'Private firms offering green-production consultancy:\n• Flying Secoya: green consultancy for productions, with a carbon calculator and a label: https://www.flyingsecoya.com/\n• A Better Prod: green consultancy for productions: https://www.abetterprod.com/',
        },
        serviceProviders: {
          label: 'Service providers',
          content:
            '• A list of green service providers by Ecoprod: https://ecoprod.com/annuaire/\n• A list of green service providers by Nausicä: https://nausicacinemadurable.fr/2023/06/13/liste-de-prestataires-eco-responsables-de-laudiovisuel-en-france/\n• A list of green service providers and other initiatives by the CUT! Collective: https://www.cut-collectif.fr/les-actions/',
        },
        trainings: {
          label: 'Trainings',
          content:
            '• Ecoprod provides training for professionals of the industry, covered by AFDAS at 100%, https://ecoprod.com/nos-formations/\n• Ecoprod proposes long training over several weeks: "Green management on set", "Implementing a green production", "Green digital production", "Green set design".\n• The CST proposes short training sessions on climate change, carbon footprint measurement, responsible production, and CSR fundamentals.\n• As part of the France 2030 plan, green production training courses are deployed in several film schools.',
        },
        tools: {
          label: 'Calculators & tools',
          content:
            "The CNC has certified 3 calculators:\n• Carbon'Clap, free calculator powered by Ecoprod: https://ecoprod.com/carbon-clap/\n• SecoSet powered by Flying Secoya: https://www.flyingsecoya.com/\n• Carbon'Stage powered by Greenly: https://greenly.earth/fr-fr/climate-app-store/calculateur-production-audiovisuelle",
        },
        networks: {
          label: 'Networks for professionals',
          content:
            '• Les Toiles Vertes: a network of French "green professionals" of the film industry.\n• Ecoprod: a network of 400+ companies.\n• The CUT! Collective: a collective of professionals of the industry.',
        },
      },
    },
  },

  Belgium: {
    code: 'BEL',
    name: 'Belgium',
    credit: null,
    sources: 'Wallimage, VAF, screen.brussels',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Belgium is federal, so green production is organised regionally, each fund with its own scheme. Adoption is growing steadily, driven by regional film funds that award bonus points for sustainability plans and for engaging eco-consultants. There is no single national framework; productions follow the rules of the region funding them.',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            'Wallonia, Wallimage runs "Green Film Wallonia": a green-filming plan earns extra points in co-production selection sessions, and additional costs of eco-responsible measures are eligible for funding (on average ~50% covered). Wallimage is developing a Green Manager training scheme.\n\nFlanders, the Flanders Audiovisual Fund (VAF) created the "eMission" label for sustainable productions; sustainable action is a formal requirement within its creation support.\n\nBrussels-Capital Region, screen.brussels supports a sustainable-filming pilot with eco-consultants and awards up to 2 bonus points (1 if the company has an environmental consultant, 1 if it holds the regional "Ecodynamic" label). It published a guide to environmentally friendly filming in the region.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• Wallimage: Green Film Wallonia: https://www.wallimage.be/en/\n• Flanders Audiovisual Fund (VAF): eMission label: https://www.vaf.be/en\n• screen.brussels: Eco-filming: https://screen.brussels/en/eco-filming\n\nBelgian funds take part in European green-screen cooperation between film commissions.',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Belgium\'s grid is relatively low-carbon: nuclear supplied around 42% of electricity in 2024, with wind and solar growing fast; gas covers much of the rest.\n\nEnergy mix source: https://ourworldindata.org/energy/country/belgium (Our World in Data).',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        tools: {
          label: 'Calculators & tools',
          content:
            '• Green Toolkit Film&TV: https://www.greentoolkit-filmtv.eu/database/',
        },
      },
    },
  },

  Canada: {
    code: 'CAN',
    name: 'Canada (Québec)',
    credit: 'This factsheet was produced by Valérie Diagneault from On tourne vert - Rolling Green.',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Most provinces operate programs similar to Rolling Green, focusing on local and international productions in Quebec.\n\n2023 Telefilm Canada Survey Results:\n• 94% consider Sustainable Green Practices (SGPP) important in their workplace.\n• 33% received support for implementing SGPP.\n• 30% use carbon calculators in the workplace.\n• 26% attended sustainable production training in the last three years.\n\nQuebec Worker Awareness:\n• 92% focus on reducing waste (e.g., going paperless, reusable bottles).\n• 85% engage in recycling/composting.\n• 83% opt for greener transportation (e.g., electric cars, hybrid).\n• 75% repurpose or donate materials (sets, costumes, food).\n\nRolling Green has accredited 105 productions since 2021 with annually increasing applications. Quebec leads Canada alongside Ontario and British Columbia but lags Europe in incentives, standards, and training.',
        },
        laws: {
          label: 'Relevant national legislation',
          content:
            'Environmental Laws:\n• La Loi sur la qualité de l\'environnement (LQE) - governs environmental authorizations and protections.\n• Règlement interdisant les plastiques à usage unique - federal regulation banning single-use plastics.\n• Montréal Plan Climat 2020-2030 - climate action roadmap.\n• Feuille de route Montréalaise en économie circulaire 2024-2030.\n\nFederal Social Laws:\n• Canadian Charter of Rights and Freedoms.\n• Canadian Human Rights Act.\n• Employment Equity Act.\n• Accessible Canada Act.\n• Final Report of the Truth and Reconciliation Commission of Canada.\n\nProvincial Social Laws:\n• Charter of Human Rights and Freedoms.\n• Occupational Health and Safety Act.\n• Act Respecting Equal Access to Employment in Public Bodies.\n• Act to Prevent and Fight Sexual Violence in Higher Education Institutions.',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            'No specific regulations exist. Since 2022, Production Program applicants must submit sustainable production plans. Téléfilm Canada offers a Sustainable Development Plan for Production template.\n\nMay 2024: Téléfilm Canada launched Phase 2 of its Sustainable Development Action Plan, aiming to further integrate sustainable development into production practices.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            'Canada-wide programs:\n• Quebec: Rolling Green / On Tourne Vert.\n• British Columbia: Green Spark Group and Creative BC.\n• Ontario: Ontario Green Screen.\n• Nova Scotia: Screen Nova Scotia.\n\nSeptember 2024: A coalition called Cadre vert was formed by major Canadian organizations in content creation and funding to reduce the environmental impact of the audiovisual industry sustainably.',
        },
        decarbonizationPlan: {
          label: 'Decarbonization plan',
          content:
            'Quebec relies on hydroelectric power for clean electricity with minimal carbon footprint. The 2019-2024 action plan by Recyc-Québec outlines strategies to improve waste management. Montreal enforces composting and recycling regulations varying by district.',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        trainTravel: {
          label: 'Train transport',
          content:
            'Underdeveloped, expensive, and inefficient for production travel needs.',
        },
        electricCars: {
          label: 'Electric cars',
          content:
            'Increasingly available in Quebec due to hydroelectric power. Challenges: lack of EVs suited to audiovisual production needs and higher rental costs. Roulez vert program offers financial incentives. Quebec\'s Electric Vehicle Charging Strategy targets 116,000+ public charging stations by 2030.',
        },
        gridConnection: {
          label: 'Grid connection',
          content:
            'Quebec relies on hydroelectric power for clean electricity with minimal carbon footprint. However, productions face logistical grid connection challenges, leading to diesel generator use. Rolling Green opened discussions with Hydro-Québec and Montreal to enable grid connections in popular shooting areas.\n\nEnergy mix source: https://ourworldindata.org/energy/country/canada (Our World in Data).',
        },
        wasteManagement: {
          label: 'Waste management rules',
          content:
            'Montreal enforces composting and recycling regulations varying by district. Productions must adapt to localized rules for compostable and recyclable materials. Recyc-Québec provides resources including an eco-center directory for bulky and hazardous waste.',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        caseStudies: {
          label: 'Case studies & reports',
          content:
            '• On tourne vert / Rolling Green, guides, tools and production case studies: https://ontournevert.com/en/',
        },
        greenConsultants: {
          label: 'Green consultants',
          content:
            'No existing comprehensive list of trained professionals. Many foreign and local productions need help preparing sustainable plans. Currently considering a training program providing certifications to identify qualified green consultants.',
        },
        serviceProviders: {
          label: 'Service providers',
          content:
            '• On Tourne Vert Directory - list of eco-responsible service providers.',
        },
        trainings: {
          label: 'Trainings',
          content:
            'Training program for sustainable production supported by SODEC, INIS, AQPM, and QFTC: Parcours On tourne vert x SODEC.',
        },
        tools: {
          label: 'Calculators & tools',
          content:
            "• Albert Carbon Calculator - measures production carbon footprints.\n• Carbon'Clap - free calculator powered by Ecoprod.\n• Additional tools available on Green Toolkit Film&TV database.",
        },
        networks: {
          label: 'Networks to join',
          content:
            '• LinkedIn: On tourne vert company page.\n• Facebook: ontournevert.\n• Instagram: ontournevert.',
        },
      },
    },
  },

  Germany: {
    code: 'DEU',
    name: 'Germany',
    credit: 'This factsheet was produced by Birgit Heidsiek, founder of Green Film Shooting.',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Effective July 1, 2023, all film and TV productions receiving public funding in Germany must follow ecological production standards. Standards include 39 requirements (22 mandatory), covering all production stages regardless of company location, with up to five deviations permitted.\n\nFive standard categories:\n1. General requirements\n2. Energy use\n3. Transportation\n4. Accommodations and catering\n5. Material use',
        },
        decarbonizationPlan: {
          label: 'Decarbonization plan',
          content:
            'Federal Climate Change Act (renewed July 17, 2024) targets: 65% emissions reduction by 2030, 88% by 2040 (vs. 1990 levels), carbon neutrality by 2045.\n\nElectricity goals by 2030: minimum 80% from renewables, 215 GW photovoltaic, 115 GW onshore wind, 30 GW offshore wind.',
        },
        laws: {
          label: 'Relevant national legislation',
          content:
            '• Fuel Emissions Trading Act (BEHG): National emissions trading system since 2021, setting CO2 pricing for fuels in building and transportation sectors. Starting price: €25/ton (2021), transitioning to market-based pricing from 2027.\n• Circular Economy Act: Waste prevention, reuse, recycling, energy recovery, and disposal priorities.\n• 2017 Commercial Waste Ordinance: Requires separate collection of paper, glass, plastic, metal, wood, textiles, organic waste. Entities generating over 50 kg weekly must document management.',
        },
        socialLegislation: {
          label: 'Social legislation & diversity',
          content:
            'Women comprise 47% of central roles, men 53%. Women over 50 represent only 30% of key roles. Women direct 25% of films; write 24%.\n\nSince 2015, FFA collects gender data in funding applications. Funding decision committees now fully gender-equitable. MOIN Film Fund uses a "Diversity Checklist" for applications. "OMNI Inclusion Data" platform tracks industry diversity with GDPR-compliant protection.',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            'Management and line producers must sign statements confirming adherence. A green consultant oversees compliance. CO2 estimation required before funding; measurement post-production using approved calculator. Final compliance report mandatory.\n\nEnergy: Certified green energy for all production sites. Generators only when grid access unavailable within 100 meters. LED required in studios; incandescent and halogen prohibited.\n\nTransportation: Flights prohibited for trips doable by train under 5 hours; private planes banned unless on-screen. At least one-third of vehicles must be CO2-efficient (electric/hybrid).\n\nAccommodations & Catering: At least 50% of accommodations in eco-certified establishments within 15 km. Minimum 50% locally sourced food or 33% organic. At least one vegetarian meal weekly; disposable tableware prohibited.\n\nMaterials: Rechargeable batteries mandatory. New wood must be FSC/PEFC certified. Costumes reused, rented, or second-hand. Paper: minimum 90% recycled fibers.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            'All German Film Commissions have agreed to apply the ecological standards:\nBaden-Württemberg, Bavaria, Berlin, Brandenburg, Bremen, Hamburg, Hessen, Mecklenburg-Vorpommern, Lower Saxony, North Rhine-Westphalia, Saarland, Saxony-Anhalt, Schleswig-Holstein, Thuringia.',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        trainTravel: {
          label: 'Train transport',
          content:
            'In Germany, it is possible to travel almost anywhere by train. Depending on the transfer options, travelling by train is not in any case the fastest solution.',
        },
        electricCars: {
          label: 'Electric cars',
          content:
            'The availability of electric cars is still low. Therefore it is not possible to require from productions to use electric cars only.',
        },
        gridConnection: {
          label: 'Grid connection',
          content:
            'Grid availability varies by city and rural areas. Grid connections require advance ordering, limiting production flexibility.\n\nEnergy mix source: https://ourworldindata.org/energy/country/germany (Our World in Data).',
        },
        wasteManagement: {
          label: 'Waste management rules',
          content:
            'Circular Economy Act priorities: waste prevention, reuse, recycling, energy recovery, disposal.\n\n2017 Commercial Waste Ordinance requires separate collection: paper, glass, plastic, metal, wood, textiles, organic waste. Entities generating over 50 kg weekly must document management.\n\nElectrical & Battery Waste: WEEE Directive enforces producer responsibility and free consumer returns. Packaging & Batteries Acts require manufacturers to fund disposal costs.',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        caseStudies: {
          label: 'Case studies & reports',
          content:
            '• Green Film Shooting, European magazine documenting green production cases (English): https://greenfilmshooting.net/blog/en/',
        },
        greenConsultants: {
          label: 'Green consultants',
          content:
            'Green Consultants Association membership list with search tool:\nhttps://bvgcd.de/members/',
        },
        serviceProviders: {
          label: 'Service providers',
          content:
            '• Green Film Shooting Green Map: https://greenfilmshooting.net/blog/en/green-map/\n• MFG Green Shooting Service Directory: https://greenshooting.mfg.de/dienstleisterverzeichnis/',
        },
        trainings: {
          label: 'Trainings',
          content:
            '• Hochschule der Medien Stuttgart & MFG Baden-Württemberg: 14-16 weeks certification for green consultants. Topics: sustainability principles, environmental management, green film production, energy, transport, waste, carbon calculation. Cost: €1,800, https://www.zertifikat-green-consulting.de/\n• Green Consultant Film & TV IHK: Four-module online training on production planning, budgeting, sustainability measures. Cost: €2,400, https://www.ihk-akademie-muenchen.de/csr-nachhaltigkeit/green-consultant-film-tv/',
        },
        tools: {
          label: 'Calculators & tools',
          content:
            '• Sustainability in Film - FFA: https://www.ffa.de/\n• Ecological Production Standards (English Version): https://www.ffa.de/\n• Green Motion Label: https://www.ffa.de/\n• Carbon Calculator: https://go.greenshooting.de/de_DE/\n• Green Toolkit Film&TV: https://www.greentoolkit-filmtv.eu/database/',
        },
        networks: {
          label: 'Networks to join',
          content:
            '• Green Film Pro Facebook Group: https://www.facebook.com/groups/GreenFilm.pro/about/\n• Green Film Shooting Facebook Page: https://www.facebook.com/people/Greenfilmshooting_en/1',
        },
      },
    },
  },

  'Czech Republic': {
    code: 'CZE',
    name: 'Czech Republic',
    credit: 'This factsheet was produced by Greenfilming.cz.',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Green production has advanced over four years. In 2020, the Czech Producers Association (APA) launched greenfilming.cz to raise awareness. TV NOVA integrated sustainable practices, becoming a leader in green filming.\n\n2023 survey: 90% address waste sorting, 81% focus on materials, 78% on office operations. Twenty productions adopted green production policies; three have dedicated sustainability roles.\n\nMain challenge: resistance to these practices, despite growing demand, particularly from international productions.',
        },
        laws: {
          label: 'Relevant national legislation',
          content:
            'Waste Management: Czech Waste Management Act (Act 541/2020 Sb) mandates waste prevention and encourages reuse, recycling, or energy recovery.\n\nCSR/ESG Reports: Large companies must publish annual reports on social, environmental, and economic impact (EU Directive 2014/95/EU).\n\nAnti-Discrimination Act 198/2009 Sb - guarantees equal treatment. Czech Labour Code - regulates working hours, health and safety. Gender Equality Strategy 2021-2030.',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            'Newly established Principles of sustainable filmmaking represent basic recommendations to reduce negative environmental impact. Czech producers can voluntarily adhere at fundamental or extended implementation levels.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            'Czech Platform for Sustainable Audiovisual Production, www.greenfilming.cz\n\nMemorandum signatories: APA, ARAS, Czech Television, FTV Prima, TV Nova, FAMU.\n\nAdditional stakeholders: Czech Film Fund, Creative Europe, Studio Beep, b.green, Planet A Collective, AKA.',
        },
        decarbonizationPlan: {
          label: 'Decarbonization plan',
          content:
            'National Energy and Climate Plan targets 30% greenhouse gas reduction by 2030 (vs. 2005), with 44 million tonnes CO2 equivalent reduction. By 2050, a 34% reduction in emissions is expected.\n\nState Environmental Policy for 2030 (perspective to 2050) includes protection goals for water, air, hazardous substances, and biodiversity.',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        trainTravel: {
          label: 'Train transport',
          content:
            'The Czech Republic has a fairly extensive rail network, but some local lines are slow, and punctuality of trains can sometimes be an issue.',
        },
        electricCars: {
          label: 'Electric cars',
          content:
            'Over 16,000 electric cars on Czech roads. Approximately 3,650 public charging points available. Electric and hybrid cars available for rent. Map of charging stations: https://fdrive.cz/mapa-nabijecich-stanic/',
        },
        gridConnection: {
          label: 'Grid connection',
          content:
            'Connection to the power grid is generally good, but remote locations can pose challenges. In Prague, it is now easier to get a temporary connection thanks to PRE (Prague Energetic) which allows the application to be submitted digitally online.\n\nEnergy mix source: https://ourworldindata.org/energy/country/czechia (Our World in Data).',
        },
        wasteManagement: {
          label: 'Waste management rules',
          content:
            'Companies must classify waste by type and prove handover recipient. More than 600 kg hazardous waste or 100 tonnes other waste per year requires reporting.\n\nSeparate systems for paper, plastic, glass, cans, compost, cooking oils, drugs, packaging, electronic waste, hazardous waste, construction waste.\n\nUseful contacts:\n• Directory how to separate waste: https://www.samosebou.cz/kampatri/\n• Art Re Use: https://www.artreuse.cz/\n• ReUse Federation: https://www.reusefederace.cz/',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        consultancies: {
          label: 'Sustainability consultancies',
          content:
            '• b.green - founded by Eva Dvořáková Pérez.\n• Planet A Collective - led by Adam Karásek.',
        },
        serviceProviders: {
          label: 'Service providers',
          content:
            'No comprehensive list yet. Greenfilming.cz has started to collect such information and the Czech Platform has created a directory as one of its goals.',
        },
        trainings: {
          label: 'Trainings',
          content:
            'FAMU announced the Green Deal project to support sustainable development in the audiovisual industry. By 2025/2026, courses for students and professionals. Currently, a semester Greenfilming course at FAMU by Michaela Rýgrová.\n\nOne-off workshops and modules organised by FAMU and APA.',
        },
        tools: {
          label: 'Calculators & tools',
          content:
            'Different calculators and tools are available on Green Toolkit Film&TV:\nhttps://www.greentoolkit-filmtv.eu/database/?_categories=carbon-calculator',
        },
        networks: {
          label: 'Networks to join',
          content:
            '• Greenfilming.cz: https://www.facebook.com/greenfilming.cz\n• Green filming in Czech and Slovak republic (Facebook group): https://www.facebook.com/groups/249341536272336',
        },
      },
    },
  },

  Denmark: {
    code: 'DNK',
    name: 'Denmark',
    credit: 'This factsheet was produced by Anne Helvig Frost, Laura Kornerup Jensen (SF Studios) and Caroline Gjerulff (BFTP).',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Green production is steadily advancing, propelled by growing demand and dedicated stakeholders such as broadcasters, film funds and leading production companies with dedicated sustainability managers.\n\nProductived dialogue occurs across the value chain. Tailored trainings and seminars are organized for specific departments (planning, reporting, circular economy, green manager roles, conscious costume design).\n\nYearly 1-week Green Manager course at the National Film School of Denmark. New collaborations on environmental budgeting and green storytelling.\n\nThe Nordic Ecological Standard (NES), adapted from the German Ecological Standard, was launched in September 2025 and will be effective from 2027 in all Nordic countries.',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            'Currently no eco-bonuses. However, broadcasters demand sustainability plans and carbon budgets before greenlighting productions, and carbon reports after. Some arrangements withhold final 10% payment until carbon report delivery.\n\nBFTP (Sustainable film and TV production), cooperation between all Danish financing partners: The Danish Film Institute, broadcasters, regional funds, Danish Producers\' Association. Deliverables: common strategy, green production handbook, adapted certification, sustainability plan templates, seminars and trainings.\n\nThe Green Producers Club supports cultural and creative industries in achieving Paris Agreement goals. GPT (Green Producers Tool) is a research-based climate tool aligned with the GHG Protocol.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            'BFTP Alliance Partners: TV2, DR, The Danish Film Institute, Viaplay, Warner Bros/Discovery, Producer association, Film Fyn, West Danish Film Fund.\n\nThe Danish Film Institute and Producers Association emphasize social aspects including diversity, security, and working environment courses.',
        },
        decarbonizationPlan: {
          label: 'Decarbonization plan',
          content:
            'Danish Climate Act (2020): Denmark must reduce greenhouse gas emissions by 70% by 2030 (vs. 1990) and be climate-neutral by 2050 at the latest.\n\nGuiding principles: cost-effective transition, maintaining strong welfare society, real domestic reductions (not moving emissions outside Denmark).',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        trainTravel: {
          label: 'Train transport (3/5, 5/5 in Copenhagen)',
          content:
            'Denmark has an efficient rail system connecting the biggest cities. Copenhagen region has vast opportunities for regional trains and S-trains. The 3 largest cities offer fast, easy travel via subway, buses, trams, and bicycles. On productions in greater Copenhagen 50% of the crew can easily bike.',
        },
        electricCars: {
          label: 'Electric cars (4/5, 5/5 in Copenhagen)',
          content:
            'Major Danish car rentals (Europcar, Avis) offer both electric cars and sprinter vans.\n\nCharging info: https://chargefinder.com/dk',
        },
        gridConnection: {
          label: 'Grid connection',
          content:
            'Denmark maintains a highly developed and reliable electricity grid. Many places it is possible to get connected to 16 amp. Wind power accounts for around 50% of Denmark\'s electricity generation. Strong interconnections with neighboring countries through Nord Pool power market.\n\nEnergy mix source: https://ourworldindata.org/energy/country/denmark (Our World in Data).',
        },
        wasteManagement: {
          label: 'Waste management rules',
          content:
            'Required sorting: Paper, Cardboard, Plastic & Cartons, Glass, Metal, Bio Waste, Wood, Electronic Waste (WEEE), Hazardous Waste, Textiles, Residual Waste.\n\nFilmservice.dk provides studio and location shoot waste management setup, waste pickup, weighing, and reports.\n\nDanish Environmental Protection Agency: https://mst.dk',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        caseStudies: {
          label: 'Case studies & reports',
          content:
            '• BFTP (Sustainable Film and TV Production): green production handbook, templates and case studies: https://bftp.dk',
        },
        greenConsultants: {
          label: 'Green consultants',
          content:
            'Contact BFTP organization, which hosts network meetings for green consultants.\n\nFull-time consultants:\n• BFTP: Caroline Gjerulff (cg@visiondenmark.dk), Laura Kornerup (lk@visiondenmark.dk).\n• SF Studios / NEMA: Anne Helvig Frost (ahn@sfstudios.dk).\n• Green Producers Club: Ege Heckmann (ege@greenproducersclub.dk).\n• DR Public Broadcaster: Pia Haldorsson (piah@dr.dk).\n\nOthers: TV2, Nordisk Film, Zentropa, Cosmo Film, University of Southern Denmark, National Film School, Danish Film Institute.',
        },
        serviceProviders: {
          label: 'Service providers',
          content:
            'No dedicated sustainable service providers in Denmark, but most follow requests from sustainability consultants to meet demands for environmentally friendly supplies.',
        },
        trainings: {
          label: 'Trainings',
          content:
            '• BFTP: 8 full-day training sessions for ~100 line producers and production personnel. ~60 people registered for CO2 calculation courses.\n• The National Film School of Denmark: 1-week Green Management course once a year, up to 16 people trained each year.\n• BFTP hosted major inspiration seminars for the industry.',
        },
        tools: {
          label: 'Calculators & tools',
          content:
            '• Green Toolkit Film&TV: https://www.greentoolkit-filmtv.eu/database/?_categories=carbon-calculator\n• BFTP website (bftp.dk): handbooks, templates, case studies.',
        },
        networks: {
          label: 'Networks to join',
          content:
            '• Bæredygtigere filmarbejder (more sustainable filmworkers) - Facebook group.\n• Green Profiles Denmark (Grønne profiler i film-/tv-branche).\n• Bæredygtigere kostumenetværk (more sustainable costume community) - Facebook group.\n• NEMA (Nordic Eco Media Alliance).',
        },
      },
    },
  },

  Iceland: {
    code: 'ISL',
    name: 'Iceland',
    credit: 'This factsheet was produced by Sigríður Rósa Bjarnadóttir, Karólína Stefánsdóttir, Heather Millard (USE SEE ehf) and Green Producers Club Iceland.',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'The Icelandic Film Policy 2020-2030 promotes sustainable filmmaking. All applicants to the Icelandic Film Centre must submit sustainability plans.\n\nThe Icelandic Film Centre launched a one-year pilot program with the Green Producers Club to collect carbon emissions data. Notable productions include The Mountain (2023, Green Film Certification) and True Detective: Night Country (2023, Gold EMA Seal).\n\nChallenge: island status creates barriers, high reliance on imports and limited availability of specific services.',
        },
        laws: {
          label: 'Relevant national legislation',
          content:
            '• Film and Television Reimbursement Act No. 43/1999.\n• Film Law, Act No. 137/2001.\n• EU Regulation CSRD (Icelandic law No. 25/2023): effective 2025.\n\nGender equality laws:\n• Act on Equal Status and Equal Rights Irrespective of Gender, No. 150/2020.\n• Act on the Administration of Matters Concerning Equality, 151/2020.',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            'Environmental criteria can earn bonus points in cultural testing but remain non-mandatory. Emission calculations will likely become mandatory within 1-2 years per EU CSRD requirements.\n\nIcelandic Film Centre requires sustainability and social sustainability strategies; evaluates gender equality. Tax Reimbursement currently has no sustainability requirements.',
        },
        decarbonizationPlan: {
          label: 'Decarbonization plan',
          content:
            'Iceland ratified the Paris Agreement (2016), committing to 55% emissions reduction by 2030 (vs. 2005) and carbon neutrality by 2040. The Film Policy 2020-2030 aligns with these targets.',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        trainTravel: {
          label: 'Train transport',
          content:
            'Not applicable, there are no trains in Iceland.',
        },
        electricCars: {
          label: 'Electric cars',
          content:
            'Limited availability through rentals; mostly hybrids, diesel, gas.',
        },
        gridConnection: {
          label: 'Grid connection',
          content:
            'All studios connected; rural access depends on local infrastructure.\n\nEnergy mix source: https://ourworldindata.org/energy/country/iceland (Our World in Data).',
        },
        wasteManagement: {
          label: 'Waste management rules',
          content:
            'Unified classification system implemented through the Fenúr initiative.',
        },
        otherFacts: {
          label: 'Filming in natural environments',
          content:
            'Iceland\'s volcanic landscapes are exceptionally fragile: the moss covering lava fields can take decades to a century to recover from a single tyre track or footprint. Off-road driving is illegal nationwide (punishable by fines or imprisonment), and filming or photography in protected areas requires a permit from the Environment Agency of Iceland (via island.is). Keep vehicles on marked roads, keep crews on established paths, and restore any disturbed ground.',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        greenConsultants: {
          label: 'Green consultants',
          content:
            'Three certified professionals trained via Hochschule Der Medien:\n• Sigríður Rósa Bjarnadóttir.\n• Karólína Stefánsdóttir.\n• Heather Millard.',
        },
        serviceProviders: {
          label: 'Service providers',
          content:
            '• Film in Iceland: production services.\n• Green Producers Club: sustainable practice network.',
        },
        trainings: {
          label: 'Trainings',
          content:
            'USE SEE: Offering sustainability courses for film crews from 2025 onwards.',
        },
        tools: {
          label: 'Calculators & tools',
          content:
            '• Green Producers Tool.\n• Elsa.\n• Green Toolkit Film&TV: https://www.greentoolkit-filmtv.eu/database/?_categories=carbon-calculator',
        },
        networks: {
          label: 'Networks to join',
          content:
            '• Green Producers Club Iceland.',
        },
      },
    },
  },

  Norway: {
    code: 'NOR',
    name: 'Norway',
    credit: 'This factsheet was produced by Mads Astrup Rønning from the Green Producers Club.',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Green production is gaining momentum due to demands from broadcasters, streamers, and film institutes. The Green Producers Tool is widely adopted by NRK, DR, TV4, TV2 Denmark, TV2 Norway, Viaplay, and major production companies.',
        },
        laws: {
          label: 'Relevant national legislation',
          content:
            '• CSRD adopted by Norwegian Parliament in June 2024.\n• Public procurement contracts must weight environmental sustainability at 30% when evaluating tenders.\n• Gender Equality and Anti-Discrimination Act.\n• Government plan combating gender-based violence.\n• Freedom to Roam (Friluftsloven): traditional right allowing access to public and private land for recreation. Land owner permission required for shooting.',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            'Productions must report environmental impact using The Green Producers Tool. Carbon emissions reporting increasingly required.\n\nFilm Tax Incentive allows tax deduction for qualifying production costs. Norwegian Film Institute (NFI) provides funding for sustainability-committed projects, offering 25% reimbursement on local spend for highest-ranking projects.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            'NFI developed sustainability guidelines promoting waste reduction, energy management, and environmentally friendly materials.\n\nThe Green Producers Club works in two key areas: knowledge sharing (The Club) and measurement (The Tool).\n\nRegional Film Commissions: Northern Norway, Western Norway, Oslo, Eastern Norway, Southern Norway, Bergen, Trøndelag, Møre og Romsdal, Svalbard.',
        },
        decarbonizationPlan: {
          label: 'Decarbonization plan',
          content:
            'Norway\'s Nature Diversity Act and Pollution Control Act are the primary legislations governing environmental protection. All activities must consider their environmental impact and minimize harm to ecosystems.',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        trainTravel: {
          label: 'Train transport',
          content:
            'Well-developed in southern and central regions, connecting Oslo, Bergen, Trondheim, and Stavanger. Railway does not extend north of Bodø; further north requires buses or ferries.',
        },
        electricCars: {
          label: 'Electric cars',
          content:
            'Available from Sixt, Hertz, Europcar, Avis, and GoGet car-sharing.\n\nEV Incentives: Norway offers exemptions from tolls, parking fees, and VAT for electric vehicles. Consider downloading PlugShare or ChargeMap apps.\n\nCharging networks: Norwegian Electric Vehicle Association, Recharge, Fortum Charge & Drive, Circle K, Tesla Supercharger.',
        },
        gridConnection: {
          label: 'Grid connection',
          content:
            'Generally manageable, varying by location. Key companies: Statkraft, BKK, Lyse, Elvia, NorgesEnergi, Omexom. Contact utility companies well in advance. Costs vary.\n\nEnergy mix source: https://ourworldindata.org/energy/country/norway (Our World in Data).',
        },
        wasteManagement: {
          label: 'Waste management rules',
          content:
            'Waste Regulations (Avfallsforskriften) require producers to manage waste responsibly with emphasis on recycling and waste reduction. Productions must sort waste into categories.\n\nKey companies: Norsk Gjenvinning, Ragn-Sells, Oslo Municipality.',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        greenConsultants: {
          label: 'Green consultants',
          content:
            '• Kristoffer Sindre Vittersø: kristoffer@vitterso.no\n• Oda Pedersen Taule: odaptaule@gmail.com\n• Are Syvertsen: are.syvertsen@gmail.com',
        },
        serviceProviders: {
          label: 'Service providers',
          content:
            '• Den nasjonale filmkommisjonen / The National Film Commission.\n• True North - full production support.\n• Lofoten Film - international productions in Lofoten.\n• Loop Film - works across Norway.\n• The Location Guide.',
        },
        tools: {
          label: 'Calculators & tools',
          content:
            '• Green Producers Tool (via Green Producers Club).\n• Green Toolkit Film&TV: https://www.greentoolkit-filmtv.eu/database/?_categories=carbon-calculator',
        },
        networks: {
          label: 'Networks to join',
          content:
            '• Green Producers Club.\n• Norske Produksjonsledere - Tv-Drama og Film (Facebook).\n• Locations in Oslo / Norway (Facebook).\n• Filmmakers in Norway (Facebook).',
        },
      },
    },
  },

  Sweden: {
    code: 'SWE',
    name: 'Sweden',
    credit: 'This factsheet was produced by Ronny Fritsche from the Green Producers Club.',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Ecological sustainability in Swedish film and TV has gained momentum, with industry networks, tools, and training expanding. Progress in 2024 accelerated as commissioners and financiers established clearer sustainability requirements.\n\nAs of 2024, Sweden does not have a dedicated national decarbonisation plan specific to the film and TV industry. Efforts underway to establish unified standard, expected launch in 2025.\n\nNordic Ecological Standard (NES) inspired by German Ecological Standard, implementing in 2025.',
        },
        laws: {
          label: 'Relevant national legislation',
          content:
            '• Swedish Environmental Code (Ds 200:61): foundation of environmental legislation.\n• Right of Public Access (allemansrätten): grants freedom to explore nature; film productions typically need permits in sensitive environments.\n• Protected Areas: nature reserves, national parks, Natura 2000 sites require special permits, https://skyddadnatur.naturvardsverket.se/\n• Discrimination Act: prohibits discrimination on seven grounds: gender, gender identity, ethnic origin, religion, disability, sexual orientation, age.',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            'Regional film funds require environmental plans and reporting using tools like Sustainable Film Tool.\n\nKey regional film funds: Film i Skåne, Film Stockholm, Film Gotland, Filmpool Nord, Film i Väst, Norrköping\'s Film Fund, Film Västernorrland, Film i Dalarna.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• Swedish Film Institute: published sustainability handbook, appointed sustainability coordinator Patrik Axén, Green Consultant course with Nordic participants.\n• Film & TV-producenterna: formed ecological sustainability council in 2022, collaborates with Green Producers Club, offers financial incentives for measuring climate impact.\n• Viaplay Group: guidelines require measuring climate impact using Albert or Green Producers Tool.\n• NEMA (Nordic Eco Media Alliance).\n• SHIFT (Swedish Sustainability Association in Film and TV).\n• NEST (Northern European Sustainability Team-Up): Baltic film regions network.\n• Nordic Green Action Group: convened by Nordic Film & TV Fund.',
        },
        decarbonizationPlan: {
          label: 'Decarbonization plan',
          content:
            'Sweden targets net-zero emissions by 2045 (Climate Act). Cutting territorial greenhouse gas emissions by at least 85% from 1990 levels. Target of 100% renewable energy by 2045.\n\nhttps://unfccc.int/sites/default/files/resource/LTS1_Sweden.pdf',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        trainTravel: {
          label: 'Train transport',
          content:
            'Efficient connections: Stockholm, Gothenburg, Malmö with 3-6 hour travel times. Northern Sweden routes to Luleå take longer; popular night trains (~12 hours) widely used by film workers. International connections to Oslo, Copenhagen, Hamburg.\n\nMajor operators: SJ, Øresundståg, Snälltåget, Vy.se. Regional services: Skånetrafiken, Västtrafik, SL, and others.',
        },
        electricCars: {
          label: 'Electric cars',
          content:
            'Availability has increased significantly. Film-specific rental providers have growing demand. Fast-charging stations widely available in urban areas. Portable charging stations available for rental for temporary production offices.',
        },
        gridConnection: {
          label: 'Grid connection',
          content:
            'Main distributors: Vattenfall, Ellevio, E.ON. Sweden\'s grid is predominantly renewable: 69% hydroelectric/wind/solar, 29% nuclear, 1.2% fossil fuels, one of Europe\'s most emission-free energy mixes.\n\nElectric generators not widely available. Batteries with varying capacities emerging as key innovation.\n\nEnergy mix source: https://ourworldindata.org/energy/country/sweden (Our World in Data).',
        },
        wasteManagement: {
          label: 'Waste management rules',
          content:
            'Advanced waste management with strict regulations. Landfilling combustible and organic waste is prohibited. Companies must follow local municipal waste management rules.',
        },
        socialRules: {
          label: 'On-set practices',
          content:
            'Plant-based catering: Sweden is a leader in plant-based diets; productions often adopt plant-based norms with animal-based options as special requests.\n\nSafety Representative: every shoot must appoint one for filming safety.\n\nTrusted Union Representative: must be appointed for reporting harassment or discrimination.\n\nScen & Film is a strong union; productions receiving public funding must adhere to collective agreements.',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        caseStudies: {
          label: 'Case studies & reports',
          content:
            '• Swedish Film Institute sustainability pages, including its sustainability handbook: https://www.filminstitutet.se/en/about-us/sustainability/',
        },
        greenConsultants: {
          label: 'Green consultants',
          content:
            '• SHIFT: Swedish association for green consultants.',
        },
        trainings: {
          label: 'Trainings',
          content:
            '• Stockholm Academy of Dramatic Arts: 7.5 ECTS sustainability course (spring 2025).\n• Kulturakademin: digital course in sustainable film production: https://www.kulturakademin.com/kurskatalog/hallbar-filmtv-produktion-ekologi\n• Swedish Film Institute: training sessions: https://www.youtube.com/watch?v=A54OYuj2IZQ\n• Film & TV-producenterna and film funds: recurring training sessions.',
        },
        tools: {
          label: 'Calculators & tools',
          content:
            "• Green Producers Club & Green Producers Tool: https://www.greenproducers.club/\n• Hållbar Film Tool: http://www.sustainablefilmtool.com/\n• Green Ice Camera.\n• Carbon'Clap: https://ecoprod.com/carbon-clap/\n• Albert Carbon Calculator: https://wearealbert.org/\n• Green Toolkit Film&TV: https://www.greentoolkit-filmtv.eu/database/?_categories=carbon-calculator",
        },
        networks: {
          label: 'Networks to join',
          content:
            '• Hållbar Film- och TV-Produktion i Sverige (Facebook): https://www.facebook.com/groups/170410160034341/\n• Green Producers Club: https://www.greenproducers.club/',
        },
      },
    },
  },

  Slovakia: {
    code: 'SVK',
    name: 'Slovakia',
    credit: 'This factsheet was produced by Ecoprod, with the support of Valentína Hučková.',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Slovakia\'s sustainable filmmaking sector gained momentum since participation in the Green Screen project in 2018. Carbon footprint calculation is the most in-demand service due to its impact on securing funding for international co-productions.\n\nAs of June 2025, the Audiovisual Fund no longer provides extra subsidies for employing green consultants. Discussions focus on incentivizing sustainability commitments.\n\nNotable example: "The Flood" (Potopa), a Slovak-Czech-Polish-Belgian co-production that implemented sustainability measures with certified green filming coordinator Valentína Hučková.',
        },
        laws: {
          label: 'Relevant national legislation',
          content:
            'Slovak Audiovisual Fund (AVF) supports national films and co-productions, including eco-friendly initiatives.\n\nSocial rules:\n• Anti-Discrimination Act: addresses gender, racial, and other discrimination.\n• CEDAW Ratification.\n• National action plan for domestic violence and equal opportunities.\n• Slovakia has not ratified the Istanbul Convention on domestic violence.\n• No specific regulations targeting discrimination in Slovak filmmaking.',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            'Slovak Film Commission (SFC) promotes sustainable filmmaking via the EU Green Screen project, collaboration with INCIEN, workshops, training, and industry talks.\n\n• Green Call: sustainability manifesto for producers.\n• EURECA carbon calculator: developed with EU scientific partner data.\n\nTV Markíza adopted sustainable filmmaking agenda in 2022, hired Sustainable Production Coordinator, introduced Green Runner on selected series, used Albert calculator for carbon footprint calculation.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• EU Green Screen Project: SFC actively involved in reducing environmental impact.\n• Practical guidelines on energy use, waste reduction, eco-friendly transportation.\n• Carbon Footprint Calculation increasingly integrated due to European funding requirements.',
        },
        decarbonizationPlan: {
          label: 'Decarbonization plan',
          content:
            'Slovakia aligns with EU climate goals and European Green Deal, targeting net-zero emissions by 2050.\n\nTargets 18% renewable energy by 2030; nuclear power remains key energy source. Plans to improve energy efficiency, though current measures remain modest.',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        trainTravel: {
          label: 'Train transport (3/5)',
          content:
            'ZSSK (national rail) criticized for suboptimal services and slow speeds reflecting infrastructure renewal delays. Free travel for students and seniors; night train connects West and East (partially under renovation).',
        },
        electricCars: {
          label: 'Electric cars',
          content:
            'EV infrastructure steadily growing but faces coverage challenges. Charging stations increasing in larger cities (Bratislava, Košice); rural areas have limited access.\n\nCharging stations: https://nabijame.sk/',
        },
        gridConnection: {
          label: 'Grid connection',
          content:
            'Getting a new grid connection is challenging. Requires robust administrative process and approval from various entities. Productions must request and pay for connection and electricity, usually a month in advance.\n\nEnergy mix source: https://ourworldindata.org/energy/country/slovakia (Our World in Data).',
        },
        wasteManagement: {
          label: 'Waste management rules',
          content:
            'Waste separation not mandatory for households but companies must pay additional fees for waste separation. Bratislava and Košice have incinerators; other regions rely mainly on landfills.',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        greenConsultants: {
          label: 'Green consultants',
          content:
            'As of 2024, 2-5 individuals are actively involved as Green Consultants, with no official association.\n\nSFC Sustainability Manager List: https://www.filmcommission.sk/1120-en/sustainability-manager/',
        },
        serviceProviders: {
          label: 'Service providers',
          content:
            'Green Platform Database maintained by SFC:\nhttps://www.filmcommission.sk/744-en/green-platform/',
        },
        trainings: {
          label: 'Trainings',
          content:
            '2022 National-Level "Eco-Consultant Training" for sustainable filmmaking professionals:\nhttps://www.filmcommission.sk/how-to-become-a-professional-film-eco-consultant/',
        },
        tools: {
          label: 'Calculators & tools',
          content:
            "• Carbon'Clap - free calculator by Ecoprod.\n• SecoSet - by Flying Secoya.\n• Carbon'Stage - by Greenly.\n• Albert Carbon Calculator: https://wearealbert.org/\n• Green Toolkit Film&TV: https://www.greentoolkit-filmtv.eu/database/?_categories=carbon-calculator",
        },
        networks: {
          label: 'Networks to join',
          content:
            '• Facebook group "Green Filming SK+ČR": https://m.facebook.com/groups/249341536272336/',
        },
      },
    },
  },

  Italy: {
    code: 'ITA',
    name: 'Italy',
    credit: 'This factsheet was produced by Ludovica Chiarini from EcoMuvi, with the contribution of Lucia Marani from Stepforward, Luca Ferrario and Linnea Merzagora from Green Film, and Rossella Rovere from Zen2030.',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Sustainability in production is growing rapidly, but there is no uniform methodology, results or requirements. Green certifications have risen sharply since 2020, and streaming platforms increasingly link funding to stricter sustainability standards.\n\nItaly lacks specific decarbonisation policies for the audiovisual industry. The Labour Code governs working time and safety. Diversity, Equity, and Inclusion laws remain in development.',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            '• Trentino Film Fund & Commission: first European regional funding agency to introduce green incentive (2017). GREEN FILM certificate unlocks bonus incentive.\n• Ministry of Culture (since 2020): 5 additional evaluation points for sustainability commitment.\n• January 2024 Protocol: Ministries of Culture and Environment signed protocol tying public funding to minimum environmental criteria.\n• EcoMuvi Recognition: Launched 2013, officially recognized by ACCREDIA as valid sustainability standard across EU.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• Green Film: Trentino Sviluppo Spa: European standard.\n• EcoMuvi: Accredited standard, sustainability service for productions.\n• Zen2030: Benefit company with Environmental Protocol and GHG calculator, ISO 14064 certification.\n• Sardegna Green Film Shooting: Sardinia Film Commission standard.\n• Set Forward: Italian benefit company (since 2024), applies Green Film and Sardegna protocols with Bureau Veritas assessments.\n\nJune 2024: "National Environment & Entertainment Observatory" launched with EU funding and Ministry support.',
        },
        decarbonizationPlan: {
          label: 'Decarbonization plan',
          content:
            'National Energy and Climate Plan (NECP, updated June 2023): aims for 40.5% renewable energy and 65% in electricity by 2030.\n\n2022 Constitutional Amendment to protect environment, biodiversity, and animals.\n\nAugust 2024: Approved five legislative decrees aligning with EU corporate sustainability reporting regulations.',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        trainTravel: {
          label: 'Train transport',
          content:
            'High-speed network efficient, punctual, clean, relatively affordable (Milan-Rome: 3 hours, €50-80). Main routes: Turin, Milan, Venice, Bologna, Florence, Rome, Naples, Reggio Calabria.\n\nNon-high-speed trains are generally cheap but unreliable. Regional systems managed locally across 21 regions.',
        },
        electricCars: {
          label: 'Electric cars',
          content:
            'Relatively common for SUVs and mid-size cars. Almost impossible to find for larger vans or small city cars. Major issue: lack of charging infrastructure. As of March 2024: 54,164 charging points. Distribution uneven; northern regions better equipped.\n\nTop regions: Lombardy (10,158), Piedmont (5,841), Veneto (5,167), Lazio (5,141), Emilia-Romagna (4,516).',
        },
        gridConnection: {
          label: 'Grid connection',
          content:
            'Italy\'s extensive grid accommodates typical film set power needs. Main challenge: bureaucratic process for temporary connections. Can be worked within 4-6 working days if understood, but most productions experience 30+ day delays.\n\nRecommendation: Contact local energy supplier to verify temporary connection possibility. Terna (national grid operator) provides guidelines.\n\nEnergy mix source: https://ourworldindata.org/energy/country/italy (Our World in Data).',
        },
        wasteManagement: {
          label: 'Waste management rules',
          content:
            'Governed by national and regional regulations with varied practices. Hazardous waste: producers must contract licensed companies. Local authorities manage general waste with municipally contracted companies, often resulting in dishomogeneous practices.',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        caseStudies: {
          label: 'Case studies & reports',
          content:
            '• GREEN FILM, certification documents and the list of certified productions: https://www.green.film/certification/',
        },
        greenConsultants: {
          label: 'Green consultants',
          content:
            'Primarily found through word-of-mouth or contacting sustainability consulting agencies. EcoMuvi leads creation of national and EU-level trade union for sustainability professionals. Consulting companies listed in initiatives section.',
        },
        trainings: {
          label: 'Trainings',
          content:
            'TorinoFilmLab:\n• Green Film Lab (launched 2022): helps professionals apply green protocols and achieve certification.\n• Green Production Lab: brings together sustainability experts and film professionals for full sustainability plans.\n\nOpen to up to 12 European sustainability professionals and 3 teams of producers and crew.',
        },
        tools: {
          label: 'Calculators & tools',
          content:
            "• EcoMuvi - tracking tips and tools.\n• Green Film - tracking tips and tools.\n• Zen2030 - tools.\n• Albert Carbon Calculator.\n• Carbon'Clap - free calculator by Ecoprod.",
        },
        networks: {
          label: 'Networks to join',
          content:
            'National Environment & Entertainment Observatory (launched June 2024).',
        },
      },
    },
  },

  Portugal: {
    code: 'PRT',
    name: 'Portugal',
    credit: 'This factsheet was produced by Dörte Schneider Garcia, green consultant in Portugal.',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Green production is at early stages. As of August 2025, no mandatory requirements tied to funding, though awareness is growing due to international funds like Eurimages and Creative Europe demanding sustainability commitments.\n\nPortugal Film Commission released a "Best Practices Guide" (updated 2024) and has organized green consultant training since 2021. A Green Film Lab will be held in Lisbon in November 2025.',
        },
        laws: {
          label: 'Relevant national legislation',
          content:
            'Environmental Laws:\n• Basic Environmental Law.\n• General Waste Management Regime.\n• Environmental Damage Liability Law.\n• Environmental Impact Assessment Regime.\n• Filming in nature reserves and protected areas strictly regulated.\n\nSocial Rules:\n• Cash rebates award two points for projects led by female directors.\n• ICA aims to enhance diversity in its 2024-2028 strategy.\n• 2025 "Manual of Good Practices for Cinema and Audiovisual Media in Portugal" (Portuguese only).',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            '2024/2025 Updates:\n• Cash rebate and cash refund include one additional point for sustainability plans by certified green consultants.\n• Cash refund awards a second point if an audit verifies green measures.\n• Ad Hoc funding round in 2025 allowed sustainability plan development expenses to qualify for reimbursement.\n\nICA has not yet included funding conditions tied to sustainability in regular financing programs.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• Portugal Film Commission: Best Practice Guide and green consultants directory.\n• Green Consultants\' Association ("Repensar").\n• Council for Climate Action (APC, launched January 2025): centralizes climate transition efforts, manages Environmental Fund, EEA Grants, Social Climate Fund, Voluntary Carbon Market.',
        },
        decarbonizationPlan: {
          label: 'Decarbonization plan',
          content:
            'Basic Climate Law (Law No. 98/2021) recognizes climate emergency.\n\nGoals: climate neutrality by 2050 (possible shift to 2045). Emission reduction: minimum 55% by 2030, 65-75% by 2040, 90% by 2050 (vs. 2005).\n\nNational Energy and Climate Plan for 2030 (PNEC, reviewed 2024): 51% renewable energy, circular economy as fundamental decarbonization axis.',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        trainTravel: {
          label: 'Train transport',
          content:
            'Limited network leaving some regions without service. Main North-South route (Braga-Porto-Lisbon-Faro) with fast Alfa Pendular connection and affordable tickets. Future plans include high-speed Lisbon-Porto line.',
        },
        electricCars: {
          label: 'Electric cars',
          content:
            'Becoming more available but remain limited. Street charging expensive unless private chargers provided. As of August 2025: 6,887 charging stations, mostly in Lisbon and Porto. Rural areas have far fewer.\n\nResources: E Network or Electromaps.',
        },
        gridConnection: {
          label: 'Grid connection',
          content:
            'Availability varies; easier in cities. Expected within 15 days but delays up to 30 days common. Local film commissions in Lisbon and Porto offer protocols to expedite the process.\n\nEnergy mix source: https://ourworldindata.org/energy/country/portugal (Our World in Data).',
        },
        wasteManagement: {
          label: 'Waste management rules',
          content:
            'Productions generating less than 1,100 liters daily use municipal systems. Exceeding 1,100 liters requires hiring waste management provider with digital transport documents. Municipal systems handle paper/cardboard, metals, plastics, glass, bio-waste, wood, textiles, packaging, used cooking oil.',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        caseStudies: {
          label: 'Case studies & reports',
          content:
            '• Portugal Film Commission, sustainability page with the Best Practices Guide: https://portugalfilmcommission.com/en/sustainability/',
        },
        greenConsultants: {
          label: 'Green consultants',
          content:
            '• Associação de Green Consultants de Portugal.\n• Portugal film production directory.\n• Cine guia listings.',
        },
        serviceProviders: {
          label: 'Service providers',
          content:
            'No directory currently exists. Most light equipment rentals offer small battery storage units and LED lights.',
        },
        trainings: {
          label: 'Trainings',
          content:
            'One available program based on Germany\'s "Hochschule der Medien" Stuttgart curriculum for certified green consultants.',
        },
        tools: {
          label: 'Calculators & tools',
          content:
            "No Portugal-specific tool. Green consultants trained to use Carbon'Clap (free by Ecoprod) and other international calculators.",
        },
      },
    },
  },

  Hungary: {
    code: 'HUN',
    name: 'Hungary',
    credit: 'This factsheet was produced by Green Eyes Production.',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Hungary\'s film sector increasingly incorporates sustainable practices, with the National Film Institute (NFI) driving adoption through funding incentives and consultation services. Major facilities (Astra Film Land, Korda Studios, Origo Studios) implement eco-friendly technologies. MOME embeds sustainability into academic programs.\n\nPersistent obstacles: inadequate recycling infrastructure and necessity for enhanced regulatory frameworks.',
        },
        laws: {
          label: 'Relevant national legislation',
          content:
            '• Nature Conservation Act (1996) and Environmental Protection Act (1995): safeguard biodiversity, species and habitat protections.\n• Filming in national parks, nature reserves, or Natura 2000 sites requires permits from National Park Directorates.\n• Heavy machinery, artificial lighting, sound equipment, and drones may be restricted.\n• Legal requirement to restore damaged areas.\n• Environmental Impact Assessment (EIA) required for large-scale projects in sensitive zones.\n\nESG legislation effective January 2024.',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            'NFI provides a 30% tax rebate on eligible expenditure for films produced in Hungary, extendable to 37.5% by adding 7.5% non-Hungarian costs (capped at 25% of rebate).\n\nGreen filming follows industry standards and NFI sustainability criteria. Productions adhere to EU environmental guidelines and Hungary\'s new ESG legislation.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            'Key stakeholders: NFI, MTVA (broadcaster), international platforms (Netflix, HBO), educational institutions (SZFE).\n\nNFI\'s "Green Light to Sustainable Film Production" Guide: practical advice for reducing ecological footprint.\n\nNFI Fast Forward Program (FFP): annual sustainability workshop for filmmakers.',
        },
        decarbonizationPlan: {
          label: 'Decarbonization plan',
          content:
            'Hungary reduced emissions by 43% since 1990, surpassing 2030 targets. Key initiatives: closing Mátra Power Plant post-2025, expanding renewable energy (especially solar). Focus on fair transition.',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        trainTravel: {
          label: 'Train transport',
          content:
            'Extensive rail network connecting major and rural areas, with Budapest as central hub (Keleti, Nyugati, Déli stations). Infrastructure issues and delays during heatwaves.',
        },
        electricCars: {
          label: 'Electric cars',
          content:
            'EV rentals: Avis, SIXT, Hertz in Budapest.\n\n~2,491 charging stations, 521 in Budapest. Mobiliti manages ~1,500 locations. Chargers concentrate in cities, supermarket parking lots, and hotels.',
        },
        gridConnection: {
          label: 'Grid connection',
          content:
            'Reliable national grid, especially in Budapest and studio towns.\n\nEnergy mix: nuclear (~50%), natural gas (30-35%), coal/lignite (10-15%), renewables (12-15%). Solar capacity exceeded 3,000 MW. Astra operates on 100% green energy.\n\nHungary lacks comprehensive battery pack rental networks.\n\nEnergy mix source: https://ourworldindata.org/energy/country/hungary (Our World in Data).',
        },
        wasteManagement: {
          label: 'Waste management rules',
          content:
            'Governed by Act CLXXXV of 2012, aligned with EU Waste Framework Directive. MOHU handles waste management. Mandatory separation and recycling for businesses. EPR (Extended Producer Responsibility) covers collection, recycling, disposal.\n\nHazardous waste requires separate collection by licensed companies. Annual tracking and reporting required.\n\nCompanies: Recobin, FKF Nonprofit Zrt., A.K.S.D. Kft., Alcufer, Remondis, STKH, SARPI Dorog, FE-Group, Profikomp.',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        consultancies: {
          label: 'Sustainability consultancies',
          content:
            '• Green Eyes Production: leading film sustainability consultancy: eco-friendly strategies, crew training, certifications.\n• Leverage Point Entertainment: sustainability agency founded by Zsófia Szemerédy, operates between London and Budapest.',
        },
        serviceProviders: {
          label: 'Service providers',
          content:
            '• Activ8: waste management, plant-based catering, carbon footprint assessments.\n• Korda Studios: energy-efficient systems.\n• Astra Film Studios: eco-conscious production support.',
        },
        trainings: {
          label: 'Trainings',
          content:
            '• Zsófia Szemerédy at MOME: trains students and professionals in sustainable film production.\n• NFI Fast Forward Program (FFP): annual sustainability workshop.\n• Many universities integrate sustainability into film curricula.',
        },
        tools: {
          label: 'Calculators & tools',
          content:
            "• Carbon'Clap - free calculator by Ecoprod.\n• Albert Carbon Calculator.\n• Green Toolkit Film&TV: https://www.greentoolkit-filmtv.eu/database/",
        },
        networks: {
          label: 'Networks to join',
          content:
            '• MAFSZ (Hungarian Association of Film and Television Producers).\n• Budapest International Documentary Festival (BIDF).\n• MADOKE (Hungarian Documentary Association).\n• Hungarian Film and Television Union.',
        },
      },
    },
  },

  Spain: {
    code: 'ESP',
    name: 'Spain',
    credit: 'This factsheet was produced by Paloma Andrés Urrutia at Mrs GreenFilm.',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Environmental impact reduction practices have increased significantly over four years, driven by:\n1. National and regional public funding requiring sustainability criteria.\n2. Content platforms (Netflix, Amazon MGM Studios, Movistar+) mandating sustainability requirements.\n3. Awareness programs and training at major festivals and industry events.',
        },
        laws: {
          label: 'Relevant national legislation',
          content:
            '• Climate Change and Energy Transition Law (Ley 7/2021): targets carbon neutrality by 2050, requiring productions to measure and reduce emissions.\n• National Energy and Climate Plan (PNIEC) 2021-2030: promotes energy efficiency and renewable energy.\n• Royal Decree on Environmental Impact (RD 1040/2017): large-scale outdoor productions must assess environmental impact.\n• Biodiversity and Natural Heritage Law (Ley 42/2007): filming in protected areas requires permits.\n• Waste and Circular Economy Law (Ley 7/2022): bans single-use plastics, mandates waste separation.\n• Green tax incentives in Canary Islands, Catalonia, Basque Country, and other regions.',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            'ICAA has established mandatory sustainability reporting for productions receiving public funding. Sustainability expenses classified as eligible costs.\n\nRegional Programs:\n• Basque Green Film: dedicated professional resources for eco-friendly productions.\n• ICEC (Catalonia): consultancy financing program.\n• Navarra: additional funding for sustainable production.\n• Málaga and Tenerife: free sustainability seals for qualifying productions.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            'Guides and best practices by Film Offices/Commissions:\n• Asturias Film Commission ("Rueda en verde" guide).\n• Valencia Film Office: https://www.valenciafilmoffice.org/rodajes-sostenibles-en-valencia\n• Barcelona Film Commission.\n• Cataluña Film Commission.\n• Madrid Film Office: https://madridfilmoffice.com/recursos-produccion-sostenible/\n• Basque Green Film: https://www.euskadi.eus/basque-green-film-bgf/web01-a2kulsus/es/\n• Academia de Cine: https://www.academiadecine.com/pdfs/guia-de-buenas-practicas-del-sello-verde/',
        },
        decarbonizationPlan: {
          label: 'Decarbonization plan',
          content:
            'Climate Change and Energy Transition Law (2021):\n• Carbon neutrality by 2050.\n• 55% emission reduction by 2030 (vs. 1990).\n• 100% renewable electricity by 2050; at least 74% by 2030.\n• Ban on new combustion-engine car sales by 2035.\n• Carbon pricing and green taxation.',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        trainTravel: {
          label: 'Train transport (4/5)',
          content:
            'One of Europe\'s most modern rail systems. Extensive high-speed AVE network connecting Madrid, Barcelona, Seville, Valencia, Málaga. Liberalization with private operators: Ouigo, Iryo, Avlo offering competitive services.\n\nChallenges: connecting smaller towns; punctuality improvements needed in conventional rail.',
        },
        electricCars: {
          label: 'Electric cars (2/5)',
          content:
            'PNIEC target: 5.5 million EVs on the road by 2030. Main rental companies expanding electric/hybrid fleets but supply still insufficient for sector demand. Over-costs reduced but remain significant.',
        },
        gridConnection: {
          label: 'Grid connection',
          content:
            'Managed by Red Eléctrica de España (REE). Well-integrated with European networks. Sound stages switching to renewable operators. Most studios don\'t require generator backup. Street/public space grid connection remains challenging.\n\nEnergy mix source: https://ourworldindata.org/energy/country/spain (Our World in Data).',
        },
        wasteManagement: {
          label: 'Waste management rules',
          content:
            'Law 7/2022: audiovisual production companies classified as small hazardous waste producers bear responsibility until proper waste treatment, documented through transfer documents and treatment certificates.',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        caseStudies: {
          label: 'Case studies & reports',
          content:
            '• Academia de Cine, "Sello Verde" good-practices guide (PDF): https://www.academiadecine.com/pdfs/guia-de-buenas-practicas-del-sello-verde/',
        },
        consultancies: {
          label: 'Sustainability consultancies',
          content:
            '• Mrs. Greenfilm: sustainability consulting, strategic partner for Netflix and Amazon MGM Studios.\n• Echar a Rodar: CSR and communication consulting.\n• Creast: digital solution to predict, measure, reduce carbon footprint.\n• La Tribu Verde: integrating sustainability into creative industry.\n• K is for Knowledge: consultancy on sustainable action plans.\n• ECOscena: sustainability and carbon footprint for cultural sector.\n• The Other Green: personalized sustainability strategies.',
        },
        trainings: {
          label: 'Trainings',
          content:
            'Free Trainings: Mallorca Film Commission, Terrasa, Film Madrid, Madrid Film Office, Cantabria Film Commission, Cluster Audiovisual de Canarias, Tenerife Film Commission.\n\n• Mrs. Greenfilm: 40-hour training with Makkers School (5+ editions, 80+ students); 40-hour free training with ESCAC.\n• ECAM and Universidad de Alcalá: specialized master programs.\n• HAZ Program (RTVE): innovative sustainability training.\n• University courses: Universidad Carlos III, The Core, Universidad Complutense, Universidad Oberta de Catalunya.',
        },
        tools: {
          label: 'Calculators & tools',
          content:
            '• Green Toolkit Film&TV: https://www.greentoolkit-filmtv.eu/database/?_language=spanish',
        },
        networks: {
          label: 'Networks to join',
          content:
            '• La Claqueta Verde (LinkedIn): https://www.linkedin.com/groups/9131284/',
        },
      },
    },
  },

  'Türkiye': {
    code: 'TUR',
    name: 'Türkiye',
    credit: 'This factsheet was produced by Ekin Gündüz Özdemirci, Nurten Bayraktar, and Funda Apa Aslan from EkoFilm Platform.',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'A survey by EkoFilm Platform (100+ professionals) revealed strong concerns about environmental impact. While 50% understood green production, only 38% showed robust interest. Key waste sources: luxury expenses, open-buffet food waste, single-use materials.\n\nEkoFilm Platform (founded 2023) is the first institutional body to promote sustainability in Turkish film.',
        },
        laws: {
          label: 'Relevant national legislation',
          content:
            '• National Energy Efficiency Action Plan (2018).\n• Paris Agreement Ratification (October 2021).\n• Green Deal Action Plan: Ministry of Trade initiative.\n• Draft Climate Law (2023): includes emissions trading system (ETS).\n\nLabor laws:\n• Labor Law No. 4857.\n• Occupational Health and Safety Law No. 6331.\n• Article 122 of Turkish Penal Code (hate crimes/discrimination).',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            'Cash Rebate Scheme: up to 30% rebates on eligible Turkish expenses for feature films, documentaries, TV series. Managed by Ministry of Culture and Tourism (Law 5224).\n\nRequirements: Turkish co-producer or production-service provider; track record of minimum 2 feature films or 1 TV season.\n\nForeign producers receive VAT refunds for goods/services imported during filming.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• EkoFilm Platform: carbon footprint calculator, sustainable production guide, three educational modules (February 2025).\n• Yeşil Setler Mümkün (Green Sets Are Possible): partnership with Actors\' Union for awareness campaign.\n• SolarFly: solar energy on film sets.\n• Sabancı Foundation Short Film Platform: European Film Commission Sustainability Award (2023).\n• TRT World "Climate Awareness Award" (2023).',
        },
        decarbonizationPlan: {
          label: 'Decarbonization plan',
          content:
            'Turkey committed to net-zero emissions by 2053.\n\nRenewable Energy: plans to quadruple wind/solar to 120,000 MW by 2035 (~$80 billion investment).\nInfrastructure: $28 billion for transmission grids.\nIndustrial Decarbonization: $50 billion+ in steel, cement, aluminum, fertilizer sectors.\nETS planned to align with EU Green Deal.',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        trainTravel: {
          label: 'Train transport',
          content:
            'High-speed rail connects Istanbul, Ankara, Eskişehir, Karaman, Konya, Sivas with expansion underway.',
        },
        electricCars: {
          label: 'Electric cars',
          content:
            'Major rental companies (Enterprise, Europcar, Avis) offer EVs in larger cities. Rural charging stations remain limited.',
        },
        gridConnection: {
          label: 'Grid connection',
          content:
            'Voltage standard: 230V/400V, 50Hz frequency.\n\nEnergy mix source: https://ourworldindata.org/energy/country/turkey (Our World in Data).',
        },
        wasteManagement: {
          label: 'Waste management rules',
          content:
            '• National Waste Management Plan (2023-2035).\n• National Strategy on Food Loss and Waste.\n• Zero Waste Policy (2017): targets 35% domestic waste recycling rate; voluntary certification for compliant buildings.\n• Color-coded collection system managed by local governments.',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        tools: {
          label: 'Calculators & tools',
          content:
            '• EkoFilm Platform carbon calculator: free tool measuring emissions across electricity, gas, transport, generators, accommodation, waste, catering.\n• Green Toolkit Film&TV: https://www.greentoolkit-filmtv.eu/database/?_categories=carbon-calculator',
        },
      },
    },
  },

  Ireland: {
    code: 'IRL',
    name: 'Ireland',
    credit: 'This factsheet was produced with the contribution of Screen Ireland and Climate Innovation.',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Ireland\'s screen industry is undergoing a major sustainability shift driven by Screen Ireland. Since 2022, sustainability standards are mandatory for all Screen Ireland-funded live-action productions.\n\nAll productions must engage a Sustainability Advisor and submit both an Emissions Reduction Plan before production and an Emissions Reduction Report after completion. Use of an approved carbon calculator is mandatory.\n\nA pilot Sustainability Innovation Fund offers up to €25,000 per production for extra steps to reduce carbon footprint.',
        },
        laws: {
          label: 'Relevant national legislation',
          content:
            '• Climate Action and Low Carbon Development Act (Amendment) 2021.\n• Waste Management (Food Waste) Regulations 2009.\n• European Union (Household Food Waste and Bio-Waste) Regulations 2015.\n• Waste Byelaws 2018.\n• Compliance with EU Habitats Directive and Birds Directive required during filming.',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            'Mains electricity is preferred over generators. Productions must ensure compliance with biodiversity and habitat protections, particularly under EU directives.\n\nThe sector evolved from its first sustainability advisor in 2015 (Vikings) to wide compliance in 2023.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• Future Ready Film: consultation and toolkit development led by Climate Innovation.\n• Sustainability Toolkit by Screen Ireland.\n• Participation in TorinoFilmLab\'s Green Film Lab.\n• Membership in EUFCN and Broadcasting Sustainability Network.\n• Internal Screen Ireland Green Group and Equality & Diversity Working Group.',
        },
        decarbonizationPlan: {
          label: 'Decarbonization plan',
          content:
            'Climate Action Plan 2023 (CAP23) targets 51% cut in carbon emissions by 2030 and climate neutrality by 2050.\n\nThe audiovisual sector is required to reduce emissions by 25% by 2025 and 50% by 2030.\n\nIreland\'s 2018 screen production carbon footprint was estimated at 2,127 tonnes. Freedom to Roam does not apply; location access must be negotiated with landowners.',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        trainTravel: {
          label: 'Train transport',
          content:
            'Irish Rail connects major cities and supports electric vehicle charging at several stations (e.g. Heuston, Athy, Sallins).',
        },
        electricCars: {
          label: 'Electric cars',
          content:
            'EVs increasingly used, especially in urban areas. Taxi guidelines recommend electric or hybrid models.',
        },
        gridConnection: {
          label: 'Grid connection',
          content:
            'Mains power is recommended for all locations. Where unavailable, hybrid battery systems using HVO fuel are preferred.\n\nEnergy mix source: https://ourworldindata.org/energy/country/ireland (Our World in Data).',
        },
        wasteManagement: {
          label: 'Waste management rules',
          content:
            'Productions must implement multi-bin systems and comply with all food and waste laws. Compostable food packaging is mandatory unless reusable options are used.',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        caseStudies: {
          label: 'Case studies & reports',
          content:
            '• Screen Ireland sustainability hub: toolkit, reports and production case studies: https://www.screenireland.ie/sustainability',
        },
        greenConsultants: {
          label: 'Green consultants & service providers',
          content:
            '• Climate Innovation - national coordination of Future Ready Film.\n• Sustainable Film Alliance of Ireland (informal network).\n• Green Film Lab (TorinoFilmLab, with Irish participation).',
        },
        tools: {
          label: 'Calculators & tools',
          content:
            "• Screen Ireland Carbon Calculator.\n• Ecoprod's Carbon'Clap.\n• Sustainability Toolkit for Live Action.\n• Albert Calculator.\n• Green Toolkit Film&TV: https://www.greentoolkit-filmtv.eu/database/",
        },
      },
    },
  },

  'United Kingdom': {
    code: 'GBR',
    name: 'United Kingdom',
    credit: 'This factsheet was compiled by Leverage Point Entertainment.',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'The UK must reduce greenhouse gas emissions by 100% (net zero) by 2050 under the Climate Change Act (2008). Scotland targets net zero by 2045.\n\nIndustry standards are industry-driven rather than legislated. Key organizations with sustainability requirements: BBC, Film4/Channel 4, ITV, Fremantle, Banijay.\n\nBFI National Lottery funding requires mandatory sustainability plans.',
        },
        laws: {
          label: 'Relevant national legislation',
          content:
            '• Climate Change Act (2008): net zero by 2050.\n• UK Sustainability Disclosure Standards (UK SDS) expected to introduce mandatory reporting.\n• Biodiversity: overseen by Natural England, Natural Resources Wales, NatureScot, Northern Ireland Environment Agency.\n• Equality Act 2010: prevents discrimination.\n• Modern Slavery Act 2015: requires reporting on forced labour prevention.',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            'AVEC (Audiovisual Expenditure Credit) Scheme: refundable tax credit on qualifying UK production expenditure. Currently lacks specific sustainability requirements.\n\nBFI integration: environmental sustainability expectations within funding strategy. BAFTA albert Climate Content Pledge.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            'National: BAFTA albert delivers industry-wide sustainability programs, carbon measurement, sector training.\n\nKey frameworks: Screen New Deal, Albert Annual Reviews, Albert Studio Sustainability Standard, Climate Content Pledge, National Occupational Standards, Green Rider.\n\nRegional:\n• Scotland: Culture for Climate Scotland.\n• Wales: Media Cymru "Greening the Screen", Screen New Deal Transformation Plan.\n• England: Film London sustainability programs, Screen Cornwall Green Shooting Toolkit, Screen Yorkshire.\n• Northern Ireland: Northern Ireland Screen sustainability in funding frameworks.',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        trainTravel: {
          label: 'Train transport',
          content:
            'Extensive National Rail network connecting England, Scotland, Wales. Northern Ireland: TransLink. London: Transport for London (TfL).\n\nBike and e-scooter hire available in major cities. HVO (Hydrotreated Vegetable Oil) increasingly used as lower-carbon diesel alternative.',
        },
        electricCars: {
          label: 'Electric cars',
          content:
            'Charging widely available; regional variation. Zap-Map provides charger locations.\n\nNational hire companies offer EVs. Industry-specific unit car suppliers increasing availability. Urban electric taxi fleets (including TX electric black cab) widely available.',
        },
        gridConnection: {
          label: 'Grid connection',
          content:
            'Victoria Park grid cabinet in London via Film London\'s Grid Project, the UK\'s first industry-specific grid connection for film/TV. Several grid connection projects under development.\n\nGrid Knowledge Blog by Leverage Point Entertainment offers insights on temporary grid access.\n\nEnergy mix source: https://ourworldindata.org/energy/country/united-kingdom (Our World in Data).',
        },
        wasteManagement: {
          label: 'Waste management rules',
          content:
            'Productions must comply with statutory Duty of Care: waste correctly stored, segregated, and disposed of using licensed waste carriers.\n\nEngland: Simpler Recycling reforms mandate separation of key recyclable materials and food waste for composting or anaerobic digestion.',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        caseStudies: {
          label: 'Case studies & reports',
          content:
            '• albert case studies from film and TV productions: https://wearealbert.org/case-studies/\n• albert resources hub, annual reviews and reports: https://wearealbert.org/resources/',
        },
        consultancies: {
          label: 'Sustainability consultancies',
          content:
            '• Leverage Point Entertainment.\n• Earth to Action.\n• Creative Zero.\n• Neptune Sustainability.\n• Picture Zero.\n• Sustainable Film.\n• Sally Mills Consulting.\n• Greenshoot.',
        },
        serviceProviders: {
          label: 'Service providers',
          content:
            '• ALBERT Suppliers Directory.\n• Northern Ireland Screen Sustainable Suppliers.\n• Sustainable Screens Scotland.',
        },
        trainings: {
          label: 'Trainings',
          content:
            '• ALBERT Academy (various courses).\n• ScreenSkills: "Introduction to Sustainability for the Screen Industries".\n• Carbon Literacy Training.\n• Film London/Green Shoot: Green Runner Training.\n• Picture Zero: Sustainability and Education Training.',
        },
        tools: {
          label: 'Calculators & tools',
          content:
            'Production Carbon Measurement:\n• ALBERT Carbon Calculator.\n• AdGreen Carbon Calculator.\n• Greenshoot Carbon Calculator (Film London).\n\nToolkits:\n• Julie\'s Bicycle: Creative Climate Tools.\n• Theatre Green Book.\n• Film & TV Sustainability Resources Map (by Mairi Claire Bowser).\n• WRAP: Waste reduction & circular economy.\n• Ellen MacArthur Foundation: Circular Economy.\n• The Carbon Literacy Project.',
        },
        networks: {
          label: 'Networks to join',
          content:
            'Coordinated through BAFTA albert, BFI, and regional screen agencies (England, Scotland, Wales, Northern Ireland).',
        },
      },
    },
  },

  Poland: {
    code: 'POL',
    name: 'Poland',
    credit: null,
    sources: 'KIPA, Łódź Film Commission, Polish Film Institute',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Green production is developing, led by regional film commissions and the producers\' guild rather than by a national mandate. Łódź has been a frontrunner, certifying professionals as ambassadors of the international "Green Screen" programme.',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            'The Łódź Film Commission, operator of the Łódź Film Fund, awards up to 5 points for sustainability: 3 points for engaging an eco-consultant, 1 point for submitting a sustainable production plan, and 1 point for a sustainable transport plan.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• KIPA (Polish Audiovisual Producers Chamber of Commerce): Green Audiovisual Production Lab: https://kipa.pl/en/\n• Green Film Lab workshops held in Warsaw in partnership with the Polish Film Institute (PISF).\n• Łódź Film Commission: "Green Screen" programme ambassadors.',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Poland\'s grid is still coal-heavy (around 56% in 2024, a record low) with renewables at about 29% and rising, so on-grid power remains carbon-intensive for now.\n\nEnergy mix source: https://ourworldindata.org/energy/country/poland (Our World in Data).',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        tools: {
          label: 'Calculators & tools',
          content:
            '• Green Toolkit Film&TV: https://www.greentoolkit-filmtv.eu/database/',
        },
      },
    },
  },

  'United States of America': {
    code: 'USA',
    name: 'United States of America',
    credit: null,
    sources: 'Green Production Guide, Producers Guild of America, Sustainable Production Alliance',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'There is no federal sustainability mandate. Green production in the US is industry-led, driven mainly by the major studios and streamers and by professional peer networks rather than by public funding. Coordination happens largely through shared industry tools and informal professional networks.',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            'Industry-led rather than legislated. The major studios and streamers coordinate through the Sustainable Production Alliance (SPA) and use the Green Production Guide\'s shared tools: PEAR (Production Environmental Accounting Report) and PEACH (Production Environmental Actions Checklist).',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• Green Production Guide: established 2010 by the Producers Guild of America Foundation (PGA Green) and major studios; free toolkit plus a worldwide database of sustainable vendors: https://greenproductionguide.com/\n• Sustainable Production Alliance (SPA): consortium of major film, TV and streaming companies.\n• Producers Guild of America: PGA Green sustainability programme: https://producersguild.org/sustainability/\n\nNote: Earth Angel, a leading US sustainable-production consultancy, ceased operations in 2025.',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'The US grid averaged about 43% natural gas, 18% nuclear and 24% renewables in 2024, but the mix varies enormously by state, so check the local utility where you shoot.\n\nEnergy mix source: https://ourworldindata.org/energy/country/united-states (Our World in Data).',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        caseStudies: {
          label: 'Case studies & reports',
          content:
            '• Sustainable Production Alliance, Scope 3 white paper (PDF): https://greenproductionguide.com/wp-content/uploads/2024/03/Sustainable-Production-Alliance_Scope-3-Whitepaper.pdf\n• Example of a real production sustainability report (PDF, 2022): https://greenproductionguide.com/wp-content/uploads/2022/03/RBW-S2_Sustainability-Report_Revised_03.2022.pdf',
        },
        tools: {
          label: 'Calculators & tools',
          content:
            '• Green Production Guide: PEAR & PEACH: https://greenproductionguide.com/tools/\n• albert carbon calculator (used by some US productions): https://wearealbert.org/',
        },
      },
    },
  },

  Netherlands: {
    code: 'NLD',
    name: 'Netherlands',
    credit: null,
    sources: 'Green Film Making, Netherlands Film Fund',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Green production is well established and increasingly tied to funding. Since 2024, a predicted production carbon footprint (calculated with the albert carbon calculator) and a carbon action plan are mandatory when applying to the Netherlands Film Fund for the realisation of a feature film.',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            'The Netherlands Film Fund compensates eligible eco-consultant costs, either through a dedicated eco-consultancy track with GreenScreen eco-consultants who collaborate with the Fund, or through independent hiring. From 2024, the predicted carbon footprint and carbon action plan are required when submitting for further realisation. The Fund also organises trainings and inspiration sessions sharing best practices.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            'Green Film Making, founded 2015, facilitated by the Netherlands Film Fund and led by sustainability manager Els Rientjes. It provides a department-based toolkit (art, catering, energy, location, production, transport) and the "Film Harvest Map" (filmoogstkaart.nl) identifying clean-energy access points and green vendors near filming locations.\nhttps://greenfilmmaking.com/',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'More than half of Dutch electricity came from renewables in 2024, driven by offshore and onshore wind plus solar, so grid power is getting cleaner quickly.\n\nEnergy mix source: https://ourworldindata.org/energy/country/netherlands (Our World in Data).',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        caseStudies: {
          label: 'Case studies & reports',
          content:
            '• Green Film Making, projects and case studies from Dutch productions: https://greenfilmmaking.com/projects/',
        },
        tools: {
          label: 'Calculators & tools',
          content:
            '• albert carbon calculator (mandatory for Film Fund applications from 2024): https://wearealbert.org/\n• Green Film Making toolkit & Film Harvest Map: https://greenfilmmaking.com/\n• Green Toolkit Film&TV: https://www.greentoolkit-filmtv.eu/database/',
        },
      },
    },
  },

  Austria: {
    code: 'AUT',
    name: 'Austria',
    credit: 'This factsheet was produced with the contribution of Evergreen Prisma & the Austrian Film Institute/Green Filming Department.',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Austria\'s Green Filming & Funding Network integrates sustainability into filmmaking through mandatory regulations, professional training, and national/transnational cooperation. Key institutions: Austrian Film Institute (ÖFI) and Evergreen Prisma, Competence Center for Green Filming Europe.\n\nGreen Funding Structure: 30% automatic grant + additional 5% Green Bonus.\n\nTimeline: 2018 synergy model created; 2021 ÖFI implemented mandatory Final Green Report; 2023 financial green funding introduced; January 2025: animation criteria catalogue and child welfare concept (KIWOK) launched.',
        },
        laws: {
          label: 'Relevant national legislation',
          content:
            '• Film Location Act 2023 (FISA+): incentives for ecological film production.\n• Film Funding Act 2023 (ÖFI amendments).\n• Code of Ethics: all funding institutions committed to binding professional conduct guidelines.\n• Anti-discrimination, anti-harassment measures, internal/external confidant access.\n• KIWOK (Child Welfare Concept): project-specific Child Participation Plan required.\n• Working time: 8h/day, 40h/week standard; max 12h/day, 60h/week with overtime.\n• Filming in protected areas requires permits; large-scale sets may trigger EIA.',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            'ÖFI Selective Funding: fulfill minimum 20 of 25 MUST-criteria or hold UZ 76 certification.\nGreen Bonus ÖFI+: meet 22 of 25 MUST-criteria.\nFISA+ Green Bonus: meet all 25 MUST-criteria.\n\nMandatory: certified Green Film Consultant, Final Green Report for every funded project.\n\nAdditional eligible costs: consultant fees, UZ76 certification costs, advisor/auditor fees.\n\n5% Green Bonus also available for cinema distribution meeting ecological minimum standards.\n\nFunding bodies: ÖFI, FISA+, Federal Ministry, Filmfond Vienna.\n\nAustrian Ecolabel (UZ76): product certification for film production companies covering feature films, documentaries, animation, cinema releases.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            'Evergreen Prisma: started 2018, grown to Competence Center for Green Filming Europe. Digital platform: ~950,000 page views, 240,000 users from 135 countries.\n\nEvergreen Prisma Academy: 8 generations of Green Film Consultants trained (~90 filmmakers, 63% women). Founded Association of Green Film Consultants Austria (VGFCA) in 2021.\n\nInnovative programs: yearly Pilot Projects, Creative Labs, Green Practice Kit, Carbon Calculator by KlimAktiv.\n\nAwards: 2020 Makers & Shakers, 2021 European Cultural Brand Award, 2022 Liese Prokop Women Prize, Global Production Awards finalist 2023-2025.\n\nCO/PRO-EUROPE Working Group (founded 2022): transnational harmonization with Germany, South Tyrol, Nordic region (NES). Cross-border recognition of green consultants and reports.',
        },
        decarbonizationPlan: {
          label: 'Decarbonization plan',
          content:
            'Climate neutrality target: 2040. Renewable Energy Expansion Act: 100% renewable electricity by 2030 (annual balance). 2024 achievement: 87.5% renewable electricity.\n\nEnergy mix (2023): hydropower 61.65%, wind 12.15%, solar 5.06%, biomass 4.47%, natural gas 15.08%.\n\nMobility Master Plan 2030 for decarbonizing transport. Austria ranked 6th worldwide (out of 193 UN states) in SDG progress.',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        trainTravel: {
          label: 'Train transport',
          content:
            'Dense, mostly electrified ÖBB and WestBahn network with frequent national and cross-border connections including night trains.',
        },
        electricCars: {
          label: 'Electric cars',
          content:
            '2024: 19,500 public AC charging points, 3,800 fast DC chargers, 1,300+ high-power chargers. 200,000+ battery-electric vehicles registered.',
        },
        gridConnection: {
          label: 'Grid connection',
          content:
            'Urban/studio locations: primary grid connection. Mobile options: battery systems and HVO/hybrid generators (limited availability).\n\n85% of electricity from renewables (2023).\n\nEnergy mix source: https://ourworldindata.org/energy/country/austria (Our World in Data).',
        },
        wasteManagement: {
          label: 'Waste management rules',
          content:
            'Separate collection mandatory for bio-waste, paper/cardboard, glass, metals, plastics, and composite packaging.\n\nJanuary 2025: new deposit system for plastic bottles and beverage cans introduced to increase recycling rate.',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        greenConsultants: {
          label: 'Green consultants',
          content:
            '• VGFCA (Association of Green Film Consultants Austria): https://www.vgfca.at/\n• Evergreen Prisma Academy-trained consultants.\n• Trained institutional consultants at: ÖFI (2), Cine Tirol (2), Federal Ministry (1), Film Fund Vienna (1), LAFC (3), FISA+ (1).',
        },
        trainings: {
          label: 'Trainings',
          content:
            '• Green Film Consultant Austria (GFCA): complex, country-specific training with international focus via Evergreen Prisma Academy.\n• Yearly Evergreen Prisma Pilot Projects and Creative Labs for young talents.',
        },
        tools: {
          label: 'Calculators & tools',
          content:
            '• Carbon Calculator for Film & TV Austria by KlimAktiv: https://evergreenprisma.greenshooting.at/en_GB/\n• Evergreen Practice Kit: templates, Green Filming Check, Final Green Report templates.\n• TOPICALS: digital module covering social sustainability (filming with children, drones, animals, fairpay, intimacy coordination, workplace safety, protected areas).\n• European Map of Green Incentives.\n• Green Toolkit Film&TV: https://www.greentoolkit-filmtv.eu/database/',
        },
        networks: {
          label: 'Networks to join',
          content:
            '• Green Filming Austria Working Group (chaired by ÖFI Green Filming Department).\n• VGFCA.\n• CO/PRO-EUROPE Working Group.\n• We_Do! Advice Center.\n• VERA Vertrauensstelle: https://vera-vertrauensstelle.at/',
        },
      },
    },
  },

  Finland: {
    code: 'FIN',
    name: 'Finland',
    credit: null,
    sources: 'Ekosetti, APFI, Finnish Film Foundation',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Promoting ecological, social and financial responsibility is a focus of the Finnish Film Foundation\'s (SES) 2024-2026 strategy. The Foundation supports more sustainable production, exhibition and distribution through training, communication and support criteria, in cooperation with other industry operators. Measured emissions of Finnish productions averaged about 6.5 tCO₂e/hour in 2021-2023, the majority generated by logistics.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• Ekosetti: a guidebook to environmentally sustainable audiovisual production in Finland, published 2019 (English version 2020). A 2025 follow-up, "Ekosetti in Euros", focuses on the economics of production sustainability, alongside an Excel costing tool: https://ekosetti.fi/en/ekosetti-in-english/\n• APFI (Audiovisual Producers Finland): ecological sustainability programme: https://apfi.fi/en/sustainable-industry/ecological-sustainability/\n• Finnish Film Foundation (SES): Sustainability Sprint and environmental sustainability plan: https://www.ses.fi/en/accountability/',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'About 95% of Finland\'s electricity production was fossil-free in 2024 (nuclear around 38%, plus wind and hydro), one of the cleanest grids in Europe.\n\nEnergy mix source: https://ourworldindata.org/energy/country/finland (Our World in Data).',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        caseStudies: {
          label: 'Case studies & reports',
          content:
            '• "Ekosetti in Euros" (2025), report on the economics of sustainable production, alongside the Ekosetti guidebook: https://ekosetti.fi/en/ekosetti-in-english/',
        },
        tools: {
          label: 'Calculators & tools',
          content:
            '• Ekosetti guidebook & "Ekosetti in Euros" Excel tool: https://ekosetti.fi/en/ekosetti-in-english/\n• Green Toolkit Film&TV: https://www.greentoolkit-filmtv.eu/database/',
        },
      },
    },
  },

  Greece: {
    code: 'GRC',
    name: 'Greece',
    credit: null,
    sources: 'EKOME, Hellenic Film and Audiovisual Center',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Greece is at an early, formalising stage. In 2024 a Sustainability Standard workshop, supported by EKOME and the WaterBear Network, began shaping the country\'s first guidelines for sustainable film production. National sustainability requirements tied to funding are still being developed.',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            'EKOME manages a 40% cash rebate and tax-relief scheme for audiovisual production. The 2024 "Creative Greece" law (Law 5105/2024) modernised the incentive framework with the stated aim of making the audiovisual sector friendlier and more sustainable. EKOME and the Greek Film Center have been brought together into the Hellenic Film and Audiovisual Center (EKKOMED).',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• EKOME: National Centre of Audiovisual Media and Communication (cash rebate, Film Offices Network): https://www.ekkomed.gr/\n• 2024 Sustainability Standard workshop (EKOME + WaterBear Network): first national guidelines for sustainable production.',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Renewables covered about 48% of Greek electricity in 2024 (wind, solar, biomass), with gas around 41% and lignite down to roughly 4%, a rapid clean-up of the grid.\n\nEnergy mix source: https://ourworldindata.org/energy/country/greece (Our World in Data).',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        tools: {
          label: 'Calculators & tools',
          content:
            '• Green Toolkit Film&TV: https://www.greentoolkit-filmtv.eu/database/',
        },
      },
    },
  },

  Brazil: {
    code: 'BRA',
    name: 'Brazil',
    credit: null,
    sources: 'Panvision (EcoVision), Cinema Verde',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Green production in Brazil is emerging and largely company- and consultancy-led; there is no national green-production mandate. Awareness has grown since 2020, with a number of producers beginning to measure or offset their carbon footprint and adopt eco-responsible practices.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• EcoVision (Selo EcoVision): a sustainability programme run by Panvision since 2021, based on the UN Sustainable Development Goals, with a free carbon calculator calibrated to Latin America (built with ProMálaga, Spain; a 2025 version was launched with Petrobras), a catalogue of companies and professionals, consulting and training: https://www.panvision.com.br/ecovision.php\n• Cinema Verde: audiovisual production with socio-environmental responsibility: https://cinemaverde.com.br/\n• Aquarela: became the first production company in central-west Brazil to offset the carbon of all its activities (2020).',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Brazil has one of the cleanest large grids in the world: about 88% renewable in 2024, led by hydropower (around 48%) with fast-growing wind and solar.\n\nEnergy mix source: https://ourworldindata.org/energy/country/brazil (Our World in Data).',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        consultancies: {
          label: 'Sustainability consultancies',
          content:
            'Sustainability consultancies advise productions across development, pre-production, shooting and post-production. Examples include Panvision (EcoVision), Cinema Verde and Pindorama Filmes.',
        },
        tools: {
          label: 'Calculators & tools',
          content:
            '• EcoVision carbon calculator (free, Latin-America-calibrated) by Panvision: https://www.panvision.com.br/ecovision.php',
        },
      },
    },
  },

  'South Africa': {
    code: 'ZAF',
    name: 'South Africa',
    credit: null,
    sources: 'GREENSET, SA Film Academy, The Callsheet',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Green production is growing quickly, led by the non-profit GREENSET and reinforced by streamers (Netflix, HBO) that increasingly require sustainability measures on their South African shoots. The country is home to the first large green studio in Africa.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• GREENSET: non-profit established in 2020 under the SA Film Academy. It trains young "Eco Stewards" and "Green PAs" to roll out best practices and to measure carbon on set, using a bespoke film carbon calculator built with Credible Carbon (46 industry-specific indicators). It has earned 10 EMA Gold Seals and several albert certifications on international productions (e.g. Warrior S3, One Piece): https://safilmacademy.org/greenset/\n• Atlantic Green Studio: in 2023 GREENSET and Homebrew Films converted Atlantic Studios (Montague Gardens, Cape Town) into the first large sustainable "Green Studio" in Africa, running 80%+ on renewables.',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        wasteManagement: {
          label: 'Waste management rules',
          content:
            'Set construction is one of the biggest sources of hard-to-recycle waste on shoots, in particular polyurethane and polystyrene scenery. GREENSET runs a programme to cut and divert this set waste, and its Green PAs sort and recycle on set, with materials reused or passed on where possible rather than sent to landfill.',
        },
        gridConnection: {
          label: 'Grid connection',
          content:
            'South Africa\'s grid is coal-heavy (coal provides roughly 80% of electricity, generated mostly by Eskom) and reliability remains fragile after years of load-shedding, so on-grid power carries a high carbon footprint and productions often plan backup power. This is exactly why solar and battery solutions are taking off on South African sets, from the Atlantic Green Studio (80%+ renewable) to solar-hybrid units used on streamer productions.\n\nEnergy mix source: https://ourworldindata.org/energy/country/south-africa (Our World in Data).',
        },
        otherFacts: {
          label: 'Filming in natural environments',
          content:
            'Filming in national parks requires a SANParks film permit, assessed for impact and issued only after payment; filming without one can mean fines and confiscation of footage. Crew limits apply (at Table Mountain National Park, stills crews are capped at 15 and commercial crews at 30, and feature productions are not permitted), and drones are strictly prohibited in all SANParks parks. The Cape region is a global biodiversity hotspot: keep to tracks and protect fynbos and wildlife.',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        caseStudies: {
          label: 'Case studies & reports',
          content:
            '• The Callsheet feature on GREENSET\'s work across South African sets (2024): https://thecallsheet.co.za/2024/11/27/greenset-integrates-sustainability-into-every-step-of-the-filmmaking-process/',
        },
        tools: {
          label: 'Calculators & tools',
          content:
            '• GREENSET / Credible Carbon film carbon calculator (46 film-specific indicators).\n• BAFTA albert carbon calculator: https://wearealbert.org/',
        },
        networks: {
          label: 'Networks to join',
          content:
            '• GREENSET: https://safilmacademy.org/greenset/ (X/Twitter: @GreensetZa).',
        },
      },
    },
  },

  Morocco: {
    code: 'MAR',
    name: 'Morocco',
    credit: null,
    sources: 'Green Production Maroc',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Morocco is a major international shooting destination (notably around Ouarzazate). Given water stress and energy constraints, sustainable production is being structured by Green Production Maroc in partnership with the national film centre (CCM), aiming to make the country a model of responsible filming in Africa.',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            'Green Production Maroc supports the sector\'s ecological transition through training, certification and shared tools, working with the Centre Cinématographique Marocain (CCM) and executive producers. It offers the Green Production® Label, a standard recognised by IMANOR (the Moroccan standardisation body), allowing productions to demonstrate their environmental commitment.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• Green Production Maroc: label, training (e.g. "Environmental Reference" and energy-efficiency courses), technical guides, checklists and a directory of green service providers: https://www.greenproduction.ma/',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Morocco\'s electricity is still mostly fossil-based (coal around 64% in 2023, with wind around 15% and solar around 5%), but the country is investing heavily in renewables, targeting 52% of capacity by 2030. The flagship Noor Ouarzazate solar complex (582 MW, one of the largest in the world) sits near the country\'s main studio hub, and on-set solar and battery solutions are a natural fit for desert shoots.\n\nEnergy mix source: https://ourworldindata.org/energy/country/morocco (Our World in Data).',
        },
        otherFacts: {
          label: 'Filming in natural environments',
          content:
            'Morocco\'s desert and mountain locations are fragile and water-stressed, and water use is a central constraint for productions (a point stressed by Green Production Maroc). Keep vehicles on existing tracks to protect desert surfaces and vegetation, plan water consumption carefully, carry all waste back out, and respect protected areas and local communities\' land and water access.',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        tools: {
          label: 'Calculators & tools',
          content:
            '• Green Production Maroc: guides, checklists and green supplier directory: https://www.greenproduction.ma/',
        },
      },
    },
  },

  Australia: {
    code: 'AUS',
    name: 'Australia',
    credit: null,
    sources: 'Sustainable Screens Australia',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Green production is industry-led and scaling quickly. Sustainable Screens Australia (SSA), launched in 2022 with backing from Paramount ANZ, Netflix, ABC and SBS, is building a national framework, training and a shared carbon calculator for the screen sector.',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            'Sustainable Screens Australia adopts and administers the BAFTA albert carbon calculator for Australia, offering free training and support to productions, department-specific guides and checklists, and curated Sustainable Suppliers lists. Adam Liaw was announced co-chair in 2024. Docklands Studios Melbourne became Australia\'s first GreenPower-accredited film studio.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• Sustainable Screens Australia: https://www.sustainablescreens.au/\n• Tools & resources (guides, checklists, supplier lists): https://www.sustainablescreens.au/tools-resources',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Renewables supplied about 36% of Australian electricity in 2024 (solar around 18%, wind around 12%) with coal near 45% and falling; the mix varies a lot by state.\n\nEnergy mix source: https://ourworldindata.org/energy/country/australia (Our World in Data).',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        tools: {
          label: 'Calculators & tools',
          content:
            '• BAFTA albert carbon calculator (administered for Australia by SSA): https://wearealbert.org/\n• Sustainable Screens Australia: Tools & Resources: https://www.sustainablescreens.au/tools-resources',
        },
        networks: {
          label: 'Networks to join',
          content:
            '• Sustainable Screens Australia (membership): https://www.sustainablescreens.au/',
        },
      },
    },
  },

  'New Zealand': {
    code: 'NZL',
    name: 'New Zealand',
    credit: null,
    sources: 'Greenlit, Greening the Screen',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Aotearoa New Zealand pairs a long-standing best-practice guide with a newer industry-wide collaboration and a funding incentive. The Government\'s 5% rebate uplift (on the NZSPG) now carries mandatory sustainability requirements: productions must submit a Sustainability Action Plan, engage a sustainability manager and report their carbon emissions.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• Greenlit: industry-wide sustainability collaboration that supported 50+ productions in its first year: https://greenlit.org.nz/\n• "Greening the Screen": environmentally responsible principles for screen production, owned by the Ministry for the Environment and licensed to Film New Zealand: https://environment.govt.nz/publications/greening-the-screen/',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Around 87% of New Zealand\'s electricity is renewable, dominated by hydropower with a large geothermal share, so grid connections are a genuinely low-carbon choice.\n\nEnergy mix source: https://ourworldindata.org/energy/country/new-zealand (Our World in Data).',
        },
        otherFacts: {
          label: 'Filming in natural environments',
          content:
            'Commercial filming on public conservation land (about a third of the country) requires a concession from the Department of Conservation (DOC), with daily fees based on crew size. DOC and Film New Zealand jointly publish a Code of Practice for filming on conservation land, covering animals, pyrotechnics and helicopter or vehicle use. Plan ahead, keep clear of wildlife and sensitive vegetation, and leave locations as found: https://www.doc.govt.nz/get-involved/apply-for-permits/business-or-activity/filming/',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        caseStudies: {
          label: 'Case studies & reports',
          content:
            '• Greenlit case studies from Aotearoa productions: https://greenlit.org.nz/case-studies/',
        },
        networks: {
          label: 'Networks to join',
          content:
            '• Greenlit (Aotearoa New Zealand screen sustainability): https://greenlit.org.nz/',
        },
      },
    },
  },

  Bangladesh: {
    code: 'BGD',
    name: 'Bangladesh',
    credit: null,
    sources: 'IAFM Eco Film Lab',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Green filmmaking in Bangladesh is driven largely through film education rather than industry regulation. The International Academy of Film and Media (IAFM) runs an international residency dedicated to sustainable production and is a member of the Green Film School Alliance (USA).',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• IAFM: ECO Film Lab: International Film Residency, a paperless, plastic-free program fostering sustainable production and environmentally conscious storytelling among emerging filmmakers and film schools (a 2026 edition was held in Bandarban): https://ecofilmlab.iafmedu.net/\n• The ECO Film Lab short film "NISHI" received the 35th Environmental Media Association (EMA) Award (2025) in Los Angeles.\n• IAFM is a member of the Green Film School Alliance (GFSA), USA.',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Bangladesh\'s grid runs mostly on natural gas (around 43%) and coal (around 28%), with significant imports; renewables remain marginal so far, and backup generators are common during shortfalls.\n\nEnergy mix source: https://ourworldindata.org/energy/country/bangladesh (Our World in Data).',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        trainings: {
          label: 'Trainings',
          content:
            '• IAFM ECO Film Lab: international residency on sustainable and green filmmaking: https://ecofilmlab.iafmedu.net/',
        },
      },
    },
  },

  India: {
    code: 'IND',
    name: 'India',
    credit: null,
    sources: 'press and industry coverage',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'India approaches sustainability on its own terms. Reuse, repair and resource-efficient, low-waste ways of working are long part of its production culture, even where formal carbon auditing and green certification remain uncommon. Measured, certified green production is still developing, advanced by individual films, OTT/streaming pilots and a small number of consultancies, with no single national framework so far.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• "Aisa Yeh Jahaan" (2015): widely reported as India\'s first carbon-neutral film, offsetting its emissions in collaboration with the Centre for Environmental Research and Education (CERE), Mumbai.\n• Some OTT/streaming productions have piloted on-set measures such as waste diversion and reduced single-use plastics.',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'India\'s grid is coal-heavy (coal provides roughly three-quarters of generation) even as solar and wind grow quickly, and productions commonly carry diesel backup; cleaner mobile power is a major lever.\n\nEnergy mix source: https://ourworldindata.org/energy/country/india (Our World in Data).',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {},
    },
  },

  Togo: {
    code: 'TGO',
    name: 'Togo',
    credit: null,
    sources: 'Festival Ecoprod Afrique, press coverage',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Togo\'s film sector is young and being structured, a Cinema and Animated Image Code (2021), the national centre CNCIA and the support fund FoNSICA were set up in 2021-2022. Ecological cinema is at a grassroots, festival-driven stage rather than tied to production regulation.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• Festival Ecoprod Afrique: a Lomé-based festival created to promote more ecological cinema across Africa, linked to filmmaker Israel Tounou (creator of Togo\'s first TV cinema programme "Ciné Art"). Note: it has not been held in the last few years and its current status is unclear: https://www.facebook.com/festivalecoprodafrique/',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Togo has historically imported most of its electricity from neighbouring countries, and is building domestic solar capacity, including the 50 MW Blitta plant, one of the largest solar farms in West Africa.\n\nEnergy mix source: https://ourworldindata.org/energy/country/togo (Our World in Data).',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        networks: {
          label: 'Networks to join',
          content:
            '• Festival Ecoprod Afrique (Lomé, status currently unclear): https://www.facebook.com/festivalecoprodafrique/',
        },
      },
    },
  },

  Mexico: {
    code: 'MEX',
    name: 'Mexico',
    credit: null,
    sources: 'EcoFilming',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Green production is consultancy-led and growing; there is no national mandate. Pioneering productions have begun certifying their sustainability with international seals, supported by streamers and Latin-American consultancies.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• EcoFilming: a Latin-American sustainability consultancy that measures production carbon footprints (GHG Protocol, BAFTA albert, PEAR) and advised "La Rueda de la Suerte", reported as the first entertainment production in Mexico to earn the Environmental Media Association (EMA) Gold Seal: https://www.ecofilming.green/',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Mexico\'s grid runs mostly on natural gas (around 60%), with renewables near 20 to 25%; the government has announced a 45% renewable target for 2030.\n\nEnergy mix source: https://ourworldindata.org/energy/country/mexico (Our World in Data).',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        tools: {
          label: 'Calculators & tools',
          content:
            '• EcoFilming (consultancy & carbon measurement): https://www.ecofilming.green/\n• BAFTA albert carbon calculator: https://wearealbert.org/',
        },
      },
    },
  },

  Argentina: {
    code: 'ARG',
    name: 'Argentina',
    credit: null,
    sources: 'APAC, FINCA',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Sustainable production is advancing through industry associations and festivals rather than a binding national rule. A dedicated programme provides practical tools and guidance toward carbon-neutral productions.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• APAC (Asociación de Productoras Audiovisuales Publicitarias): "Producción Audiovisual Sustentable" programme: an online toolkit with a carbon-footprint calculator, a manual of sustainable practices and checklists by department, aimed at carbon-neutral production: https://www.asociacionapac.org/produccionaudiovisualsustentable/\n• "Reina Animal": first feature reported to apply the programme and offset its footprint (carob trees planted in Villa Allende, Córdoba).\n• FINCA: sustainable-cinema / green-production strand: https://finca.imd.org.ar/en/sustainable-filmmaking/',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Argentina\'s electricity came roughly 49% from gas, 25% from hydro, 11% from wind and 7% from nuclear in 2024, a mid-carbon grid with a growing wind share.\n\nEnergy mix source: https://ourworldindata.org/energy/country/argentina (Our World in Data).',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        tools: {
          label: 'Calculators & tools',
          content:
            '• APAC carbon-footprint calculator & sustainable-practices manual: https://www.asociacionapac.org/produccionaudiovisualsustentable/',
        },
      },
    },
  },

  Colombia: {
    code: 'COL',
    name: 'Colombia',
    credit: null,
    sources: 'Bogotá Film Commission, Proimágenes Colombia',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Sustainable production is led by Proimágenes Colombia and the Bogotá Film Commission, which since 2023 have run an "eco-sustainability route" with training, best-practice guidance and a Bogotá-specific carbon calculator. Productions are encouraged to appoint dedicated sustainability staff (ecoconsultores / ecomanagers / ecopas).',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• Bogotá Film Commission: "ruta de ecosostenibilidad" (since 2023): training on waste and good practices by department, plus a carbon-footprint calculator adapted to Bogotá: https://comisionfilmicacolombia.com/en/procedures/sustainableproduction/\n• Proimágenes Colombia: promotes reducing the socio-environmental impact of audiovisual productions: https://www.proimagenescolombia.com/',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Colombia\'s grid is about 70% hydropower, making on-grid power low-carbon in normal years, though droughts can swing the mix back toward gas and coal.\n\nEnergy mix source: https://ourworldindata.org/energy/country/colombia (Our World in Data).',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        tools: {
          label: 'Calculators & tools',
          content:
            '• Bogotá audiovisual carbon-footprint calculator (Bogotá Film Commission): https://comisionfilmicacolombia.com/en/procedures/sustainableproduction/',
        },
      },
    },
  },

  Estonia: {
    code: 'EST',
    name: 'Estonia',
    credit: null,
    sources: 'Baltic Green Film, IEA',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Green production is at an early, grassroots stage, a national institutional framework is not yet in place, and momentum comes mainly from the cross-border Baltic Green Film network and from the animation sector. Estonia has a strong stop-motion tradition led by Nukufilm, the world\'s oldest still-running puppet-animation studio (founded 1957, Tallinn).',
        },
        decarbonizationPlan: {
          label: 'Decarbonization plan',
          content:
            'Estonia targets climate neutrality by 2050 and 100% renewable electricity by 2030. It plans to stop generating electricity from oil shale by 2035 and to phase out oil shale in energy entirely by 2040, a major shift, as oil shale long made Estonia\'s power among the most carbon-intensive in the EU (source: IEA, https://www.iea.org/countries/estonia).',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• Baltic Green Film: a sustainability initiative and knowledge-sharing network across Estonia, Latvia and Lithuania, offering training and building a regional pool of experts: https://balticgreenfilm.com/\n• Stop-motion sustainability: a 2022 Tallinn seminar began work on a first sustainable production guide for stop-motion films; the ANIMARKT 2024 Stop Motion Forum required each submitted project to include a sustainable production plan (10% of the evaluation).',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Estonia\'s grid synchronised with the Continental European network (together with Latvia and Lithuania) in February 2025, ending reliance on the Russian system. Electricity has historically been oil-shale-based and carbon-intensive, but is shifting quickly to wind and solar, with a target of 100% renewable electricity by 2030.\n\nEnergy mix source: https://ourworldindata.org/energy/country/estonia (Our World in Data).',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        tools: {
          label: 'Calculators & tools',
          content:
            'There is no national, film-specific carbon calculator or local certification scheme yet (the sector is at a grassroots stage). Estonian productions use established international tools, the credible, widely recognised ones are BAFTA albert (https://wearealbert.org/) and the Green Producers Tool (https://www.greenproducers.club/).\n• Baltic Green Film: https://balticgreenfilm.com/',
        },
        networks: {
          label: 'Networks to join',
          content:
            '• Baltic Green Film (Estonia/Latvia/Lithuania): https://balticgreenfilm.com/\n• Nukufilm: stop-motion studio, Tallinn: https://nukufilm.ee/en/',
        },
      },
    },
  },

  Latvia: {
    code: 'LVA',
    name: 'Latvia',
    credit: null,
    sources: 'Baltic Green Film, National Film Centre of Latvia, IEA',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Green production is at an early, grassroots stage; a national institutional framework is not yet in place. Momentum comes mainly from the cross-border Baltic Green Film network, with the National Film Centre of Latvia (under the Ministry of Culture) as the national body.',
        },
        decarbonizationPlan: {
          label: 'Decarbonization plan',
          content:
            'Latvia targets climate neutrality by 2050, with greenhouse-gas cuts of 65% by 2030 and 85% by 2040 (vs. 1990) and 57% of total energy from renewables by 2030. Its electricity is already about three-quarters renewable, mostly hydropower (the Daugava river) and biomass (sources: IEA; Latvia National Energy & Climate Plan).',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• Baltic Green Film: regional sustainability network (Estonia/Latvia/Lithuania): https://balticgreenfilm.com/\n• National Film Centre of Latvia (Nacionālais Kino centrs): https://www.nkc.gov.lv/en',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Latvia\'s grid synchronised with the Continental European network in February 2025. Electricity is predominantly renewable (about three-quarters), led by hydropower on the Daugava and biomass, a relatively low-carbon grid for productions.\n\nEnergy mix source: https://ourworldindata.org/energy/country/latvia (Our World in Data).',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        tools: {
          label: 'Calculators & tools',
          content:
            'There is no national, film-specific carbon calculator or local certification scheme yet; Latvian productions rely on established international tools, the credible, widely recognised ones are BAFTA albert (https://wearealbert.org/) and the Green Producers Tool (https://www.greenproducers.club/).\n• Baltic Green Film: https://balticgreenfilm.com/',
        },
        networks: {
          label: 'Networks to join',
          content:
            '• Baltic Green Film: https://balticgreenfilm.com/\n• National Film Centre of Latvia: https://www.nkc.gov.lv/en',
        },
      },
    },
  },

  Lithuania: {
    code: 'LTU',
    name: 'Lithuania',
    credit: null,
    sources: 'Baltic Green Film, Lithuanian Film Centre, IEA',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Green production is at an early, grassroots stage, driven mainly by the cross-border Baltic Green Film network and the Baltic Film & Creative Tech Cluster, with the Lithuanian Film Centre (LKC) as the national body. A formal national framework is not yet in place.',
        },
        decarbonizationPlan: {
          label: 'Decarbonization plan',
          content:
            'Lithuania targets net-zero emissions by 2050, with greenhouse-gas cuts of 70% by 2030 and 85% by 2040 (vs. 1990). It aims to move from electricity importer to net exporter by 2030, expanding wind (including offshore) and solar (source: IEA, https://www.iea.org/countries/lithuania).',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• Baltic Green Film: regional sustainability network (Estonia/Latvia/Lithuania): https://balticgreenfilm.com/\n• Baltic Film & Creative Tech Cluster: GreenCCircle project on sustainability skills and training: https://www.film-creative.tech/\n• Lithuanian Film Centre (LKC): https://www.lkc.lt/en/',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Lithuania\'s grid synchronised with the Continental European network in February 2025, ending reliance on the Russian system. The country closed the Ignalina nuclear plant in 2009 and now relies on imports plus fast-growing wind and solar, aiming to become a net electricity exporter by 2030.\n\nEnergy mix source: https://ourworldindata.org/energy/country/lithuania (Our World in Data).',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        tools: {
          label: 'Calculators & tools',
          content:
            'There is no national, film-specific carbon calculator or local certification scheme yet; Lithuanian productions use established international tools, the credible, widely recognised ones are BAFTA albert (https://wearealbert.org/) and the Green Producers Tool (https://www.greenproducers.club/).\n• Baltic Green Film: https://balticgreenfilm.com/',
        },
        networks: {
          label: 'Networks to join',
          content:
            '• Baltic Green Film: https://balticgreenfilm.com/\n• Baltic Film & Creative Tech Cluster: https://www.film-creative.tech/',
        },
      },
    },
  },

  Switzerland: {
    code: 'CHE',
    name: 'Switzerland',
    credit: null,
    sources: 'Sustainable Arts',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Green production is gaining ground, coordinated mainly by the funding and support bodies rather than by binding national rules. The shared platform Sustainable Arts brings sustainability to the film and wider cultural sector.',
        },
        decarbonizationPlan: {
          label: 'Decarbonization plan',
          content:
            'Switzerland has a legal target of net-zero greenhouse-gas emissions by 2050, set by the Climate and Innovation Act approved by referendum in June 2023. Its electricity is already largely low-carbon, predominantly hydropower (around 60%) and nuclear (about a third).',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• Sustainable Arts: sustainability platform for the cultural sector, backed by the Zürich Film Foundation (Filmstiftung), Migros Engagement/Kulturprozent and Cinéforom; offers a carbon calculator for cultural/film productions plus checklists and guides: https://sustainablearts.ch/en/sustainability-in-the-film-industry/\n• nachhaltigfilmen.ch: Swiss research and resources on sustainable filmmaking.',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Switzerland\'s grid is largely low-carbon, dominated by hydropower (around 60%) and nuclear (about a third), so productions connecting to the mains draw relatively clean electricity.\n\nEnergy mix source: https://ourworldindata.org/energy/country/switzerland (Our World in Data).',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        tools: {
          label: 'Calculators & tools',
          content:
            '• Carbon calculator for cultural/film productions via Sustainable Arts: https://sustainablearts.ch/en/sustainability-in-the-film-industry/\n\nNote: Sustainable Arts provides tools and guidance, not a certified label, there is no Swiss film-specific certification with independent third-party verification. The credible, widely recognised international calculators are BAFTA albert (https://wearealbert.org/) and Ecoprod\'s Carbon\'Clap (https://ecoprod.com/).',
        },
      },
    },
  },

  Luxembourg: {
    code: 'LUX',
    name: 'Luxembourg',
    credit: null,
    sources: 'Film Fund Luxembourg, IEA',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Green production is at an early stage and not yet tied to binding criteria. Film Fund Luxembourg states a general commitment to sustainable practices, and EU Creative Europe applications require a "Green Strategy", but there is no published national green-production certification or carbon-reporting requirement yet.',
        },
        decarbonizationPlan: {
          label: 'Decarbonization plan',
          content:
            'Luxembourg targets net-zero greenhouse-gas emissions and 100% renewable electricity by 2050, with a 55% emissions cut by 2030 (National Climate Law). The country imports the large majority of its electricity (around 97%), so a production\'s grid footprint depends heavily on the wider European mix.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• Film Fund Luxembourg: supports the sector and states a commitment to eco-responsible practices and reducing waste: https://filmfund.lu/en/about-us/missions-and-values/',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Luxembourg imports around 97% of its electricity, so on-grid productions draw largely on the surrounding European mix rather than domestic generation; domestic output is mostly renewable but small.\n\nEnergy mix source: https://ourworldindata.org/energy/country/luxembourg (Our World in Data).',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        tools: {
          label: 'Calculators & tools',
          content:
            'No national film-specific carbon calculator or certification yet. Luxembourg productions use established international tools, the credible, widely recognised ones are BAFTA albert (https://wearealbert.org/) and Ecoprod\'s Carbon\'Clap (https://ecoprod.com/).',
        },
      },
    },
  },

  Slovenia: {
    code: 'SVN',
    name: 'Slovenia',
    credit: null,
    sources: 'Slovenian Film Centre, IEA',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Green production is emerging; there is no binding national green-production scheme yet. EU Creative Europe applications require a "Green Strategy" and awareness is rising, but a dedicated Slovenian certification or carbon calculator is not in place.',
        },
        decarbonizationPlan: {
          label: 'Decarbonization plan',
          content:
            'Slovenia targets climate neutrality by 2050 and has adopted a strategy to phase out coal by 2033. Its electricity is already fairly low-carbon, about a third from the single-unit Krško nuclear plant, plus hydropower, with the remaining coal generation (around 30%) being phased out.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• Slovenian Film Centre (SFC): national film body: https://www.film-center.si/\n• The EU Creative Europe "Green Strategy" requirement applies to EU-funded applications.',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Slovenia\'s electricity is relatively low-carbon, roughly a third from the Krško nuclear plant plus hydropower, with its remaining coal generation (around 30%) due to be phased out by 2033.\n\nEnergy mix source: https://ourworldindata.org/energy/country/slovenia (Our World in Data).',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        tools: {
          label: 'Calculators & tools',
          content:
            'No national film-specific carbon calculator or certification yet; Slovenian productions use established international tools, the credible, widely recognised ones are BAFTA albert (https://wearealbert.org/) and Ecoprod\'s Carbon\'Clap (https://ecoprod.com/).',
        },
      },
    },
  },

  Serbia: {
    code: 'SRB',
    name: 'Serbia',
    credit: null,
    sources: 'IESI, IEA',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Green production is driven by grassroots organisations rather than by the public funding body: Film Center Serbia runs the cash-rebate scheme but has no green-production requirement. The main mover is IESI, which is building regional standards, training and tools.',
        },
        decarbonizationPlan: {
          label: 'Decarbonization plan',
          content:
            'Serbia is not an EU member and its grid is coal-heavy: in 2024 about 60% of electricity came from coal (mostly lignite), roughly 30% from hydropower and around 10% from other renewables, so on-grid productions have a comparatively high carbon footprint. As an Energy Community member Serbia has pledged carbon neutrality by 2050, but the coal phase-out is at an early stage.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• IESI (Initiative for Ecological Standardization and Innovation): a Belgrade-based organisation working on the sustainable and digital transformation of the audiovisual industry in the Balkans and Eastern Europe. Projects: Circular Cinema (set-waste circular economy, which also trains informal waste collectors and integrates them into formal channels), Zelena mreža / Green Network (eco-managers and consultants), Eko vozila / Eco Vehicles, and the GAVIS platform: https://iesi.eco/',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Serbia\'s grid is coal-heavy, around 60% lignite in 2024, with roughly 30% hydropower and about 10% other renewables, giving productions a relatively high-carbon electricity footprint compared with most of Europe.\n\nEnergy mix source: https://ourworldindata.org/energy/country/serbia (Our World in Data).',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        tools: {
          label: 'Calculators & tools',
          content:
            '• IESI offers a regional rating system, an eco-calculator and green-production "certification": https://iesi.eco/\n\nImportant: IESI\'s rating, calculator and certification are run in-house; the public information does not state any independent third-party verification, so it should be treated as a self-administered scheme rather than an externally audited certification. The established international calculators are BAFTA albert (https://wearealbert.org/) and Ecoprod\'s Carbon\'Clap (https://ecoprod.com/).',
        },
      },
    },
  },

  'Costa Rica': {
    code: 'CRI',
    name: 'Costa Rica',
    credit: null,
    sources: 'Costa Rica Film Commission, SINAC',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Costa Rica\'s sustainability model is built around nature first. The country holds roughly 6.5% of the world\'s biodiversity and protects more than a quarter of its territory as national parks and reserves, and it positions itself as a destination for ecological shooting on a near-fully renewable grid. The Costa Rica Film Commission supports productions and emphasises low-impact filming in natural locations rather than carbon paperwork.',
        },
        decarbonizationPlan: {
          label: 'Decarbonization plan',
          content:
            'Costa Rica runs one of the cleanest grids in the world (around 98 to 99% renewable, mostly hydropower and geothermal, with wind and solar) and pursues its National Decarbonization Plan 2018 to 2050, targeting net-zero emissions by 2050. Conservation is central: over 28% of the land is protected.',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            'Filming in protected areas is managed by SINAC (National System of Conservation Areas), which permits national parks and reserves individually, with a per-day fee that depends on the project. A standard permit takes up to about 15 days; national parks may take longer. The Costa Rica Film Commission coordinates permits and promotes sustainable shooting: https://www.costaricafilmcommission.org/',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Costa Rica\'s electricity is almost entirely renewable (around 98 to 99%, led by hydropower and geothermal, with wind and solar), so productions drawing on the grid use very low-carbon power.\n\nEnergy mix source: https://ourworldindata.org/energy/country/costa-rica (Our World in Data).',
        },
        otherFacts: {
          label: 'Filming in natural environments',
          content:
            'Recommendations for productions shooting in nature (in Costa Rica and beyond):\n• Secure the right permits for every protected area (in Costa Rica, each reserve is permitted separately through SINAC).\n• Follow Leave No Trace practices and carry all waste back out for proper disposal.\n• Never bait, chase, feed or manipulate wildlife; film animals only in their natural behaviour (see the American Humane "Wildlife Guidelines for Filmed Media").\n• Keep to established trails and access points, flag and protect sensitive habitats, and use mats or temporary pathways over fragile ground.\n• Work with local conservationists or an on-site ecological supervisor who knows the terrain and the species at risk.',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        networks: {
          label: 'Networks to join',
          content:
            '• Costa Rica Film Commission: https://www.costaricafilmcommission.org/\n• SINAC (National System of Conservation Areas): permits for filming in national parks and reserves.',
        },
      },
    },
  },

  Kenya: {
    code: 'KEN',
    name: 'Kenya',
    credit: null,
    sources: 'Kenya Film Commission, Kenya Wildlife Service',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Kenya is a major natural-location destination, and its green credentials run mainly through wildlife conservation rather than carbon paperwork. Filming in parks and reserves is tied to conservation rules, and part of the fees is reinvested in protecting the habitats that productions rely on.',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            'Filming is licensed by the Kenya Film Commission and the Kenya Film and Classification Board (Film and Stage Plays Act, Cap. 222). Shooting in national parks, reserves or other protected areas needs a permit from the Kenya Wildlife Service (KWS) under the Wildlife Conservation and Management Act (2013), and productions must follow KWS conservation guidelines. Where a shoot has significant environmental impact, KWS may levy an environmental restoration fee (reported at around 15% of the fees paid): https://kenyafilmcommission.go.ke/',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• Kenya Film Commission: https://kenyafilmcommission.go.ke/\n• Kenya Wildlife Service (KWS), permits and conservation guidelines for protected areas: https://kws.go.ke/',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Kenya has one of the cleanest grids in Africa: around 90% of its electricity is renewable, led by geothermal (about 46%) with hydropower, wind (including the Lake Turkana wind farm) and solar, and the country targets fully clean generation by 2030. Plugging into the grid is therefore a genuinely low-carbon option in cities; in remote locations, reliability varies and productions still bring backup power.\n\nEnergy mix source: https://ourworldindata.org/energy/country/kenya (Our World in Data).',
        },
        otherFacts: {
          label: 'Filming in natural environments',
          content:
            'Filming in Kenya\'s parks and reserves means working under KWS conservation rules: keep to authorised areas and tracks, do not disturb, bait or feed wildlife, minimise your footprint and waste, and budget for the environmental restoration fee where impact is significant.',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        networks: {
          label: 'Networks to join',
          content:
            '• Kenya Film Commission: https://kenyafilmcommission.go.ke/\n• Kenya Wildlife Service (KWS): https://kws.go.ke/',
        },
      },
    },
  },

  Botswana: {
    code: 'BWA',
    name: 'Botswana',
    credit: null,
    sources: 'Government of Botswana (filming permits)',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Botswana protects its wildlife and wild places through some of the strictest filming rules in Africa. Much of its appeal (the Okavango Delta, the Kalahari) lies inside protected areas, so sustainability here is framed first as wildlife welfare and habitat protection rather than carbon accounting.',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            'Filming in national parks and game reserves requires an Environmental Filming and Photography Permit, and successful applicants sign a Memorandum of Agreement with the Government before shooting. The national Filming Guidelines (2019) set out a wildlife code of conduct that crews must follow: https://www.gov.bw/sites/default/files/2020-03/Filming_Guidelines_2019_Final_(2)%5B1%5D.pdf',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• Government of Botswana, Ministry of Environment and Tourism: Environmental Filming and Photography Permit and Filming Guidelines (2019): https://www.gov.bw/sites/default/files/2020-03/Filming_Guidelines_2019_Final_(2)%5B1%5D.pdf',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Botswana generates from domestic coal (the Morupule plants) topped up with substantial imports from the regional power pool, so on-grid electricity is carbon-intensive; the country\'s solar potential is vast.\n\nEnergy mix source: https://ourworldindata.org/energy/country/botswana (Our World in Data).',
        },
        otherFacts: {
          label: 'Filming in natural environments',
          content:
            'Botswana\'s wildlife code of conduct prohibits using sound recordings to attract animals and bans darting animals for filming. Only licensed professionals may handle or capture wildlife; where a capture is filmed it must be supervised by an approved veterinary officer and the crew must not interfere. Foreign crews must clear compliance before permits and visas are issued.',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        networks: {
          label: 'Networks to join',
          content:
            '• Government of Botswana, Environmental Filming and Photography Permit: https://www.gov.bw/sites/default/files/2020-03/Filming_Guidelines_2019_Final_(2)%5B1%5D.pdf',
        },
      },
    },
  },

  Nigeria: {
    code: 'NGA',
    name: 'Nigeria',
    credit: null,
    sources: 'Nollywood press coverage, African SDG Film Festival',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Nigeria\'s screen sector (Nollywood, one of the world\'s largest by output) is engaging with sustainability mainly through storytelling and awareness so far, rather than a formal green-production framework. Practical green production is emerging, with some productions reducing waste, using digital sets and more efficient equipment.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            'Awareness (not production standards): Nollywood is increasingly used for environmental storytelling, and the African SDG Film Festival, hosted by the recycling company Chanja Datti, uses film to advance the UN Sustainable Development Goals. These are advocacy and awareness efforts.',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Nigeria\'s national grid (mostly gas-fired, with hydropower around 20%) is unreliable, with repeated nationwide collapses, so most productions, like most businesses, run on diesel or petrol generators; backup generators are estimated to produce around 40% of all electricity consumed in the country. That makes cleaner mobile power (batteries, solar-hybrid units, generator right-sizing) one of the single biggest levers for greener shoots in Nigeria.\n\nEnergy mix source: https://ourworldindata.org/energy/country/nigeria (Our World in Data).',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        trainings: {
          label: 'Trainings',
          content:
            'Training specifically in green production is still limited, and should not be confused with the awareness efforts above. General producer-development schemes such as Film Lab Africa (funded by the British Council) build broader sector capacity, but they are not sustainability-specific.',
        },
      },
    },
  },

  Rwanda: {
    code: 'RWA',
    name: 'Rwanda',
    credit: null,
    sources: 'Rwanda Development Board, Rwanda Film Office',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'In Rwanda, sustainability for productions runs mainly through conservation. The country is a prime wildlife-filming destination (mountain gorillas in Volcanoes National Park), and access is tightly managed to protect the animals and their habitat rather than through carbon paperwork.',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            'Filming is overseen by the Rwanda Film Office and the Rwanda Development Board (RDB). Gorilla and park filming needs a dedicated filming permit, separate from a tourist trekking permit; applicants submit the project purpose, crew size and equipment, and the RDB reviews it against conservation priorities.',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Rwanda\'s electricity comes largely from hydropower plus the KivuWatt plant, which turns methane dissolved in Lake Kivu into power (around 30% of national consumption), an unusual local solution.\n\nEnergy mix source: https://ourworldindata.org/energy/country/rwanda (Our World in Data).',
        },
        otherFacts: {
          label: 'Filming in natural environments',
          content:
            'Gorilla filming follows the same conservation limits as a normal visit: small crews, a maximum of one hour with the animals, and a safe distance kept at all times. Work with park officials, avoid littering, and do not disturb wildlife or habitats.',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        networks: {
          label: 'Networks to join',
          content:
            '• Rwanda Development Board / Rwanda Film Office: https://rdb.rw/',
        },
      },
    },
  },

  Tanzania: {
    code: 'TZA',
    name: 'Tanzania',
    credit: null,
    sources: 'Tanzania Film Board, TANAPA',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Tanzania is a major wildlife-filming destination (the Serengeti, Ngorongoro, Kilimanjaro), and sustainability is framed first as protecting those ecosystems. Access to parks is regulated, with fees that fund conservation.',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            'Filming needs a permit from the Tanzania Film Board, and shooting in national parks also requires a permit from the Tanzania National Parks Authority (TANAPA). As an example, filming in the Serengeti or Nyerere carried a fee of about 300 US dollars per day (2024 to 2025), covering camping and conservation. Productions also clear permits with the Ministry of Defence and the civil aviation authority (TCAA).',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Tanzania\'s mix shifted strongly to hydropower as the 2,115 MW Julius Nyerere plant came online (hydro is now around 59% of installed capacity, gas around 35%), cutting the grid\'s carbon intensity.\n\nEnergy mix source: https://ourworldindata.org/energy/country/tanzania (Our World in Data).',
        },
        otherFacts: {
          label: 'Filming in natural environments',
          content:
            'Drone filming is heavily restricted to protect wildlife: drones must fly above a set minimum height, operate under park-staff supervision, and never over river crossings in the Serengeti. Keep a safe distance from animals and follow park guidance.',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        networks: {
          label: 'Networks to join',
          content:
            '• Tanzania National Parks Authority (TANAPA).\n• Tanzania Film Board.',
        },
      },
    },
  },

  Namibia: {
    code: 'NAM',
    name: 'Namibia',
    credit: null,
    sources: 'Namibia Film Commission',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Namibia is globally known for community-based conservation, and its deserts and parks are popular filming locations. Sustainability for productions centres on protecting fragile habitats and wildlife while shooting on location.',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            'Filming is coordinated by the Namibia Film Commission; shooting in national parks and protected areas needs permits from the relevant authorities (the Ministry of Environment, Forestry and Tourism or park management). An environmental officer is required on set each day of filming in a national park, with additional fees.',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Namibia imports a large share of its electricity from the Southern African Power Pool; domestic generation is led by the Ruacana hydropower station, and the country\'s solar potential is among the best in the world.\n\nEnergy mix source: https://ourworldindata.org/energy/country/namibia (Our World in Data).',
        },
        otherFacts: {
          label: 'Filming in natural environments',
          content:
            'Inside parks and protected areas, certain activities are restricted to safeguard wildlife and habitat, including flying drones, lighting fires, disturbing animals or entering sensitive areas. Keep a respectful distance and follow the park management guidelines.',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        networks: {
          label: 'Networks to join',
          content:
            '• Namibia Film Commission: https://nfc.na/',
        },
      },
    },
  },

  Uganda: {
    code: 'UGA',
    name: 'Uganda',
    credit: null,
    sources: 'Uganda Wildlife Authority, Media Council of Uganda',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Uganda is a wildlife-filming destination (mountain gorillas and chimpanzees in Bwindi and other parks), and sustainability is framed first as conservation. Filming fees help fund protected areas and local communities.',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            'Filming in parks needs a commercial filming permit from the Uganda Wildlife Authority (UWA), plus media accreditation from the Media Council of Uganda. For gorilla filming, UWA caps crews at 8 people per group and requires a safe distance of at least 10 metres. UWA charges a filming fee (around 40% of the activity) plus a monitoring fee (around 10%).',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Uganda\'s grid is overwhelmingly clean: with the 600 MW Karuma plant commissioned in 2024, generation is around 93% renewable, led by hydropower.\n\nEnergy mix source: https://ourworldindata.org/energy/country/uganda (Our World in Data).',
        },
        otherFacts: {
          label: 'Filming in natural environments',
          content:
            'Crew-size limits and distance rules are conservation measures: keep groups small, stay back from the animals, follow ranger guidance, and avoid anything that changes wildlife behaviour.',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        networks: {
          label: 'Networks to join',
          content:
            '• Uganda Wildlife Authority (UWA): https://ugandawildlife.org/',
        },
      },
    },
  },

  Romania: {
    code: 'ROU',
    name: 'Romania',
    credit: null,
    sources: 'Green Screen (Interreg Europe), Bucharest-Ilfov RDA',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Romania took part in European policy work on greening the screen sector, though a binding national green-production scheme is not yet in place. As an EU member it is bound by the EU goal of climate neutrality by 2050.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• Green Screen (Interreg Europe, 2017 to 2021): a partnership of eight European film regions to cut the film and TV carbon footprint. The Bucharest-Ilfov Regional Development Agency was the Romanian partner and developed a regional action plan: https://www.interregeurope.eu/greenscreen',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Romania\'s grid is about two-thirds low-carbon, led by hydropower (around 22%) and nuclear (around 19%) plus growing wind and solar.\n\nEnergy mix source: https://ourworldindata.org/energy/country/romania (Our World in Data).',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        tools: {
          label: 'Calculators & tools',
          content:
            'No national film-specific calculator yet; Romanian productions use established international tools, the credible ones being BAFTA albert (https://wearealbert.org/) and Ecoprod\'s Carbon\'Clap (https://ecoprod.com/).',
        },
      },
    },
  },

  Zimbabwe: {
    code: 'ZWE',
    name: 'Zimbabwe',
    credit: null,
    sources: 'ZimParks',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Zimbabwe is a wildlife-filming destination (Hwange, Mana Pools, Victoria Falls, Lake Kariba), and sustainability is framed first as protecting these protected areas. There is no formal green-production scheme we could verify.',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            'Filming in protected areas is regulated by the Zimbabwe Parks and Wildlife Management Authority (ZimParks) under the Parks and Wildlife Act (Chapter 20:14). Commercial, documentary and educational filming is charged per day, and commercial equipment used without the proper permit can be impounded.',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Zimbabwe depends on Kariba hydropower and coal, plus imports; drought slashed Kariba output in 2024 and brought long load-shedding hours, so productions should plan power carefully and favour battery or solar backup over diesel where possible.\n\nEnergy mix source: https://ourworldindata.org/energy/country/zimbabwe (Our World in Data).',
        },
        otherFacts: {
          label: 'Filming in natural environments',
          content:
            'Secure ZimParks permits before filming in any national park, safari area or reserve, keep a safe distance from wildlife, and follow the authority guidance on access and conduct.',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {
        networks: {
          label: 'Networks to join',
          content:
            '• Zimbabwe Parks and Wildlife Management Authority (ZimParks): https://www.zimparks.org.zw/',
        },
      },
    },
  },

  Senegal: {
    code: 'SEN',
    name: 'Senegal',
    credit: null,
    sources: 'FOPICA, Direction de la Cinématographie',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Public information on green production in Senegal is currently limited, and we could not verify a dedicated national framework. The sector is structured around public funding, which also supports animation. If you know of green-production initiatives here, please contribute.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• FOPICA (Fonds de Promotion de l\'Industrie Cinématographique et Audiovisuelle): the national fund supporting film and audiovisual works of all genres, including animation. Created in 2002 and launched in 2013, later raised to about 2 billion CFA francs.',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Senegal\'s electricity is still mostly oil-fired (over 80% in 2024), with wind (Taiba Ndiaye) and solar growing; on-grid power is carbon-intensive, which makes battery and solar solutions attractive.\n\nEnergy mix source: https://ourworldindata.org/energy/country/senegal (Our World in Data).',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {},
    },
  },

  Ghana: {
    code: 'GHA',
    name: 'Ghana',
    credit: null,
    sources: 'National Film Authority',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Public information on green production in Ghana is currently limited, and we could not verify a dedicated national framework. The National Film Authority regulates and supports the sector; productions must meet general environmental, health and safety requirements when obtaining permits. If you know of green-production initiatives here, please contribute.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• National Film Authority (NFA): established under the Development and Classification of Film Act, 2016 (Act 935): https://nfa.gov.gh/',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Ghana\'s grid mixes hydropower (around 39%, led by the Akosombo dam) with gas-fired thermal generation (around 60%), a moderate carbon intensity by regional standards.\n\nEnergy mix source: https://ourworldindata.org/energy/country/ghana (Our World in Data).',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {},
    },
  },

  Egypt: {
    code: 'EGY',
    name: 'Egypt',
    credit: null,
    sources: 'Egypt Film Commission',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Egypt is one of the largest film hubs in the Arab world, but public information on green production is currently limited and we could not verify a dedicated national framework. If you know of green-production initiatives here, please contribute.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• Egypt Film Commission (EFC): the one-stop shop for shooting approvals and permits, also working on production incentives: https://egyptfilming.com/',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Egypt\'s grid runs overwhelmingly on natural gas (around 80%), with hydro from the Aswan dam and fast-growing solar, including the giant Benban park (around 1.8 GW).\n\nEnergy mix source: https://ourworldindata.org/energy/country/egypt (Our World in Data).',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {},
    },
  },

  Tunisia: {
    code: 'TUN',
    name: 'Tunisia',
    credit: null,
    sources: 'CNCI',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Public information on green production in Tunisia is currently limited, and we could not verify a dedicated national framework. The sector is structured around public funding, which also supports animation. If you know of green-production initiatives here, please contribute.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            '• CNCI (Centre National du Cinéma et de l\'Image): the public body that funds and organises film and animation production in Tunisia, with a bilateral Franco-Tunisian co-production fund since 2019: https://cnci.tn/',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Tunisia\'s electricity is about 97% gas-fired, with a national target of 35% renewable capacity by 2030, so on-grid power is currently carbon-intensive.\n\nEnergy mix source: https://ourworldindata.org/energy/country/tunisia (Our World in Data).',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {},
    },
  },

  Croatia: {
    code: 'HRV',
    name: 'Croatia',
    credit: null,
    sources: 'HAVC (Croatian Audiovisual Centre)',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Public information on a dedicated green-production scheme in Croatia is currently limited, and we could not verify one. As an EU member, Croatia is bound by the EU goal of climate neutrality by 2050. If you know of green-production initiatives here, please contribute.',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            'The Croatian Audiovisual Centre (HAVC) runs the national incentive, a cash rebate of up to 25% of qualifying Croatian spend, through its Filming in Croatia programme: https://filmingincroatia.hr/',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'About three-quarters of Croatia\'s net electricity generation was renewable in 2024, led by hydropower with a growing wind share, a relatively clean grid for productions.\n\nEnergy mix source: https://ourworldindata.org/energy/country/croatia (Our World in Data).',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {},
    },
  },

  Bulgaria: {
    code: 'BGR',
    name: 'Bulgaria',
    credit: null,
    sources: 'Bulgarian National Film Center',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Public information on a dedicated green-production scheme in Bulgaria is currently limited, and we could not verify one. As an EU member, Bulgaria is bound by the EU goal of climate neutrality by 2050. If you know of green-production initiatives here, please contribute.',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            'The Bulgarian National Film Center administers the national incentive, a cash rebate of up to 25% of eligible local spend for film and high-end TV: https://www.nfc.bg/en/',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Bulgaria\'s grid is anchored by nuclear power (around 40% in 2024) with coal near 29% and solar rising, so it is mid-carbon and improving.\n\nEnergy mix source: https://ourworldindata.org/energy/country/bulgaria (Our World in Data).',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {},
    },
  },

  Georgia: {
    code: 'GEO',
    name: 'Georgia',
    credit: null,
    sources: 'Georgian National Film Center, Enterprise Georgia',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'Public information on green production in Georgia is currently limited, and we could not verify a dedicated national scheme, though the film office encourages responsible, low-impact shooting in the country\'s landscapes. If you know of green-production initiatives here, please contribute.',
        },
        audiovisualRegulation: {
          label: 'Film & TV industry regulations and incentives',
          content:
            'The Georgian National Film Center supports national cinema, and the "Film in Georgia" programme (run by Enterprise Georgia) offers a cash rebate of 20 to 25% on qualified spend: https://www.enterprisegeorgia.gov.ge/en/business-development/filmingeorgia',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Georgia\'s electricity is mostly hydropower (around 75 to 80%), with gas covering the rest, making the grid relatively low-carbon, though seasonal.\n\nEnergy mix source: https://ourworldindata.org/energy/country/georgia (Our World in Data).',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {},
    },
  },

  'South Korea': {
    code: 'KOR',
    name: 'South Korea',
    credit: null,
    sources: 'SIEFF, Korea Green Foundation',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'In South Korea, the most visible environmental engagement of the screen sector is through awareness rather than a production standard. We could not verify a national green-production framework. If you know of one, please contribute.',
        },
        existingInitiatives: {
          label: 'Existing initiatives',
          content:
            'Awareness (not a production standard): the Seoul International Eco Film Festival (SIEFF), founded in 2004 by the Korea Green Foundation, is one of the largest environmental film festivals in Asia and a member of the Green Film Network. It raises awareness through cinema rather than setting on-set standards.',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'South Korea\'s electricity in 2024 was roughly 30% nuclear, 30% coal and 29% gas, with renewables near 10%, a grid in transition.\n\nEnergy mix source: https://ourworldindata.org/energy/country/south-korea (Our World in Data).',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {},
    },
  },

  Japan: {
    code: 'JPN',
    name: 'Japan',
    credit: null,
    sources: 'limited public sources',
    generalInfo: {
      label: 'General Information',
      subcategories: {
        greenProductionStatus: {
          label: 'Status of green production',
          content:
            'We currently have little Japan-specific information on green production, and we could not verify a national framework. Japan has committed to national carbon neutrality by 2050, and productions are beginning to adopt eco-practices (LED lighting, battery and hybrid power, waste reduction), but this is not yet formalised for the screen sector nationally. If you know of green-production initiatives in Japan, please contribute.',
        },
      },
    },
    sustainability: {
      label: 'Sustainability & Logistics',
      subcategories: {
        gridConnection: {
          label: 'Grid connection',
          content:
            'Japan\'s grid in fiscal 2024 ran on roughly 29% LNG, 28% coal, 27% renewables and 8% nuclear, so on-grid power remains fairly carbon-intensive and varies by region.\n\nEnergy mix source: https://ourworldindata.org/energy/country/japan (Our World in Data).',
        },
      },
    },
    resources: {
      label: 'Resources',
      subcategories: {},
    },
  },
};

export const categoryKeys = ['generalInfo', 'sustainability', 'resources'];

export function getCountryData(countryName: string) {
  return countryData[countryName] || null;
}

export function getAvailableCategories(countryName: string): string[] {
  const data = countryData[countryName];
  if (!data) return [];
  return categoryKeys.filter(
    (key) =>
      data[key] && Object.keys(data[key].subcategories).length > 0,
  );
}
