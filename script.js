const FOOD_DATABASE = {
    "Baked Potato": { name: "烤馬鈴薯", kcal: 250, carbs: 50, protein: 5, fat: 2 },
    "Burger": { name: "經典漢堡", kcal: 550, carbs: 45, protein: 25, fat: 30 },
    "Pizza": { name: "義式披薩", kcal: 280, carbs: 35, protein: 12, fat: 10 },
    "Sandwich": { name: "三明治", kcal: 350, carbs: 30, protein: 15, fat: 12 }
};

const dict = {
    'zh': {
        navHome: '首頁', navWorkout: '訓練計畫', navDiet: '飲食紀錄', navPomo: '計時器', navStats: '數據分析', navSettings: '設定',
        workoutTitle: '專屬訓練課表', workoutSub: '點擊卡片開啟訓練模式，或建立新計畫',
        btnBack: '返回選擇', wAuthor: '自訂課表', wHeadTitle: '標題', wHeadSet: '組數 / 重量', wHeadStatus: '狀態',
        statsTitle: '數據與成就', statsSub: '持續記錄，看見成長軌跡', statsWeightTrend: '體重變化趨勢', statsToday: '今日身體狀態', statsUpdate: '更新數據', statsUpdateTitle: '紀錄今日數據與目標',
        statsWeight: '體重', statsFat: '體脂肪', statsMuscle: '骨骼肌',
        statsStreak: '連續訓練紀錄', statsDays: '天', statsStreakSub: '保持這個節奏！',
        mPlanTitle: '建立新訓練計畫', mPlanName: '計畫名稱', mPlanNameP: '例如: 腿部加強...', mPlanIcon: '選擇封面圖標', mPlanExList: '自訂動作清單', mPlanExName: '動作名稱 (例: 槓鈴深蹲)', mPlanExMeta: '組數/重量 (例: 4組x12次 | 50kg)', mPlanExDesc: '目標肌群 (例: 股四頭肌)', mPlanExAddBtn: '新增動作',
        btnCancel: '取消', btnCreate: '建立計畫', btnSave: '儲存', wConfirmDel: '確定要刪除整個計畫嗎？',
        topSearch: '搜尋功能...',
        quotes: ["現在流的汗水，是錄取通知書上的墨水。", "成功的捷徑只有一條，就是比別人更努力。", "你的對手在努力，你還有什麼理由停下？", "肌肉是靈魂的鎧甲，汗水是青春的勳章。", "所有的努力，都會在未來的某一天回報你。", "今天不走，明天就要跑。", "自律，是通往自由的唯一途徑。", "每一滴汗水，都是對平庸的宣戰。", "你是自己唯一的對手，每天都要超越昨天。", "偉大，不在於力量，而在於堅持。"],
        stepsTitle: '今日步數', intakeTitle: '攝取進度', weightTitle: '體重目標進度',
        weightCurrent: '目前', weightGoal: '目標', weightStart: '起始: 55.0kg', weightDist: '距離目標: 3.0kg',
        setMain: '設定與偏好', setLang: '介面語言', setLangSub: '選擇應用程式顯示語言', setPref: '偏好設定', setPro: 'PRO 會員', setJoin: '加入時間: 2026年2月', setLogout: '登出帳號',
        f3Years: '近三年', f3Month: '近三月', fYear: '今年', mCountTitle: '自訂倒數事件', mCountName: '事件名稱', mCountNameP: '例如: 2026 統測', mCountDate: '目標日期', sideExamSub: '點擊設定目標',
        pomoTitle: '番茄鐘專注', pomoTaskTitle: '今日任務', pomoInput: '新增待辦事項...', customTimerTitle: '自訂計時器', timeH: '時', timeM: '分', timeS: '秒', ctStart: '開始', ctReset: '重置',
        dietTitle: '飲食紀錄', dietSub: '精準掌握熱量與三大營養素', dietManual: '手動輸入', dietAI: 'AI 辨識', dietActivity: '新增活動', remain: '剩餘 (kcal)', goal: '目標', intake: '已攝取', burn: '運動消耗', carbs: '碳水化合物', protein: '蛋白質', fat: '脂肪', mealTitle: '餐點紀錄列表', waterTitle: '水分攝取', mAiTitle: 'AI 智能食物辨識', mAiUpload: '點擊或拖曳上傳食物照片', mAiStatus: '分析中...', mAiResult: '辨識結果:', mAiBtn: '啟動推論模型', mAiAddBtn: '加入飲食紀錄', mManTitle: '手動輸入食物', mManName: '食物名稱', mManNameP: '例如: 雞胸肉沙拉', mManKcal: '熱量 (kcal)', mManCarbs: '碳水 (g)', mManPro: '蛋白質 (g)', mManFat: '脂肪 (g)', mManAddBtn: '加入紀錄', planExCount: '個動作', wAddEx: '加入動作', wEmpty: '此計畫尚未新增任何動作。',
        loginSub: '請輸入您的名字以進入系統', loginInput: '您的名字...', btnLogin: '進入系統', setGoal: '健身目標', setGoalSub: '設定您的主要訓練目標', goalBulking: '增肌', goalCutting: '減脂', goalMaintain: '維持',
        btnCheckIn: '今日簽到', btnCheckedIn: '已簽到'
    },
    'en': {
        navHome: 'Home', navWorkout: 'Workouts', navDiet: 'Diet', navPomo: 'Timer', navStats: 'Analytics', navSettings: 'Settings',
        workoutTitle: 'Personal Workouts', workoutSub: 'Click to start or create a new plan',
        btnBack: 'Back', wAuthor: 'Custom Plan', wHeadTitle: 'Exercise', wHeadSet: 'Sets / Weight', wHeadStatus: 'Status',
        statsTitle: 'Analytics & Achievements', statsSub: 'Track your growth', statsWeightTrend: 'Weight Trend', statsToday: 'Today Status', statsUpdate: 'Update', statsUpdateTitle: 'Log Today & Goals',
        statsWeight: 'Weight', statsFat: 'Body Fat', statsMuscle: 'Muscle',
        statsStreak: 'Workout Streak', statsDays: 'Days', statsStreakSub: 'Keep it up!',
        mPlanTitle: 'Create New Plan', mPlanName: 'Plan Name', mPlanNameP: 'e.g., Leg Focus...', mPlanIcon: 'Cover Icon', mPlanExList: 'Exercise List', mPlanExName: 'Exercise (e.g., Squat)', mPlanExMeta: 'Sets/Weight (e.g., 4x12 | 50kg)', mPlanExDesc: 'Target Muscle (e.g., Quads)', mPlanExAddBtn: 'Add Exercise',
        btnCancel: 'Cancel', btnCreate: 'Create Plan', btnSave: 'Save', wConfirmDel: 'Delete this entire plan?',
        topSearch: 'Search...',
        quotes: ["Pain is temporary, pride is forever.", "The only shortcut to success is to work harder.", "Your rivals are working hard; what's your excuse?", "Muscle is the armor of the soul.", "Every effort will be rewarded one day.", "Walk today, or you'll have to run tomorrow.", "Discipline is the bridge to success.", "Champions are made in the shadows.", "You are your only competition.", "Sweat is just fat crying."],
        stepsTitle: 'Daily Steps', intakeTitle: 'Calorie Intake', weightTitle: 'Weight Goal Progress',
        weightCurrent: 'Current', weightGoal: 'Goal', weightStart: 'Start: 55.0kg', weightDist: 'To go: 3.0kg',
        setMain: 'Settings & Prefs', setLang: 'Language', setLangSub: 'App display language', setPref: 'Preferences', setPro: 'PRO Member', setJoin: 'Joined: Feb 2026', setLogout: 'Log Out',
        f3Years: '3 Years', f3Month: '3 Months', fYear: 'This Year', mCountTitle: 'Custom Countdown', mCountName: 'Event Name', mCountNameP: 'e.g., Final Exam', mCountDate: 'Target Date', sideExamSub: 'Click to set goal',
        pomoTitle: 'Pomodoro', pomoTaskTitle: 'Daily Tasks', pomoInput: 'Add a task...', customTimerTitle: 'Custom Timer', timeH: 'H', timeM: 'M', timeS: 'S', ctStart: 'Start', ctReset: 'Reset',
        dietTitle: 'Diet Log', dietSub: 'Track Calories & Macros', dietManual: 'Manual Entry', dietAI: 'AI Scan', dietActivity: 'Add Activity', remain: 'Remaining (kcal)', goal: 'Goal', intake: 'Intake', burn: 'Burned', carbs: 'Carbs', protein: 'Protein', fat: 'Fat', mealTitle: 'Meal History', waterTitle: 'Water Intake', mAiTitle: 'AI Food Scanner', mAiUpload: 'Click or drop food image', mAiStatus: 'Analyzing...', mAiResult: 'Result:', mAiBtn: 'Start AI Model', mAiAddBtn: 'Add to Diet', mManTitle: 'Manual Entry', mManName: 'Food Name', mManNameP: 'e.g., Chicken Salad', mManKcal: 'Calories (kcal)', mManCarbs: 'Carbs (g)', mManPro: 'Protein (g)', mManFat: 'Fat (g)', mManAddBtn: 'Add Log', planExCount: 'exercises', wAddEx: 'Add Exercise', wEmpty: 'No exercises added yet.',
        loginSub: 'Enter your name to access the system', loginInput: 'Your name...', btnLogin: 'Enter System', setGoal: 'Fitness Goal', setGoalSub: 'Set your primary training goal', goalBulking: 'Bulking', goalCutting: 'Cutting', goalMaintain: 'Maintenance',
        btnCheckIn: 'Check In Today', btnCheckedIn: 'Checked In'
    }
};

