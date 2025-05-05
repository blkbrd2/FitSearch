const exercises = [
  {
    "exercise_name":"TRX Row",
    "primary_muscle_group":"Back",
    "equipment_needed":"TRX",
    "movement_type":"Pull",
    "description":"Stand facing anchor, hold handles with arms extended. Lean back, keep body straight, then pull chest toward hands by driving elbows back. Squeeze shoulder blades at the top, lower with control."
  },
  {
    "exercise_name":"TRX Chest Press",
    "primary_muscle_group":"Chest",
    "equipment_needed":"TRX",
    "movement_type":"Push",
    "description":"Face away from anchor with arms extended in front. Lower body toward handles by bending elbows to 90°, keeping a straight plank. Push back to start while keeping core engaged."
  },
  {
    "exercise_name":"TRX Bicep Curl",
    "primary_muscle_group":"Biceps",
    "equipment_needed":"TRX",
    "movement_type":"Pull",
    "description":"Face anchor, palms up, arms extended. Pull body upward by curling hands toward forehead, keeping elbows high and still. Lower with control, maintaining body tension."
  },
  {
    "exercise_name":"TRX Triceps Extension",
    "primary_muscle_group":"Triceps",
    "equipment_needed":"TRX",
    "movement_type":"Push",
    "description":"Face away from anchor, arms extended forward, palms down. Bend elbows to lower forehead toward hands, keeping upper arms still. Extend elbows to push back to start."
  },
  {
    "exercise_name":"TRX Y-Fly",
    "primary_muscle_group":"Shoulders",
    "equipment_needed":"TRX",
    "movement_type":"Pull",
    "description":"Face anchor, arms straight in a Y shape. Pull arms upward while keeping body straight, squeezing shoulders. Lower under control without arching back."
  },
  {
    "exercise_name":"TRX T-Fly",
    "primary_muscle_group":"Rear Delts",
    "equipment_needed":"TRX",
    "movement_type":"Pull",
    "description":"Face anchor with arms straight in front. Pull arms out to sides in a T motion, squeezing shoulder blades together. Return slowly."
  },
  {
    "exercise_name":"TRX Pike",
    "primary_muscle_group":"Core",
    "equipment_needed":"TRX",
    "movement_type":"Pull",
    "description":"Start in a plank with feet in straps. Lift hips high, drawing toes toward chest while keeping legs straight. Return to plank with control."
  },
  {
    "exercise_name":"TRX Mountain Climbers",
    "primary_muscle_group":"Core",
    "equipment_needed":"TRX",
    "movement_type":"Push",
    "description":"In plank with feet in straps, drive one knee at a time toward chest in a fast, alternating motion. Keep hips level and core tight."
  },
  {
    "exercise_name":"TRX Plank",
    "primary_muscle_group":"Core",
    "equipment_needed":"TRX",
    "movement_type":"Hold",
    "description":"Forearms on ground, feet in straps. Hold plank with neutral spine and tight core, avoiding hip sag."
  },
  {
    "exercise_name":"TRX Atomic Push-up",
    "primary_muscle_group":"Chest",
    "equipment_needed":"TRX",
    "movement_type":"Push",
    "description":"Start in plank, do one push-up, then pull knees to chest. Return legs to plank and repeat sequence."
  },
  {
    "exercise_name":"TRX Hamstring Curl",
    "primary_muscle_group":"Hamstrings",
    "equipment_needed":"TRX",
    "movement_type":"Pull",
    "description":"Lie on back with feet in straps, hips lifted. Curl heels toward glutes, keeping hips high, then extend legs back out."
  },
  {
    "exercise_name":"TRX Squat",
    "primary_muscle_group":"Quads",
    "equipment_needed":"TRX",
    "movement_type":"Squat",
    "description":"Hold straps, feet shoulder-width. Lower into squat, chest up, knees out. Push through heels to stand back up."
  },
  {
    "exercise_name":"TRX Jump Squat",
    "primary_muscle_group":"Quads",
    "equipment_needed":"TRX",
    "movement_type":"Squat",
    "description":"Lower into a squat, then jump up explosively while holding straps. Land softly and repeat."
  },
  {
    "exercise_name":"TRX Single Leg Squat",
    "primary_muscle_group":"Glutes",
    "equipment_needed":"TRX",
    "movement_type":"Squat",
    "description":"Hold straps, extend one leg forward. Lower into single leg squat with control, then press back up using standing leg."
  },
  {
    "exercise_name":"TRX Hip Press",
    "primary_muscle_group":"Glutes",
    "equipment_needed":"TRX",
    "movement_type":"Hinge",
    "description":"Lie on back, feet in straps, knees bent. Drive hips upward, squeezing glutes at the top, then lower slowly."
  },
  {
    "exercise_name":"TRX Side Plank",
    "primary_muscle_group":"Obliques",
    "equipment_needed":"TRX",
    "movement_type":"Hold",
    "description":"Elbow under shoulder, feet in straps. Lift hips and hold body in straight line. Avoid rotation or sagging."
  },
  {
    "exercise_name":"TRX Low Row",
    "primary_muscle_group":"Back",
    "equipment_needed":"TRX",
    "movement_type":"Pull",
    "description":"Sit low, hold straps, arms straight. Pull chest toward anchor, squeezing shoulder blades, then lower."
  },
  {
    "exercise_name":"TRX Lunge",
    "primary_muscle_group":"Quads",
    "equipment_needed":"TRX",
    "movement_type":"Lunge",
    "description":"Hold straps, step one foot back. Lower rear knee toward ground, front knee over ankle, then return to standing."
  },
  {
    "exercise_name":"TRX Reverse Lunge",
    "primary_muscle_group":"Glutes",
    "equipment_needed":"TRX",
    "movement_type":"Lunge",
    "description":"Step backward into lunge, lower hips, then push through front heel to return. Use straps for balance."
  },
  {
    "exercise_name":"TRX Push-up",
    "primary_muscle_group":"Chest",
    "equipment_needed":"TRX",
    "movement_type":"Push",
    "description":"Feet in straps, hands on ground. Lower chest to floor, elbows close, then push up. Keep body straight."
  },
  {
    "exercise_name":"TRX High Row",
    "primary_muscle_group":"Upper Back",
    "equipment_needed":"TRX",
    "movement_type":"Pull",
    "description":"Face anchor, pull handles toward face with elbows flared out to shoulder level. Squeeze shoulder blades, then lower."
  },
  {
    "exercise_name":"TRX Knee Tuck",
    "primary_muscle_group":"Core",
    "equipment_needed":"TRX",
    "movement_type":"Pull",
    "description":"Start in plank with feet in straps. Draw both knees to chest, keeping back flat. Extend back to plank."
  },
  {
    "exercise_name":"TRX Ab Fallout",
    "primary_muscle_group":"Core",
    "equipment_needed":"TRX",
    "movement_type":"Push",
    "description":"Start standing with arms forward. Lean forward while arms extend overhead. Return to start by engaging core."
  },
  {
    "exercise_name":"TRX Power Pull",
    "primary_muscle_group":"Back",
    "equipment_needed":"TRX",
    "movement_type":"Pull",
    "description":"Hold one strap, rotate torso to reach opposite arm toward floor. Pull up and rotate toward anchor."
  },
  {
    "exercise_name":"TRX Overhead Squat",
    "primary_muscle_group":"Quads",
    "equipment_needed":"TRX",
    "movement_type":"Squat",
    "description":"Hold straps overhead, squat down while keeping arms straight and chest up. Push back up to standing."
  },
  {
    "exercise_name":"TRX Archer Row",
    "primary_muscle_group":"Back",
    "equipment_needed":"TRX",
    "movement_type":"Pull",
    "description":"Row with one arm while extending the other straight to the side. Keep hips square and control descent."
  },
  {
    "exercise_name":"TRX Push-up to Pike",
    "primary_muscle_group":"Core",
    "equipment_needed":"TRX",
    "movement_type":"Push & Pull",
    "description":"Start in push-up with feet in straps. Perform push-up, then lift hips into pike. Return and repeat."
  },
  {
    "exercise_name":"TRX Face Pull",
    "primary_muscle_group":"Rear Delts",
    "equipment_needed":"TRX",
    "movement_type":"Pull",
    "description":"Pull handles toward temples, elbows high. Keep tension through rear delts and squeeze at the top."
  },
  {
    "exercise_name":"TRX Standing Rollout",
    "primary_muscle_group":"Core",
    "equipment_needed":"TRX",
    "movement_type":"Push",
    "description":"Arms extend overhead while body leans forward. Pull arms back in by contracting abs and lats."
  },
  {
    "exercise_name":"TRX Sprinter Start",
    "primary_muscle_group":"Glutes",
    "equipment_needed":"TRX",
    "movement_type":"Squat",
    "description":"Lean forward with straps, step one foot back. Push off back leg to drive up and forward."
  },
  {
    "exercise_name":"TRX Lateral Lunge",
    "primary_muscle_group":"Adductors",
    "equipment_needed":"TRX",
    "movement_type":"Lunge",
    "description":"Step laterally while sitting hips back. Keep chest lifted and use inner thigh to return."
  },
  {
    "exercise_name":"TRX Hip Abduction",
    "primary_muscle_group":"Glutes",
    "equipment_needed":"TRX",
    "movement_type":"Hold",
    "description":"Start in plank, spread legs apart in straps. Hold position keeping hips level."
  },
  {
    "exercise_name":"TRX Elevated Push-up",
    "primary_muscle_group":"Chest",
    "equipment_needed":"TRX",
    "movement_type":"Push",
    "description":"Feet higher than shoulders in straps. Lower chest to floor, elbows tight, then push back up."
  },
  {
    "exercise_name":"TRX Chest Fly",
    "primary_muscle_group":"Chest",
    "equipment_needed":"TRX",
    "movement_type":"Push",
    "description":"Start facing away from anchor, arms open wide. Bring arms together in front of chest, then slowly open."
  },
  {
    "exercise_name":"TRX Standing Oblique Crunch",
    "primary_muscle_group":"Obliques",
    "equipment_needed":"TRX",
    "movement_type":"Rotation",
    "description":"Hold straps, lift one knee and rotate torso toward it. Alternate sides."
  },
  {
    "exercise_name":"TRX Standing Hip Hinge",
    "primary_muscle_group":"Glutes",
    "equipment_needed":"TRX",
    "movement_type":"Hinge",
    "description":"Stand upright, hold straps. Hinge at hips with flat back, then return to standing."
  },
  {
    "exercise_name":"TRX Single Arm Row",
    "primary_muscle_group":"Back",
    "equipment_needed":"TRX",
    "movement_type":"Pull",
    "description":"Use one strap, row body upward. Maintain square shoulders and core tension."
  },
  {
    "exercise_name":"TRX Swimmer Pull",
    "primary_muscle_group":"Back",
    "equipment_needed":"TRX",
    "movement_type":"Pull",
    "description":"Simulate breaststroke movement, pulling arms in a circular motion from extended to sides."
  },
  {
    "exercise_name":"TRX Standing Chest Opener",
    "primary_muscle_group":"Chest",
    "equipment_needed":"TRX",
    "movement_type":"Push",
    "description":"Turn away from anchor, extend arms wide behind you. Hold stretch in chest and shoulders."
  },
  {
    "exercise_name":"TRX Reverse Fly",
    "primary_muscle_group":"Rear Delts",
    "equipment_needed":"TRX",
    "movement_type":"Pull",
    "description":"Open arms out wide like wings, squeezing shoulder blades at the top. Return with control."
  },
  {
    "exercise_name":"TRX Suspended Glute Bridge",
    "primary_muscle_group":"Glutes",
    "equipment_needed":"TRX",
    "movement_type":"Hinge",
    "description":"Lie down, feet in straps. Lift hips and squeeze glutes, then lower under control."
  },
  {
    "exercise_name":"TRX Curtsy Lunge",
    "primary_muscle_group":"Glutes",
    "equipment_needed":"TRX",
    "movement_type":"Lunge",
    "description":"Step one leg behind and across the other. Lower hips, then push up to return."
  },
  {
    "exercise_name":"TRX Assisted Pistol Squat",
    "primary_muscle_group":"Glutes",
    "equipment_needed":"TRX",
    "movement_type":"Squat",
    "description":"Use straps to balance, extend one leg, and perform single-leg squat."
  },
  {
    "exercise_name":"TRX Power Step-Up",
    "primary_muscle_group":"Quads",
    "equipment_needed":"TRX",
    "movement_type":"Squat",
    "description":"Step onto a box or platform using straps for balance. Jump or step down with control."
  },
  {
    "exercise_name":"TRX Standing Calf Raise",
    "primary_muscle_group":"Calves",
    "equipment_needed":"TRX",
    "movement_type":"Hold",
    "description":"Stand tall, raise heels off ground, squeeze calves, then lower slowly."
  },
  {
    "exercise_name":"TRX Plank Saw",
    "primary_muscle_group":"Core",
    "equipment_needed":"TRX",
    "movement_type":"Hold",
    "description":"Start in plank. Shift body forward and backward in a sawing motion without breaking form."
  },
  {
    "exercise_name":"TRX Frog Kick",
    "primary_muscle_group":"Core",
    "equipment_needed":"TRX",
    "movement_type":"Pull",
    "description":"Start in plank. Bring knees to elbows wide like a frog, then extend legs back out."
  },
  {
    "exercise_name":"TRX Knee Drive Lunge",
    "primary_muscle_group":"Glutes",
    "equipment_needed":"TRX",
    "movement_type":"Lunge",
    "description":"Step into reverse lunge, then explode upward, driving knee to chest."
  },
  {
    "exercise_name":"TRX Deadlift",
    "primary_muscle_group":"Hamstrings",
    "equipment_needed":"TRX",
    "movement_type":"Hinge",
    "description":"Hold straps, hinge at hips with slight knee bend. Keep back flat, return by squeezing glutes."
  },
  {
    "exercise_name":"TRX Sphinx Plank",
    "primary_muscle_group":"Core",
    "equipment_needed":"TRX",
    "movement_type":"Hold",
    "description":"Forearms down, feet in straps. Keep knees off ground, hold plank with body straight."
  },
  {
    "exercise_name":"Dumbbell Bench Press",
    "primary_muscle_group":"Chest",
    "equipment_needed":"Dumbbells",
    "movement_type":"Push",
    "description":"Lie on a bench with a dumbbell in each hand. Press the weights above your chest until arms are straight, then lower until elbows are at about 90 degrees."
  },
  {
    "exercise_name":"Dumbbell Fly",
    "primary_muscle_group":"Chest",
    "equipment_needed":"Dumbbells",
    "movement_type":"Push",
    "description":"Lie on a bench, arms extended above chest. Slowly open arms wide in an arc, stretch chest, then bring weights back to start."
  },
  {
    "exercise_name":"Incline Dumbbell Press",
    "primary_muscle_group":"Upper Chest",
    "equipment_needed":"Dumbbells",
    "movement_type":"Push",
    "description":"Lie on an incline bench. Press dumbbells upward and together, then lower with control to chest level."
  },
  {
    "exercise_name":"Dumbbell Shoulder Press",
    "primary_muscle_group":"Shoulders",
    "equipment_needed":"Dumbbells",
    "movement_type":"Push",
    "description":"Sit upright, hold dumbbells at shoulder height, palms forward. Press overhead until arms are straight, then return to start."
  },
  {
    "exercise_name":"Dumbbell Lateral Raise",
    "primary_muscle_group":"Shoulders",
    "equipment_needed":"Dumbbells",
    "movement_type":"Pull",
    "description":"Raise dumbbells to the sides until arms are parallel to floor. Control down, keeping slight bend in elbows."
  },
  {
    "exercise_name":"Dumbbell Front Raise",
    "primary_muscle_group":"Shoulders",
    "equipment_needed":"Dumbbells",
    "movement_type":"Pull",
    "description":"Lift dumbbells forward until at shoulder height, arms straight. Lower with control."
  },
  {
    "exercise_name":"Dumbbell Rear Delt Fly",
    "primary_muscle_group":"Rear Delts",
    "equipment_needed":"Dumbbells",
    "movement_type":"Pull",
    "description":"Bend at hips, back flat, arms hanging. Raise dumbbells outward in a wide arc to shoulder level, then lower."
  },
  {
    "exercise_name":"Dumbbell Bicep Curl",
    "primary_muscle_group":"Biceps",
    "equipment_needed":"Dumbbells",
    "movement_type":"Pull",
    "description":"Hold dumbbells at sides, palms forward. Curl up toward shoulders, squeeze biceps, then lower."
  },
  {
    "exercise_name":"Hammer Curl",
    "primary_muscle_group":"Biceps",
    "equipment_needed":"Dumbbells",
    "movement_type":"Pull",
    "description":"Hold dumbbells with palms facing each other. Curl weights up and lower without rotating wrists."
  },
  {
    "exercise_name":"Concentration Curl",
    "primary_muscle_group":"Biceps",
    "equipment_needed":"Dumbbells",
    "movement_type":"Pull",
    "description":"Sit, brace elbow on inner thigh. Curl weight up toward shoulder, squeeze, and lower slowly."
  },
  {
    "exercise_name":"Incline Curl",
    "primary_muscle_group":"Biceps",
    "equipment_needed":"Dumbbells",
    "movement_type":"Pull",
    "description":"Lie on incline bench, let arms hang. Curl dumbbells up with palms forward, then lower with control."
  },
  {
    "exercise_name":"Zottman Curl",
    "primary_muscle_group":"Biceps",
    "equipment_needed":"Dumbbells",
    "movement_type":"Pull",
    "description":"Curl up with palms forward, rotate at top, and lower with palms down. Reverse at bottom."
  },
  {
    "exercise_name":"Dumbbell Preacher Curl",
    "primary_muscle_group":"Biceps",
    "equipment_needed":"Dumbbells",
    "movement_type":"Pull",
    "description":"Use preacher bench. Curl dumbbell upward, pause, and lower slowly."
  },
  {
    "exercise_name":"Overhead Triceps Extension",
    "primary_muscle_group":"Triceps",
    "equipment_needed":"Dumbbells",
    "movement_type":"Push",
    "description":"Hold one dumbbell with both hands overhead. Lower behind head by bending elbows, then extend arms back up."
  },
  {
    "exercise_name":"Dumbbell Kickback",
    "primary_muscle_group":"Triceps",
    "equipment_needed":"Dumbbells",
    "movement_type":"Push",
    "description":"Bend forward at hips, elbows tight to body. Extend arms straight back, squeeze triceps, then return."
  },
  {
    "exercise_name":"Dumbbell Skull Crusher",
    "primary_muscle_group":"Triceps",
    "equipment_needed":"Dumbbells",
    "movement_type":"Push",
    "description":"Lie on bench, arms straight above chest. Bend elbows to lower weights near temples, then press up."
  },
  {
    "exercise_name":"Dumbbell Deadlift",
    "primary_muscle_group":"Hamstrings",
    "equipment_needed":"Dumbbells",
    "movement_type":"Hinge",
    "description":"Hold dumbbells in front, feet shoulder-width. Hinge at hips to lower weights to mid-shin, then return upright."
  },
  {
    "exercise_name":"Romanian Deadlift",
    "primary_muscle_group":"Hamstrings",
    "equipment_needed":"Dumbbells",
    "movement_type":"Hinge",
    "description":"Keep knees slightly bent. Hinge forward from hips, lower weights down legs, then stand up squeezing glutes."
  },
  {
    "exercise_name":"Sumo Deadlift",
    "primary_muscle_group":"Glutes",
    "equipment_needed":"Dumbbells",
    "movement_type":"Hinge",
    "description":"Feet wide, toes out. Hold dumbbell between legs, lower down keeping back flat, then stand tall."
  },
  {
    "exercise_name":"Goblet Squat",
    "primary_muscle_group":"Quads",
    "equipment_needed":"Dumbbells",
    "movement_type":"Squat",
    "description":"Hold one dumbbell at chest. Squat down with chest up, knees tracking toes, then push up to stand."
  },
  {
    "exercise_name":"Front Squat",
    "primary_muscle_group":"Quads",
    "equipment_needed":"Dumbbells",
    "movement_type":"Squat",
    "description":"Hold dumbbells at shoulders. Lower into squat, keep torso upright, then stand."
  },
  {
    "exercise_name":"Dumbbell Lunge",
    "primary_muscle_group":"Quads",
    "equipment_needed":"Dumbbells",
    "movement_type":"Lunge",
    "description":"Hold dumbbells at sides. Step forward, bend both knees to 90°, push off front foot to return."
  },
  {
    "exercise_name":"Reverse Lunge",
    "primary_muscle_group":"Glutes",
    "equipment_needed":"Dumbbells",
    "movement_type":"Lunge",
    "description":"Step backward with one leg, lower until front thigh is parallel to ground, then return to start."
  },
  {
    "exercise_name":"Bulgarian Split Squat",
    "primary_muscle_group":"Glutes",
    "equipment_needed":"Dumbbells",
    "movement_type":"Lunge",
    "description":"Place rear foot on bench, hold dumbbells at sides. Lower front thigh parallel to ground, then press up."
  },
  {
    "exercise_name":"Step-Up",
    "primary_muscle_group":"Quads",
    "equipment_needed":"Dumbbells",
    "movement_type":"Squat",
    "description":"Hold dumbbells, step onto bench with one leg, then bring the other up. Step down and repeat."
  },
  {
    "exercise_name":"Calf Raise",
    "primary_muscle_group":"Calves",
    "equipment_needed":"Dumbbells",
    "movement_type":"Hold",
    "description":"Stand holding dumbbells. Rise onto balls of feet, squeeze calves, then lower heels."
  },
  {
    "exercise_name":"Glute Bridge",
    "primary_muscle_group":"Glutes",
    "equipment_needed":"Dumbbells",
    "movement_type":"Hinge",
    "description":"Lie on back, dumbbell on hips. Push through heels to lift hips, squeeze glutes at top."
  },
  {
    "exercise_name":"Dumbbell Clean",
    "primary_muscle_group":"Total Body",
    "equipment_needed":"Dumbbells",
    "movement_type":"Pull",
    "description":"From hang, explosively pull dumbbells to shoulders using hips. Catch in partial squat and stand."
  },
  {
    "exercise_name":"Dumbbell Snatch",
    "primary_muscle_group":"Total Body",
    "equipment_needed":"Dumbbells",
    "movement_type":"Pull",
    "description":"Swing dumbbell between legs, then drive hips and pull it overhead in one motion. Catch with arm straight."
  },
  {
    "exercise_name":"Dumbbell Thruster",
    "primary_muscle_group":"Quads",
    "equipment_needed":"Dumbbells",
    "movement_type":"Push",
    "description":"Hold dumbbells at shoulders. Squat down then drive up and press overhead in one fluid motion."
  },
  {
    "exercise_name":"Dumbbell Farmer's Walk",
    "primary_muscle_group":"Forearms",
    "equipment_needed":"Dumbbells",
    "movement_type":"Hold",
    "description":"Hold heavy dumbbells at sides and walk slowly with good posture, bracing your core."
  },
  {
    "exercise_name":"Renegade Row",
    "primary_muscle_group":"Back",
    "equipment_needed":"Dumbbells",
    "movement_type":"Pull",
    "description":"Start in plank with hands on dumbbells. Row one arm at a time while keeping body stable."
  },
  {
    "exercise_name":"Bent Over Row",
    "primary_muscle_group":"Back",
    "equipment_needed":"Dumbbells",
    "movement_type":"Pull",
    "description":"Hinge at hips, back flat, row dumbbells to ribs, squeeze, and lower."
  },
  {
    "exercise_name":"Single Arm Row",
    "primary_muscle_group":"Back",
    "equipment_needed":"Dumbbells",
    "movement_type":"Pull",
    "description":"Rest one hand on knee or bench, row dumbbell to side of torso, squeeze shoulder blade, then lower."
  },
  {
    "exercise_name":"Chest Supported Row",
    "primary_muscle_group":"Back",
    "equipment_needed":"Dumbbells",
    "movement_type":"Pull",
    "description":"Lie on incline bench face down, row dumbbells to your sides, then lower."
  },
  {
    "exercise_name":"Arnold Press",
    "primary_muscle_group":"Shoulders",
    "equipment_needed":"Dumbbells",
    "movement_type":"Push",
    "description":"Start with palms facing you, rotate outward while pressing overhead. Reverse on the way down."
  },
  {
    "exercise_name":"Push Press",
    "primary_muscle_group":"Shoulders",
    "equipment_needed":"Dumbbells",
    "movement_type":"Push",
    "description":"Use slight leg drive to press dumbbells overhead quickly, then lower under control."
  },
  {
    "exercise_name":"Shrugs",
    "primary_muscle_group":"Traps",
    "equipment_needed":"Dumbbells",
    "movement_type":"Pull",
    "description":"Hold dumbbells at sides and shrug shoulders straight up. Pause, then lower."
  },
  {
    "exercise_name":"Side Bend",
    "primary_muscle_group":"Obliques",
    "equipment_needed":"Dumbbells",
    "movement_type":"Rotation",
    "description":"Hold one dumbbell at side. Bend sideways at waist, then return to standing. Repeat both sides."
  },
  {
    "exercise_name":"Russian Twist",
    "primary_muscle_group":"Obliques",
    "equipment_needed":"Dumbbells",
    "movement_type":"Rotation",
    "description":"Sit on floor, lean back slightly. Hold dumbbell and twist torso side to side."
  },
  {
    "exercise_name":"Sit-Up to Press",
    "primary_muscle_group":"Core",
    "equipment_needed":"Dumbbells",
    "movement_type":"Push",
    "description":"Hold dumbbells to chest. Sit up, press overhead at top, then lower down under control."
  },
  {
    "exercise_name":"Chest Pullovers",
    "primary_muscle_group":"Chest",
    "equipment_needed":"Dumbbells",
    "movement_type":"Pull",
    "description":"Lie on bench, hold one dumbbell above chest. Lower behind head with arms extended, then pull back up."
  },
  {
    "exercise_name":"Dumbbell Windmill",
    "primary_muscle_group":"Obliques",
    "equipment_needed":"Dumbbells",
    "movement_type":"Rotation",
    "description":"Hold one dumbbell overhead. Hinge at hips and reach opposite hand to foot. Keep gaze on raised weight."
  },
  {
    "exercise_name":"Turkish Get-Up",
    "primary_muscle_group":"Total Body",
    "equipment_needed":"Dumbbells",
    "movement_type":"Multiple",
    "description":"Perform step-by-step full-body get-up while holding dumbbell overhead. Focus on control."
  },
  {
    "exercise_name":"Man Makers",
    "primary_muscle_group":"Total Body",
    "equipment_needed":"Dumbbells",
    "movement_type":"Multiple",
    "description":"From plank with dumbbells: row, push-up, jump to squat, clean, and press."
  },
  {
    "exercise_name":"Devil’s Press",
    "primary_muscle_group":"Total Body",
    "equipment_needed":"Dumbbells",
    "movement_type":"Push",
    "description":"Swing dumbbells between legs, then snatch overhead. Combine burpee-style hip drive with overhead press."
  },
  {
    "exercise_name":"Dumbbell Swing",
    "primary_muscle_group":"Hamstrings",
    "equipment_needed":"Dumbbells",
    "movement_type":"Pull",
    "description":"Swing dumbbell with two hands between legs, then drive hips to swing it to shoulder height."
  },
  {
    "exercise_name":"Lat Pulldown",
    "primary_muscle_group":"Lats",
    "equipment_needed":"Weider 4870 (High Pulley + Lat Bar)",
    "movement_type":"Pull",
    "description":"Sit and grip the lat bar wide. Pull down to chest while squeezing shoulder blades, then control back up."
  },
  {
    "exercise_name":"Triceps Pushdown",
    "primary_muscle_group":"Triceps",
    "equipment_needed":"Weider 4870 (High Pulley + Lat Bar)",
    "movement_type":"Push",
    "description":"Grip bar shoulder-width. Push bar down by extending arms fully, then return slowly to 90°."
  },
  {
    "exercise_name":"Straight Arm Pulldown",
    "primary_muscle_group":"Lats",
    "equipment_needed":"Weider 4870 (High Pulley + Lat Bar)",
    "movement_type":"Pull",
    "description":"Arms straight, pull bar down to hips, squeezing lats. Control return while keeping arms straight."
  },
  {
    "exercise_name":"Cable Crunch",
    "primary_muscle_group":"Abs",
    "equipment_needed":"Weider 4870 (High Pulley + Lat Bar)",
    "movement_type":"Pull",
    "description":"Kneel facing machine, hold bar behind neck. Crunch down by contracting abs."
  },
  {
    "exercise_name":"Face Pull",
    "primary_muscle_group":"Rear Delts",
    "equipment_needed":"Weider 4870 (High Pulley + Lat Bar)",
    "movement_type":"Pull",
    "description":"Pull bar toward face with elbows high and wide. Squeeze rear delts at end range."
  },
  {
    "exercise_name":"Cable Chest Fly",
    "primary_muscle_group":"Chest",
    "equipment_needed":"Weider 4870 (Butterfly Arms)",
    "movement_type":"Push",
    "description":"With arms on butterfly pads, press inward in a hugging motion. Slowly return to open position."
  },
  {
    "exercise_name":"Cable Chest Press",
    "primary_muscle_group":"Chest",
    "equipment_needed":"Weider 4870 (Butterfly\/Press Arms)",
    "movement_type":"Push",
    "description":"Push arms forward until straight, then return slowly with control."
  },
  {
    "exercise_name":"Incline Chest Press",
    "primary_muscle_group":"Upper Chest",
    "equipment_needed":"Weider 4870 (Adjustable Seat + Press Arms)",
    "movement_type":"Push",
    "description":"Set seat angle upright. Press arms diagonally upward to target upper chest."
  },
  {
    "exercise_name":"Decline Chest Press",
    "primary_muscle_group":"Lower Chest",
    "equipment_needed":"Weider 4870 (Adjustable Seat + Press Arms)",
    "movement_type":"Push",
    "description":"Lower seat angle, press arms slightly downward."
  },
  {
    "exercise_name":"Shoulder Press",
    "primary_muscle_group":"Shoulders",
    "equipment_needed":"Weider 4870 (Military Press Arm)",
    "movement_type":"Push",
    "description":"Press arms overhead. Keep elbows under wrists and avoid arching your back."
  },
  {
    "exercise_name":"Cable Lateral Raise",
    "primary_muscle_group":"Shoulders",
    "equipment_needed":"Weider 4870 (Low Pulley + Handle)",
    "movement_type":"Pull",
    "description":"Stand side-on, raise cable arm to shoulder height, then lower slowly."
  },
  {
    "exercise_name":"Front Raise",
    "primary_muscle_group":"Shoulders",
    "equipment_needed":"Weider 4870 (Low Pulley + Handle)",
    "movement_type":"Pull",
    "description":"Hold handle in front, lift straight arm to shoulder height, then lower with control."
  },
  {
    "exercise_name":"Cable Upright Row",
    "primary_muscle_group":"Shoulders",
    "equipment_needed":"Weider 4870 (Low Pulley + Handle)",
    "movement_type":"Pull",
    "description":"Pull cable upward to chest height, elbows leading. Control descent."
  },
  {
    "exercise_name":"Cable Row",
    "primary_muscle_group":"Mid Back",
    "equipment_needed":"Weider 4870 (Low Pulley + Handle)",
    "movement_type":"Pull",
    "description":"Sit with feet braced. Pull handle to waist, squeezing shoulder blades, then return slowly."
  },
  {
    "exercise_name":"Cable Curl",
    "primary_muscle_group":"Biceps",
    "equipment_needed":"Weider 4870 (Low Pulley + Handle)",
    "movement_type":"Pull",
    "description":"Hold handle with palms up, curl toward shoulders, then control the descent."
  },
  {
    "exercise_name":"Reverse Curl",
    "primary_muscle_group":"Biceps",
    "equipment_needed":"Weider 4870 (Low Pulley + Handle)",
    "movement_type":"Pull",
    "description":"Hold handle with palms down. Curl up, squeeze biceps, and lower slowly."
  },
  {
    "exercise_name":"Hammer Curl",
    "primary_muscle_group":"Biceps",
    "equipment_needed":"Weider 4870 (Low Pulley + Rope\/Strap)",
    "movement_type":"Pull",
    "description":"Use rope or strap. Curl as if holding hammers, elbows close to sides."
  },
  {
    "exercise_name":"Cable Triceps Kickback",
    "primary_muscle_group":"Triceps",
    "equipment_needed":"Weider 4870 (Low Pulley + Handle)",
    "movement_type":"Push",
    "description":"Bend forward, upper arm parallel to floor. Extend cable arm straight back."
  },
  {
    "exercise_name":"Cable Overhead Triceps Extension",
    "primary_muscle_group":"Triceps",
    "equipment_needed":"Weider 4870 (Low Pulley + Handle)",
    "movement_type":"Push",
    "description":"Hold handle overhead, extend arms straight up, then lower behind head."
  },
  {
    "exercise_name":"Cable Side Bend",
    "primary_muscle_group":"Obliques",
    "equipment_needed":"Weider 4870 (Low Pulley + Handle)",
    "movement_type":"Rotation",
    "description":"Stand tall, pull handle down by bending sideways at the waist."
  },
  {
    "exercise_name":"Standing Ab Twist",
    "primary_muscle_group":"Obliques",
    "equipment_needed":"Weider 4870 (High or Low Pulley + Handle)",
    "movement_type":"Rotation",
    "description":"Grab handle with both hands, rotate torso from side to side."
  },
  {
    "exercise_name":"Cable Leg Curl",
    "primary_muscle_group":"Hamstrings",
    "equipment_needed":"Weider 4870 (Ankle Strap + Low Pulley)",
    "movement_type":"Pull",
    "description":"Strap in, bend knee to bring heel toward glutes. Control descent."
  },
  {
    "exercise_name":"Cable Kickback",
    "primary_muscle_group":"Glutes",
    "equipment_needed":"Weider 4870 (Ankle Strap + Low Pulley)",
    "movement_type":"Push",
    "description":"Stand on one leg, kick strapped foot backward and upward. Squeeze glutes."
  },
  {
    "exercise_name":"Cable Hip Abduction",
    "primary_muscle_group":"Glutes",
    "equipment_needed":"Weider 4870 (Ankle Strap + Low Pulley)",
    "movement_type":"Pull",
    "description":"Move strapped leg straight out to the side, keep torso stable."
  },
  {
    "exercise_name":"Cable Hip Adduction",
    "primary_muscle_group":"Inner Thigh",
    "equipment_needed":"Weider 4870 (Ankle Strap + Low Pulley)",
    "movement_type":"Pull",
    "description":"Bring leg across midline of body, squeezing inner thighs."
  },
  {
    "exercise_name":"Leg Press",
    "primary_muscle_group":"Quads",
    "equipment_needed":"Weider 4870 (Leg Press Attachment)",
    "movement_type":"Push",
    "description":"Put feet on plate, push weight away using heels. Control return."
  },
  {
    "exercise_name":"Seated Leg Curl",
    "primary_muscle_group":"Hamstrings",
    "equipment_needed":"Weider 4870 (Leg Lever)",
    "movement_type":"Pull",
    "description":"Sit and hook heels under padded roller. Pull down to curl legs, then return."
  },
  {
    "exercise_name":"Seated Leg Extension",
    "primary_muscle_group":"Quads",
    "equipment_needed":"Weider 4870 (Leg Lever)",
    "movement_type":"Push",
    "description":"Sit and place shins under padded bar. Extend legs until straight, then return."
  },
  {
    "exercise_name":"Preacher Curl",
    "primary_muscle_group":"Biceps",
    "equipment_needed":"Weider 4870 (Curl Pad + Low Pulley)",
    "movement_type":"Pull",
    "description":"Brace arms on curl pad. Curl weight up, squeeze, and lower slowly."
  },
  {
    "exercise_name":"Plank",
    "primary_muscle_group":"Core",
    "equipment_needed":"Floor",
    "movement_type":"Hold",
    "description":"Forearms on the floor, elbows under shoulders. Keep body in a straight line from head to heels, squeeze glutes and brace abs."
  },
  {
    "exercise_name":"Side Plank",
    "primary_muscle_group":"Obliques",
    "equipment_needed":"Floor",
    "movement_type":"Hold",
    "description":"Elbow under shoulder, hips lifted. Hold straight line from head to heels, avoiding hip dip."
  },
  {
    "exercise_name":"Dead Bug",
    "primary_muscle_group":"Core",
    "equipment_needed":"Floor",
    "movement_type":"Stabilization",
    "description":"Lie on back, arms and knees up. Extend opposite arm and leg, keeping back flat. Return and alternate."
  },
  {
    "exercise_name":"Bird Dog",
    "primary_muscle_group":"Core",
    "equipment_needed":"Floor",
    "movement_type":"Stabilization",
    "description":"Start on all fours. Extend opposite arm and leg. Pause, return, and alternate sides while maintaining control."
  },
  {
    "exercise_name":"Leg Raises",
    "primary_muscle_group":"Lower Abs",
    "equipment_needed":"Floor",
    "movement_type":"Pull",
    "description":"Lie flat, legs extended. Raise legs up to 90°, then lower slowly without arching lower back."
  },
  {
    "exercise_name":"Flutter Kicks",
    "primary_muscle_group":"Lower Abs",
    "equipment_needed":"Floor",
    "movement_type":"Pull",
    "description":"Lie flat, legs a few inches off the ground. Kick legs alternately up and down quickly, keeping core tight."
  },
  {
    "exercise_name":"Bicycle Crunch",
    "primary_muscle_group":"Obliques",
    "equipment_needed":"Floor",
    "movement_type":"Rotation",
    "description":"Lie on back, hands behind head. Bring elbow to opposite knee in a pedaling motion."
  },
  {
    "exercise_name":"V-Ups",
    "primary_muscle_group":"Core",
    "equipment_needed":"Floor",
    "movement_type":"Pull",
    "description":"Lie flat, then simultaneously lift legs and torso into a V shape. Touch hands to feet, then lower."
  },
  {
    "exercise_name":"Russian Twist",
    "primary_muscle_group":"Obliques",
    "equipment_needed":"Floor",
    "movement_type":"Rotation",
    "description":"Sit, lean back slightly, lift feet if possible. Twist torso side to side, tapping floor each side."
  },
  {
    "exercise_name":"Reverse Crunch",
    "primary_muscle_group":"Lower Abs",
    "equipment_needed":"Floor",
    "movement_type":"Pull",
    "description":"Lie flat, knees bent. Curl hips up toward chest using abs, then lower with control."
  },
  {
    "exercise_name":"Hollow Body Hold",
    "primary_muscle_group":"Core",
    "equipment_needed":"Floor",
    "movement_type":"Hold",
    "description":"Lie on back, lift shoulders and legs off floor, arms extended overhead. Hold tight, keep back flat."
  },
  {
    "exercise_name":"TRX Pike",
    "primary_muscle_group":"Core",
    "equipment_needed":"TRX",
    "movement_type":"Pull",
    "description":"Start in plank, feet in straps. Lift hips up toward ceiling, keeping legs straight, then return to plank."
  },
  {
    "exercise_name":"TRX Mountain Climbers",
    "primary_muscle_group":"Core",
    "equipment_needed":"TRX",
    "movement_type":"Pull",
    "description":"Feet in straps, drive knees toward chest quickly, alternating legs while keeping core engaged."
  },
  {
    "exercise_name":"TRX Knee Tuck",
    "primary_muscle_group":"Core",
    "equipment_needed":"TRX",
    "movement_type":"Pull",
    "description":"In plank with feet in straps. Draw both knees into chest, keep hips level, then extend legs."
  },
  {
    "exercise_name":"TRX Body Saw",
    "primary_muscle_group":"Core",
    "equipment_needed":"TRX",
    "movement_type":"Hold",
    "description":"Start in plank with feet in straps. Shift body forward and backward while keeping tight form."
  },
  {
    "exercise_name":"Decline Sit-Up",
    "primary_muscle_group":"Upper Abs",
    "equipment_needed":"Adjustable Bench",
    "movement_type":"Pull",
    "description":"Secure feet on decline bench. Sit up with control, then lower slowly."
  },
  {
    "exercise_name":"Incline Leg Raise",
    "primary_muscle_group":"Lower Abs",
    "equipment_needed":"Adjustable Bench",
    "movement_type":"Pull",
    "description":"Lie back on incline bench. Lift legs straight up, lower without arching back."
  },
  {
    "exercise_name":"Bench V-Up",
    "primary_muscle_group":"Core",
    "equipment_needed":"Adjustable Bench",
    "movement_type":"Pull",
    "description":"Grip bench behind head, lift both legs and torso simultaneously into a V. Lower with control."
  },
  {
    "exercise_name":"Weighted Crunch",
    "primary_muscle_group":"Upper Abs",
    "equipment_needed":"Floor",
    "movement_type":"Push",
    "description":"Lie on back holding a plate or dumbbell on chest. Crunch up, then lower slowly."
  },
  {
    "exercise_name":"Ab Ball Crunch",
    "primary_muscle_group":"Upper Abs",
    "equipment_needed":"Ab Ball",
    "movement_type":"Push",
    "description":"Lie with low back supported on ab ball, feet flat. Curl torso up slightly, squeezing abs."
  },
  {
    "exercise_name":"Ab Ball Rollout",
    "primary_muscle_group":"Core",
    "equipment_needed":"Ab Ball\/Stability Ball",
    "movement_type":"Pull",
    "description":"Start on knees, hands on ball. Roll forward as far as you can with control, then pull back using abs."
  },
  {
    "exercise_name":"Stability Ball Pass",
    "primary_muscle_group":"Core",
    "equipment_needed":"Exercise Ball",
    "movement_type":"Pull",
    "description":"Lie flat, pass ball from hands to feet and back, lifting both at the same time."
  },
  {
    "exercise_name":"Stability Ball Plank",
    "primary_muscle_group":"Core",
    "equipment_needed":"Exercise Ball",
    "movement_type":"Hold",
    "description":"Forearms on ball, feet on floor. Hold plank, controlling ball to prevent movement."
  },
  {
    "exercise_name":"Stability Ball Knee Tuck",
    "primary_muscle_group":"Lower Abs",
    "equipment_needed":"Exercise Ball",
    "movement_type":"Pull",
    "description":"Start in plank with shins on ball. Pull knees toward chest, then return to plank."
  },
  {
    "exercise_name":"Toe Taps on Ball",
    "primary_muscle_group":"Lower Abs",
    "equipment_needed":"Exercise Ball",
    "movement_type":"Pull",
    "description":"Lie back, place ball between shins. Tap toes to floor one side at a time, keeping abs braced."
  },
  {
    "exercise_name":"Wall Sit with Twist",
    "primary_muscle_group":"Obliques",
    "equipment_needed":"Floor",
    "movement_type":"Rotation",
    "description":"Hold wall sit position. Hold dumbbell or plate and rotate side to side for oblique activation."
  },
  {
    "exercise_name":"Side Plank with Reach Under",
    "primary_muscle_group":"Obliques",
    "equipment_needed":"Floor",
    "movement_type":"Rotation",
    "description":"Start in side plank, reach under and across torso, then return to open position."
  },
  {
    "exercise_name":"Star Plank",
    "primary_muscle_group":"Obliques",
    "equipment_needed":"Floor",
    "movement_type":"Hold",
    "description":"Start in wide plank, hands and feet spread. Hold tight, keeping hips stable."
  },
  {
    "exercise_name":"Sit-Up to Press",
    "primary_muscle_group":"Upper Abs",
    "equipment_needed":"Floor",
    "movement_type":"Push",
    "description":"Lie back with dumbbells on chest. Sit up and press weights overhead at the top, then return."
  },
  {
    "exercise_name":"Tuck Crunch on Ball",
    "primary_muscle_group":"Upper Abs",
    "equipment_needed":"Ab Ball",
    "movement_type":"Pull",
    "description":"Sit on ball, walk forward into crunch position. Bring knees and elbows together, then extend both."
  },
  {
    "exercise_name":"Oblique Crunch on Ball",
    "primary_muscle_group":"Obliques",
    "equipment_needed":"Ab Ball",
    "movement_type":"Pull",
    "description":"Side-lying over ball. Curl torso upward, then return with control."
  },
  {
    "exercise_name":"Cat-Cow Stretch",
    "primary_muscle_group":"Spine",
    "equipment_needed":"Floor",
    "movement_type":"Spinal Flexion\/Extension",
    "description":"Start on all fours. Arch your back up (cat), then dip it down lifting chest (cow). Flow between both slowly."
  },
  {
    "exercise_name":"Child’s Pose",
    "primary_muscle_group":"Lats",
    "equipment_needed":"Floor",
    "movement_type":"Hold",
    "description":"Kneel and sit back onto heels, arms reaching forward. Relax chest down toward the floor."
  },
  {
    "exercise_name":"Thread the Needle",
    "primary_muscle_group":"Thoracic Spine",
    "equipment_needed":"Floor",
    "movement_type":"Rotation",
    "description":"Start on all fours, reach one arm under and across body. Gently rotate and hold at bottom."
  },
  {
    "exercise_name":"World’s Greatest Stretch",
    "primary_muscle_group":"Hip Flexors",
    "equipment_needed":"Floor",
    "movement_type":"Multi-Plane",
    "description":"Step into deep lunge, twist toward front knee, drop elbow to floor, then reach and return."
  },
  {
    "exercise_name":"90\/90 Hip Stretch",
    "primary_muscle_group":"Hips",
    "equipment_needed":"Floor",
    "movement_type":"Hold",
    "description":"Front leg bent 90°, back leg also 90°. Lean forward to stretch lead hip, switch sides."
  },
  {
    "exercise_name":"Seated Spinal Twist",
    "primary_muscle_group":"Spine",
    "equipment_needed":"Floor",
    "movement_type":"Rotation",
    "description":"Seated upright, cross one leg over and twist toward it using opposite arm for leverage."
  },
  {
    "exercise_name":"Kneeling Hip Flexor Stretch",
    "primary_muscle_group":"Hip Flexors",
    "equipment_needed":"Floor",
    "movement_type":"Hold",
    "description":"Kneel on one knee, shift hips forward. Keep torso tall, squeeze glute on rear leg to deepen stretch."
  },
  {
    "exercise_name":"Couch Stretch",
    "primary_muscle_group":"Quads",
    "equipment_needed":"Bench",
    "movement_type":"Hold",
    "description":"Place back foot on bench or wall, front foot forward in lunge. Sink hips and stay upright."
  },
  {
    "exercise_name":"Supine Twist",
    "primary_muscle_group":"Spine",
    "equipment_needed":"Floor",
    "movement_type":"Rotation",
    "description":"Lie on back, pull one knee across body. Reach opposite arm out, keep shoulders on ground."
  },
  {
    "exercise_name":"Glute Bridge Hold",
    "primary_muscle_group":"Glutes",
    "equipment_needed":"Floor",
    "movement_type":"Hold",
    "description":"Lie on back, knees bent. Drive hips up and hold at the top, squeezing glutes and bracing core."
  },
  {
    "exercise_name":"Wall Angels",
    "primary_muscle_group":"Shoulders",
    "equipment_needed":"Floor",
    "movement_type":"Flexion\/Extension",
    "description":"Back against wall, arms in goalpost. Slide arms up and down, keeping elbows\/wrists in contact."
  },
  {
    "exercise_name":"Scapular Wall Slide",
    "primary_muscle_group":"Shoulders",
    "equipment_needed":"Floor",
    "movement_type":"Stabilization",
    "description":"Arms at sides or 90°, press into wall and slide upward. Keep shoulder blades moving smoothly."
  },
  {
    "exercise_name":"Kneeling Thoracic Extension",
    "primary_muscle_group":"Thoracic Spine",
    "equipment_needed":"Bench or Ball",
    "movement_type":"Extension",
    "description":"Elbows on bench or ball, sit hips back and drop chest. Hold and breathe deeply."
  },
  {
    "exercise_name":"Ball Chest Opener",
    "primary_muscle_group":"Chest",
    "equipment_needed":"Stability Ball",
    "movement_type":"Hold",
    "description":"Lie back on ball, arms out wide. Let gravity open the chest while you breathe deeply."
  },
  {
    "exercise_name":"Figure 4 Stretch",
    "primary_muscle_group":"Glutes",
    "equipment_needed":"Floor",
    "movement_type":"Hold",
    "description":"Lie on back, cross ankle over opposite knee. Pull knee toward chest to stretch glute."
  },
  {
    "exercise_name":"Butterfly Stretch",
    "primary_muscle_group":"Adductors",
    "equipment_needed":"Floor",
    "movement_type":"Hold",
    "description":"Sit with soles of feet together. Let knees fall open, lean forward to increase stretch."
  },
  {
    "exercise_name":"Pigeon Pose",
    "primary_muscle_group":"Glutes",
    "equipment_needed":"Floor",
    "movement_type":"Hold",
    "description":"Bring one knee forward, leg bent under torso. Extend other leg back, square hips and relax into stretch."
  },
  {
    "exercise_name":"Ab Ball Back Opener",
    "primary_muscle_group":"Spine",
    "equipment_needed":"Ab Ball",
    "movement_type":"Hold",
    "description":"Lie back over the ball, arms extended. Let your spine stretch gently over the curve of the ball."
  },
  {
    "exercise_name":"Quadruped Rock Back",
    "primary_muscle_group":"Hips",
    "equipment_needed":"Floor",
    "movement_type":"Glide",
    "description":"Start on all fours. Keep spine neutral and rock hips back toward heels slowly, then forward."
  },
  {
    "exercise_name":"Frog Stretch",
    "primary_muscle_group":"Adductors",
    "equipment_needed":"Floor",
    "movement_type":"Hold",
    "description":"Knees wide, feet out, lower hips toward ground. Breathe deeply and hold."
  },
  {
    "exercise_name":"Lying Windshield Wipers",
    "primary_muscle_group":"Obliques",
    "equipment_needed":"Floor",
    "movement_type":"Rotation",
    "description":"Lie on back, knees bent. Drop knees side to side slowly while keeping shoulders down."
  },
  {
    "exercise_name":"Standing Forward Fold",
    "primary_muscle_group":"Hamstrings",
    "equipment_needed":"Floor",
    "movement_type":"Hold",
    "description":"Stand tall, hinge at hips, let upper body hang. Slight bend in knees okay."
  },
  {
    "exercise_name":"Supine Hamstring Stretch",
    "primary_muscle_group":"Hamstrings",
    "equipment_needed":"Floor",
    "movement_type":"Hold",
    "description":"Lie flat, lift one leg up and pull toward you using towel or strap. Keep other leg on floor."
  },
  {
    "exercise_name":"Ab Ball Side Stretch",
    "primary_muscle_group":"Obliques",
    "equipment_needed":"Ab Ball",
    "movement_type":"Hold",
    "description":"Lie sideways over ball with arm extended overhead. Let body drape and stretch the side chain."
  }
];