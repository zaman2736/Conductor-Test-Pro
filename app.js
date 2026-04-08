// --- CONSTANTS & DATABASE ---
const STORAGE_KEY = 'wireTestProData_v2'; 

const CONDUCTOR_DB = {
    'D-1': { single: '6/2.397', conductor: '7.191', steel: '1/2.397', lay: ' R-H', ratio: '12-14.5',res:'1.073758',con:'61.0',load:'1014',zinc:'230',awg:'3 AWG',weight:'108',drum:'30"×18"×22"',length:'1000', },
    'D-2': { single: '6/3.37', conductor: '10.11', steel: '1/3.37', lay: ' R-H', ratio: '12-14.5',res:'0.535015',con:'61.0',load:'1926',zinc:'260',awg:'1/0 AWG',weight:'216',drum:'30"×18"×22"',length:'1000', },
    'D-3': { single: '6/4.77', conductor: '14.31', steel: '1/4.77', lay: ' R-H', ratio: '12-14.5',res:'0.267196',con:'61.0',load:'3760',zinc:'300',awg:'4/0 AWG',weight:'433',drum:'30"×18"×22"',length:'1000', },
    'D-4': { single: '1/5.189', conductor: '5.189',res:'1.336',con:'61.0',load:'342 (min)',awg:'4 AWG',weight:'57.2',drum:'Coill',length:'300', },
    'D-5': { single: '1/5.189', conductor: '5.189',res:'1.325',con:'61.0',load:'167 (max)',awg:'4 AWG',weight:'57.2',drum:'Coill',length:'300', },
    'D-6': { copper: '1/4.115', conductor: '4.115',res:'1.321',con:'61.0',load:'346 (max)',awg:'6 AWG',weight:'118',drum:'Coill',length:'300', },
    'D-7': { copper: '3/3.360', conductor: '7.254',res:'0.683',con:'61.0',load:'1070',awg:'3 AWG',weight:'239',drum:'Coill',length:'300', },
    'D-8': { copper: '7/3.119', conductor: '9.347',res:'0.338',con:'61.0',load:'2155',awg:'1/0 AWG',weight:'483',drum:'Coill',length:'300', },
    'D-9': { copper: '7/4.420', conductor: '13.259',res:'0.166',con:'61.0',load:'3694',awg:'4/0 AWG',weight:'956',drum:'Coill',length:'300', },
    'D-10': { copper: '7/3.502', conductor: '10.50',res:'0.2750',con:'61.0',load:'2694',awg:'2/0 AWG',weight:'616',drum:'Coill',length:'300', },
    'D-11': { single: '(P)=7/1.56 mm (M)=6/1.68', conductor: '(P)=4.68 mm (M)=5.04', overall: '6.96', insulation: 'XLPE (1.14)', steel: '1/1.68', lay: ' R-H', ratio: '(P)= 10-16 & (M)=12-14.5',res:'(P)= 2.17 Ω/km (M)= 2.157',con:'61.0',unaget:'1.27',unageelon:'250',aget:'0.9525',ageelon:'187.5',tsvalue:'75',elonvalue:'75',distro:'30',pitch:'25-60',carbon:'2.0-3.0',degree:'75-95',insreg:'525',hot:' i)175% ii)10',load:'540',zinc:'210',awg:'6 AWG',weight:'114',drum:'30"×18"×22"',length:'800', },
    'D-12': { single: '(P)=7/2.20 mm (M)=6/2.397', conductor: '(P)=6.60 mm (M)=7.191', overall: '8.88', insulation: 'XLPE (1.14)', steel: '1/2.397', lay: ' R-H', ratio: '(P)= 10-16 & (M)=12-14.5',res:'(P)= 1.076 Ω/km (M)= 1.075',con:'61.0',unaget:'1.27',unageelon:'250',aget:'0.9525',ageelon:'187.5',tsvalue:'75',elonvalue:'75',distro:'30',pitch:'25-60',carbon:'2.0-3.0',degree:'75-95',insreg:'392',hot:' i)175% ii)15',load:'1014',zinc:'230',awg:'3 AWG',weight:'212',drum:'30"×18"×22"',length:'500', },
    'D-14': { single: '(P)=7/2.20 mm (M)=6/2.397', conductor: '(P)=6.60 mm (M)=7.191', overall: '8.88', insulation: 'XLPE (1.14)', steel: '1/2.397', lay: ' R-H', ratio: '(P)= 10-16 & (M)=12-14.5',res:'(P)= 1.076 Ω/km (M)= 1.075',con:'61.0',unaget:'1.27',unageelon:'250',aget:'0.9525',ageelon:'187.5',tsvalue:'75',elonvalue:'75',distro:'30',pitch:'25-60',carbon:'2.0-3.0',degree:'75-95',insreg:'392',hot:' i)175% ii)15',load:'1014',zinc:'230',awg:'3 AWG',weight:'212',drum:'30×18×22',length:'500', },
    'D-15': { single: '(P)=7/3.12 mm (M)=6/3.37', conductor: '(P)=9.36 mm (M)=10.11', overall: '12.40', insulation: 'XLPE (1.52)', steel: '1/3.37', lay: ' R-H', ratio: '(P)= 10-16 & (M)=12-14.5',res:'(P)= 0.5344 Ω/km (M)= 0.5344',con:'61.0',unaget:'1.27',unageelon:'250',aget:'0.9525',ageelon:'187.5',tsvalue:'75',elonvalue:'75',distro:'30',pitch:'25-60',carbon:'2.0-3.0',degree:'75-95',insreg:'525',hot:' i)175% ii)10',load:'540',zinc:'210',awg:'3',weight:'835',drum:'30×18×22',length:'1000', },
    'D-24': { single: '(P)=7/1.56 mm (M)=6/1.68', conductor: '(P)=4.68 mm (M)=5.04', overall: '6.96', insulation: 'XLPE (1.14)', steel: '1/1.68', lay: ' R-H', ratio: '(P)= 10-16 & (M)=12-14.5',res:'(P)= 2.17 Ω/km (M)= 2.157',con:'61.0',unaget:'1.27',unageelon:'250',aget:'0.9525',ageelon:'187.5',tsvalue:'75',elonvalue:'75',distro:'30',dustro:'30',pitch:'25-60',carbon:'2.0-3.0',degree:'75-95',insreg:'525',hot:' i)175% ii)10',load:'540',zinc:'210',awg:'3',weight:'210',copper:'3/2.23',drum:'30×18×22',length:'1000', },
    'D-25': { single: '(P)=7/1.56 mm (M)=6/1.68', conductor: '(P)=4.68 mm (M)=5.04', overall: '6.96', insulation: 'XLPE (1.14)', steel: '1/1.68', lay: ' R-H', ratio: '(P)= 10-16 & (M)=12-14.5',res:'(P)= 2.17 Ω/km (M)= 2.157',con:'61.0',unaget:'1.27',unageelon:'250',aget:'0.9525',ageelon:'187.5',tsvalue:'75',elonvalue:'75',distro:'30',pitch:'25-60',carbon:'2.0-3.0',degree:'75-95',insreg:'525',hot:' i)175% ii)10',load:'540',zinc:'210',awg:'6 AWG',weight:'114',drum:'30"×18"×22"',length:'800', },
    'D-27': { single: '26/3.97', overall: '22.40', steel: '7/3.09', lay: ' R-H', ratio: '12-14.5',res:'0.1202',con:'61.0',load:'10800',zinc:'240',awg:'477 MCM',weight:'1109',drum:'42"×21"×28"',length:'500', },
    'D-28': { single: '26/3.44', overall: '21.80', steel: '7/2.674', lay: ' R-H', ratio: '12-14.5',res:'0.11682',con:'61.0',load:'8870',zinc:'230',awg:'477 MCM',weight:'977',drum:'42"×21"×28"',length:'500', },
    'D-59': { single: '6/2.674', conductor: '8.022', overall: '15.65', insulation: 'HDPE (3.81)', steel: '1/2.674', lay: ' R-H', ratio: '12-14.5',res:'0.8530',con:'61.0',load:'1228',zinc:'240',awg:'2 AWG',weight:'274',drum:'30×18×22',length:'1000', },
    'D-61': { single: '6/3.37', conductor: '10.11', overall: '17.73', insulation: 'HDPE (3.81)', steel: '1/3.37', lay: ' R-H', ratio: '12-14.5',res:'0.5350',con:'61.0',load:'1887',zinc:'300',awg:'1/0 AWG',weight:'380',drum:'30×18×22',length:'1000', },
    'D-62': { single: '6/4.77', conductor: '14.31', overall: '21.92', insulation: 'HDPE (3.81)', steel: '1/4.77', lay: ' R-H', ratio: '12-14.5',res:'0.2672',con:'61.0',load:'3598',zinc:'300',awg:'4/0 AWG',weight:'645',drum:'30×18×22',length:'1000', },
    'dog': { single: '(P)=7/1.56 mm (M)=6/1.68', conductor: '(P)=4.68 mm (M)=5.04', overall: '6.96', insulation: 'XLPE (1.14)', steel: '1/1.68', lay: ' R-H', ratio: '(P)= 10-16 & (M)=12-14.5',res:'(P)= 2.17 Ω/km (M)= 2.157',con:'61.0',unaget:'1.27',unageelon:'250',aget:'0.9525',ageelon:'187.5',tsvalue:'75',elonvalue:'75',distro:'30',dustro:'30',pitch:'25-60',carbon:'2.0-3.0',degree:'75-95',insreg:'525',hot:' i)175% ii)10',load:'540',zinc:'210',awg:'3',weight:'210',copper:'3/2.23',drum:'30×18×22',length:'1000', },
    'wasp': { single: '(P)=7/1.56 mm (M)=6/1.68', conductor: '(P)=4.68 mm (M)=5.04', overall: '6.96', insulation: 'XLPE (1.14)', steel: '1/1.68', lay: ' R-H', ratio: '(P)= 10-16 & (M)=12-14.5',res:'(P)= 2.17 Ω/km (M)= 2.157',con:'61.0',unaget:'1.27',unageelon:'250',aget:'0.9525',ageelon:'187.5',tsvalue:'75',elonvalue:'75',distro:'30',dustro:'30',pitch:'25-60',carbon:'2.0-3.0',degree:'75-95',insreg:'525',hot:' i)175% ii)10',load:'540',zinc:'210',awg:'3',weight:'210',copper:'3/2.23',drum:'30×18×22',length:'1000', },
    'ant': { single: '(P)=7/1.56 mm (M)=6/1.68', conductor: '(P)=4.68 mm (M)=5.04', overall: '6.96', insulation: 'XLPE (1.14)', steel: '1/1.68', lay: ' R-H', ratio: '(P)= 10-16 & (M)=12-14.5',res:'(P)= 2.17 Ω/km (M)= 2.157',con:'61.0',unaget:'1.27',unageelon:'250',aget:'0.9525',ageelon:'187.5',tsvalue:'75',elonvalue:'75',distro:'30',dustro:'30',pitch:'25-60',carbon:'2.0-3.0',degree:'75-95',insreg:'525',hot:' i)175% ii)10',load:'540',zinc:'210',awg:'3',weight:'210',copper:'3/2.23',drum:'30×18×22',length:'1000', },
    'merlin': { single: '(P)=7/1.56 mm (M)=6/1.68', conductor: '(P)=4.68 mm (M)=5.04', overall: '6.96', insulation: 'XLPE (1.14)', steel: '1/1.68', lay: ' R-H', ratio: '(P)= 10-16 & (M)=12-14.5',res:'(P)= 2.17 Ω/km (M)= 2.157',con:'61.0',unaget:'1.27',unageelon:'250',aget:'0.9525',ageelon:'187.5',tsvalue:'75',elonvalue:'75',distro:'30',dustro:'30',pitch:'25-60',carbon:'2.0-3.0',degree:'75-95',insreg:'525',hot:' i)175% ii)10',load:'540',zinc:'210',awg:'3',weight:'210',copper:'3/2.23',drum:'30×18×22',length:'1000', },
    'guy': { single: '(P)=7/1.56 mm (M)=6/1.68', conductor: '(P)=4.68 mm (M)=5.04', overall: '6.96', insulation: 'XLPE (1.14)', steel: '1/1.68', lay: ' R-H', ratio: '(P)= 10-16 & (M)=12-14.5',res:'(P)= 2.17 Ω/km (M)= 2.157',con:'61.0',unaget:'1.27',unageelon:'250',aget:'0.9525',ageelon:'187.5',tsvalue:'75',elonvalue:'75',distro:'30',dustro:'30',pitch:'25-60',carbon:'2.0-3.0',degree:'75-95',insreg:'525',hot:' i)175% ii)10',load:'540',zinc:'210',awg:'3',weight:'210',copper:'3/2.23',drum:'30×18×22',length:'1000', },









};

