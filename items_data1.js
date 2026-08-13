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
window.ED_GOLD_RATE = 250000;


/* ══════════════════════════════════════════════
   Основная база данных предметов
══════════════════════════════════════════════ */
window.VL_DB = {

  elements: [
    /* ── Rare ── */
    { id:'earth',          name:"Earth",          rarity:'rare', imgId:'earth',      demand:0,   value:0,     status:null      },
    { id:'water',          name:"Water",          rarity:'rare', imgId:'water',      demand:0,   value:0,     status:null      },
    { id:'nature',         name:"Nature",         rarity:'rare', imgId:'nature',      demand:0,   value:0,     status:null      },
    { id:'fire',           name:"Fire",           rarity:'rare', imgId:'fire',      demand:0,   value:0,     status:null      },
    { id:'sand',           name:"Sand",           rarity:'rare', imgId:'sand',      demand:0,   value:0,     status:null      },
    { id:'air',            name:"Air",            rarity:'rare', imgId:'air',      demand:0,   value:0,     status:null      },
    /* ── Epic ── */
    { id:'lightning',      name:"Lightning",      rarity:'epic', imgId:'lightning',      demand:0,   value:0,     status:null      },
    { id:'light',          name:"Light",          rarity:'epic', imgId:'light',      demand:0,   value:0,     status:null      },
    { id:'smoke',          name:"Smoke",          rarity:'epic', imgId:'smoke',      demand:0,   value:0,     status:null      },
    { id:'ice',            name:"Ice",            rarity:'epic', imgId:'ice',      demand:0,   value:0,     status:null      },
    /* ── Legendary ── */
    { id:'dragon',         name:"Dragon",         rarity:'legendary', imgId:'dragon', demand:0,   value:0,     status:null      },
    { id:'gravity',        name:"Gravity",        rarity:'legendary', imgId:'gravity', demand:0,   value:0,     status:null      },
    { id:'darkness',       name:"Darkness",       rarity:'legendary', imgId:'darkness', demand:0,   value:0,     status:null      },
    { id:'angel',          name:"Angel",          rarity:'legendary', imgId:'angel', demand:0,   value:0,     status:null      },
    { id:'lava',           name:"Lava",           rarity:'legendary', imgId:'lava', demand:0,   value:0,     status:null      },
    /* ── Mythic ── */
    { id:'reaper',		name:"Reaper",		rarity:'mythic', imgId:'reaper',		demand:2,	value:15,		status:null },
    { id:'mech',		name:"Mech",		rarity:'mythic', imgId:'mech',		demand:2,	value:15,		status:null },
    { id:'galaxy',		name:"Galaxy",		rarity:'mythic', imgId:'galaxy',		demand:2.5,	value:15,		status:null },
    { id:'kitsune',		name:"Kitsune",		rarity:'mythic', imgId:'kitsune',		demand:2,	value:15,		status:null },
    /* ── Secret ── */
    { id:'time',		name:"Time",		rarity:'secret', imgId:'time',		demand:0.5,	value:40,		status:null },
    /* ── Mythic (extra) ── */
    { id:'phantom',		name:"Phantom",		rarity:'mythic', imgId:'phantom',		demand:5,	value:7000,		status:'rising' },
    { id:'nightmare',		name:"Nightmare",		rarity:'mythic', imgId:'nightmare',		demand:5,	value:6000,		status:'rising' },
    { id:'astra',          name:"Astra",          rarity:'mythic', imgId:'astra',    demand:4,   value:4000,  status:'rising'  },
    { id:'infinity',		name:"Infinity",		rarity:'mythic', imgId:'infinity',		demand:4,	value:12000,		status:null },
    { id:'solar',		name:"Solar",		rarity:'mythic', imgId:'solar',		demand:3.5,	value:5000,		status:'unstable' },
    { id:'bunny',          name:"Bunny",          rarity:'mythic', imgId:'bunny',    demand:4,   value:3250,  status:'rising'  },
    { id:'krampus',        name:"Krampus",        rarity:'mythic', imgId:'krampus',    demand:3,   value:1000,  status:null      },
    /* ── Exclusive ── */
    { id:'sunlar',		name:"Sunlar",		rarity:'exclusive', imgId:'sunlar',		demand:3,	value:2000,		status:'rising' },
    { id:'fools_phantom',		name:"Fool's Phantom",		rarity:'exclusive', imgId:'fools_phantom',		demand:2.5,	value:15000,		status:'rare' },
    { id:'sunshine',	   name:"Sunshine",  rarity:'exclusive', imgId:'lebronmeme',    demand:5, value:30121982,    status:'inflated' },
      { id:'lunar',		name:"Lunar",		rarity:'mythic', imgId:'lunar',		demand:4, value:4500,		status:'unstable' },
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
    { id:'magmaedgev2',   name:"Ascended Magma's Edge",        rarity:'ascended',  imgId:'magmaedgev2',    subtype:'weapon', status:null },
    { id:'lightkatanav2', name:"Lightning Katana V2",          rarity:'ascended',  imgId:'lightkatanav2',  subtype:'weapon', status:null },
    { id:'mentav2',       name:"Menta Blade V2",               rarity:'ascended',  imgId:'mentav2',        subtype:'weapon', status:null },
    { id:'woodenv2',      name:"Ascended Wooden Sword",        rarity:'ascended',  imgId:'woodenv2',       subtype:'weapon', status:null },
    { id:'ascvoidblade',  name:"Ascended Voidblade",           rarity:'ascended',  imgId:'ascvoidblade',   subtype:'weapon', status:null },
    { id:'cupidfury',     name:"Cupid's Fury",                 rarity:'ascended',  imgId:'cupidfury',      subtype:'weapon', status:null },
    { id:'cupidwrath',    name:"Cupid's Wrath",                rarity:'secret',    imgId:'cupidwrath',     subtype:'weapon', status:null },
    { id:'tlconqblade',   name:"Timelost Conqueror's Blade",   rarity:'ascended',  imgId:'tlconqblade',    subtype:'weapon', status:null },
    { id:'tlconqbladele', name:"Timelost Conqueror's Blade LE", rarity:'secret',   imgId:'tlconqblade',    subtype:'weapon', status:'unstable' },
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
    /* ── New Weapons ── */
    { id:'rainbow_noodle', name:"Rainbow Noodle", rarity:'mythic', imgId:'rainbownoodle', subtype:'weapon', status:null },
    { id:'curious_wooden_bow', name:"Curious Wooden Bow", rarity:'ascended', imgId:'woodenbow', subtype:'weapon', status:null },
    { id:'shadow_scythe', name:"Shadow Scythe", rarity:'mythic', imgId:'shadowscythe', subtype:'weapon', status:null },
    { id:'firework_bow', name:"Firework Bow", rarity:'mythic', imgId:'fireworkbow', subtype:'weapon', status:null },
    { id:'terrablade_le', name:"Terrablade LE", rarity:'secret', imgId:'terrablade', subtype:'weapon', status:'hyped' },
    { id:'pool_noodle', name:"Pool Noodle", rarity:'legendary', imgId:'poolnoodle', subtype:'weapon', status:null },
    { id:'terrablade', name:"Terrablade", rarity:'mythic', imgId:'terrablade', subtype:'weapon', status:null },
    { id:'hydromaxx_lr', name:"HydroMaxx LR", rarity:'secret', imgId:'hydromaxxlr', subtype:'weapon', status:null },
    { id:'hydromaxx_cqb', name:"HydroMaxx CQB", rarity:'mythic', imgId:'hydromaxxcqb', subtype:'weapon', status:null },
    { id:'gubby_launcher', name:"Gubby Launcher", rarity:'secret', imgId:'gubbylauncher', subtype:'weapon', status:'rare' },
    /* ── New Armor ── */
    { id:'viltron_set', name:"Viltron Set", rarity:'mythic', imgId:'viltronset', subtype:'armor', status:null },
    { id:'heroic_viltron_set', name:"Heroic Viltron Set", rarity:'mythic', imgId:'viltronset', subtype:'armor', status:null },
    /* ── New Relics ── */
    { id:'lord_prisma_ring',    name:"Lord Prisma Ring", rarity:'secret', imgId:'lordprismaring', subtype:'relic', status:null },
    { id:'lucky_banner_charm',  name:"Lucky Banner Charm", rarity:'mythic', imgId:'luckybannercharm', subtype:'relic', status:null },
    { id:'easter_ring', name:"Easter Ring", rarity:'mythic', imgId:'easterring', subtype:'relic', status:null },
    { id:'celestial_ring',      name:"Celestial Ring",       rarity:'legendary', imgId:'celestialring',     subtype:'relic',  status:null },
    { id:'torrential_aspect',   name:"Torrential Aspect", rarity:'secret', imgId:'torrentialaspect', subtype:'relic', status:null },
    { id:'skyborne_runes',      name:"Skyborne Runes",       rarity:'legendary', imgId:'skybornerunes',     subtype:'relic',  status:null },
    { id:'graviton_ring',       name:"Graviton Ring", rarity:'secret', imgId:'gravitonring', subtype:'relic', status:null },
    { id:'fission_ring',        name:"Fission Ring", rarity:'secret', imgId:'fissionring', subtype:'relic', status:null },
    { id:'wise_necklace',       name:"Wise Necklace",        rarity:'uncommon',  imgId:'wisenecklace',      subtype:'relic',  status:null },
    { id:'dragonholy_pendant',  name:"Dragon/Holy Pendant",  rarity:'uncommon',  imgId:'dragonholypendant', subtype:'relic',  status:null },
    { id:'tranquil_necklace',   name:"Tranquil Necklace",    rarity:'rare',      imgId:'tranquilnecklace',  subtype:'relic',  status:null },
    { id:'sorcerous_ring',      name:"Sorcerous Ring",       rarity:'rare',      imgId:'sorcerousring',     subtype:'relic',  status:null },
    { id:'ancient_runes',       name:"Ancient Runes",        rarity:'rare',      imgId:'ancientrunes',      subtype:'relic',  status:null },
    { id:'lunar_neckalce',      name:"Lunar Neckalce",       rarity:'uncommon',  imgId:'lunarnecklace',     subtype:'relic',  status:null },
    { id:'vitalis_necklace',    name:"Vitalis Necklace",     rarity:'legendary', imgId:'vitalisnecklace',   subtype:'relic',  status:null },
    { id:'reapers_ring', name:"Reaper's Ring", rarity:'mythic', imgId:'reapersring', subtype:'relic', status:null },
      { id:'lionels_war_blade', name:"Lionel's War Blade", rarity:'ascended', imgId:'tlconqblade', subtype:'weapon', status:null },
      { id:'hydromaxx_mini',    name:"HydroMaxx MINI", rarity:'secret', imgId:'hydromaxxmini', subtype:'weapon', status:'hyped' },
      { id:'hydromaxx_lrxl', name:"HydroMaxx LRXL", rarity:'secret', imgId:'hydromaxxlrxl', subtype:'weapon', status:null },
      { id:'ascendant_vanquisher', name:"Ascendant Vanquisher", rarity:'secret', imgId:'magmaedgev2', subtype:'weapon', status:null },
  ],

  cosmetic: [
    /* ── Cosmetic Weapons ── */
    { id:'betadaggers', name:"Beta Daggers", rarity:'mythic', imgId:'betadaggers', subtype:'weapon', status:null, value:27500, demand:3.5 },
    { id:'betascythe', name:"Beta Scythe", rarity:'mythic', imgId:'betascythe', subtype:'weapon', status:null, value:5500, demand:2.5 },
    { id:'betahammer',        name:"Beta Hammer",              rarity:'mythic',    imgId:'betahammer',        subtype:'weapon', status:null, value:2500,  demand:1.5  },
    { id:'betabattleaxe', name:"Beta Battleaxe", rarity:'mythic', imgId:'betabattleaxe', subtype:'weapon', status:null, value:2500, demand:1.5 },
    { id:'betaaxe',           name:"Beta Axe",                 rarity:'mythic',    imgId:'betaaxe',           subtype:'weapon', status:null, value:1500,  demand:1.25 },
    { id:'betadeathadder', name:"Beta Deathadder", rarity:'mythic', imgId:'betadeathadder', subtype:'weapon', status:null, value:1000, demand:0.5 },
    { id:'amberfallaxe', name:"Amberfall Axe", rarity:'mythic', imgId:'amberfallaxe', subtype:'weapon', status:null, value:20000, demand:1.5 },
    { id:'twilightbloom', name:"Twilight Bloom", rarity:'legendary', imgId:'twilightbloom', subtype:'weapon', status:null, value:8000, demand:1 },
    { id:'rootbinder', name:"Rootbinder", rarity:'legendary', imgId:'rootbinder', subtype:'weapon', status:null, value:4000, demand:0.5 },
    { id:'amberbloomblade', name:"Amberbloom Blade", rarity:'legendary', imgId:'amberbloomblade', subtype:'weapon', status:null, value:4000, demand:0.5 },
    { id:'crimsondeathadder', name:"Crimson Deathadder", rarity:'legendary', imgId:'crimsondeathadder', subtype:'weapon', status:null, value:3500, demand:2 },
    { id:'serpentstaff', name:"Serpent's Verdant Staff", rarity:'legendary', imgId:'serpentstaff', subtype:'weapon', status:null, value:1000, demand:0.25 },
    { id:'stormcallerglaive', name:"Stormcaller's Glavie", rarity:'legendary', imgId:'stormcallerglaive', subtype:'weapon', status:null, value:1500, demand:0.5 },
    { id:'webweaverscythe',   name:"Webweaver Scythe",         rarity:'mythic',    imgId:'webweaverscythe',   subtype:'weapon', status:null, value:750,   demand:0.5  },
    { id:'ghastlyskeleblade', name:"Ghastly Skeleblade",       rarity:'legendary', imgId:'ghastlyskeleblade', subtype:'weapon', status:null, value:1000,  demand:0.5  },
    { id:'soulbreaker',       name:"Soulbreaker",              rarity:'mythic',    imgId:'soulbreaker',       subtype:'weapon', status:null, value:600,   demand:0    },
    { id:'krampusscythe', name:"Krampus Scythe", rarity:'mythic', imgId:'krampusscythe', subtype:'weapon', status:null, value:17500, demand:3.5 },
    { id:'verdantblade', name:"Verdant Blade", rarity:'mythic', imgId:'verdantblade', subtype:'weapon', status:null, value:37500, demand:2.25 },
    { id:'giftedblade', name:"Gifted Blade", rarity:'mythic', imgId:'giftedblade', subtype:'weapon', status:null, value:3000, demand:1 },
    { id:'gingerscythe', name:"Ginger Scythe", rarity:'mythic', imgId:'gingerscythe', subtype:'weapon', status:null, value:2000, demand:0.75 },
    { id:'giftwrappedaxe',    name:"Giftwrapped Axe",          rarity:'legendary', imgId:'giftwrappedaxe',    subtype:'weapon', status:null, value:1000,  demand:0.25 },
    { id:'cubescythe',        name:"Cube Scythe",              rarity:'legendary', imgId:'cubescythe',        subtype:'weapon', status:null, value:750,   demand:1    },
    { id:'galacticfrostaxe', name:"Galactic Frost Axe", rarity:'legendary', imgId:'galacticfrostaxe', subtype:'weapon', status:null, value:2500, demand:1.5 },
    { id:'moltenscythe',      name:"Molten Scythe",            rarity:'legendary', imgId:'moltenscythe',      subtype:'weapon', status:null, value:4500,  demand:1.25 },
    { id:'corruptedaxe', name:"Corrupted Axe", rarity:'legendary', imgId:'corruptedaxe', subtype:'weapon', status:null, value:1000, demand:0.75 },
    { id:'dualdragonitespear', name:"Dual Dragonite Spear", rarity:'mythic', imgId:'dualdragonitespear', subtype:'weapon', status:null, value:22500, demand:2.25 },
    { id:'dragonitespear', name:"Dragonite Spear", rarity:'mythic', imgId:'dragonitespear', subtype:'weapon', status:null, value:4500, demand:1 },
    { id:'theolympian',       name:"The Olympian",             rarity:'legendary', imgId:'theolympian',       subtype:'weapon', status:null, value:600,   demand:0.25 },
    { id:'valkyrieblade', name:"Valkyrie Blade", rarity:'legendary', imgId:'valkyrieblade', subtype:'weapon', status:null, value:4000, demand:3 },
    { id:'bunnyspear',        name:"Bunny Spear",              rarity:'legendary', imgId:'bunnyspear',        subtype:'weapon', status:null, value:800,   demand:0.75 },
    { id:'bunnystaff',        name:"Bunny Staff",              rarity:'legendary', imgId:'bunnystaff',        subtype:'weapon', status:null, value:800,   demand:0.75 },
    { id:'bunnyaxe',          name:"Bunny Axe",                rarity:'legendary', imgId:'bunnyspear',        subtype:'weapon', status:null, value:800,   demand:0.75 },
    { id:'tempestclaw', name:"Tempest Claw", rarity:'legendary', imgId:'tempestclaw', subtype:'weapon', status:null, value:2000, demand:1 },
    { id:'dawnbringer', name:"Dawnbringer", rarity:'legendary', imgId:'dawnbringer', subtype:'weapon', status:null, value:1000, demand:1 },
    { id:'soulspire', name:"Soul Spire", rarity:'legendary', imgId:'soulspire', subtype:'weapon', status:null, value:2000, demand:0.25 },
    { id:'thunderrift',       name:"Thunder Rift",             rarity:'legendary', imgId:'thunderrift',       subtype:'weapon', status:null, value:750,   demand:0    },
    { id:'thunderblade',      name:"Thunderblade",             rarity:'legendary', imgId:'thunderblade',      subtype:'weapon', status:null, value:550,   demand:0    },
    { id:'minutehand',        name:"Minutehand",               rarity:'mythic',    imgId:'minutehand',        subtype:'weapon', status:null, value:300,   demand:0.25 },
    { id:'hourhand',          name:"Hourhand",                 rarity:'legendary', imgId:'hourhand',          subtype:'weapon', status:null, value:600,   demand:0.5  },
    { id:'violetbattleaxe', name:"Violet Battleaxe", rarity:'mythic', imgId:'violetbattleaxe', subtype:'weapon', status:null, value:45000, demand:2 },
    { id:'top3sword',         name:"Top 3 Sword",              rarity:'mythic',    imgId:'top3sword',         subtype:'weapon', status:null, value:18000, demand:2    },
    { id:'top10sword', name:"Top 10 Sword", rarity:'legendary', imgId:'top10sword', subtype:'weapon', status:null, value:1500, demand:0.25 },
    { id:'dragonslayerblade', name:"Dragon Slayer Blade",      rarity:'mythic',    imgId:'dragonslayer',      subtype:'weapon', status:'rare', value:'2500-75000+',  demand:2  },
    /* ── Cosmetic Armor ── */
    { id:'emberknightset', name:"Ember Knight Set", rarity:'mythic', imgId:'emberknightset', subtype:'armor', status:'rising', value:90000, demand:3 },
    { id:'redphantomset', name:"Red Phantom Set", rarity:'mythic', imgId:'redphantomset', subtype:'armor', status:null, value:40000, demand:2.5 },
    { id:'autumnspiritset', name:"Autumn Spirit Set", rarity:'mythic', imgId:'autumnspiritset', subtype:'armor', status:null, value:20000, demand:1.5 },
    { id:'horsemanset', name:"Horseman Set", rarity:'mythic', imgId:'horsemanset', subtype:'armor', status:null, value:6500, demand:1 },
    { id:'astralaegisset', name:"Astral Aegis Set", rarity:'mythic', imgId:'astralaegisset', subtype:'armor', status:null, value:7000, demand:2 },
    { id:'towerkingset', name:"Tower King Set", rarity:'exclusive', imgId:'towerkingset', subtype:'armor', status:null, value:6000, demand:1 },
    { id:'vampireset', name:"Vampire Set", rarity:'mythic', imgId:'vampireset', subtype:'armor', status:null, value:4000, demand:0.5 },
    { id:'krampusset', name:"Krampus Set", rarity:'mythic', imgId:'krampusset', subtype:'armor', status:null, value:5000, demand:2 },
    { id:'chainedoverlordset', name:"Chained Overlord Set", rarity:'mythic', imgId:'chainedoverlordset', subtype:'armor', status:null, value:6000, demand:3.25 },
    { id:'mummyset', name:"Mummy Set", rarity:'mythic', imgId:'mummyset', subtype:'armor', status:null, value:3000, demand:1 },
    { id:'scorchguardset', name:"Scorchguard Set", rarity:'mythic', imgId:'scorchguardset', subtype:'armor', status:null, value:4000, demand:1.5 },
    { id:'voltsentinelset', name:"Volt Sentinel Set", rarity:'mythic', imgId:'voltsentinelset', subtype:'armor', status:null, value:4500, demand:2 },
    { id:'stormborneset', name:"Stormborne Set", rarity:'mythic', imgId:'stormborneset', subtype:'armor', status:null, value:2500, demand:1 },
    { id:'tempestbreakerset', name:"Tempestbreaker Set", rarity:'mythic', imgId:'tempestbreakerset', subtype:'armor', status:null, value:2000, demand:1 },
    { id:'brightcoreset', name:"Brightcore Set", rarity:'mythic', imgId:'brightcoreset', subtype:'armor', status:null, value:1500, demand:0.5 },
    { id:'voidcoreset', name:"Voidcore Set", rarity:'mythic', imgId:'voidcoreset', subtype:'armor', status:null, value:1500, demand:0.5 },
    { id:'betaset', name:"Beta Set", rarity:'mythic', imgId:'betaset', subtype:'armor', status:null, value:4500, demand:2 },
    { id:'darkknightset', name:"Dark Knight Set", rarity:'mythic', imgId:'darkknightset', subtype:'armor', status:null, value:4000, demand:1.25 },
    { id:'darknexusset', name:"Dark Nexus Set", rarity:'mythic', imgId:'darknexusset', subtype:'armor', status:null, value:3500, demand:2 },
    { id:'ghastlyset', name:"Ghastly Set", rarity:'mythic', imgId:'ghastlyset', subtype:'armor', status:null, value:2500, demand:0.5 },
    { id:'snowflakeset', name:"Snowflake Set", rarity:'mythic', imgId:'snowflakeset', subtype:'armor', status:null, value:3000, demand:1 },
    { id:'gingerbreadset', name:"Gingerbread Guardian Set", rarity:'mythic', imgId:'gingerbreadset', subtype:'armor', status:null, value:2500, demand:1.5 },
    { id:'frostskinset',      name:"Frostskin Set",            rarity:'mythic',    imgId:'frostskinset',      subtype:'armor',  status:null, value:2000,   demand:0.5  },
    { id:'phantomknightset',  name:"Phantom Knight Set",       rarity:'mythic',    imgId:'phantomknightset',  subtype:'armor',  status:null, value:1000,   demand:0.25 },
    { id:'aresset', name:"Ares Set", rarity:'mythic', imgId:'aresset', subtype:'armor', status:null, value:1750, demand:0.5 },
    { id:'plaguedoctorset',   name:"Plague Doctor Set",        rarity:'mythic',    imgId:'plaguedoctorset',   subtype:'armor',  status:null, value:1500,   demand:0.25 },
    { id:'spectralset', name:"Spectral Set", rarity:'mythic', imgId:'spectralset', subtype:'armor', status:null, value:1000, demand:0.25 },
    { id:'witchset', name:"Witch Set", rarity:'mythic', imgId:'witchset', subtype:'armor', status:null, value:300, demand:0 },
    { id:'spookyamethystset', name:"Spooky Amethyst Set", rarity:'mythic', imgId:'spookyamethystset', subtype:'armor', status:null, value:100, demand:0 },
    { id:'dragonslayerset', name:"Dragon Slayer Set", rarity:'mythic', imgId:'dragonslayerset', subtype:'armor', status:'rare', value:'3250-80000+', demand:2 },
    { id:'eggshellset',       name:"Eggshell Set",             rarity:'mythic',    imgId:'eggshellset',       subtype:'armor',  status:null, value:'850', demand:0.5    },
    { id:'viltronset',        name:"Viltron Set",              rarity:'mythic',    imgId:'viltronset',        subtype:'armor',  status:null, value:'1000', demand:0.5   },
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
    { id:'candy_nightmare', name:"Candy Nightmare", rarity:'legendary', imgId:'candy_nightmare', category:'chromas', status:'rising', value:7000, demand:3 },
    { id:'spooky_galaxy', name:"Spooky Galaxy", rarity:'mythic', imgId:'spooky_galaxy', category:'chromas', status:'rising', value:5500, demand:3.5 },
    { id:'candy_reaper', name:"Candy Reaper", rarity:'legendary', imgId:'candy_reaper', category:'chromas', status:null, value:2500, demand:2.5 },
    { id:'turkey_mech', name:"Turkey Mech", rarity:'exclusive', imgId:'turkey_mech', category:'chromas', status:null, value:1500, demand:2.25 },
    { id:'og_phantom', name:"OG Phantom", rarity:'rare', imgId:'og_phantom', category:'chromas', status:null, value:3000, demand:3 },
    { id:'santa_reaper',      name:"Santa Reaper",      rarity:'exclusive', imgId:'santa_reaper', demand:2,   value:'3500-75000+',  status:'rare',     category:'chromas' },
    { id:'santa_mech',        name:"Santa Mech",        rarity:'exclusive', imgId:'santa_mech', demand:2.5, value:'3500-85000+',  status:'rare',     category:'chromas' },
    { id:'toxic_dragon',      name:"Toxic Dragon",      rarity:'mythic', imgId:'toxic_dragon',    demand:2,   value:'240',         status:null,     category:'chromas' },
    { id:'blood_darkness', name:"Blood Darkness", rarity:'mythic', imgId:'blood_darkness', category:'chromas', status:null, value:800, demand:1.5 },
    { id:'amber_lightning', name:"Amber Lightning", rarity:'legendary', imgId:'amber_lightning', category:'chromas', status:null, value:2000, demand:2.5 },
    { id:'blood_kitsune', name:"Blood Kitsune", rarity:'mythic', imgId:'blood_kitsune', category:'chromas', status:null, value:500, demand:2 },
    { id:'emerald_lightning', name:"Emerald Lightning", rarity:'legendary', imgId:'emerald_lightning', demand:0,   value:'60',          status:null,     category:'chromas' },
    { id:'pumpkin_phantom',   name:"Pumpkin Phantom",   rarity:'mythic', imgId:'pumpkin_phantom',    demand:0,   value:'60',          status:null,     category:'chromas' },
    { id:'nightmare_dragon',  name:"Nightmare Dragon",  rarity:'mythic', imgId:'nightmare_dragon',    demand:0,   value:'60',          status:null,     category:'chromas' },
    { id:'bone_reaper',       name:"Bone Reaper",       rarity:'mythic', imgId:'bone_reaper',    demand:0,   value:'60',          status:null,     category:'chromas' },
    { id:'festive_astra',     name:"Festive Astra",     rarity:'mythic', imgId:'festive_astra',    demand:0,   value:'60',          status:null,     category:'chromas' },
    { id:'candy_lava',        name:"Candy Lava",        rarity:'legendary', imgId:'candy_lava', demand:2,   value:'1000',        status:null,     category:'chromas' },
    { id:'spectral_light',    name:"Spectral Light",    rarity:'legendary', imgId:'spectral_light', demand:2,   value:'1000',        status:null,     category:'chromas' },
    { id:'evil_krampus',      name:"Evil Krampus",      rarity:'legendary', imgId:'evil_krampus', demand:0,   value:'60',          status:null,     category:'chromas' },
    { id:'celestial_krampus', name:"Celestial Krampus", rarity:'mythic', imgId:'celestial_krampus',    demand:0,   value:'60',          status:null,     category:'chromas' },
    { id:'afterimage_time',   name:"Afterimage Time",   rarity:'secret', imgId:'afterimage_time',    demand:0,   value:'60',          status:null,     category:'chromas' },
    { id:'frosted_krampus',   name:"Frosted Krampus",   rarity:'mythic', imgId:'frosted_krampus',    demand:0,   value:'60',          status:null,     category:'chromas' },
    { id:'ethereal_angel',    name:"Ethereal Angel",    rarity:'mythic', imgId:'ethereal_angel',    demand:1,   value:'60',          status:null,     category:'chromas' },
    { id:'love_dragon',       name:"Love Dragon",       rarity:'exclusive', imgId:'love_dragon', demand:0,   value:'60',          status:null,     category:'chromas' },
    { id:'cupids_angel', name:"Cupid Angel", rarity:'mythic', imgId:'cupids_angel', category:'chromas', status:'rising', value:25000, demand:4.5 },
    { id:'love_kitsune', name:"Love Kitsune", rarity:'exclusive', imgId:'love_kitsune', category:'chromas', status:'rising', value:10000, demand:4 },
    { id:'candy_heart_ice',   name:"Candy-Heart Ice",   rarity:'legendary', imgId:'candy_heart_ice', demand:0,   value:'60',          status:null,     category:'chromas' },
    { id:'golden_bunny',      name:"Golden Bunny",      rarity:'mythic', imgId:'golden_bunny',    demand:1,   value:'240',         status:null,     category:'chromas' },
  ],

  other: [
    /* ── Cases ── */
    { id:'phantom_case', name:"Phantom Case", rarity:'mythic', imgId:'phantom_case', status:null, value:9000, demand:2.25 },
    { id:'winter_case', name:"Winter Case", rarity:'mythic', imgId:'winter_case', status:null, value:15000, demand:2.5 },
    { id:'halloween_case', name:"Halloween Case", rarity:'mythic', imgId:'halloween_case', status:null, value:3500, demand:2 },
    { id:'spooky_case', name:"Spooky Case", rarity:'mythic', imgId:'spooky_case', status:null, value:3000, demand:2.5 },
    { id:'nightmare_case',  name:"Nightmare Case",  rarity:'mythic', imgId:'nightmare_case',    demand:2, value:1200,  status:null },
    { id:'christmas_case',  name:"Christmas Case",  rarity:'mythic', imgId:'christmas_case',    demand:2, value:800,   status:null },
    { id:'easter_case',     name:"Easter Case",     rarity:'legendary', imgId:'easter_case', demand:0, value:180,   status:null },
    { id:'raid_case', name:"Raid Case", rarity:'legendary', imgId:'raid_case', status:null, value:1, demand:0.01 },
    { id:'christmas_gift',  name:"Christmas Gift",  rarity:'legendary', imgId:'christmas_gift', demand:0, value:240,   status:null },
    /* ── Chromatica ── */
    { id:'chromatic_cataclysm', name:"Chromatic Cataclysm", rarity:'ascended', imgId:'chromatic_cataclysm', status:null, value:250, demand:2 },
    { id:'chromatic_prism', name:"Chromatic Prism", rarity:'mythic', imgId:'chromatic_prism', status:null, value:150, demand:3 },
    { id:'dilation_schism', name:"Dilation Schism", rarity:'mythic', imgId:'dilation_schism', status:null, value:80, demand:2 },
    /* ── 2x EXP Boosts ── */
    { id:'exp_12h', name:"12 Hours 2x EXP", rarity:'legendary', imgId:'exp_12h', demand:2.5, value:1000,  status:null },
    { id:'exp_6h', name:"6 Hours 2x EXP", rarity:'epic', imgId:'exp_6h', status:null, value:500, demand:2.5 },
    { id:'exp_1h',  name:"1 Hour 2x EXP",   rarity:'rare', imgId:'exp_1h',      demand:2.5, value:150,  status:null },
    { id:'exp_15m', name:"15 Mins 2x EXP",  rarity:'common', imgId:'exp_15m',    demand:2, value:60,   status:null },
      { id:'heroic_kronax_crate', name:"Heroic Kronax Crate", rarity:'mythic', imgId:'kronax_crate', subtype:'other', status:null, value:500, demand:3.75 },
      { id:'viltron_crate', name:"Viltron Crate", rarity:'mythic', imgId:'viltron_crate', subtype:'other', status:null, value:150, demand:2.25 },
      { id:'kronax_crate', name:"Kronax Crate", rarity:'mythic', imgId:'kronax_crate', subtype:'other', status:null, value:100, demand:2.25 },
      { id:'heroic_viltron_crate', name:"Heroic Viltron Crate", rarity:'mythic', imgId:'viltron_crate', subtype:'other', status:null, value:400, demand:3.25 },
      { id:'summer_chest', name:"Summer Chest", rarity:'mythic', imgId:'summer_chest', subtype:'other', status:null, value:50, demand:4 },
      { id:'24_hours_2x_exp', name:"24 Hours 2x Exp", rarity:'mythic', imgId:'exp_24h', subtype:'other', status:null, value:2000, demand:2.75 },
      { id:'72_hour_2x_exp', name:"72 Hour 2x EXP", rarity:'mythic', imgId:'exp_72h', subtype:'other', status:null, value:3000, demand:3.5 },
      { id:'mythic_raid_case', name:"Mythic Raid CAse", rarity:'mythic', imgId:'raid_case', subtype:'other', status:null, value:40, demand:3 },
  ],

};


