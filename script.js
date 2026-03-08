// DOM Elements
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const bmiBtn = document.getElementById('bmiBtn');
const bmiModal = document.getElementById('bmiModal');
const closeBmi = document.getElementById('closeBmi');
const calculateBmiBtn = document.getElementById('calculateBmi');
const bmiResult = document.getElementById('bmiResult');
const heightCm = document.getElementById('heightCm');
const weightKg = document.getElementById('weightKg');
const bmiValueEl = document.getElementById('bmiValue');
const bmiCategoryEl = document.getElementById('bmiCategory');
const scaleMarker = document.getElementById('scaleMarker');
const bmiRecommendation = document.getElementById('bmiRecommendation');

// Enhanced fitness responses
const fitnessResponses = {
    greeting: [
        "Hello! Ready to crush your fitness goals today? 💪",
        "Hey there! Let's work on your health and happiness together! 🌟",
        "Welcome back! What's on your mind for fitness today?",
        "Hi! Excited to help you on your fitness journey! Let's get started! 🚀"
    ],
    workout: [
        "Great question! Here's a balanced workout routine:\n\n🔥 <strong>Monday - Upper Body</strong>\n- Push-ups: 3x12\n- Dumbbell rows: 3x10\n- Shoulder press: 3x10\n\n🔥 <strong>Wednesday - Lower Body</strong>\n- Squats: 3x15\n- Lunges: 3x12 each leg\n- Deadlifts: 3x10\n\n🔥 <strong>Friday - Cardio & Core</strong>\n- 20 min jogging\n- Plank: 3x30 sec\n- Bicycle crunches: 3x15",
        
        "For a quick home workout, try this:\n\n✅ 10 Jumping Jacks\n✅ 10 Squats\n✅ 10 Push-ups\n✅ 10 Lunges (each leg)\n✅ 30 sec Plank\n\nRepeat 3 rounds! 🏃‍♂️",
        
        "Let's build a custom workout for you! What equipment do you have available?\n\n🏋️ Options:\n- Dumbbells\n- Resistance bands\n- Bodyweight only\n\nLet me know your preference!"
    ],
    cardio: [
        "Great for cardiovascular health! 🏃‍♂️\n\n<strong>Weekly Cardio Plan:</strong>\n\n🟢 <strong>Beginner:</strong>\n- brisk walk: 20-30 mins\n- light jogging: 15-20 mins\n\n🟡 <strong>Intermediate:</strong>\n- jogging: 25-30 mins\n- cycling: 30 mins\n- jump rope: 15 mins\n\n🔴 <strong>Advanced:</strong>\n- HIIT: 20 mins\n- running: 30-40 mins\n- swimming: 30 mins\n\nRemember to warm up before and cool down after!",
        
        "Here are some fun cardio options:\n\n🏃 Running\n🚴 Cycling\n🏊 Swimming\n⏱️ Jump Rope\n💃 Dancing\n🥊 Boxing\n\nAim for at least 150 minutes of moderate cardio per week!"
    ],
    strength: [
        "Building strength is crucial! 💪\n\n<strong>Key Compound Exercises:</strong>\n\n1. 🏋️ <strong>Squats</strong> - Legs, glutes, core\n2. 🏋️ <strong>Deadlifts</strong> - Back, legs, core\n3. 🏋️ <strong>Bench Press</strong> - Chest, shoulders, triceps\n4. 🏋️ <strong>Pull-ups</strong> - Back, biceps\n5. 🏋️ <strong>Overhead Press</strong> - Shoulders, triceps\n\nStart with 3 sets of 8-12 reps. Rest 1-2 minutes between sets!",
        
        "Strength training tips:\n\n✅ Focus on form over weight\n✅ Progressive overload (increase weight gradually)\n✅ Train each muscle group 2-3x per week\n✅ Get 7-9 hours of sleep\n✅ Eat enough protein (1.6-2.2g per kg body weight)"
    ],
    stretching: [
        "Flexibility is often overlooked! 🧘\n\n<strong>Daily Stretching Routine:</strong>\n\n🌅 <strong>Morning (5-10 mins):</strong>\n- Neck rolls\n- Shoulder stretches\n- Cat-cow stretches\n- Hamstring stretches\n\n🌙 <strong>Evening (10-15 mins):</strong>\n- Hip flexor stretches\n- Quad stretches\n- Chest opener\n- Deep breathing\n\nHold each stretch for 20-30 seconds. Never bounce!",
        
        "Benefits of stretching:\n\n✅ Improved flexibility\n✅ Better posture\n✅ Reduced muscle tension\n✅ Enhanced performance\n✅ Injury prevention\n\nTry yoga or Pilates for combined flexibility and strength!"
    ],
    nutrition: [
        "Nutrition is key! Here are some tips:\n\n🥗 <strong>Eat more:</strong>\n- Lean proteins (chicken, fish, tofu)\n- Complex carbs (brown rice, oats)\n- Fresh vegetables & fruits\n- Healthy fats (nuts, avocado)\n\n🚫 <strong>Limit:</strong>\n- Processed foods\n- Sugary drinks\n- Excess alcohol",
        
        "For a balanced meal plan:\n\n🌅 <strong>Breakfast:</strong> Oatmeal + banana + nuts\n\n🌞 <strong>Lunch:</strong> Grilled chicken + quinoa + vegetables\n\n🌙 <strong>Dinner:</strong> Fish + sweet potato + salad\n\n💧 <strong>Drink:</strong> 8 glasses of water daily!",
        
        "Macros matter! 📊\n\n<strong>Balanced Diet:</strong>\n🥩 Protein: 30% (chicken, fish, eggs, tofu)\n🍚 Carbs: 40% (rice, oats, fruits)\n🥑 Fats: 30% (nuts, avocado, olive oil)\n\nCalculate your caloric needs based on your activity level!"
    ],
    protein: [
        "Protein is essential for muscle building! 💪\n\n<strong>Daily Protein Needs:</strong>\n\n🏃 <strong>Sedentary:</strong> 0.8g per kg\n🏋️ <strong>Active:</strong> 1.2-1.6g per kg\n💪 <strong>Athlete:</strong> 1.6-2.2g per kg\n\n<strong>Best Protein Sources:</strong>\n- Chicken breast: 31g per 100g\n- Fish: 20-25g per 100g\n- Eggs: 6g each\n- Greek yogurt: 10g per 100g\n- Tofu: 8g per 100g\n- Lentils: 9g per 100g",
        
        "Protein timing tips:\n\n✅ Spread protein throughout the day\n✅ Eat protein within 2 hours of workout\n✅ 20-40g protein per meal\n✅ Include protein before bed (casein or cottage cheese)\n\nThis optimizes muscle protein synthesis!"
    ],
    hydration: [
        "Water is life! 💧\n\n<strong>Daily Water Intake:</strong>\n\n📊 <strong>General Rule:</strong>\n- Men: 3.7 liters\n- Women: 2.7 liters\n\n🏃 <strong>During Exercise:</strong>\n- Drink 200-500ml every 20 minutes\n- Pre-workout: 500ml 2 hours before\n- Post-workout: 500-1000ml\n\n💡 <strong>Tips:</strong>\n- Carry a water bottle\n- Set reminders\n- Drink before you feel thirsty\n- Monitor urine color (should be pale yellow)",
        
        "Signs of dehydration:\n\n🚨 Dark urine\n🚨 Fatigue\n🚨 Headaches\n🚨 Dry mouth\n🚨 Reduced performance\n\nStay hydrated for optimal fitness!"
    ],
    sleep: [
        "Sleep is when recovery happens! 😴\n\n<strong>Sleep for Fitness:</strong>\n\n⏰ <strong>Optimal Duration:</strong>\n- Adults: 7-9 hours\n- Athletes: 8-10 hours\n\n🌙 <strong>Sleep Tips:</strong>\n- Consistent sleep schedule\n- Cool, dark room\n- No screens 1 hour before bed\n- Avoid caffeine after 2pm\n- Light dinner\n\nGrowth hormone is released during deep sleep!",
        
        "Poor sleep affects:\n\n❌ Muscle recovery\n❌ Hormone levels\n❌ Energy levels\n❌ Motivation\n❌ Performance\n\nPrioritize sleep for fitness success!"
    ],
    mindfulness: [
        "Mental wellness is just as important! 🧘\n\nTry these techniques:\n\n1. <strong>Box Breathing:</strong> Inhale 4s, hold 4s, exhale 4s, hold 4s\n\n2. <strong>5-4-3-2-1 Grounding:</strong> Name 5 things you see, 4 you hear, 3 you feel, 2 you smell, 1 you taste\n\n3. <strong>Daily Gratitude:</strong> Write 3 things you're grateful for",
        
        "Remember: Progress over perfection! 🌈\n\nTake breaks, celebrate small wins, and be kind to yourself. Your mental health matters!"
    ],
    stress: [
        "Managing stress is crucial for fitness! 🧠\n\n<strong>Stress Management Techniques:</strong>\n\n1. 🧘 <strong>Meditation</strong> - 10-20 mins daily\n2. 🏃 <strong>Exercise</strong> - Releases endorphins\n3. 😴 <strong>Sleep</strong> - 7-9 hours\n4. 📱 <strong>Digital Detox</strong> - Reduce screen time\n5. 👥 <strong>Social Connection</strong> - Talk to friends\n\nHigh cortisol levels can hinder progress!",
        
        "Quick stress relief:\n\n🌬️ Deep breathing (4-7-8 technique)\n🚶 Take a walk\n🎵 Listen to music\n📓 Journal your thoughts\n🧘 Do a quick body scan\n\nWhat stresses you out most? Let's work on solutions!"
    ],
    motivation: [
        "You've got this! 🔥\n\nRemember:\n- Every workout counts\n- Rest is part of progress\n- Small consistent actions lead to big results\n- Celebrate non-scale victories",
        
        "Stay motivated with these tips:\n\n1. Set SMART goals\n2. Track your progress\n3. Find a workout buddy\n4. Reward yourself\n5. Mix up your routine\n\nYou are capable of amazing things! 💪"
    ],
    goals: [
        "Setting smart goals is key! 🎯\n\n<strong>SMART Goals:</strong>\n\nS - Specific: What exactly do you want?\nM - Measurable: How will you track it?\nA - Achievable: Is it realistic?\nR - Relevant: Does it matter to you?\nT - Time-bound: What's the deadline?\n\n<strong>Example:</strong>\n❌ \"I want to lose weight\"\n✅ \"I want to lose 5kg in 3 months by exercising 4x per week\"",
        
        "Short-term vs Long-term goals:\n\n📅 <strong>Weekly:</strong>\n- Workout 4 times\n- Walk 10,000 steps daily\n\n📅 <strong>Monthly:</strong>\n- Lose 2kg\n- Run 5km without stopping\n\n📅 <strong>Yearly:</strong>\n- Run a marathon\n- Achieve target weight\n\nLet's set some goals together!"
    ],
    weightloss: [
        "Weight loss is a journey! ⚖️\n\n<strong>Key Principles:</strong>\n\n1. <strong>Calorie Deficit:</strong> Burn more than you eat (300-500 cal deficit)\n\n2. <strong>Protein:</strong> High protein to preserve muscle\n\n3. <strong>Exercise:</strong> Combine strength + cardio\n\n4. <strong>Sleep:</strong> 7-9 hours for hormone balance\n\n5. <strong>Consistency:</strong> Small changes daily\n\n💡 Aim for 0.5-1kg per week loss",
        
        "Weight loss tips:\n\n✅ Track your food\n✅ Eat more protein\n✅ Drink water before meals\n✅ Get enough sleep\n✅ Resistance train\n❌ Don't skip meals\n❌ Avoid crash diets\n\nWould you like a personalized meal plan?"
    ],
    weightgain: [
        "Building muscle takes time! 💪\n\n<strong>Muscle Building Tips:</strong>\n\n1. <strong>Calorie Surplus:</strong> Eat 250-500 cal above maintenance\n\n2. <strong>Protein:</strong> 1.6-2.2g per kg body weight\n\n3. <strong>Strength Training:</strong> Heavy weights, lower reps (6-12)\n\n4. <strong>Progressive Overload:</strong> Increase weight gradually\n\n5. <strong>Rest:</strong> Muscles grow during rest, not workout\n\nBe patient - muscle gain takes months!",
        
        "Best foods for muscle gain:\n\n🥩 Lean beef\n🍗 Chicken\n🐟 Salmon\n🥚 Eggs\n🥛 Greek yogurt\n🍚 Rice & pasta\n🥑 Avocado\n🥜 Nuts\n\nEat every 3-4 hours to fuel growth!"
    ],
    bmi: [
        "I'd be happy to help with your BMI! 📊\n\nClick the calculator icon (🔢) in the input area to calculate your BMI.\n\n<strong>BMI Categories:</strong>\n- Underweight: < 18.5\n- Normal: 18.5 - 24.9\n- Overweight: 25 - 29.9\n- Obese: ≥ 30\n\nBMI is just one measure of health. Let's discuss your goals!",
        
        "Want to calculate your BMI? 📈\n\nUse the calculator button in the chat or tell me your height and weight!\n\nExample: \"I'm 175cm and weigh 70kg\"\n\nI'll calculate it for you!"
    ],
    beginner: [
        "Welcome to your fitness journey! 🌟\n\n<strong>Starting Tips:</strong>\n\n1. 🏃 Start slow - walk before you run\n2. ⏰ Begin with 20-30 mins\n3. 📈 Increase gradually (10% rule)\n4. 💧 Stay hydrated\n5. 😴 Rest is important\n6. 📓 Track your progress\n\nThe best workout is one you enjoy! What activities interest you?",
        
        "Starting fitness? Let's go! 🚀\n\n<strong>Week 1-2:</strong>\n- Walk 20 mins, 3x per week\n- Bodyweight exercises 2x per week\n- Stretch daily\n\n<strong>Week 3-4:</strong>\n- Add 5 mins each session\n- Try new exercises\n- Focus on form\n\nRemember: Consistency beats intensity!"
    ],
    equipment: [
        "Great question! 🏋️\n\n<strong>Home Gym Essentials:</strong>\n\n💰 <strong>Budget ($50-100):</strong>\n- Resistance bands\n- Jump rope\n- Yoga mat\n- Dumbbells\n\n💰💰 <strong>Medium ($200-500):</strong>\n- Adjustable dumbbells\n- Pull-up bar\n- Kettlebell\n- Bench\n\n💰💰💰 <strong>Premium ($500+):</strong>\n- Home gym station\n- Treadmill or bike\n- Weights set\n\nWhat equipment do you have access to?",
        
        "No equipment? No problem! 🏃‍♂️\n\n<strong>Bodyweight Workout:</strong>\n- Push-ups\n- Squats\n- Lunges\n- Planks\n- Burpees\n- Mountain climbers\n\nYou can build an amazing physique with just your bodyweight!"
    ],
    supplement: [
        "Supplements can help, but food first! 💊\n\n<strong>Evidence-Based Supplements:</strong>\n\n1. 💪 <strong>Creatine:</strong> Strength & muscle (5g daily)\n2. 🥛 <strong>Protein Powder:</strong> Hit protein goals\n3. ☀️ <strong>Vitamin D:</strong> If deficient\n4. 🐟 <strong>Fish Oil:</strong> If no fish intake\n\n⚠️ Always consult a doctor first!\n\nReal food is always better than supplements.",
        
        "Supplement basics:\n\n❌ Pre-workout (unnecessary for beginners)\n❌ Fat burners (often ineffective)\n❌ BCAAs (if eating enough protein)\n\n✅ Creatine monohydrate (well researched)\n✅ Whey protein (convenient)\n✅ Vitamin D (if low)\n\nFocus on whole foods first!"
    ],
    injury: [
        "Safety first! 🏥\n\n<strong>Common Injury Prevention:</strong>\n\n1. 🧘 Warm up before exercise\n2. 🧘 Cool down after\n3. 🏋️ Use proper form\n4. 📈 Increase intensity gradually\n5. 💪 Strengthen supporting muscles\n\n<strong>If injured:</strong>\n- RICE method (Rest, Ice, Compression, Elevation)\n- Don't push through pain\n- See a professional\n\nWhat area is bothering you?",
        
        "Listen to your body! ⚠️\n\n<strong>Red Flags:</strong>\n🚨 Sharp pain\n🚨 Joint swelling\n🚨 Numbness/tingling\n🚨 Pain at rest\n\n<strong>Recovery Tips:</strong>\n✅ Rest\n✅ Ice/heat\n✅ Gentle movement\n✅ Proper nutrition\n✅ Professional help if needed\n\nNever ignore pain!"
    ],
    recovery: [
        "Recovery is when growth happens! 🔄\n\n<strong>Recovery Essentials:</strong>\n\n1. 😴 <strong>Sleep:</strong> 7-9 hours\n2. 💧 <strong>Hydration:</strong> 2-3 liters\n3. 🥗 <strong>Nutrition:</strong> Protein + carbs\n4. 🧘 <strong>Rest:</strong> 1-2 days per week\n5. 🧊 <strong>Ice/Heat:</strong> For soreness\n\n<strong>Active Recovery:</strong>\n- Light walking\n- Swimming\n- Yoga\n- Stretching",
        
        "Overtraining signs:\n\n⚠️ Persistent fatigue\n⚠️ Decreased performance\n⚠️ Mood changes\n⚠️ Frequent illness\n⚠️ Injury\n\nTake rest days! They're part of training."
    ],
    tracking: [
        "Tracking progress keeps you accountable! 📊\n\n<strong>What to Track:</strong>\n\n📝 Workouts: exercises, sets, reps, weight\n📊 Measurements: weight, waist, chest, arms\n📈 Progress photos: monthly\n😴 Sleep & recovery\n💧 Hydration\n\n<strong>Apps:</strong>\n- MyFitnessPal\n- Strong\n- Fitbod\n- Apple Health\n\nWould you like help setting up tracking?",
        
        "Measure what matters! 🎯\n\n<strong>Non-Scale Victories:</strong>\n✅ Energy levels\n✅ Clothing fit\n✅ Strength gains\n✅ Sleep quality\n✅ Mood\n✅ Endurance\n\nThe scale doesn't tell the whole story!"
    ],
    motivation: [
        "You've got this! 🔥\n\nRemember:\n- Every workout counts\n- Rest is part of progress\n- Small consistent actions lead to big results\n- Celebrate non-scale victories",
        
        "Stay motivated with these tips:\n\n1. Set SMART goals\n2. Track your progress\n3. Find a workout buddy\n4. Reward yourself\n5. Mix up your routine\n\nYou are capable of amazing things! 💪"
    ],
    default: [
        "I'm here to help with your fitness journey! Ask me about:\n\n💪 Workouts & exercises\n🥗 Nutrition & diet\n🧘 Mindfulness & stress\n📊 Goal setting\n⚖️ Weight management\n💊 Supplements\n🏥 Injury prevention\n😴 Sleep & recovery\n\nWhat would you like to know more about?",
        
        "Great question! I'm your fitness coach. I can help with:\n- Exercise routines\n- Healthy eating\n- Mental wellness\n- Motivation & tips\n- BMI calculation\n- And much more!\n\nJust let me know what you need! 🌟"
    ]
};