let dietState = { goal: 2600, intake: 0, burn: 450, carbs: 0, protein: 0, fat: 0 };
let currentScannedFood = null;
let waterIntake = 0;
let currentWaterCups = 0;
let currentCountdown = { name: "2026 統測倒數", date: "2026-04-25" };
let todos = JSON.parse(localStorage.getItem('trackwell_todos')) || [];
let tempCustomExercises = [];
let selectedPlanIcon = './Leg day.png';
let exercisesData = JSON.parse(localStorage.getItem('trackwell_workouts')) || {};
let currentViewingPlan = null;
let pomoInterval;
let pomoTimeLeft = 25 * 60;
let pomoTotalTime = 25 * 60;
let pomoIsRunning = false;
let customTimerInterval;
let customTimeLeft = 0;
let customIsRunning = false;
let longPressTimer;

const weightMockData = {
    '3years': [
        { label: '2024', val: 55.0 }, 
        { label: '2025', val: 58.5 }, 
        { label: '2026', val: 61.2 }
    ],
    'year': [
        { label: 'Jan', val: 60.5 }, 
        { label: 'Feb', val: 61.8 }, 
        { label: 'Mar', val: 62.0 }
    ],
    '3months': [
        { label: '12月', val: 59.5 }, 
        { label: '1月', val: 61.0 }, 
        { label: '今天', val: 62.0, isToday: true }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const user = localStorage.getItem('trackwell_username');
    if (!user) {
        document.getElementById('auth-screen').style.display = 'flex';
    } else {
        document.getElementById('auth-screen').style.display = 'none';
    }
    
    loadCountdown();
    updateExamCountdown();
    initWaterCups();
    renderTodos();
    renderWorkoutCards();
    initCheckInSystem();
    
    const savedLang = localStorage.getItem('trackwell_lang') || 'zh';
    document.getElementById('lang-select').value = savedLang;
    changeLanguage(savedLang);
    
    document.getElementById('lang-select').addEventListener('change', (e) => {
        localStorage.setItem('trackwell_lang', e.target.value);
        changeLanguage(e.target.value);
    });
    
    const s = JSON.parse(localStorage.getItem('trackwell_steps'));
    if (s) {
        renderStepsUI(s.now, s.goal);
    }
    
    const dg = JSON.parse(localStorage.getItem('trackwell_diet_goals'));
    if (dg) {
        dietState.goal = parseInt(dg.goal);
        document.getElementById('diet-goal-val').innerText = dg.goal;
    }
    
    const burn = localStorage.getItem('trackwell_burn');
    if (burn) {
        dietState.burn = parseInt(burn);
    }
    
    const wg = localStorage.getItem('trackwell_weight_goal');
    if (wg) {
        document.getElementById('home-goal-weight').innerHTML = `${parseFloat(wg).toFixed(1)}<small>kg</small>`;
    }
    
    const savedBody = JSON.parse(localStorage.getItem('trackwell_today_body'));
    if (savedBody) {
        updateBodyDisplay(savedBody);
    } else {
        updateWeightProgressBar(62.0, wg || 65.0);
    }
    
    updateChart('3months');
    setTimeout(() => { updateStats(0, 0, 0, 0); }, 300);
    setupLongPress();
});

