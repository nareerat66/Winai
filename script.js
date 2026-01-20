// ==================== 1. ส่วนข้อมูล (Data) ====================

const schedules = {
    "2568": {
        "1": [
            { day: "Monday", subjects: ["อังกฤษ", "คณิต", "ศิลปะ", "ไทย", "ธรรมะ", "ชมรม"], highlightIndex: 4 },
            { day: "Tuesday", subjects: ["ไทย", "คณิต", "อังกฤษ", "แนะแนว", "สังคม", "ศิลปะ"], highlightIndex: -1 },
            { day: "Wednesday", subjects: ["คณิต", "ไทย", "ประวัติศาสตร์", "พละ", "สุขศึกษา", "การงาน"], highlightIndex: -1 },
            { day: "Thursday", subjects: ["คอม", "สังคม", "อังกฤษ", "คณิต", "ไทย", "ลูกเสือ"], highlightIndex: -1 },
            { day: "Friday", subjects: ["สังคม", "หน้าที่", "คณิต", "ไทย", "ดนตรี", "ประชุม"], highlightIndex: -1 }
        ],
        "2": [
            { day: "Monday", subjects: ["ฟิสิกส์", "เคมี", "คณิต", "อังกฤษ", "ธรรมะ", "ชมรม"], highlightIndex: 4 },
            { day: "Tuesday", subjects: ["คณิต", "อังกฤษ", "ไทย", "สังคม", "พละ", "สุขศึกษา"], highlightIndex: -1 },
            { day: "Wednesday", subjects: ["อังกฤษ", "ชีววิทยา", "คอม", "ลูกเสือ", "แนะแนว", "อิสระ"], highlightIndex: -1 },
            { day: "Thursday", subjects: ["ไทย", "สังคม", "ประวัติศาสตร์", "คณิต", "ศิลปะ", "การงาน"], highlightIndex: -1 },
            { day: "Friday", subjects: ["ดาราศาสตร์", "เคมี", "โลก", "โครงงาน", "ดนตรี", "ประชุม"], highlightIndex: -1 }
        ]
    },
    "2567": {
        "1": [
            { day: "Monday", subjects: ["วิทย์", "คณิต", "ไทย", "ศิลปะ", "ธรรมะ", "ลูกเสือ"], highlightIndex: 4 },
            { day: "Tuesday", subjects: ["อังกฤษ", "สังคม", "พละ", "คอม", "เกษตร", "ชุมนุม"], highlightIndex: -1 },
            { day: "Wednesday", subjects: ["คณิต", "วิทย์", "อังกฤษ", "ไทย", "แนะแนว", "ห้องสมุด"], highlightIndex: -1 },
            { day: "Thursday", subjects: ["สังคม", "ประวัติ", "หน้าที่", "ศิลปะ", "สุขศึกษา", "การงาน"], highlightIndex: -1 },
            { day: "Friday", subjects: ["อังกฤษ", "คณิต", "ไทย", "วิทย์", "ดนตรี", "ประชุม"], highlightIndex: -1 }
        ],
        "2": [
            { day: "Monday", subjects: ["คณิต", "วิทย์", "อังกฤษ", "ไทย", "ธรรมะ", "กาชาด"], highlightIndex: 4 },
            { day: "Tuesday", subjects: ["สังคม", "ประวัติ", "คอม", "ศิลปะ", "พละ", "ชุมนุม"], highlightIndex: -1 },
            { day: "Wednesday", subjects: ["อังกฤษ", "คณิต", "ไทย", "วิทย์", "แนะแนว", "เกษตร"], highlightIndex: -1 },
            { day: "Thursday", subjects: ["ศิลปะ", "ดนตรี", "สุขศึกษา", "สังคม", "การงาน", "ห้องสมุด"], highlightIndex: -1 },
            { day: "Friday", subjects: ["ไทย", "คณิต", "อังกฤษ", "วิทย์", "หน้าที่", "ประชุม"], highlightIndex: -1 }
        ]
    }
};

