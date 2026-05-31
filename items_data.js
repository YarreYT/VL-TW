/* ══════════════════════════════════════════════════════════════════════
   items_data.js  —  Все данные предметов и курс золота
   Подключается в index.html через <script src="items_data.js">
   ПЕРЕД основным скриптом страницы.

   Что здесь хранится:
     ED_GOLD_RATE     — курс TP → Gold (DEFAULT_RATE)
     VL_DB            — все предметы (elements, gear, cosmetic, gamepasses, chromas, other)
     VL_VARIANTS_DB   — данные элементов по вариантам
     VL_GEAR_ROLLS    — роллы для Gear (regular / corrupted)
     RARITY_CFG       — конфиг редкостей (цвет, метка, glow)
     STATUS_CFG       — конфиг статусов (цвет, метка)
     STATUS_DESC      — описания статусов (EN)
══════════════════════════════════════════════════════════════════════ */

/* ── Курс золота: 1 TP = ED_GOLD_RATE Gold ──
   Используется в vlFmtGold() и в панели TP Rate.
   Чтобы изменить курс — меняй только это число. */
window.ED_GOLD_RATE = 150000;


/* ══════════════════════════════════════════════
   Основная база данных предметов
══════════════════════════════════════════════ */
window.VL_DB = {

  elements: [
    /* ── Rare ── */
    { id:'earth',          name:"Earth",          rarity:'rare',      demand:1,   value:1,     status:null      },
    { id:'water',          name:"Water",          rarity:'rare',      demand:1,   value:1,     status:null      },
    { id:'nature',         name:"Nature",         rarity:'rare',      demand:1.5, value:1,     status:null      },
    { id:'fire',           name:"Fire",           rarity:'rare',      demand:1.2, value:1,     status:null      },
    { id:'sand',           name:"Sand",           rarity:'rare',      demand:1,   value:1,     status:null      },
    { id:'air',            name:"Air",            rarity:'rare',      demand:0.8, value:1,     status:null      },
    /* ── Epic ── */
    { id:'lightning',      name:"Lightning",      rarity:'epic',      demand:2,   value:5,     status:null      },
    { id:'light',          name:"Light",          rarity:'epic',      demand:1.5, value:3,     status:null      },
    { id:'smoke',          name:"Smoke",          rarity:'epic',      demand:1,   value:3,     status:null      },
    { id:'ice',            name:"Ice",            rarity:'epic',      demand:2,   value:5,     status:null      },
    /* ── Legendary ── */
    { id:'dragon',         name:"Dragon",         rarity:'legendary', demand:2,   value:10,    status:null      },
    { id:'gravity',        name:"Gravity",        rarity:'legendary', demand:2.5, value:15,    status:'hyped'   },
    { id:'darkness',       name:"Darkness",       rarity:'legendary', demand:2,   value:10,    status:null      },
    { id:'angel',          name:"Angel",          rarity:'legendary', demand:2,   value:10,    status:null      },
    { id:'lava',           name:"Lava",           rarity:'legendary', demand:1.5, value:10,    status:null      },
    /* ── Mythic ── */
    { id:'reaper',         name:"Reaper",         rarity:'mythic',    demand:3,   value:60,    status:null      },
    { id:'mech',           name:"Mech",           rarity:'mythic',    demand:2,   value:60,    status:null      },
    { id:'galaxy',         name:"Galaxy",         rarity:'mythic',    demand:3.5, value:60,    status:null      },
    { id:'kitsune',        name:"Kitsune",        rarity:'mythic',    demand:2.5, value:60,    status:null      },
    /* ── Secret ── */
    { id:'time',           name:"Time",           rarity:'secret',    demand:1.5, value:200,   status:null      },
    /* ── Mythic (extra) ── */
    { id:'phantom',        name:"Phantom",        rarity:'mythic',    demand:5,   value:6000,  status:'rising'  },
    { id:'nightmare',      name:"Nightmare",      rarity:'mythic',    demand:5,   value:5000,  status:'rising'  },
    { id:'astra',          name:"Astra",          rarity:'mythic',    demand:4,   value:4000,  status:'rising'  },
    { id:'infinity',       name:"Infinity",       rarity:'mythic',    demand:3.5, value:12750, status:null      },
    { id:'solar',          name:"Solar",          rarity:'mythic',    demand:3,   value:18500, status:null      },
    { id:'bunny',          name:"Bunny",          rarity:'mythic',    demand:3,   value:3250,  status:'rising'  },
    { id:'krampus',        name:"Krampus",        rarity:'mythic',    demand:1.8, value:1000,  status:null      },
    /* ── Exclusive ── */
    { id:'sunlar',         name:"Sunlar",         rarity:'exclusive', demand:4.5, value:2250,  status:null      },
    { id:'fools_phantom',  name:"Fool's Phantom", rarity:'exclusive', demand:3,   value:13500, status:null      },
  ],

  gear: [
    /* ── Weapons ── */
    { id:'conqblade',     name:"Conqueror's Blade",            rarity:'mythic',    imgId:'conqblade',      subtype:'weapon', status:null },
    { id:'poseidtrident', name:"Poseidon's Trident",           rarity:'mythic',    imgId:'poseidtrident',  subtype:'weapon', status:null },
    { id:'doombringer',   name:"Doombringer",                  rarity:'legendary', imgId:'doombringer',    subtype:'weapon', status:null },
    { id:'grimshadekat',  name:"Grimshade Katana",             rarity:'legendary', imgId:'grimshadekat',   subtype:'weapon', status:null },
    { id:'magmaedge',     name:"Magma's Edge",                 rarity:'mythic',    imgId:'magmaedge',      subtype:'weapon', status:null },
    { id:'diamondcrack',  name:"Diamond Cracker",              rarity:'legendary', imgId:'diamondcrack',   subtype:'weapon', status:null },
    { id:'abysstrident',  name:"Abyssal Trident",              rarity:'ascended',  imgId:'abysstrident',   subtype:'weapon', status:null },
    { id:'ascdaggers',    name:"Ascended Daggers",             rarity:'ascended',  imgId:'ascdaggers',     subtype:'weapon', status:null },
    { id:'magmaedgev2',   name:"Magma's Edge V2",              rarity:'ascended',  imgId:'magmaedgev2',    subtype:'weapon', status:null },
    { id:'lightkatanav2', name:"Lightning Katana V2",          rarity:'ascended',  imgId:'lightkatanav2',  subtype:'weapon', status:null },
    { id:'mentav2',       name:"Menta Blade V2",               rarity:'ascended',  imgId:'mentav2',        subtype:'weapon', status:null },
    { id:'woodenv2',      name:"Wooden Sword V2",              rarity:'ascended',  imgId:'woodenv2',       subtype:'weapon', status:null },
    { id:'ascvoidblade',  name:"Ascended Voidblade",           rarity:'ascended',  imgId:'ascvoidblade',   subtype:'weapon', status:null },
    { id:'cupidfury',     name:"Cupid's Fury",                 rarity:'ascended',  imgId:'cupidfury',      subtype:'weapon', status:null },
    { id:'cupidwrath',    name:"Cupid's Wrath",                rarity:'secret',    imgId:'cupidwrath',     subtype:'weapon', status:null },
    { id:'tlconqblade',   name:"Timelost Conqueror's Blade",   rarity:'mythic',    imgId:'tlconqblade',    subtype:'weapon', status:null },
    { id:'tlconqbladele', name:"Timelost Conqueror's Blade LE",rarity:'mythic',    imgId:'tlconqblade',    subtype:'weapon', status:null },
    { id:'glitchedstaff', name:"Glitched Staff",               rarity:'secret',    imgId:'glitchedstaff',  subtype:'weapon', status:null },
    { id:'viltronstaff',  name:"Viltron Staff",                rarity:'ascended',  imgId:'glitchedstaff',  subtype:'weapon', status:null },
    { id:'seriously',     name:"Serious Staff",                rarity:'secret',    imgId:'seriously',      subtype:'weapon', status:null },
    { id:'easterstaff',   name:"Easter Spear",                 rarity:'secret',    imgId:'easterstaff',    subtype:'weapon', status:null },
    /* ── Armor ── */
    { id:'fzset',         name:"Furious Zeus Set",             rarity:'mythic',    imgId:'fzset',          subtype:'armor',  status:null },
    { id:'zset',          name:"Zeus Set",                     rarity:'legendary', imgId:'zset',           subtype:'armor',  status:null },
    { id:'hadesset',      name:"Hades Set",                    rarity:'mythic',    imgId:'hadesset',       subtype:'armor',  status:null },
    { id:'kronaxset',     name:"Kronax Set",                   rarity:'mythic',    imgId:'kronaxset',      subtype:'armor',  status:null },
    { id:'heroickronax',  name:"Heroic Kronax Set",            rarity:'mythic',    imgId:'kronaxset',      subtype:'armor',  status:null },
  ],

  cosmetic: [
    /* ── Cosmetic Weapons ── */
    { id:'betadaggers',       name:"Beta Daggers",             rarity:'mythic',    imgId:'betadaggers',       subtype:'weapon', status:null, value:9000,  demand:3    },
    { id:'betascythe',        name:"Beta Scythe",              rarity:'mythic',    imgId:'betascythe',        subtype:'weapon', status:null, value:4500,  demand:2    },
    { id:'betahammer',        name:"Beta Hammer",              rarity:'mythic',    imgId:'betahammer',        subtype:'weapon', status:null, value:2500,  demand:1.5  },
    { id:'betabattleaxe',     name:"Beta Battleaxe",           rarity:'mythic',    imgId:'betabattleaxe',     subtype:'weapon', status:null, value:2500,  demand:1.25 },
    { id:'betaaxe',           name:"Beta Axe",                 rarity:'mythic',    imgId:'betaaxe',           subtype:'weapon', status:null, value:1500,  demand:1.25 },
    { id:'betadeathadder',    name:"Beta Deathadder",          rarity:'mythic',    imgId:'betadeathadder',    subtype:'weapon', status:null, value:1250,  demand:1.5  },
    { id:'amberfallaxe',      name:"Amberfall Axe",            rarity:'mythic',    imgId:'amberfallaxe',      subtype:'weapon', status:null, value:17500, demand:2    },
    { id:'twilightbloom',     name:"Twilight Bloom",           rarity:'legendary', imgId:'twilightbloom',     subtype:'weapon', status:null, value:6000,  demand:1    },
    { id:'rootbinder',        name:"Rootbinder",               rarity:'legendary', imgId:'rootbinder',        subtype:'weapon', status:null, value:5000,  demand:1    },
    { id:'amberbloomblade',   name:"Amberbloom Blade",         rarity:'legendary', imgId:'amberbloomblade',   subtype:'weapon', status:null, value:5000,  demand:0.85 },
    { id:'crimsondeathadder', name:"Crimson Deathadder",       rarity:'legendary', imgId:'crimsondeathadder', subtype:'weapon', status:null, value:2500,  demand:1.5  },
    { id:'serpentstaff',      name:"Serpent's Verdant Staff",  rarity:'legendary', imgId:'serpentstaff',      subtype:'weapon', status:null, value:1500,  demand:0.35 },
    { id:'stormcallerglaive', name:"Stormcaller's Glavie",     rarity:'legendary', imgId:'stormcallerglaive', subtype:'weapon', status:null, value:1500,  demand:0.25 },
    { id:'webweaverscythe',   name:"Webweaver Scythe",         rarity:'mythic',    imgId:'webweaverscythe',   subtype:'weapon', status:null, value:750,   demand:0.5  },
    { id:'ghastlyskeleblade', name:"Ghastly Skeleblade",       rarity:'legendary', imgId:'ghastlyskeleblade', subtype:'weapon', status:null, value:1000,  demand:0.5  },
    { id:'soulbreaker',       name:"Soulbreaker",              rarity:'mythic',    imgId:'soulbreaker',       subtype:'weapon', status:null, value:600,   demand:0    },
    { id:'krampusscythe',     name:"Krampus Scythe",           rarity:'mythic',    imgId:'krampusscythe',     subtype:'weapon', status:null, value:12500, demand:2.5  },
    { id:'verdantblade',      name:"Verdant Blade",            rarity:'mythic',    imgId:'verdantblade',      subtype:'weapon', status:null, value:8500,  demand:2.5  },
    { id:'giftedblade',       name:"Gifted Blade",             rarity:'mythic',    imgId:'giftedblade',       subtype:'weapon', status:null, value:2000,  demand:0.5  },
    { id:'gingerscythe',      name:"Ginger Scythe",            rarity:'mythic',    imgId:'gingerscythe',      subtype:'weapon', status:null, value:1500,  demand:0.5  },
    { id:'giftwrappedaxe',    name:"Giftwrapped Axe",          rarity:'legendary', imgId:'giftwrappedaxe',    subtype:'weapon', status:null, value:1000,  demand:0.25 },
    { id:'cubescythe',        name:"Cube Scythe",              rarity:'legendary', imgId:'cubescythe',        subtype:'weapon', status:null, value:750,   demand:1    },
    { id:'galacticfrostaxe',  name:"Galactic Frost Axe",       rarity:'legendary', imgId:'galacticfrostaxe',  subtype:'weapon', status:null, value:2000,  demand:1    },
    { id:'moltenscythe',      name:"Molten Scythe",            rarity:'legendary', imgId:'moltenscythe',      subtype:'weapon', status:null, value:4500,  demand:1.25 },
    { id:'corruptedaxe',      name:"Corrupted Axe",            rarity:'legendary', imgId:'corruptedaxe',      subtype:'weapon', status:null, value:850,   demand:0.5  },
    { id:'dualdragonitespear',name:"Dual Dragonite Spear",     rarity:'mythic',    imgId:'dualdragonitespear',subtype:'weapon', status:null, value:15000, demand:2    },
    { id:'dragonitespear',    name:"Dragonite Spear",          rarity:'mythic',    imgId:'dragonitespear',    subtype:'weapon', status:null, value:5000,  demand:1.25 },
    { id:'theolympian',       name:"The Olympian",             rarity:'legendary', imgId:'theolympian',       subtype:'weapon', status:null, value:600,   demand:0.25 },
    { id:'valkyrieblade',     name:"Valkyrie Blade",           rarity:'legendary', imgId:'valkyrieblade',     subtype:'weapon', status:null, value:3500,  demand:1.5  },
    { id:'bunnyspear',        name:"Bunny Spear",              rarity:'legendary', imgId:'bunnyspear',        subtype:'weapon', status:null, value:800,   demand:0.75 },
    { id:'bunnystaff',        name:"Bunny Staff",              rarity:'legendary', imgId:'bunnystaff',        subtype:'weapon', status:null, value:800,   demand:0.75 },
    { id:'bunnyaxe',          name:"Bunny Axe",                rarity:'legendary', imgId:'bunnyspear',        subtype:'weapon', status:null, value:800,   demand:0.75 },
    { id:'tempestclaw',       name:"Tempest Claw",             rarity:'legendary', imgId:'tempestclaw',       subtype:'weapon', status:null, value:1500,  demand:0.75 },
    { id:'dawnbringer',       name:"Dawnbringer",              rarity:'legendary', imgId:'dawnbringer',       subtype:'weapon', status:null, value:1000,  demand:0.5  },
    { id:'soulspire',         name:"Soul Spire",               rarity:'legendary', imgId:'soulspire',         subtype:'weapon', status:null, value:1000,  demand:0.5  },
    { id:'thunderrift',       name:"Thunder Rift",             rarity:'legendary', imgId:'thunderrift',       subtype:'weapon', status:null, value:750,   demand:0    },
    { id:'thunderblade',      name:"Thunderblade",             rarity:'legendary', imgId:'thunderblade',      subtype:'weapon', status:null, value:550,   demand:0    },
    { id:'minutehand',        name:"Minutehand",               rarity:'mythic',    imgId:'minutehand',        subtype:'weapon', status:null, value:300,   demand:0.25 },
    { id:'hourhand',          name:"Hourhand",                 rarity:'legendary', imgId:'hourhand',          subtype:'weapon', status:null, value:600,   demand:0.5  },
    { id:'violetbattleaxe',   name:"Violet Battleaxe",         rarity:'mythic',    imgId:'violetbattleaxe',   subtype:'weapon', status:null, value:45000, demand:1.5  },
    { id:'top3sword',         name:"Top 3 Sword",              rarity:'mythic',    imgId:'top3sword',         subtype:'weapon', status:null, value:18000, demand:2    },
    { id:'top10sword',        name:"Top 10 Sword",             rarity:'legendary', imgId:'top10sword',        subtype:'weapon', status:null, value:1000,  demand:0.5  },
    /* ── Cosmetic Armor ── */
    { id:'emberknightset',    name:"Ember Knight Set",         rarity:'mythic',    imgId:'emberknightset',    subtype:'armor',  status:'rising', value:85000, demand:3    },
    { id:'redphantomset',     name:"Red Phantom Set",          rarity:'mythic',    imgId:'redphantomset',     subtype:'armor',  status:null, value:37500, demand:2    },
    { id:'autumnspiritset',   name:"Autumn Spirit Set",        rarity:'mythic',    imgId:'autumnspiritset',   subtype:'armor',  status:null, value:15000,  demand:1.5  },
    { id:'horsemanset',       name:"Horseman Set",             rarity:'mythic',    imgId:'horsemanset',       subtype:'armor',  status:null, value:7500,  demand:0.5  },
    { id:'astralaegisset',    name:"Astral Aegis Set",         rarity:'mythic',    imgId:'astralaegisset',    subtype:'armor',  status:null, value:6000,  demand:1    },
    { id:'towerkingset',      name:"Tower King Set",           rarity:'exclusive', imgId:'towerkingset',      subtype:'armor',  status:null, value:6000,  demand:0.75 },
    { id:'vampireset',        name:"Vampire Set",              rarity:'mythic',    imgId:'vampireset',        subtype:'armor',  status:null, value:5000,  demand:0.5  },
    { id:'krampusset',        name:"Krampus Set",              rarity:'mythic',    imgId:'krampusset',        subtype:'armor',  status:null, value:5000,  demand:0.5  },
    { id:'chainedoverlordset',name:"Chained Overlord Set",     rarity:'mythic',    imgId:'chainedoverlordset',subtype:'armor',  status:null, value:3500,  demand:1    },
    { id:'mummyset',          name:"Mummy Set",                rarity:'mythic',    imgId:'mummyset',          subtype:'armor',  status:null, value:3000,  demand:0.75 },
    { id:'scorchguardset',    name:"Scorchguard Set",          rarity:'mythic',    imgId:'scorchguardset',    subtype:'armor',  status:null, value:3000,  demand:0.65 },
    { id:'voltsentinelset',   name:"Volt Sentinel Set",        rarity:'mythic',    imgId:'voltsentinelset',   subtype:'armor',  status:null, value:5000,  demand:0.35 },
    { id:'stormborneset',     name:"Stormborne Set",           rarity:'mythic',    imgId:'stormborneset',     subtype:'armor',  status:null, value:3000,  demand:0.75 },
    { id:'tempestbreakerset', name:"Tempestbreaker Set",       rarity:'mythic',    imgId:'tempestbreakerset', subtype:'armor',  status:null, value:3000,  demand:0.75 },
    { id:'brightcoreset',     name:"Brightcore Set",           rarity:'mythic',    imgId:'brightcoreset',     subtype:'armor',  status:null, value:2000,   demand:0.25 },
    { id:'voidcoreset',       name:"Voidcore Set",             rarity:'mythic',    imgId:'voidcoreset',       subtype:'armor',  status:null, value:2000,   demand:0.25 },
    { id:'betaset',           name:"Beta Set",                 rarity:'mythic',    imgId:'betaset',           subtype:'armor',  status:null, value:3000,  demand:1    },
    { id:'darkknightset',     name:"Dark Knight Set",          rarity:'mythic',    imgId:'darkknightset',     subtype:'armor',  status:null, value:3000,  demand:0.75 },
    { id:'darknexusset',      name:"Dark Nexus Set",           rarity:'mythic',    imgId:'darknexusset',      subtype:'armor',  status:null, value:3000,  demand:0.75 },
    { id:'ghastlyset',        name:"Ghastly Set",              rarity:'mythic',    imgId:'ghastlyset',        subtype:'armor',  status:null, value:2500,   demand:0.5  },
    { id:'snowflakeset',      name:"Snowflake Set",            rarity:'mythic',    imgId:'snowflakeset',      subtype:'armor',  status:null, value:2000,   demand:0.35 },
    { id:'gingerbreadset',    name:"Gingerbread Guardian Set", rarity:'mythic',    imgId:'gingerbreadset',    subtype:'armor',  status:null, value:2000,   demand:0.25 },
    { id:'frostskinset',      name:"Frostskin Set",            rarity:'mythic',    imgId:'frostskinset',      subtype:'armor',  status:null, value:2000,   demand:0.25 },
    { id:'phantomknightset',  name:"Phantom Knight Set",       rarity:'mythic',    imgId:'phantomknightset',  subtype:'armor',  status:null, value:1500,   demand:0.25 },
    { id:'aresset',           name:"Ares Set",                 rarity:'mythic',    imgId:'aresset',           subtype:'armor',  status:null, value:1500,   demand:0.25 },
    { id:'plaguedoctorset',   name:"Plague Doctor Set",        rarity:'mythic',    imgId:'plaguedoctorset',   subtype:'armor',  status:null, value:1000,   demand:0.25 },
    { id:'spectralset',       name:"Spectral Set",             rarity:'mythic',    imgId:'spectralset',       subtype:'armor',  status:null, value:240,    demand:0    },
    { id:'witchset',          name:"Witch Set",                rarity:'mythic',    imgId:'witchset',          subtype:'armor',  status:null, value:240,    demand:0    },
    { id:'spookyamethystset', name:"Spooky Amethyst Set",      rarity:'mythic',    imgId:'spookyamethystset', subtype:'armor',  status:null, value:180,    demand:0    },
  ],

  gamepasses: [
    { id:'gp_x2dungeonloot',    name:"x2 Dungeon Loot",    rarity:'exclusive', imgId:'gp_x2dungeonloot',    subtype:'gamepass', status:null, value:7500, demand:3 },
    { id:'gp_x2elementmastery', name:"x2 Element Mastery", rarity:'exclusive', imgId:'gp_x2elementmastery', subtype:'gamepass', status:null, value:5000, demand:3 },
    { id:'gp_x2gold',           name:"x2 Gold",            rarity:'exclusive', imgId:'gp_x2gold',           subtype:'gamepass', status:null, value:5000, demand:4 },
    { id:'gp_premiumpass',      name:"Premium Pass",       rarity:'exclusive', imgId:'gp_premiumpass',      subtype:'gamepass', status:null, value:5000, demand:3 },
    { id:'gp_summonluck',       name:"Summon Luck",        rarity:'exclusive', imgId:'gp_summonluck',       subtype:'gamepass', status:null, value:4000, demand:3 },
    { id:'gp_vip',              name:"VIP",                rarity:'exclusive', imgId:'gp_vip',              subtype:'gamepass', status:null, value:3500, demand:3 },
    { id:'gp_extrastorage',     name:"Extra Storage",      rarity:'exclusive', imgId:'gp_extrastorage',     subtype:'gamepass', status:null, value:2000, demand:3 },
  ],

  chromas: [
    { id:'candy_nightmare',   name:"Candy Nightmare",   rarity:'legendary', demand:3,   value:'6500',        status:'rising', category:'chromas' },
    { id:'spooky_galaxy',     name:"Spooky Galaxy",     rarity:'mythic',    demand:3.5, value:'5000',        status:'rising', category:'chromas' },
    { id:'candy_reaper',      name:"Candy Reaper",      rarity:'legendary', demand:2,   value:'2000',        status:null,     category:'chromas' },
    { id:'turkey_mech',       name:"Turkey Mech",       rarity:'exclusive', demand:2.5, value:'1250',        status:null,     category:'chromas' },
    { id:'og_phantom',        name:"OG Phantom",        rarity:'rare',      demand:3,   value:'1000',        status:null,     category:'chromas' },
    { id:'santa_reaper',      name:"Santa Reaper",      rarity:'exclusive', demand:2,   value:'5000-80000',  status:null,     category:'chromas' },
    { id:'santa_mech',        name:"Santa Mech",        rarity:'exclusive', demand:2.5, value:'5000-80000',  status:null,     category:'chromas' },
    { id:'toxic_dragon',      name:"Toxic Dragon",      rarity:'mythic',    demand:2,   value:'240',         status:null,     category:'chromas' },
    { id:'blood_darkness',    name:"Blood Darkness",    rarity:'mythic',    demand:1,   value:'600',         status:null,     category:'chromas' },
    { id:'amber_lightning',   name:"Amber Lightning",   rarity:'legendary', demand:2,   value:'1000',        status:null,     category:'chromas' },
    { id:'blood_kitsune',     name:"Blood Kitsune",     rarity:'mythic',    demand:2,   value:'600',         status:null,     category:'chromas' },
    { id:'emerald_lightning', name:"Emerald Lightning", rarity:'legendary', demand:0,   value:'60',          status:null,     category:'chromas' },
    { id:'pumpkin_phantom',   name:"Pumpkin Phantom",   rarity:'mythic',    demand:0,   value:'60',          status:null,     category:'chromas' },
    { id:'nightmare_dragon',  name:"Nightmare Dragon",  rarity:'mythic',    demand:0,   value:'60',          status:null,     category:'chromas' },
    { id:'bone_reaper',       name:"Bone Reaper",       rarity:'mythic',    demand:0,   value:'60',          status:null,     category:'chromas' },
    { id:'festive_astra',     name:"Festive Astra",     rarity:'mythic',    demand:0,   value:'60',          status:null,     category:'chromas' },
    { id:'candy_lava',        name:"Candy Lava",        rarity:'legendary', demand:2,   value:'1000',        status:null,     category:'chromas' },
    { id:'spectral_light',    name:"Spectral Light",    rarity:'legendary', demand:2,   value:'1000',        status:null,     category:'chromas' },
    { id:'evil_krampus',      name:"Evil Krampus",      rarity:'legendary', demand:0,   value:'60',          status:null,     category:'chromas' },
    { id:'celestial_krampus', name:"Celestial Krampus", rarity:'mythic',    demand:0,   value:'60',          status:null,     category:'chromas' },
    { id:'afterimage_time',   name:"Afterimage Time",   rarity:'secret',    demand:0,   value:'60',          status:null,     category:'chromas' },
    { id:'frosted_krampus',   name:"Frosted Krampus",   rarity:'mythic',    demand:0,   value:'60',          status:null,     category:'chromas' },
    { id:'ethereal_angel',    name:"Ethereal Angel",    rarity:'mythic',    demand:1,   value:'60',          status:null,     category:'chromas' },
    { id:'love_dragon',       name:"Love Dragon",       rarity:'exclusive', demand:0,   value:'60',          status:null,     category:'chromas' },
    { id:'cupids_angel',      name:"Cupid Angel",       rarity:'mythic',    demand:4,   value:'25000',       status:'rising', category:'chromas' },
    { id:'love_kitsune',      name:"Love Kitsune",      rarity:'exclusive', demand:3.5, value:'7500',        status:'rising', category:'chromas' },
    { id:'candy_heart_ice',   name:"Candy-Heart Ice",   rarity:'legendary', demand:0,   value:'60',          status:null,     category:'chromas' },
    { id:'golden_bunny',      name:"Golden Bunny",      rarity:'mythic',    demand:1,   value:'240',         status:null,     category:'chromas' },
  ],

  other: [
    /* ── Cases ── */
    { id:'phantom_case',    name:"Phantom Case",    rarity:'mythic',    demand:2, value:8500,  status:null },
    { id:'winter_case',     name:"Winter Case",     rarity:'mythic',    demand:2, value:12000, status:null },
    { id:'halloween_case',  name:"Halloween Case",  rarity:'mythic',    demand:2, value:2500,  status:null },
    { id:'spooky_case',     name:"Spooky Case",     rarity:'mythic',    demand:2, value:2000,  status:null },
    { id:'nightmare_case',  name:"Nightmare Case",  rarity:'mythic',    demand:2, value:1200,  status:null },
    { id:'christmas_case',  name:"Christmas Case",  rarity:'mythic',    demand:2, value:800,   status:null },
    { id:'easter_case',     name:"Easter Case",     rarity:'legendary', demand:0, value:180,   status:null },
    { id:'raid_case',       name:"Raid Case",       rarity:'legendary', demand:0, value:25,    status:null },
    { id:'christmas_gift',  name:"Christmas Gift",  rarity:'legendary', demand:0, value:240,   status:null },
    /* ── Chromatica ── */
    { id:'chromatic_cataclysm', name:"Chromatic Cataclysm", rarity:'ascended', demand:2, value:600, status:null },
    { id:'chromatic_prism',     name:"Chromatic Prism",     rarity:'mythic',   demand:3, value:300, status:null },
    { id:'dilation_schism',     name:"Dilation Schism",     rarity:'mythic',   demand:1, value:300, status:null },
    /* ── 2x EXP Boosts ── */
    { id:'exp_12h', name:"12 Hours 2x EXP", rarity:'legendary', demand:2.5, value:1000,  status:null },
    { id:'exp_6h',  name:"6 Hours 2x EXP",  rarity:'epic',      demand:2.5, value:750,  status:null },
    { id:'exp_1h',  name:"1 Hour 2x EXP",   rarity:'rare',      demand:2.5, value:150,  status:null },
    { id:'exp_15m', name:"15 Mins 2x EXP",  rarity:'common',    demand:2, value:60,   status:null },
  ],

};