window.initCheckInSystem = function() {
    let streakData = JSON.parse(localStorage.getItem('trackwell_streak')) || { days: 0, lastDate: null };
    const today = new Date().toDateString();
    const btn = document.getElementById('btn-checkin');
    const lang = document.getElementById('lang-select').value || 'zh';

    if (streakData.lastDate === today) {
        btn.disabled = true;
        btn.style.background = '#444';
        btn.innerText = dict[lang].btnCheckedIn;
    } else if (streakData.lastDate) {
        const lastDate = new Date(streakData.lastDate);
        const todayDate = new Date(today);
        const diffTime = Math.abs(todayDate - lastDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays > 1) {
            streakData.days = 0;
            localStorage.setItem('trackwell_streak', JSON.stringify(streakData));
        }
    }
    document.getElementById('streak-days-val').innerHTML = `${streakData.days} <small><span data-i18n="statsDays">${dict[lang].statsDays}</span></small>`;
}

window.performCheckIn = function() {
    let streakData = JSON.parse(localStorage.getItem('trackwell_streak')) || { days: 0, lastDate: null };
    const today = new Date().toDateString();

    if (streakData.lastDate !== today) {
        streakData.days += 1;
        streakData.lastDate = today;
        localStorage.setItem('trackwell_streak', JSON.stringify(streakData));
        initCheckInSystem();
    }
}

window.performLogin = function() {
    const name = document.getElementById('auth-username').value.trim();
    if (!name) return;
    localStorage.setItem('trackwell_username', name);
    document.getElementById('auth-screen').style.display = 'none';
    const lang = localStorage.getItem('trackwell_lang') || 'zh';
    updateDynamicGreeting(lang);
}

window.performLogout = function() {
    localStorage.removeItem('trackwell_username');
    document.getElementById('auth-screen').style.display = 'flex';
    document.getElementById('auth-username').value = '';
}

window.changeGoal = function(val) {
    localStorage.setItem('trackwell_goal', val);
    applyGoalUI();
}

window.applyGoalUI = function() {
    const goal = localStorage.getItem('trackwell_goal') || 'bulking';
    document.getElementById('goal-select').value = goal;
    const lang = localStorage.getItem('trackwell_lang') || 'zh';
    let goalText = '';
    
    if (goal === 'bulking') goalText = dict[lang].goalBulking;
    if (goal === 'cutting') goalText = dict[lang].goalCutting;
    if (goal === 'maintain') goalText = dict[lang].goalMaintain;
    
    const badge = document.getElementById('home-goal-badge');
    if (badge) {
        badge.innerText = goalText + (lang === 'zh' ? '中' : '');
    }
    
    const detailGoal = document.getElementById('workout-target-txt');
    if (detailGoal) {
        detailGoal.innerText = (lang === 'zh' ? '目標: ' : 'Goal: ') + goalText;
    }
}

window.updateDynamicGreeting = function(lang) {
    const hour = new Date().getHours(); 
    const title = document.getElementById('home-title');
    const quoteEl = document.getElementById('home-quote');
    const name = localStorage.getItem('trackwell_username') || 'User';
    const t = dict[lang];
    
    if (title) {
        if (lang === 'en') {
            if (hour >= 5 && hour < 12) title.innerText = `Good Morning, ${name}`;
            else if (hour >= 12 && hour < 18) title.innerText = `Good Afternoon, ${name}`;
            else if (hour >= 18 && hour < 23) title.innerText = `Good Evening, ${name}`;
            else title.innerText = `Welcome back, ${name}`;
        } else {
            if (hour >= 5 && hour < 12) title.innerText = `早安，${name}`;
            else if (hour >= 12 && hour < 18) title.innerText = `午安，${name}`;
            else if (hour >= 18 && hour < 23) title.innerText = `晚安，${name}`;
            else title.innerText = `歡迎回來，${name}`;
        }
    }
    
    if (quoteEl && t.quotes) {
        const randomIndex = Math.floor(Math.random() * t.quotes.length);
        quoteEl.innerHTML = `<span>"${t.quotes[randomIndex]}"</span>`;
    }
    
    const setUName = document.getElementById('lang-username');
    if (setUName) {
        setUName.innerText = name;
    }
}