const gradesData = {
    "2568": {
        "1": [
            { code: "ท31101", name: "ภาษาไทยพื้นฐาน 1", credit: 1.0, score: 78, grade: 3.5 },
            { code: "ค31101", name: "คณิตศาสตร์พื้นฐาน 1", credit: 1.5, score: 65, grade: 2.5 },
            { code: "ว31101", name: "วิทยาศาสตร์กายภาพ 1", credit: 1.5, score: 70, grade: 3.0 },
            { code: "อ31101", name: "ภาษาอังกฤษพื้นฐาน 1", credit: 1.0, score: 89, grade: 4.0 },
            { code: "ส31101", name: "สังคมศึกษา 1", credit: 1.0, score: 82, grade: 4.0 }
        ],
        "2": [
            { code: "ฟ31201", name: "ฟิสิกส์ 1", credit: 1.5, score: 85, grade: 4.0 },
            { code: "ค31201", name: "เคมี 1", credit: 1.5, score: 79, grade: 3.5 },
            { code: "ช31201", name: "ชีววิทยา 1", credit: 1.5, score: 81, grade: 4.0 },
            { code: "ค31202", name: "คณิตศาสตร์เพิ่มเติม", credit: 1.5, score: 74, grade: 3.0 },
            { code: "อ31201", name: "อังกฤษฟัง-พูด", credit: 1.0, score: 95, grade: 4.0 }
        ]
    },
    "2567": {
        "1": [
            { code: "ท23101", name: "ภาษาไทย 5", credit: 1.5, score: 68, grade: 2.5 },
            { code: "ค23101", name: "คณิตศาสตร์ 5", credit: 1.5, score: 72, grade: 3.0 },
            { code: "ว23101", name: "วิทยาศาสตร์ 5", credit: 1.5, score: 75, grade: 3.5 },
            { code: "ส23101", name: "สังคมศึกษา 5", credit: 1.5, score: 80, grade: 4.0 }
        ],
        "2": [
            { code: "ท23102", name: "ภาษาไทย 6", credit: 1.5, score: 75, grade: 3.5 },
            { code: "ค23102", name: "คณิตศาสตร์ 6", credit: 1.5, score: 78, grade: 3.5 },
            { code: "ว23102", name: "วิทยาศาสตร์ 6", credit: 1.5, score: 70, grade: 3.0 },
            { code: "ส23102", name: "สังคมศึกษา 6", credit: 1.5, score: 85, grade: 4.0 }
        ]
    }
};

const healthData = { weight: 65.5, 
                    height: 175, 
                    bloodPressure: "118/78", 
                    bloodType: "AB", 
                    allergies: "ยาพาราเซตามอล", 
                    chronic: "ไม่มี", 
                    eyeSight: "สั้น 150 / ปกติ", 
                    vaccines: [ { name: "บาดทะยัก (Tetanus)", date: "10 ม.ค. 2567", status: "complete" }, 
                                { name: "ไข้หวัดใหญ่ (Flu)", date: "15 มิ.ย. 2567", status: "complete" }, 
                                { name: "HPV (เข็ม 1)", date: "-", status: "pending" } ], 
                    fitness: [ { test: "ลุกนั่ง 30 วินาที", result: "28 ครั้ง", standard: "25 ครั้ง", eval: "ดี" }, 
                                { test: "ดันพื้น 30 วินาที", result: "32 ครั้ง", standard: "28 ครั้ง", eval: "ดีมาก" },  
                                { test: "วิ่งเก็บของ", result: "11.5 วินาที", standard: "12.0 วินาที", eval: "ผ่าน" } ] };

