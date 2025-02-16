function skillMember() {
    return {
        name: 'skillMember',
        type: 'skill',
        fields: [
            { name: 'id', type: 'ID' },
            { name: 'name', type: 'String' },
            { name: 'email', type: 'String' },
            { name: 'skills', type: '[skill]' },
        ],
    };
}