import { calcularBiorhythms } from "../utils/biorhythmcalculos";

it("calcula o bioritmo fisico", () => {
    const { fisico } = calcularBiorhythms("1995-01-01", "2020-02-18");
    expect(fisico).toBeCloseTo(0.5196);
});

it("calcula o bioritmo emocional", () => {
    const { emocional } = calcularBiorhythms("1995-01-01", "2020-02-18");
    expect(emocional).toBeCloseTo(-0.9010);
});

it("calcula o bioritmo intelectual", () => {
    const { intelectual } = calcularBiorhythms("1995-01-01", "2020-02-18");
    expect(intelectual).toBeCloseTo(0.8146);
});