window.changeLanguage = function(lang) {
    const t = dict[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] && key !== 'homeQuote') {
            if (el.tagName === 'INPUT' && el.type === 'text' && !el.value) {
                el.placeholder = t[key];
            } else {
                el.innerText = t[key];
            }
        }
    });
    
    updateDynamicGreeting(lang);
    applyGoalUI();
    renderWorkoutCards();
    initCheckInSystem();
    
    if (currentViewingPlan) {
        renderDayExercises(currentViewingPlan);
    }
    
    const ctBtn = document.getElementById('ct-start-text');
    if (ctBtn && !customIsRunning && customTimeLeft === 0) {
        ctBtn.innerText = t.ctStart;
    }
    
    const savedBody = JSON.parse(localStorage.getItem('trackwell_today_body'));
    const wg = localStorage.getItem('trackwell_weight_goal');
    updateWeightProgressBar(savedBody ? savedBody.weight : 62.0, wg || 65.0);
}

window.showPage = function(id, navItem) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    
    if (navItem) {
        navItem.classList.add('active');
    }
    
    if (window.innerWidth <= 768) {
        document.getElementById('app').classList.remove('sidebar-active');
    }
    
    if (id === 'workout') {
        backToWorkoutHome();
    }
}

window.toggleSidebar = function() {
    const appContainer = document.getElementById('app');
    if (window.innerWidth <= 768) {
        appContainer.classList.toggle('sidebar-active');
    } else {
        appContainer.classList.toggle('sidebar-hidden');
    }
}

window.openModal = function(id) {
    document.getElementById(id).style.display = 'flex';
}

window.closeModal = function(e, id) {
    if (!e || e.target === e.currentTarget || e.target.closest('.close-btn') || e.target.classList.contains('btn-cancel')) {
        document.getElementById(id).style.display = 'none';
    }
}

window.saveStepsSettings = function() {
    const now = document.getElementById('input-steps-now').value;
    const goal = document.getElementById('input-steps-goal').value;
    
    if (!now || !goal) return;
    
    localStorage.setItem('trackwell_steps', JSON.stringify({now, goal}));
    renderStepsUI(now, goal);
    document.getElementById('steps-settings-modal').style.display = 'none';
}

window.renderStepsUI = function(now, goal) {
    document.getElementById('home-steps-val').innerText = parseInt(now).toLocaleString();
    const perc = Math.min((now / goal) * 100, 100);
    document.getElementById('home-steps-bar').style.width = perc + '%';
}

window.saveCalSettings = function() {
    const g = document.getElementById('input-cal-goal').value;
    const c = document.getElementById('input-carbs-goal').value;
    const p = document.getElementById('input-protein-goal').value;
    
    if (g) {
        dietState.goal = parseInt(g);
        localStorage.setItem('trackwell_diet_goals', JSON.stringify({goal: g, carbs: c, protein: p}));
        document.getElementById('diet-goal-val').innerText = g;
        updateStats(0, 0, 0, 0);
    }
    
    document.getElementById('cal-goal-modal').style.display = 'none';
}

window.updatePresetBurn = function(val) {
    if (val !== "0") {
        document.getElementById('input-burn-kcal').value = val;
    }
}

window.saveActivity = function() {
    const val = document.getElementById('input-burn-kcal').value;
    if (!val) return;
    
    dietState.burn += parseInt(val);
    localStorage.setItem('trackwell_burn', dietState.burn);
    updateStats(0, 0, 0, 0);
    document.getElementById('activity-input-modal').style.display = 'none';
}

window.renderWorkoutCards = function() {
    const grid = document.getElementById('workout-card-grid');
    grid.innerHTML = '';
    const lang = document.getElementById('lang-select').value || 'zh';
    const countText = dict[lang].planExCount;
    
    Object.keys(exercisesData).forEach(title => {
        const plan = exercisesData[title];
        const card = document.createElement('div');
        card.className = 'workout-album-lg';
        card.onclick = () => openDay(title, plan.icon);
        card.innerHTML = `<img src="${plan.icon}" class="album-cover-lg" onerror="this.src='./custom.jpg'"><h3>${title}</h3><p>${lang === 'en' ? '' : '共'} ${plan.exercises.length} ${countText}</p>`;
        grid.appendChild(card);
    });
    
    const addBtn = document.createElement('div');
    addBtn.className = 'workout-album-lg add-btn-card';
    addBtn.onclick = () => openModal('custom-plan-modal');
    addBtn.innerHTML = `<div class="album-cover-lg add-icon-cover"><i class="fas fa-plus"></i></div><h3>${lang === 'en' ? 'Custom Plan' : '自訂課表'}</h3><p>${lang === 'en' ? 'Create new' : '建立新計畫'}</p>`;
    grid.appendChild(addBtn);
}

window.openDay = function(title, iconUrl) {
    currentViewingPlan = title;
    document.getElementById('workout-home').style.display = 'none';
    document.getElementById('workout-detail').style.display = 'block';
    document.getElementById('current-day-title').innerText = title;
    
    const imgEl = document.getElementById('detail-cover');
    imgEl.src = iconUrl;
    imgEl.onerror = function() {
        this.src = './custom.jpg';
    };
    
    renderDayExercises(title);
}

window.backToWorkoutHome = function() {
    currentViewingPlan = null;
    document.getElementById('workout-home').style.display = 'block';
    document.getElementById('workout-detail').style.display = 'none';
}