/* ══════════════════════════════════════════════
   Данные по вариантам для Elements.
   Редкость берётся из VL_DB.elements (общая для всех вариантов).
   Если предмета нет в варианте — он не показывается в списке.
══════════════════════════════════════════════ */
window.VL_VARIANTS_DB = {

  permanent: {
    reaper:   { value:1000,  demand:0.5, status:null       },
    armored:  { value:1000,  demand:0.5, status:null       },
    galaxy:   { value:1000,  demand:0.5, status:null       },
    mech:     { value:1000,  demand:0.5, status:null       },
    kitsune:  { value:1000,  demand:0.5, status:null       },
    time:     { value:3500,  demand:2,   status:null       },
    krampus:  { value:12500, demand:0.5, status:null       },
    bunny:    { value:15000, demand:0.5, status:'lowering' },
    dragon:   { value:30,    demand:0.5, status:null       },
    gravity:  { value:30,    demand:0.5, status:null       },
    angel:    { value:30,    demand:0.5, status:null       },
    light:    { value:10,    demand:0.5, status:null       },
  },

  corrupted: {
    solar:    { value:375000, demand:2.5, status:'unstable' },
    infinity: { value:175000, demand:2.5, status:null       },
    phantom:  { value:150000, demand:3.5, status:null       },
    nightmare:{ value:100000, demand:3.5, status:null       },
    astra:    { value:120000, demand:3,   status:null       },
    time:     { value:30000,  demand:2.5, status:null       },
    bunny:    { value:67500,  demand:3,   status:'rising'   },
    krampus:  { value:8500,   demand:2.5, status:null       },
    reaper:   { value:2800,   demand:3,   status:'lowering' },
    galaxy:   { value:3200,   demand:3.5, status:'lowering' },
    mech:     { value:2250,   demand:2,   status:'lowering' },
    kitsune:  { value:2400,   demand:2.5, status:'lowering' },
    gravity:  { value:300,    demand:3,   status:'hyped'    },
    dragon:   { value:150,    demand:2,   status:null       },
    darkness: { value:150,    demand:2,   status:null       },
    angel:    { value:150,    demand:2,   status:null       },
    lava:     { value:125,    demand:1,   status:null       },
    lightning:{ value:30,     demand:2.5, status:null       },
    ice:      { value:30,     demand:2.5, status:null       },
    light:    { value:25,     demand:2,   status:null       },
    smoke:    { value:25,     demand:2,   status:null       },
    nature:   { value:3,      demand:2,   status:null       },
    earth:    { value:2,      demand:1,   status:null       },
    water:    { value:2,      demand:1,   status:null       },
    fire:     { value:2,      demand:1,   status:null       },
    sand:     { value:2,      demand:1,   status:null       },
    air:      { value:2,      demand:1,   status:null       },
  },

  infernal: {
    reaper:   { value:600,   demand:1,   status:null },
    galaxy:   { value:600,   demand:1,   status:null },
    mech:     { value:800,   demand:1.5, status:null },
    kitsune:  { value:800,   demand:1.5, status:null },
    krampus:  { value:3500,  demand:1,   status:null },
    astra:    { value:10000, demand:1.5, status:null },
    dragon:   { value:60,    demand:1.5, status:null },
    gravity:  { value:60,    demand:1.5, status:null },
    darkness: { value:60,    demand:1.5, status:null },
    angel:    { value:60,    demand:1.5, status:null },
    lava:     { value:60,    demand:1.5, status:null },
    lightning:{ value:15,    demand:1.5, status:null },
    light:    { value:15,    demand:1.5, status:null },
    smoke:    { value:15,    demand:1.5, status:null },
    ice:      { value:15,    demand:1.5, status:null },
    earth:    { value:3,     demand:1,   status:null },
    water:    { value:3,     demand:1,   status:null },
    nature:   { value:3,     demand:1,   status:null },
    fire:     { value:3,     demand:1,   status:null },
    sand:     { value:3,     demand:1,   status:null },
    air:      { value:3,     demand:1,   status:null },
  },

  shiny: {
    reaper:        { value:500,   demand:1,   status:null },
    galaxy:        { value:500,   demand:1,   status:null },
    kitsune:       { value:500,   demand:1,   status:null },
    mech:          { value:500,   demand:1,   status:null },
    krampus:       { value:1000,  demand:1.5, status:null },
    astra:         { value:1500,  demand:1.5, status:null },
    time:          { value:4500,  demand:1.5, status:null },
    fools_phantom: { value:25000, demand:1.5, status:null },
    angel:         { value:100,   demand:1.5, status:null },
    dragon:        { value:60,    demand:1,   status:null },
    gravity:       { value:60,    demand:1,   status:null },
    darkness:      { value:60,    demand:1,   status:null },
    lava:          { value:60,    demand:1,   status:null },
    lightning:     { value:10,    demand:1,   status:null },
    light:         { value:10,    demand:1,   status:null },
    smoke:         { value:10,    demand:1,   status:null },
    ice:           { value:10,    demand:1,   status:null },
    earth:         { value:1,     demand:0.5, status:null },
    water:         { value:1,     demand:0.5, status:null },
    nature:        { value:1,     demand:0.5, status:null },
    fire:          { value:1,     demand:0.5, status:null },
    sand:          { value:1,     demand:0.5, status:null },
    air:           { value:1,     demand:0.5, status:null },
  },

  luxurious: {
    galaxy:        { value:10000, demand:3.5, status:null },
    fools_phantom: { value:6000, demand:1.5, status:null },
    time:          { value:18000, demand:2,   status:null },
    astra:         { value:6000,  demand:2,   status:null },
    krampus:       { value:4000,  demand:3,   status:null },
    kitsune:       { value:3000,  demand:3,   status:null },
    reaper:        { value:3000,  demand:2,   status:null },
    mech:          { value:3000,  demand:1.5, status:null },
    angel:         { value:1250,  demand:2.5, status:null },
    gravity:       { value:420,   demand:2,   status:null },
    dragon:        { value:120,   demand:1.5, status:null },
    darkness:      { value:120,   demand:1.5, status:null },
    lava:          { value:120,   demand:1.5, status:null },
    lightning:     { value:40,    demand:1.5, status:null },
    light:         { value:40,    demand:1.5, status:null },
    smoke:         { value:40,    demand:1.5, status:null },
    ice:           { value:40,    demand:1.5, status:null },
    earth:         { value:5,     demand:1.5, status:null },
    water:         { value:5,     demand:1.5, status:null },
    nature:        { value:5,     demand:1.5, status:null },
    fire:          { value:5,     demand:1.5, status:null },
    sand:          { value:5,     demand:1.5, status:null },
    air:           { value:5,     demand:1.5, status:null },
  },

  armored: {
    time:     { value:5250, demand:1.5, status:'unstable' },
    reaper:   { value:800,  demand:1.5, status:null },
    mech:     { value:800,  demand:1.5, status:null },
    kitsune:  { value:800,  demand:1.5, status:null },
    galaxy:   { value:800,  demand:1.5, status:null },
    angel:    { value:1250, demand:2,   status:null },
    gravity:  { value:160,  demand:1.5, status:null },
    dragon:   { value:60,   demand:1,   status:null },
    darkness: { value:60,   demand:1,   status:null },
    lava:     { value:60,   demand:1,   status:null },
    lightning:{ value:10,   demand:1,   status:null },
    light:    { value:10,   demand:1,   status:null },
    smoke:    { value:10,   demand:1,   status:null },
    ice:      { value:10,   demand:1,   status:null },
    earth:    { value:3,    demand:1,   status:null },
    water:    { value:3,    demand:1,   status:null },
    nature:   { value:3,    demand:1,   status:null },
    fire:     { value:3,    demand:1,   status:null },
    sand:     { value:3,    demand:1,   status:null },
    air:      { value:3,    demand:1,   status:null },
  },

  celestial: {
    reaper:   { value:2000,  demand:2,   status:null },
    galaxy:   { value:2000,  demand:2,   status:null },
    kitsune:  { value:1500,  demand:1.5, status:null },
    mech:     { value:1500,  demand:1.5, status:null },
    krampus:  { value:4500,  demand:2,   status:null },
    astra:    { value:21000, demand:1.5, status:null },
    time:     { value:16500, demand:2, status:null },
    angel:    { value:750,   demand:2,   status:null },
    gravity:  { value:300,   demand:2,   status:null },
    dragon:   { value:60,    demand:1.5, status:null },
    darkness: { value:60,    demand:1.5, status:null },
    lava:     { value:60,    demand:1.5, status:null },
    lightning:{ value:20,    demand:2,   status:null },
    light:    { value:10,    demand:1.5, status:null },
    smoke:    { value:10,    demand:1.5, status:null },
    ice:      { value:10,    demand:1.5, status:null },
    earth:    { value:2,     demand:1,   status:null },
    water:    { value:2,     demand:1,   status:null },
    nature:   { value:2,     demand:1,   status:null },
    fire:     { value:2,     demand:1,   status:null },
    sand:     { value:2,     demand:1,   status:null },
    air:      { value:2,     demand:1,   status:null },
  },

  chaos: {
    reaper:   { value:170000, demand:5,   status:null    },
    mech:     { value:170000, demand:5,   status:null    },
    kitsune:  { value:160000, demand:5,   status:null    },
    gravity:  { value:30000,  demand:5,   status:'hyped' },
    dragon:   { value:12500,  demand:3,   status:null    },
    darkness: { value:25000,  demand:3.5, status:null    },
    lightning:{ value:17500,  demand:3.5, status:null    },
    angel:    { value:3000,   demand:1,   status:null    },
    lava:     { value:3000,   demand:1,   status:null    },
    light:    { value:3000,   demand:2.5, status:null    },
    smoke:    { value:3000,   demand:2.5, status:null    },
    ice:      { value:3000,   demand:2.5, status:null    },
    nature:   { value:1500,   demand:2.5, status:null    },
    earth:    { value:420,    demand:2,   status:null    },
    water:    { value:420,    demand:2,   status:null    },
    fire:     { value:420,    demand:2,   status:null    },
    sand:     { value:420,    demand:2,   status:null    },
    air:      { value:420,    demand:2,   status:null    },
  },

  mutated: {
    nightmare:{ value:450000, demand:4,   status:'rising' },
    bunny:    { value:155000, demand:3.5, status:null     },
    time:     { value:90000,  demand:3,   status:null     },
    krampus:  { value:100000, demand:2,   status:null     },
    galaxy:   { value:28000,  demand:3.5, status:'hyped'  },
    reaper:   { value:25000,  demand:3,   status:null     },
    mech:     { value:16500,  demand:2,   status:null     },
    kitsune:  { value:20000,  demand:2.5, status:null     },
    gravity:  { value:4000,   demand:3.5, status:'hyped'  },
    lightning:{ value:750,    demand:2.5, status:null     },
    dragon:   { value:3000,   demand:2,   status:null     },
    darkness: { value:1000,   demand:2,   status:null     },
    angel:    { value:1000,   demand:1,   status:null     },
    lava:     { value:400,    demand:1,   status:null     },
    light:    { value:500,    demand:1.5, status:null     },
    smoke:    { value:500,    demand:1.5, status:null     },
    ice:      { value:500,    demand:1.5, status:null     },
    earth:    { value:75,     demand:1.5, status:null     },
    water:    { value:75,     demand:1.5, status:null     },
    nature:   { value:75,     demand:1.5, status:null     },
    fire:     { value:75,     demand:1.5, status:null     },
    sand:     { value:75,     demand:1.5, status:null     },
    air:      { value:75,     demand:1.5, status:null     },
  },

  jumpscared: {
    sunlar: { value:55000,  demand:3.5, status:'rising' },
  },

  jumpscarebborn: {
    sunlar: { value:225000, demand:5,   status:'rising' },
  },

  grumpy: {
    krampus: { value:18000, demand:3, status:null },
  },

  kronos: {
    time:     { value:70000, demand:3,   status:null    },
    astra:    { value:70000, demand:2,   status:null    },
    kitsune:  { value:8000,  demand:4,   status:'hyped' },
    krampus:  { value:4000,  demand:1.5, status:null    },
    galaxy:   { value:2500,  demand:3,   status:'hyped' },
    angel:    { value:2000,  demand:2.5, status:null    },
    reaper:   { value:2000,  demand:2,   status:null    },
    mech:     { value:1500,  demand:1.5, status:null    },
    gravity:  { value:300,   demand:2,   status:null    },
    dragon:   { value:60,    demand:1.5, status:null    },
    darkness: { value:60,    demand:1.5, status:null    },
    lava:     { value:60,    demand:1.5, status:null    },
    lightning:{ value:10,    demand:1,   status:null    },
    light:    { value:10,    demand:1,   status:null    },
    smoke:    { value:10,    demand:1,   status:null    },
    ice:      { value:10,    demand:1,   status:null    },
    earth:    { value:3,     demand:0.5, status:null    },
    water:    { value:3,     demand:0.5, status:null    },
    nature:   { value:3,     demand:0.5, status:null    },
    fire:     { value:3,     demand:0.5, status:null    },
    sand:     { value:3,     demand:0.5, status:null    },
    air:      { value:3,     demand:0.5, status:null    },
  },

  enraged: {
    nightmare:{ value:45000, demand:4,   status:null    },
    phantom:  { value:35000, demand:4,   status:null    },
    kitsune:  { value:4000,  demand:3,   status:null    },
    galaxy:   { value:1750,  demand:2.5, status:'hyped' },
    reaper:   { value:1500,  demand:2,   status:null    },
    mech:     { value:1000,  demand:1.5, status:null    },
    angel:    { value:200,   demand:1,   status:null    },
    gravity:  { value:60,    demand:1,   status:null    },
    dragon:   { value:60,    demand:1,   status:null    },
    darkness: { value:60,    demand:1,   status:null    },
    lava:     { value:60,    demand:1,   status:null    },
    lightning:{ value:15,    demand:1.5, status:null    },
    light:    { value:10,    demand:1,   status:null    },
    smoke:    { value:10,    demand:1,   status:null    },
    ice:      { value:10,    demand:1,   status:null    },
    earth:    { value:3,     demand:0.5, status:null    },
    water:    { value:3,     demand:0.5, status:null    },
    nature:   { value:3,     demand:0.5, status:null    },
    fire:     { value:3,     demand:0.5, status:null    },
    sand:     { value:3,     demand:0.5, status:null    },
    air:      { value:3,     demand:0.5, status:null    },
  },

  radiant: {
    galaxy:       { value:180000, demand:5,   status:'hyped' },
    reaper:       { value:170000, demand:5,   status:null    },
    mech:         { value:170000, demand:5,   status:null    },
    kitsune:      { value:160000, demand:5,   status:null    },
    gravity:      { value:30000,  demand:5,   status:'hyped' },
    dragon:       { value:12500,  demand:3,   status:null    },
    darkness:     { value:25000,  demand:3.5, status:null    },
    lightning:    { value:17500,  demand:3.5, status:null    },
    angel:        { value:3000,   demand:1,   status:null    },
    lava:         { value:3000,   demand:1,   status:null    },
    light:        { value:3000,   demand:2.5, status:null    },
    smoke:        { value:3000,   demand:2.5, status:null    },
    ice:          { value:3000,   demand:2.5, status:null    },
    nature:       { value:1500,   demand:2.5, status:null    },
    earth:        { value:420,    demand:2,   status:null    },
    water:        { value:420,    demand:2,   status:null    },
    fire:         { value:420,    demand:2,   status:null    },
    sand:         { value:420,    demand:2,   status:null    },
    air:          { value:420,    demand:2,   status:null    },
  },

  timelost: {
    kitsune:       { value:20000, demand:4,   status:'hyped' },
    fools_phantom: { value:75000, demand:1.5, status:null    },
    mech:          { value:10000, demand:3,   status:null    },
    galaxy:        { value:8000,  demand:4.5, status:'hyped' },
    angel:         { value:8000,  demand:1.5, status:null    },
    gravity:       { value:1500,  demand:3.5, status:'hyped' },
    reaper:        { value:3500,  demand:2,   status:null    },
    darkness:      { value:240,   demand:2,   status:null    },
    dragon:        { value:120,   demand:2,   status:null    },
    lava:          { value:120,   demand:1.5, status:null    },
    lightning:     { value:60,    demand:1.5, status:null    },
    light:         { value:60,    demand:1.5, status:null    },
    smoke:         { value:60,    demand:1.5, status:null    },
    ice:           { value:60,    demand:1.5, status:null    },
    earth:         { value:10,    demand:1,   status:null    },
    water:         { value:10,    demand:1,   status:null    },
    nature:        { value:10,    demand:1,   status:null    },
    fire:          { value:10,    demand:1,   status:null    },
    sand:          { value:10,    demand:1,   status:null    },
    air:           { value:10,    demand:1,   status:null    },
  },

  glitched: {
    galaxy:       { value:47500,  demand:3,   status:'lowering'  },
    bunny:        { value:275000, demand:4.5, status:'rising' },
    gravity:      { value:4000,   demand:3,   status:'lowering' },
  },

  cupid: {
    angel:        { value:20000, demand:4, status:null },
  },

  runic: {
    water:        { value:500, demand:1.5, status:null },
  },

  whirlwind: {
    kitsune: { value:1000000, demand:5, status:'unstable' },
  },

};