// --- APP STATE ---
let appData = {
    profile: { name: 'Lab Technician', address: 'Main Testing Facility', avatar: '' }, // RESTORED PROFILE STATE
    theme: 'light',
    singleWire: [],
    zincCoating:[],
    carbonBlack: [],
    dieReduction:[] 
};

// --- INITIALIZATION ---
function init() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        try { 
            const parsed = JSON.parse(stored);
            appData = { ...appData, ...parsed }; 
            if(!appData.profile) appData.profile = { name: 'Lab Technician', address: 'Main Testing Facility', avatar: '' };
        } 
        catch (e) { console.error("Data parse error", e); }
    }

    applyTheme(appData.theme);
    updateProfileUI(); // RESTORED CALL TO PROFILE UI
    
    renderTableSW();
    renderTableZC();
    renderTableCB();
    renderTableDR();
    initDieReduction();
    updateDashboardStats();

    const hash = window.location.hash.replace('#', '') || 'dashboard';
    navigate(hash, false);
}

function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
    updateDashboardStats();
}

// --- NAVIGATION & LAYOUT ---
function navigate(viewId, pushHistory = true) {
    document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
    const targetView = document.getElementById(`view-${viewId}`);
    if(targetView) targetView.classList.remove('hidden');

    const titles = {
        'dashboard': 'Dashboard',
        'single-wire': 'Single Wire Test',
        'zinc-coating': 'Zinc Coating Test',
        'carbon-black': 'Carbon Black Test',
        'die-reduction': 'Die Reduction',
        'conductor-data': 'Cable Data Finder',
        'developer': 'Developer Info',
        'profile': 'Profile Settings' // RESTORED PROFILE TITLE
    };
    document.getElementById('page-title').innerText = titles[viewId] || 'Wire Test Pro';

    document.querySelectorAll('.nav-btn').forEach(btn => {
        if (btn.dataset.target === viewId) {
            btn.classList.add('bg-blue-50', 'dark:bg-blue-900/20', 'text-primary');
            btn.classList.remove('text-slate-600', 'dark:text-slate-400');
        } else {
            btn.classList.remove('bg-blue-50', 'dark:bg-blue-900/20', 'text-primary');
            btn.classList.add('text-slate-600', 'dark:text-slate-400');
        }
    });

    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth < 1024 && !sidebar.classList.contains('-translate-x-full')) {
        toggleSidebar();
    }

    if (pushHistory) history.pushState(null, null, `#${viewId}`);
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    
    if (sidebar.classList.contains('-translate-x-full')) {
        sidebar.classList.remove('-translate-x-full');
        backdrop.classList.remove('hidden');
        setTimeout(() => backdrop.classList.remove('opacity-0'), 10);
    } else {
        sidebar.classList.add('-translate-x-full');
        backdrop.classList.add('opacity-0');
        setTimeout(() => backdrop.classList.add('hidden'), 300);
    }
}

