/************************     הוראות חשובות      ***********************/

/**
 
 1.   במידה וזאת פעם ראשונה שלכם ממלאים תוכן בלומדה, קראו את **קובץ הוורד** המצורף בתקייה
 2.   בעמוד זה יש למלא את הפרטים לגבי כל המידע והתוכן המבוקש
 3.   [amountOfQuestions במשתנה] לשים לב שבכל נושא צריך לכתוב את *כמות השאלות המקסימלית* שתלקח ממנו
      **משתנה זה מתייחס רק לשאלות שיילקחו בשביל **המבחן
 */


/************************      הכנס כותרת ראשית שהיא שם הלומדה      ***********************/
const TITLE = "זכויות וחובות הכלוא";

/****     הכנס כמות כוללת מקסימלית של שאלות למבחן. יש לשים לב לכמות השאלות הקיימות מהבהד - שלא כמות שלא קיימת   *******/
// const AMOUNT_EXAM_QUESTIONS = 10;

/************************      הכנס כמות זמן התחלתית של המבחן      ***********************/
const TIME_FOR_EXAM = "11:00";

// אובייקט המכיל את כל המידע של הלומדה הכולל את התוכן, השאלות לכל נושא וכמות השאלות שיילקח מכל נושא למבחן
const DATA = { 
    // שם נושא
    "מבוא ללמידה": {
        "icon":  "../assets/images/arrested.png",
        "questionsPractice": [
            {
                type: "multiple",
                question: "דוגמה לשאלה אמריקאית בוחנת שיש לה 4 תשובות?",
                ans1: "תשובה ראשונה ולא נכונה",
                ans2: "תשובה שנייה נכונה!",
                ans3: "תשובה שלישית ולא נכונה",
                ans4: "תשובה רביעית לא נכונה",
                correctAns: "ans2"
            },
            {
                type: "binary",
                sentence: "דוגמה לשאלה בוחנת נכונה של נכון או לא נכון",
                trueOrFalse: true
            }
        ],
        "amountOfQuestions": 2,
        "learningContent": {
            "הכרת הנושא": {
                "הקדמה": [
                    {
                        cardType: "textTwoParagraphs",
                        text1: `כל חייל הנכנס לכליאה צריך לקבל על עצמו את החובות החלים עליו במהלך הכליאה וכמובן להיות מודע לזכויותיו.`,
                        text2: `עליכם כמפקדים האחריות לדאוג לכך  <b> שהכלואים/ עצורים יקבלו את כל זכויותם וכמובן גם יבצעו את כל חובותיהם.</b>`
                    },
                ],
                "מבוא לזכויות": [
                    {
                        cardType: "list4",
                        subTitle: `ניתן לחלק את זכויות הכלוא לארבעה קטגרויות:`,
                        li1: `זכויות בסיסיות`,
                        li2: `זכויות בתחום המשפט`,
                        li3: `צריכה שוטפת`,
                        li4: `זכויות בתחום החינוך`,
                    },
                ],
            }
        },
    },
    // שם נושא
    "זכויות הכלוא": {
        "icon":  "../assets/images/trust.png",
        // שאלות לנושא הזה
        "questionsPractice": [
            {
                type: "multiple",
                question: `מה מהבאים נחשב זכות בסיסית?`,
                ans1: `בקשה לחנינה`,
                ans2: `טפסי בקשה`,
                ans3: `בקשת ערך`,
                ans4: `ספרים`,
                correctAns: `ans2`,
            },
            {
                type: "multiple",
                question: `תוך כמה שעות זכאי כלוא לראיון מפקד?`,
                ans1: `48 שעות למעט סופי שבוע וחג`,
                ans2: `12 שעות למעט סופי שבוע וחג `,
                ans3: `24 שעות למעט סופי שבוע וחג`,
                ans4: `5 שעות למעט סופי שבוע וחג`,
                correctAns: `ans3`,
            },
            {
                type: "multiple",
                question: `כמה פעמים בשבוע זכאי חייל להחליף בלאי?`,
                ans1: `פעם אחת`,
                ans2: `5 פעמים`,
                ans3: `3 פעמים`,
                ans4: `פעמיים`,
                correctAns: `ans4`,
            },
            {
                type: "multiple",
                question: `כל כמה זמן ניתן להגיש חנינה?`,
                ans1: `פעם בכליאה`,
                ans2: `כל שבועיים`,
                ans3: `פעם בשירות`,
                ans4: `פעם בחיים`,
                correctAns: `ans4`,
            },
            {
                type: "multiple",
                question: `מי יעביר סקירה יומית?`,
                ans1: `מפקד הב"סכ`,
                ans2: `מד"כ`,
                ans3: `סמל תורן`,
                ans4: `רס"פ הפלוגה`,
                correctAns: `ans2`,
            },
            {
                type: "multiple",
                question: `למי בקשת ביטול אמצעים משמעתיים מוגשת?`,
                ans1: `מ"מ הפלוגה`,
                ans2: `רע"ן כליאה`,
                ans3: `גח"לת`,
                ans4: `מפקד הב"סכ/ מעצר`,
                correctAns: `ans4`,
            },
            {
                type: "multiple",
                question: `למי מגישים מחילה (המתקה)?`,
                ans1: `מפקד הב"סכ/ מעצר`,
                ans2: `מפקד בה"ד 13`,
                ans3: `לאלוף פיקוד הרלוונטי`,
                ans4: `מ"פ ליווים`,
                correctAns: `ans1`,
            },
            {
                type: "multiple",
                question: `אילו מן הבאים אינה זכות?`,
                ans1: `זכויות בתחום המשפט`,
                ans2: `זכות לפנאי`,
                ans3: `זכויות חינוך`,
                ans4: `3 ארוחות ביום`,
                correctAns: `ans2`,
            },
            {
                type: "multiple",
                question: `מה מהבאים כלואים זכאים לקבל?`,
                ans1: `ספרים`,
                ans2: `עיתונים`,
                ans3: `טלוויזיה`,
                ans4: `כל התשובות נכונות`,
                correctAns: `ans4`,
            },
            {
                type: "binary",
                sentence: `ניתן לשלול לכלוא ביקורים, טלפון וקנטינה`,
                trueOrFalse: true
            },
            {
                type: "binary",
                sentence: `חייל שהוריו גרושים/ פרודים זכאי לשלושה ביקורים`,
                trueOrFalse: false
            },
            {
                type: "binary",
                sentence: `חייל שהוריו גרושים/ פרודים זכאי לשתי שיחות טלפון ביום`,
                trueOrFalse: true
            },
            {
                type: "multiple",
                question: `ראיון מפקד הינו:`,
                ans1: `ראיון של כלוא עם קצין בסגל הפיקודי`,
                ans2: `ראיון של כלוא עם מפקד הפלוגה`,
                ans3: `ראיון של מפקד הכלא עם כלוא `,
                ans4: `ראיון של כלוא עם מפקד בפלוגה`,
                correctAns: `ans1`,
            },
            {
                type: "binary",
                sentence: `כלוא אשר מתפלל צריך לקבל שתי ארוחות נוספות ביממה`,
                trueOrFalse: false
            },
            {
                type: "multiple",
                question:`איזו מן הזכויות המופיעות אינה נמנית בזכויות הבסיסיות?`,
                ans1:`ביקורים`,
                ans2: `תרומת דם`,
                ans3: `טלפונים`,
                ans4: `ערר`,
                correctAns: `ans4`,
            },
            {
                type: "multiple",
                question:`לאיזה גורם תוגש בקשת מחילה?`,
                ans1:`אלוף פיקוד צפון האחראי על תחום המשפט`,
                ans2: `נשיא המדינה`,
                ans3: `אלוף הפיקוד הרלוונטי לחייל`,
                ans4: `מפקד בסיס הכליאה`,
                correctAns: `ans3`,
            },
            {
                type: "multiple",
                question:`איזה סכום יקבל חייל כל יום לרכישה בקנטינה?`,
                ans1:`14.20 ש"ח`,
                ans2: `15 ש"ח`,
                ans3: `13.40 ש"ח`,
                ans4: `14.50 ש"ח`,
                correctAns: `ans1`,
            },
            {
                type: "multiple",
                question:`מהו הזמן המטכלי הניתן לחייל לבצע שיחה?`,
                ans1:`7 דקות`,
                ans2:`7 דקות + דקת חיוג`,
                ans3:`6 דקות`,
                ans4:`6 דקות + דקת חיוג`,
                correctAns: `ans4`,
            },
            {
                type: "multiple",
                question:`לכמה קטגוריות נחלק את זכויות הכלוא?`,
                ans1:`3`,
                ans2:`5`,
                ans3:`4`,
                ans4:`2`,
                correctAns: `ans3`,
            },
            {
                type: "binary",
                sentence: `כלוא רשאי להכניס לבס"כ את כל תרופתיו האישיות אשר הוא בא איתן.`,
                trueOrFalse: false
            },
            {
                type: "multiple",
                question:`כל כמה זמן רשאי כלוא לבקש עיתון?`,
                ans1:`כל יום`,
                ans2:`פעמיים בשבוע `,
                ans3:`כל יום מלבד שבת`,
                ans4:`שלוש פעמים בשבוע`,
                correctAns: `ans3`,
            },
            {
                type: "multiple",
                question:`כמה סיגריות יקבל כלוא בעת קליטתו?`,
                ans1:`15`,
                ans2:`10`,
                ans3:`5`,
                ans4:`הכלוא לא יקבל כלל, עליו לקנות בקנטינה ביום שלמאחרת`,
                correctAns: `ans2`,
            },
            {
                type: "multiple",
                question:`באיזו תדירות זכאים הכלואים לראות טלוויזיה?`,
                ans1:`כל יום`,
                ans2:`פעמיים בשבוע, בערב בלבד`,
                ans3:`פעמיים בשבוע בערב, חדשות בלבד`,
                ans4:`עפ"י החלטת בסגל`,
                correctAns: `ans4`,
            }
        ],
        "amountOfQuestions": 2,
        "learningContent": {
            // סוג הכרטיסייה
            "זכויות בסיסיות": {
                "זכויות בסיסיות": [ 
                    {
                        cardType: "text4Paragraphs",
                        text1: `<b>ראיון מפקד</b> - ראיון עם קצין תוך 24 שעות מרגע כניסתו לבס"כ.`,
                        text2: `<b>טפסי בקשה</b> - טופס בקשה כללי לכלואים לבקשת ראיית גורמי רפואה,ת"ש, גורמים פיקודיים וכו'.`,
                        text3: `<b>טיפול רפואי</b> - כל חייל מחוייב לראות מענה רפואי תוך 24 שעות.`,
                        text4: `<b>תשמ"ש</b> - כל חייל רשאי להגיש בקשה למשקית ת"ש בכדי לקבל הקלות בתשלומי משפחה, בהתאם למצב הכלכלי.`
                    },
                    {
                        cardType: "textThreeParagraphs",
                        text1: `<b>ביקורים</b> - הביקור הראשון יהיה תוך 7 ימים ולאחר מכן בתדירות של שבועיים. חייל אשר הוריו גרושים אשר מעוניין לראות את הוריו בנפרד זכאי לשני ביקורים נפרדים.`,
                        text2: `<b>טלפונים</b> - מטכלי 6 דקות שיחה + דקת חיוג ביום.`,
                        text3: `<b>דת</b> - כל חייל רשאי לשמור על מנהגיו וחוקי דתו (3 תפילות ביום, לשמור שבת, לצום).`,
                    },
                    {
                        cardType: "textThreeParagraphs",
                        text1: `<b>תרומות דם</b> - כלוא שנמצא מתאים רשאי לתרום תרומת דם ולצאת למנוחה שעות.`,
                        text2: `<b>קבלת ציוד צבאי והחלפתו</b> - כל חייל רשאי להחליף מדי בלאי פעמיים בשבוע.`,
                        text3: `<b>קבילה</b> - לכל חייל הזכות לקבול את מפקדיו.`,
                    },
                    {
                        cardType: "textTwoParagraphs",
                        text1: `<b>מכתבים וגלויות</b> - לכל חייל הזכות לקבל ולשלוח מכתבים וגלויות.`,
                        text2: `<b>קנטינה</b> - לכל חייל הזכות לראות קנטינה 4 פעמים בשבוע לפחות, כאשר יום שישי חובה. כל חייל יקבל 14.20 בכל יום בו יושב בבס"כ.`,
                    }
                ],
                "טיפול רפואי - הרחבה": [ 
                    {
                        cardType: "picAndText",
                        pic: "../assets/images/pic2.jpg",
                        content: `כלוא רשאי להחזיק בחפציו תרופות אך ורק במידה ומדובר בתרופות מצילות חיים. 
                        באחריות גורמי הכליאה להעביר את התרופות לידי המרפאה ולקבל הנחיה מגורם רפואי לגבי כמות וסוג התרופות אותן רשאי הכלוא להחזיק ברשותו.
                        כלוא רשאי להחזיק ברשותו מזרק אפיפן, משאף לאסטמה או גלולות (לכלואות).`,    
                    }
                ]
            },
            "זכויות משפטיות": {
                "זכויות משפטיות": [ 
                    {
                        cardType: "textThreeParagraphs",
                        text1: `<b>ערך</b> - הגשת ערר למפקד של מי ששפט את החייל.`,
                        text2: `<b>מחילה/ המתקה</b> - הגשת מחילה לאלוף הפיקוד הרלוונטי לחייל.`,
                        text3: `<b>ביטול אמצעים משמעתיים</b> - טופס בקשה המוגש למפקד הבס"כ/ חדר המשמר למחול על עונש משמעתי שהוטל על כלוא.`,
                    },
                    {
                        cardType: "text",
                        content: `<b>הפחתת עונש</b> - על כל 10 יום מופחת יום אחד, החל מהיום ה11. מעל 100, ימי ההפחתה יהפכו לשליש.`
                    }
                ],
            },
            "צריכה שוטפת": {
                "צריכה שוטפת": [
                    {
                        cardType: "text",
                        content: `<b>נוהל פניית כלואים לראיון עם הגורם הרלוונטי</b> - יש צורך להסביר שקיימת בפני הכלואים הזכות לפנות לגורם מן הגורמים הטיפוליים/ פיקודיים בבס"כ, או מחוצה לו בקשה לראיון או שיחה.
                        <br>וזאת, בכדי להגיע להסדרת הנוהל לפניית כלואים לגורם פיקודי באמצעות בקשות, מעבר למסדרים המתבצעים ע"י הגורמים הפיקודיים בבס"כ.`
                    },
                    {
                        cardType: "text",
                        content: `כלוא יתקבל לריאיון בפני גורם פיקודי בהקדם האפשרי ולא יאוחר מ 44 שעות, למעט סופ"ש/חג, חריגה מכך תתבצע אך ורק באישור הגורם הרלוונטי בהתאם לפיינתו. <br> בפניה לגורם פיקודי ירואיין הכלוא בהתאם להיררכיה צבאית, כלומר, ירואיין בתחילה ע"י המ"מ/מ"פ ע"מ לטפל במהות הפנייה.<br> במידה וסבר הכלוא כי לא ניתן מענה לפנייתו יופנה לגורם הפיקודי הרלוונטי, אליו יועדה הבקשה.`
                    }
                ],
                "אספקות": [
                    {
                        cardType: "text",
                        content: `כל פלוגה בכלא מקבלת כמות של חודש של אספקות. <br> כלוא אשר חסר לו דבר מסוים הנמצא באחת האספקות יכול לחתום על אביזר זה.`
                    },
                    {
                        cardType: "list4",
                        subTitle:`אספקה קטנה:`,
                        li1:`מברשת ומשחת שיניים`,
                        li2:`סכין ומשחת גילוח`,
                        li3:`סינטבון וסבון רחצה`,
                        li4:`10 סיגריות מוסטנג (אך ורק בעת קבלתם לבס"כ)`,
                    },
                    {
                        cardType: "list3",
                        subTitle:`אספקה גדולה:`,
                        li1:`גרביים`,
                        li2:`תחתונים`,
                        li3:`חולצה`
                    }
                ],
                

            },
            "זכויות בתחום החינוך": {
                "צריכה בתחום החינוך": [
                    {
                        cardType: "text4Paragraphs",
                        text1: `<b>עיתונים</b> - כלוא זכאי לעיתון כל יום ,מלבד שבת.`,
                        text2: `<b>ספרים</b> - רשאים להכניס ספרי קודש, וישנה ספרייה ממנה רשאים להשאיל.
                        טלוויזיה ( בעיקר חדשות)- עפ"י החלטת הסגל.`,
                        text3: `<b>טלוויזיה</b> - מועבר ע"י מ"שקיות חינוך.`,
                        text4: `<b>פעילויות חינוך והוראה</b> - מועבר ע"י מ"שקיות חינוך.`,
                        text5: `<b>סקירת מפקד</b> - כל מפקד יעביר כל יום סקירה יומית.`
                        
                    }
                ],
            },
            
        }
    },
    // שם נושא
    "חובות הכלוא": {
        "icon":  "../assets/images/request.png",
        // שאלות לנושא הזה
        "questionsPractice": [
            {
                type: "multiple",
                question: `מן הבאים, מהם חובות הכלוא?`,
                ans1: `ההתקדמות להיות תורן`,
                ans2: `לאכול מהפריסה כל יום`,
                ans3: `להתפלל 3 פעמים ביום`,
                ans4: `הופעה ודיגום`,
                correctAns: `ans4`,
            },
            {
                type: "binary",
                sentence: `הכלואים מחוייבים לדעת את כל החוקים החלים בפלוגה.`,
                trueOrFalse: true
            },
            {
                type: "binary",
                sentence: `מותר לחייל לסרב לעלות שמירה במידה והודיע על כך שעתיים לפני השמירה.`,
                trueOrFalse: false
            },
            {
                type: "binary",
                sentence: `במידה וחייל גרם לנזק במדים אשר קיבל הוא יכול לעלות על כך משפט.`,
                trueOrFalse: true
            },
            {
                type: "binary",
                sentence: `כל כלוא מחוייב לבצע שתי אימונים גופניים בשבוע.`,
                trueOrFalse: false
            },
        ],
        "learningContent": {
            "הוראות ופקודות": {
                "ביצוע הוראות ופקודות": [ 
                    {
                        cardType: "text",
                        content: "על כל הכלואים לבצע את כל הפקודות המגיעות אליהם מאנשי הסגל במהלך כליאתם."
                     }
                ],
                "נוהל פנייה לאנשי הסגל": [ 
                    {
                        cardType: "text",
                        content: "על כל הכלואים לקבל מרות מהדרג הפיקודי בבסיס הכליאה, מרמת המפקדים עד מפקד בסיס הכליאה."
                    }
                ]
            },
            "הופעה ודיגום": {
                "הופעה ודיגום": [ 
                    {
                        cardType: "text",
                        content: `על כל הכלואים להימצא תמיד מדוגמים לפי חוקי הפלוגה וההוראות שקיבלו ע"י מפקדיהם.`
                     }
                ],
                "התנהגות בהתאם לאופי הפלוגה והמחלקה": [ 
                    {
                        cardType: "text",
                        content: `כאשר כלוא מתקבל בפלוגה עליו לקבל את כל החוקים החלים על אותה פלוגה, במידה ויעבור בין הפלוגות עליו ללמוד להסתגל ולהכיר בחוקים המאפיינים את אותה הפלוגה.
                        הסתגלות מידית למשטר ולמשמעת.`
                    }
                ]
            },
            "משטר ומשמעת": {
                "הסתגלות מידית למשטר ולמשמעת": [ 
                    {
                        cardType: "text",
                        content: `כאשר כלוא מתקבל בבסיס הכליאה ולאחר ולמד את החוקים שעליו לפעול לפיהם, עליו לעשות זאת באופן מידי. כמובן על המפקדים לאכוף זאת תוך מתן הרגישות הנכונה והכרה בכך שמדובר בסיטואציה קשה לכלוא.`
                     }
                ]
            }
        },
        "amountOfQuestions": 0
    }
};