/* ══════════════════════════════════════════════
   Данные роллов для Gear (Regular / Corrupted).
   Каждый ролл: { v: value, d: demand }.
   null = ролл недоступен для данного предмета.
   Wooden Sword V2 — исключение: только ролл 11 (индекс 10).
══════════════════════════════════════════════ */
window.VL_GEAR_ROLLS = {
  /* ── Weapons ── */
  conqblade: {
    regular:   [ {v:2829,d:0.75},{v:2839,d:0.75},{v:2849,d:0.75},{v:2859,d:1},{v:2868,d:1},{v:2878,d:1},{v:2888,d:1},{v:2898,d:1.25},{v:2907,d:1.25},{v:2917,d:1.25},{v:2927,d:1.75} ],
    corrupted: [ {v:2900,d:1},{v:2910,d:1},{v:2920,d:1},{v:2930,d:1.25},{v:2940,d:1.25},{v:2950,d:1.25},{v:2960,d:1.25},{v:2970,d:1.5},{v:2980,d:1.5},{v:2990,d:1.5},{v:3000,d:2} ]
  },
  poseidtrident: {
    regular:   [ {v:117,d:0.5},{v:117,d:0.5},{v:117,d:0.5},{v:117,d:0.5},{v:117,d:0.5},{v:117,d:0.5},{v:117,d:0.5},{v:117,d:0.5},{v:117,d:0.5},{v:117,d:0.5},{v:117,d:0.5} ],
    corrupted: [ {v:120,d:0.75},{v:120,d:0.75},{v:120,d:0.75},{v:120,d:0.75},{v:120,d:0.75},{v:120,d:0.75},{v:120,d:0.75},{v:120,d:0.75},{v:120,d:0.75},{v:120,d:0.75},{v:120,d:0.75} ]
  },
  doombringer: {
    regular:   [ {v:176,d:0},{v:195,d:0},{v:215,d:0},{v:234,d:0.25},{v:254,d:0.25},{v:273,d:0.5},{v:293,d:0.5},{v:312,d:0.5},{v:332,d:0.75},{v:351,d:0.75},{v:371,d:0.75} ],
    corrupted: [ {v:180,d:0.25},{v:200,d:0.25},{v:220,d:0.25},{v:240,d:0.5},{v:260,d:0.5},{v:280,d:0.75},{v:300,d:0.75},{v:320,d:0.75},{v:340,d:1},{v:360,d:1},{v:380,d:1} ]
  },
  grimshadekat: {
    regular:   [ {v:59,d:0.25},{v:59,d:0.25},{v:59,d:0.25},{v:59,d:0.25},{v:59,d:0.25},{v:59,d:0.25},{v:59,d:0.25},{v:59,d:0.25},{v:59,d:0.25},{v:59,d:0.25},{v:59,d:0.25} ],
    corrupted: [ {v:60,d:0.5},{v:60,d:0.5},{v:60,d:0.5},{v:60,d:0.5},{v:60,d:0.5},{v:60,d:0.5},{v:60,d:0.5},{v:60,d:0.5},{v:60,d:0.5},{v:60,d:0.5},{v:60,d:0.5} ]
  },
  magmaedge: {
    regular:   [ {v:176,d:0.5},{v:195,d:0.5},{v:215,d:0.5},{v:234,d:0.75},{v:254,d:0.75},{v:273,d:0.75},{v:293,d:0.75},{v:312,d:0.75},{v:332,d:1},{v:351,d:1},{v:371,d:1} ],
    corrupted: [ {v:180,d:0.75},{v:200,d:0.75},{v:220,d:0.75},{v:240,d:1},{v:260,d:1},{v:280,d:1},{v:300,d:1},{v:320,d:1},{v:340,d:1.25},{v:360,d:1.25},{v:380,d:1.25} ]
  },
  diamondcrack: {
    regular:   [ {v:59,d:0},{v:59,d:0},{v:59,d:0},{v:59,d:0},{v:59,d:0},{v:59,d:0},{v:59,d:0},{v:59,d:0},{v:59,d:0},{v:59,d:0},{v:59,d:0} ],
    corrupted: [ {v:60,d:0.25},{v:60,d:0.25},{v:60,d:0.25},{v:60,d:0.25},{v:60,d:0.25},{v:60,d:0.25},{v:60,d:0.25},{v:60,d:0.25},{v:60,d:0.25},{v:60,d:0.25},{v:60,d:0.25} ]
  },
  abysstrident: {
    regular:   [ null,null,null,null,null,{v:2927,d:0.5},{v:3073,d:0.5},{v:3220,d:0.6},{v:3366,d:0.6},{v:3659,d:0.75},{v:4098,d:0.75} ],
    corrupted: [ null,null,null,null,null,{v:3000,d:1},{v:3150,d:1},{v:3300,d:1.1},{v:3450,d:1.1},{v:3750,d:1.25},{v:4200,d:1.25} ]
  },
  ascdaggers: {
    regular:   [ null,null,null,null,null,{v:2927,d:0},{v:3073,d:0},{v:3220,d:0},{v:3366,d:0},{v:3659,d:0.25},{v:4098,d:0.5} ],
    corrupted: [ null,null,null,null,null,{v:3000,d:0.25},{v:3150,d:0.3},{v:3300,d:0.5},{v:3450,d:0.5},{v:3750,d:0.75},{v:4200,d:1} ]
  },
  magmaedgev2: {
    regular:   [ null,null,null,null,null,{v:2927,d:0},{v:3073,d:0.25},{v:3220,d:0.5},{v:3366,d:0.7},{v:3659,d:1},{v:4098,d:1.15} ],
    corrupted: [ null,null,null,null,null,{v:3000,d:0.5},{v:3150,d:0.75},{v:3300,d:1},{v:3450,d:1.2},{v:3750,d:1.5},{v:4200,d:1.65} ]
  },
  lightkatanav2: {
    regular:   [ null,null,null,null,null,{v:3220,d:0.5},{v:3366,d:0.5},{v:3512,d:0.7},{v:3659,d:0.7},{v:3951,d:1},{v:4390,d:1} ],
    corrupted: [ null,null,null,null,null,{v:3300,d:1},{v:3450,d:1},{v:3600,d:1.2},{v:3750,d:1.2},{v:4050,d:1.5},{v:4500,d:1.5} ]
  },
  mentav2: {
    regular:   [ null,null,null,null,null,{v:6439,d:1},{v:6732,d:1.1},{v:7024,d:1.25},{v:7317,d:1.5},{v:7805,d:1.75},{v:8780,d:2} ],
    corrupted: [ null,null,null,null,null,{v:3500,d:1.5},{v:3750,d:1.5},{v:4000,d:1.5},{v:4500,d:1.5},{v:5000,d:1.75},{v:6000,d:2} ]
  },
  /* Wooden Sword V2 — только ролл 11 (индекс 10) */
  woodenv2: {
    regular:   [ null,null,null,null,null,null,null,null,null,null,{v:9756,d:3.5} ],
    corrupted: [ null,null,null,null,null,null,null,null,null,null,{v:9500,d:2.5} ]
  },
  ascvoidblade: {
    regular:   [ null,null,null,null,null,{v:4878,d:1},{v:5171,d:1},{v:5463,d:1.25},{v:5756,d:1.5},{v:6244,d:1.5},{v:7317,d:1.5} ],
    corrupted: [ null,null,null,null,null,{v:5000,d:1.5},{v:7000,d:1.5},{v:7500,d:1.75},{v:8000,d:2.5},{v:9000,d:2.5},{v:10000,d:3} ]
  },
  cupidfury: {
    regular:   [ {v:2927,d:1.5},{v:2927,d:1.5},{v:2927,d:1.5},{v:2927,d:1.5},{v:2927,d:1.5},{v:2927,d:1.5},{v:2927,d:1.5},{v:2927,d:1.5},{v:3415,d:1.2},{v:3902,d:1},{v:4878,d:0.75} ],
    corrupted: [ {v:2000,d:1},{v:2000,d:1},{v:2000,d:1},{v:2500,d:1},{v:2500,d:1},{v:2750,d:1},{v:3000,d:1},{v:3000,d:1},{v:3250,d:1.25},{v:3500,d:1.25},{v:3750,d:1.5} ]
  },
  cupidwrath: {
    regular:   [ {v:24390,d:3.5},{v:24390,d:3.5},{v:24390,d:3.5},{v:24390,d:3.5},{v:24390,d:3.5},{v:24390,d:3.5},{v:24390,d:3.5},{v:24390,d:3.5},{v:26341,d:3},{v:29268,d:2.7},{v:34146,d:2.5} ],
    corrupted: [ {v:6000,d:1.5},{v:6000,d:1.5},{v:6000,d:1.5},{v:6000,d:1.5},{v:6500,d:1.5},{v:7000,d:1.5},{v:7500,d:1.5},{v:8500,d:1.5},{v:8750,d:2},{v:9000,d:2},{v:9500,d:2} ]
  },
  tlconqblade: {
    regular:   [ {v:1268,d:0},{v:1268,d:0},{v:1268,d:0},{v:1268,d:0},{v:1268,d:0},{v:1561,d:0},{v:1561,d:0},{v:1561,d:0},{v:1707,d:0},{v:1951,d:0.1},{v:2439,d:0.15} ],
    corrupted: [ {v:1300,d:0.2},{v:1300,d:0.2},{v:1300,d:0.2},{v:1300,d:0.2},{v:1300,d:0.2},{v:1600,d:0.3},{v:1600,d:0.3},{v:1600,d:0.3},{v:1750,d:0.5},{v:2000,d:0.6},{v:2500,d:0.65} ]
  },
  tlconqbladele: {
    regular:   [ {v:39024,d:1.5},{v:42927,d:1.7},{v:46829,d:1.9},{v:50732,d:2.1},{v:54634,d:2.3},{v:58537,d:2.5},{v:62439,d:2.7},{v:66341,d:3},{v:73171,d:3},{v:87805,d:3.5},{v:97561,d:3.5} ],
    corrupted: [ {v:18000,d:1.5},{v:20000,d:1.5},{v:22000,d:1.5},{v:24000,d:1.5},{v:26000,d:1.75},{v:30000,d:2},{v:32000,d:2},{v:34000,d:2},{v:37500,d:2.5},{v:40000,d:2.5},{v:42500,d:3} ]
  },
  glitchedstaff: {
    regular:   [ null,null,null,null,null,{v:780,d:0.5},{v:839,d:0.5},{v:898,d:0.7},{v:976,d:0.8},{v:1171,d:1},{v:1463,d:1} ],
    corrupted: [ null,null,null,null,null,{v:800,d:1},{v:860,d:1},{v:920,d:1.2},{v:1000,d:1.3},{v:1200,d:1.5},{v:1500,d:1.5} ]
  },
  viltronstaff: {
    regular:   [ null,null,null,null,null,{v:234,d:0},{v:234,d:0},{v:234,d:0},{v:293,d:0},{v:410,d:0},{v:585,d:0} ],
    corrupted: [ null,null,null,null,null,{v:240,d:0.2},{v:240,d:0.2},{v:240,d:0.2},{v:300,d:0.3},{v:420,d:0.5},{v:600,d:0.5} ]
  },
  seriously: {
    regular:   [ null,null,null,null,null,{v:14634,d:1.5},{v:17073,d:1.5},{v:20488,d:2},{v:26829,d:2},{v:34146,d:2.5},{v:48780,d:2.5} ],
    corrupted: [ null,null,null,null,null,{v:15000,d:1.5},{v:17500,d:1.5},{v:20000,d:2},{v:25000,d:2},{v:30000,d:2},{v:35000,d:2.5} ]
  },
  easterstaff: {
    regular:   [ null,null,null,null,null,{v:585,d:0},{v:634,d:0.5},{v:693,d:0.5},{v:761,d:0.7},{v:829,d:0.8},{v:976,d:1} ],
    corrupted: [ null,null,null,null,null,{v:600,d:0.5},{v:650,d:1},{v:710,d:1},{v:780,d:1.2},{v:850,d:1.3},{v:1000,d:1.5} ]
  },
  /* ── Armor ── */
  fzset: {
    regular:   [ {v:975,d:0.25},{v:1075,d:0.25},{v:1175,d:0.25},{v:1270,d:0.25},{v:1365,d:0.25},{v:1465,d:0.5},{v:1560,d:0.5},{v:1655,d:0.5},{v:1755,d:0.75},{v:1855,d:0.75},{v:1950,d:0.75} ],
    corrupted: [ {v:1000,d:0.5},{v:1100,d:0.5},{v:1200,d:0.5},{v:1300,d:0.5},{v:1400,d:0.5},{v:1500,d:0.75},{v:1600,d:0.75},{v:1700,d:0.75},{v:1800,d:1},{v:1900,d:1},{v:2000,d:1} ]
  },
  zset: {
    regular:   [ {v:58,d:0},{v:70,d:0},{v:85,d:0},{v:97,d:0},{v:111,d:0},{v:123,d:0},{v:138,d:0},{v:149,d:0},{v:161,d:0.25},{v:175,d:0.25},{v:195,d:0.25} ],
    corrupted: [ {v:60,d:0.15},{v:72,d:0.15},{v:87,d:0.15},{v:99,d:0.25},{v:114,d:0.25},{v:126,d:0.25},{v:141,d:0.35},{v:153,d:0.35},{v:165,d:0.5},{v:180,d:0.5},{v:200,d:0.5} ]
  },
  hadesset: {
    regular:   [ {v:975,d:0.25},{v:1075,d:0.25},{v:1175,d:0.25},{v:1270,d:0.25},{v:1365,d:0.25},{v:1465,d:0.5},{v:1560,d:0.5},{v:1655,d:0.5},{v:1755,d:0.75},{v:1855,d:0.75},{v:1950,d:0.75} ],
    corrupted: [ {v:1000,d:0.5},{v:1100,d:0.5},{v:1200,d:0.5},{v:1300,d:0.5},{v:1400,d:0.5},{v:1500,d:0.75},{v:1600,d:0.75},{v:1700,d:0.75},{v:1800,d:1},{v:1900,d:1},{v:2000,d:1} ]
  },
  kronaxset: {
    regular:   [ {v:1465,d:0.5},{v:1520,d:0.5},{v:1580,d:0.5},{v:1640,d:0.7},{v:1700,d:0.8},{v:1755,d:1},{v:1815,d:1},{v:1875,d:1},{v:1950,d:1.5},{v:2245,d:1.5},{v:2440,d:1.5} ],
    corrupted: [ {v:1500,d:1},{v:1560,d:1},{v:1620,d:1},{v:1680,d:1.2},{v:1740,d:1.3},{v:1800,d:1.5},{v:1860,d:1.5},{v:1920,d:1.5},{v:2000,d:2},{v:2300,d:2},{v:2500,d:2} ]
  },
  heroickronax: {
    regular:   [ {v:1950,d:0.5},{v:2070,d:0.5},{v:2185,d:0.5},{v:2305,d:0.7},{v:2420,d:0.8},{v:2535,d:1},{v:2655,d:1},{v:2770,d:1.2},{v:2925,d:1.5},{v:3415,d:1.5},{v:3900,d:1.5} ],
    corrupted: [ {v:2000,d:1},{v:2120,d:1},{v:2240,d:1},{v:2360,d:1.2},{v:2480,d:1.3},{v:2600,d:1.5},{v:2720,d:1.5},{v:2840,d:1.7},{v:3000,d:2},{v:3500,d:2},{v:4000,d:2} ]
  },
};


