import React from 'react';
import { useMinesweeper } from './hooks/useMinesweeper';
import { Header } from './components/Branding/Header';
import { PixelHeaderClouds } from './components/Branding/PixelDecorations';
import { Footer } from './components/Branding/Footer';
import { Board } from './components/Board/Board';
import { MobileControls } from './components/UI/MobileControls';
import { IntroCard } from './components/AcademicCards/IntroCard';
import { LearningOutcomeCard } from './components/AcademicCards/LearningOutcomeCard';
import { KeyConceptsCard } from './components/AcademicCards/KeyConceptsCard';
import { FormulaCard } from './components/AcademicCards/FormulaCard';
import { RealtimeStatsCard } from './components/AcademicCards/RealtimeStatsCard';
import { ConclusionCard } from './components/AcademicCards/ConclusionCard';

export const App: React.FC = () => {
  const {
    board,
    status,
    faceState,
    gameMode,
    stats,
    seconds,
    isMuted,
    handleCellClick,
    handleCellRightClick,
    handleCellMouseDown,
    handleCellMouseUp,
    resetGame,
    toggleGameMode,
    toggleMute,
  } = useMinesweeper();

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-sky-400 via-blue-600 to-blue-900 flex flex-col justify-between selection:bg-amber-400 selection:text-slate-900">
      {/* Nubes flotantes decorativas a los lados del encabezado (capa z-0) */}
      <PixelHeaderClouds />

      {/* Encabezado institucional, logos, título 3D flanqueado por bomba y bandera */}
      <Header />

      {/* Contenedor principal de contenidos: Tablero central y Tarjetas Académicas */}
      <main className="w-full max-w-7xl mx-auto px-3 sm:px-4 py-4 relative z-10 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
          {/* Columna Izquierda: Introducción, Resultado de Aprendizaje y Conceptos Clave (3 columnas) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <IntroCard />
            <LearningOutcomeCard />
            <KeyConceptsCard />
          </div>

          {/* Columna Central: Tablero Buscaminas interactivo y Fórmula en tiempo real (5 columnas) */}
          <div className="lg:col-span-5 flex flex-col items-center gap-4">
            {/* Tablero Clásico Retro con biseles Windows 95 */}
            <Board
              board={board}
              minesRemaining={stats.remainingMinesDisplay}
              faceState={faceState}
              seconds={seconds}
              isMuted={isMuted}
              onCellClick={handleCellClick}
              onCellRightClick={handleCellRightClick}
              onCellMouseDown={handleCellMouseDown}
              onCellMouseUp={handleCellMouseUp}
              onReset={resetGame}
              onToggleMute={toggleMute}
            />

            {/* Controles para pantallas táctiles y móviles */}
            <MobileControls
              gameMode={gameMode}
              status={status}
              onToggleMode={toggleGameMode}
              onReset={resetGame}
            />

            {/* Tarjeta de Fórmula destacada con sustitución en vivo */}
            <div className="w-full">
              <FormulaCard stats={stats} />
            </div>
          </div>

          {/* Columna Derecha: Resultados en vivo, medidor de riesgo y Conclusión (4 columnas) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <RealtimeStatsCard stats={stats} />
            <ConclusionCard />
          </div>
        </div>
      </main>

      {/* Pie de página con zócalo de bloques de piedra pixelada y créditos */}
      <Footer />
    </div>
  );
};

export default App;