/********************************************************************************************************/
/********************************************************************************************************/
/********************************************************************************************************/
/*****  אובייקטים לפי סוג הכרטיסייה המכניסים את התוכן של כל כרטיסייה אל תוך הכרטיסייה  ********/

/**
 * @type {{[index: string]: {init: (card: HTMLElement, json: any) => void}}}
 */
let CARD_TYPES = {};

CARD_TYPES.text = {
    init(card, json) {
        card.querySelector(".content").innerHTML = json.content;
    }
}

CARD_TYPES.textTwoParagraphs = {
    init(card, json) {
        card.querySelector(".text1").innerHTML = json.text1;
        card.querySelector(".text2").innerHTML = json.text2;
    }
}

CARD_TYPES.textThreeParagraphs = {
    init(card, json) {
        card.querySelector(".text1").innerHTML = json.text1;
        card.querySelector(".text2").innerHTML = json.text2;
        card.querySelector(".text3").innerHTML = json.text3;
    }
}

CARD_TYPES.text4Paragraphs = {
    init(card, json) {
        card.querySelector(".text1").innerHTML = json.text1;
        card.querySelector(".text2").innerHTML = json.text2;
        card.querySelector(".text3").innerHTML = json.text3;
        card.querySelector(".text4").innerHTML = json.text4;
    }
}