// Keyword mappings for more accurate responses
const keywordMappings = {
    greeting: ['hello', 'hi', 'hey', 'start', 'good morning', 'good evening', 'good afternoon'],
    workout: ['workout', 'exercise', 'training', 'gym', 'push', 'pull', 'squats', 'reps', 'sets', 'routine'],
    cardio: ['cardio', 'running', 'jogging', 'cycling', 'swimming', 'hiit', 'burn fat', 'endurance'],
    strength: ['strength', 'muscle', 'build', 'weights', 'dumbbell', 'barbell', 'power', 'mass'],
    stretching: ['stretch', 'flexible', 'yoga', 'pilates', 'mobility', 'warm up', 'cool down'],
    nutrition: ['food', 'eat', 'diet', 'nutrition', 'meal', 'healthy', 'calories', 'macros'],
    protein: ['protein', 'whey', 'amino', 'creatine', 'meat', 'egg', 'chicken', 'fish'],
    hydration: ['water', 'drink', 'hydration', 'thirsty', 'fluids'],
    sleep: ['sleep', 'rest', 'tired', 'insomnia', 'night', 'bed', 'fatigue'],
    mindfulness: ['mind', 'stress', 'anxiety', 'meditation', 'breath', 'mental', 'relax', 'calm', 'peace'],
    stress: ['stress', 'anxious', 'overwhelmed', 'pressure', 'burnout'],
    motivation: ['motivate', 'help', 'tip', 'advice', 'inspire', 'stuck', 'lazy'],
    goals: ['goal', 'target', 'plan', 'achieve', 'objective', 'resolution'],
    weightloss: ['lose', 'loss', 'weight', 'slim', 'fat', 'burn', 'dieting', 'cut'],
    weightgain: ['gain', 'bulk', 'muscle', 'increase', 'eat more', 'lean'],
    bmi: ['bmi', 'body mass index', 'calculate', 'overweight', 'underweight', 'normal weight'],
    beginner: ['beginner', 'new', 'start', 'first', 'never exercised', 'just starting', 'newbie'],
    equipment: ['equipment', 'gym', 'dumbbell', 'weights', 'bands', 'mat', 'machine', 'tools'],
    supplement: ['supplement', 'vitamin', 'pills', 'creatine', 'pre-workout', 'fat burner', 'pump'],
    injury: ['injury', 'pain', 'hurt', 'sore', 'ache', 'broken', 'torn', 'recovery'],
    recovery: ['recovery', 'rest', 'soreness', 'fatigue', 'overtraining', 'muscle sore'],
    tracking: ['track', 'measure', 'progress', 'log', 'journal', 'monitor', 'app']
};

