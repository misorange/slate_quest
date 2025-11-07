const getData = async () => {
    const response = await fetch('https://pinattutaro.github.io/fest2025api/4u/env.json');
    const data = await response.json();
    console.log(data);
    return [data.uri, data["x-api-key"]];
}

const main = async () => {
    try {
        const id = localStorage.getItem('uid');
        console.log('User ID:', id);

        const [uri, quest_api_key] = await getData();
        console.log('API URI:', uri);
        
        const correctAnswers = parseInt(localStorage.getItem('correctAnswers')) || 0;
        console.log('Correct Answers:', correctAnswers);

        const postData = {
            userId: id,
            updates: [
                {
                    flagName: "code_editor_played",
                    increment: 1
                },
                {
                    flagName: "code_problems_solved",
                    increment: correctAnswers
                }
            ]
        };
        
        console.log('Sending data:', postData);

        const response = await fetch(`${uri}/api/users/update-flag`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "x-api-key": quest_api_key
            },
            body: JSON.stringify(postData)
        });

        console.log('Response status:', response.status);
        const data = await response.json();
        console.log('Response data:', data);
        
    } catch (error) {
        console.error('Error in main():', error);
    }
}

// 直接実行時のみ main() を呼び出し
if (typeof window === 'undefined') {
    main();
}