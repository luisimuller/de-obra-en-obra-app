export function IconoLadrillo(props) {
  return (
    <svg viewBox="0 0 24 16" width="18" height="12" {...props}>
      <rect x="0.5" y="0.5" width="23" height="15" rx="1" fill="none" stroke="currentColor" />
      <line x1="8" y1="0.5" x2="8" y2="8" stroke="currentColor" />
      <line x1="16" y1="0.5" x2="16" y2="8" stroke="currentColor" />
      <line x1="0.5" y1="8" x2="23.5" y2="8" stroke="currentColor" />
      <line x1="4" y1="8" x2="4" y2="15.5" stroke="currentColor" />
      <line x1="12" y1="8" x2="12" y2="15.5" stroke="currentColor" />
      <line x1="20" y1="8" x2="20" y2="15.5" stroke="currentColor" />
    </svg>
  );
}

export function IconoCeramico(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...props}>
      <rect x="1" y="1" width="22" height="22" rx="1" fill="none" stroke="currentColor" />
      <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" />
      <line x1="1" y1="12" x2="23" y2="12" stroke="currentColor" />
    </svg>
  );
}

export function IconoAbertura(props) {
  return (
    <svg viewBox="0 0 16 24" width="11" height="16" {...props}>
      <rect x="1" y="1" width="14" height="22" rx="1" fill="none" stroke="currentColor" />
      <circle cx="11" cy="12" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function IconoMaterial(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...props}>
      <path d="M3 7l9-4 9 4-9 4-9-4z" fill="none" stroke="currentColor" />
      <path d="M3 7v10l9 4 9-4V7" fill="none" stroke="currentColor" />
      <line x1="12" y1="11" x2="12" y2="21" stroke="currentColor" />
    </svg>
  );
}
export function IconoMadera(props) {
  return (
    <svg viewBox="0 0 24 16" width="18" height="12" {...props}>
      <rect x="0.5" y="1" width="23" height="4" fill="none" stroke="currentColor" />
      <rect x="0.5" y="6" width="23" height="4" fill="none" stroke="currentColor" />
      <rect x="0.5" y="11" width="23" height="4" fill="none" stroke="currentColor" />
    </svg>
  );
}

export function iconoPorCategoria(nombre = "") {
  const texto = nombre.toLowerCase();
  if (texto.includes("ladrillo") || texto.includes("mamposter")) return <IconoLadrillo />;
  if (texto.includes("cerámic") || texto.includes("ceramic") || texto.includes("piso") || texto.includes("revestim")) return <IconoCeramico />;
  if (texto.includes("abertura") || texto.includes("puerta") || texto.includes("ventana")) return <IconoAbertura />;
  return <IconoMaterial />;
}