
export const useFetch = () => {

    const request = async (url, method, body) => {

        try {
            const response = await fetch(url, {
                method,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: body ? JSON.stringify(body) : null
            });

            if (!response.ok) {
                const json = await response.json()
                alert(json.message || 'Ошибка запроса');
                return;
            }

            const responseData = await response.json();

            console.log('Success:', responseData);

            return responseData;

        } catch (error) {
            console.error('Error:', error);
        }
    };

    return { request };
};