// Get random response from array
function getRandomResponse(category) {
    const responses = fitnessResponses[category] || fitnessResponses.default;
    return responses[Math.floor(Math.random() * responses.length)];
}

// Analyze user message and return appropriate category
function analyzeMessage(message) {
    const lowerMessage = message.toLowerCase();
    
    // Check each category's keywords
    for (const [category, keywords] of Object.entries(keywordMappings)) {
        for (const keyword of keywords) {
            if (lowerMessage.includes(keyword)) {
                return category;
            }
        }
    }
    
    return 'default';
}

// Add message to chat
function addMessage(content, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    const avatarIcon = isUser ? 'fa-user' : 'fa-robot';
    
    messageDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas ${avatarIcon}"></i>
        </div>
        <div class="message-content">
            ${content}
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Show typing indicator
function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-robot"></i>
        </div>
        <div class="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;
    
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Remove typing indicator
function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Parse height and weight from message
function parseBmiFromMessage(message) {
    const lowerMessage = message.toLowerCase();
    
    // Look for height in cm or feet/inches
    let height = null;
    let weight = null;
    
    // Match height patterns
    const heightCmMatch = lowerMessage.match(/(\d+)\s*cm/);
    const heightOnlyMatch = lowerMessage.match(/height.*?(\d+)/);
    
    // Match weight patterns  
    const weightKgMatch = lowerMessage.match(/(\d+(?:\.\d+)?)\s*kg/);
    const weightOnlyMatch = lowerMessage.match(/weight.*?(\d+(?:\.\d+)?)/);
    
    if (heightCmMatch) {
        height = parseFloat(heightCmMatch[1]);
    } else if (heightOnlyMatch) {
        height = parseFloat(heightOnlyMatch[1]);
    }
    
    if (weightKgMatch) {
        weight = parseFloat(weightKgMatch[1]);
    } else if (weightOnlyMatch) {
        weight = parseFloat(weightOnlyMatch[1]);
    }
    
    // Validate and return
    if (height && weight && height > 50 && height < 300 && weight > 10 && weight < 500) {
        return { height, weight };
    }
    
    return null;
}

// Calculate BMI
function calculateBmi(heightCm, weightKg) {
    const heightM = heightCm / 100;
    return (weightKg / (heightM * heightM)).toFixed(1);
}

// Get BMI category
function getBmiCategory(bmi) {
    if (bmi < 18.5) return { category: 'Underweight', class: 'underweight' };
    if (bmi < 25) return { category: 'Normal', class: 'normal' };
    if (bmi < 30) return { category: 'Overweight', class: 'overweight' };
    return { category: 'Obese', class: 'obese' };
}

// Get BMI recommendation
function getBmiRecommendation(bmi, category) {
    const recommendations = {
        underweight: "Focus on nutrient-dense foods, increase caloric intake with healthy foods, strength train to build muscle mass.",
        normal: "Maintain your healthy lifestyle! Continue with balanced diet and regular exercise.",
        overweight: "Aim for gradual weight loss through calorie deficit, increased protein intake, and regular exercise.",
        obese: "Consider consulting a healthcare provider. Focus on sustainable lifestyle changes with gradual progress."
    };
    return recommendations[category.toLowerCase()];
}

// Get scale marker position
function getScalePosition(bmi) {
    // BMI range: 15-40 mapped to 0-100%
    const minBmi = 15;
    const maxBmi = 40;
    const position = ((bmi - minBmi) / (maxBmi - minBmi)) * 100;
    return Math.max(0, Math.min(100, position));
}

// Handle BMI calculation request from chat
function handleBmiFromChat(message) {
    const bmiData = parseBmiFromMessage(message);
    if (bmiData) {
        return processBmiCalculation(bmiData.height, bmiData.weight);
    }
    return null;
}

// Process BMI calculation
function processBmiCalculation(height, weight) {
    const bmi = calculateBmi(height, weight);
    const { category, class: categoryClass } = getBmiCategory(bmi);
    const recommendation = getBmiRecommendation(bmi, category);
    const scalePos = getScalePosition(bmi);
    
    return `<strong>📊 Your BMI Results:</strong>\n\n` +
        `BMI: <strong>${bmi}</strong>\n` +
        `Category: <strong>${category}</strong>\n\n` +
        `<em>${recommendation}</em>\n\n` +
        `Would you like personalized workout or nutrition advice based on this?`;
}

// Simulate bot response
function simulateBotResponse(userMessage) {
    showTypingIndicator();
    
    // Check if message contains BMI calculation request
    const bmiResponse = handleBmiFromChat(userMessage);
    
    // Simulate delay for realistic feel
    setTimeout(() => {
        removeTypingIndicator();
        
        if (bmiResponse) {
            addMessage(bmiResponse, false);
        } else {
            const category = analyzeMessage(userMessage);
            const response = getRandomResponse(category);
            addMessage(response, false);
        }
    }, 1000 + Math.random() * 1000);
}

// Send message
function sendMessage() {
    const message = userInput.value.trim();
    
    if (message) {
        // Add user message
        addMessage(message, true);
        
        // Clear input
        userInput.value = '';
        
        // Simulate bot response
        simulateBotResponse(message);
    }
}

// BMI Modal Functions
function openBmiModal() {
    bmiModal.classList.add('active');
    heightCm.focus();
}

function closeBmiModal() {
    bmiModal.classList.remove('active');
    // Reset form
    heightCm.value = '';
    weightKg.value = '';
    bmiResult.style.display = 'none';
}

function performBmiCalculation() {
    const height = parseFloat(heightCm.value);
    const weight = parseFloat(weightKg.value);
    
    if (!height || !weight || height < 50 || height > 300 || weight < 10 || weight > 500) {
        alert('Please enter valid height (cm) and weight (kg)');
        return;
    }
    
    const bmi = calculateBmi(height, weight);
    const { category, class: categoryClass } = getBmiCategory(bmi);
    const recommendation = getBmiRecommendation(bmi, category);
    const scalePos = getScalePosition(bmi);
    
    // Update result display
    bmiValueEl.textContent = bmi;
    bmiCategoryEl.textContent = category;
    bmiCategoryEl.className = 'bmi-category ' + categoryClass;
    scaleMarker.style.left = scalePos + '%';
    bmiRecommendation.textContent = recommendation;
    
    bmiResult.style.display = 'block';
    
    // Also add result to chat
    const chatResult = `<strong>📊 BMI Result:</strong>\n\nYour BMI is <strong>${bmi}</strong> (${category})\n\n${recommendation}`;
    addMessage(chatResult, false);
}

// Event listeners
sendBtn.addEventListener('click', sendMessage);

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// BMI event listeners
bmiBtn.addEventListener('click', openBmiModal);
closeBmi.addEventListener('click', closeBmiModal);
calculateBmiBtn.addEventListener('click', performBmiCalculation);

// Close modal on outside click
bmiModal.addEventListener('click', (e) => {
    if (e.target === bmiModal) {
        closeBmiModal();
    }
});

// Add quick reply functionality
function addQuickReplies() {
    const quickReplies = [
        'Give me a workout',
        'Nutrition tips',
        'Mental wellness',
        'Calculate my BMI'
    ];
    
    const lastMessage = chatMessages.lastElementChild;
    if (lastMessage && !lastMessage.classList.contains('user-message')) {
        const quickRepliesDiv = document.createElement('div');
        quickRepliesDiv.className = 'quick-replies';
        
        quickReplies.forEach(reply => {
            const btn = document.createElement('button');
            btn.className = 'quick-reply-btn';
            btn.textContent = reply;
            btn.onclick = () => {
                userInput.value = reply;
                sendMessage();
            };
            quickRepliesDiv.appendChild(btn);
        });
        
        lastMessage.querySelector('.message-content').appendChild(quickRepliesDiv);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Focus input on load
    userInput.focus();
    
    // Add quick replies after initial message
    setTimeout(addQuickReplies, 500);
});