window.addEventListener('popstate', () => {
    const hash = window.location.hash.replace('#', '') || 'dashboard';
    navigate(hash, false);
});

// --- THEME MANAGEMENT ---
function applyTheme(theme) {
    const isDark = theme === 'dark';
    document.documentElement.classList.toggle('dark', isDark);
    document.getElementById('theme-icon').className = isDark ? 'ph ph-sun text-xl text-yellow-500' : 'ph ph-moon text-xl';
}

function toggleDarkMode() {
    appData.theme = appData.theme === 'dark' ? 'light' : 'dark';
    applyTheme(appData.theme);
    saveData();
}

// --- DASHBOARD LOGIC ---
function updateDashboardStats() {
    const allTests =[...appData.singleWire, ...appData.zincCoating, ...appData.carbonBlack, ...appData.dieReduction];
    document.getElementById('stat-total').innerText = allTests.length;

    const todayStr = new Date().toLocaleDateString();
    const todayCount = allTests.filter(t => t.date === todayStr).length;
    document.getElementById('stat-today').innerText = todayCount;

    let sum = 0, count = 0;
    allTests.forEach(t => {
        const val = parseFloat(t.primaryResult);
        if (!isNaN(val)) { sum += val; count++; }
    });
    document.getElementById('stat-avg').innerText = count > 0 ? (sum / count).toFixed(2) : '0.00';

    if (allTests.length > 0) {
        allTests.sort((a, b) => b.timestamp - a.timestamp);
        const last = allTests[0];
        document.getElementById('stat-last').innerText = last.primaryResult + (last.unit || '');
    } else {
        document.getElementById('stat-last').innerText = 'N/A';
    }
}