window.renderDayExercises = function(title) {
    const container = document.getElementById('exercise-list-container');
    container.innerHTML = '';
    
    const plan = exercisesData[title];
    if (!plan) return;
    
    const exercises = plan.exercises || [];
    const lang = document.getElementById('lang-select').value || 'zh';
    
    if (exercises.length === 0) {
        container.innerHTML = `<p style="color:#888; padding:20px;">${dict[lang].wEmpty}</p>`;
    } else {
        exercises.forEach((ex, i) => {
            const row = document.createElement('div');
            row.className = 'list-row';
            row.innerHTML = `
                <span class="num">0${i+1}</span>
                <div class="info" style="cursor:pointer;" onclick="toggleExComplete(this)">
                    <strong style="font-size:16px; color:#fff;">${ex.name}</strong><br>
                    <small style="color:#888; font-weight:600;">${ex.desc}</small>
                </div>
                <div style="font-weight:bold; font-size:14px; color:#fff; cursor:pointer;" onclick="toggleExComplete(this.previousElementSibling)">
                    ${ex.meta}
                </div>
                <div class="row-actions">
                    <i class="far fa-circle check-icon" onclick="toggleExComplete(this.parentElement.previousElementSibling.previousElementSibling)"></i>
                    <i class="fas fa-trash trash-icon" onclick="deleteExFromDay('${title}', ${i})"></i>
                </div>
            `;
            container.appendChild(row);
        });
    }
    
    const addArea = document.createElement('div');
    addArea.className = 'add-ex-form detail-add-form';
    addArea.innerHTML = `
        <div style="display:flex; gap:10px; margin-bottom:10px;">
            <input type="text" id="detail-ex-name" placeholder="${dict[lang].mPlanExName}" style="flex:1;">
            <input type="text" id="detail-ex-meta" placeholder="${dict[lang].mPlanExMeta}" style="flex:1;">
            <input type="text" id="detail-ex-desc" placeholder="${dict[lang].mPlanExDesc}" style="flex:1;">
        </div>
        <button onclick="addExToDay('${title}')"><i class="fas fa-plus"></i> ${dict[lang].wAddEx}</button>
        <button class="danger-btn-modern" style="margin-top:15px;" onclick="deleteEntirePlan('${title}')"><i class="fas fa-trash"></i> ${dict[lang].wConfirmDel}</button>
    `;
    container.appendChild(addArea);
}

window.toggleExComplete = function(el) {
    const row = el.parentElement;
    row.classList.toggle('completed');
    const icon = row.querySelector('.check-icon');
    
    if (row.classList.contains('completed')) {
        icon.className = 'fas fa-check-circle check-icon';
        icon.style.color = 'var(--primary)';
    } else {
        icon.className = 'far fa-circle check-icon';
        icon.style.color = '#555';
    }
}

window.deleteExFromDay = function(title, index) {
    exercisesData[title].exercises.splice(index, 1);
    localStorage.setItem('trackwell_workouts', JSON.stringify(exercisesData));
    renderDayExercises(title);
    renderWorkoutCards();
}

window.addExToDay = function(title) {
    const n = document.getElementById('detail-ex-name').value;
    const m = document.getElementById('detail-ex-meta').value;
    const d = document.getElementById('detail-ex-desc').value;
    
    if (!n) return;
    
    exercisesData[title].exercises.push({ name: n, meta: m, desc: d });
    localStorage.setItem('trackwell_workouts', JSON.stringify(exercisesData));
    renderDayExercises(title);
    renderWorkoutCards();
}

window.deleteEntirePlan = function(title) {
    const lang = document.getElementById('lang-select').value || 'zh';
    if (confirm(dict[lang].wConfirmDel)) {
        delete exercisesData[title];
        localStorage.setItem('trackwell_workouts', JSON.stringify(exercisesData));
        backToWorkoutHome();
        renderWorkoutCards();
    }
}

window.selectPresetIcon = function(el, url) {
    document.querySelectorAll('.preset-icon').forEach(i => i.classList.remove('active'));
    el.classList.add('active');
    selectedPlanIcon = url;
}

window.previewPlanIcon = function(e) {
    const f = e.target.files[0];
    if (f) {
        const reader = new FileReader();
        reader.onload = () => {
            selectedPlanIcon = reader.result;
            document.querySelectorAll('.preset-icon').forEach(i => i.classList.remove('active'));
            document.querySelector('.local-icon-upload').style.borderColor = 'var(--primary)';
        };
        reader.readAsDataURL(f);
    }
}

window.addCustomExToList = function() {
    const n = document.getElementById('ex-name').value;
    const m = document.getElementById('ex-meta').value;
    const d = document.getElementById('ex-desc').value;
    
    if (!n) return;
    
    tempCustomExercises.push({ name: n, meta: m, desc: d });
    document.getElementById('ex-name').value = '';
    document.getElementById('ex-meta').value = '';
    document.getElementById('ex-desc').value = '';
    renderCustomExList();
}

window.removeCustomEx = function(idx) {
    tempCustomExercises.splice(idx, 1);
    renderCustomExList();
}

window.renderCustomExList = function() {
    document.getElementById('custom-ex-list').innerHTML = tempCustomExercises.map((ex, i) => `
        <div class="list-row" style="padding:10px; margin-bottom:5px; background:#222;">
            <span style="color:#fff; font-weight:bold; font-size:14px;">${ex.name} <small style="color:#888;">(${ex.meta})</small></span>
            <i class="fas fa-times" onclick="removeCustomEx(${i})" style="color:#ff5252; cursor:pointer;"></i>
        </div>
    `).join('');
}

window.saveCustomPlan = function() {
    const title = document.getElementById('plan-name').value;
    if (!title) return;
    
    exercisesData[title] = { icon: selectedPlanIcon, exercises: [...tempCustomExercises] };
    localStorage.setItem('trackwell_workouts', JSON.stringify(exercisesData));
    tempCustomExercises = [];
    renderCustomExList();
    document.getElementById('plan-name').value = '';
    selectedPlanIcon = './Leg day.png';
    document.getElementById('custom-plan-modal').style.display = 'none';
    renderWorkoutCards();
}

