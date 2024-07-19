// script.js
window.addEventListener('DOMContentLoaded', (event) => {
  const imageContainer = document.querySelector('#imageContainer');

  const images = [
    { src: 'pictures/first_date1.jpg', text: ' החוויה שלי מהדייט הראשון שלנו היא מיוחדת, אני זוכר את הדייט הראשון שלנו כמדהים. זה כלל פגישה ואזהרות מאבא שלך, פגישה עם אבא שלי באמצע הכביש באוטובוס והכי חשוב ביטלת לחברים שלך בשבילי, היה לנו חיבור מדהים מהרגע הראשון וכבר בדייט הראשון זה הרגיש לי נכון, במיוחד ברגע שלנו שנלקח מהטיטאניק' },
    { src: 'pictures/second_date1.jpg', text: '		שוב, עוד משחק שהוכחתי כמה אני טוב יותר כשאת נגדי וכשאת מוציאה לשון ליריבים שלי. שברתי את השיא שלי בבאולינג נגדך ומפתיע אותי כל פעם מחדש שלא ברחת אחרי ההפסד הזה' },
    { src: 'pictures/bowling1.jpg', text: '		שוב, עוד משחק שהוכחתי כמה אני טוב יותר כשאת נגדי וכשאת מוציאה לשון ליריבים שלי. שברתי את השיא שלי בבאולינג נגדך ומפתיע אותי כל פעם מחדש שלא ברחת אחרי ההפסד הזה' },
    { src: 'pictures/pool_game1.jpg', text: '		אין הרבה מה להגיד, כשאני משחק איתך במשחקים אני נהיה פשוט מדהים. הבסתי אותך בסנוקר למרות שהיית מתמודדת ראויה. ולמרות שכבר הייתי אמור לנצח הצעת שהמפסיד יעבור השפלה ויצבע את המצח עם גיר כחול, זה היה דייט מיוחד עם תמונות מיוחדות שקבלנו ממנו, והדבר החשוב הוא שולמדתי להכיר צדדים שונים בך ושיש לך חוש הומור מדהים' },
    { src: 'pictures/cool_glasses1.jpg', text: '		זה היה בערך פעם שנייה אחרי שהכרתי את ההורים וכבר הרגשתי בנוח להביא את המשקפיים האלו ולעשות תמונות כמו איזה שני מפגרים' },
    { src: 'pictures/kito1.jpg', text: '		פעם שנייה שלך בבית שלי רק שהפעם זה היה עם קיטו ה NPC. התחברת ברמות לאחים שלי ולמשפחה שלי מהרגע הראשון. מהשנייה שדרכת בבית שלי הפכת לחלק מהמשפחה, אין לי מה להגיד חוץ מתודה על מי שאת ומה שאת בשבילי, אני אוהב אותך♥' },
    { src: 'pictures/cake1.jpg', text: '		כמו שני מושפעים מטיקטוק החלטנו לעשות את הטרנד והכנו עוגת שוקולד שאני לא רואה ואת לא שומעת ואת מתעללת בי תוך ומצלמת את זה. אמנם העוגה שיצאה הייתה מגעילה ( ואמא שלך שחזרה מחו"ל שיקרה שהיא הייתה טעימה) אבל זאת אחת החוויות הכי מצחיקות שלנו ביחד ונהנתי ברמות כשהכנו את העוגה האזת ביחד למרות כל המכות שחטפתי ממך. איכשהו אני תמיד נגרר לטרנדים האלה איתךך' },
    { src: 'pictures/beer_sheva1.jpg', text: '		היום הראשון שלנו ביחד בחנוכה מתוך הלו"ז השלם שתכננו לעצמנו. נסענו לבאר שבע במטרה לעשות החלקה על הקרח ובסוף התבאסנו תחת כי זה ראינו שזה מתאים לילדים קטנים ( אפילו כפיר היה מתאכזב) ובמקום להתבאס מעט כמוני את היית בראש פתוח וחיפשת מה אפשר לעשות כדי להציל את המצב ולנצל את היום שלנו והלכנו לחד בריחה פסיכי (וקצת קריפי) על פסיכופת ובחזור שכנעתי אותך לראות יונתן ברקק' },
    { src: 'pictures/holon1.jpg', text: '		הייתי בשוק כשהצעת לקחת את כפיר ונועה איתנו להחלקה על הקרח אבל אני שמח שהחלטנו לקחת אותם איתנו כי אני נהנתי אתכם ברמותת. את לא מבינה אפילו כמה אני שמח שהתחברת ברמה הזאתי לאחים שלי ואני רוצה שתדעי שכשראיתי אתכם ביחד נהנים בהחלקה על הקרח פשוט חייכתי כמו מפגר מרוב אושר שהרגשתי בלב ולמרות שזה היה בשלב כלכך מוקדם בקשר ידעתי שאני מאוהב' },
    { src: 'pictures/eat1.jpg', text: '"יפה לך אוכלת"' },
    { src: 'pictures/zoo1.jpg', text: '		היה מדהים בירושלים, את זוכרת איזה מצחיק היה כשניסית לחקות חסידה על רגל אחת, כששלחתי לנועה סרטונים שהיא קוף כל פעם שראיתי אחד, שהיינו היחידם שהשתתפו בתחרות של הזאתי מהגן חיות ועשינו ריקוד חיזור נדיר או בכלל שקניתי לנו שני קופים במחיר מופקע רק כי אני אוהב אותך ואת מזרימה אותי לשטויות. בנוסף מניאק אחד עקץ אותנו עם מסטיקים יבשים במחיר מופקע ואכלנו קוראסון אסאדו נדיר ביחד. ' },
    { src: 'pictures/sleep1.jpg', text: '		זוכרת שהחלפתי לך את הרקע בטלפון וקיבלת הפתעה על הבוקר עם קולאז שלך ישנה?? \n אז אל תשכחי שיש לי מאגר שלם של תמונות שלך ישנה ותמיד שאני רואה אותן זה מזכיר לי שאת הילדה הכי יפה שיש בעולם הזה ואני מודה לאלוהים כל יום שזכיתי בך' },
    { src: 'pictures/spot1.jpg', text: '		הספוט שלנו, המקום המועדף עלינו, זה המקום שאנחנו מוצאים בו שקט ואנחנו נהנים אחד מהשני בלי שום הפרעות ורעש מסביב, כשאנחנו בספוט שלנו אני נהנה מהדברים הקטנים, אני נהנה לראות אותך צוחקת, אני נהנה מהחיוך היפה שלך וגם מהעיניים הבוהקות שלך שאת מדברת בהתלהבות על משהו, גם כשנזדקן ביחד, זה תמיד יהיה הספוט שלנו♥ ' },
    { src: 'pictures/valentines1.jpg', text: '		הולנטיין ראשון שלנו בתור זוג ואני נמצא בברצלונה במרחק של 3100  ק"מ ממך ואני סופסוף מגשים את החלום שלי להיות במשחק בברצלונה ועדיין כל מה שמעסיק לי את הראש זאת את, אז החלטתי לשלוח לך פרחים לבית כדי להראות לך כמה שאני חושב עלייך וזה המעטו שיכולתי לעשות ביום הזה כדי להראות לך כמה שאת חשובה לי וכמה שאני אוהב אותך♥' },
    { src: 'pictures/rich_couple1.jpg', text: '		היה מהנה מאוד ללכת ביחד איתך ועם המשפחה שלך למימונה של טחונים שבה הרגשנו כאילו אנחנו זוג של עשירים מהעשירון העליון, למרות שבתכלס אנחנו פשוטי עם כאלה כמו כולם' },
    { src: 'pictures/family_trip1.JPG', text: '		מאז שהכרתי אותך תמיד שמעתי מלא סיפורים על כל הטיולים שהיה לך בארץ ובחו"ל ותמיד שמחתי בשבילך על כל החוויות שצברת ואנ ישמח שניתנה לי את ההזדמנות בפעם הראשונה להצטרף לטיול ביחד עם המשפחה שלך ולחוות את מה שאת חווה כבר מאז שאת ילדה קטנה. הטיול היה מדהים מבחינתי ונהנתי בכל שנייה ביחד אתכם ואני שמח שאני כבר הופך להיות חלק מהמשפחה שלך שאני כלכך אוהב♥' },
    { src: 'pictures/greece1.jpg', text: '		אני לא יודע מאיפה להתחיל, הטיול ליוון הייתה אחת החוויות הכי מעצימות ומגשבות שלנו ביחד, למדתי להכיר אותך מבפנים ומבחוץ ברמות שלא הכרתי מלפני והערצה שלי כלפייך רק התעצמה. גיליתי על העוצמות שלך ועל הגישה החיובית שלך לסיטואציות בחיים שלך ואני חושב ש...<a href="greece.html">להמשך הכתבה לחץ על הלינק</a>' },
    { src: 'pictures/sea1.jpg', text: '		תמיד אנחנו נהנים ביחד בים, תמיד כיף לנו שאחד לבן ורק נשרף, לעומתף שאת מאז יוון תופסת יותר ויותר צבע. הים הוא המקום המועדף עלינו ביחד. בין אם זה חוף גיל, האבנים בקשתות, הספוט הקבוע שלנו או פשוט ים בשישי ביחד, כשאני איתך בים אני מרגיש רגוע ושליו, אני נהנה ננל ומהרוגע והשלווה בים ואני מרגיש שיש לי כל מה שאני צריך בחיים שלי' },
    { src: 'pictures/rollups1.jpg', text: '		אחרי מסע חיפושים ארוך מאוד השגנו רולאפס וטעמנו אותו עם גלידהה. הפעם הראשנה היה פחות טעים אבל בפעם השנייה עם הגלידה מסטיק הוא היה מדהים' },
    { src: 'pictures/graduated1.jpg', text: '		נסיכה שלי, גאווה שלי, אין לי מילים להגיד לך כמה אני גאה בך שסיימת את הלימודים בהצלחה. אני לא יכול לחכות להמשך הדרך שלנו ביחד ולראות לאן את תתפתחי ותתקדמי, יש לך יכולות פנומנליות ואני בטוח שתמצאי את המקום שתבואי בו לידי ביטוי בצורה הטובה ביותר. תזכרי שכל דבר שתבחרי לעשות אני אעמוד מאחוריך ואתן לך את התמיכה המלאה שלי, אני אוהב אותך וגאה בך♥' },
    { src: 'pictures/trip_with_friends1.jpg', text: '		הטיול זוגות שלנו עם קורן ושירז (שלא מוגדרים כזוג) היה טיול שצברנו בו הרבה חוויות ביחד, אני שמח מאוד שאת מצליחה להתחבר לחברים שלי ולמצוא איתם שפה משותפת, אני גאה בך ברמות ששברת את המחסום הפסיכולוגי שלך באותו היום וקפצת מהאבנים לתוך המים כמו ילדה גיבורה. אני מאחל לנו עוד הרבה טיולים ביחד כזוג, עם חברים וגם עם אבא שלך ( שהיה מעורב גם בטיול הזה)' },
    { src: 'pictures/seven_month1.jpg', text: 'נסיכה שלי, את זוכרת את השבעה חודשים שלנו? עשינו פקניק עם פסטה נדירה שהכנו בעצמנו בפארק לכיש, ישבנו מול הנחל עם המים הזורמים וסכמנו את שבעת החודשים שלנו, תאמנו ציפיות לעתיד המשותף שלנו ביחד ועשינו פינקי פרומס מחודש. אבל הדבר הכי טוב שעשינו היה הציור שלנו , הוא מסמל לי שאני ואת לנצח ואת הציור הזה אני ארצה להראות לילדים שלנו בעזרת השם' },
    { src: 'pictures/asaf_injured1.jpg', text: '		כן אני פצוע, שוב. יש מצב שבזמן שאת קוראת את זה אני שוב חולה/פצוע/בניתוח/לא רואה בעין שמאל או סתם עם כאבים בברכיים. דווקא בסיטואציות האלה, והשיא שלהן היה כשחטפתי ספריי שלג לעין ולא ראיתי בעין שמאל, ראיתי כמה את דואגת לי וכמה את מוכנה להקריב בשבילי ולתת ממך בשבילי. אבל זה לא רק ברגע...<a href="asaf_ingured.html">להמשך הכתבה לחץ על הלינק</a>' },
    { src: 'pictures/elevetor1.jpg', text: '		זה אמנם היה יום רגיל, לא היה בו משהו מיוחד. אני ואת הלכנו סך הכל לקניות בסופר אבל כלכך נהנתי איתך גם ביום הזה. למרות שלא עשינו שום דבר מיוחד פשוט צחקנו בלי הפסקה. ביום הזה  למדתי שכשאנחנו ביחד אנחנו יכולים להנות מכל דבר כל עוד אנחנו אחד עם השני וזה מעיד לי הרבה על המשך החיים שלנו ביחד, שגם בדברים המשעממים , תמיד נדע להנות אחד מהשני ואחד בזכות השני.' },
    { src: 'pictures/princess1.jpg', text: '		סתם תזכורת לזה שאני אוהב אותך נסיכה קטנה שלי♥♥' },
    { src: 'pictures/purim1.jpg', text: '		אני מאוד אהבתי את פורים שלנו ביחד, בפורים הלכנו למסיבה הראשונה שלנו ביחד וכמו כל זוג קיטשיים עשינו תחפושת זוגית (מדהימה יש לציין) של רטטויי שקבלנו עליה מלא מחמאות ואפילו ראינו את הסרט לפני כדי להכנס לדמות עד הסוף. נהנתי ברמות במסיבה הראשונה שלנו ביחד ואני מאחל לנו שנמשיך ללכת לעוד מלא מסיבות ביחד ולהנות ככה אחד מהשני' },
    { src: 'pictures/rondo1.jpg', text: '		הרונדו שלנו היה מאוד מעניין, הוא התחיל מדבים אצל כל אחד במקיף שלו וההי עוד יותר טוב כשנפגשנו עד הרגע שבו הוא החל טיפה להדרדר בעקבות העין שלי, ואת ,למרות שרצית להמשיך להנות עם החברים ולהנות וגם ללכת לאפטר רונדו החלטת לוותר על כל זה בשביל לבוא איתי ולתמוך בי ואת לא מסינה אפילו כמה אני מעריך את מה שעשית ואת העובדה שבשבילך זה מובן מאליו כמו שזה מובן מאליו בשבילי' },
    { src: 'pictures/first_time1.jpg', text: '		אין מה להגיד גם בזה אנחנו מדהימים. אני כלכך שמח שאת הפעם הראשונה שלי זכיתי לעשות איתך ואני כלכך שמח שלא חיכינו ליום השלישי ביוון ובמיוחד שלא חיכינו לנשף שלך. החיבור שלנו במיטה מדהים כמו שהחיבור שלנו בחיים מדהים. אני חושב שכל המלון כבר שמע שמועות על החדר שלנו מכמות המצעים שהחלפנו אבל זה פשוט היה שווה את זה. אני אוהב אותך נסיכה שליי♥' },
    { src: 'pictures/katan1.jpg', text: '		אין מה להגיד, נכנסת למשפחה מאודד תחרותית שתמיד רוצה לנצח בהכל וכתוצאה מכך היו לנו המון משחקי קטאן אמויונאליים עם הרבה מאוד רגשות וקצת עצבים וירידה לפסים אישיים (נועם לא גיי אהמ אהמ, אבל הדברים האלה גם עושים אותך מיוחדת) אבל עדיין אני מקווה שלעולם לא נפסיק עם המשחק הזה ואני שמח על מסורת הקטאן החדשה שיצרנו עם במשפחה' },
    { src: 'pictures/first_month.jpg', text: '		זוכרת את המתנה הראשונה שהבאתי לך? אני יודע שעבר הרבה מאוד זמן מאז אבל תמיד כיף להזכר ברגעים אחורה? אני נהנתי להכין את המתנה אותה כי ידעתי שאת הולכת לאהוב אותה והתחושה הזאת נתנה לי את הדרייב לעשות את זה. אני זוכר שאת לא חשבת שמביאים מתנה אחרי חודש אבל לא הייתי צריך ממך שום מתנה בגלל שאת המתנה שלי,. כשיש לי אותך אני לא צריך יותר כלום' },
    { src: 'pictures/surgery.jpg', text: 'עברנו עוד ניתוח💪( מצטרף לקטגוריה של הפצוע...), זאת עוד הזדמנות להגיד לך תודה על זה שאת נמצאת איתי גם ברגעים הקשים שלי שבהם אני צריך תמיכה ועזרה, וברוך השם מאז הניתוח הזה אני בריא. אני מאחל לנו שתמיד נהיה אחד ליד השני בכל מקום שנלך אליו בחיים. אני יכול להבטיח שאני תמיד אהיה שם בשבילך ואני בטוח שאת תהי שם תמיד לצידי כשאני אצטרך אותך♥'},
    { src: 'pictures/telaviv.jpg', text: 'סופסוףף עשינו יום כיף בתל אביב, הלכנו לשוק הכרמל והסתובבנו שם והתלבשנו בסטייל מטוורףף, ישבנו בבר מדהים עם פיצות מטורפות ובסוף הלכנו לעשות סיבוב בטיילת על הים וסיימנו עם שיחה על החוף שבה רק דברנו על כמה שאנחנו אוהבים אחד את השני ומתרגשים לקראת העתיד המשותף שלנו ביחד'},
    { src: 'pictures/funnypic.jpg', text: 'פשוט תראי את התמונה, אין לי באמת מה להוסיף  '},
    { src: 'pictures/nine_months.jpg', text: 'את התשעה חודשים שלנו חגגנו במלון לאונרדו עם מסאז מפנק יותר מביוון אפילו שהייתי כמו מסכן עם אף סתום בשני הנחיריים וכל המסאז לא הצלחתי לנשוםם, אחרי זה נכנסו לגקוזי והחלטנו שצריך להוסיף אותו לליסט המכובד שלנו של מקומות מאוד ספציפיים, המשכנו לעבור מהבריכה לגקוזי שוב ושב ושוב כדי לנצל את מה ששילמנו עליו ולקינוח אכלנו שניצל של שישי ביום שני וראינו את רוי חבר של דניאל מתעלל בילדים קטנים'},
    { src: 'pictures/prom.jpg', text: 'לפי הסיפורים הנשך שלך היה מדהים ( לעומת שלי, אבל לא נכנס לזה),  את גרמת לי לעלות על חליפה ולהסתפר רק כדי שנוכל להצטלם ביחד ולראות כמה אנחנו סקסיים ואיזה זוג יפה אנחנו כשנחנו לבושים ככה, כמובן שאחרי כל התמונות אני חזרתי לבית עם החליפה שלי ואת הלכת והמשכת לחגוג כמו שרק את יודעת'},
    { src: 'pictures/batmitzva.jpg', text: ' הבת מצווה של עדי הייתה כיפית ברמות, אני סבלתי מכאבי בטן ואת למדת לרקוד גרוזינית בזכות סבתא ( וקצת פחות בזכותי) ואפילו עשינו שם את הריקוד זוגות שלנוו'},
    { src: 'pictures/agam_gioos.jpg', text: 'נסיכה שליי, התחלת דרך חדשה בחיים שלך ואין גאה בך יותר ממני על הדרך שאת מתחילה לעבור ,את הטירונות עברת בהצלחה למרות קצת חפירות של הבנות ותסכול על הצבא המפגר וגם התעלפות פעם אחת בשמירה מהלחץ ☠, אבל חוץ מזה עברת את כמו גיבורה ואני גאה בך!' },
    { src: 'pictures/asaf_gioos.jpg', text: 'אין הרבה מה להגיד, סיימתי את הקד"צ והגעתי לגיוס עם מדים כאילו אני כבר חייל, כשהייתי בטירונות גם כשהיה קצת קשה והרגשתי שהכל מיותר בזה את תמיד ידעת לבוא ולהרים לי את המצב רוח נסיכה שלי, וגם היום במהלך יום עבודה לראות שאת מתקשרת אליי באמצע היום תמיד הופך את היום שלי למדהים כשאני שומע את הקול שלך' },
    { src: 'pictures/asaf_sof_koors.jpg', text: 'הלוואי היית יכולה להגיע באותו יום, אבל גם כשידעתי שאת לא נמצאת בקהל את היית איתי בלב ותמיד תמיד תמיד חשבתי על הפרצוף היפה שלך נסיכה שלי, ובדיעבד גם גיליתי שרק את הטקס מרחוק וריגשת אותי ברמות אהבה שלי כי היום הזה היה חשוב לי במרות אז תודה על זה' },
    { src: 'pictures/babcha.jpg', text: 'יציאה ספונטנית עם שילוב מעניינן, ניסית לשדך שם בין קורן לאליאן אבל לא מוסבר מה שהלך שם ביניהם, למזלנו זה לא הסתדר כי אליאן חזרה לרונל אבל בלי קשר אני ממש נהנתי שם לרקוד איתך ולהנות ממך אהבה שלי' },
    { src: 'pictures/birthday.jpg', text: 'היום הולדת והשנה שלנו תפסה אותנו קצת בסיטואציה לא רגילה, התחלתי קורס, חודש וחצי למלחמה ואני בזום בחדר על מדים והכל באי וודאות גדולה ולמרות כל הקשיים האלו הצלחת להגיע ולהפתיע אותי , יצאתי להפסקת ערב מהזום כשאני שבוז עם גב תפוס בחדר ופתאום ראיתי אותך כלכך יפה שארגנת לי ככה כמה מתנות, אחרכך הלכנו לקפה גן סיפור והיה מדהים , וגם אם לא עשינו משהו גדול בגלל המצב נהנתי ברמות, כי לא משנה מה אני עושה, כל זה עוד אני איתך אני מרגיש בעננים' },
    { src: 'pictures/givat_yona.jpg', text: 'זה דייט שאני ממששש אוהב, למרות שהלכנו בתקופה מוקדמת מדי שלא היה אורות עדיין וההאור היחיד שהיה לנו היה מהנמל והפלאשים נהנתי ברמותתת, שיחקנו במשחק של המכינה שלך מתחת לשמיכה והכרנו אחד את השנייה יותר טוב והיה כיף ברמותת' },
    { src: 'pictures/grandpa_hana.jpg', text: 'יום כיף עם סבתוששש, הכרתי את הסבתא שעל שמה את נקראת והיה כיף ברמות, אני השארתי רושם טוב וממש נהנתי להכיר אותך יותר ואת המשפחה שלך וקצת להבין מאיפה את באה ומאיפה אבא שלך הגיע ולמדתי על המשפחה המון' },
    { src: 'pictures/healthy_couple_running.jpg', text: 'אנחנו זוג כלכך שווה באמת עשינו ריצה ביחד ואנחנו כאלה שווים ויפים אין דברים כאלה בואי נלך לדגמן תחתונים או משהו' },
    { src: 'pictures/hospital_for_chista.jpg', text: 'זה אחד מהימים שחיזקו לי עוד יותר כמה שאת מדהימה ומיוחדת ובאמת כמה שאסור לי לקחת אותך כמובן מאליו, לפני שהגענו לבית חולים עוד רבת איתי על זה שלא אמרתי לך לבוא איתי לביקורופא מרוב שאת דואגת ואכפתית, בסוף מפה לשם הגענו למיון שיחקנו איקס עיגול ואיש תלוי שאנחנו מטורפים בזה ובסוף לא פתחו אותי וקיבלתי טיפול שעזר' },
    { src: 'pictures/match_outfits.jpg', text: 'סתם כי אנחנו יפים ברמות עם אאוטפיט תואם' },
    { src: 'pictures/katif.jpg', text: 'הלכנו כמו מושפעים בעקבות הטרנד לקטיף כי אנחנו כאלה שונים ומיוחדים והיה ממש כיף האמת ואכלנו ארטיק טעים ובסוף הצלחנו לעשות זר מושקע ויפה שמן הסתם את לקחת אותו, ואז אכלנו שקשוקה טעימה אצל מסעדת השף של אבא שלך והיה שישי מדהים' },
    { src: 'pictures/match_outfits2.jpg', text: 'סתם כי אנחנו יפים ברמות עם אאוטפיט תואם #2' },
    { src: 'pictures/message.jpg', text: 'עשינו יום כיפי ברמותת, היה מסאז\' נדיר עם הרוסיה שאמרה שאת מהממת ואני בכלל הייתי עם אף סתום כל הזמן, אחרי זה היינו בסאונה ובג\'קוזי והיה כיף ברמות ואפילו רועי ארגן אותנו בצ\'יפס ושניצל והיה יום נדיר' },
    { src: 'pictures/miss_you_bamechina.jpg', text: 'איך התגעגענוו, ההתחלה של המכינה תפסתי אותך בתמונה עם דמעות בעיניים אהבה שלי, המרחק היה לא פשוט וגרר גם ויכוחים לפעמים אבל הגעגוע גדל ברמות ועברנו את זה ויצאנו יותר חזקים ואוהבים מזה💪' },
    { src: 'pictures/police_officialy.jpg', text: 'אני צריך להתחיל לפחד? כי אגם אלקבץץ היא שוטרתתתת' },
    { src: 'pictures/pool.jpg', text: 'תראי איזו יפה את אני מאוהבבב' },
    { src: 'pictures/pool_together.jpg', text: 'פעם ראשונה שבאנו עם כפיר ונועה לבריכהה, לא אשכח בחיים איך פשוט זרקת את כפיר למים זה הדבר הכי מצחיק שיש באמתת, היה כיף ברמות ואירחת מכל הלב ופינקת אותם ברמותת ואני מעריך את זה למרות זה לא מובן מאליו אין כמוך. ובטח קיטו מתגעגע לכפיר ברמות בחיים לא התייחסו אליו ככה' },
    { src: 'pictures/power_couple_in_fancy_place.jpg', text: 'אנחנו כאלה פאנסיי, הלכנו לעגלת קפה ואנחנו כאלה מפונפנים ומגניבים ומה שכן אכלנו כריך אבוקדו טעים ברמות והיה כיף רצחחח זה היה מגוון וממש אהבתי את זה' },
    { src: 'pictures/prachim_bamechina.jpg', text: 'קפצתי לביקור בהפתעה במכינהה, זה עשה לך קצת בעיות בגלל הסטורי החמודי הזה שהעלית אבל ראינו את פריז הקטנה ממש כמו תיירים ובסוף גם הגעתי לדירה שלך ואני כלכך שמח שהצלחתי לראות אותך ולשמח אותך באותו יום שישי ולעשות לך טוב על הלב♥' },
    { src: 'pictures/pretty_in_sryLanka.jpg', text: 'סתם כי את מושלמת בסרי לנקה' },
    { src: 'pictures/sioom_mechina.jpg', text: 'סיימת את המכינה, את הגאווה הכי גדולה שלי, עברת כלכך הרבה בתקופה הזאת, ואם בתקופה רגילה מכינה זה דבר מטלטל אז אם זה במהלך מלחמה וחוסר ודאות שאסור לחזור למכינה וחוזרים רק אחרי כמה חודשים זה קשה ומבלבל פי כמה, אבל הכי חשוב הוא שעברת את התקופה הזאת בהצלחה ולמדת על עצמך המון והתפתחת כבן אדם וכאישה והתבגרת המון וגילית הרבה דברים חדשים על העולם ועל עצמך ואני גאה בך שבחרת ללכת בדרך הזאת נסיכה שלייי♥' },
    { src: 'pictures/sleep_in_car.jpg', text: '"מבטיחה שאני לא ארדם אני אשאר איתך כל הנסיעה שלא תהיה לבד"' },
    { src: 'pictures/sleeppp.jpg', text: 'אחת מכלכך הרבה פעמים שנשארתי איתך עד מאוחר כדי להרדים אותךך, את פשוט מתוקה כלכך כשאת ישנה' },
    { src: 'pictures/tennis_with_papa.jpg', text: 'איזה כיף בשבתות אצלך וזה מטורף כמה טניס זה משחק כיף, אני שמח שיוצא לנו לבלות זמן איכות ביחד עם אבא שלך שבאמת יודע לרוץ מהר, אני שמח שלימדת אותי לשחק טניס ואפילו לימדת אותי ממש טוב כי אני בהמשך הולך לעקוף אותך' },
    { src: 'pictures/trip_in_tlv.jpg', text: 'יום כיף בתל אביב ובשוק הכרמלל, הלכנו כלכך יפים זה לא נורמלי באמת אנחנו וואו, היה מדהים קנינו מכנסיים משותפות ואכלנו פיצה מטורפתתת' },
    { src: 'pictures/visit_in_tira.jpg', text: 'פשוט תמונה מתוקה שאיילה צילמה שהגעת לבקר אותי בעבודה ♥' },
    { src: 'pictures/yamit_2000.jpg', text: 'הלכנו ליום כיף בימית 2000 ואיכשהו הפעם עם החברים שלי, אני לא זוכר כלכך הרבה מהיום הזה חוץ מזה שהיה ממש כיף ונהנתי ברמות להיות גם עם חברים שאני אוהב וגם עם הנסיכה שלי ביחד' }
    
    //{ src: 'pictures/.jpg', text: ''},
    // Add more image URLs and corresponding text here
  ];

  // Create image elements and append them to the container
  images.forEach((image) => {
    const imgElement = document.createElement('img');
    imgElement.src = image.src;
    imgElement.alt = 'Gallery Image';
    imgElement.classList.add('gallery-image');

    // Wrap the image and text overlay in a container
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
    imageContainer.appendChild(imgElement);

    imageContainer.onclick =  () => {
      modal.style.display = "block";
      modalImage.src = image.src;
      modalText.innerHTML = image.text
    }

    document.querySelector('#imageContainer').appendChild(imageContainer);
  });
});

// Get the modal
var modal = document.getElementById("myModal");
var modalImage = document.getElementById("modalImage");
var modalText = document.getElementById("modalText");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