// --- UTILITIES ---
function generateId() { return Date.now().toString(36) + Math.random().toString(36).substr(2); }
function getTimestamp() { 
    const d = new Date();
    return { timestamp: d.getTime(), date: d.toLocaleDateString(), time: d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) };
}
function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="ph ph-check-circle text-green-500 text-xl"></i> <span>${message}</span>`;
    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 300); }, 3000);
}
function animateCard(id) {
    const el = document.getElementById(id);
    el.classList.remove('hidden');
    el.classList.add('scale-[1.02]');
    setTimeout(() => el.classList.remove('scale-[1.02]'), 200);
}
function resetForm(formId, cardId) {
    document.getElementById(formId).reset();
    document.getElementById(cardId).classList.add('hidden');
}

// --- 1. SINGLE WIRE TEST ---
function calculateSingleWire(e) {
    e.preventDefault();
    
    // Inputs
    const d1 = parseFloat(document.getElementById('sw-d1').value);
    const d2 = parseFloat(document.getElementById('sw-d2').value);
    const d3 = parseFloat(document.getElementById('sw-d3').value);
    const d4 = parseFloat(document.getElementById('sw-d4').value);
    const ts = parseFloat(document.getElementById('sw-ts').value);
    const r = parseFloat(document.getElementById('sw-res').value);
    const temp = parseFloat(document.getElementById('sw-temp').value) || 20; 
    const el = parseFloat(document.getElementById('sw-el').value);

    // Exact Formulas Provided by User
    const avg = ((d1 + d2 + d3 + d4) / 4).toFixed(3);
    const area = (Math.PI * Math.pow(avg / 2, 2)).toFixed(2);
    
    if(area == 0 || avg == 0) return alert("Average diameter/area cannot be zero.");

    const tsMpa = (ts / area * 1000).toFixed(2);
    const elongPct = (el / avg * 100).toFixed(2);
    const resistance = (r * (20 / temp)).toFixed(2);
    const resistivity = (resistance * area / 1000).toFixed(5);
    const conductivity = (100 * 0.058 / resistivity).toFixed(2);
    const weight = (area * 8.9 / 1000).toFixed(2); 

    // Render Beautiful Grid inside Card
    const grid = document.getElementById('sw-results-grid');
    grid.innerHTML = `
        <div><p class="text-xs text-slate-500 mb-1">Avg Dia (mm)</p><h4 class="font-black text-primary text-lg">${avg}</h4></div>
        <div><p class="text-xs text-slate-500 mb-1">Area (mm²)</p><h4 class="font-black text-primary text-lg">${area}</h4></div>
        <div><p class="text-xs text-slate-500 mb-1">T.S (Mpa)</p><h4 class="font-black text-primary text-lg">${tsMpa}</h4></div>
        <div><p class="text-xs text-slate-500 mb-1">Elongation (%)</p><h4 class="font-black text-primary text-lg">${elongPct}%</h4></div>
        <div><p class="text-xs text-slate-500 mb-1">Res @20°C (Ω/Km)</p><h4 class="font-black text-primary text-lg">${resistance}</h4></div>
        <div><p class="text-xs text-slate-500 mb-1">Resistivity (Ω·m)</p><h4 class="font-black text-primary text-lg">${resistivity}</h4></div>
        <div><p class="text-xs text-slate-500 mb-1">Conductivity (% IACS)</p><h4 class="font-black text-primary text-lg">${conductivity}%</h4></div>
        <div><p class="text-xs text-slate-500 mb-1">1m Weight (gm)</p><h4 class="font-black text-primary text-lg">${weight}</h4></div>
    `;
    animateCard('result-card-sw');

    // Save Data
    const testData = { 
        id: generateId(), 
        ...getTimestamp(), 
        avg, area, tsMpa, elongPct, resistance, resistivity, conductivity, weight,
        primaryResult: conductivity, 
        unit: '%'
    };
    appData.singleWire.push(testData);
    saveData();
    renderTableSW();
    showToast("Advanced Test saved successfully");
}

function renderTableSW() {
    const tbody = document.getElementById('table-sw');
    appData.singleWire.sort((a, b) => b.timestamp - a.timestamp);
    if (appData.singleWire.length === 0) {
        tbody.innerHTML = `<tr><td colspan="10" class="text-center py-6 text-slate-500">No test data available</td></tr>`; return;
    }
    tbody.innerHTML = appData.singleWire.map((t, index) => `
        <tr>
            <td class="text-slate-400 font-medium">${index + 1}</td>
            <td><div class="font-medium text-slate-700 dark:text-slate-200">${t.date}</div><div class="text-[10px] text-slate-500">${t.time}</div></td>
            <td class="font-bold text-primary">${t.avg}</td>
            <td>${t.area}</td>
            <td>${t.tsMpa}</td>
            <td>${t.elongPct}</td>
            <td>${t.resistance}</td>
            <td>${t.conductivity}</td>
            <td>${t.weight}</td>
            <td class="text-right"><button onclick="deleteRow('singleWire', '${t.id}')" class="p-1 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors"><i class="ph ph-trash text-lg"></i></button></td>
        </tr>
    `).join('');
}

// --- 2. ZINC COATING TEST ---
function calculateZincCoating(e) {
    e.preventDefault();
    const w1 = parseFloat(document.getElementById('zc-w1').value);
    const w2 = parseFloat(document.getElementById('zc-w2').value);
    const d = parseFloat(document.getElementById('zc-dia').value);
    const m = 1960;

    if(w2 === 0) return alert("Weight 2 cannot be zero.");
    const result = (((w1 - w2) / w2) * d * m).toFixed(2);

    const card = document.getElementById('result-card-zc');
    card.innerHTML = `
        <div class="flex border-b border-slate-100 dark:border-slate-700">
            <div class="w-1/2 bg-slate-50 dark:bg-slate-800/80 p-4 text-sm font-medium text-slate-500 dark:text-slate-400 flex items-center">Formula</div>
            <div class="w-1/2 bg-white dark:bg-slate-800 p-4 text-sm font-medium text-slate-600 dark:text-slate-400">((W1 - W2) / W2) * d * m</div>
        </div>
        <div class="flex">
            <div class="w-1/2 bg-slate-50 dark:bg-slate-800/80 p-4 text-sm font-medium text-slate-500 dark:text-slate-400 flex items-center">Weight of Zinc Coating</div>
            <div class="w-1/2 bg-white dark:bg-slate-800 p-4 text-lg font-black text-teal-600">${result}%</div>
        </div>
    `;
    animateCard('result-card-zc');

    const testData = { 
        id: generateId(), ...getTimestamp(), w1, w2, d, result, 
        primaryResult: result, 
        unit: '%' 
    };
    appData.zincCoating.push(testData);
    saveData();
    renderTableZC();
    showToast("Test saved successfully");
}

function renderTableZC() {
    const tbody = document.getElementById('table-zc');
    appData.zincCoating.sort((a, b) => b.timestamp - a.timestamp);
    if (appData.zincCoating.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center py-6 text-slate-500">No test data available</td></tr>`; return;
    }
    tbody.innerHTML = appData.zincCoating.map((t, index) => `
        <tr>
            <td class="text-slate-400 font-medium">${index + 1}</td>
            <td><div class="text-sm font-medium">${t.date}</div><div class="text-xs text-slate-500">${t.time}</div></td>
            <td>${t.w1}</td>
            <td>${t.w2}</td>
            <td>${t.d}</td>
            <td class="font-bold text-teal-600">${t.result}%</td>
            <td class="text-right"><button onclick="deleteRow('zincCoating', '${t.id}')" class="p-1 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors"><i class="ph ph-trash text-lg"></i></button></td>
        </tr>
    `).join('');
}