/* ══════════════════════════════════════════════
   Данные по вариантам для Elements.
   Редкость берётся из VL_DB.elements (общая для всех вариантов).
   Если предмета нет в варианте — он не показывается в списке.
══════════════════════════════════════════════ */
window.VL_VARIANTS_DB = {

  permanent: {
    reaper:               { value:3000, demand:1, status:null },
    galaxy:               { value:1000, demand:1, status:null },
    mech:                 { value:3000, demand:1, status:null },
    kitsune:              { value:1000, demand:1, status:null },
    time:                 { value:2500, demand:1, status:null },
    krampus:              { value:15000, demand:3, status:null },
    bunny:                { value:20000, demand:4, status:null },
    dragon:               { value:60, demand:1, status:null },
    gravity:              { value:60, demand:1, status:null },
    angel:                { value:60, demand:1, status:null },
    light:                { value:60, demand:1, status:null },
  },

  corrupted: {
    solar:                { value:65000, demand:4, status:null },
    infinity:             { value:175000, demand:3, status:null },
    phantom:              { value:150000, demand:4, status:null },
    nightmare:            { value:100000, demand:4, status:null },
    astra:                { value:100000, demand:3, status:null },
    time:                 { value:4000, demand:2, status:null },
    bunny:                { value:65000, demand:3, status:null },
    krampus:              { value:12000, demand:2.5, status:null },
    reaper:               { value:650, demand:3, status:null },
    galaxy:               { value:700, demand:3.5, status:null },
    mech:                 { value:500, demand:2.5, status:null },
    kitsune:              { value:750, demand:2.5, status:null },
    gravity:              { value:450, demand:4, status:null },
    dragon:               { value:100, demand:2, status:null },
    darkness:             { value:200, demand:4, status:null },
    angel:                { value:100, demand:2, status:null },
    lava:                 { value:100, demand:1, status:null },
    lightning:            { value:1, demand:0.01, status:null },
    ice:                  { value:0, demand:0, status:null },
    light:                { value:0, demand:0, status:null },
    smoke:                { value:0, demand:0, status:null },
    nature:    { value:0,      demand:0,   status:null       },
    earth:     { value:0,      demand:0,   status:null       },
    water:     { value:0,      demand:0,   status:null       },
    fire:      { value:0,      demand:0,   status:null       },
    sand:      { value:0,      demand:0,   status:null       },
    air:       { value:0,      demand:0,   status:null       },
    lunar:                { value:65000, demand:4, status:null },
},

  infernal: {
    reaper:               { value:30, demand:2, status:null },
    galaxy:               { value:30, demand:2, status:null },
    mech:                 { value:30, demand:2, status:null },
    kitsune:              { value:30, demand:2, status:null },
    krampus:              { value:4000, demand:2, status:null },
    astra:                { value:15000, demand:2, status:null },
    dragon:   { value:0,    demand:0, status:null },
    gravity:  { value:0,    demand:0, status:null },
    darkness: { value:0,    demand:0, status:null },
    angel:    { value:0,    demand:0, status:null },
    lava:     { value:0,    demand:0, status:null },
    lightning:{ value:0,    demand:0, status:null },
    light:    { value:0,    demand:0, status:null },
    smoke:    { value:0,    demand:0, status:null },
    ice:      { value:0,    demand:0, status:null },
    earth:    { value:0,     demand:0,   status:null },
    water:    { value:0,     demand:0,   status:null },
    nature:   { value:0,     demand:0,   status:null },
    fire:     { value:0,     demand:0,   status:null },
    sand:     { value:0,     demand:0,   status:null },
    air:      { value:0,     demand:0,   status:null },
  },

  shiny: {
    reaper:               { value:60, demand:2, status:null },
    galaxy:               { value:60, demand:2, status:null },
    kitsune:              { value:60, demand:2, status:null },
    mech:                 { value:60, demand:2, status:null },
    krampus:              { value:2000, demand:2, status:null },
    astra:                { value:8000, demand:3, status:null },
    time:                 { value:2000, demand:2, status:null },
    fools_phantom: { value:2000, demand:2, status:null },
    angel:         { value:0,   demand:0, status:null },
    dragon:        { value:0,    demand:0,   status:null },
    gravity:       { value:0,    demand:0,   status:null },
    darkness:      { value:0,    demand:0,   status:null },
    lava:          { value:0,    demand:0,   status:null },
    lightning:     { value:0,    demand:0,   status:null },
    light:         { value:0,    demand:0,   status:null },
    smoke:         { value:0,    demand:0,   status:null },
    ice:           { value:0,    demand:0,   status:null },
    earth:         { value:0,     demand:0, status:null },
    water:         { value:0,     demand:0, status:null },
    nature:        { value:0,     demand:0, status:null },
    fire:          { value:0,     demand:0, status:null },
    sand:          { value:0,     demand:0, status:null },
    air:           { value:0,     demand:0, status:null },
  },

  luxurious: {
    galaxy:               { value:2000, demand:3, status:null },
    fools_phantom:        { value:2500, demand:2, status:null },
    time:                 { value:4000, demand:3, status:null },
    astra:                { value:10000, demand:3, status:null },
    krampus:              { value:4000, demand:3, status:null },
    kitsune:              { value:500, demand:3, status:null },
    reaper:               { value:200, demand:2, status:null },
    mech:                 { value:200, demand:2, status:null },
    angel:                { value:1000, demand:3, status:null },
    gravity:              { value:0, demand:0, status:null },
    dragon:               { value:0, demand:0, status:null },
    darkness:             { value:0, demand:0, status:null },
    lava:                 { value:0, demand:0, status:null },
    lightning:            { value:0, demand:0, status:null },
    light:                { value:0, demand:0, status:null },
    smoke:                { value:0, demand:0, status:null },
    ice:                  { value:0, demand:0, status:null },
    earth:                { value:0, demand:0, status:null },
    water:                { value:0, demand:0, status:null },
    nature:               { value:0, demand:0, status:null },
    fire:                 { value:0, demand:0, status:null },
    sand:                 { value:0, demand:0, status:null },
    air:                  { value:0, demand:0, status:null },
  },

  armored: {
    reaper:               { value:90, demand:2, status:null },
    mech:                 { value:90, demand:2, status:null },
    kitsune:              { value:90, demand:2, status:null },
    galaxy:               { value:90, demand:2, status:null },
    angel:                { value:300, demand:3, status:null },
    gravity:  { value:0,  demand:0, status:null },
    dragon:   { value:0,   demand:0,   status:null },
    darkness: { value:0,   demand:0,   status:null },
    lava:     { value:0,   demand:0,   status:null },
    lightning:{ value:0,   demand:0,   status:null },
    light:    { value:0,   demand:0,   status:null },
    smoke:    { value:0,   demand:0,   status:null },
    ice:      { value:0,   demand:0,   status:null },
    earth:    { value:0,    demand:0,   status:null },
    water:    { value:0,    demand:0,   status:null },
    nature:   { value:0,    demand:0,   status:null },
    fire:     { value:0,    demand:0,   status:null },
    sand:     { value:0,    demand:0,   status:null },
    air:      { value:0,    demand:0,   status:null },
  },

  celestial: {
    reaper:               { value:160, demand:2, status:null },
    galaxy:               { value:160, demand:2, status:null },
    kitsune:              { value:160, demand:2, status:null },
    mech:                 { value:160, demand:2, status:null },
    krampus:              { value:6000, demand:2, status:null },
    astra:                { value:30000, demand:2, status:null },
    time:                 { value:2500, demand:3, status:null },
    angel:                { value:40, demand:2, status:null },
    gravity:  { value:0,   demand:0,   status:null },
    dragon:   { value:0,    demand:0, status:null },
    darkness: { value:0,    demand:0, status:null },
    lava:     { value:0,    demand:0, status:null },
    lightning:{ value:0,    demand:0,   status:null },
    light:    { value:0,    demand:0, status:null },
    smoke:    { value:0,    demand:0, status:null },
    ice:      { value:0,    demand:0, status:null },
    earth:    { value:0,     demand:0,   status:null },
    water:    { value:0,     demand:0,   status:null },
    nature:   { value:0,     demand:0,   status:null },
    fire:     { value:0,     demand:0,   status:null },
    sand:     { value:0,     demand:0,   status:null },
    air:      { value:0,     demand:0,   status:null },
  },

  mutated: {
    nightmare: { value:450000, demand:5,   status:'rising' },
    astra:                { value:250000, demand:4, status:null },
    bunny:     { value:150000, demand:3.5, status:null },
    krampus:              { value:350000, demand:5, status:null },
    time:                 { value:22500, demand:2, status:null },
    galaxy:               { value:9000, demand:3, status:null },
    reaper:               { value:8000, demand:2.5, status:null },
    kitsune:              { value:8000, demand:2.5, status:null },
    mech:                 { value:7000, demand:2, status:null },
    gravity:              { value:1800, demand:3.5, status:null },
    darkness:             { value:1200, demand:2, status:null },
    dragon:               { value:1200, demand:2, status:null },
    angel:                { value:1200, demand:2, status:null },
    lava:                 { value:1200, demand:2, status:null },
    lightning:            { value:150, demand:2, status:null },
    ice:                  { value:30, demand:1, status:null },
    light:                { value:30, demand:1, status:null },
    smoke:                { value:30, demand:1, status:null },
    earth:                { value:0, demand:0, status:null },
    water:                { value:0, demand:0, status:null },
    fire:                 { value:0, demand:0, status:null },
    sand:                 { value:0, demand:0, status:null },
    nature:               { value:0, demand:0, status:null },
    air:                  { value:0, demand:0, status:null },
    infinity:             { value:550000, demand:5, status:null },
},

  jumpscared: {
    sunlar:               { value:45000, demand:3.5, status:'rising' },
  },

  jumpscarebborn: {
    sunlar:               { value:90000, demand:3.5, status:'unstable' },
  },

  grumpy: {
    krampus:              { value:17500, demand:2.5, status:null },
  },

  kronos: {
    astra:                { value:70000, demand:3.5, status:null },
    kitsune:              { value:2000, demand:3, status:null },
    krampus:              { value:130000, demand:4, status:null },
    galaxy:               { value:300, demand:3, status:null },
    angel:                { value:500, demand:2.5, status:null },
    reaper:               { value:120, demand:2, status:null },
    mech:                 { value:120, demand:1.5, status:null },
    gravity:              { value:0, demand:0, status:null },
    dragon:               { value:0, demand:0, status:null },
    darkness:             { value:0, demand:0, status:null },
    lava:                 { value:0, demand:0, status:null },
    lightning:{ value:0,    demand:0,   status:null    },
    light:    { value:0,    demand:0,   status:null    },
    ice:      { value:0,    demand:0,   status:null    },
    earth:    { value:0,     demand:0, status:null    },
    water:    { value:0,     demand:0, status:null    },
    nature:   { value:0,     demand:0, status:null    },
    fire:     { value:0,     demand:0, status:null    },
    sand:     { value:0,     demand:0, status:null    },
    air:      { value:0,     demand:0, status:null    },
  },

  enraged: {
    nightmare:            { value:65000, demand:4.5, status:null },
    phantom:              { value:45000, demand:4, status:null },
    kitsune:              { value:400, demand:3, status:null },
    galaxy:               { value:80, demand:2, status:null },
    reaper:               { value:80, demand:2, status:null },
    mech:                 { value:80, demand:2, status:null },
    angel:    { value:0,   demand:0,   status:null    },
    gravity:  { value:0,    demand:0,   status:null    },
    dragon:   { value:0,    demand:0,   status:null    },
    darkness: { value:0,    demand:0,   status:null    },
    lava:     { value:0,    demand:0,   status:null    },
    lightning:{ value:0,    demand:0, status:null    },
    light:    { value:0,    demand:0,   status:null    },
    smoke:    { value:0,    demand:0,   status:null    },
    ice:      { value:0,    demand:0,   status:null    },
    earth:    { value:0,     demand:0, status:null    },
    water:    { value:0,     demand:0, status:null    },
    nature:   { value:0,     demand:0, status:null    },
    fire:     { value:0,     demand:0, status:null    },
    sand:     { value:0,     demand:0, status:null    },
    air:      { value:0,     demand:0, status:null    },
  },

  radiant: {
    time:                 { value:120000, demand:4, status:'inprocess' },
    galaxy:               { value:70000, demand:4.5, status:null },
    reaper:       { value:60000, demand:3,   status:null    },
    mech:                 { value:50000, demand:3, status:null },
    kitsune:              { value:65000, demand:4, status:null },
    gravity:              { value:20000, demand:3.5, status:null },
    dragon:               { value:8000, demand:3, status:null },
    darkness:             { value:15000, demand:3.5, status:null },
    lightning:            { value:2000, demand:3, status:null },
    angel:                { value:10000, demand:1, status:null },
    lava:                 { value:10000, demand:2, status:null },
    light:                { value:150, demand:1, status:null },
    smoke:                { value:80, demand:1, status:null },
    ice:                  { value:80, demand:1, status:null },
    nature:               { value:0, demand:0, status:null },
    earth:                { value:0, demand:0, status:null },
    water:                { value:0, demand:0, status:null },
    fire:                 { value:0, demand:0, status:null },
    sand:                 { value:0, demand:0, status:null },
    air:                  { value:0, demand:0, status:null },
  },

  timelost: {
    kitsune:              { value:8000, demand:4, status:null },
    fools_phantom:        { value:100000, demand:4, status:'rising' },
    mech:                 { value:30000, demand:3, status:null },
    angel:                { value:60000, demand:5, status:null },
    gravity:              { value:90, demand:2, status:null },
    reaper:               { value:2500, demand:1, status:null },
    darkness:             { value:150, demand:2, status:null },
    dragon:               { value:30, demand:2, status:null },
    lava:                 { value:30, demand:2, status:null },
    lightning:            { value:0, demand:0, status:null },
    light:                { value:0, demand:0, status:null },
    ice:                  { value:0, demand:0, status:null },
    earth:         { value:0,    demand:0,   status:null    },
    water:         { value:0,    demand:0,   status:null    },
    nature:        { value:0,    demand:0,   status:null    },
    fire:          { value:0,    demand:0,   status:null    },
    sand:          { value:0,    demand:0,   status:null    },
    air:           { value:0,    demand:0,   status:null    },
  },

  glitched: {
    galaxy:               { value:30000, demand:3, status:null },
    bunny:                { value:300000, demand:2.5, status:null },
    gravity:              { value:4000, demand:3, status:null },
  },

  cupid: {
    angel:                { value:17500, demand:3, status:null },
  },

  runic: {
    water:                { value:500, demand:2, status:null },
  },

  whirlwind: {
    kitsune:              { value:1200000, demand:5, status:'unstable' },
  },

  viltron: {
    galaxy:               { value:150000, demand:5, status:null },
  },

  kronax: {
    time:                 { value:130000, demand:4, status:null },
  },

  nuclear: {
    ice:                  { value:3000, demand:2, status:null },
    lava:                 { value:3000, demand:2, status:null },
    air:                  { value:100000, demand:5, status:'rare' },
    dragon:               { value:25000, demand:4, status:null },
  },
  corrupted_infernal: {
    time:                 { value:50000, demand:3, status:'inprocess' },
  },

  equinox: {
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
    corrupted: [ {v:600,d:1},{v:600,d:1},{v:600,d:1},{v:600,d:1},{v:600,d:1},{v:600,d:1},{v:600,d:1},{v:600,d:1},{v:600,d:1},{v:600,d:1},{v:600,d:1} ]
  },
  poseidtrident: {
    corrupted: [ {v:20,d:0.25},{v:20,d:0.25},{v:20,d:0.25},{v:20,d:0.25},{v:20,d:0.25},{v:20,d:0.25},{v:20,d:0.25},{v:20,d:0.25},{v:20,d:0.25},{v:40,d:0.5},{v:100,d:1} ]
  },
  doombringer: {
    corrupted: [ {v:100,d:0.5},{v:100,d:0.5},{v:100,d:0.5},{v:100,d:0.5},{v:100,d:0.5},{v:100,d:0.5},{v:100,d:0.5},{v:100,d:0.5},{v:130,d:0.75},{v:150,d:1},{v:200,d:1} ]
  },
  grimshadekat: {
    corrupted: [ {v:20,d:0.5},{v:20,d:0.5},{v:20,d:0.5},{v:20,d:0.5},{v:20,d:0.5},{v:20,d:0.5},{v:20,d:0.5},{v:20,d:0.5},{v:20,d:0.5},{v:20,d:0.5},{v:40,d:1} ]
  },
  magmaedge: {
    corrupted: [ {v:100,d:0.5},{v:100,d:0.5},{v:100,d:0.5},{v:100,d:0.5},{v:100,d:0.5},{v:100,d:0.5},{v:100,d:0.5},{v:100,d:0.5},{v:100,d:0.5},{v:150,d:0.5},{v:200,d:0.5} ]
  },
  diamondcrack: {
    corrupted: [ {v:20,d:0.25},{v:20,d:0.25},{v:20,d:0.25},{v:20,d:0.25},{v:20,d:0.25},{v:20,d:0.25},{v:20,d:0.25},{v:20,d:0.25},{v:20,d:0.25},{v:20,d:0.25},{v:40,d:0.5} ]
  },
  abysstrident: {
    corrupted: [ null,null,null,null,null,{v:1000,d:2},{v:1000,d:2},{v:1000,d:2},{v:1200,d:2},{v:1300,d:2},{v:1500,d:2} ]
  },
  ascdaggers: {
    corrupted: [ null,null,null,null,null,{v:800,d:1},{v:850,d:1},{v:900,d:1},{v:1000,d:1},{v:1100,d:1},{v:1200,d:1} ]
  },
  magmaedgev2: {
    corrupted: [ null,null,null,null,null,{v:1000,d:1},{v:1000,d:1},{v:1000,d:1},{v:1200,d:1},{v:1300,d:1},{v:1500,d:1.5} ]
  },
  lightkatanav2: {
    corrupted: [ null,null,null,null,null,{v:1000,d:1.5},{v:1200,d:1.5},{v:1300,d:1.5},{v:1400,d:1.5},{v:1500,d:1.5},{v:2000,d:2} ]
  },
  mentav2: {
    corrupted: [ null,null,null,null,null,{v:1250,d:1.5},{v:1500,d:1.5},{v:1750,d:1.5},{v:2000,d:1.5},{v:3000,d:1.5},{v:4000,d:2} ]
  },
  /* Wooden Sword V2 — только ролл 11 (индекс 10) */
  woodenv2: {
    corrupted: [ null,null,null,null,null,null,null,null,null,null,{v:3000,d:2.5} ]
  },
  ascvoidblade: {
    corrupted: [ null,null,null,null,null,{v:1250,d:2},{v:1500,d:2},{v:1750,d:2},{v:2000,d:2},{v:3000,d:2},{v:4000,d:2.5} ]
  },
  cupidfury: {
    corrupted: [ {v:1000,d:1.5},{v:1000,d:1.5},{v:1000,d:1.5},{v:1000,d:1.5},{v:1000,d:1.5},{v:1000,d:1.5},{v:1000,d:1.5},{v:1000,d:1.5},{v:1000,d:1.5},{v:1000,d:1.5},{v:1500,d:2} ]
  },
  cupidwrath: {
    corrupted: [ {v:10000,d:3},{v:10000,d:3},{v:10000,d:3},{v:10000,d:3},{v:10000,d:3},{v:10000,d:3},{v:10000,d:3},{v:10000,d:3},{v:10000,d:3},{v:10000,d:3},{v:15000,d:3} ]
  },
  tlconqblade: {
    corrupted: [ {v:400,d:1},{v:400,d:1},{v:400,d:1},{v:400,d:1},{v:400,d:1},{v:400,d:1},{v:400,d:1},{v:400,d:1},{v:500,d:1},{v:700,d:1},{v:1000,d:1} ]
  },
  tlconqbladele: {
    corrupted: [ {v:22000,d:3},{v:23500,d:3},{v:25000,d:3},{v:26500,d:3},{v:28000,d:3},{v:30000,d:3},{v:32000,d:3},{v:35000,d:3},{v:40000,d:3},{v:45000,d:3},{v:55000,d:4} ]
  },
  glitchedstaff: {
    corrupted: [ null,null,null,null,null,{v:1000,d:1.5},{v:1100,d:1.5},{v:1200,d:1.5},{v:1300,d:1.5},{v:1500,d:1.5},{v:2000,d:2} ]
  },
  viltronstaff: {
    corrupted: [ null,null,null,null,null,{v:250,d:0.5},{v:250,d:0.5},{v:250,d:0.5},{v:250,d:0.5},{v:300,d:0.5},{v:400,d:0.5} ]
  },
  seriously: {
    corrupted: [ null,null,null,null,null,{v:15000,d:1.5},{v:17500,d:1.5},{v:20000,d:2},{v:25000,d:2},{v:30000,d:2},{v:35000,d:2} ]
  },
  easterstaff: {
    corrupted: [ null,null,null,null,null,{v:1000,d:2},{v:1000,d:2},{v:1000,d:2},{v:1000,d:2},{v:1000,d:2},{v:1500,d:2} ]
  },
  fzset: {
    corrupted: [ {v:200,d:0.5},{v:200,d:0.5},{v:200,d:0.5},{v:200,d:0.5},{v:200,d:0.5},{v:200,d:0.5},{v:200,d:0.5},{v:200,d:0.5},{v:200,d:0.5},{v:300,d:0.5},{v:600,d:1} ]
  },
  zset: {
    corrupted: [ {v:20,d:0},{v:20,d:0},{v:20,d:0},{v:20,d:0},{v:20,d:0},{v:20,d:0},{v:20,d:0},{v:20,d:0},{v:20,d:0},{v:20,d:0},{v:40,d:0} ]
  },
  hadesset: {
    corrupted: [ {v:200,d:0.5},{v:200,d:0.5},{v:200,d:0.5},{v:200,d:0.5},{v:200,d:0.5},{v:200,d:0.5},{v:200,d:0.5},{v:200,d:0.5},{v:200,d:0.5},{v:300,d:0.5},{v:600,d:1} ]
  },
  kronaxset: {
    corrupted: [ {v:500,d:1},{v:500,d:1},{v:500,d:1},{v:500,d:1},{v:500,d:1},{v:500,d:1},{v:500,d:1},{v:500,d:1},{v:1000,d:1},{v:1500,d:1},{v:2000,d:1.5} ]
  },
  heroickronax: {
    corrupted: [ {v:500,d:1},{v:500,d:1},{v:500,d:1},{v:500,d:1},{v:500,d:1},{v:500,d:1},{v:500,d:1},{v:500,d:1},{v:1000,d:1},{v:1500,d:1},{v:2000,d:1.5} ]
  },
  viltron_set: {
    corrupted: [ {v:300,d:0},{v:300,d:0.25},{v:350,d:0.25},{v:400,d:0.25},{v:425,d:0.25},{v:450,d:0.5},{v:500,d:0.5},{v:525,d:0.5},{v:550,d:0.75},{v:575,d:0.75},{v:600,d:0.75} ]
  },
  rainbow_noodle: {
    corrupted: [ {v:500,d:0.35},{v:525,d:0.5},{v:550,d:0.5},{v:575,d:0.5},{v:600,d:0.75},{v:625,d:0.75},{v:650,d:0.75},{v:675,d:0.75},{v:700,d:1},{v:725,d:1},{v:750,d:1} ]
  },
  curious_wooden_bow: {
    corrupted: [ {v:2,d:0},{v:5,d:0},{v:5,d:0},{v:5,d:0},{v:10,d:0},{v:10,d:0},{v:10,d:0},{v:10,d:0},{v:25,d:1},{v:35,d:1},{v:50,d:1} ]
  },
  shadow_scythe: {
    corrupted: [ {v:2000,d:2},{v:2250,d:2},{v:2500,d:2},{v:2750,d:2},{v:3000,d:2},{v:3250,d:2},{v:3500,d:2},{v:3750,d:2},{v:4000,d:2},{v:4250,d:2.5},{v:4750,d:3} ]
  },
  firework_bow: {
    corrupted: [ {v:6250,d:2},{v:6500,d:2},{v:6750,d:2},{v:7000,d:2},{v:7250,d:2},{v:7500,d:2},{v:7750,d:2},{v:8000,d:2},{v:9000,d:2},{v:10000,d:2},{v:12000,d:2.5} ]
  },
  terrablade_le: {
    corrupted: [ {v:54000,d:4},{v:57000,d:4},{v:60000,d:4},{v:63000,d:4},{v:66000,d:4},{v:69000,d:4},{v:72000,d:4},{v:75000,d:4},{v:85000,d:4},{v:95000,d:4},{v:110000,d:4.5} ]
  },
  pool_noodle: {
    corrupted: [ {v:25,d:0.25},{v:32.5,d:0.25},{v:40,d:0.25},{v:47.5,d:0.25},{v:55,d:0.25},{v:65,d:0.35},{v:75,d:0.35},{v:85,d:0.35},{v:100,d:0.5},{v:115,d:0.5},{v:125,d:0.5} ]
  },
  heroic_viltron_set: {
    corrupted: [ {v:300,d:0.5},{v:300,d:0.5},{v:300,d:0.5},{v:300,d:0.5},{v:300,d:0.5},{v:300,d:0.5},{v:300,d:0.5},{v:300,d:0.5},{v:300,d:0.5},{v:500,d:0.5},{v:1000,d:1} ]
  },
  terrablade: {
    corrupted: [ {v:900,d:2},{v:950,d:2},{v:1000,d:2},{v:1050,d:2},{v:1100,d:2},{v:1150,d:2},{v:1200,d:2},{v:1250,d:2},{v:1300,d:2},{v:1500,d:2},{v:2000,d:2.5} ]
  },
  hydromaxx_lr: {
    corrupted: [ {v:17000,d:3},{v:18000,d:3},{v:19000,d:3},{v:20000,d:3},{v:21000,d:3},{v:22000,d:3},{v:23000,d:3},{v:24000,d:3},{v:26000,d:3},{v:30000,d:3.25},{v:40000,d:3.5} ]
  },
  hydromaxx_cqb: {
    corrupted: [ {v:800,d:1.5},{v:850,d:1.5},{v:900,d:1.5},{v:950,d:1.5},{v:1000,d:1.5},{v:1050,d:1.5},{v:1100,d:1.5},{v:1150,d:1.5},{v:1200,d:1.5},{v:1300,d:1.5},{v:1500,d:2} ]
  },
  lord_prisma_ring: {
    corrupted: [ {v:15000,d:3},{v:16000,d:3},{v:17000,d:3},{v:18000,d:3},{v:19000,d:3},{v:20000,d:3},{v:22000,d:3},{v:25000,d:3},{v:27000,d:3.5},{v:30000,d:3.5},{v:35000,d:4} ]
  },
  lucky_banner_charm: {
    corrupted: [ {v:500,d:1},{v:500,d:1},{v:500,d:1},{v:500,d:1},{v:500,d:1},{v:500,d:1.5},{v:500,d:1.5},{v:500,d:1.5},{v:600,d:1.5},{v:700,d:1.5},{v:1000,d:2} ]
  },
  easter_ring: {
    corrupted: [ {v:125,d:0},{v:125,d:0},{v:150,d:0},{v:150,d:0.25},{v:150,d:0.25},{v:175,d:0.25},{v:175,d:0.25},{v:175,d:0.25},{v:200,d:0.5},{v:200,d:0.5},{v:200,d:0.5} ]
  },
  celestial_ring: {
    corrupted: [ {v:1,d:0.25},{v:1,d:0.5},{v:1,d:0.5},{v:1,d:0.5},{v:1,d:0.5},{v:1,d:0.75},{v:1,d:0.75},{v:1,d:0.75},{v:2,d:1},{v:2,d:1},{v:2,d:1} ]
  },
  torrential_aspect: {
    corrupted: [ {v:2400,d:2.5},{v:2500,d:2.5},{v:2600,d:2.5},{v:2700,d:2.5},{v:2800,d:2.5},{v:2900,d:2.5},{v:3000,d:2.5},{v:3100,d:2.5},{v:3200,d:2.5},{v:3500,d:2.5},{v:4000,d:3} ]
  },
  skyborne_runes: {
    corrupted: [ {v:1,d:0.25},{v:1,d:0.5},{v:1,d:0.5},{v:1,d:0.5},{v:1,d:0.75},{v:1,d:0.75},{v:1,d:0.75},{v:1,d:0.75},{v:2,d:1},{v:2,d:1},{v:2,d:1} ]
  },
  graviton_ring: {
    corrupted: [ {v:2550,d:1},{v:2600,d:1},{v:2650,d:1},{v:2700,d:1},{v:2750,d:1},{v:2800,d:1},{v:2850,d:1},{v:2900,d:1},{v:3000,d:1},{v:3500,d:1.5},{v:4000,d:2} ]
  },
  gubby_launcher: {
    corrupted: [ {v:200000,d:3},{v:200000,d:3},{v:200000,d:3},{v:200000,d:3},{v:200000,d:3},{v:200000,d:3},{v:200000,d:3},{v:200000,d:3},{v:200000,d:3},{v:220000,d:3},{v:250000,d:3} ]
  },
  fission_ring: {
    corrupted: [ {v:15000,d:3},{v:16000,d:3},{v:17000,d:3},{v:18000,d:3},{v:19000,d:3},{v:20000,d:3},{v:22000,d:3},{v:25000,d:3},{v:27000,d:3.5},{v:30000,d:3.5},{v:35000,d:4} ]
  },
  wise_necklace: {
    corrupted: [ {v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0} ]
  },
  dragonholy_pendant: {
    corrupted: [ {v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0} ]
  },
  tranquil_necklace: {
    corrupted: [ {v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0.25},{v:0,d:0.25},{v:0,d:0.25} ]
  },
  sorcerous_ring: {
    corrupted: [ {v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:1,d:0.25},{v:1,d:0.25},{v:1,d:0.25} ]
  },
  ancient_runes: {
    corrupted: [ {v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:1,d:0.25},{v:1,d:0.25},{v:1,d:0.25} ]
  },
  lunar_neckalce: {
    corrupted: [ {v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0.25},{v:0,d:0.25},{v:0,d:0.25} ]
  },
  vitalis_necklace: {
    corrupted: [ {v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:0,d:0},{v:1,d:0.25},{v:1,d:0.25},{v:1,d:0.25},{v:1,d:0.5},{v:1,d:0.5},{v:1,d:0.5} ]
  },
  reapers_ring: {
    corrupted: [ {v:null,d:0},{v:null,d:0},{v:null,d:0},{v:null,d:0},{v:null,d:0},{v:null,d:0},{v:null,d:0},{v:null,d:0},{v:null,d:0},{v:null,d:0},{v:40,d:1} ]
  },
  lionels_war_blade: {
    corrupted: [ {v:2000,d:3},{v:2250,d:3},{v:2500,d:3},{v:2750,d:3},{v:3000,d:3},{v:3250,d:3},{v:3500,d:3},{v:4000,d:3},{v:5000,d:3},{v:6000,d:3},{v:8000,d:3.5} ]
  },
  hydromaxx_mini: {
    corrupted: [ {v:64000,d:4},{v:67000,d:4},{v:70000,d:4},{v:73000,d:4},{v:76000,d:4},{v:79000,d:4},{v:82000,d:4},{v:85000,d:4},{v:95000,d:4},{v:110000,d:4.5},{v:130000,d:5} ]
  },
  hydromaxx_lrxl: {
    corrupted: [ {v:29000,d:3},{v:30000,d:3},{v:32000,d:3},{v:34000,d:3},{v:36000,d:3},{v:38000,d:3},{v:40000,d:3},{v:42000,d:3},{v:45000,d:3},{v:50000,d:3.5},{v:60000,d:4} ]
  },
  ascendant_vanquisher: {
    corrupted: [ {v:null,d:0},{v:null,d:0},{v:null,d:0},{v:null,d:0},{v:null,d:0},{v:2700,d:2},{v:2900,d:2},{v:3100,d:2},{v:3300,d:2},{v:3500,d:2},{v:4000,d:2.5} ]
  },
};


