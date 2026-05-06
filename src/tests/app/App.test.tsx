import { render, screen } from '@testing-library/react';
import App from '@/components/app/App';

describe('App Component', () => {
    it('should render correctly', () => {
        render(<App />);
        const linkElement = screen.getByText("App");
        expect(linkElement).toBeInTheDocument();
    });
});