// --- 3. CARBON BLACK TEST ---
function calculateCarbonBlack(e) {
    e.preventDefault();
    const w1 = parseFloat(document.getElementById('cb-w1').value); 
    const w2 = parseFloat(document.getElementById('cb-w2').value); 
    const w3 = parseFloat(document.getElementById('cb-w3').value); 

    if(w2 === 0) return alert("Sample weight (W2) cannot be zero.");
    
    const w4 = (w3 - w1).toFixed(4);
    const cbContent = ((w4 / w2) * 100).toFixed(2);

    const card = document.getElementById('result-card-cb');
    card.innerHTML = `
        <div class="flex border-b border-slate-100 dark:border-slate-700">
            <div class="w-1/2 bg-slate-50 dark:bg-slate-800/80 p-4 text-sm font-medium text-slate-500 dark:text-slate-400 flex items-center">Residue (W4 = W3 - W1)</div>
            <div class="w-1/2 bg-white dark:bg-slate-800 p-4 text-sm font-bold text-slate-800 dark:text-slate-100">${w4} gm</div>
        </div>
        <div class="flex">
            <div class="w-1/2 bg-slate-50 dark:bg-slate-800/80 p-4 text-sm font-medium text-slate-500 dark:text-slate-400 flex items-center">Carbon Black Content</div>
            <div class="w-1/2 bg-white dark:bg-slate-800 p-4 text-lg font-black text-orange-500">${cbContent}%</div>
        </div>
    `;
    animateCard('result-card-cb');

    const testData = { 
        id: generateId(), ...getTimestamp(), w1, w2, w3, w4, cbContent, 
        primaryResult: cbContent, 
        unit: '%' 
    };
    appData.carbonBlack.push(testData);
    saveData();
    renderTableCB();
    showToast("Carbon Black test saved");
}

function renderTableCB() {
    const tbody = document.getElementById('table-cb');
    appData.carbonBlack.sort((a, b) => b.timestamp - a.timestamp);
    if (appData.carbonBlack.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center py-6 text-slate-500">No test data available</td></tr>`; return;
    }
    tbody.innerHTML = appData.carbonBlack.map((t, index) => `
        <tr>
            <td class="text-slate-400 font-medium">${index + 1}</td>
            <td><div class="text-sm font-medium">${t.date}</div><div class="text-xs text-slate-500">${t.time}</div></td>
            <td>${t.w1}</td>
            <td>${t.w2}</td>
            <td>${t.w4}</td>
            <td class="font-bold text-orange-500">${t.cbContent}%</td>
            <td class="text-right"><button onclick="deleteRow('carbonBlack', '${t.id}')" class="p-1 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors"><i class="ph ph-trash text-lg"></i></button></td>
        </tr>
    `).join('');
}