const subjectsData = [
    { 
        id: "s1", 
        code: "ท31101", 
        name: "ภาษาไทยพื้นฐาน", 
        matchName: ["ไทย"],  // ถ้าในตารางเขียนว่า "ไทย" จะดึงวิชานี้มา
        teacher: "อ.ใจดี มีเมตตา", 
        status: "evaluated" 
    },
    { 
        id: "s2", 
        code: "ค31101", 
        name: "คณิตศาสตร์พื้นฐาน", 
        matchName: ["คณิต"], // ถ้าในตารางเขียนว่า "คณิต" จะดึงวิชานี้มา
        teacher: "อ.สมชาย หมายมั่น", 
        status: "pending" 
    },
    { 
        id: "s3", 
        code: "ว31101", 
        name: "วิทยาศาสตร์กายภาพ", 
        // รวมทุกคำที่เกี่ยวกับวิทย์ในตาราง มาลงที่วิชานี้
        matchName: ["วิทย์", "ฟิสิกส์", "เคมี", "ชีววิทยา", "ดาราศาสตร์", "โลก"], 
        teacher: "อ.วิทย์ คิดล้ำ", 
        status: "pending" 
    },
    { 
        id: "s4", 
        code: "อ31101", 
        name: "ภาษาอังกฤษพื้นฐาน", 
        matchName: ["อังกฤษ"], 
        teacher: "Ms. Sarah Smith", 
        status: "pending" 
    },
    { 
        id: "s5", 
        code: "ส31101", 
        name: "สังคมศึกษา", 
        matchName: ["สังคม", "ประวัติ", "ประวัติศาสตร์", "หน้าที่"], 
        teacher: "อ.เที่ยงธรรม นำไทย", 
        status: "pending" 
    },
    { 
        id: "s6", 
        code: "พ31101", 
        name: "สุขศึกษาและพลศึกษา", 
        matchName: ["พละ", "สุขศึกษา"], 
        teacher: "อ.แข็งแรง รักสุขภาพ", 
        status: "pending" 
    },
    { 
        id: "s7", 
        code: "ศ31101", 
        name: "ศิลปะ (ดนตรี/นาฏศิลป์)", 
        matchName: ["ศิลปะ", "ดนตรี"], 
        teacher: "อ.สุนทรีย์ มีศิลป์", 
        status: "evaluated" 
    },
    { 
        id: "s8", 
        code: "ง31101", 
        name: "การงานอาชีพ", 
        matchName: ["การงาน", "เกษตร", "โครงงาน"], 
        teacher: "อ.ขยัน หมั่นเพียร", 
        status: "pending" 
    },
    { 
        id: "s9", 
        code: "ว31281", 
        name: "คอมพิวเตอร์และเทคโนโลยี", 
        matchName: ["คอม", "คอมพิวเตอร์"], 
        teacher: "อ.ไซเบอร์ ล้ำยุค", 
        status: "pending" 
    },
    { 
        id: "s10", 
        code: "ก31901", 
        name: "กิจกรรมแนะแนว", 
        matchName: ["แนะแนว"], 
        teacher: "อ.รับฟัง เข้าใจเด็ก", 
        status: "pending" 
    },
    { 
        id: "s11", 
        code: "ล31902", 
        name: "ลูกเสือ-เนตรนารี", 
        matchName: ["ลูกเสือ", "กาชาด", "ยุวกาชาด"], 
        teacher: "อ.ระเบียบ วินัย", 
        status: "pending" 
    },
    { 
        id: "s12", 
        code: "ช31903", 
        name: "กิจกรรมชมรม/ชุมนุม", 
        matchName: ["ชมรม", "ชุมนุม", "ห้องสมุด", "อิสระ", "ประชุม", "ธรรมะ"], 
        teacher: "อ.กิจกรรม สัมพันธ์", 
        status: "pending" 
    }
];

// ==================== 2. ฟังก์ชัน (Functions) ====================

