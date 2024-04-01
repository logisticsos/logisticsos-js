export const solverHandlerMutation = async (data: any, type: string, key: string) => {
    const fetch_solver_result = await fetch(`https://logisticsosapi.com/${type}/v3`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            'x-api-key': key
        },
        body: JSON.stringify(data)
    });

    const response_body = await fetch_solver_result.json();
    return {
        response_body,
        status: fetch_solver_result.status
    };
};

export const querySolverResult = async (job_id: string, key: string, type: string) => {
    const fetch_solver_result = await fetch(`https://logisticsosapi.com/${type}/v3?job_id=${job_id}`, {
        method: "get",
        headers: {
            "Content-Type": "application/json",
            'x-api-key': key
        }
    });

    const response_body = await fetch_solver_result.json();
    return {
        response_body,
        status: fetch_solver_result.status
    };
};

export const mutateRoutesFigures = async (data: any, key: string) => {
    const fetch_solver_result = await fetch(`https://logisticsosapi.com/route/v1`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            'x-api-key': key
        },
        body: JSON.stringify(data)
    });

    const response_body = await fetch_solver_result.json();
    return {
        response_body,
        status: fetch_solver_result.status
    };
};