// --- 📉 DIE REDUCTION LOGIC ---
function initDieReduction() {
    const tbody = document.getElementById('die-calc-tbody');
    tbody.innerHTML = '';
    document.getElementById('result-card-dr').classList.add('hidden');
    addDieRow(1, '', '', false);
}

function addDieRow(dieIndex, defaultIn, defaultOut, isReadOnlyIn) {
    const tbody = document.getElementById('die-calc-tbody');
    const tr = document.createElement('tr');
    
    tr.innerHTML = `
        <td class="text-center font-bold text-slate-400">${dieIndex}</td>
        <td><input type="number" step="any" class="premium-input !py-2 dr-in ${isReadOnlyIn ? '!bg-slate-100 dark:!bg-slate-800/50 cursor-not-allowed' : ''}" value="${defaultIn}" ${isReadOnlyIn ? 'readonly' : ''} oninput="handleDieChange()"></td>
        <td><input type="number" step="any" class="premium-input !py-2 dr-out" value="${defaultOut}" oninput="handleDieChange()"></td>
        <td class="font-bold text-indigo-600 dr-red text-lg">-</td>
    `;
    tbody.appendChild(tr);
}

function handleDieChange() {
    const rows = document.querySelectorAll('#die-calc-tbody tr');
    let lastOut = '';

    rows.forEach((row, idx) => {
        const inInput = row.querySelector('.dr-in');
        const outInput = row.querySelector('.dr-out');
        const redCell = row.querySelector('.dr-red');

        if (idx > 0) inInput.value = lastOut;

        const inVal = parseFloat(inInput.value);
        const outVal = parseFloat(outInput.value);

        if (!isNaN(inVal) && !isNaN(outVal) && inVal > 0 && outVal > 0 && outVal < inVal) {
            const red = (((Math.pow(inVal, 2) - Math.pow(outVal, 2)) / Math.pow(inVal, 2)) * 100).toFixed(2);
            redCell.innerText = red + '%';
            lastOut = outVal;
        } else {
            redCell.innerText = '-';
            lastOut = outInput.value; 
        }
    });

    const lastRow = rows[rows.length - 1];
    if (lastRow.querySelector('.dr-red').innerText !== '-') {
        addDieRow(rows.length + 1, lastRow.querySelector('.dr-out').value, '', true);
    }

    updateDieSummary();
}

function updateDieSummary() {
    const rows = document.querySelectorAll('#die-calc-tbody tr');
    let firstIn = NaN, lastOut = NaN, validCount = 0;

    rows.forEach((row) => {
        const i = parseFloat(row.querySelector('.dr-in').value);
        const o = parseFloat(row.querySelector('.dr-out').value);
        const r = row.querySelector('.dr-red').innerText;
        if(r !== '-') {
            if(isNaN(firstIn)) firstIn = i;
            lastOut = o;
            validCount++;
        }
    });

    const card = document.getElementById('result-card-dr');

    if(validCount > 0 && !isNaN(firstIn) && !isNaN(lastOut)) {
        const totalRed = (((Math.pow(firstIn, 2) - Math.pow(lastOut, 2)) / Math.pow(firstIn, 2)) * 100).toFixed(2);
        
        card.innerHTML = `
            <div class="flex border-b border-slate-100 dark:border-slate-700">
                <div class="w-1/2 bg-slate-50 dark:bg-slate-800/80 p-4 text-sm font-medium text-slate-500 dark:text-slate-400 flex items-center">Starting Diameter</div>
                <div class="w-1/2 bg-white dark:bg-slate-800 p-4 text-sm font-bold text-slate-800 dark:text-slate-100">${firstIn} mm</div>
            </div>
            <div class="flex border-b border-slate-100 dark:border-slate-700">
                <div class="w-1/2 bg-slate-50 dark:bg-slate-800/80 p-4 text-sm font-medium text-slate-500 dark:text-slate-400 flex items-center">Final Diameter</div>
                <div class="w-1/2 bg-white dark:bg-slate-800 p-4 text-sm font-bold text-slate-800 dark:text-slate-100">${lastOut} mm</div>
            </div>
            <div class="flex">
                <div class="w-1/2 bg-slate-50 dark:bg-slate-800/80 p-4 text-sm font-medium text-slate-500 dark:text-slate-400 flex items-center">Total System Reduction</div>
                <div class="w-1/2 bg-white dark:bg-slate-800 p-4 text-lg font-black text-indigo-600" id="dr-final-value">${totalRed}%</div>
            </div>
        `;
        card.classList.remove('hidden');
    } else {
        card.classList.add('hidden');
    }
}

function saveDieReduction() {
    const rows = document.querySelectorAll('#die-calc-tbody tr');
    let firstIn = NaN, lastOut = NaN, validCount = 0;
    const sequenceData =[];

    rows.forEach((row) => {
        const i = parseFloat(row.querySelector('.dr-in').value);
        const o = parseFloat(row.querySelector('.dr-out').value);
        const r = row.querySelector('.dr-red').innerText;
        if(r !== '-') {
            if(isNaN(firstIn)) firstIn = i;
            lastOut = o;
            validCount++;
            sequenceData.push({ in: i, out: o, red: r });
        }
    });

    if(validCount === 0) {
        return alert("No valid die calculations to save.");
    }

    const totalRed = (((Math.pow(firstIn, 2) - Math.pow(lastOut, 2)) / Math.pow(firstIn, 2)) * 100).toFixed(2);
    
    const testData = { 
        id: generateId(), 
        ...getTimestamp(), 
        startDia: firstIn, 
        finalDia: lastOut, 
        totalDies: validCount, 
        totalReduction: totalRed,
        sequence: sequenceData,
        primaryResult: totalRed,
        unit: '%'
    };

    appData.dieReduction.push(testData);
    saveData();
    renderTableDR();
    initDieReduction();
    showToast("Die Sequence saved successfully");
}