function loadSchedule() {
    const yearSelect = document.getElementById('yearSelect');
    if(!yearSelect) return; 

    const year = yearSelect.value;
    const term = document.getElementById('termSelect').value;
    const tbody = document.getElementById('scheduleBody');

    let data = [];
    if (schedules[year] && schedules[year][term]) {
        data = schedules[year][term];
    } else {
        tbody.innerHTML = '<tr><td colspan="7">ไม่พบข้อมูลตารางเรียน</td></tr>';
        return;
    }

    tbody.innerHTML = '';
    data.forEach((row, index) => {
        const tr = document.createElement('tr');
        tr.className = index % 2 === 0 ? 'row-odd' : 'row-even';
        
        const tdDay = document.createElement('td');
        tdDay.className = `day-col ${index % 2 === 0 ? 'day-odd' : 'day-even'}`;
        tdDay.innerText = row.day;
        tr.appendChild(tdDay);

        row.subjects.forEach((subj, i) => {
            const td = document.createElement('td');
            td.innerText = subj;
            if (i === row.highlightIndex) td.classList.add('highlight-box');
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
}

function loadGrades() {
    const yearSelect = document.getElementById('gradeYearSelect');
    if(!yearSelect) return; 

    const selectedYear = yearSelect.value;
    const selectedTerm = document.getElementById('gradeTermSelect').value;
    const tbody = document.getElementById('gradeTableBody');

    // 1. ดึงข้อมูลวิชา
    let currentTermSubjects = [];
    if (gradesData[selectedYear] && gradesData[selectedYear][selectedTerm]) {
        currentTermSubjects = gradesData[selectedYear][selectedTerm];
    }

    // 2. แสดงตาราง
    tbody.innerHTML = '';
    if (currentTermSubjects.length > 0) {
        currentTermSubjects.forEach((subj, index) => {
            const tr = document.createElement('tr');
            tr.className = index % 2 === 0 ? 'row-odd' : 'row-even';
            
            let statusClass = "status-pass";
            let statusText = "ผ่าน";
            if (subj.grade === 4.0) { statusClass = "status-top"; statusText = "ดีเยี่ยม"; }
            else if (subj.grade === 0) { statusClass = "status-fail"; statusText = "ไม่ผ่าน"; }
            else if (subj.grade < 2.0) { statusClass = "status-fail"; statusText = "พอใช้"; }

            tr.innerHTML = `
                <td>${subj.code}</td>
                <td style="text-align: left; padding-left: 30px;">${subj.name}</td>
                <td>${subj.credit}</td>
                <td>${subj.score}</td>
                <td>${subj.grade}</td>
                <td><span class="grade-status ${statusClass}">${statusText}</span></td>
            `;
            tbody.appendChild(tr);
        });
    } else {
        tbody.innerHTML = '<tr><td colspan="6">ไม่พบข้อมูลผลการเรียน</td></tr>';
    }

    // 3. คำนวณ GPA และ GPAX
    let termTotalCredit = 0, termTotalPoint = 0;
    let cumTotalCredit = 0, cumTotalPoint = 0;

    for (let y in gradesData) {
        for (let t in gradesData[y]) {
            let subjects = gradesData[y][t];
            subjects.forEach(subj => {
                let point = subj.grade * subj.credit;
                cumTotalCredit += subj.credit;
                cumTotalPoint += point;

                if (y === selectedYear && t === selectedTerm) {
                    termTotalCredit += subj.credit;
                    termTotalPoint += point;
                }
            });
        }
    }

    let termGPA = termTotalCredit > 0 ? (termTotalPoint / termTotalCredit) : 0;
    let cumGPAX = cumTotalCredit > 0 ? (cumTotalPoint / cumTotalCredit) : 0;

    document.getElementById('termCredit').innerText = termTotalCredit.toFixed(1);
    document.getElementById('cumCredit').innerText = cumTotalCredit.toFixed(1);
    document.getElementById('termGpa').innerText = termGPA.toFixed(2);
    document.getElementById('cumGpax').innerText = cumGPAX.toFixed(2);
}

// --- ฟังก์ชันโหลดข้อมูลสุขภาพ ---
function loadHealth() {
    // ถ้าไม่มี element id='weightVal' แสดงว่าไม่ได้อยู่หน้า health
    const weightEl = document.getElementById('weightVal');
    if(!weightEl) return; 

    // 1. ใส่ข้อมูล Vital Signs (น้ำหนัก/ส่วนสูง)
    weightEl.innerText = healthData.weight;
    document.getElementById('heightVal').innerText = healthData.height;
    document.getElementById('bpVal').innerText = healthData.bloodPressure;

    // 2. คำนวณ BMI อัตโนมัติ (น้ำหนัก kg / ส่วนสูง m ยกกำลัง 2)
    const heightM = healthData.height / 100;
    const bmi = healthData.weight / (heightM * heightM);
    document.getElementById('bmiVal').innerText = bmi.toFixed(2);

    // ประเมินผล BMI
    let bmiText = "";
    let bmiColor = "";
    if(bmi < 18.5) { bmiText = "ผอมเกินไป"; bmiColor = "#4f7c8d"; }
    else if(bmi < 23) { bmiText = "สมส่วน (ปกติ)"; bmiColor = "#198754"; } // สีเขียว
    else if(bmi < 25) { bmiText = "น้ำหนักเกิน"; bmiColor = "#ffc107"; } // สีเหลือง
    else { bmiText = "โรคอ้วน"; bmiColor = "#dc3545"; } // สีแดง
    
    const bmiTextEl = document.getElementById('bmiText');
    bmiTextEl.innerText = bmiText;
    bmiTextEl.style.color = bmiColor;

    // 3. ใส่ข้อมูลทั่วไป (โรค/แพ้ยา)
    document.getElementById('bloodType').innerText = healthData.bloodType;
    document.getElementById('chronicDisease').innerText = healthData.chronic;
    document.getElementById('allergy').innerText = healthData.allergies;
    document.getElementById('eyeSight').innerText = healthData.eyeSight;

    // 4. สร้างตารางวัคซีน
    const vaccineBody = document.getElementById('vaccineBody');
    vaccineBody.innerHTML = '';
    healthData.vaccines.forEach(vac => {
        const tr = document.createElement('tr');
        const badgeClass = vac.status === 'complete' ? 'bg-success' : 'bg-warning';
        const badgeText = vac.status === 'complete' ? 'เรียบร้อย' : 'รอฉีด';
        tr.innerHTML = `<td>${vac.name}</td><td>${vac.date}</td><td><span class="badge ${badgeClass}">${badgeText}</span></td>`;
        vaccineBody.appendChild(tr);
    });

    // 5. สร้างตารางสมรรถภาพ
    const fitnessBody = document.getElementById('fitnessBody');
    fitnessBody.innerHTML = '';
    healthData.fitness.forEach(fit => {
        const tr = document.createElement('tr');
        let evalClass = fit.eval === 'ดีมาก' ? 'eval-good' : (fit.eval === 'ดี' || fit.eval === 'ผ่าน') ? 'eval-pass' : '';
        tr.innerHTML = `<td>${fit.test}</td><td>${fit.result}</td><td>${fit.standard}</td><td class="${evalClass}">${fit.eval}</td>`;
        fitnessBody.appendChild(tr);
    });
}

/*---การทำแบบประเมินการเรียนการสอน---*/ 
function loadEvaluationSubjects() {
    const yearSelect = document.getElementById('evalYearSelect');
    if (!yearSelect) return; // ไม่อยู่หน้าประเมิน

    const year = yearSelect.value;
    const term = document.getElementById('evalTermSelect').value;
    const subjectSelect = document.getElementById('subjectSelect');

    // 1. ดึงตารางเรียนของปี/เทอมนั้น
    let scheduleRows = (schedules[year] && schedules[year][term]) ? schedules[year][term] : [];
    
    // 2. รวบรวมรายชื่อวิชา (ชื่อสั้น) ทั้งหมดที่มีในตาราง
    let scheduleSubjects = new Set();
    scheduleRows.forEach(row => {
        row.subjects.forEach(subj => scheduleSubjects.add(subj));
    });

    // 3. จับคู่ ชื่อสั้นในตาราง -> ชื่อเต็มในแบบประเมิน
    let availableSubjects = [];
    scheduleSubjects.forEach(shortName => {
        // หาว่าชื่อสั้นนี้ ตรงกับ keyword ของวิชาไหนใน subjectsData
        const match = subjectsData.find(s => s.keywords.includes(shortName));
        if (match) {
            // เช็คว่าวิชานี้ถูกใส่ไปหรือยัง (กันซ้ำ)
            if (!availableSubjects.find(s => s.id === match.id)) {
                availableSubjects.push(match);
            }
        }
    });

    // 4. แสดงผลใน Dropdown
    subjectSelect.innerHTML = '<option value="" disabled selected>-- เลือกวิชาที่ต้องการประเมิน --</option>';
    if (availableSubjects.length > 0) {
        availableSubjects.forEach(subj => {
            const option = document.createElement('option');
            option.value = subj.id;
            const icon = subj.status === 'evaluated' ? '✅ ' : '';
            option.text = `${icon}[${subj.code}] ${subj.name}`;
            subjectSelect.appendChild(option);
        });
    } else {
        subjectSelect.innerHTML = '<option value="" disabled>ไม่พบวิชาเรียนในเทอมนี้</option>';
    }

    // รีเซ็ตการ์ดครู
    resetTeacherCard();
}
function loadTeacherInfo() {
    const select = document.getElementById('subjectSelect');
    const selectedId = select.value;
    const subject = subjectsData.find(s => s.id === selectedId);
    
    if (subject) {
        document.getElementById('teacherName').innerText = subject.teacher;
        document.getElementById('subjectName').innerText = `รายวิชา: ${subject.code} ${subject.name}`;
        const badge = document.getElementById('evalStatus');
        const formSection = document.getElementById('evaluationFormSection');

        if (subject.status === 'evaluated') {
            badge.innerText = "ประเมินเรียบร้อยแล้ว";
            badge.style.backgroundColor = "#198754"; badge.style.color = "white";
        } else {
            badge.innerText = "รอการประเมิน";
            badge.style.backgroundColor = "#ffc107"; badge.style.color = "#444";
            formSection.style.opacity = "1"; formSection.style.pointerEvents = "auto";
        }
    }
}

function resetTeacherCard() {
    document.getElementById('teacherName').innerText = "กรุณาเลือกวิชา";
    document.getElementById('subjectName').innerText = "-";
    document.getElementById('evalStatus').innerText = "รอการประเมิน";
    document.getElementById('evalStatus').style.backgroundColor = "#ffc107";
}

function submitEvaluation(event) {
    event.preventDefault();
    const select = document.getElementById('subjectSelect');
    if (!select.value) { alert("กรุณาเลือกวิชาก่อน"); return; }

    if(confirm(`ยืนยันการส่งแบบประเมิน?`)) {
        document.getElementById('evalForm').reset();
        const subj = subjectsData.find(s => s.id === select.value);
        if(subj) subj.status = "evaluated";
        
        loadEvaluationSubjects(); // โหลดใหม่เพื่ออัปเดตติ๊กถูก
        alert("บันทึกเรียบร้อย!");
    }
}

function confirmLogout() {
    if(confirm('คุณต้องการออกจากระบบใช่หรือไม่?')) { alert('ออกจากระบบเรียบร้อย'); }
}
function notReady() { alert('หน้านี้ยังไม่พร้อมใช้งานใน Mockup'); }

// ==================== 4. สั่งให้ทำงานอัตโนมัติ (Auto Run) ====================
document.addEventListener("DOMContentLoaded", function() {
    // เช็คว่าอยู่หน้าไหน ก็ให้โหลดข้อมูลหน้านั้น
    if(document.getElementById('scheduleBody')) { loadSchedule(); }
    if(document.getElementById('gradeTableBody')) { loadGrades(); }
    if(document.getElementById('weightVal')) { loadHealth(); }
});