CARD_TYPES.picAndText = {
    init(card, json) {
        card.querySelector(".pic").src = json.pic;
        card.querySelector(".content").innerHTML = json.content;
    }
}
CARD_TYPES.twoPics = {
    init(card, json) {
        card.querySelector(".pic1").src = json.pic1;
        card.querySelector(".content1").innerHTML = json.content1;
        card.querySelector(".pic2").src = json.pic2;
        card.querySelector(".content2").innerHTML = json.content2;
    }
}
CARD_TYPES.video = {
    init(card, json) {
        card.querySelector(".video").src = json.video;
    }
}
CARD_TYPES.videoAndText = {
    init(card, json) {
        card.querySelector(".video").src = json.video;
        card.querySelector(".content").innerHTML = json.content;
    }
}
CARD_TYPES.pic_4titles_4text = {
    init(card, json) {
        card.querySelector(".pic").src = json.pic;
        card.querySelector(".sub-title1").innerHTML = json.subTitle1;
        card.querySelector(".content1").innerHTML = json.content1;
        card.querySelector(".sub-title2").innerHTML = json.subTitle2;
        card.querySelector(".content2").innerHTML = json.content2;
        card.querySelector(".sub-title3").innerHTML = json.subTitle3;
        card.querySelector(".content3").innerHTML = json.content3;
        card.querySelector(".sub-title4").innerHTML = json.subTitle4;
        card.querySelector(".content4").innerHTML = json.content4;
    }
}
CARD_TYPES._3titles_3text = {
    init(card, json) {
        card.querySelector(".sub-title1").innerHTML = json.subTitle1;
        card.querySelector(".content1").innerHTML = json.content1;
        card.querySelector(".sub-title2").innerHTML = json.subTitle2;
        card.querySelector(".content2").innerHTML = json.content2;
        card.querySelector(".sub-title3").innerHTML = json.subTitle3;
        card.querySelector(".content3").innerHTML = json.content3;
    }
}

CARD_TYPES.list3 = {
    init(card, json) {
        card.querySelector(".sub-title").innerHTML = json.subTitle;
        card.querySelector(".li1").innerHTML = json.li1;
        card.querySelector(".li2").innerHTML = json.li2;
        card.querySelector(".li3").innerHTML = json.li3;
    }
}

CARD_TYPES.list4 = {
    init(card, json) {
        card.querySelector(".sub-title").innerHTML = json.subTitle;
        card.querySelector(".li1").innerHTML = json.li1;
        card.querySelector(".li2").innerHTML = json.li2;
        card.querySelector(".li3").innerHTML = json.li3;
        card.querySelector(".li4").innerHTML = json.li4;
    }
}

// CARD_TYPES.youtubeVideo = {
//     init(card, json) {
//         card.querySelector(".video").innerHTML = json.video;
//     }
// }

