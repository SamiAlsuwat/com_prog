// Course content for Computer Programming 2.
// Week 0 is the setup week; weeks 1–9 follow the official course content table.
// Note: code samples live inside JS template literals, so avoid "\n" / "\0" in them
// (use endl, or escape the backslash as "\\0").

export const weekData = {
  0: {
    titleEn: "Installing Dev-C++",
    titleAr: "تثبيت برنامج Dev-C++",
    icon: "💻",
    content: [
      { type: "intro", titleEn: "Welcome to Week 0!", titleAr: "مرحباً بك في الأسبوع صفر!", contentEn: "Before writing any code you need a place to write it. This week you will install Dev-C++, a free and simple IDE for C++ on Windows, and run your first program.", contentAr: "قبل كتابة أي كود تحتاج إلى بيئة لكتابته. في هذا الأسبوع ستقوم بتثبيت برنامج Dev-C++، وهو بيئة تطوير مجانية وبسيطة للغة C++ على نظام ويندوز، وتشغيل أول برنامج لك." },
      { type: "concept", titleEn: "What is an IDE?", titleAr: "ما هي بيئة التطوير المتكاملة (IDE)؟", contentEn: "An IDE (Integrated Development Environment) puts everything you need in one program. Dev-C++ already includes the TDM-GCC compiler, so you do not need to install anything else.", contentAr: "بيئة التطوير المتكاملة تجمع كل ما تحتاجه في برنامج واحد. برنامج Dev-C++ يحتوي مسبقاً على المترجم TDM-GCC، لذلك لا تحتاج لتثبيت أي شيء آخر.", keyPoints: [
        { en: "Editor: where you write your code", ar: "المحرر: المكان الذي تكتب فيه الكود" },
        { en: "Compiler: translates C++ code into a program the computer can run", ar: "المترجم: يحول كود C++ إلى برنامج يستطيع الحاسب تشغيله" },
        { en: "Console window: shows the output and reads your input", ar: "نافذة الأوامر: تعرض المخرجات وتستقبل المدخلات" }
      ]},
      { type: "concept", titleEn: "Step 1: Download Dev-C++", titleAr: "الخطوة ١: تحميل Dev-C++", contentEn: "Download the free Embarcadero Dev-C++ from its official page. Avoid unofficial download sites.", contentAr: "حمّل نسخة Embarcadero Dev-C++ المجانية من الصفحة الرسمية. تجنب مواقع التحميل غير الرسمية.", keyPoints: [
        { en: "Open: sourceforge.net/projects/embarcadero-devcpp", ar: "افتح الرابط: sourceforge.net/projects/embarcadero-devcpp" },
        { en: "Click the green \"Download\" button and wait for the setup file to finish downloading", ar: "اضغط على زر \"Download\" الأخضر وانتظر حتى ينتهي تحميل ملف التثبيت" },
        { en: "The file name looks like: Embarcadero_Dev-Cpp_6.3_TDM-GCC_9.2_Setup.exe", ar: "اسم الملف يشبه: Embarcadero_Dev-Cpp_6.3_TDM-GCC_9.2_Setup.exe" }
      ]},
      { type: "concept", titleEn: "Step 2: Install", titleAr: "الخطوة ٢: التثبيت", contentEn: "Run the setup file and keep the default options.", contentAr: "شغّل ملف التثبيت واترك الخيارات الافتراضية كما هي.", keyPoints: [
        { en: "Double-click the setup file and click \"Yes\" if Windows asks for permission", ar: "اضغط مرتين على ملف التثبيت ثم \"نعم\" إذا طلب ويندوز الإذن" },
        { en: "Choose English as the installer language, then click \"I Agree\" on the license", ar: "اختر اللغة الإنجليزية للتثبيت، ثم اضغط \"I Agree\" للموافقة على الترخيص" },
        { en: "Keep the component type \"Full\" and the default install folder, then click \"Install\"", ar: "اترك نوع التثبيت \"Full\" ومجلد التثبيت الافتراضي، ثم اضغط \"Install\"" },
        { en: "Click \"Finish\" to open Dev-C++. On the first run choose the language and theme, then click \"Next\" until it opens", ar: "اضغط \"Finish\" لفتح البرنامج. في أول تشغيل اختر اللغة والمظهر ثم اضغط \"Next\" حتى يفتح" }
      ]},
      { type: "concept", titleEn: "Step 3: Create and run your first program", titleAr: "الخطوة ٣: إنشاء وتشغيل أول برنامج", contentEn: "Every program in this course is a single source file.", contentAr: "كل برنامج في هذا المقرر عبارة عن ملف مصدري واحد.", keyPoints: [
        { en: "File → New → Source File (Ctrl + N)", ar: "File ← New ← Source File أو (Ctrl + N)" },
        { en: "Type your code, then save it with File → Save (Ctrl + S) and make sure the name ends with .cpp", ar: "اكتب الكود ثم احفظه من File ← Save أو (Ctrl + S) وتأكد أن الاسم ينتهي بـ ‎.cpp" },
        { en: "F9 = Compile, F10 = Run, F11 = Compile & Run", ar: "F9 = ترجمة، F10 = تشغيل، F11 = ترجمة وتشغيل" },
        { en: "Errors appear in the \"Compiler\" tab at the bottom, with the line number", ar: "الأخطاء تظهر في تبويب \"Compiler\" في الأسفل مع رقم السطر" }
      ]},
      { type: "code", titleEn: "Hello World", titleAr: "برنامج Hello World", code: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    cout << "Dev-C++ is working!" << endl;
    return 0;
}`, explanation: "Type this program, save it as hello.cpp and press F11. A console window opens with the output. Press any key to close it.", explanationAr: "اكتب هذا البرنامج واحفظه باسم hello.cpp ثم اضغط F11. ستفتح نافذة الأوامر وتعرض المخرجات. اضغط أي مفتاح لإغلاقها." },
      { type: "concept", titleEn: "Common problems", titleAr: "مشاكل شائعة", contentEn: "If something does not work, check these first.", contentAr: "إذا لم يعمل شيء ما، تحقق من هذه النقاط أولاً.", keyPoints: [
        { en: "\"Source file not compiled\": save the file with a .cpp extension before compiling", ar: "رسالة \"Source file not compiled\": احفظ الملف بامتداد ‎.cpp قبل الترجمة" },
        { en: "No compiler found: Tools → Compiler Options and select \"TDM-GCC 64-bit Release\"", ar: "لم يتم العثور على المترجم: Tools ← Compiler Options واختر \"TDM-GCC 64-bit Release\"" },
        { en: "The program will not run: your antivirus may be blocking the new .exe file", ar: "البرنامج لا يعمل: قد يكون برنامج مكافحة الفيروسات يمنع ملف ‎.exe الجديد" },
        { en: "Mac or Linux: Dev-C++ is Windows only. Use Code::Blocks, VS Code, or onlinegdb.com instead", ar: "ماك أو لينكس: Dev-C++ يعمل على ويندوز فقط. استخدم Code::Blocks أو VS Code أو موقع onlinegdb.com" }
      ]}
    ],
    exercises: [
      { q: "Dev-C++ is a:", qAr: "برنامج Dev-C++ هو:", options: ["Web browser", "IDE for C++", "Operating system", "Database"], correct: 1 },
      { q: "C++ source files should be saved with the extension:", qAr: "ملفات C++ المصدرية تُحفظ بالامتداد:", options: [".txt", ".exe", ".cpp", ".doc"], correct: 2 },
      { q: "Which key compiles AND runs the program in Dev-C++?", qAr: "أي مفتاح يقوم بالترجمة والتشغيل معاً في Dev-C++؟", options: ["F9", "F10", "F11", "F5"], correct: 2 },
      { q: "The compiler that comes with Dev-C++ is:", qAr: "المترجم المرفق مع Dev-C++ هو:", options: ["TDM-GCC", "Python", "Java JDK", "Node.js"], correct: 0 },
      { q: "Where are compile errors shown in Dev-C++?", qAr: "أين تظهر أخطاء الترجمة في Dev-C++؟", options: ["In the console window", "In the Compiler tab at the bottom", "They are not shown", "In the File menu"], correct: 1 }
    ]
  },
  1: {
    titleEn: "Data Types, Operators & I/O",
    titleAr: "أنواع البيانات والعمليات الحسابية والإدخال والإخراج",
    icon: "🔤",
    content: [
      { type: "intro", titleEn: "Welcome to Week 1!", titleAr: "مرحباً بك في الأسبوع الأول!", contentEn: "This week covers simple data types, arithmetic operators, and how to read input and print output with cin and cout.", contentAr: "يغطي هذا الأسبوع أنواع البيانات البسيطة، والعمليات الحسابية، وكيفية قراءة المدخلات وطباعة المخرجات باستخدام cin و cout." },
      { type: "concept", titleEn: "Simple Data Types", titleAr: "أنواع البيانات البسيطة", contentEn: "Every variable has a type that decides what values it can hold.", contentAr: "لكل متغير نوع يحدد القيم التي يمكن أن يخزنها.", keyPoints: [
        { en: "int: whole numbers, e.g. 10, -3, 0", ar: "int: الأعداد الصحيحة، مثل 10 و ‎-3 و 0" },
        { en: "double / float: decimal numbers, e.g. 3.14, -0.5", ar: "double / float: الأعداد العشرية، مثل 3.14 و ‎-0.5" },
        { en: "char: one character in single quotes, e.g. 'A', '7'", ar: "char: حرف واحد بين علامتي اقتباس مفردة، مثل 'A' و '7'" },
        { en: "bool: true or false", ar: "bool: صح (true) أو خطأ (false)" },
        { en: "string: text in double quotes, e.g. \"Taif\" (needs #include <string>)", ar: "string: نص بين علامتي اقتباس مزدوجة، مثل \"Taif\" (يحتاج ‎#include <string>)" }
      ]},
      { type: "code", titleEn: "Declaring Variables", titleAr: "تعريف المتغيرات", code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    int age = 19;
    double gpa = 3.75;
    char grade = 'A';
    bool passed = true;
    string name = "Ahmed";

    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;
    cout << "GPA: " << gpa << endl;
    cout << "Grade: " << grade << endl;
    cout << "Passed: " << passed << endl;  // prints 1
    return 0;
}`, explanation: "A variable is declared as: type name = value;. A bool prints as 1 (true) or 0 (false).", explanationAr: "يُعرّف المتغير بالشكل: النوع الاسم = القيمة;. المتغير bool يُطبع 1 (صح) أو 0 (خطأ)." },
      { type: "code", titleEn: "Arithmetic Operators", titleAr: "العمليات الحسابية", code: `int a = 17, b = 5;

cout << a + b << endl;  // 22
cout << a - b << endl;  // 12
cout << a * b << endl;  // 85
cout << a / b << endl;  // 3   (integer division)
cout << a % b << endl;  // 2   (remainder)

double x = 17.0;
cout << x / b << endl;  // 3.4 (decimal division)

// Precedence: * / % before + -
cout << 2 + 3 * 4 << endl;    // 14
cout << (2 + 3) * 4 << endl;  // 20`, explanation: "Dividing two ints drops the decimal part. % gives the remainder and works only with integers. Use parentheses to control the order.", explanationAr: "قسمة عددين صحيحين تحذف الجزء العشري. العامل % يعطي باقي القسمة ويعمل مع الأعداد الصحيحة فقط. استخدم الأقواس للتحكم في ترتيب العمليات." },
      { type: "code", titleEn: "Increment & Compound Assignment", titleAr: "الزيادة وعمليات الإسناد المركبة", code: `int count = 10;

count++;      // count = 11
count--;      // count = 10
count += 5;   // count = count + 5  -> 15
count -= 3;   // count = count - 3  -> 12
count *= 2;   // count = count * 2  -> 24
count /= 4;   // count = count / 4  -> 6
count %= 4;   // count = count % 4  -> 2

cout << count << endl;  // 2`, explanation: "++ adds 1 and -- subtracts 1. Compound operators like += combine an operation with assignment.", explanationAr: "العامل ++ يضيف 1 والعامل -- يطرح 1. العمليات المركبة مثل += تجمع بين العملية والإسناد." },
      { type: "code", titleEn: "Input and Output", titleAr: "الإدخال والإخراج", code: `#include <iostream>
using namespace std;

int main() {
    double length, width;

    cout << "Enter length and width: ";
    cin >> length >> width;

    double area = length * width;
    double perimeter = 2 * (length + width);

    cout << "Area = " << area << endl;
    cout << "Perimeter = " << perimeter << endl;
    return 0;
}`, explanation: "cout << prints to the screen and cin >> reads from the keyboard. One cin can read several values separated by spaces.", explanationAr: "cout << يطبع على الشاشة و cin >> يقرأ من لوحة المفاتيح. يمكن لأمر cin واحد قراءة عدة قيم مفصولة بمسافات." }
    ],
    exercises: [
      { q: "Which data type stores a decimal number?", qAr: "أي نوع بيانات يخزن عدداً عشرياً؟", options: ["int", "char", "double", "bool"], correct: 2 },
      { q: "What is the result of 17 / 5 when both are int?", qAr: "ما ناتج 17 / 5 عندما يكون كلاهما int؟", options: ["3.4", "3", "2", "4"], correct: 1 },
      { q: "What is the result of 17 % 5?", qAr: "ما ناتج 17 % 5؟", options: ["3", "2", "3.4", "5"], correct: 1 },
      { q: "Which statement reads a value from the keyboard?", qAr: "أي جملة تقرأ قيمة من لوحة المفاتيح؟", options: ["cout >> x;", "cin << x;", "cin >> x;", "read(x);"], correct: 2 },
      { q: "What is the value of 2 + 3 * 4?", qAr: "ما قيمة 2 + 3 * 4؟", options: ["20", "14", "24", "9"], correct: 1 }
    ]
  },
  2: {
    titleEn: "Control Structures 1: Decisions",
    titleAr: "هياكل التحكم ١: القرارات",
    icon: "🔀",
    content: [
      { type: "intro", titleEn: "Welcome to Week 2!", titleAr: "مرحباً بك في الأسبوع الثاني!", contentEn: "Decision statements let a program choose what to do based on a condition. This week covers if, if-else, else-if, nested if, and switch.", contentAr: "جمل القرار تسمح للبرنامج باختيار ما يفعله بناءً على شرط. يغطي هذا الأسبوع if و if-else و else-if و if المتداخلة و switch." },
      { type: "concept", titleEn: "Relational & Logical Operators", titleAr: "العوامل العلائقية والمنطقية", contentEn: "Conditions are built with these operators and evaluate to true or false.", contentAr: "تُبنى الشروط باستخدام هذه العوامل، وتكون نتيجتها صح أو خطأ.", keyPoints: [
        { en: "Relational: ==  !=  <  >  <=  >=", ar: "العلائقية: ==  !=  <  >  <=  >=" },
        { en: "&& (AND): true only if both conditions are true", ar: "‏&& (و): صح فقط إذا كان الشرطان صحيحين" },
        { en: "|| (OR): true if at least one condition is true", ar: "‏|| (أو): صح إذا كان أحد الشرطين على الأقل صحيحاً" },
        { en: "! (NOT): reverses the condition", ar: "‏! (ليس): يعكس الشرط" },
        { en: "Do not confuse = (assignment) with == (comparison)", ar: "لا تخلط بين = (الإسناد) و == (المقارنة)" }
      ]},
      { type: "code", titleEn: "if and if-else", titleAr: "جملة if و if-else", code: `int num;
cout << "Enter a number: ";
cin >> num;

if (num % 2 == 0) {
    cout << num << " is even" << endl;
} else {
    cout << num << " is odd" << endl;
}`, explanation: "The if block runs when the condition is true; otherwise the else block runs.", explanationAr: "ينفذ جزء if عندما يكون الشرط صحيحاً، وإلا ينفذ جزء else." },
      { type: "code", titleEn: "else-if Chain", titleAr: "سلسلة else-if", code: `int score;
cout << "Enter your score: ";
cin >> score;

if (score >= 90)
    cout << "Grade: A" << endl;
else if (score >= 80)
    cout << "Grade: B" << endl;
else if (score >= 70)
    cout << "Grade: C" << endl;
else if (score >= 60)
    cout << "Grade: D" << endl;
else
    cout << "Grade: F" << endl;`, explanation: "Conditions are checked from top to bottom, and only the first true branch runs.", explanationAr: "تُفحص الشروط من الأعلى إلى الأسفل، ويُنفذ أول فرع صحيح فقط." },
      { type: "code", titleEn: "Logical Operators & Nested if", titleAr: "العوامل المنطقية و if المتداخلة", code: `int age;
bool hasLicense;
cout << "Age and license (1/0): ";
cin >> age >> hasLicense;

if (age >= 18 && hasLicense)
    cout << "You can drive" << endl;
else if (age >= 18) {
    if (age < 60)
        cout << "Get a license first" << endl;
    else
        cout << "Renew or get a license" << endl;
}
else
    cout << "Too young to drive" << endl;`, explanation: "&& joins two conditions. An if can be placed inside another if (nested if).", explanationAr: "العامل && يربط شرطين. يمكن وضع جملة if داخل if أخرى (if متداخلة)." },
      { type: "code", titleEn: "switch Statement", titleAr: "جملة switch", code: `char op;
double a, b;
cout << "Enter a op b (e.g. 6 * 3): ";
cin >> a >> op >> b;

switch (op) {
    case '+': cout << a + b; break;
    case '-': cout << a - b; break;
    case '*': cout << a * b; break;
    case '/':
        if (b != 0) cout << a / b;
        else cout << "Cannot divide by zero";
        break;
    default:
        cout << "Unknown operator";
}`, explanation: "switch compares one int or char value with each case. break stops execution from falling into the next case, and default runs when no case matches.", explanationAr: "جملة switch تقارن قيمة واحدة من نوع int أو char مع كل حالة case. الأمر break يمنع الانتقال للحالة التالية، و default تنفذ عندما لا تتطابق أي حالة." }
    ],
    exercises: [
      { q: "Which operator checks equality?", qAr: "أي عامل يفحص التساوي؟", options: ["=", "==", "!=", "=>"], correct: 1 },
      { q: "(5 > 3) && (2 > 4) is:", qAr: "قيمة ‎(5 > 3) && (2 > 4) هي:", options: ["true", "false", "5", "Error"], correct: 1 },
      { q: "(5 > 3) || (2 > 4) is:", qAr: "قيمة ‎(5 > 3) || (2 > 4) هي:", options: ["true", "false", "2", "Error"], correct: 0 },
      { q: "In a switch, which keyword stops falling into the next case?", qAr: "في switch، أي كلمة تمنع الانتقال للحالة التالية؟", options: ["stop", "exit", "break", "continue"], correct: 2 },
      { q: "The default part of a switch runs when:", qAr: "يُنفذ الجزء default في switch عندما:", options: ["Always", "No case matches", "The first case matches", "Never"], correct: 1 }
    ]
  },
  3: {
    titleEn: "Control Structures 2: Loops",
    titleAr: "هياكل التحكم ٢: الحلقات",
    icon: "🔁",
    video: { title: "C++ Control Structures Review", titleAr: "مراجعة هياكل التحكم في C++", youtubeId: "vLnPwxZdW4Y", description: "Review of if, while, for, do-while and arrays." },
    content: [
      { type: "intro", titleEn: "Welcome to Week 3!", titleAr: "مرحباً بك في الأسبوع الثالث!", contentEn: "Loops repeat a block of code. This week covers while, do-while, for, break, continue, and nested loops.", contentAr: "الحلقات تكرر جزءاً من الكود. يغطي هذا الأسبوع while و do-while و for و break و continue والحلقات المتداخلة." },
      { type: "concept", titleEn: "Which loop to use?", titleAr: "أي حلقة نستخدم؟", contentEn: "All three loops repeat code, but each fits a different situation.", contentAr: "الحلقات الثلاث تكرر الكود، لكن كل واحدة تناسب حالة مختلفة.", keyPoints: [
        { en: "for: when you know how many times to repeat", ar: "for: عندما تعرف عدد مرات التكرار" },
        { en: "while: when you repeat until a condition changes (the condition is checked first)", ar: "while: عندما تكرر حتى يتغير شرط (يُفحص الشرط أولاً)" },
        { en: "do-while: runs at least once (the condition is checked at the end)", ar: "do-while: تُنفذ مرة واحدة على الأقل (يُفحص الشرط في النهاية)" }
      ]},
      { type: "code", titleEn: "for Loop", titleAr: "حلقة for", code: `// Print 1 to 10 and their sum
int sum = 0;
for (int i = 1; i <= 10; i++) {
    cout << i << " ";
    sum += i;
}
cout << endl << "Sum = " << sum << endl;  // 55

// Multiplication table of 7
for (int i = 1; i <= 10; i++)
    cout << "7 x " << i << " = " << 7 * i << endl;`, explanation: "A for loop has three parts: initialization; condition; update.", explanationAr: "حلقة for لها ثلاثة أجزاء: التهيئة؛ الشرط؛ التحديث." },
      { type: "code", titleEn: "while Loop with a Sentinel", titleAr: "حلقة while مع قيمة توقف", code: `int num, sum = 0, count = 0;

cout << "Enter numbers (-1 to stop): ";
cin >> num;

while (num != -1) {
    sum += num;
    count++;
    cin >> num;
}

if (count > 0)
    cout << "Average = " << (double)sum / count << endl;`, explanation: "The loop keeps reading until the user enters the sentinel value -1. (double) avoids integer division.", explanationAr: "تستمر الحلقة في القراءة حتى يدخل المستخدم قيمة التوقف ‎-1. التحويل (double) يمنع القسمة الصحيحة." },
      { type: "code", titleEn: "do-while Loop (Input Validation)", titleAr: "حلقة do-while (التحقق من الإدخال)", code: `int mark;

do {
    cout << "Enter a mark (0-100): ";
    cin >> mark;
} while (mark < 0 || mark > 100);

cout << "Valid mark: " << mark << endl;`, explanation: "do-while is ideal for input validation because the body must run at least once.", explanationAr: "حلقة do-while مثالية للتحقق من صحة الإدخال لأن جسمها يجب أن يُنفذ مرة واحدة على الأقل." },
      { type: "code", titleEn: "break, continue & Nested Loops", titleAr: "break و continue والحلقات المتداخلة", code: `// continue: skip multiples of 3
for (int i = 1; i <= 10; i++) {
    if (i % 3 == 0) continue;
    cout << i << " ";       // 1 2 4 5 7 8 10
}
cout << endl;

// break: stop at the first number divisible by 7
for (int i = 50; i <= 100; i++) {
    if (i % 7 == 0) {
        cout << "First: " << i << endl;  // 56
        break;
    }
}

// Nested loops: a triangle of stars
for (int row = 1; row <= 4; row++) {
    for (int col = 1; col <= row; col++)
        cout << "* ";
    cout << endl;
}`, explanation: "continue skips to the next iteration, and break exits the loop. In nested loops, the inner loop runs fully for each outer iteration.", explanationAr: "الأمر continue ينتقل للتكرار التالي، والأمر break يخرج من الحلقة. في الحلقات المتداخلة تُنفذ الحلقة الداخلية بالكامل في كل تكرار للحلقة الخارجية." }
    ],
    exercises: [
      { q: "Which loop always runs at least once?", qAr: "أي حلقة تُنفذ مرة واحدة على الأقل دائماً؟", options: ["for", "while", "do-while", "None"], correct: 2 },
      { q: "How many times does for (int i = 0; i < 5; i++) run?", qAr: "كم مرة تُنفذ الحلقة for (int i = 0; i < 5; i++)؟", options: ["4", "5", "6", "Infinite"], correct: 1 },
      { q: "The break statement:", qAr: "الأمر break:", options: ["Skips the current iteration", "Exits the loop", "Restarts the loop", "Ends the program"], correct: 1 },
      { q: "The continue statement:", qAr: "الأمر continue:", options: ["Exits the loop", "Skips to the next iteration", "Ends the program", "Does nothing"], correct: 1 },
      { q: "With an outer loop of 3 and an inner loop of 4, how many times does the inner body run?", qAr: "إذا كانت الحلقة الخارجية 3 مرات والداخلية 4 مرات، كم مرة يُنفذ جسم الحلقة الداخلية؟", options: ["7", "4", "12", "3"], correct: 2 }
    ]
  },
  4: {
    titleEn: "Arrays",
    titleAr: "المصفوفات",
    icon: "📊",
    video: { title: "Arrays in C++", titleAr: "المصفوفات في C++", youtubeId: "PyTK_g1l8V8", description: "Working with one-dimensional arrays and loops." },
    content: [
      { type: "intro", titleEn: "Welcome to Week 4!", titleAr: "مرحباً بك في الأسبوع الرابع!", contentEn: "An array stores many values of the same type under one name. Loops are the main tool for processing arrays.", contentAr: "المصفوفة تخزن قيماً متعددة من نفس النوع تحت اسم واحد. الحلقات هي الأداة الأساسية لمعالجة المصفوفات." },
      { type: "concept", titleEn: "Array Basics", titleAr: "أساسيات المصفوفات", contentEn: "Each element is accessed with its index in square brackets.", contentAr: "يتم الوصول لكل عنصر بواسطة فهرسه بين قوسين مربعين.", keyPoints: [
        { en: "int arr[5]; creates 5 int elements", ar: "‏int arr[5]; ينشئ 5 عناصر من نوع int" },
        { en: "Indexes start at 0, so the last index is size - 1", ar: "الفهارس تبدأ من 0، لذلك الفهرس الأخير هو الحجم - 1" },
        { en: "The size must be a constant and cannot change later", ar: "الحجم يجب أن يكون ثابتاً ولا يمكن تغييره لاحقاً" },
        { en: "Accessing an index outside the array is an error that the compiler does not catch", ar: "الوصول لفهرس خارج المصفوفة خطأ لا يكتشفه المترجم" }
      ]},
      { type: "code", titleEn: "Declaration, Initialization & Input", titleAr: "الإعلان والتهيئة والإدخال", code: `const int SIZE = 5;

int arr1[SIZE];                      // uninitialized
int arr2[SIZE] = {10, 20, 30, 40, 50};
int arr3[] = {1, 2, 3};              // size is 3
int arr4[SIZE] = {0};                // all zeros

// Read values from the user
int numbers[SIZE];
for (int i = 0; i < SIZE; i++) {
    cout << "Enter number " << (i + 1) << ": ";
    cin >> numbers[i];
}

// Print in reverse order
for (int i = SIZE - 1; i >= 0; i--)
    cout << numbers[i] << " ";`, explanation: "Use a const for the size so the loops and the declaration always match.", explanationAr: "استخدم ثابتاً const للحجم حتى تتطابق الحلقات مع الإعلان دائماً." },
      { type: "code", titleEn: "Sum, Average, Max & Min", titleAr: "المجموع والمتوسط والأكبر والأصغر", code: `int arr[5] = {15, 8, 23, 4, 42};

int sum = 0;
for (int i = 0; i < 5; i++)
    sum += arr[i];
cout << "Sum: " << sum << endl;                    // 92
cout << "Average: " << sum / 5.0 << endl;          // 18.4

int max = arr[0], min = arr[0];
for (int i = 1; i < 5; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
}
cout << "Max: " << max << ", Min: " << min << endl; // 42, 4`, explanation: "Start max and min from the first element, then compare with the rest.", explanationAr: "ابدأ قيمة الأكبر والأصغر من العنصر الأول، ثم قارن مع باقي العناصر." },
      { type: "code", titleEn: "Counting & Searching", titleAr: "العد والبحث", code: `int arr[8] = {4, 7, 2, 7, 9, 1, 7, 6};
int key = 7, count = 0, firstPos = -1;

for (int i = 0; i < 8; i++) {
    if (arr[i] == key) {
        count++;
        if (firstPos == -1)
            firstPos = i;
    }
}

cout << key << " appears " << count << " times" << endl;  // 3
cout << "First position: " << firstPos << endl;          // 1`, explanation: "-1 is a common way to say \"not found yet\" because no real index is negative.", explanationAr: "القيمة ‎-1 طريقة شائعة للتعبير عن \"لم يُعثر عليه بعد\" لأنه لا يوجد فهرس سالب." },
      { type: "code", titleEn: "Two-Dimensional Arrays", titleAr: "المصفوفات ثنائية الأبعاد", code: `// 3 rows, 4 columns
int matrix[3][4] = {
    {1, 2, 3, 4},
    {5, 6, 7, 8},
    {9, 10, 11, 12}
};

cout << matrix[1][2] << endl;  // 7 (row 1, column 2)

for (int i = 0; i < 3; i++) {
    int rowSum = 0;
    for (int j = 0; j < 4; j++) {
        cout << matrix[i][j] << " ";
        rowSum += matrix[i][j];
    }
    cout << "| sum = " << rowSum << endl;
}`, explanation: "A 2D array uses [row][column], and nested loops visit every element.", explanationAr: "المصفوفة ثنائية الأبعاد تستخدم [الصف][العمود]، والحلقات المتداخلة تمر على كل عنصر." }
    ],
    exercises: [
      { q: "int arr[5]; creates how many elements?", qAr: "‏int arr[5]; ينشئ كم عنصراً؟", options: ["4", "5", "6", "0"], correct: 1 },
      { q: "The last index of int arr[10] is:", qAr: "الفهرس الأخير للمصفوفة int arr[10] هو:", options: ["10", "9", "11", "0"], correct: 1 },
      { q: "int arr[5] = {0}; sets all elements to:", qAr: "‏int arr[5] = {0}; يجعل كل العناصر:", options: ["Random values", "0", "5", "1"], correct: 1 },
      { q: "int m[3][4] has how many elements?", qAr: "المصفوفة int m[3][4] فيها كم عنصراً؟", options: ["7", "12", "34", "3"], correct: 1 },
      { q: "In m[i][j], i is the:", qAr: "في m[i][j]، الحرف i يمثل:", options: ["Column", "Row", "Size", "Value"], correct: 1 }
    ]
  },
  5: {
    titleEn: "Predefined & User-Defined Functions",
    titleAr: "الدوال الجاهزة والدوال المعرفة من المستخدم",
    icon: "⚙️",
    video: { title: "Functions in C++", titleAr: "الدوال في C++", youtubeId: "V9zuox47zr0", description: "Learn about built-in and user-defined functions." },
    content: [
      { type: "intro", titleEn: "Welcome to Week 5!", titleAr: "مرحباً بك في الأسبوع الخامس!", contentEn: "Functions split a program into small, reusable blocks. C++ comes with many predefined functions, and you can write your own.", contentAr: "الدوال تقسم البرنامج إلى أجزاء صغيرة قابلة لإعادة الاستخدام. لغة C++ تأتي مع دوال جاهزة كثيرة، ويمكنك كتابة دوالك الخاصة." },
      { type: "code", titleEn: "Predefined Math Functions", titleAr: "دوال الرياضيات الجاهزة", code: `#include <iostream>
#include <cmath>
using namespace std;

int main() {
    cout << sqrt(16.0) << endl;    // 4
    cout << pow(2.0, 3) << endl;   // 8
    cout << abs(-5) << endl;       // 5
    cout << ceil(4.2) << endl;     // 5
    cout << floor(4.8) << endl;    // 4
    cout << round(4.5) << endl;    // 5
    return 0;
}`, explanation: "The cmath library provides sqrt, pow, abs, ceil, floor, round and more.", explanationAr: "مكتبة cmath توفر الدوال sqrt و pow و abs و ceil و floor و round وغيرها." },
      { type: "code", titleEn: "Predefined Character Functions", titleAr: "دوال الحروف الجاهزة", code: `#include <iostream>
#include <cctype>
using namespace std;

int main() {
    char ch = 'a';

    cout << (char)toupper(ch) << endl;   // A
    cout << isalpha('7') << endl;        // 0 (not a letter)
    cout << (isdigit('7') != 0) << endl; // 1 (is a digit)

    if (isupper('Q'))
        cout << "Q is uppercase" << endl;
    return 0;
}`, explanation: "The cctype library tests and converts characters: isalpha, isdigit, isupper, islower, toupper, tolower.", explanationAr: "مكتبة cctype تفحص الحروف وتحولها: isalpha و isdigit و isupper و islower و toupper و tolower." },
      { type: "concept", titleEn: "Parts of a User-Defined Function", titleAr: "أجزاء الدالة المعرفة من المستخدم", contentEn: "A function is declared once and can be called many times.", contentAr: "تُعرّف الدالة مرة واحدة ويمكن استدعاؤها مرات عديدة.", keyPoints: [
        { en: "Return type: the type of value it sends back (void = nothing)", ar: "نوع الإرجاع: نوع القيمة التي تعيدها الدالة (void = لا شيء)" },
        { en: "Name and parameter list: the inputs it receives", ar: "الاسم وقائمة المعاملات: المدخلات التي تستقبلها" },
        { en: "Body: the statements between { }", ar: "الجسم: الجمل الموجودة بين { }" },
        { en: "Prototype: the header followed by ; placed before main()", ar: "النموذج (Prototype): رأس الدالة متبوعاً بـ ; ويوضع قبل main()" }
      ]},
      { type: "code", titleEn: "Value-Returning Function", titleAr: "دالة تُرجع قيمة", code: `#include <iostream>
using namespace std;

int findMax(int a, int b);   // prototype

int main() {
    int x, y;
    cout << "Enter two numbers: ";
    cin >> x >> y;
    cout << "Max: " << findMax(x, y) << endl;
    return 0;
}

int findMax(int a, int b) {  // definition
    if (a > b)
        return a;
    return b;
}`, explanation: "return sends a value back to the caller. The prototype lets main() call a function that is defined below it.", explanationAr: "الأمر return يعيد قيمة للمستدعي. النموذج يسمح للدالة main() باستدعاء دالة معرفة بعدها." },
      { type: "code", titleEn: "void Function", titleAr: "دالة void", code: `void printLine(int length, char symbol) {
    for (int i = 0; i < length; i++)
        cout << symbol;
    cout << endl;
}

bool isPrime(int n) {
    if (n < 2) return false;
    for (int i = 2; i * i <= n; i++)
        if (n % i == 0) return false;
    return true;
}

int main() {
    printLine(20, '=');
    for (int i = 1; i <= 20; i++)
        if (isPrime(i)) cout << i << " ";  // 2 3 5 7 11 13 17 19
    cout << endl;
    printLine(20, '=');
}`, explanation: "A void function performs a task and returns nothing. A bool function is handy for yes/no questions.", explanationAr: "الدالة void تنفذ مهمة ولا تعيد شيئاً. الدالة bool مفيدة للأسئلة التي إجابتها نعم أو لا." }
    ],
    exercises: [
      { q: "sqrt() is found in which library?", qAr: "الدالة sqrt() موجودة في أي مكتبة؟", options: ["iostream", "cmath", "string", "cctype"], correct: 1 },
      { q: "pow(2, 3) returns:", qAr: "الدالة pow(2, 3) تعيد:", options: ["6", "8", "5", "9"], correct: 1 },
      { q: "A function that returns no value has the return type:", qAr: "الدالة التي لا تعيد قيمة يكون نوع إرجاعها:", options: ["int", "double", "void", "null"], correct: 2 },
      { q: "A function prototype ends with:", qAr: "نموذج الدالة ينتهي بـ:", options: ["{ }", ":", ";", "()"], correct: 2 },
      { q: "toupper('b') returns:", qAr: "الدالة toupper('b') تعيد:", options: ["'b'", "'B'", "true", "0"], correct: 1 }
    ]
  },
  6: {
    titleEn: "Call by Value & Call by Reference",
    titleAr: "الاستدعاء بالقيمة والاستدعاء بالمرجع",
    icon: "📥",
    video: { title: "Parameter Passing in C++", titleAr: "تمرير المعاملات في C++", youtubeId: "WqukJuBnLQU", description: "Call by value vs call by reference." },
    content: [
      { type: "intro", titleEn: "Welcome to Week 6!", titleAr: "مرحباً بك في الأسبوع السادس!", contentEn: "This week you learn the two ways to pass arguments to a function, and when to use each one.", contentAr: "في هذا الأسبوع تتعلم طريقتي تمرير الوسائط إلى الدالة، ومتى تستخدم كل واحدة منهما." },
      { type: "concept", titleEn: "Parameter Passing Methods", titleAr: "طرق تمرير المعاملات", contentEn: "C++ supports two ways to pass parameters.", contentAr: "تدعم C++ طريقتين لتمرير المعاملات.", keyPoints: [
        { en: "Call by value: the function gets a copy, so the original does not change", ar: "الاستدعاء بالقيمة: الدالة تحصل على نسخة، لذلك لا تتغير القيمة الأصلية" },
        { en: "Call by reference (&): the function works on the original variable", ar: "الاستدعاء بالمرجع (&): الدالة تعمل على المتغير الأصلي" },
        { en: "A reference argument must be a variable, not a constant like 5", ar: "الوسيط المرجعي يجب أن يكون متغيراً، وليس ثابتاً مثل 5" },
        { en: "Use a reference to change a variable or to return more than one result", ar: "استخدم المرجع لتغيير متغير أو لإعادة أكثر من نتيجة" }
      ]},
      { type: "code", titleEn: "Call by Value", titleAr: "الاستدعاء بالقيمة", code: `void addTen(int x) {
    x = x + 10;                         // only the copy changes
    cout << "Inside: " << x << endl;    // 15
}

int main() {
    int num = 5;
    addTen(num);
    cout << "Outside: " << num << endl; // still 5
}`, explanation: "Call by value creates a copy, so changes inside the function do not affect the original.", explanationAr: "الاستدعاء بالقيمة ينشئ نسخة، لذلك التغييرات داخل الدالة لا تؤثر على الأصل." },
      { type: "code", titleEn: "Call by Reference", titleAr: "الاستدعاء بالمرجع", code: `void addTen(int &x) {                  // note the &
    x = x + 10;                         // the original changes
    cout << "Inside: " << x << endl;    // 15
}

int main() {
    int num = 5;
    addTen(num);
    cout << "Outside: " << num << endl; // now 15
}`, explanation: "With &, the parameter is another name for the caller's variable.", explanationAr: "باستخدام &، يصبح المعامل اسماً آخر لمتغير المستدعي." },
      { type: "code", titleEn: "Swap Example", titleAr: "مثال التبديل", code: `void swapValues(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int x = 5, y = 10;
    swapValues(x, y);
    cout << x << ", " << y << endl;  // 10, 5
}`, explanation: "Swapping needs call by reference so that both variables change.", explanationAr: "التبديل يحتاج الاستدعاء بالمرجع حتى يتغير كلا المتغيرين." },
      { type: "code", titleEn: "Returning More Than One Result", titleAr: "إعادة أكثر من نتيجة", code: `void getStats(int a, int b, int c,
              int &sum, double &avg) {
    sum = a + b + c;
    avg = sum / 3.0;
}

int main() {
    int total;
    double average;
    getStats(80, 90, 70, total, average);
    cout << "Sum: " << total << endl;       // 240
    cout << "Average: " << average << endl; // 80
}`, explanation: "return gives only one value. Reference parameters let a function send back several results.", explanationAr: "الأمر return يعيد قيمة واحدة فقط. المعاملات المرجعية تسمح للدالة بإعادة عدة نتائج." }
    ],
    exercises: [
      { q: "Call by reference uses the symbol:", qAr: "الاستدعاء بالمرجع يستخدم الرمز:", options: ["*", "&", "#", "@"], correct: 1 },
      { q: "In call by value, the function receives:", qAr: "في الاستدعاء بالقيمة، تستقبل الدالة:", options: ["The original variable", "A copy of the value", "The variable's name", "Nothing"], correct: 1 },
      { q: "void f(int x) { x = 0; } — after int a = 7; f(a); the value of a is:", qAr: "‏void f(int x) { x = 0; } — بعد int a = 7; f(a); تكون قيمة a:", options: ["0", "7", "Error", "Random"], correct: 1 },
      { q: "void f(int &x) { x = 0; } — after int a = 7; f(a); the value of a is:", qAr: "‏void f(int &x) { x = 0; } — بعد int a = 7; f(a); تكون قيمة a:", options: ["0", "7", "Error", "Random"], correct: 0 },
      { q: "For void f(int &x), which call is NOT allowed?", qAr: "للدالة void f(int &x)، أي استدعاء غير مسموح؟", options: ["f(a);", "f(b);", "f(5);", "f(num);"], correct: 2 }
    ]
  },
  7: {
    titleEn: "Scope of Variables & Function Overloading",
    titleAr: "نطاق المتغيرات وزيادة تحميل الدوال",
    icon: "🔢",
    video: { title: "Function Overloading", titleAr: "زيادة تحميل الدوال", youtubeId: "IAMzWp3kS_k", description: "Learn function overloading in C++." },
    content: [
      { type: "intro", titleEn: "Welcome to Week 7!", titleAr: "مرحباً بك في الأسبوع السابع!", contentEn: "Scope decides where a variable can be used. Function overloading lets several functions share the same name.", contentAr: "النطاق يحدد أين يمكن استخدام المتغير. زيادة التحميل تسمح لعدة دوال بأن تشترك في نفس الاسم." },
      { type: "concept", titleEn: "Scope of Variables", titleAr: "نطاق المتغيرات", contentEn: "A variable exists only inside the block where it is declared.", contentAr: "المتغير موجود فقط داخل الجزء الذي عُرّف فيه.", keyPoints: [
        { en: "Local variable: declared inside a function or block, usable only there", ar: "المتغير المحلي: يُعرّف داخل دالة أو جزء، ويُستخدم هناك فقط" },
        { en: "Global variable: declared outside all functions, usable everywhere after it", ar: "المتغير العام: يُعرّف خارج كل الدوال، ويُستخدم في أي مكان بعده" },
        { en: "A local variable hides a global one with the same name; use :: to reach the global one", ar: "المتغير المحلي يخفي المتغير العام بنفس الاسم؛ استخدم :: للوصول للمتغير العام" },
        { en: "static local variable: keeps its value between function calls", ar: "المتغير المحلي static: يحتفظ بقيمته بين استدعاءات الدالة" }
      ]},
      { type: "code", titleEn: "Local, Global & ::", titleAr: "المحلي والعام والعامل ::", code: `#include <iostream>
using namespace std;

int x = 100;              // global

void show() {
    int x = 5;            // local, hides the global x
    cout << x << endl;    // 5
    cout << ::x << endl;  // 100 (global)
}

int main() {
    show();
    for (int i = 0; i < 3; i++) {
        int y = i * 2;    // y exists only inside the loop
    }
    // cout << y;  // Error: y is out of scope
    cout << x << endl;    // 100
    return 0;
}`, explanation: "Variables declared in a block disappear at its closing }. The scope resolution operator :: accesses the global variable.", explanationAr: "المتغيرات المعرفة داخل جزء تختفي عند القوس } الخاص به. عامل تحديد النطاق :: يصل إلى المتغير العام." },
      { type: "code", titleEn: "static Local Variables", titleAr: "المتغيرات المحلية static", code: `void counter() {
    static int calls = 0;  // initialized only once
    int normal = 0;        // reset on every call
    calls++;
    normal++;
    cout << "calls = " << calls
         << ", normal = " << normal << endl;
}

int main() {
    counter();  // calls = 1, normal = 1
    counter();  // calls = 2, normal = 1
    counter();  // calls = 3, normal = 1
}`, explanation: "A static local variable is created once and keeps its value. A normal local variable is created again on every call.", explanationAr: "المتغير المحلي static يُنشأ مرة واحدة ويحتفظ بقيمته. المتغير المحلي العادي يُنشأ من جديد في كل استدعاء." },
      { type: "code", titleEn: "Function Overloading", titleAr: "زيادة تحميل الدوال", code: `int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}

int add(int a, int b, int c) {
    return a + b + c;
}

int main() {
    cout << add(5, 3) << endl;      // 8   (int, int)
    cout << add(2.5, 3.5) << endl;  // 6   (double, double)
    cout << add(1, 2, 3) << endl;   // 6   (three ints)
}`, explanation: "Overloaded functions share a name but differ in the number or types of parameters. The return type alone is not enough.", explanationAr: "الدوال المحملة تشترك في الاسم وتختلف في عدد المعاملات أو أنواعها. نوع الإرجاع وحده لا يكفي." },
      { type: "code", titleEn: "Default Parameters", titleAr: "المعاملات الافتراضية", code: `double area(double length, double width = 1.0) {
    return length * width;
}

void greet(string name = "Student") {
    cout << "Hello, " << name << "!" << endl;
}

int main() {
    cout << area(5, 4) << endl;  // 20
    cout << area(5) << endl;     // 5 (width = 1.0)
    greet();                     // Hello, Student!
    greet("Sara");               // Hello, Sara!
}`, explanation: "Default values are used when an argument is missing. They must be the rightmost parameters.", explanationAr: "تُستخدم القيم الافتراضية عندما يكون الوسيط غير موجود. يجب أن تكون في أقصى يمين قائمة المعاملات." }
    ],
    exercises: [
      { q: "A local variable can be used:", qAr: "المتغير المحلي يمكن استخدامه:", options: ["Everywhere", "Only in the block where it is declared", "Only in main", "In all files"], correct: 1 },
      { q: "A global variable is declared:", qAr: "المتغير العام يُعرّف:", options: ["Inside a function", "Outside all functions", "Inside main only", "Inside a loop"], correct: 1 },
      { q: "A static local variable:", qAr: "المتغير المحلي static:", options: ["Is reset on every call", "Keeps its value between calls", "Is global", "Cannot change"], correct: 1 },
      { q: "Overloaded functions must differ in:", qAr: "الدوال المحملة يجب أن تختلف في:", options: ["Return type only", "Parameter list", "Name", "Body only"], correct: 1 },
      { q: "Default parameters must be placed:", qAr: "المعاملات الافتراضية يجب أن توضع:", options: ["First", "Rightmost (last)", "In the middle", "Anywhere"], correct: 1 }
    ]
  },
  8: {
    titleEn: "Functions and Arrays",
    titleAr: "الدوال والمصفوفات",
    icon: "🧮",
    video: { title: "Sorting and Searching", titleAr: "الفرز والبحث", youtubeId: "pkkFqlG0Hds", description: "Bubble sort and linear/binary search with arrays." },
    content: [
      { type: "intro", titleEn: "Welcome to Week 8!", titleAr: "مرحباً بك في الأسبوع الثامن!", contentEn: "This week combines functions and arrays: passing arrays to functions, and writing reusable functions for searching and sorting.", contentAr: "يجمع هذا الأسبوع بين الدوال والمصفوفات: تمرير المصفوفات إلى الدوال، وكتابة دوال قابلة لإعادة الاستخدام للبحث والفرز." },
      { type: "concept", titleEn: "Passing Arrays to Functions", titleAr: "تمرير المصفوفات إلى الدوال", contentEn: "Arrays are passed differently from simple variables.", contentAr: "تُمرر المصفوفات بطريقة مختلفة عن المتغيرات البسيطة.", keyPoints: [
        { en: "Parameter: int arr[] (no size inside the brackets)", ar: "المعامل: int arr[] (بدون حجم داخل القوسين)" },
        { en: "Call with the name only: printArray(marks, 5);", ar: "الاستدعاء بالاسم فقط: printArray(marks, 5);" },
        { en: "Arrays are always passed by reference, so the function can change them, and no & is needed", ar: "المصفوفات تُمرر دائماً بالمرجع، فتستطيع الدالة تغييرها بدون الحاجة إلى &" },
        { en: "Pass the size as a separate parameter, and use const to prevent changes", ar: "مرر الحجم كمعامل منفصل، واستخدم const لمنع التغيير" }
      ]},
      { type: "code", titleEn: "Read, Print & Sum", titleAr: "القراءة والطباعة والمجموع", code: `void readArray(int arr[], int size) {
    for (int i = 0; i < size; i++)
        cin >> arr[i];
}

void printArray(const int arr[], int size) {
    for (int i = 0; i < size; i++)
        cout << arr[i] << " ";
    cout << endl;
}

int sumArray(const int arr[], int size) {
    int sum = 0;
    for (int i = 0; i < size; i++)
        sum += arr[i];
    return sum;
}

int main() {
    int marks[5];
    cout << "Enter 5 marks: ";
    readArray(marks, 5);         // fills the original array
    printArray(marks, 5);
    cout << "Sum: " << sumArray(marks, 5) << endl;
}`, explanation: "readArray changes the caller's array because arrays are passed by reference. const protects the array in functions that only read it.", explanationAr: "الدالة readArray تغير مصفوفة المستدعي لأن المصفوفات تُمرر بالمرجع. الكلمة const تحمي المصفوفة في الدوال التي تقرأها فقط." },
      { type: "code", titleEn: "Linear Search Function", titleAr: "دالة البحث الخطي", code: `int linearSearch(const int arr[], int size, int key) {
    for (int i = 0; i < size; i++)
        if (arr[i] == key)
            return i;    // found at index i
    return -1;           // not found
}

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int pos = linearSearch(arr, 5, 30);

    if (pos != -1)
        cout << "Found at index " << pos << endl;  // 2
    else
        cout << "Not found" << endl;
}`, explanation: "Linear search checks the elements one by one and returns the index, or -1 if the key is missing.", explanationAr: "البحث الخطي يفحص العناصر واحداً تلو الآخر ويعيد الفهرس، أو ‎-1 إذا لم يجد القيمة." },
      { type: "code", titleEn: "Bubble Sort Function", titleAr: "دالة الفرز الفقاعي", code: `void bubbleSort(int arr[], int size) {
    for (int i = 0; i < size - 1; i++) {
        for (int j = 0; j < size - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int main() {
    int arr[] = {64, 34, 25, 12, 22};
    bubbleSort(arr, 5);
    for (int i = 0; i < 5; i++)
        cout << arr[i] << " ";   // 12 22 25 34 64
}`, explanation: "Bubble sort compares neighbouring elements and swaps them when they are out of order. The original array is sorted because it is passed by reference.", explanationAr: "الفرز الفقاعي يقارن العناصر المتجاورة ويبدلها إذا كانت بترتيب خاطئ. المصفوفة الأصلية تُرتب لأنها تُمرر بالمرجع." },
      { type: "code", titleEn: "Passing a 2D Array", titleAr: "تمرير مصفوفة ثنائية الأبعاد", code: `const int COLS = 3;

void printMatrix(const int m[][COLS], int rows) {
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < COLS; j++)
            cout << m[i][j] << " ";
        cout << endl;
    }
}

int main() {
    int m[2][COLS] = {{1, 2, 3}, {4, 5, 6}};
    printMatrix(m, 2);
}`, explanation: "For a 2D array parameter, the number of columns must be given. The number of rows is passed separately.", explanationAr: "في معامل المصفوفة ثنائية الأبعاد يجب تحديد عدد الأعمدة. ويُمرر عدد الصفوف بشكل منفصل." }
    ],
    exercises: [
      { q: "Arrays are passed to functions:", qAr: "تُمرر المصفوفات إلى الدوال:", options: ["By value", "By reference", "As a copy", "They cannot be passed"], correct: 1 },
      { q: "The correct call for void print(int arr[], int size) is:", qAr: "الاستدعاء الصحيح للدالة void print(int arr[], int size) هو:", options: ["print(arr[], 5);", "print(arr, 5);", "print(arr[5], 5);", "print(&arr[], 5);"], correct: 1 },
      { q: "Using const in const int arr[] means the function:", qAr: "استخدام const في const int arr[] يعني أن الدالة:", options: ["Cannot change the array", "Must change the array", "Copies the array", "Sorts the array"], correct: 0 },
      { q: "For a 2D array parameter, which size must be specified?", qAr: "في معامل المصفوفة ثنائية الأبعاد، أي حجم يجب تحديده؟", options: ["Rows", "Columns", "Both", "None"], correct: 1 },
      { q: "A linear search usually returns what when the key is not found?", qAr: "ماذا يعيد البحث الخطي عادة عندما لا يجد القيمة؟", options: ["0", "-1", "size", "The key"], correct: 1 }
    ]
  },
  9: {
    titleEn: "String Functions",
    titleAr: "دوال السلاسل النصية",
    icon: "📝",
    video: { title: "C++ Strings", titleAr: "السلاسل النصية في C++", youtubeId: "Gp6E73i0t1k", description: "Working with character arrays and strings." },
    content: [
      { type: "intro", titleEn: "Welcome to Week 9!", titleAr: "مرحباً بك في الأسبوع التاسع!", contentEn: "C++ handles text in two ways: C-strings (char arrays) with the cstring library, and the string class. This week covers the functions for both.", contentAr: "تتعامل C++ مع النصوص بطريقتين: سلاسل C (مصفوفات char) مع مكتبة cstring، وفئة string. يغطي هذا الأسبوع الدوال الخاصة بكل منهما." },
      { type: "code", titleEn: "C-String Functions (cstring)", titleAr: "دوال سلاسل C (مكتبة cstring)", code: `#include <iostream>
#include <cstring>
using namespace std;

int main() {
    char s1[30] = "Hello";
    char s2[30] = "World";
    char s3[30];

    cout << strlen(s1) << endl;    // 5

    strcpy(s3, s1);                // s3 = "Hello"
    strcat(s3, " ");
    strcat(s3, s2);                // s3 = "Hello World"
    cout << s3 << endl;

    if (strcmp(s1, s2) < 0)
        cout << s1 << " comes before " << s2 << endl;
    return 0;
}`, explanation: "strlen gives the length, strcpy copies, strcat appends, and strcmp compares (0 means equal). A C-string ends with the null character '\\0'.", explanationAr: "الدالة strlen تعطي الطول، و strcpy تنسخ، و strcat تُلحق، و strcmp تقارن (0 تعني متساويتين). سلسلة C تنتهي بالحرف الصفري '\\0'." },
      { type: "code", titleEn: "string Class Basics", titleAr: "أساسيات فئة string", code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string first = "Computer";
    string second = "Programming";

    string full = first + " " + second;  // join
    cout << full << endl;                // Computer Programming
    cout << full.length() << endl;       // 20
    cout << full[0] << full.at(9) << endl; // CP

    if (first == "Computer")
        cout << "Same text" << endl;
    return 0;
}`, explanation: "With the string class, + joins strings, == compares them, and length() gives the size.", explanationAr: "مع فئة string، العامل + يدمج النصوص، و == يقارنها، و length() تعطي الحجم." },
      { type: "code", titleEn: "find, substr, insert, erase, replace", titleAr: "الدوال find و substr و insert و erase و replace", code: `string s = "I love C++";

cout << s.find("love") << endl;   // 2
cout << s.substr(7, 3) << endl;   // C++

s.insert(7, "coding in ");        // I love coding in C++
s.erase(0, 2);                    // love coding in C++
s.replace(0, 4, "enjoy");         // enjoy coding in C++
cout << s << endl;

if (s.find("Java") == string::npos)
    cout << "Java not found" << endl;`, explanation: "find returns the position or string::npos if it is missing. substr(pos, len) extracts part of the text.", explanationAr: "الدالة find تعيد الموقع، أو string::npos إذا لم تجد النص. الدالة substr(pos, len) تستخرج جزءاً من النص." },
      { type: "code", titleEn: "getline & Character Processing", titleAr: "الدالة getline ومعالجة الحروف", code: `#include <iostream>
#include <string>
#include <cctype>
using namespace std;

int main() {
    string line;
    cout << "Enter a sentence: ";
    getline(cin, line);           // reads spaces too

    int letters = 0, digits = 0, spaces = 0;
    for (int i = 0; i < line.length(); i++) {
        if (isalpha(line[i])) letters++;
        else if (isdigit(line[i])) digits++;
        else if (line[i] == ' ') spaces++;
        line[i] = toupper(line[i]);
    }

    cout << line << endl;
    cout << letters << " letters, " << digits
         << " digits, " << spaces << " spaces" << endl;
    return 0;
}`, explanation: "cin >> stops at the first space, while getline reads the whole line. A string can be processed character by character with a loop.", explanationAr: "الأمر cin >> يتوقف عند أول مسافة، بينما getline تقرأ السطر كاملاً. يمكن معالجة النص حرفاً حرفاً باستخدام حلقة." }
    ],
    exercises: [
      { q: "strlen(\"Taif\") returns:", qAr: "الدالة strlen(\"Taif\") تعيد:", options: ["3", "4", "5", "0"], correct: 1 },
      { q: "strcmp(a, b) returns 0 when the strings are:", qAr: "الدالة strcmp(a, b) تعيد 0 عندما تكون السلاسل:", options: ["Different", "Equal", "Empty", "Long"], correct: 1 },
      { q: "Which function reads a full line including spaces?", qAr: "أي دالة تقرأ سطراً كاملاً بما فيه المسافات؟", options: ["cin >>", "getline", "strlen", "find"], correct: 1 },
      { q: "For string s = \"Hello\"; what is s.substr(1, 3)?", qAr: "إذا كان string s = \"Hello\"; فما قيمة s.substr(1, 3)؟", options: ["Hel", "ell", "ello", "el"], correct: 1 },
      { q: "s.find(\"x\") returns what when \"x\" is not found?", qAr: "ماذا تعيد s.find(\"x\") عندما لا يوجد \"x\"؟", options: ["0", "-1 as int", "string::npos", "s.length()"], correct: 2 }
    ]
  }
};

export const weekNumbers = Object.keys(weekData).map(Number).sort((a, b) => a - b);
export const TOTAL_WEEKS = weekNumbers.length;

export const isCourseWeekKey = (key) => {
  const n = Number(key.replace('week', ''));
  return key.startsWith('week') && Number.isInteger(n) && n in weekData;
};