/* ══════════════════════════════════════════════
   Конфиг редкостей и статусов
══════════════════════════════════════════════ */
window.RARITY_CFG = {
  common:    { label:'Common',    color:'#8a8a8a', glow:'rgba(138,138,138,0.15)', cls:'rarity-common'    },
  rare:      { label:'Rare',      color:'#70a1ff', glow:'rgba(112,161,255,0.20)', cls:'rarity-rare'      },
  epic:      { label:'Epic',      color:'#c56cf0', glow:'rgba(197,108,240,0.20)', cls:'rarity-epic'      },
  legendary: { label:'Legendary', color:'#e8b84b', glow:'rgba(232,184,75,0.20)',  cls:'rarity-legendary' },
  mythic:    { label:'Mythic',    color:'#ff9f43', glow:'rgba(255,159,67,0.20)',  cls:'rarity-mythic',   gradient:true },
  ascended:  { label:'Ascended',  color:'#70a1ff', glow:'rgba(112,161,255,0.20)', cls:'rarity-ascended', gradient:true },
  secret:    { label:'Secret',    color:'#a8d8f0', glow:'rgba(168,216,240,0.20)', cls:'rarity-secret'    },
  exclusive: { label:'Exclusive', color:'#e6c98a', glow:'rgba(230,201,138,0.20)', cls:'rarity-exclusive', gradient:true },
};

window.STATUS_CFG = {
  rising:   { label:'Rising',   color:'#50fa7b' },
  lowering: { label:'Lowering', color:'#ff5555' },
  hyped:    { label:'Hyped',    color:'#6ec6f5' },
  inflated: { label:'Inflated', color:'#ffb730' },
  unstable: { label:'Unstable', color:'#bd93f9' },
};

window.STATUS_DESC = {
  rising:   "This status applies when an item shows a conditional value increase due to its rarity, exclusivity, usefulness, related updates, or quantity. All of these factors can also be weighed against other items.",
  lowering: "This status applies when an item shows a conditional value decrease — usually because of its excessive quantity, a re-release, or because the developers nerfed its capabilities.",
  inflated: "This status applies when an item suddenly becomes hyped and traded among influential players. A rather rare and isolated case, since it doesn't always happen the way the devs intended.",
  hyped:    "This status applies when an item has incredible growth potential due to upcoming events such as a related update, balance changes, or it becoming a community favorite. A fairly rare case.",
  unstable: "This status applies when an item has an uncertain fate. The devs may release it one way today and rework it completely the next. Very rare — devs aren't usually high enough to let this happen, haha."
};
