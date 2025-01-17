//priority: 1000

const refinedStorageItems = [
    'grid',
    'crafting_grid',
    'pattern_grid',
    'fluid_grid',
    'controller',
    'creative_controller',
    'network_receiver',
    'network_transmitter',
    'relay',
    'detector',
    'security_manager',
    'wireless_transmitter',
    'crafter',
    'crafting_monitor',
    'disk_manipulator',
    'crafter_manager'
];
// Items added here will get recipes for Pedestals & Cobblegen Randomizer cobblegens.
const generatableCobblestone = [
    'byg:dacite_cobblestone',
    'byg:ether_stone',
    'byg:red_rock',
    'byg:scoria_cobblestone',
    'byg:soapstone',
    'embellishcraft:basalt_cobblestone',
    'embellishcraft:gneiss_cobblestone',
    'embellishcraft:jade_cobblestone',
    'embellishcraft:larvikite_cobblestone',
    'embellishcraft:marble_cobblestone',
    'embellishcraft:slate_cobblestone',
    'create:andesite_cobblestone',
    'create:diorite_cobblestone',
    'create:granite_cobblestone',
    'quark:cobbedstone',
    'undergarden:depthrock',
    'undergarden:shiverstone',
    'create:dark_scoria_cobblestone',
    'create:scoria_cobblestone',
    'create:gabbro_cobblestone',
    'create:dolomite_cobblestone',
    'create:weathered_limestone_cobblestone',
    'create:limestone_cobblestone'
];
// Items added here will get recipes for Pedestals & Cobblegen Randomizer stonegens.
const generatableStone = [
    'minecraft:andesite',
    'minecraft:diorite',
    'minecraft:granite',
    'byg:black_sandstone',
    'byg:blue_sandstone',
    'byg:dacite',
    'byg:purple_sandstone',
    'byg:pink_sandstone',
    'byg:scoria_stone',
    'byg:white_sandstone',
    'embellishcraft:basalt',
    'embellishcraft:gneiss',
    'embellishcraft:jade',
    'embellishcraft:larvikite',
    'embellishcraft:marble',
    'embellishcraft:slate',
    'minecraft:red_sandstone',
    'minecraft:sandstone',
    'quark:basalt',
    'quark:brimstone',
    'quark:jasper',
    'quark:limestone',
    'quark:marble',
    'quark:permafrost',
    'quark:slate',
    'astralsorcery:marble_raw',
    'create:dark_scoria',
    'create:scoria',
    'create:gabbro',
    'create:dolomite',
    'create:weathered_limestone',
    'create:limestone'
];
const generatableBasalt = [];

const colors = [
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black',
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray'
];

var itemsToHide = [
    'ars_nouveau:arcane_brick',
    'ars_nouveau:arcane_ore',
    'ars_nouveau:mana_gem_block',
    'bloodmagic:coalsand',
    'bloodmagic:saltpeter',
    'bloodmagic:sulfur',
    // 'bountifulbaubles:potion_wormhole',
    'create:powdered_obsidian',
    'create:honey_bucket',
    'create:copper_ore',
    'create:zinc_ore',
    'eidolon:tallow',
    'immersiveengineering:dust_saltpeter',
    'immersiveengineering:dust_wood',
    'immersiveengineering:coal_coke',
    'mapperbase:bitumen_ore',
    'mapperbase:iron_plate',
    'mapperbase:iron_rod',
    'mapperbase:raw_bitumen',
    'morevanillalib:obsidian_shard',
    'powah:uraninite_ore',
    'powah:uraninite_ore_dense',
    'powah:uraninite_ore_poor',
    'powah:uraninite_raw',
    'powah:uraninite_raw_dense',
    'powah:uraninite_raw_poor',
    'quark:biotite',
    'quark:biotite_ore',
    'quark:tallow',
    'refinedstorage:silicon',
    'thermal:coal_coke',
    'thermal:coal_coke_block',
    'thermal:ender_pearl_dust',
    'thermal:sawdust',
    'thermal:press_gear_die',
    'thermal:press_packing_3x3_die',
    'thermal:press_packing_2x2_die',
    'thermal:press_unpacking_die',
    'supplementaries:pedestal',
    'supplementaries:crank',
    'supplementaries:cog_block',
    'supplementaries:redstone_illuminator',
    'supplementaries:turn_table',
    'supplementaries:jar',
    'supplementaries:jar_tinted',
    'supplementaries:firefly_jar',
    'supplementaries:stone_lamp',
    'supplementaries:sack',
    'supplementaries:blackboard'
];

