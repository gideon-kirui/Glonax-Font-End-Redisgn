console.log("JS LOADED");
const USER = {
  name:"Amara Wanjiku",email:"amara.w@email.com",phone:"+254 712 345 678",
  idNumber:"34567890",address:"Westlands, Nairobi",joined:"March 2022",
  clientId:"GHL-2022-0847",
  profiles:{
    "real-estate":{
      active:true,
      stats:{properties:3,transactions:"KES 4.2M",pending:1,activeListings:2},
      transactions:[
        {id:"TXN-001",date:"2024-03-15",desc:"Lease Renewal — Westlands Apartment",type:"Payment",amount:"-KES 78,000",status:"Completed"},
        {id:"TXN-002",date:"2024-02-28",desc:"Property Valuation — Karen Plot",type:"Service Fee",amount:"-KES 8,500",status:"Completed"},
        {id:"TXN-003",date:"2024-02-10",desc:"Commission — Ngong Road Commercial",type:"Commission",amount:"-KES 120,000",status:"Completed"},
        {id:"TXN-004",date:"2024-01-22",desc:"Architectural Drawing Review",type:"Service Fee",amount:"-KES 25,000",status:"Completed"},
        {id:"TXN-005",date:"2024-01-05",desc:"Security Deposit — Industrial Area Unit",type:"Deposit",amount:"-KES 150,000",status:"Processing"},
      ],
      properties:[
        {name:"Westlands Apartment 4B",type:"Residential",status:"Active Lease",value:"KES 78,000/mo",icon:"🏢",location:"Nairobi, Westlands"},
        {name:"Karen Residential Plot",type:"Land",status:"On Market",value:"KES 8,500,000",icon:"🌿",location:"Karen, Nairobi"},
        {name:"Industrial Area Unit 12",type:"Commercial",status:"Pending Transfer",value:"KES 3,200,000",icon:"🏭",location:"Industrial Area, Nairobi"},
      ],
      documents:[
        {name:"Lease Agreement — Westlands 4B",type:"PDF",size:"1.2 MB",date:"Mar 2024",icon:"📄"},
        {name:"Title Deed — Karen Plot",type:"PDF",size:"3.4 MB",date:"Jan 2024",icon:"📜"},
        {name:"Valuation Report — Karen",type:"PDF",size:"2.1 MB",date:"Feb 2024",icon:"📊"},
        {name:"Architectural Plans — Unit 12",type:"PDF",size:"8.7 MB",date:"Dec 2023",icon:"📐"},
        {name:"Sale Agreement — Industrial Unit",type:"PDF",size:"1.8 MB",date:"Jan 2024",icon:"📄"},
      ],
      timeline:[
        {label:"Property Search Initiated",date:"Jan 2024",status:"done"},
        {label:"Valuation Completed",date:"Feb 2024",status:"done"},
        {label:"Offer Accepted — Industrial Unit",date:"Feb 2024",status:"done"},
        {label:"Conveyancing in Progress",date:"Mar 2024",status:"active"},
        {label:"Title Transfer",date:"Expected Apr 2024",status:"pending"},
      ],
      services:["Estate Management","Buy & Sell","Construction","Conveyancing","Valuations","Architecture","Tax Returns","Project Finance","Landscaping","Interior Design","Investment Consulting"],
    },
    "media":{
      active:true,
      stats:{projects:5,spent:"KES 380K",active:2,delivered:3},
      transactions:[
        {id:"TXN-M01",date:"2024-03-10",desc:"Brand Identity Package — Full",type:"Invoice",amount:"-KES 85,000",status:"Completed"},
        {id:"TXN-M02",date:"2024-02-20",desc:"Website Development — Phase 1",type:"Invoice",amount:"-KES 120,000",status:"Completed"},
        {id:"TXN-M03",date:"2024-02-01",desc:"Social Media Management — Feb",type:"Retainer",amount:"-KES 35,000",status:"Completed"},
        {id:"TXN-M04",date:"2024-01-20",desc:"Social Media Management — Jan",type:"Retainer",amount:"-KES 35,000",status:"Completed"},
        {id:"TXN-M05",date:"2024-03-18",desc:"Video Production — Corporate",type:"Invoice",amount:"-KES 95,000",status:"Processing"},
      ],
      projects:[
        {name:"Brand Identity Redesign",type:"Branding",status:"Delivered",value:"KES 85,000",date:"Feb 2024",progress:100},
        {name:"Corporate Website",type:"Web Development",status:"In Progress",value:"KES 120,000",date:"Mar 2024",progress:65},
        {name:"Social Media Campaign",type:"Digital Marketing",status:"Active",value:"KES 35K/mo",date:"Ongoing",progress:50},
        {name:"Corporate Video",type:"Audio/Video",status:"In Production",value:"KES 95,000",date:"Apr 2024",progress:30},
        {name:"Product Photography",type:"Photography",status:"Delivered",value:"KES 45,000",date:"Jan 2024",progress:100},
      ],
      documents:[
        {name:"Brand Guidelines — GHL Identity",type:"PDF",size:"5.6 MB",date:"Feb 2024",icon:"🎨"},
        {name:"Website Scope of Work",type:"PDF",size:"890 KB",date:"Jan 2024",icon:"📄"},
        {name:"Social Media Strategy Doc",type:"PDF",size:"1.1 MB",date:"Jan 2024",icon:"📱"},
        {name:"Video Production Brief",type:"PDF",size:"720 KB",date:"Mar 2024",icon:"🎬"},
      ],
      services:["Content Creation","Audio/Video Production","Website Development","Social Media Management","Brand Marketing","Advertising","Photography","Copywriting"],
    },
    "hospitality":{
      active:true,
      stats:{courses:2,certifications:1,jobApplications:3,completedModules:14},
      transactions:[
        {id:"TXN-H01",date:"2024-03-01",desc:"Hospitality Academy — Intake Fee",type:"Enrolment",amount:"-KES 15,000",status:"Completed"},
        {id:"TXN-H02",date:"2024-02-15",desc:"Module Pack — 5★ Service Excellence",type:"Course",amount:"-KES 8,500",status:"Completed"},
        {id:"TXN-H03",date:"2024-01-10",desc:"Image Coaching Session (3hr)",type:"Coaching",amount:"-KES 6,000",status:"Completed"},
        {id:"TXN-H04",date:"2024-03-20",desc:"International CV & Portfolio Prep",type:"Service",amount:"-KES 5,000",status:"Processing"},
      ],
      courses:[
        {name:"5★ Hotel Service Excellence",modules:12,completed:12,status:"Completed",cert:"Issued",progress:100},
        {name:"Food & Beverage Professional",modules:8,completed:2,status:"In Progress",cert:"Pending",progress:25},
      ],
      placements:[
        {role:"F&B Assistant",hotel:"Sarova Stanley, Nairobi",status:"Applied",date:"Mar 2024"},
        {role:"Guest Relations Officer",hotel:"Serena Beach Resort",status:"Interview Scheduled",date:"Apr 2024"},
        {role:"Reservations Agent",hotel:"Marriott Nairobi",status:"Shortlisted",date:"Mar 2024"},
      ],
      documents:[
        {name:"Certificate — 5★ Service Excellence",type:"PDF",size:"420 KB",date:"Feb 2024",icon:"🏅"},
        {name:"Professional CV (Hospitality)",type:"PDF",size:"380 KB",date:"Mar 2024",icon:"📄"},
        {name:"Portfolio — Image Coaching",type:"PDF",size:"2.3 MB",date:"Feb 2024",icon:"🌟"},
        {name:"Recommendation Letter",type:"PDF",size:"210 KB",date:"Mar 2024",icon:"📜"},
      ],
      services:["5★ Hospitality Training","International Job Placement","Interview Preparation","Personal Branding","Image Coaching","Staff Outsourcing","CV & Portfolio Prep"],
    }
  }
};

