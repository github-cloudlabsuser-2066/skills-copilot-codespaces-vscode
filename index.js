import { useState } from 'react';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState({
        en: 'type markdown here',
        es: 'escribe markdown aquí',
        fr: 'tapez markdown ici',
        zh: '在这里输入markdown',
        pt: 'digite markdown aqui'
    });
    const [locale, setLocale] = useState('en');

    const handleChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <textarea
                value={markdown}
                onChange={handleChange}
                style={{ width: '100%', height: '200px', marginBottom: '20px' }}
            />
            <div style={{ width: '100%', border: '1px solid #ddd', padding: '20px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}