var regexHide = [
    /emendatusenigmatica:\w+_andesite_ore/,
    /emendatusenigmatica:\w+_gabbro_ore/,
    /emendatusenigmatica:\w+_c_limestone_ore/,
    /emendatusenigmatica:\w+_scoria_ore/,
    /emendatusenigmatica:\w+_weathered_limestone_ore/,
    /emendatusenigmatica:\w+_jasper_ore/,
    /emendatusenigmatica:\w+_marble_ore/,
    /emendatusenigmatica:\w+_slate_ore/,
    /emendatusenigmatica:\w+_netherrack_ore/,
    /emendatusenigmatica:\w+_blackstone_ore/,
    /emendatusenigmatica:\w+_end_stone_ore/,
    /emendatusenigmatica:\w+_mossy_stone_ore/,
    /emendatusenigmatica:\w+_granite_ore/,
    /emendatusenigmatica:\w+_diorite_ore/,
    /emendatusenigmatica:\w+_sand_ore/,
    /emendatusenigmatica:\w+_gravel_ore/,
    /emendatusenigmatica:\w+_violecite_ore/,
    /emendatusenigmatica:\w+_sulphuric_rock_ore/,
    /emendatusenigmatica:\w+_flavolite_ore/,
    /emendatusenigmatica:\w+_cryptic_stone_ore/,
    /emendatusenigmatica:\w+_ether_stone_ore/,
    /emendatusenigmatica:\w+_nylium_soul_soil_ore/,
    /emendatusenigmatica:\w+_subzero_ash_ore/,
    /emendatusenigmatica:\w+_brimstone_ore/,
    /emendatusenigmatica:\w+_soul_soil_ore/,
    /emendatusenigmatica:\w+_basalt_ore/,
    /titanium:\w+_gear/,
    /thermal:\w+_dust/,
    /thermal:\w+_gear$/,
    /thermal:\w+_ingot/,
    /thermal:\w+_nugget/,
    /thermal:\w+_ore/,
    /thermal:\w+_plate/,
    /pedestals:dust/,
    /mekanism:\w+_ore/,
    /minecraft:\w+_ore/,
    /immersiveengineering:plate_/,
    /immersiveengineering:stick_/,
    /immersiveengineering:storage_/,
    /immersiveengineering:ore_/,
    /create:\w+_sheet/,
    /create:\w+_nugget/,
    /create:\w+_ingot/,
    /immersiveposts:stick_/,
    /buildersaddition:\w+_rod/,
    /eidolon:\w+_ore/,
    /byg:pendorite/,
    /byg:ametrine/,
    /emendatusenigmatica:\w+certus/,
    /emendatusenigmatica:\w+fluix/,
    /mapperbase:steel/,
    /mapperbase:\w+_block/,
    /powah:\w+_starter/,
    /rftoolsbase:dimensionalshard/,
    /betterendforge:\w+_anvil/
];