const NOTIFICATIONS = [
  {id:1,icon:"📋",iconBg:"#EFF6FF",title:"Document ready",msg:"Your Title Deed is now available for download.",time:"2 hours ago",read:false,division:"real-estate"},
  {id:2,icon:"📅",iconBg:"#FFFBEB",title:"Interview Confirmed",msg:"Serena Beach Resort confirmed your interview on April 10.",time:"5 hours ago",read:false,division:"hospitality"},
  {id:3,icon:"🎬",iconBg:"#F0FDF4",title:"Video production update",msg:"Your corporate video is 30% complete.",time:"Yesterday",read:false,division:"media"},
  {id:4,icon:"🏠",iconBg:"#FFF5F5",title:"Conveyancing update",msg:"Industrial Area Unit 12 transfer is progressing well.",time:"2 days ago",read:true,division:"real-estate"},
  {id:5,icon:"💳",iconBg:"#F5F3FF",title:"Payment processed",msg:"KES 78,000 lease renewal payment confirmed.",time:"3 days ago",read:true,division:"real-estate"},
  {id:6,icon:"📚",iconBg:"#FFF7ED",title:"New module unlocked",msg:"Food & Beverage Module 3 is now available.",time:"4 days ago",read:true,division:"hospitality"},
];

const DIVISIONS = {
  "real-estate":{icon:"🏠",name:"Commercial Agencies",short:"Real Estate",color:"var(--red)"},
  "media":{icon:"🎬",name:"Creative Media",short:"Media",color:"#1E3A5F"},
  "hospitality":{icon:"⭐",name:"Hospitality Academy",short:"Hospitality",color:"#78350F"},
};

let currentDivision = "real-estate";
let currentPage = "dashboard";
let notifOpen = false;

function getInitials(n){return n.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2);}

function initPortal(){
  renderSidebar();
  renderNotifications();
  navigateTo('dashboard');
  updateDivisionIndicator();
}

function renderSidebar(){
  const av=document.getElementById('sidebarAvatar');
  av.textContent=getInitials(USER.name);
  document.getElementById('sidebarName').textContent=USER.name;
  document.getElementById('sidebarRole').textContent='Multi-Division Client';

  // Profile switcher
  const ps=document.getElementById('profileSwitcher');
  ps.innerHTML=Object.entries(DIVISIONS).map(([k,d])=>
    `<button class="profile-tab-btn ${k===currentDivision?'active':''}" onclick="switchDivision('${k}')">
      <span class="ptb-icon">${d.icon}</span>
      <span class="ptb-name">${d.short}</span>
      ${k===currentDivision?'<span class="ptb-badge">Active</span>':''}
    </button>`
  ).join('');

  // Nav
  const navGroups = getNavGroups();
  const nav=document.getElementById('sidebarNav');
  nav.innerHTML=navGroups.map(g=>`
    <div class="nav-section">
      <div class="nav-section-label">${g.label}</div>
      ${g.links.map(l=>`
        <button class="nav-link ${currentPage===l.id?'active':''}" onclick="navigateTo('${l.id}');closeSidebar()">
          <span class="nl-icon">${l.icon}</span> ${l.label}
          ${l.badge?`<span class="nl-badge">${l.badge}</span>`:''}
        </button>
      `).join('')}
    </div>
  `).join('');
}

function getNavGroups(){
  const unread=NOTIFICATIONS.filter(n=>!n.read).length;
  const base=[
    {label:"Overview",links:[
      {id:"dashboard",icon:"⊞",label:"Dashboard"},
      {id:"transactions",icon:"💳",label:"Transactions"},
      {id:"documents",icon:"📁",label:"Documents"},
    ]},
    {label:`${DIVISIONS[currentDivision].short} Services`,links:getDivisionLinks()},
    {label:"Account",links:[
      {id:"notifications",icon:"🔔",label:"Notifications",badge:unread||null},
      {id:"profile",icon:"👤",label:"My Profile"},
      {id:"settings",icon:"⚙",label:"Settings"},
      {id:"support",icon:"💬",label:"Support"},
    ]},
  ];
  return base;
}

function getDivisionLinks(){
  if(currentDivision==="real-estate") return [
    {id:"properties",icon:"🏠",label:"My Properties"},
    {id:"applications",icon:"📋",label:"Applications"},
    {id:"valuations",icon:"📊",label:"Valuations"},
  ];
  if(currentDivision==="media") return [
    {id:"projects",icon:"🎬",label:"My Projects"},
    {id:"assets",icon:"🎨",label:"Brand Assets"},
  ];
  if(currentDivision==="hospitality") return [
    {id:"courses",icon:"🎓",label:"My Courses"},
    {id:"placements",icon:"✈",label:"Job Placements"},
    {id:"certifications",icon:"🏅",label:"Certifications"},
  ];
  return [];
}

function switchDivision(div){
  currentDivision=div;
  currentPage='dashboard';
  renderSidebar();
  updateDivisionIndicator();
  navigateTo('dashboard');
}

function updateDivisionIndicator(){
  const d=DIVISIONS[currentDivision];
  document.getElementById('divisionIndicator').innerHTML=
    `<span class="division-badge div-${currentDivision.replace('-','')}">${d.icon} ${d.short}</span>`;
}