function renderTableDR() {
    const tbody = document.getElementById('table-dr');
    appData.dieReduction.sort((a, b) => b.timestamp - a.timestamp);
    if (appData.dieReduction.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center py-6 text-slate-500">No test data available</td></tr>`; return;
    }
    tbody.innerHTML = appData.dieReduction.map((t, index) => `
        <tr>
            <td class="text-slate-400 font-medium">${index + 1}</td>
            <td><div class="text-sm font-medium">${t.date}</div><div class="text-xs text-slate-500">${t.time}</div></td>
            <td>${t.startDia}</td>
            <td>${t.finalDia}</td>
            <td>${t.totalDies}</td>
            <td class="font-bold text-indigo-600">${t.totalReduction}%</td>
            <td class="text-right"><button onclick="deleteRow('dieReduction', '${t.id}')" class="p-1 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors"><i class="ph ph-trash text-lg"></i></button></td>
        </tr>
    `).join('');
}

// --- GENERIC DELETE HANDLER ---
function deleteRow(arrayName, id) {
    if(!confirm("Are you sure you want to delete this record?")) return;
    appData[arrayName] = appData[arrayName].filter(t => t.id !== id);
    saveData();
    if(arrayName === 'singleWire') renderTableSW();
    if(arrayName === 'zincCoating') renderTableZC();
    if(arrayName === 'carbonBlack') renderTableCB();
    if(arrayName === 'dieReduction') renderTableDR();
    showToast("Record deleted");
}

// --- 4. CONDUCTOR DATA ---
function renderConductorData() {
    const sel = document.getElementById('conductor-select').value;
    const param = document.getElementById('parameter-select').value;
    const wrapper = document.getElementById('conductor-table-wrapper');
    const emptyState = document.getElementById('conductor-empty');

    if (!sel || !CONDUCTOR_DB[sel]) return;

    const data = CONDUCTOR_DB[sel];
    let html = '';

    const addRow = (label, value, unit, isPrimary = false) => {
        if (value === undefined || value === null || value === '') return;
        html += `
            <div class="flex border-b border-slate-100 dark:border-slate-700 last:border-0">
                <div class="w-1/2 bg-slate-50 dark:bg-slate-800/80 p-4 text-sm font-medium text-slate-500 dark:text-slate-400 flex items-center">${label}</div>
                <div class="w-1/2 bg-white dark:bg-slate-800 p-4 text-sm font-bold ${isPrimary ? 'text-primary' : 'text-slate-800 dark:text-slate-100'}">${value} ${unit}</div>
            </div>
        `;
    };

    if (param === 'all' || param === 'awg') addRow('SIZE', data.awg, '');
    if (param === 'all' || param === 'single') addRow('No & Dimension of Aluminum wire', data.single, 'mm');
    if (param === 'all' || param === 'steel') addRow('No & Dimension of Steel wire', data.steel, 'mm');
    if (param === 'all' || param === 'copper') addRow('No & Dimension of Copper wire', data.copper, 'mm');
    if (param === 'all' || param === 'conductor') addRow('Conductor Diameter', data.conductor, 'mm');
    if (param === 'all' || param === 'insulation') addRow('Insulation Thikness', data.insulation, 'mm');
    if (param === 'all' || param === 'overall') addRow('Overall Diameter', data.overall, 'mm');
    if (param === 'all' || param === 'lay') addRow('Direction of Lay', data.lay, '');
    if (param === 'all' || param === 'ratio') addRow('Lay Ratio', data.ratio, 'mm');
    if (param === 'all' || param === 'res') addRow('D.C Resistance of Conductor at 20°C(max.)', data.res, 'Ω/km');
    if (param === 'all' || param === 'con') addRow('Conductivity at 20°C(min.)', data.con, '%IACS');
    if (param === 'all' || param === 'unaget') addRow('Unaged T.S(min.)', data.unaget, 'Kg/mm²');
    if (param === 'all' || param === 'unageelon') addRow('Unaged Elongation(min.)', data.unageelon, '%');
    if (param === 'all' || param === 'aget') addRow('Aged T.S(min.)', data.aget, 'kg/mm²');
    if (param === 'all' || param === 'ageelon') addRow('Aged Elongation(min.)', data.ageelon, '%');
    if (param === 'all' || param === 'tsvalue') addRow('Aged t.s  (of unaged value) min.', data.tsvalue, '%');
    if (param === 'all' || param === 'elonvalue') addRow('Ageed elongation(of unaged value) min', data.elonvalue, '%');
    if (param === 'all' || param === 'distro') addRow('Heat Distortion (Max.) (121°C±1)', data.distro, '%');
    if (param === 'all' || param === 'pitch') addRow('Pitch Assembly', data.pitch, '');
    if (param === 'all' || param === 'carbon') addRow('Carbon black content test', data.carbon, '%');
    if (param === 'all' || param === 'degree') addRow('Degree of Cross Linking', data.degree, '%');
    if (param === 'all' || param === 'insreg') addRow('Insulation Resistance at 15.6°C (min.)', data.insreg, 'ΜΩ.km');
    if (param === 'all' || param === 'hot') addRow('Hot Creep Test i)under specified required load.ii)Permanent elongation without load(max.)', data.hot, '%');
    if (param === 'all' || param === 'load') addRow('Braking Load (approx) with steel ', data.load, 'Kgf');
    if (param === 'all' || param === 'weight') addRow('Approx Weight ', data.weight, 'Kg/km');
    if (param === 'all' || param === 'zinc') addRow('Weight of Zinc Coating', data.zinc, 'gm/mm²');
    if (param === 'all' || param === 'drum') addRow('Drum Size', data.drum, '');
    if (param === 'all' || param === 'length') addRow('Length per Drum', data.length, 'Meter', true);

    if (html === '') {
        html = `<div class="p-6 text-center text-sm font-medium text-slate-500 dark:text-slate-400">No data available for this specific filter.</div>`;
    }

    wrapper.innerHTML = html;
    emptyState.classList.add('hidden');
    wrapper.classList.remove('hidden');
    
    wrapper.classList.remove('scale-[1.02]');
    void wrapper.offsetWidth; 
    wrapper.classList.add('scale-[1.02]');
    setTimeout(() => wrapper.classList.remove('scale-[1.02]'), 200);
}

