import 'tailwindcss/tailwind.css';

export default function Contact() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <h1 className="text-4xl font-bold text-center sm:text-5xl">
                    Contactez-moi !
                </h1>
                <p className="text-lg text-center sm:text-xl">
                    Vous pouvez me contacter via les réseaux sociaux ou par e-mail.
                </p>
            </main>
        </div>
    );
}