function navigateTo(page){
  currentPage=page;
  renderSidebar();
  updateTopbar(page);
  const mc=document.getElementById('mainContent');
  mc.className='';
  mc.innerHTML='';
  mc.offsetWidth;// reflow
  const pages={
    dashboard:renderDashboard,
    transactions:renderTransactions,
    documents:renderDocuments,
    properties:renderProperties,
    projects:renderProjects,
    courses:renderCourses,
    placements:renderPlacements,
    certifications:renderCertifications,
    applications:renderApplications,
    valuations:renderValuations,
    assets:renderAssets,
    notifications:renderNotifPage,
    profile:renderProfile,
    settings:renderSettings,
    support:renderSupport,
  };
  if(pages[page]) pages[page]();
  else mc.innerHTML=`<div class="empty-state"><div class="es-icon">🚧</div><h4>Coming Soon</h4><p>This section is under development.</p></div>`;
}

function updateTopbar(page){
  const labels={
    dashboard:"Dashboard",transactions:"Transactions",documents:"Documents",
    properties:"My Properties",projects:"My Projects",courses:"My Courses",
    placements:"Job Placements",certifications:"Certifications",
    applications:"Applications",valuations:"Valuations",assets:"Brand Assets",
    notifications:"Notifications",profile:"My Profile",settings:"Settings",support:"Support",
  };
  document.getElementById('topbarTitle').textContent=labels[page]||page;
  document.getElementById('topbarSub').textContent=`${DIVISIONS[currentDivision].name} · ${USER.name}`;
  document.getElementById('notifDot').style.display=NOTIFICATIONS.filter(n=>!n.read).length?'block':'none';
}

/* ═══ DASHBOARD ═══ */
function renderDashboard(){
  const div=currentDivision;
  const p=USER.profiles[div];
  const d=DIVISIONS[div];
  let statsHTML='', quickHTML='', bodyHTML='';

  if(div==="real-estate"){
    statsHTML=`
      <div class="stat-card"><div class="stat-label">Properties</div><div class="stat-value">${p.stats.properties}</div><div class="stat-sub">Active portfolio</div></div>
      <div class="stat-card"><div class="stat-label">Total Spent</div><div class="stat-value" style="font-size:20px;">${p.stats.transactions}</div><div class="stat-sub">2024 YTD</div></div>
      <div class="stat-card"><div class="stat-label">Pending</div><div class="stat-value">${p.stats.pending}</div><div class="stat-sub"><span class="stat-trend neutral">Transfer in progress</span></div></div>
      <div class="stat-card"><div class="stat-label">Active Listings</div><div class="stat-value">${p.stats.activeListings}</div><div class="stat-sub">Properties on market</div></div>`;
    quickHTML=`
      <div class="qa-btn" onclick="openServiceModal('real-estate')"><div class="qa-icon">🔍</div><div class="qa-label">Find Property</div></div>
      <div class="qa-btn" onclick="openServiceModal('real-estate')"><div class="qa-icon">📝</div><div class="qa-label">Request Service</div></div>
      <div class="qa-btn" onclick="navigateTo('documents')"><div class="qa-icon">📁</div><div class="qa-label">Documents</div></div>
      <div class="qa-btn" onclick="navigateTo('transactions')"><div class="qa-icon">💳</div><div class="qa-label">Transactions</div></div>
      <div class="qa-btn" onclick="navigateTo('valuations')"><div class="qa-icon">📊</div><div class="qa-label">Get Valuation</div></div>`;
    bodyHTML=`
      <div class="grid-2">
        <div class="card">
          <div class="card-header"><div><div class="card-title">Active Properties</div></div><button class="btn btn-secondary btn-sm" onclick="navigateTo('properties')">View All</button></div>
          ${p.properties.slice(0,2).map(pr=>`
            <div style="display:flex;gap:12px;padding:12px 0;border-bottom:1px solid var(--border);align-items:center;">
              <div style="width:42px;height:42px;background:var(--navy);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;">${pr.icon}</div>
              <div style="flex:1;min-width:0;">
                <div style="font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${pr.name}</div>
                <div style="font-size:12px;color:var(--text3);">${pr.location}</div>
              </div>
              <span class="badge ${pr.status==='Active Lease'?'badge-green':pr.status==='On Market'?'badge-blue':'badge-amber'}">${pr.status}</span>
            </div>`).join('')}
        </div>
        <div class="card">
          <div class="card-header"><div class="card-title">Transfer Progress</div></div>
          <div class="timeline">
            ${p.timeline.map(t=>`
              <div class="tl-item">
                <div class="tl-dot ${t.status}"></div>
                <div class="tl-label">${t.label}</div>
                <div class="tl-date">${t.date}</div>
              </div>`).join('')}
          </div>
        </div>
      </div>`;
  } else if(div==="media"){
    statsHTML=`
      <div class="stat-card"><div class="stat-label">Total Projects</div><div class="stat-value">${p.stats.projects}</div><div class="stat-sub">All time</div></div>
      <div class="stat-card"><div class="stat-label">Total Spent</div><div class="stat-value" style="font-size:20px;">${p.stats.spent}</div><div class="stat-sub">2024 YTD</div></div>
      <div class="stat-card"><div class="stat-label">Active</div><div class="stat-value">${p.stats.active}</div><div class="stat-sub"><span class="stat-trend up">↑ In production</span></div></div>
      <div class="stat-card"><div class="stat-label">Delivered</div><div class="stat-value">${p.stats.delivered}</div><div class="stat-sub">Completed projects</div></div>`;
    quickHTML=`
      <div class="qa-btn" onclick="openServiceModal('media')"><div class="qa-icon">🎯</div><div class="qa-label">New Project</div></div>
      <div class="qa-btn" onclick="navigateTo('projects')"><div class="qa-icon">🎬</div><div class="qa-label">My Projects</div></div>
      <div class="qa-btn" onclick="navigateTo('assets')"><div class="qa-icon">🎨</div><div class="qa-label">Brand Assets</div></div>
      <div class="qa-btn" onclick="navigateTo('documents')"><div class="qa-icon">📁</div><div class="qa-label">Documents</div></div>
      <div class="qa-btn" onclick="navigateTo('transactions')"><div class="qa-icon">💳</div><div class="qa-label">Invoices</div></div>`;
    bodyHTML=`
      <div class="card">
        <div class="card-header"><div class="card-title">Active Projects</div><button class="btn btn-secondary btn-sm" onclick="navigateTo('projects')">All Projects</button></div>
        ${p.projects.filter(pr=>pr.status!=="Delivered").map(pr=>`
          <div style="margin-bottom:18px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
              <div><div style="font-size:14px;font-weight:500;">${pr.name}</div><div style="font-size:12px;color:var(--text3);">${pr.type}</div></div>
              <span class="badge ${pr.status==='Active'?'badge-green':'badge-amber'}">${pr.status}</span>
            </div>
            <div class="progress-bar"><div class="progress-fill" style="width:${pr.progress}%;"></div></div>
            <div style="font-size:11px;color:var(--text3);margin-top:4px;">${pr.progress}% complete</div>
          </div>`).join('')}
      </div>`;
  } else if(div==="hospitality"){
    statsHTML=`
      <div class="stat-card"><div class="stat-label">Courses</div><div class="stat-value">${p.stats.courses}</div><div class="stat-sub">Enrolled</div></div>
      <div class="stat-card"><div class="stat-label">Certifications</div><div class="stat-value">${p.stats.certifications}</div><div class="stat-sub">Issued</div></div>
      <div class="stat-card"><div class="stat-label">Applications</div><div class="stat-value">${p.stats.jobApplications}</div><div class="stat-sub"><span class="stat-trend up">↑ Active</span></div></div>
      <div class="stat-card"><div class="stat-label">Modules Done</div><div class="stat-value">${p.stats.completedModules}</div><div class="stat-sub">Out of 20 total</div></div>`;
    quickHTML=`
      <div class="qa-btn" onclick="navigateTo('courses')"><div class="qa-icon">🎓</div><div class="qa-label">My Courses</div></div>
      <div class="qa-btn" onclick="navigateTo('placements')"><div class="qa-icon">✈</div><div class="qa-label">Job Listings</div></div>
      <div class="qa-btn" onclick="navigateTo('certifications')"><div class="qa-icon">🏅</div><div class="qa-label">Certificates</div></div>
      <div class="qa-btn" onclick="navigateTo('documents')"><div class="qa-icon">📁</div><div class="qa-label">Documents</div></div>
      <div class="qa-btn" onclick="openServiceModal('hospitality')"><div class="qa-icon">🌟</div><div class="qa-label">Book Coaching</div></div>`;
    bodyHTML=`
      <div class="grid-2">
        <div class="card">
          <div class="card-header"><div class="card-title">Course Progress</div><button class="btn btn-secondary btn-sm" onclick="navigateTo('courses')">All Courses</button></div>
          ${p.courses.map(c=>`
            <div style="margin-bottom:18px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                <div style="font-size:13px;font-weight:500;">${c.name}</div>
                <span class="badge ${c.status==='Completed'?'badge-green':'badge-amber'}">${c.status}</span>
              </div>
              <div class="progress-bar"><div class="progress-fill" style="width:${c.progress}%;background:${c.progress===100?'var(--success)':'var(--red)'}"></div></div>
              <div style="font-size:11px;color:var(--text3);margin-top:4px;">${c.completed}/${c.modules} modules</div>
            </div>`).join('')}
        </div>
        <div class="card">
          <div class="card-header"><div class="card-title">Job Applications</div><button class="btn btn-secondary btn-sm" onclick="navigateTo('placements')">View All</button></div>
          ${p.placements.map(pl=>`
            <div style="padding:12px 0;border-bottom:1px solid var(--border);">
              <div style="font-size:13px;font-weight:500;">${pl.role}</div>
              <div style="font-size:12px;color:var(--text3);">${pl.hotel}</div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-top:6px;">
                <span class="badge ${pl.status==='Interview Scheduled'?'badge-green':pl.status==='Shortlisted'?'badge-blue':'badge-gray'}">${pl.status}</span>
                <span style="font-size:11px;color:var(--text3);">${pl.date}</span>
              </div>
            </div>`).join('')}
        </div>
      </div>`;
  }

  document.getElementById('mainContent').innerHTML=`
    <div class="profile-hero">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px;">
        <div>
          <div class="ph-name">${d.icon} ${USER.name}</div>
          <div class="ph-id">Client ID: ${USER.clientId} · Member since ${USER.joined}</div>
          <div class="ph-tags">
            ${Object.entries(USER.profiles).filter(([,v])=>v.active).map(([k])=>`<span class="ph-tag">${DIVISIONS[k].icon} ${DIVISIONS[k].short}</span>`).join('')}
          </div>
        </div>
        <button class="btn" style="background:rgba(255,255,255,.12);color:#fff;font-size:13px;" onclick="openServiceModal('${div}')">+ Request Service</button>
      </div>
    </div>
    <div class="stats-grid">${statsHTML}</div>
    <div style="margin-bottom:8px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:var(--text3);">Quick Actions</div>
    <div class="quick-actions">${quickHTML}</div>
    ${bodyHTML}
    <div style="margin-top:24px;">
      <div class="support-card">
        <h4>Need Assistance?</h4>
        <p>Our team is available Mon–Sat, 8am–6pm. Call 0732 028 129 or 0716 517 561.</p>
        <button class="btn" onclick="navigateTo('support')" style="background:rgba(255,255,255,.15);color:#fff;font-size:13px;">Contact Support</button>
      </div>
    </div>`;
}