const disabledItems = [
    'abnormals_delight:adzuki_cake_slice',
    'abnormals_delight:banana_cake_slice',
    'abnormals_delight:cherry_pantry',
    'abnormals_delight:chocolate_cake_slice',
    'abnormals_delight:cooked_duck_fillet',
    'abnormals_delight:cooked_venison_shanks',
    'abnormals_delight:duck_fillet',
    'abnormals_delight:mint_cake_slice',
    'abnormals_delight:necromium_knife',
    'abnormals_delight:passionfruit_glazed_duck',
    'abnormals_delight:seared_venison',
    'abnormals_delight:silver_knife',
    'abnormals_delight:strawberry_cake_slice',
    'abnormals_delight:vanilla_cake_slice',
    'abnormals_delight:venison_shanks',
    'abnormals_delight:willow_pantry',
    'abnormals_delight:wisteria_pantry',

    'aquaculture:wooden_fillet_knife',
    'aquaculture:stone_fillet_knife',
    'aquaculture:iron_fillet_knife',
    'aquaculture:gold_fillet_knife',
    'aquaculture:diamond_fillet_knife',
    'aquaculture:frog_legs_raw',
    'aquaculture:frog_legs_cooked',

    'betterendforge:ender_dust',

    'blockcarpentry:frame_chest',
    'blockcarpentry:illusion_chest',

    'bloodmagic:sand_netherite',
    'bloodmagic:gravel_netherite_scrap',
    'bloodmagic:fragment_netherite_scrap',

    'byg:ametrine_block',
    'byg:ametrine_boots',
    'byg:ametrine_chestplate',
    'byg:ametrine_gems',
    'byg:ametrine_helmet',
    'byg:ametrine_horse_armor',
    'byg:ametrine_leggings',
    'byg:ametrine_ore',
    'byg:pendorite_axe',
    'byg:pendorite_battleaxe',
    'byg:pendorite_block',
    'byg:pendorite_hoe',
    'byg:pendorite_horse_armor',
    'byg:pendorite_ore',
    'byg:pendorite_pickaxe',
    'byg:pendorite_scraps',
    'byg:pendorite_shovel',
    'byg:pendorite_sword',

    'create:dough',

    'mapperbase:bituminous_coal',
    'mapperbase:steel_fence',
    'mapperbase:steel_axe',
    'mapperbase:steel_pickaxe',
    'mapperbase:steel_shovel',
    'mapperbase:steel_hoe',
    'mapperbase:steel_sword',
    'mapperbase:steel_helmet',
    'mapperbase:steel_chestplate',
    'mapperbase:steel_leggings',
    'mapperbase:steel_boots',

    'mekanism:sawdust',
    'mekanism:dust_lapis_lazuli',
    'mekanism:dust_lithium',

    'mythicbotany:raindeletia',
    'mythicbotany:raindeletia_floating',
    'mythicbotany:wither_aconite',
    'mythicbotany:wither_aconite_floating',

    'pedestals:dustflour',

    'pitg:green_dye',

    'pneumaticcraft:wheat_flour',

    'quark:pipe',
    'quark:potato_crate',
    'quark:beetroot_crate',
    'quark:carrot_crate',

    'thermal:beetroot_block',
    'thermal:carrot_block',
    'thermal:potato_block',
    'thermal:sugar_cane_block',
    'thermal:apple_block',
    'simplefarming:raw_bacon',
    'simplefarming:cooked_bacon',
    'simplefarming:cooked_egg',
    'simplefarming:noodles',
    'simplefarming:chocolate'
];
const materialsToUnify = [
    'iron',
    'gold',
    'copper',
    'silver',
    'zinc',
    'brass',
    'lead',
    'tin',
    'compressed_iron',
    'nickel',
    'aluminum',
    'uranium',
    'bronze',
    'electrum',
    'constantan',
    'steel',
    'osmium',
    'diamond',
    'lapis',
    'emerald',
    'quartz',
    'coal',
    'charcoal',
    'obsidian',
    'ender',
    'fluix',
    'saltpeter',
    'fluorite',
    'invar',
    'signalum',
    'lumium',
    'enderium',
    'sulfur',
    'cinnabar',
    'niter',
    'potassium_nitrate',
    'saltpeter',
    'apatite',
    'bitumen',
    'redstone',
    'glowstone',
    'arcane',
    'mana',
    'certus_quartz',
    'charged_certus_quartz',
    'iesnium',
    'dimensional',
    'cloggrum',
    'froststeel',
    'regalium',
    'utherium',
    'coal_coke',
    'starmetal'
];