window.saveBodyStats = function() {
    const h = document.getElementById('input-height').value;
    const w = document.getElementById('input-weight').value;
    const f = document.getElementById('input-fat').value;
    const m = document.getElementById('input-muscle').value;
    const goalW = document.getElementById('input-weight-goal').value;
    
    if (h) localStorage.setItem('trackwell_height', h);
    if (goalW) {
        localStorage.setItem('trackwell_weight_goal', goalW);
        document.getElementById('home-goal-weight').innerHTML = `${parseFloat(goalW).toFixed(1)}<small>kg</small>`;
    }
    
    if (w) {
        const todayData = { weight: w, fat: f || "--", muscle: m || "--" };
        localStorage.setItem('trackwell_today_body', JSON.stringify(todayData));
        updateBodyDisplay(todayData);
        
        if (weightMockData['3months'][2].isToday) {
            weightMockData['3months'][2].val = parseFloat(w);
            updateChart('3months');
        }
    }
    
    document.getElementById('body-input-modal').style.display = 'none';
}

window.updateBodyDisplay = function(data) {
    if (!data) return;
    
    document.getElementById('display-weight').innerHTML = `${data.weight} <small>kg</small>`; 
    document.getElementById('display-fat').innerHTML = `${data.fat} <small>%</small>`; 
    document.getElementById('display-muscle').innerHTML = `${data.muscle} <small>kg</small>`;
    
    const homeWeight = document.getElementById('home-weight-display'); 
    if (homeWeight) homeWeight.innerHTML = `${parseFloat(data.weight).toFixed(1)}<small>kg</small>`;
    
    const currentHeight = localStorage.getItem('trackwell_height') || "160";
    const topStats = document.getElementById('top-user-stats'); 
    if(topStats) topStats.innerHTML = `${currentHeight}cm | ${data.weight}kg`;
    
    const wg = localStorage.getItem('trackwell_weight_goal') || 65.0; 
    updateWeightProgressBar(data.weight, wg);
}

window.updateWeightProgressBar = function(currentW, goalW) {
    const current = parseFloat(currentW);
    const goal = parseFloat(goalW);
    const start = 55.0;
    const lang = document.getElementById('lang-select').value || 'zh';
    const distText = lang === 'en' ? 'To go: ' : '距離目標: ';
    const startText = lang === 'en' ? 'Start: ' : '起始: ';
    
    let dist = Math.abs(goal - current).toFixed(1);
    document.getElementById('home-weight-dist').innerText = `${distText}${dist}kg`;
    document.getElementById('home-weight-start').innerText = `${startText}${start.toFixed(1)}kg`;
    
    let perc = 0;
    if (goal > start) {
        perc = ((current - start) / (goal - start)) * 100;
    } else {
        perc = ((start - current) / (start - goal)) * 100;
    }
    
    perc = Math.max(0, Math.min(100, perc));
    document.getElementById('home-weight-bar').style.width = `${perc}%`;
}

window.updateChart = function(range) {
    const container = document.getElementById('weight-chart-bars');
    const buttons = document.querySelectorAll('.filter-btn');
    
    buttons.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('onclick').includes(range));
    });
    
    container.innerHTML = '';
    const dataSet = weightMockData[range];
    
    dataSet.forEach(item => {
        const heightPercentage = Math.max(0, Math.min(100, ((item.val - 50) / 25) * 100));
        const barGroup = document.createElement('div');
        barGroup.className = 'bar-group';
        const todayStyle = item.isToday ? 'border: 1px solid var(--primary);' : '';
        barGroup.innerHTML = `
            <div class="bar-val-tooltip">${item.val} kg</div>
            <div class="bar-fill" style="height: ${heightPercentage}%; ${todayStyle}"></div>
            <div class="bar-label">${item.label}</div>
        `;
        container.appendChild(barGroup);
    });
}

window.loadCountdown = function() {
    const saved = localStorage.getItem('trackwell_countdown');
    if (saved) {
        currentCountdown = JSON.parse(saved);
        document.getElementById('side-countdown-label').innerText = currentCountdown.name;
    }
}

window.saveCountdownSettings = function() {
    const name = document.getElementById('custom-event-name').value;
    const date = document.getElementById('custom-event-date').value;
    
    if (name && date) {
        currentCountdown = { name, date };
        localStorage.setItem('trackwell_countdown', JSON.stringify(currentCountdown));
        document.getElementById('side-countdown-label').innerText = name;
        updateExamCountdown();
        document.getElementById('countdown-settings-modal').style.display = 'none';
    }
}

window.updateExamCountdown = function() {
    const diff = new Date(currentCountdown.date + 'T00:00:00') - new Date();
    document.getElementById('exam-days').innerText = Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

window.setTimerMode = function(minutes) {
    resetPomodoro();
    pomoTimeLeft = minutes * 60;
    pomoTotalTime = minutes * 60;
    updatePomoUI();
    document.querySelectorAll('.sm-mode').forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.innerText) === minutes) {
            btn.classList.add('active');
        }
    });
}

