const events = [
    {
        title: "Institute for Study Abroad (IFSA) Info Table",
        time: "10:00 AM",
        location: "Keefe Campus Center, The Atrium",
        image_URL: "https://www.amherst.edu/system/files/styles/calendar_event_thumbnail_540_540/private/IFSA-Australia-01.jpg?h=f3cffdb5&itok=yKZ-b2qL&__=1740166621",
        more_Info_Link: "https://www.amherst.edu/news/events/calendar/node/925657",
        add_to_Calendar_Link: "https://www.google.com/calendar/render?action=TEMPLATE&text=Institute%20for%20Study%20Abroad%20%28IFSA%29%20Info%20Table&dates=20250228T100000/20250228T120000&details=%0A%0AMore information: https%3A//www.amherst.edu/news/events/calendar/node/925657&location=Keefe%20Campus%20Center%2C%20The%20Atrium"
    },
    {
        title: "Drop-In Sessions for Design & Website Help",
        time: "10:30 AM",
        location: "Virtual",
        image_URL: "https://www.amherst.edu/system/files/styles/calendar_event_thumbnail_540_540/private/Design-Drop-In-calendar-1080x1080.png?h=57024e64&itok=RMS-_IgX&__=1725631875",
        more_Info_Link: "https://www.amherst.edu/news/events/calendar/node/916923",
        add_to_Calendar_Link: "https://www.google.com/calendar/render?action=TEMPLATE&text=Drop-In%20Sessions%20for%20Design%20%26%20Website%20Help&dates=20250228T103000/20250228T113000&details=%0A%0AMore information: https%3A//www.amherst.edu/news/events/calendar/node/916923&location=Virtual"
    },
    {
        title: "Department of History Spring 2025 Seminar Series",
        time: "11:00 AM",
        location: "Aliki Perroti & Seth Frank Lyceum, Lyceum 205",
        image_URL: "https://logodix.com/logo/1182384.png",
        more_Info_Link: "https://www.amherst.edu/news/events/calendar/node/925725",
        add_to_Calendar_Link: "https://www.google.com/calendar/render?action=TEMPLATE&text=Department%20of%20History%20Spring%202025%20Seminar%20Series&dates=20250228T110000/20250228T120000&details=%0A%0AMore information: https%3A//www.amherst.edu/news/events/calendar/node/925725&location=Aliki%20Perroti%20%26%20Seth%20Frank%20Lyceum%2C%20Lyceum%20205"
    },
    {
        title: "Yoga",
        time: "12:05 PM",
        location: "Alumni Gym, Conway Classroom",
        image_URL: "https://logodix.com/logo/1182384.png",
        more_Info_Link: "https://www.amherst.edu/news/events/calendar/node/916646",
        add_to_Calendar_Link: "https://www.google.com/calendar/render?action=TEMPLATE&text=Yoga&dates=20250228T120500/20250228T125500&details=%0A%0AMore information: https%3A//www.amherst.edu/news/events/calendar/node/916646&location=Alumni%20Gym%2C%20Conway%20Classroom"
    },
    {
        title: "Faith, Nationalism, and the Future of Liberal Democracy",
        time: "2:00 PM",
        location: "Pruyne Lecture Hall",
        image_URL: "https://se-images.campuslabs.com/clink/images/823d26d7-9739-401e-b563-5bbcf513b0800d16d81a-ee12-436e-873f-4c0a69b1a153.png?preset=med-w",
        more_Info_Link: "https://thehub.amherst.edu/event/11080746",
        add_to_Calendar_Link: "https://www.google.com/calendar/render?action=TEMPLATE&text=Faith%2C%20Nationalism%2C%20and%20the%20Future%20of%20Liberal%20Democracy&dates=20250228T140000/20250228T150000&details=%0A%0AMore information: https%3A//thehub.amherst.edu/event/11080746&location=Pruyne%20Lecture%20Hall"
    },
    {
        title: "Good Grief: A 5-week Community of Support Over the State of the World",
        time: "2:00 PM",
        location: "Keefe Campus Center, 017(RSL)",
        image_URL: "https://www.amherst.edu/system/files/styles/calendar_event_thumbnail_540_540/private/Good%20Grief%20flyer.png?h=57024e64&itok=YR3dTY8K&__=1738611126",
        more_Info_Link: "https://www.amherst.edu/news/events/calendar/node/924717",
        add_to_Calendar_Link: "https://www.google.com/calendar/render?action=TEMPLATE&text=Good%20Grief%3A%20A%205-week%20Community%20of%20Support%20Over%20the%20State%20of%20the%20World&dates=20250228T140000/20250228T150000&details=%0A%0AMore information: https%3A//www.amherst.edu/news/events/calendar/node/924717&location=Keefe%20Campus%20Center%2C%20017%28RSL%29"
    },
    {
        title: "American Fiction Film Screening",
        time: "2:30 PM",
        location: "Kirby Memorial Theater",
        image_URL: "https://www.amherst.edu/system/files/styles/calendar_event_thumbnail_540_540/private/LitFest2025_Promo-Graphics_1x1_1.png?h=8cf625d8&itok=SUBcDB19&__=1737678617",
        more_Info_Link: "https://www.amherst.edu/news/events/calendar/node/924140",
        add_to_Calendar_Link: "https://www.google.com/calendar/render?action=TEMPLATE&text=American%20Fiction%20Film%20Screening&dates=20250228T143000/20250228T163000&details=%0A%0AMore information: https%3A//www.amherst.edu/news/events/calendar/node/924140&location=Kirby%20Memorial%20Theater"
    },
    {
        title: "Syracuse Abroad Madrid & Santiago Virtual Info Session",
        time: "3:00 PM",
        location: "Virtual",
        image_URL: "https://www.amherst.edu/system/files/styles/calendar_event_thumbnail_540_540/private/unnamed%20copy%204_0.png?h=bc1b0432&itok=2HWStHcQ&__=1740000381",
        more_Info_Link: "https://www.amherst.edu/news/events/calendar/node/925578",
        add_to_Calendar_Link: "https://www.google.com/calendar/render?action=TEMPLATE&text=Syracuse%20Abroad%20Madrid%20%26%20Santiago%20Virtual%20Info%20Session&dates=20250228T150000/20250228T160000&details=%0A%0AMore information: https%3A//www.amherst.edu/news/events/calendar/node/925578&location=Virtual"
    },
    {
        title: "Quaker or Curious?",
        time: "3:00 PM",
        location: "Keefe Campus Center, RSL Room 017",
        image_URL: "https://www.amherst.edu/system/files/styles/calendar_event_thumbnail_540_540/private/Quaker%20or%20Curious.png?h=db71577e&itok=VfIiKqaz&__=1738271409",
        more_Info_Link: "https://www.amherst.edu/news/events/calendar/node/924575",
        add_to_Calendar_Link: "https://www.google.com/calendar/render?action=TEMPLATE&text=Quaker%20or%20Curious%3F&dates=20250228T150000/20250228T160000&details=%0A%0AMore information: https%3A//www.amherst.edu/news/events/calendar/node/924575&location=Keefe%20Campus%20Center%2C%20RSL%20Room%20017"
    },
    {
        title: "Hot Chocolate Bar and Game Night",
        time: "4:00 PM",
        location: "Women's & Gender Center, Keefe Campus Center, 211",
        image_URL: "https://www.amherst.edu/system/files/styles/calendar_event_thumbnail_540_540/private/Hot%20Chocolate%20Bar%20and%20Game%20Night%20%28Events%20Calendar%29.png?h=57024e64&itok=EcFYuHgt&__=1740099943",
        more_Info_Link: "https://www.amherst.edu/news/events/calendar/node/925634",
        add_to_Calendar_Link: "https://www.google.com/calendar/render?action=TEMPLATE&text=Hot%20Chocolate%20Bar%20and%20Game%20Night&dates=20250228T160000/20250228T180000&details=%0A%0AMore information: https%3A//www.amherst.edu/news/events/calendar/node/925634&location=Women%27s%20%26%20Gender%20Center%2C%20Keefe%20Campus%20Center%2C%20211"
    },
    {
        title: "Archery Practice @ Sattva Archery Range",
        time: "4:30 PM",
        location: "Sattva Center for Archery Training, Northampton, MA",
        image_URL: "https://logodix.com/logo/1182384.png",
        more_Info_Link: "https://thehub.amherst.edu/event/10947974",
        add_to_Calendar_Link: "https://www.google.com/calendar/render?action=TEMPLATE&text=Archery%20Practice%20%40%20Sattva%20Archery%20Range&dates=20250228T163000/20250228T173000&details=%0A%0AMore information: https%3A//thehub.amherst.edu/event/10947974&location=Sattva%20Center%20for%20Archery%20Training%2C%20Northampton%2C%20MA"
    },
    {
        title: "Intro Meeting - Tteokbokki",
        time: "5:00 PM",
        location: "Greenways 2nd Floor Kitchen",
        image_URL: "https://se-images.campuslabs.com/clink/images/07e29fac-289d-4702-92e3-a9c17b654f0c83b9947d-b97a-4f0c-8612-cd635e28a2a4.png?preset=med-w",
        more_Info_Link: "https://thehub.amherst.edu/event/11077161",
        add_to_Calendar_Link: "https://www.google.com/calendar/render?action=TEMPLATE&text=Intro%20Meeting%20-%20Tteokbokki%20&dates=20250228T170000/20250228T183000&details=%0A%0AMore information: https%3A//thehub.amherst.edu/event/11077161&location=Greenways%202nd%20Floor%20Kitchen%20"
    },
    {
        title: "LitFest: The Making of American Fiction: Jeffrey Wright ’87, Percival Everett, and Cord Jefferson in Conversation with President Michael A. Elliott",
        time: "5:00 PM",
        location: "Johnson Chapel",
        image_URL: "https://www.amherst.edu/system/files/styles/calendar_event_thumbnail_540_540/private/LitFest2025_Promo-Graphics_1x1_2.png?h=8cf625d8&itok=vt1x0C4I&__=1737678826",
        more_Info_Link: "https://www.amherst.edu/news/events/calendar/node/924141",
        add_to_Calendar_Link: "https://www.google.com/calendar/render?action=TEMPLATE&text=LitFest%3A%20The%20Making%20of%20American%20Fiction%3A%20Jeffrey%20Wright%20%E2%80%9987%2C%20Percival%20Everett%2C%20and%20Cord%20Jefferson%20in%20Conversation%20with%20President%20Michael%20A.%20Elliott&dates=20250228T170000/20250228T183000&details=%0A%0AMore information: https%3A//www.amherst.edu/news/events/calendar/node/924141&location=Johnson%20Chapel"
    },
    {
        title: "Power Barre",
        time: "5:00 PM",
        location: "Alumni Gym, Conway Classroom",
        image_URL: "https://logodix.com/logo/1182384.png",
        more_Info_Link: "https://www.amherst.edu/news/events/calendar/node/916647",
        add_to_Calendar_Link: "https://www.google.com/calendar/render?action=TEMPLATE&text=Power%20Barre&dates=20250228T170000/20250228T180000&details=%0A%0AMore information: https%3A//www.amherst.edu/news/events/calendar/node/916647&location=Alumni%20Gym%2C%20Conway%20Classroom"
    },
    {
        title: "Shabbat Dinner",
        time: "6:30 PM",
        location: "Friedmann Room, Keefe Campus Center",
        image_URL: "https://logodix.com/logo/1182384.png",
        more_Info_Link: "https://thehub.amherst.edu/event/11085504",
        add_to_Calendar_Link: "https://www.google.com/calendar/render?action=TEMPLATE&text=Shabbat%20Dinner&dates=20250228T183000/20250228T193000&details=%0A%0AMore information: https%3A//thehub.amherst.edu/event/11085504&location=Friedmann%20Room%2C%20Keefe%20Campus%20Center%20"
    },
    {
        title: "Family Feud",
        time: "7:00 PM",
        location: "Powerhouse",
        image_URL: "https://se-images.campuslabs.com/clink/images/7e1e3c0b-c26a-44e5-b96e-364467390c3e45ff93f7-b7b5-4388-bc39-c8b9c4e19171.png?preset=med-w",
        more_Info_Link: "https://thehub.amherst.edu/event/11112950",
        add_to_Calendar_Link: "https://www.google.com/calendar/render?action=TEMPLATE&text=Family%20Feud%20&dates=20250228T190000/20250228T210000&details=%0A%0AMore information: https%3A//thehub.amherst.edu/event/11112950&location=Powerhouse"
    },
    {
        title: "DESIGN HOUSE : COUTURE UP CLOSE",
        time: "7:00 PM",
        location: "Chapin Hall, 201",
        image_URL: "https://www.amherst.edu/system/files/styles/calendar_event_thumbnail_540_540/private/Screenshot%202025-02-26%20at%2012.10.12%E2%80%AFPM.png?h=83b30d77&itok=lidcm36S&__=1740589992",
        more_Info_Link: "https://www.amherst.edu/news/events/calendar/node/925825",
        add_to_Calendar_Link: "https://www.google.com/calendar/render?action=TEMPLATE&text=DESIGN%20HOUSE%20%3A%20COUTURE%20UP%20CLOSE&dates=20250228T190000/20250228T210000&details=%0A%0AMore information: https%3A//www.amherst.edu/news/events/calendar/node/925825&location=Chapin%20Hall%2C%20201"
    },
    {
        title: "Maple Syrup Boiling at Book & Plow Farm",
        time: "12:00 AM",
        location: "Book & Plow Farm",
        image_URL: "https://www.amherst.edu/system/files/styles/calendar_event_thumbnail_540_540/private/MAPLE%20SYRUP%20BOILING.png?h=57024e64&itok=IHKqcfja&__=1739978844",
        more_Info_Link: "https://www.amherst.edu/news/events/calendar/node/925537",
        add_to_Calendar_Link: "https://www.google.com/calendar/render?action=TEMPLATE&text=Maple%20Syrup%20Boiling%20at%20Book%20%26%20Plow%20Farm&dates=20250301T000000/20250301T235900&details=%0A%0AMore information: https%3A//www.amherst.edu/news/events/calendar/node/925537&location=Book%20%26%20Plow%20Farm"
    },
    {
        title: "Downhill Skiing 3/1",
        time: "7:30 AM",
        location: "Berkshire East Mountain Resort",
        image_URL: "https://se-images.campuslabs.com/clink/images/a7a9aae2-37be-40aa-9b87-65cda4e2d4452669d72e-60aa-4b73-b723-c9d946f5b425.png?preset=med-w",
        more_Info_Link: "https://thehub.amherst.edu/event/11051463",
        add_to_Calendar_Link: "https://www.google.com/calendar/render?action=TEMPLATE&text=Downhill%20Skiing%203/1&dates=20250301T073000/20250301T153000&details=%0A%0AMore information: https%3A//thehub.amherst.edu/event/11051463&location=Berkshire%20East%20Mountain%20Resort"
    },
    {
        title: "Amherst Quant Competition",
        time: "9:00 AM",
        location: "Paino Lecture Hall, Beneski 107",
        image_URL: "https://se-images.campuslabs.com/clink/images/511673f6-5629-44e0-85ba-98fe222a9fb14c74af5f-d74c-4c21-a860-da47c01f36ec.png?preset=med-w",
        more_Info_Link: "https://thehub.amherst.edu/event/10957992",
        add_to_Calendar_Link: "https://www.google.com/calendar/render?action=TEMPLATE&text=Amherst%20Quant%20Competition&dates=20250301T090000/20250301T160000&details=%0A%0AMore information: https%3A//thehub.amherst.edu/event/10957992&location=Paino%20Lecture%20Hall%2C%20Beneski%20107"
    },
    {
        title: "Bridge Club x Georgia Tech Tournament",
        time: "10:00 AM",
        location: "Powerhouse",
        image_URL: "https://logodix.com/logo/1182384.png",
        more_Info_Link: "https://thehub.amherst.edu/event/10772352",
        add_to_Calendar_Link: "https://www.google.com/calendar/render?action=TEMPLATE&text=Bridge%20Club%20x%20Georgia%20Tech%20Tournament&dates=20250301T100000/20250302T130000&details=%0A%0AMore information: https%3A//thehub.amherst.edu/event/10772352&location=Powerhouse"
    },
    {
        title: "Holyoke Bound -- Registration Deadline 2/26",
        time: "10:00 AM",
        location: "https://www.fivecolleges.edu/community/holyoke-bound",
        image_URL: "https://se-images.campuslabs.com/clink/images/ec7b0e53-b5ab-478d-a216-a5f6af58444b6948efb1-fd4b-405a-ae69-ecedce388d72.png?preset=med-w",
        more_Info_Link: "https://thehub.amherst.edu/event/11089714",
        add_to_Calendar_Link: "https://www.google.com/calendar/render?action=TEMPLATE&text=Holyoke%20Bound%20--%20Registration%20Deadline%202/26&dates=20250301T100000/20250301T153000&details=%0A%0AMore information: https%3A//thehub.amherst.edu/event/11089714&location=https%3A//www.fivecolleges.edu/community/holyoke-bound"
    },
    {
        title: "The Arbors Assisted Living Visitation",
        time: "10:00 AM",
        location: "Arms Music Center",
        image_URL: "https://se-images.campuslabs.com/clink/images/0dac5b53-87ae-45a0-8809-37fc07ca239f64a62357-6885-47ab-868a-768d29da0ccb.png?preset=med-w",
        more_Info_Link: "https://thehub.amherst.edu/event/11117826",
        add_to_Calendar_Link: "https://www.google.com/calendar/render?action=TEMPLATE&text=The%20Arbors%20Assisted%20Living%20Visitation%20&dates=20250301T100000/20250301T120000&details=%0A%0AMore information: https%3A//thehub.amherst.edu/event/11117826&location=Arms%20Music%20Center"
    },
    {
        title: "Holyoke Bound",
        time: "10:00 AM",
        location: "Virtual",
        image_URL: "https://www.amherst.edu/system/files/styles/calendar_event_thumbnail_540_540/private/Untitled%20%282%29_3.png?h=57024e64&itok=Hjo6AULn&__=1738688426",
        more_Info_Link: "https://www.amherst.edu/news/events/calendar/node/924762",
        add_to_Calendar_Link: "https://www.google.com/calendar/render?action=TEMPLATE&text=Holyoke%20Bound&dates=20250301T100000/20250301T153000&details=%0A%0AMore information: https%3A//www.amherst.edu/news/events/calendar/node/924762&location=Virtual"
    },
    {
        title: "LitFest: Presidential Scholar Teju Cole in Conversation with Jennifer Acker ’00",
        time: "1:00 PM",
        location: "Johnson Chapel",
        image_URL: "https://www.amherst.edu/system/files/styles/calendar_event_thumbnail_540_540/private/LitFest2025_Promo-Graphics_1x1_4.png?h=8cf625d8&itok=TzzzDWXJ&__=1739558966",
        more_Info_Link: "https://www.amherst.edu/news/events/calendar/node/925367",
        add_to_Calendar_Link: "https://www.google.com/calendar/render?action=TEMPLATE&text=LitFest%3A%20Presidential%20Scholar%20Teju%20Cole%20in%20Conversation%20with%20Jennifer%20Acker%20%E2%80%9900&dates=20250301T130000/20250301T140000&details=%0A%0AMore information: https%3A//www.amherst.edu/news/events/calendar/node/925367&location=Johnson%20Chapel"
    },
    {
        title: "Holding Two Perspective: A Roundtable Discussion on the Middle East",
        time: "1:30 PM",
        location: "Pemberton Lounge, Chapin Hall",
        image_URL: "https://se-images.campuslabs.com/clink/images/833842ad-6b32-45e7-808f-78787c59d3a64c563307-28a6-478c-89e8-e412edaea180.png?preset=med-w",
        more_Info_Link: "https://thehub.amherst.edu/event/11080766",
        add_to_Calendar_Link: "https://www.google.com/calendar/render?action=TEMPLATE&text=Holding%20Two%20Perspective%3A%20A%20Roundtable%20Discussion%20on%20the%20Middle%20East&dates=20250301T133000/20250301T143000&details=%0A%0AMore information: https%3A//thehub.amherst.edu/event/11080766&location=Pemberton%20Lounge%2C%20Chapin%20Hall"
    },
    {
        title: "Holding Two Perspectives",
        time: "1:30 PM",
        location: "Chapin Hall, Pemberton Lounge",
        image_URL: "https://www.amherst.edu/system/files/styles/calendar_event_thumbnail_540_540/private/DS%20Together%203.png?h=57024e64&itok=B_nRkdRw&__=1739839287",
        more_Info_Link: "https://www.amherst.edu/news/events/calendar/node/925484",
        add_to_Calendar_Link: "https://www.google.com/calendar/render?action=TEMPLATE&text=Holding%20Two%20Perspectives&dates=20250301T133000/20250301T143000&details=%0A%0AMore information: https%3A//www.amherst.edu/news/events/calendar/node/925484&location=Chapin%20Hall%2C%20Pemberton%20Lounge"
    },
    {
        title: "Queer and Questioning",
        time: "2:00 PM",
        location: "Chapin 102",
        image_URL: "https://logodix.com/logo/1182384.png",
        more_Info_Link: "https://thehub.amherst.edu/event/11039542",
        add_to_Calendar_Link: "https://www.google.com/calendar/render?action=TEMPLATE&text=Queer%20and%20Questioning&dates=20250301T140000/20250301T150000&details=%0A%0AMore information: https%3A//thehub.amherst.edu/event/11039542&location=Chapin%20102"
    }
]
export default events