/* ══════════════════════════════════════════════
   Конфиг редкостей и статусов
══════════════════════════════════════════════ */
window.RARITY_CFG = {
  common:    { label:'Common',    color:'#8a8a8a', glow:'rgba(138,138,138,0.15)', cls:'rarity-common'    },
  uncommon:  { label:'Uncommon',  color:'#2ecc71', glow:'rgba(46,204,113,0.20)',  cls:'rarity-uncommon'  },
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
  unstable:   { label:'Unstable',    color:'#bd93f9' },
  rare:      { label:'Rare',       color:'#40e0c0' },
  inprocess: { label:'In Process', color:'#8899aa' },
};

window.STATUS_DESC = {
  rising:   "This status applies when an item shows a conditional value increase due to its rarity, exclusivity, usefulness, related updates, or quantity. All of these factors can also be weighed against other items.",
  lowering: "This status applies when an item shows a conditional value decrease — usually because of its excessive quantity, a re-release, or because the developers nerfed its capabilities.",
  inflated: "This status applies when an item suddenly becomes hyped and traded among influential players. A rather rare and isolated case, since it doesn't always happen the way the devs intended.",
  hyped:    "This status applies when an item has incredible growth potential due to upcoming events such as a related update, balance changes, or it becoming a community favorite. A fairly rare case.",
  unstable:   "This status applies when an item has an uncertain fate. The devs may release it one way today and rework it completely the next. Very rare — devs aren't usually high enough to let this happen, haha.",
  rare:      "This status applies if the exclusive item is incredibly rare. Items with serial numbers, where numbers from 1 to 10 are the most valuable in the entire game, are considered rare. These items typically don't have a maximum value. Often, it's set to \"value at the owner's discretion.\"",
  inprocess: "This status applies if the item was previously added to the site for implementation and the price was subsequently changed. This means that the price changes are completely irrelevant, and there's no need to stare at them with longing eyes."
};