function clearConductorSelection() {
    document.getElementById('conductor-select').value = "";
    document.getElementById('parameter-select').value = "all"; 
    document.getElementById('conductor-table-wrapper').classList.add('hidden');
    document.getElementById('conductor-empty').classList.remove('hidden');
}


// --- 5. APP USER PROFILE SETTINGS LOGIC ---
function updateProfileUI() {
    const p = appData.profile;
    document.getElementById('sidebar-name').innerText = p.name || 'User Name';
    document.getElementById('sidebar-address').innerText = p.address || 'Address not set';
    
    // Generate placeholder image if they haven't uploaded one
    const encodedName = encodeURIComponent(p.name || 'User');
    const avatarSrc = p.avatar || `https://ui-avatars.com/api/?name=${encodedName}&background=2563eb&color=fff`;
    
    document.getElementById('sidebar-avatar').src = avatarSrc;
    document.getElementById('profile-name').value = p.name || '';
    document.getElementById('profile-address').value = p.address || '';
    document.getElementById('profile-preview').src = avatarSrc;
}

function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) return alert("Image is too large. Please select an image under 2MB.");

    const reader = new FileReader();
    reader.onload = function(event) {
        appData.profile.avatar = event.target.result;
        document.getElementById('profile-preview').src = event.target.result;
    };
    reader.readAsDataURL(file);
}

function saveProfile(e) {
    e.preventDefault();
    appData.profile.name = document.getElementById('profile-name').value;
    appData.profile.address = document.getElementById('profile-address').value;
    saveData();
    updateProfileUI();
    showToast("Profile updated successfully");
}


// --- 🌐 STRICT OFFLINE DETECTION LOGIC ---
const offlineOverlay = document.getElementById('offline-overlay');
const offlineCard = document.getElementById('offline-card');

function showOfflineLock() {
    offlineOverlay.classList.remove('hidden');
    offlineOverlay.classList.remove('pointer-events-none');
    setTimeout(() => {
        offlineOverlay.classList.remove('opacity-0');
        offlineCard.classList.remove('scale-95');
        offlineCard.classList.add('scale-100');
    }, 10);
}

function hideOfflineLock() {
    offlineOverlay.classList.add('opacity-0');
    offlineCard.classList.remove('scale-100');
    offlineCard.classList.add('scale-95');
    offlineOverlay.classList.add('pointer-events-none');
    setTimeout(() => {
        offlineOverlay.classList.add('hidden');
    }, 300);
}

window.addEventListener('offline', showOfflineLock);
window.addEventListener('online', hideOfflineLock);
window.addEventListener('DOMContentLoaded', () => {
    if (!navigator.onLine) {
        showOfflineLock();
    }
});


// --- 🚫 ABSOLUTE PULL-TO-REFRESH KILLER (NUCLEAR OPTION) ---
const scrollArea = document.getElementById('main-scroll-area');
let touchStartY = 0;

// 1. Lock the entire document body from native swipe gestures
document.body.addEventListener('touchmove', (e) => {
    // If the user touches anywhere outside the scroll area (like the header), freeze the screen
    if (scrollArea && !scrollArea.contains(e.target)) {
        e.preventDefault();
    }
}, { passive: false });

// 2. Control the exact physics of the scrolling area
if (scrollArea) {
    scrollArea.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    scrollArea.addEventListener('touchmove', (e) => {
        const touchEndY = e.touches[0].clientY;
        const isSwipingDown = touchEndY > touchStartY; // Finger moving down the screen
        const isSwipingUp = touchEndY < touchStartY;   // Finger moving up the screen
        
        // KILL SWITCH 1: If at the very top and pulling down -> Prevent Refresh
        if (scrollArea.scrollTop <= 0 && isSwipingDown) {
            e.preventDefault();
        }
        
        // KILL SWITCH 2: If at the very bottom and pulling up -> Prevent Bounce
        const isAtBottom = scrollArea.scrollHeight - scrollArea.scrollTop <= scrollArea.clientHeight + 1;
        if (isAtBottom && isSwipingUp) {
            e.preventDefault();
        }
    }, { passive: false });
}

// --- START APP ---
document.addEventListener('DOMContentLoaded', init);
