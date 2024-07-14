export const Icon = (platform) => {
    switch (platform.toLowerCase()) {
        case 'twitter':
            return 'bi-twitter';
        case 'instagram':
            return 'bi-instagram';
        case 'facebook':
            return 'bi-facebook';
        default:
            return 'bi-globe';
    }
};