/* ═══ TRANSACTIONS ═══ */
function renderTransactions(){
  const p=USER.profiles[currentDivision];
  const today=new Date().toISOString().split('T')[0];
  const mo3=new Date(Date.now()-90*864e5).toISOString().split('T')[0];
  document.getElementById('mainContent').innerHTML=`
    <div class="card" style="margin-bottom:18px;">
      <div class="statement-tool">
        <h4>Download Statement</h4>
        <p>Select a date range to export your account statement as PDF</p>
        <div class="date-range">
          <input type="date" id="stFrom" value="${mo3}">
          <span style="color:var(--text3);">to</span>
          <input type="date" id="stTo" value="${today}">
        </div>
        <button class="btn btn-primary" onclick="downloadStatement()">📥 Download Statement</button>
        <button class="btn btn-secondary" style="margin-left:8px;" onclick="downloadStatement('csv')">📊 Export CSV</button>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <div><div class="card-title">Transaction History</div><div class="card-sub">${DIVISIONS[currentDivision].name}</div></div>
        <span class="badge badge-blue">${p.transactions.length} records</span>
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>ID</th><th>Date</th><th>Description</th><th>Type</th><th>Amount</th><th>Status</th></tr></thead>
          <tbody>${p.transactions.map(t=>`
            <tr>
              <td><span style="font-family:monospace;font-size:12px;color:var(--text3);">${t.id}</span></td>
              <td style="white-space:nowrap;">${t.date}</td>
              <td>${t.desc}</td>
              <td><span class="pill">${t.type}</span></td>
              <td style="font-weight:600;white-space:nowrap;">${t.amount}</td>
              <td><span class="badge ${t.status==='Completed'?'badge-green':'badge-amber'}">${t.status}</span></td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>`;
}

/* ═══ DOCUMENTS ═══ */
function renderDocuments(){
  const p=USER.profiles[currentDivision];
  document.getElementById('mainContent').innerHTML=`
    <div class="card">
      <div class="card-header">
        <div><div class="card-title">My Documents</div><div class="card-sub">${DIVISIONS[currentDivision].name}</div></div>
        <button class="btn btn-secondary btn-sm">📤 Upload</button>
      </div>
      <div style="display:grid;gap:10px;">
        ${p.documents.map(d=>`
          <div class="doc-item">
            <div class="doc-icon" style="background:var(--surface2);">${d.icon}</div>
            <div style="flex:1;min-width:0;">
              <div class="doc-name">${d.name}</div>
              <div class="doc-meta">${d.type} · ${d.size} · Added ${d.date}</div>
            </div>
            <div class="doc-actions">
              <button class="btn btn-secondary btn-sm" onclick="showToast('Opening document...')">View</button>
              <button class="btn btn-primary btn-sm" onclick="showToast('Downloading ${d.name}...')">⬇</button>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

/* ═══ PROPERTIES ═══ */
function renderProperties(){
  const p=USER.profiles["real-estate"];
  document.getElementById('mainContent').innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;">
      <div></div>
      <button class="btn btn-primary" onclick="openServiceModal('real-estate')">+ New Enquiry</button>
    </div>
    <div class="grid-3" style="margin-bottom:24px;">
      ${p.properties.map(pr=>`
        <div class="property-card">
          <div class="prop-img">${pr.icon}<div class="prop-status"><span class="badge ${pr.status==='Active Lease'?'badge-green':pr.status==='On Market'?'badge-blue':'badge-amber'}">${pr.status}</span></div></div>
          <div class="prop-body">
            <div class="prop-name">${pr.name}</div>
            <div class="prop-loc">📍 ${pr.location}</div>
            <div class="pill" style="margin-bottom:6px;">${pr.type}</div>
            <div class="prop-row"><span class="prop-price">${pr.value}</span><button class="btn btn-secondary btn-sm">Details</button></div>
          </div>
        </div>`).join('')}
    </div>`;
}

/* ═══ PROJECTS ═══ */
function renderProjects(){
  const p=USER.profiles["media"];
  document.getElementById('mainContent').innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;">
      <div></div>
      <button class="btn btn-primary" onclick="openServiceModal('media')">+ New Project</button>
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">All Projects</div></div>
      ${p.projects.map(pr=>`
        <div class="project-row">
          <div class="proj-icon">🎬</div>
          <div style="flex:1;min-width:0;">
            <div class="proj-name">${pr.name}</div>
            <div class="proj-type">${pr.type}</div>
            <div style="margin-top:8px;"><div class="progress-bar" style="max-width:200px;"><div class="progress-fill" style="width:${pr.progress}%;background:${pr.progress===100?'var(--success)':'var(--red)'}"></div></div><span style="font-size:11px;color:var(--text3);">${pr.progress}%</span></div>
          </div>
          <div class="proj-meta">
            <div class="proj-value">${pr.value}</div>
            <div class="proj-date">${pr.date}</div>
            <span class="badge ${pr.status==='Delivered'?'badge-green':pr.status==='In Progress'?'badge-blue':'badge-amber'}" style="margin-top:4px;">${pr.status}</span>
          </div>
        </div>`).join('')}
    </div>`;
}

/* ═══ COURSES ═══ */
function renderCourses(){
  const p=USER.profiles["hospitality"];
  document.getElementById('mainContent').innerHTML=`
    <div style="display:flex;justify-content:space-between;margin-bottom:18px;">
      <div></div>
      <button class="btn btn-primary" onclick="openServiceModal('hospitality')">Enroll in Course</button>
    </div>
    <div class="grid-auto">
      ${p.courses.map(c=>`
        <div class="course-card">
          <div class="course-bar"><div class="course-fill" style="width:${c.progress}%;background:${c.progress===100?'var(--success)':'var(--red)'}"></div></div>
          <div class="course-body">
            <div class="course-title">${c.name}</div>
            <div class="course-meta">🎓 ${c.modules} modules · Certificate: ${c.cert}</div>
            <span class="badge ${c.status==='Completed'?'badge-green':'badge-amber'}">${c.status}</span>
            <div class="course-progress">Progress: ${c.completed}/${c.modules} modules (${c.progress}%)</div>
            <div style="margin-top:12px;display:flex;gap:8px;">
              ${c.status==='Completed'?`<button class="btn btn-secondary btn-sm" onclick="showToast('Opening course...')">Review</button><button class="btn btn-primary btn-sm" onclick="showToast('Downloading certificate...')">🏅 Download Cert</button>`:`<button class="btn btn-primary btn-sm" onclick="showToast('Resuming course...')">▶ Continue</button>`}
            </div>
          </div>
        </div>`).join('')}
    </div>`;
}

/* ═══ PLACEMENTS ═══ */
function renderPlacements(){
  const p=USER.profiles["hospitality"];
  document.getElementById('mainContent').innerHTML=`
    <div class="card" style="margin-bottom:18px;">
      <div class="card-header"><div class="card-title">Job Applications</div><button class="btn btn-primary btn-sm" onclick="openServiceModal('hospitality')">Browse Openings</button></div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Role</th><th>Hotel / Establishment</th><th>Status</th><th>Date</th><th>Actions</th></tr></thead>
          <tbody>
            ${p.placements.map(pl=>`
              <tr>
                <td><strong>${pl.role}</strong></td>
                <td>${pl.hotel}</td>
                <td><span class="badge ${pl.status==='Interview Scheduled'?'badge-green':pl.status==='Shortlisted'?'badge-blue':'badge-gray'}">${pl.status}</span></td>
                <td style="white-space:nowrap;">${pl.date}</td>
                <td><button class="btn btn-secondary btn-sm" onclick="showToast('Opening application details...')">View</button></td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>
    <div class="card" style="background:var(--gold-light);border-color:rgba(184,134,11,.2);">
      <h4 style="font-family:var(--font-serif);font-size:15px;margin-bottom:6px;">⭐ International Opportunities</h4>
      <p style="font-size:13px;color:var(--text2);margin-bottom:14px;">Our placement team sources opportunities at 5★ establishments globally. Complete your profile to unlock premium listings.</p>
      <button class="btn btn-secondary btn-sm" onclick="navigateTo('profile')">Complete Profile →</button>
    </div>`;
}

/* ═══ CERTIFICATIONS ═══ */
function renderCertifications(){
  const p=USER.profiles["hospitality"];
  const certs=p.courses.filter(c=>c.status==="Completed");
  document.getElementById('mainContent').innerHTML=`
    <div class="grid-auto">
      ${certs.map(c=>`
        <div class="card" style="text-align:center;">
          <div style="font-size:48px;margin-bottom:12px;">🏅</div>
          <div style="font-family:var(--font-serif);font-size:16px;font-weight:600;margin-bottom:6px;">${c.name}</div>
          <div style="font-size:13px;color:var(--text2);margin-bottom:4px;">Awarded by Glonax Hospitality Academy</div>
          <div style="font-size:12px;color:var(--text3);margin-bottom:16px;">Issued February 2024</div>
          <span class="badge badge-green" style="margin-bottom:16px;">Verified</span>
          <div style="display:flex;gap:8px;justify-content:center;">
            <button class="btn btn-secondary btn-sm" onclick="showToast('Opening certificate...')">View</button>
            <button class="btn btn-primary btn-sm" onclick="showToast('Downloading certificate...')">⬇ Download</button>
          </div>
        </div>`).join('')}
      ${!certs.length?`<div class="empty-state"><div class="es-icon">🏅</div><h4>No Certificates Yet</h4><p>Complete a course to earn your certification.</p></div>`:''}
    </div>`;
}

/* ═══ APPLICATIONS (RE) ═══ */
function renderApplications(){
  document.getElementById('mainContent').innerHTML=`
    <div class="card">
      <div class="card-header"><div class="card-title">Property Applications & Enquiries</div><button class="btn btn-primary btn-sm" onclick="openServiceModal('real-estate')">New Enquiry</button></div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Property</th><th>Type</th><th>Submitted</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>Industrial Area Unit 12</td><td>Purchase</td><td>Jan 2024</td><td><span class="badge badge-amber">In Conveyancing</span></td></tr>
            <tr><td>Karen Residential Plot</td><td>Valuation</td><td>Feb 2024</td><td><span class="badge badge-green">Completed</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>`;
}

/* ═══ VALUATIONS ═══ */
function renderValuations(){
  document.getElementById('mainContent').innerHTML=`
    <div class="card" style="margin-bottom:18px;">
      <div class="card-header"><div class="card-title">Valuation Reports</div><button class="btn btn-primary btn-sm" onclick="openServiceModal('real-estate')">Request Valuation</button></div>
      <div style="display:grid;gap:10px;">
        <div class="doc-item">
          <div class="doc-icon" style="background:var(--surface2);">📊</div>
          <div style="flex:1;">
            <div class="doc-name">Karen Residential Plot — Valuation</div>
            <div class="doc-meta">Market Value: KES 8,500,000 · Feb 2024</div>
          </div>
          <div class="doc-actions">
            <button class="btn btn-secondary btn-sm" onclick="showToast('Opening report...')">View</button>
            <button class="btn btn-primary btn-sm" onclick="showToast('Downloading...')">⬇</button>
          </div>
        </div>
      </div>
    </div>
    <div class="card" style="background:#F0F9FF;border-color:#BAE6FD;">
      <h4 style="font-family:var(--font-serif);font-size:15px;margin-bottom:6px;">📋 How Valuations Work</h4>
      <p style="font-size:13px;color:var(--text2);">Our certified valuers conduct physical inspections, market comparisons, and produce detailed reports for residential, commercial, and land properties. Turnaround: 3–5 business days.</p>
    </div>`;
}

/* ═══ BRAND ASSETS ═══ */
function renderAssets(){
  document.getElementById('mainContent').innerHTML=`
    <div class="card">
      <div class="card-header"><div class="card-title">Brand Assets</div><button class="btn btn-secondary btn-sm" onclick="showToast('Upload dialog coming soon...')">Upload Asset</button></div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px;">
        ${[
          {name:"Primary Logo",type:"SVG/PNG",icon:"🔵"},
          {name:"Brand Colors",type:"PDF Guide",icon:"🎨"},
          {name:"Typography Kit",type:"ZIP",icon:"🔤"},
          {name:"Social Templates",type:"PSD",icon:"📱"},
          {name:"Business Card",type:"AI",icon:"💼"},
          {name:"Letterhead",type:"DOCX",icon:"📄"},
        ].map(a=>`
          <div class="card card-sm" style="text-align:center;cursor:pointer;" onclick="showToast('Downloading ${a.name}...')">
            <div style="font-size:32px;margin-bottom:8px;">${a.icon}</div>
            <div style="font-size:13px;font-weight:500;">${a.name}</div>
            <div style="font-size:11px;color:var(--text3);">${a.type}</div>
          </div>`).join('')}
      </div>
    </div>`;
}

/* ═══ NOTIFICATIONS PAGE ═══ */
function renderNotifPage(){
  document.getElementById('mainContent').innerHTML=`
    <div class="card">
      <div class="card-header"><div class="card-title">All Notifications</div><button class="btn btn-secondary btn-sm" onclick="markAllRead();renderNotifPage()">Mark All Read</button></div>
      ${NOTIFICATIONS.map(n=>`
        <div class="notif-item ${n.read?'':'unread'}" onclick="markRead(${n.id});renderNotifPage();" style="border-radius:var(--radius);margin-bottom:4px;">
          <div class="notif-icon" style="background:${n.iconBg};">${n.icon}</div>
          <div class="notif-body" style="flex:1;">
            <p><strong>${n.title}</strong> — ${n.msg}</p>
            <span>${n.time} · ${DIVISIONS[n.division].short}</span>
          </div>
          ${!n.read?'<span style="width:8px;height:8px;background:var(--red);border-radius:50%;flex-shrink:0;margin-top:5px;"></span>':''}
        </div>`).join('')}
    </div>`;
}

/* ═══ PROFILE ═══ */
function renderProfile(){
  document.getElementById('mainContent').innerHTML=`
    <div id="profileAlert" class="alert"></div>
    <div class="grid-2">
      <div>
        <div class="card" style="margin-bottom:18px;">
          <div class="card-header"><div class="card-title">Personal Information</div></div>
          <div class="form-section">
            <div class="form-section-title">Basic Details</div>
            <div class="form-row">
              <div class="form-group"><label>Full Name</label><input type="text" id="pf_name" value="${USER.name}"></div>
              <div class="form-group"><label>Client ID</label><input type="text" value="${USER.clientId}" readonly style="background:var(--surface2);color:var(--text3);"></div>
            </div>
            <div class="form-row">
              <div class="form-group"><label>Email</label><input type="email" id="pf_email" value="${USER.email}"></div>
              <div class="form-group"><label>Phone</label><input type="tel" id="pf_phone" value="${USER.phone}"></div>
            </div>
            <div class="form-row">
              <div class="form-group"><label>ID / Passport No.</label><input type="text" id="pf_id" value="${USER.idNumber}"></div>
              <div class="form-group"><label>Address</label><input type="text" id="pf_addr" value="${USER.address}"></div>
            </div>
          </div>
          <button class="btn btn-primary" onclick="saveProfile()">Save Changes</button>
        </div>
      </div>
      <div>
        <div class="card" style="margin-bottom:18px;">
          <div class="card-header"><div class="card-title">Division Profiles</div></div>
          ${Object.entries(USER.profiles).map(([k,v])=>`
            <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-bottom:1px solid var(--border);">
              <div style="display:flex;align-items:center;gap:10px;">
                <span style="font-size:20px;">${DIVISIONS[k].icon}</span>
                <div>
                  <div style="font-size:14px;font-weight:500;">${DIVISIONS[k].name}</div>
                  <div style="font-size:12px;color:var(--text3);">Active since ${USER.joined}</div>
                </div>
              </div>
              <span class="badge badge-green">Active</span>
            </div>`).join('')}
        </div>
        <div class="card">
          <div class="card-header"><div class="card-title">Preferences</div></div>
          <div class="form-group"><label>Preferred Language</label>
            <select><option>English</option><option>Swahili</option></select>
          </div>
          <div class="form-group"><label>Communication Preference</label>
            <select><option>Email & SMS</option><option>Email Only</option><option>SMS Only</option></select>
          </div>
          <button class="btn btn-secondary" onclick="showToast('Preferences saved.')">Save Preferences</button>
        </div>
      </div>
    </div>`;
}

/* ═══ SETTINGS ═══ */
function renderSettings(){
  document.getElementById('mainContent').innerHTML=`
    <div class="grid-2">
      <div>
        <div class="card" style="margin-bottom:18px;">
          <div class="card-header"><div class="card-title">Security</div></div>
          <div style="padding:12px 0;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;">
            <div><div style="font-size:14px;font-weight:500;">Password</div><div style="font-size:12px;color:var(--text3);">Last changed 30 days ago</div></div>
            <button class="btn btn-ghost btn-sm" onclick="openModal('changePassModal')">Change Password</button>
          </div>
          <div style="padding:12px 0;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;">
            <div><div style="font-size:14px;font-weight:500;">Two-Factor Authentication</div><div style="font-size:12px;color:var(--text3);">Adds extra security to your account</div></div>
            <button class="btn btn-secondary btn-sm" onclick="showToast('2FA setup coming soon.')">Enable</button>
          </div>
          <div style="padding:12px 0;display:flex;justify-content:space-between;align-items:center;">
            <div><div style="font-size:14px;font-weight:500;">Active Sessions</div><div style="font-size:12px;color:var(--text3);">1 active session — Nairobi</div></div>
            <button class="btn btn-danger btn-sm" onclick="showToast('All other sessions signed out.')">Revoke All</button>
          </div>
        </div>
        <div class="card">
          <div class="card-header"><div class="card-title">Notifications</div></div>
          ${[
            {label:"Email Notifications",desc:"Receive updates via email"},
            {label:"SMS Alerts",desc:"Transaction and status alerts"},
            {label:"Document Ready Alerts",desc:"When new documents are uploaded"},
            {label:"Marketing Communications",desc:"News and promotions"},
          ].map((n,i)=>`
            <div style="display:flex;justify-content:space-between;align-items:center;padding:11px 0;border-bottom:1px solid var(--border);">
              <div><div style="font-size:13px;font-weight:500;">${n.label}</div><div style="font-size:12px;color:var(--text3);">${n.desc}</div></div>
              <label style="position:relative;display:inline-block;width:40px;height:22px;flex-shrink:0;">
                <input type="checkbox" ${i<3?'checked':''} style="opacity:0;width:0;height:0;" onchange="showToast('Setting updated.')">
                <span style="position:absolute;cursor:pointer;inset:0;background:${i<3?'var(--red)':'var(--border2)'};border-radius:99px;transition:.3s;"></span>
                <span style="position:absolute;content:'';height:16px;width:16px;left:${i<3?'20':'3'}px;bottom:3px;background:#fff;border-radius:50%;transition:.3s;"></span>
              </label>
            </div>`).join('')}
        </div>
      </div>
      <div>
        <div class="card" style="margin-bottom:18px;">
          <div class="card-header"><div class="card-title">Account</div></div>
          <div style="padding:12px 0;border-bottom:1px solid var(--border);">
            <div style="font-size:14px;font-weight:500;margin-bottom:4px;">Download My Data</div>
            <div style="font-size:12px;color:var(--text2);margin-bottom:10px;">Export all your account data including transactions, documents, and profile.</div>
            <button class="btn btn-secondary btn-sm" onclick="showToast('Preparing your data export...')">📥 Request Export</button>
          </div>
          <div style="padding:12px 0;">
            <div style="font-size:14px;font-weight:500;margin-bottom:4px;color:var(--danger);">Close Account</div>
            <div style="font-size:12px;color:var(--text2);margin-bottom:10px;">This action is permanent and cannot be undone.</div>
            <button class="btn btn-danger btn-sm" onclick="showToast('Please contact support to close your account.')">Close Account</button>
          </div>
        </div>
        <div class="card">
          <div class="card-header"><div class="card-title">Billing Preferences</div></div>
          <div class="form-group"><label>Default Payment Method</label>
            <select><option>M-Pesa (Preferred)</option><option>Bank Transfer</option><option>Cheque</option></select>
          </div>
          <div class="form-group"><label>Invoice Currency</label>
            <select><option>KES — Kenyan Shilling</option><option>USD — US Dollar</option></select>
          </div>
          <div class="form-group"><label>Invoice Email</label>
            <input type="email" value="${USER.email}">
          </div>
          <button class="btn btn-secondary" onclick="showToast('Billing preferences saved.')">Save</button>
        </div>
      </div>
    </div>`;
}

/* ═══ SUPPORT ═══ */
function renderSupport(){
  document.getElementById('mainContent').innerHTML=`
    <div class="grid-2">
      <div>
        <div class="card" style="margin-bottom:18px;">
          <div class="card-header"><div class="card-title">Contact Us</div></div>
          <div id="supportAlert" class="alert"></div>
          <div class="form-group"><label>Subject</label><input type="text" id="suppSubj" placeholder="e.g. Document request, payment query..."></div>
          <div class="form-group"><label>Division</label>
            <select id="suppDiv">
              <option>Commercial Agencies (Real Estate)</option>
              <option>Creative Media</option>
              <option>Hospitality Academy</option>
              <option>General / Billing</option>
            </select>
          </div>
          <div class="form-group"><label>Message</label><textarea id="suppMsg" placeholder="Describe your issue or question..."></textarea></div>
          <button class="btn btn-primary" onclick="submitSupport()">Send Message</button>
        </div>
      </div>
      <div>
        <div class="card card-sm" style="margin-bottom:14px;background:var(--navy);color:#fff;">
          <div style="font-size:13px;color:rgba(255,255,255,.5);margin-bottom:10px;text-transform:uppercase;letter-spacing:.06em;font-size:11px;">Direct Contact</div>
          ${[
            {icon:"📞",label:"Main Line",val:"0732 028 129"},
            {icon:"📞",label:"Alternate",val:"0716 517 561"},
            {icon:"📞",label:"Alternate 2",val:"0783 517 561"},
            {icon:"📍",label:"Office",val:"Gate House Nakuru, 5th Floor, Suite 506"},
            {icon:"🌐",label:"Social",val:"@glonaxholdings"},
          ].map(c=>`
            <div style="display:flex;gap:10px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.08);">
              <span>${c.icon}</span>
              <div><div style="font-size:12px;color:rgba(255,255,255,.45);">${c.label}</div><div style="font-size:14px;font-weight:500;">${c.val}</div></div>
            </div>`).join('')}
        </div>
        <div class="card card-sm" style="margin-bottom:14px;">
          <div style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:var(--text3);margin-bottom:12px;">Office Hours</div>
          <div style="font-size:13px;color:var(--text2);">Monday – Friday: 8:00 AM – 6:00 PM</div>
          <div style="font-size:13px;color:var(--text2);">Saturday: 9:00 AM – 2:00 PM</div>
          <div style="font-size:13px;color:var(--text3);">Sunday: Closed</div>
        </div>
        <div class="card card-sm">
          <div style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:var(--text3);margin-bottom:12px;">Recent Tickets</div>
          <div style="font-size:13px;color:var(--text3);">No open support tickets.</div>
        </div>
      </div>
    </div>`;
}

/* ═══ NOTIFICATION PANEL ═══ */
function renderNotifications(){
  const list=document.getElementById('notifList');
  list.innerHTML=NOTIFICATIONS.map(n=>`
    <div class="notif-item ${n.read?'':'unread'}" onclick="markRead(${n.id})">
      <div class="notif-icon" style="background:${n.iconBg};">${n.icon}</div>
      <div class="notif-body">
        <p><strong>${n.title}</strong> — ${n.msg}</p>
        <span>${n.time} · ${DIVISIONS[n.division].short}</span>
      </div>
    </div>`).join('');
  document.getElementById('notifDot').style.display=NOTIFICATIONS.filter(n=>!n.read).length?'block':'none';
}

function toggleNotif(){
  notifOpen=!notifOpen;
  document.getElementById('notifPanel').classList.toggle('open',notifOpen);
}

function markRead(id){
  const n=NOTIFICATIONS.find(n=>n.id===id);
  if(n) n.read=true;
  renderNotifications();
}

function markAllRead(){
  NOTIFICATIONS.forEach(n=>n.read=true);
  renderNotifications();
  showToast('All notifications marked as read');
}

/* ═══ MODALS ═══ */
function openModal(id){document.getElementById(id).classList.add('open');}
function closeModal(id){document.getElementById(id).classList.remove('open');}

function changePassword(){
  const cur=document.getElementById('curPass').value;
  const np=document.getElementById('newPass').value;
  const cp=document.getElementById('confPass').value;
  const al=document.getElementById('passAlert');
  al.className='alert';
  if(!cur||!np||!cp){al.className='alert alert-danger';al.textContent='All fields required.';al.style.display='block';return;}
  if(np!==cp){al.className='alert alert-danger';al.textContent='Passwords do not match.';al.style.display='block';return;}
  if(np.length<8){al.className='alert alert-danger';al.textContent='Password must be at least 8 characters.';al.style.display='block';return;}
  al.className='alert alert-success';al.textContent='Password updated successfully!';al.style.display='block';
  setTimeout(()=>closeModal('changePassModal'),2000);
}

function openServiceModal(div){
  const d=DIVISIONS[div];
  const services=USER.profiles[div].services;
  document.getElementById('serviceModalTitle').textContent=`Request — ${d.name}`;
  document.getElementById('serviceModalSub').textContent=`Submit a service request and we'll respond within 24 hours`;
  document.getElementById('serviceType').innerHTML=services.map(s=>`<option>${s}</option>`).join('');
  document.getElementById('serviceModalAlert').style.display='none';
  openModal('serviceModal');
}

function submitServiceRequest(){
  const al=document.getElementById('serviceModalAlert');
  al.style.display='block';
  setTimeout(()=>closeModal('serviceModal'),2500);
}

/* ═══ PROFILE SAVE ═══ */
function saveProfile(){
  USER.name=document.getElementById('pf_name').value||USER.name;
  USER.email=document.getElementById('pf_email').value||USER.email;
  USER.phone=document.getElementById('pf_phone').value||USER.phone;
  USER.idNumber=document.getElementById('pf_id').value||USER.idNumber;
  USER.address=document.getElementById('pf_addr').value||USER.address;
  document.getElementById('sidebarName').textContent=USER.name;
  document.getElementById('sidebarAvatar').textContent=getInitials(USER.name);
  const al=document.getElementById('profileAlert');
  al.className='alert alert-success';al.textContent='Profile updated successfully!';al.style.display='block';
  setTimeout(()=>al.style.display='none',3000);
}

/* ═══ STATEMENT DOWNLOAD ═══ */
function downloadStatement(format='pdf'){
  const from=document.getElementById('stFrom')?.value||'';
  const to=document.getElementById('stTo')?.value||'';
  showToast(`Generating ${format.toUpperCase()} statement${from?` (${from} to ${to})`:''}...`);
}

/* ═══ SUPPORT SUBMIT ═══ */
function submitSupport(){
  const al=document.getElementById('supportAlert');
  al.className='alert alert-success';
  al.textContent='Message sent! Our team will respond within 1 business day.';
  al.style.display='block';
  document.getElementById('suppSubj').value='';
  document.getElementById('suppMsg').value='';
  setTimeout(()=>al.style.display='none',4000);
}

/* ═══ TOAST ═══ */
let toastTimer;
function showToast(msg){
  let t=document.getElementById('portalToast');
  if(!t){
    t=document.createElement('div');
    t.id='portalToast';
    t.style.cssText='position:fixed;bottom:28px;right:28px;background:var(--navy);color:#fff;padding:12px 18px;border-radius:10px;font-size:14px;font-weight:500;z-index:999;box-shadow:var(--shadow-lg);transition:all .3s ease;max-width:320px;line-height:1.4;';
    document.body.appendChild(t);
  }
  t.textContent=msg;t.style.opacity='1';t.style.transform='translateY(0)';
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>{t.style.opacity='0';t.style.transform='translateY(8px)';},3000);
}

/* ═══ MOBILE SIDEBAR ═══ */
function openSidebar(){
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebarOverlay').classList.add('open');
}
function closeSidebar(){
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('open');
}

/* Close notif on outside click */
document.addEventListener('click',function(e){
  const panel=document.getElementById('notifPanel');
  const btn=document.getElementById('notifBtn');
  if(panel&&!panel.contains(e.target)&&btn&&!btn.contains(e.target)&&notifOpen){
    notifOpen=false;panel.classList.remove('open');
  }
});

window.addEventListener('DOMContentLoaded', () => {
  initPortal(
    console.log("INIT START")
  );
});