window.togglePomodoro = function() {
    const btn = document.getElementById('pomo-play-btn');
    if (pomoIsRunning) {
        clearInterval(pomoInterval);
        btn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        pomoInterval = setInterval(() => {
            if (pomoTimeLeft <= 0) {
                clearInterval(pomoInterval);
                alert("專注時間結束！");
                resetPomodoro();
                return;
            }
            pomoTimeLeft--;
            updatePomoUI();
        }, 1000);
        btn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    pomoIsRunning = !pomoIsRunning;
}

window.updatePomoUI = function() {
    const m = Math.floor(pomoTimeLeft / 60);
    const s = pomoTimeLeft % 60;
    document.getElementById('main-timer').innerText = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    document.getElementById('pomo-progress').style.strokeDashoffset = 283 - (pomoTimeLeft / pomoTotalTime) * 283;
}

window.resetPomodoro = function() {
    clearInterval(pomoInterval);
    pomoIsRunning = false;
    pomoTimeLeft = pomoTotalTime;
    document.getElementById('pomo-play-btn').innerHTML = '<i class="fas fa-play"></i>';
    updatePomoUI();
}

window.toggleCustomTimer = function() {
    const btn = document.getElementById('ct-start-text');
    const lang = document.getElementById('lang-select').value || 'zh';
    
    if (customIsRunning) {
        clearInterval(customTimerInterval);
        btn.innerText = lang === 'en' ? 'Resume' : '繼續';
    } else {
        if (customTimeLeft === 0) {
            customTimeLeft = (parseInt(document.getElementById('ct-h').value) || 0) * 3600 + (parseInt(document.getElementById('ct-m').value) || 0) * 60 + (parseInt(document.getElementById('ct-s').value) || 0);
        }
        if (customTimeLeft <= 0) return;
        
        document.getElementById('ct-inputs').style.display = 'none';
        
        customTimerInterval = setInterval(() => {
            if (customTimeLeft <= 0) {
                clearInterval(customTimerInterval);
                alert("計時結束！");
                resetCustomTimer();
                return;
            }
            customTimeLeft--;
            updateCustomTimerUI();
        }, 1000);
        
        btn.innerText = lang === 'en' ? 'Pause' : '暫停';
    }
    customIsRunning = !customIsRunning;
}

window.updateCustomTimerUI = function() {
    const h = Math.floor(customTimeLeft / 3600);
    const m = Math.floor((customTimeLeft % 3600) / 60);
    const s = customTimeLeft % 60;
    document.getElementById('custom-timer-display').innerText = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

window.resetCustomTimer = function() {
    clearInterval(customTimerInterval);
    customIsRunning = false;
    customTimeLeft = 0;
    const lang = document.getElementById('lang-select').value || 'zh';
    const startText = document.getElementById('ct-start-text');
    if (startText) {
        startText.innerText = dict[lang].ctStart;
    }
    document.getElementById('custom-timer-display').innerText = "00:00:00";
    document.getElementById('ct-inputs').style.display = 'flex';
}

window.setupLongPress = function() {
    const pomoDisplay = document.getElementById('main-timer');
    const ctDisplay = document.getElementById('custom-timer-display');
    
    function handleStart(e, resetFn) {
        if (e.type === 'touchstart') e.preventDefault();
        longPressTimer = window.setTimeout(() => {
            resetFn();
            if (navigator.vibrate) navigator.vibrate(100);
        }, 800);
    }
    
    function handleCancel() {
        clearTimeout(longPressTimer);
    }
    
    pomoDisplay.addEventListener('mousedown', (e) => handleStart(e, resetPomodoro));
    pomoDisplay.addEventListener('touchstart', (e) => handleStart(e, resetPomodoro), {passive: false});
    pomoDisplay.addEventListener('mouseup', handleCancel);
    pomoDisplay.addEventListener('mouseleave', handleCancel);
    pomoDisplay.addEventListener('touchend', handleCancel);
    
    ctDisplay.addEventListener('mousedown', (e) => handleStart(e, resetCustomTimer));
    ctDisplay.addEventListener('touchstart', (e) => handleStart(e, resetCustomTimer), {passive: false});
    ctDisplay.addEventListener('mouseup', handleCancel);
    ctDisplay.addEventListener('mouseleave', handleCancel);
    ctDisplay.addEventListener('touchend', handleCancel);
}

window.addTodo = function() {
    const input = document.getElementById('todo-input');
    if (!input.value) return;
    todos.push({ text: input.value, done: false });
    input.value = '';
    saveTodos();
    renderTodos();
}

window.toggleTodo = function(index) {
    todos[index].done = !todos[index].done;
    saveTodos();
    renderTodos();
}

window.deleteTodo = function(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
}

window.saveTodos = function() {
    localStorage.setItem('trackwell_todos', JSON.stringify(todos));
}

window.renderTodos = function() {
    document.getElementById('todo-list').innerHTML = todos.map((t, i) => `
        <li class="todo-item ${t.done ? 'done' : ''}">
            <i class="${t.done ? 'fas fa-check-circle' : 'far fa-circle'}" onclick="toggleTodo(${i})"></i>
            <span>${t.text}</span>
            <i class="fas fa-trash" onclick="deleteTodo(${i})"></i>
        </li>
    `).join('');
}

window.handleWaterClick = function(event, element) {
    const rect = element.getBoundingClientRect();
    changeWater((event.clientX - rect.left) < rect.width / 2 ? -1 : 1);
}

window.changeWater = function(amount) {
    currentWaterCups = Math.max(0, Math.min(8, currentWaterCups + amount));
    toggleWater(currentWaterCups);
}

window.initWaterCups = function() {
    document.getElementById('water-cups-container').innerHTML = Array(8).fill('<div class="cup-container"><div class="cup-water"></div></div>').join('');
}

window.toggleWater = function(cupNumber) {
    document.querySelectorAll('.cup-container').forEach((cup, idx) => {
        cup.classList.toggle('active', idx < cupNumber);
    });
    waterIntake = cupNumber * 312.5;
    document.getElementById('water-count-txt').innerText = `${Math.round(waterIntake)} / 2500 ml`;
}

window.updateStats = function(kcal, c, p, f) {
    dietState.intake += kcal;
    dietState.carbs += c;
    dietState.protein += p;
    dietState.fat += f;
    
    document.getElementById('cal-remaining').innerText = Math.max(0, dietState.goal - dietState.intake + dietState.burn);
    document.getElementById('cal-intake').innerText = dietState.intake;
    document.getElementById('home-cal-val').innerText = dietState.intake;
    document.getElementById('cal-burn').innerText = dietState.burn;
    document.getElementById('meal-total-kcal').innerText = `${dietState.intake} kcal`;
    
    const finalPerc = Math.min((dietState.intake / (dietState.goal + dietState.burn)) * 100, 100);
    document.getElementById('home-cal-circle').setAttribute('stroke-dasharray', `${finalPerc}, 100`);
    document.getElementById('diet-cal-circle').setAttribute('stroke-dasharray', `${finalPerc}, 100`);
    
    document.getElementById('macro-carbs-txt').innerText = `${dietState.carbs} / 300g`;
    document.getElementById('bar-carbs').style.width = `${Math.min((dietState.carbs/300)*100, 100)}%`;
    
    document.getElementById('macro-protein-txt').innerText = `${dietState.protein} / 160g`;
    document.getElementById('bar-protein').style.width = `${Math.min((dietState.protein/160)*100, 100)}%`;
    
    document.getElementById('macro-fat-txt').innerText = `${dietState.fat} / 75g`;
    document.getElementById('bar-fat').style.width = `${Math.min((dietState.fat/75)*100, 100)}%`;
}

window.saveManualFood = function() {
    addFoodItem(
        document.getElementById('manual-name').value || "手動紀錄",
        parseInt(document.getElementById('manual-kcal').value) || 0,
        parseInt(document.getElementById('manual-carbs').value) || 0,
        parseInt(document.getElementById('manual-protein').value) || 0,
        parseInt(document.getElementById('manual-fat').value) || 0,
        "手動"
    );
    document.getElementById('manual-food-modal').style.display = 'none';
}

window.startAIScan = function() {
    document.getElementById('scanner-laser').style.display = 'block';
    document.getElementById('ai-result-area').style.display = 'block';
    document.getElementById('ai-analyze-btn').style.display = 'none';
    
    const status = document.getElementById('scan-status');
    const lang = document.getElementById('lang-select').value || 'zh';
    
    status.innerText = lang === 'en' ? "Loading model..." : "載入模型...";
    
    setTimeout(() => {
        status.innerText = lang === 'en' ? "Analyzing..." : "分析中...";
        setTimeout(() => {
            document.getElementById('scanner-laser').style.display = 'none';
            status.innerText = "✅ 完成";
            status.style.color = "#4caf50";
            
            currentScannedFood = FOOD_DATABASE["Burger"];
            document.getElementById('ai-food-name').innerText = currentScannedFood.name;
            document.getElementById('ai-food-cal').innerText = `${currentScannedFood.kcal} kcal`;
            document.getElementById('ai-add-btn').style.display = 'block';
        }, 1500);
    }, 1000);
}

window.addScannedFood = function() {
    if (currentScannedFood) {
        addFoodItem(
            currentScannedFood.name,
            currentScannedFood.kcal,
            currentScannedFood.carbs,
            currentScannedFood.protein,
            currentScannedFood.fat,
            "AI"
        );
    }
    document.getElementById('ai-scan-modal').style.display = 'none';
}

window.addFoodItem = function(name, kcal, c, p, f, type) {
    const item = document.createElement('div');
    item.className = 'food-item';
    const vKcal = Number(kcal);
    const vC = Number(c);
    const vP = Number(p);
    const vF = Number(f);

    item.innerHTML = `
        <div>
            <strong style="font-size:16px; color:#fff;">${name}</strong>
            <small style="color:var(--primary); font-weight:bold; margin-left:8px;">[${type}]</small><br>
            <span style="font-size:12px; color:#888; font-weight:bold;">碳水 ${vC}g | 蛋白 ${vP}g | 脂肪 ${vF}g</span>
        </div>
        <div style="display:flex; align-items:center; gap:15px;">
            <div style="font-size:20px; font-weight:900; color:#fff;">
                ${vKcal} <small style="color:#666; font-size:12px;">kcal</small>
            </div>
            <i class="fas fa-trash-alt" onclick="removeFoodItem(this, ${vKcal}, ${vC}, ${vP}, ${vF})" style="font-size:18px; color:#ff5252; cursor:pointer;"></i>
        </div>
    `;
    document.getElementById('lunch-list').appendChild(item);
    updateStats(vKcal, vC, vP, vF);
};

window.removeFoodItem = function(btn, kcal, c, p, f) {
    const item = btn.closest('.food-item');
    if (item) {
        item.remove(); 
        updateStats(-Number(kcal), -Number(c), -Number(p), -Number(f));
    }
};

window.resetDiet = function() {
    if(confirm("確定要清空今日所有的飲食紀錄嗎？")) {
        document.getElementById('lunch-list').innerHTML = '';
        dietState.intake = 0;
        dietState.carbs = 0;
        dietState.protein = 0;
        dietState.fat = 0;
        updateStats(0, 0, 0, 0); 
    }
};

window.refreshWorkout = function() {
    const rows = document.querySelectorAll('#exercise-list-container .list-row');
    rows.forEach(row => {
        row.classList.remove('completed'); 
        const icon = row.querySelector('.check-icon');
        if(icon) {
            icon.className = 'far fa-circle check-icon'; 
            icon.style.color = '#555';
        }
    });
};

window.previewImage = function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            document.getElementById('upload-placeholder').style.display = 'none';
            document.getElementById('food-preview').src = reader.result;
            document.getElementById('food-preview').style.display = 'block';
            document.getElementById('ai-analyze-btn').disabled = false;
        };
        reader.readAsDataURL(file);
    }
}
