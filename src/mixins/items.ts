import { ref } from "vue";

export type Item = {
  name: string;
  title: string;
  description: string;
  src: string;
};

export const isEnglishLanguageOn = ref<boolean>(false);

export const privacyPolitics: Array<Item> = [
  {
    name: "privacy",
    title: "Polityka prywatności",
    description: `POLITYKA OCHRONY DANYCH OSOBOWYCH

    (Q) Kim jesteśmy?
    (A) Klubem fitness.
    
    (Q) Co to są dane osobowe?
    (A) Dane osobowe - oznaczają wszelkie informacje o zidentyfikowanej lub możliwej do zidentyfikowania osobie fizycznej ("osobie, której dane dotyczą"); możliwa do zidentyfikowania osoba fizyczna to osoba, którą można bezpośrednio lub pośrednio zidentyfikować, w szczególności na podstawie identyfikatora takiego jak imię i nazwisko, numer identyfikacyjny, dane o lokalizacji, identyfikator internetowy lub jeden bądź kilka
    szczególnych czynników określających fizyczną, fizjologiczną, genetyczną, psychiczną,
    ekonomiczną, kulturową lub społeczną tożsamość osoby fizycznej.
    
    (Q) Po co przetwarzamy dane osobowe?
    (A) Dane osobowe przetwaramy w celu umożliwienia zapisania się na nasze usługi (np. kupno karnetu, odebranie wejścia na darmowy trening)
    
    
    Kontakt
    1. Niniejszy dokument zatytułowany „Polityka ochrony danych osobowych” (dalej jako Polityka) ma za zadanie stanowić mapę wymogów, zasad i regulacji ochrony danych osobowych w McGłuszak MacroIndustries Sp z o.o, ul. Warszawska 6m32, 15-063 Białystok, NIP: 9662116841, KRS: 0000716731, REGON: 368770856.
    Niniejsza Polityka jest polityką ochrony danych osobowych w rozumieniu 
    RODO  – rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z 27.04.2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE
    (ogólne rozporządzenie o ochronie danych) (Dz.Urz. UE L 119, s. 1).
    2. Polityka zawiera:
    a) opis zasad ochrony danych obowiązujących w Spółce;
    b) odwołania do załączników uszczegóławiających (wzorcowe procedury lub instrukcje dotyczące poszczególnych obszarów z zakresu ochrony danych osobowych wymagających doprecyzowania w odrębnych dokumentach);
    3. Odpowiedzialny za wdrożenie i utrzymanie niniejszej Polityki jest Zarząd Spółki, a w ramach Zarządu:
    (i) Członek Zarządu, któremu powierzono nadzór nad obszarem ochrony danych
    osobowych;
    (ii) osoba wyznaczona przez Zarząd do zapewnienia zgodności z ochrona danych osobowych;
    
    za nadzór i monitorowanie przestrzegania Polityki odpowiadają:
    (iii) Inspektor Ochrony Danych, jeżeli został powołany w Spółce;
    (iv) komórka audytu wewnętrznego, jeżeli funkcjonuje w Spółce;
    za stosowanie niniejszej Polityki odpowiedzialni są:
    (v) Spółka;
    (vi) komórka organizacyjna odpowiedzialna za obszar bezpieczeństwa informacji;
    (vii) komórki organizacyjne przetwarzające dane osobowe w dużym rozmiarze;
    (viii) pozostałe komórki organizacyjne;
    (ix) wszyscy członkowie personelu Spółki.
    Spółka powinna też zapewnić zgodność postępowania kontrahentów Spółki z niniejszą
    Polityką w odpowiednim zakresie, gdy dochodzi do przekazania im danych osobowych przez Spółkę.
    
    4. Skróty i definicje:
    Polityka oznacza niniejszą Politykę ochrony danych osobowych, o ile co innego nie
    wynika wyraźnie z kontekstu. 
    RODO oznacza rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z 27.04.2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych) (Dz.Urz. UE L 119, s. 1).
    Dane oznaczają dane osobowe, o ile co innego nie wynika wyraźnie z kontekstu.
    Dane wrażliwe oznaczają dane specjalne i dane karne.
    Dane specjalne oznaczają dane wymienione w art. 9 ust. 1 RODO, tj. dane osobowe
    ujawniające pochodzenie rasowe lub etniczne, poglądy polityczne, przekonania religijne
    lub światopoglądowe, przynależność do związków zawodowych, dane genetyczne,
    biometryczne w celu jednoznacznego zidentyfikowania osoby fizycznej lub dane
    dotyczące zdrowia, seksualności lub orientacji seksualnej.
    Dane karne oznaczają dane wymienione w art. 10 RODO, tj. dane dotyczące wyroków
    skazujących i naruszeń prawa.
    Dane dzieci oznaczają dane osób poniżej 16. roku życia.
    Osoba oznacza osobę, której dane dotyczą, o ile co innego nie wynika wyraźnie z
    kontekstu.
    Podmiot przetwarzający oznacza organizację lub osobę, której Spółka powierzyła
    przetwarzanie danych osobowych (np. usługodawca IT, zewnętrzna księgowość).
    Profilowanie oznacza dowolną formę zautomatyzowanego przetwarzania danych
    osobowych, które polega na wykorzystaniu danych osobowych do oceny niektórych
    czynników osobowych osoby fizycznej, w szczególności do analizy lub prognozy
    aspektów dotyczących efektów pracy tej osoby fizycznej, jej sytuacji ekonomicznej,
    zdrowia, osobistych preferencji, zainteresowań, wiarygodności, zachowania, lokalizacji
    lub przemieszczania się.
    Eksport danych oznacza przekazanie danych do państwa trzeciego lub organizacji
    międzynarodowej.
    IOD lub Inspektor oznacza Inspektora Ochrony Danych Osobowych
    RCPD lub Rejestr oznacza Rejestr Czynności Przetwarzania Danych Osobowych.
    Spółka oznacza spółkę McGłuszak MacroIndustries Sp z o.o, ul. Warszawska 6m32, 15-063 Białystok, NIP: 9662116841, KRS: 0000716731, REGON: 368770856.
    
    5. Ochrona danych osobowych w Spółce – zasady ogólne
    5.1. Filary ochrony danych osobowych w Spółce:
    (1) Legalność − Spółka dba o ochronę prywatności i przetwarza dane zgodnie z
    prawem.
    (2) Bezpieczeństwo − Spółka zapewnia odpowiedni poziom bezpieczeństwa
    danych podejmując stale działania w tym zakresie.
    (3) Prawa Jednostki − Spółka umożliwia osobom, których dane przetwarza,
    wykonywanie swoich praw i prawa te realizuje.
    (4) Rozliczalność − Spółka dokumentuje to, w jaki sposób spełnia obowiązki, aby
    w każdej chwili móc wykazać zgodność.
    5.2. Zasady ochrony danych
    Spółka przetwarza dane osobowe z poszanowaniem następujących zasad:
    (1) w oparciu o podstawę prawną i zgodnie z prawem (legalizm);
    (2) rzetelnie i uczciwie (rzetelność);
    (3) w sposób przejrzysty dla osoby, której dane dotyczą (transparentność);
    (4) w konkretnych celach i nie „na zapas” (minimalizacja);
    (5) nie więcej niż potrzeba (adekwatność);
    (6) z dbałością o prawidłowość danych (prawidłowość);
    (7) nie dłużej niż potrzeba (czasowość);
    (8) zapewniając odpowiednie bezpieczeństwo danych (bezpieczeństwo).
    5.3. System ochrony danych
    System ochrony danych osobowych w Spółce składa się z następujących elementów:
    1) Inwentaryzacja danych. Spółka dokonuje identyfikacji zasobów danych osobowych w
    Spółce, klas danych, zależności między zasobami danych, identyfikacji sposobów
    wykorzystania danych (inwentaryzacja), w tym:
    a) przypadków przetwarzania danych specjalnych i danych „kryminalnych” (dane
    wrażliwe);
    b) przypadków przetwarzania danych osób, których Spółka nie identyfikuje (dane
    niezidentyfikowane);
    c) przypadków przetwarzania danych dzieci;
    d) profilowania;
    e) współadministrowania danymi.
    2) Rejestr. Spółka opracowuje, prowadzi i utrzymuje Rejestr Czynności Danych Osobowych
    w Spółce (Rejestr). Rejestr jest narzędziem rozliczania zgodności z ochroną danych w
    Spółce.
    3) Podstawy prawne. Spółka zapewnia, identyfikuje, weryfikuje podstawy prawne
    przetwarzania danych i rejestruje je w Rejestrze, w tym:
    a) utrzymuje system zarządzania zgodami na przetwarzanie danych i komunikację na
    odległość,
    b) inwentaryzuje i uszczegóławia uzasadnienie przypadków, gdy Spółka przetwarza dane
    na podstawie prawnie uzasadnionego interesu Spółki.
    4) Obsługa praw jednostki. Spółka spełnia obowiązki informacyjne względem osób,
    których dane przetwarza, oraz zapewnia obsługę ich praw, realizując otrzymane w tym
    zakresie żądania, w tym:
    a) Obowiązki informacyjne. Spółka przekazuje osobom prawem wymagane informacje
    przy zbieraniu danych i w innych sytuacjach oraz organizuje i zapewnia
    udokumentowanie realizacji tych obowiązków.
    b) Możliwość wykonania żądań. Spółka weryfikuje i zapewnia możliwość efektywnego
    wykonania każdego typu żądania przez siebie i swoich przetwarzających.
    c) Obsługa żądań. Spółka zapewnia odpowiednie nakłady i procedury, aby żądania osób
    były realizowane w terminach i w sposób wymagany RODO i dokumentowane.
    d) Zawiadamianie o naruszeniach. Spółka stosuje procedury pozwalające na ustalenie
    konieczności zawiadomienia osób dotkniętych zidentyfikowanym naruszeniem
    ochrony danych.
    5) Minimalizacja. Spółka posiada zasady i metody zarządzania minimalizacją (privacy by
    default), a w tym:
    a) zasady zarządzania adekwatnością danych;
    b) zasady reglamentacji i zarządzania dostępem do danych;
    c) zasady zarządzania okresem przechowywania danych i weryfikacji dalszej
    przydatności;
    6) Bezpieczeństwo. Spółka zapewnia odpowiedni poziom bezpieczeństwa danych, w tym:
    a) przeprowadza analizy ryzyka dla czynności przetwarzania danych lub ich kategorii;
    b) przeprowadza oceny skutków dla ochrony danych tam, gdzie ryzyko naruszenia praw i
    wolności osób jest wysokie;
    c) dostosowuje środki ochrony danych do ustalonego ryzyka;
    d) posiada system zarządzania bezpieczeństwem informacji;
    e) stosuje procedury pozwalające na identyfikację, ocenę i zgłoszenie zidentyfikowanego
    naruszenia ochrony danych Urzędowi Ochrony Danych − zarządza incydentami.
    7) Przetwarzający. Spółka posiada zasady doboru przetwarzających dane na rzecz Spółki,
    wymogów co do warunków przetwarzania (umowa powierzenia), zasad weryfikacji
    wykonywania umów powierzenia.
    8) Eksport danych. Spółka nie przekazuje danych do państw trzecich (czyli poza UE,
    Norwegię, Lichtenstein, Islandię) lub do organizacji międzynarodowych.
    9) Privacybydesign. Spółka zarządza zmianami mającymi wpływ na prywatność. W tym
    celu procedury uruchamiania nowych projektów i inwestycji w Spółce uwzględniają
    konieczność oceny wpływu zmiany na ochronę danych, zapewnienie prywatności (a w tym
    zgodności celów przetwarzania, bezpieczeństwa danych i minimalizacji) już w fazie
    projektowania zmiany, inwestycji czy na początku nowego projektu.
    10) Przetwarzanie transgraniczne. Spółka nie dokonuje transgranicznego przetwarzania
    danych osobowych.
    6. Inwentaryzacja
    6.1. Dane wrażliwe
    Spółka identyfikuje przypadki, w których przetwarza lub może przetwarzać dane wrażliwe
    (dane specjalne i dane karne) oraz utrzymuje dedykowane mechanizmy zapewnienia
    zgodności z prawem przetwarzania danych wrażliwych. W przypadku zidentyfikowania
    przypadków przetwarzania danych wrażliwych, Spółka postępuje zgodnie z przyjętymi
    zasadami w tym zakresie.
    6.2. Dane niezidentyfikowane
    Spółka identyfikuje przypadki, w których przetwarza lub może przetwarzać dane
    niezidentyfikowane i utrzymuje mechanizmy ułatwiające realizację praw osób, których
    dotyczą dane niezidentyfikowane.
    6.3. Profilowanie
    Spółka identyfikuje przypadki, w których dokonuje profilowania przetwarzanych danych i
    utrzymuje mechanizmy zapewniające zgodność tego procesu z prawem. W przypadku
    zidentyfikowania przypadków profilowania i zautomatyzowanego podejmowania decyzji,
    Spółka postępuje zgodnie z przyjętymi zasadami w tym zakresie.
    6.4. Współadministrowanie
    Spółka identyfikuje przypadki współadministrowania danymi i postępuje w tym zakresie
    zgodnie z przyjętymi zasadami.
    7. Rejestr Czynności Przetwarzania Danych
    7.1. RCPD stanowi formę dokumentowania czynności przetwarzania danych, pełni rolę
    mapy przetwarzania danych i jest jednym z kluczowych elementów umożliwiających
    realizację fundamentalnej zasady, na której opiera się cały system ochrony danych
    osobowych, czyli zasady rozliczalności.
    7.2. Spółka prowadzi Rejestr Czynności Przetwarzania Danych, w którym inwentaryzuje i
    monitoruje sposób, w jaki wykorzystuje dane osobowe.
    7.3. Rejestr jest jednym z podstawowych narzędzi umożliwiających Spółce rozliczanie
    większości obowiązków ochrony danych.
    7.4. W Rejestrze, dla każdej czynności przetwarzania danych, którą Spółka uznała za
    odrębną dla potrzeb Rejestru, Spółka odnotowuje co najmniej: (i) nazwę czynności,
    (ii) cel przetwarzania, (iii) opis kategorii osób, (iv) opis kategorii danych, (v)
    podstawę prawną przetwarzania, wraz z wyszczególnieniem kategorii uzasadnionego
    interesu Spółki, jeśli podstawą jest uzasadniony interes, (vi) sposób zbierania danych,
    (vii) opis kategorii odbiorców danych (w tym przetwarzających), (viii) informację o
    przekazaniu poza EU/EOG; (ix) ogólny opis technicznych i organizacyjnych środków
    ochrony danych.
    8. Podstawy przetwarzania
    8.1. Spółka dokumentuje w Rejestrze podstawy prawne przetwarzania danych dla
    poszczególnych czynności przetwarzania.
    8.2. Wskazując ogólną podstawę prawną (zgoda, umowa, obowiązek prawny, żywotne
    interesy, zadanie publiczne/władza publiczna, uzasadniony cel Spółki) Spółka
    dookreśla podstawę w czytelny sposób, gdy jest to potrzebne. Np. dla zgody
    wskazując na jej zakres, gdy podstawą jest prawo – wskazując na konkretny przepis i
    inne dokumenty, np. umowę, porozumienie administracyjne, żywotne interesy –
    wskazując na kategorie zdarzeń, w których się zmaterializują, uzasadniony cel –
    wskazując na konkretny cel, np. marketing własny, dochodzenie roszczeń.
    8.3. Spółka wdraża metody zarządzania zgodami umożliwiające rejestrację i weryfikację
    posiadania zgody osoby na przetwarzanie jej konkretnych danych w konkretnym celu,
    zgody na komunikację na odległość (email, telefon, sms, in.) oraz rejestrację odmowy
    zgody, cofnięcia zgody i podobnych czynności (sprzeciw, ograniczenie itp.).
    8.4. Kierownik komórki organizacyjnej Spółki ma obowiązek znać podstawy prawne, na
    jakich komórka przez niego kierowana dokonuje konkretnych czynności
    przetwarzania danych osobowych. Jeżeli podstawą jest uzasadniony interes Spółki,
    kierownik komórki ma obowiązek znać konkretny realizowany przetwarzaniem
    interes Spółki.
    9. Sposób obsługi praw jednostki i obowiązków informacyjnych
    9.1. Spółka dba o czytelność i styl przekazywanych informacji i komunikacji z osobami,
    których dane przetwarza.
    9.2. Spółka ułatwia osobom korzystanie z ich praw poprzez różne działania, w tym:
    zamieszczenie na stronie internetowej Spółki informacji lub odwołań (linków) do
    informacji o prawach osób, sposobie skorzystania z nich w Spółce, w tym
    wymaganiach dotyczących identyfikacji, metodach kontaktu ze Spółką w tym celu,
    ewentualnym cenniku żądań „dodatkowych” itp.
    9.3. Spółka dba o dotrzymywanie prawnych terminów realizacji obowiązków względem
    osób.
    9.4. Spółka wprowadza adekwatne metody identyfikacji i uwierzytelniania osób dla
    potrzeb realizacji praw jednostki i obowiązków informacyjnych.
    9.5. W celu realizacji praw jednostki Spółka zapewnia procedury i mechanizmy
    pozwalające zidentyfikować dane konkretnych osób przetwarzane przez Spółkę,
    zintegrować te dane, wprowadzać do nich zmiany i usuwać w sposób zintegrowany,
    9.6. Spółka dokumentuje obsługę obowiązków informacyjnych, zawiadomień i żądań
    osób.
    10. Obowiązki informacyjne
    10.1. Spółka określa zgodne z prawem i efektywne sposoby wykonywania obowiązków
    informacyjnych.
    10.2. Spółka informuje osobę o przedłużeniu ponad jeden miesiąc terminu na rozpatrzenie
    żądania tej osoby.
    10.3. Spółka informuje osobę o przetwarzaniu jej danych, przy pozyskiwaniu danych od tej
    osoby.
    10.4. Spółka informuje osobę o przetwarzaniu jej danych, przy pozyskiwaniu danych o tej
    osobie niebezpośrednio od niej.
    10.5. Spółka określa sposób informowania osób o przetwarzaniu danych
    niezidentyfikowanych, tam gdzie to jest możliwe (np. tabliczka o objęciu obszaru
    monitoringiem wizyjnym).
    10.6. Spółka informuje osobę o planowanej zmianie celu przetwarzania danych.
    10.7. Spółka informuje osobę przed uchyleniem ograniczenia przetwarzania.
    10.8. Spółka informuje odbiorców danych o sprostowaniu, usunięciu lub ograniczeniu
    przetwarzania danych (chyba że będzie to wymagało niewspółmiernie dużego wysiłku
    lub będzie niemożliwe).
    10.9. Spółka informuje osobę o prawie sprzeciwu względem przetwarzania danych
    najpóźniej przy pierwszym kontakcie z tą osobą.
    10.10. Spółka bez zbędnej zwłoki zawiadamia osobę o naruszeniu ochrony danych
    osobowych, jeżeli może ono powodować wysokie ryzyko naruszenia praw lub
    wolności tej osoby.
    11. Żądania osób
    11.1. Prawa osób trzecich. Realizując prawa osób, których dane dotyczą, Spółka
    wprowadza proceduralne gwarancje ochrony praw i wolności osób trzecich. W
    szczególności w przypadku powzięcia wiarygodnej wiadomości o tym, że wykonanie
    żądania osoby o wydanie kopii danych lub prawa do przeniesienia danych może
    niekorzystnie wpłynąć na prawa i wolności innych osób (np. prawa związane z
    ochroną danych innych osób, dobra osobiste itp.), Spółka może zwrócić się do osoby
    w celu wyjaśnienia wątpliwości lub podjąć inne prawem dozwolone kroki, łącznie z
    odmową zadośćuczynienia żądaniu.
    11.2. Nieprzetwarzanie. Spółka informuje osobę o tym, że nie przetwarza danych jej
    dotyczących, jeśli taka osoba zgłosiła żądanie dotyczące jej praw.
    11.3. Odmowa. Spółka informuje osobę, w ciągu miesiąca od otrzymania żądania, o
    odmowie rozpatrzenia żądania i o prawach osoby z tym związanych.
    11.4. Dostęp do danych. Na żądanie osoby dotyczące dostępu do jej danych, Spółka
    informuje osobę, czy przetwarza jej dane oraz informuje osobę o szczegółach
    przetwarzania, zgodnie z art. 15 RODO (zakres odpowiada obowiązkowi
    informacyjnemu przy zbieraniu danych), a także udziela osobie dostępu do danych jej
    dotyczących. Dostęp do danych może być zrealizowany przez wydanie kopii danych,
    z zastrzeżeniem, że kopii danych wydanej w wykonaniu prawa dostępu do danych
    Spółka nie uzna za pierwszą nieodpłatną kopię danych dla potrzeb opłat za kopie
    danych.
    11.5. Kopie danych. Na żądanie Spółka wydaje osobie kopię danych jej dotyczących i
    odnotowuje fakt wydania pierwszej kopii danych. Spółka wprowadza i utrzymuje
    cennik kopii danych, zgodnie z którym pobiera opłaty za kolejne kopie danych. Cena
    kopii danych skalkulowana jest w oparciu o oszacowany jednostkowy koszt obsługi
    żądania wydania kopii danych.
    11.6. Sprostowanie danych. Spółka dokonuje sprostowania nieprawidłowych danych na
    żądanie osoby. Spółka ma prawo odmówić sprostowania danych, chyba że osoba w
    rozsądny sposób wykaże nieprawidłowości danych, których sprostowania się domaga.
    W przypadku sprostowania danych Spółka informuje osobę o odbiorcach danych, na
    żądanie tej osoby.
    11.7. Uzupełnienie danych. Spółka uzupełnia i aktualizuje dane na żądanie osoby. Spółka
    ma prawo odmówić uzupełnienia danych, jeżeli uzupełnienie byłoby niezgodne z
    celami przetwarzania danych (np. Spółka nie musi przetwarzać danych, które są
    Spółce zbędne). Spółka może polegać na oświadczeniu osoby, co do uzupełnianych
    danych, chyba że będzie to niewystarczające w świetle przyjętych przez Spółkę
    procedur (np. co do pozyskiwania takich danych), prawa lub zaistnieją podstawy, aby
    uznać oświadczenie za niewiarygodne.
    7
    11.8. Usunięcie danych. Na żądanie osoby, Spółka usuwa dane, gdy:
    (1) dane nie są niezbędne do celów, w których zostały zebrane ani przetwarzane w
    innych celach,
    (2) zgoda na ich przetwarzanie została cofnięta, a nie ma innej podstawy prawnej
    przetwarzania,
    (3) osoba wniosła skuteczny sprzeciw względem przetwarzania tych danych,
    (4) dane były przetwarzane niezgodnie z prawem,
    (5) konieczność usunięcia wynika z obowiązku prawnego,
    (6) żądanie dotyczy danych dziecka zebranych na podstawie zgody w celu
    świadczenia usług społeczeństwa informacyjnego oferowanych bezpośrednio
    dziecku (np. profil dziecka na portalu społecznościowym, udział w konkursie na
    stronie internetowej).
    Spółka określa sposób obsługi prawa do usunięcia danych w taki sposób, aby
    zapewnić efektywną realizację tego prawa przy poszanowaniu wszystkich zasad
    ochrony danych, w tym bezpieczeństwa, a także weryfikację, czy nie zachodzą
    wyjątki, o których mowa w art. 17. ust. 3 RODO.
    Jeżeli dane podlegające usunięciu zostały upublicznione przez Spółkę, Spółka
    podejmuje rozsądne działania, w tym środki techniczne, by poinformować innych
    administratorów przetwarzających te dane osobowe, o potrzebie usunięcia danych i
    dostępu do nich.
    W przypadku usunięcia danych Spółka informuje osobę o odbiorcach danych, na
    żądanie tej osoby.
    11.9. Ograniczenie przetwarzania. Spółka dokonuje ograniczenia przetwarzania danych
    na żądanie osoby, gdy:
    a) osoba kwestionuje prawidłowość danych – na okres pozwalający sprawdzić ich
    prawidłowość,
    b) przetwarzanie jest niezgodne z prawem, a osoba, której dane dotyczą, sprzeciwia
    się usunięciu danych osobowych, żądając w zamian ograniczenia ich
    wykorzystywania,
    c) Spółka nie potrzebuje już danych osobowych, ale są one potrzebne osobie, której
    dane dotyczą, do ustalenia, dochodzenia lub obrony roszczeń,
    d) osoba wniosła sprzeciw względem przetwarzania z przyczyn związanych z jej
    szczególną sytuacją – do czasu stwierdzenia, czy po stronie Spółki zachodzą
    prawnie uzasadnione podstawy nadrzędne wobec podstaw sprzeciwu.
    W trakcie ograniczenia przetwarzania Spółka przechowuje dane, natomiast nie
    przetwarza ich (nie wykorzystuje, nie przekazuje), bez zgody osoby, której dane
    dotyczą, chyba że w celu ustalenia, dochodzenia lub obrony roszczeń, lub w celu
    ochrony praw innej osoby fizycznej lub prawnej, lub z uwagi na ważne względy
    interesu publicznego.
    Spółka informuje osobę przed uchyleniem ograniczenia przetwarzania.
    W przypadku ograniczenia przetwarzania danych Spółka informuje osobę o
    odbiorcach danych, na żądanie tej osoby.
    11.10. Przenoszenie danych. Na żądanie osoby Spółka wydaje w ustrukturyzowanym,
    powszechnie używanym formacie nadającym się do odczytu maszynowego lub
    przekazuje innemu podmiotowi, jeśli jest to możliwe, dane dotyczące tej osoby, które
    dostarczyła ona Spółce, przetwarzane na podstawie zgody tej osoby lub w celu
    zawarcia lub wykonania umowy z nią zawartej, w systemach informatycznych Spółki.
    11.11. Sprzeciw w szczególnej sytuacji. Jeżeli osoba zgłosi umotywowany jej szczególną
    sytuacją sprzeciw względem przetwarzania jej danych, a dane przetwarzane są przez
    Spółkę w oparciu o uzasadniony interes Spółki lub o powierzone Spółce zadanie w
    interesie publicznym, Spółka uwzględni sprzeciw, o ile nie zachodzą po stronie Spółki
    ważne prawnie uzasadnione podstawy do przetwarzania, nadrzędne wobec interesów,
    praw i wolności osoby zgłaszającej sprzeciw, lub podstawy do ustalenia, dochodzenia
    lub obrony roszczeń.
    11.12. Sprzeciw przy badaniach naukowych, historycznych lub celach statystycznych.
    Jeżeli Spółka prowadzi badania naukowe, historyczne lub przetwarza dane w celach
    statystycznych, osoba może wnieść umotywowany jej szczególną sytuacją sprzeciw
    względem takiego przetwarzania. Spółka uwzględni taki sprzeciw, chyba że
    przetwarzanie jest niezbędne do wykonania zadania realizowanego w interesie
    publicznym.
    11.13. Sprzeciw względem marketingu bezpośredniego. Jeżeli osoba zgłosi sprzeciw
    względem przetwarzania jej danych przez Spółkę na potrzeby marketingu
    bezpośredniego (w tym ewentualnie profilowania), Spółka uwzględni sprzeciw i
    zaprzestanie takiego przetwarzania.
    11.14. Prawo do ludzkiej interwencji przy automatycznym przetwarzaniu. Jeżeli Spółka
    przetwarza dane w sposób automatyczny, w tym w szczególności profiluje osoby, i w
    konsekwencji podejmuje względem osoby decyzje wywołujące skutki prawne lub
    inaczej istotnie wpływające na osobę, Spółka zapewnia możliwość odwołania się do
    interwencji i decyzji człowieka po stronie Spółki, chyba że taka automatyczna decyzja
    (i) jest niezbędna do zawarcia lub wykonania umowy między odwołującą się osobą a
    Spółką; lub (ii) jest wprost dozwolona przepisami prawa; lub (iii) opiera się o wyraźną
    zgodę odwołującej osoby.
    12. MINIMALIZACJA
    Spółka dba o minimalizację przetwarzania danych pod kątem: (i) adekwatności danych do
    celów (ilości danych i zakresu przetwarzania), (ii) dostępu do danych, (iii) czasu
    przechowywania danych.
    12.1. Minimalizacja zakresu
    Spółka zweryfikowała zakres pozyskiwanych danych, zakres ich przetwarzania i ilość
    przetwarzanych danych pod kątem adekwatności do celów przetwarzania w ramach
    wdrożenia RODO.
    Spółka dokonuje okresowego przeglądu ilości przetwarzanych danych i zakresu ich
    przetwarzania nie rzadziej niż raz na rok.
    Spółka przeprowadza weryfikację zmian co do ilości i zakresu przetwarzania danych w
    ramach procedur zarządzania zmianą (privacy by design).
    12.2. Minimalizacja dostępu
    Spółka stosuje ograniczenia dostępu do danych osobowych: prawne (zobowiązania do
    poufności, zakresy upoważnień), fizyczne (strefy dostępu, zamykanie pomieszczeń) i logiczne
    (ograniczenia uprawnień do systemów przetwarzających dane osobowe i zasobów
    sieciowych, w których rezydują dane osobowe).
    Spółka stosuje kontrolę dostępu fizycznego.
    Spółka dokonuje aktualizacji uprawnień dostępowych przy zmianach w składzie personelu i zmianach ról osób, oraz zmianach podmiotów przetwarzających.
    Spółka dokonuje okresowego przeglądu ustanowionych użytkowników systemów i
    aktualizuje ich nie rzadziej niż raz na rok.
    Szczegółowe zasady kontroli dostępu fizycznego i logicznego zawarte są w procedurach
    bezpieczeństwa fizycznego i bezpieczeństwa informacji Spółki.
    12.3. Minimalizacja czasu
    Spółka wdraża mechanizmy kontroli cyklu życia danych osobowych w Spółce, w tym
    weryfikacji dalszej przydatności danych względem terminów i punktów kontrolnych
    wskazanych w Rejestrze.
    Dane, których zakres przydatności ulega ograniczeniu wraz z upływem czasu są usuwane z systemów produkcyjnych Spółki, jak też z akt podręcznych i głównych. Dane takie mogą być archiwizowane oraz znajdować się na kopiach zapasowych systemów i informacji
    przetwarzanych przez Spółkę. Procedury archiwizacji i korzystania z archiwów, tworzenia i
    wykorzystania kopii zapasowych uwzględniają wymagania kontroli nad cyklem życia danych, a w tym wymogi usuwania danych.
    13. BEZPIECZEŃSTWO
    Spółka zapewnia stopień bezpieczeństwa odpowiadający ryzyku naruszenia praw i wolności
    osób fizycznych wskutek przetwarzania danych osobowych przez Spółkę.
    13.1. Analizy ryzyka i adekwatności środków bezpieczeństwa
    Spółka przeprowadza i dokumentuje analizy adekwatności środków bezpieczeństwa danych
    osobowych. W tym celu:
    (1) Spółka zapewnia odpowiedni stan wiedzy o bezpieczeństwie informacji,
    cyberbezpieczeństwie i ciągłości działania − wewnętrznie lub ze wsparciem
    podmiotów wyspecjalizowanych.
    (2) Spółka kategoryzuje dane oraz czynności przetwarzania pod kątem ryzyka, które
    przedstawiają.
    (3) Spółka przeprowadza analizy ryzyka naruszenia praw lub wolności osób fizycznych
    dla czynności przetwarzania danych lub ich kategorii. Spółka analizuje możliwe
    sytuacje i scenariusze naruszenia ochrony danych osobowych uwzględniając
    charakter, zakres, kontekst i cele przetwarzania, ryzyko naruszenia praw lub wolności
    osób fizycznych o różnym prawdopodobieństwie wystąpienia i wadze zagrożenia.
    (4) Spółka ustala możliwe do zastosowania organizacyjne i techniczne środki
    bezpieczeństwa i ocenia koszt ich wdrażania. W tym Spółka ustala przydatność i
    stosuje takie środki i podejście jak:
    (i) pseudonimizacja,
    (ii) szyfrowanie danych osobowych,
    (iii) inne środki cyberbezpieczeństwa składające się na zdolność do ciągłego
    zapewnienia poufności, integralności, dostępności i odporności systemów i
    usług przetwarzania,
    (iv) środki zapewnienia ciągłości działania i zapobiegania skutkom katastrof, czyli
    zdolności do szybkiego przywrócenia dostępności danych osobowych i dostępu
    do nich w razie incydentu fizycznego lub technicznego.
    13.2. Oceny skutków dla ochrony danych
    Spółka dokonuje oceny skutków planowanych operacji przetwarzania dla ochrony danych
    osobowych tam, gdzie zgodnie z analizą ryzyka ryzyko naruszenia praw i wolności osób jest
    wysokie.
    Spółka stosuje metodykę oceny skutków przyjętą w Spółce.
    13.3. Środki bezpieczeństwa
    Spółka stosuje środki bezpieczeństwa ustalone w ramach analiz ryzyka i adekwatności
    środków bezpieczeństwa oraz ocen skutków dla ochrony danych.
    Środki bezpieczeństwa danych osobowych stanowią element środków bezpieczeństwa
    informacji i zapewnienia cyberbezpieczeństwa w Spółce i są bliżej opisane w procedurach
    przyjętych przez Spółkę dla tych obszarów.
    13.4. Zgłaszanie naruszeń
    Spółka stosuje procedury pozwalające na identyfikację, ocenę i zgłoszenie zidentyfikowanego
    naruszenia ochrony danych Urzędowi Ochrony Danych w terminie 72 godzin od ustalenia
    naruszenia.
    14. PRZETWARZAJĄCY
    Spółka posiada zasady doboru i weryfikacji przetwarzających dane na rzecz Spółki
    opracowane w celu zapewnienia, aby przetwarzający dawali wystarczające gwarancje
    wdrożenia odpowiednich środków organizacyjnych i technicznych dla zapewnienia
    bezpieczeństwa, realizacji praw jednostki i innych obowiązków ochrony danych
    spoczywających na Spółce.
    Spółka przyjęła minimalne wymagania co do umowy powierzenia przetwarzania danych.
    Spółka rozlicza przetwarzających z wykorzystania podprzetwarzających, jak też z innych
    wymagań wynikających z Zasad powierzenia danych osobowych.
    15. PROJEKTOWANIE PRYWATNOŚCI
    Spółka zarządza zmianą mającą wpływ na prywatność w taki sposób, aby umożliwić
    zapewnienie odpowiedniego bezpieczeństwa danych osobowych oraz minimalizacji ich
    przetwarzania.
    W tym celu zasady prowadzenia projektów i inwestycji przez Spółkę odwołują się do zasad
    bezpieczeństwa danych osobowych i minimalizacji, wymagając oceny wpływu na prywatność
    i ochronę danych, uwzględnienia i zaprojektowana bezpieczeństwa i minimalizacji
    przetwarzania danych od początku projektu lub inwestycji.`,
    src: "2x.jpg",
  },
];

export const teamItems: Array<Item> = [
  {
    name: "team",
    title: "FILIP SZAMBORSKI",
    description: `Sport zacząłem uprawiać w wieku 9 lat, kiedy to mama zaprowadziło mnie na judo i szermierkę. Jako nastolatek zająłem się parkourem i treningiem na siłowni. Od sześciu lat pracuję zawodowo jako trener personalny.
    Szczególny nacisk kładę na staranność i dokładność w wykonywaniu ćwiczeń, a także kompleksową mobilizację i rozciągnięcie po treningu. Moją specjalizacją jest modelowanie sylwetki, mogę pochwalić się licznymi spektakularnymi przemianami klientów.
    
    Po godzinach aktywnie podrózuję po Europie, zajmuję się modelingiem, kuchnią, a także zwierzętami - jestem wolontariuszem w schronisku dla psów
    
    Prowadzone zajęcia:
    
    ○ fitness dla kobiet
    ○ power pump
    ○ modelowanie sylwetki dla mężczyzn
    ○ zdrowe plecy
    ○ treningi personalne
    `,
    src: "2x.jpg",
  },
  {
    name: "team",
    title: "JAREK KRZOSEK",
    description: `Sporty kopane i uderzane uprawiam od 15 lat. Moje zajęcia mają opinie wymagających: nie oszczędzam ani siebie, ani podopiecznych. Uczestnicy treningów wychodzą z nich zmęczeni, ale zadowoleni. Oprócz przygotowania kondycyjnego bardzo duży nacisk kładę na technikę. Poszczególne ciosy czy akcje powtarzamy aż do momentu kiedy ćwiczący opanują je do perfekcji.
    Moim hobby są kuchnie świata (sport i karierę trenera łączę z pracą w gastronomii). Gram również w piłkę nożną i tenisa.


    𝗣𝗿𝗼𝘄𝗮𝗱𝘇𝗼𝗻𝗲 𝘇𝗮𝗷𝗲̨𝗰𝗶𝗮:
    ○ boks
    ○ kickboxing
    ○ treningi indywidualne
    `,
    src: "2x.jpg",
  },
  {
    name: "team",
    title: "KAROLINA UJEJSKA",
    description: `Specjalizuję się w treningu z Kettlebells wg metody Hardstyle. Jestem wicemistrzynią Polski Kettlebell Hardstyle oraz zwyciężczynią pucharu Polskiej Ligi Kettlebell Hardstyle w kategorii pro.
  Doświadczenia zawodnicze i wnioski wyniesione z wielu lat ciężkich treningów pozwalają efektywniej pomagać moim podopiecznym. Nacisk na technikę i dbałość o detale w połączeniu z wytrwałością, mogą wznieść każdego na niespotykany poziom siły -  która jest podstawą dla pozostałych cech motorycznych oraz pracy nad sylwetką.

  Po godiznach jestem fotografką, pasjonatką podróży i entuzjastką zdrowego stylu życia :)

    𝗣𝗿𝗼𝘄𝗮𝗱𝘇𝗼𝗻𝗲 𝘇𝗮𝗷𝗲̨𝗰𝗶𝗮:

    ○ Kettlebells / explosive strength`,
    src: "moz.jpg",
  },
  {
    name: "team",
    title: "MARCIN NASIADKO",
    description: `Kickboxing to moja pasja i życie od 15 lat. Trenowałem w Polsce oraz w najlepszych klubach Holandii, Łotwy i Norwegii. Dziewięciokrotnie zdobywałem Mistrzostwo Polski i Puchar Świata. Jako członek kadry narodowej pięciokrotnie reprezentowałem Polskę na Mistrzostwach Świata i Mistrzostwach Europy, walczyłem też w barwach największej zawodowej organizacji kickboxingu w Polsce – DSF Kickboxing Challenge.
    Od 4 lat trenuję dzieci, młodzież i dorosłych – zawodników oraz osoby ćwiczące rekreacyjnie. Dbam o każdy aspekt przygotowania technicznego, motorycznego i psychologicznego moich wychowanków.
    
    Po godzinach, oprócz sportów walki uprawiam narciarstwo. Bardzo lubię podróże.


    𝗣𝗿𝗼𝘄𝗮𝗱𝘇𝗼𝗻𝗲 𝘇𝗮𝗷𝗲̨𝗰𝗶𝗮:
    
    ○ kickboxing
    ○ boks
    ○ treningi personalne
    `,
    src: "nasiadko.jpg",
  },
  {
    name: "team",
    title: "MATEUSZ KRYNICKI",
    description: `Od dzieciństwa interesowałem się sportami walki. Na początku było to Oyama Karate, później odkryłem pasję do boksu tajskiego. Muai Thai ćwiczyłem w wielu klubach w Polsce i za granicą (Londyn, Kijów, Tajlandia) pod okiem wielu znamienitych osobistości. 
    Posiadam uprawnienia trenera nie tylko boksu tajskiego, ale również boksu klasycznego. 
    Ukończyłem również 9-miesięczne szkolenie dla służb mundurowych prowadzone przez byłych żołnierzy jednostki GROM.
    
    Po godzinach uprawiam survival i wspinaczkę wysokogórską. Interesuję się historią. Bardzo lubię teatr.
    
    
    𝗣𝗿𝗼𝘄𝗮𝗱𝘇𝗼𝗻𝗲 𝘇𝗮𝗷𝗲̨𝗰𝗶𝗮:

    ○ Muai Thai
    ○ boks
    ○ kickboxing
    ○ samoobrona dla kobiet

    `,
    src: "krynicki.jpg",
  },
  {
    name: "team",
    title: "PATRYCJA CZEKAJ",
    description: `Według znajomych jestem wulkanem energii. Od ponad 20 lat ćwiczę taniec, miałam styczność z wieloma stylami - od inscenizacji tanecznych, przez jazz, po cheerleading, hip hop, new style, commercial i shuffle. Wielokrotnie uczestniczyłam w mistrzostwach na poziomie krajowym oraz europejskim, realizowałam pokazy taneczne na wydarzeniach sportowych i kulturalnych, koncerty, teledyski i eventy telewizyjne.
    Jestem absolwentką socjologii oraz kryminologii, a na codzień pracuję w branży Public Relations.

    Zdecydowanie unikam nudy, rzucam sobie wyzwania i próbuję nowych rzeczy, obecnie uczę się bachaty sensual. Interesuję się też modą. Każdą wolną chwilę poświęcam mojej największej miłości - maltance Sheri.


    𝗣𝗿𝗼𝘄𝗮𝗱𝘇𝗼𝗻𝗲 𝘇𝗮𝗷𝗲̨𝗰𝗶𝗮:

    ○ Shuffle dance
    ○ Hip hop, new style
    ○ Commercial
    ○ Cheerleaders`,
    src: "czekaj.jpg",
  },
  {
    name: "team",
    title: "PIOTR BURZYKOWSKI",
    description: `Tłumacz, trener, terapeuta. Od najmłodszych lat podróżuję po świecie w poszukiwaniu wiedzy, doświadczeń i nowych smaków. Wierzę, że najszybszym sposobem na poprawę jakości życia każdego człowieka jest zwiększenie jego siły. Specjalizuję się w treningu według metody „Starting Strength”.

    Po godzinach zajmuję się urban exploration, filozofią, stolarstwem.
    
    
    𝗣𝗿𝗼𝘄𝗮𝗱𝘇𝗼𝗻𝗲 𝘇𝗮𝗷𝗲̨𝗰𝗶𝗮:

    ○ Trening siłowy ze sztangą (Starting Strength)
    ○ Treningi personalne

    

    `,
    src: "burzykowski.jpg",
  },
  {
    name: "team",
    title: "SANDRA WOCH",
    description: `Moimi sportowymi pasjami są taniec towarzyski, siatkówka i siłownia. Specjalizuję się w modelowaniu ciała oraz zajęciach dla kobiet w ciąży i świeżo upieczonych mam. Mam doświadczenie w prowadzeniu zajęć dla kobiet w każdym wieku.

    Jestem fanką egzotycznych podróży i dobrych książek oraz właścicielką pieska Cookie. Bardzo lubię stawać przed aparatem fotograficznym. Ciekawym doświadczeniem był udział w konkursie Miss Warsawy, gdzie dotarłam do finału.
    
    
    𝗣𝗿𝗼𝘄𝗮𝗱𝘇𝗼𝗻𝗲 𝘇𝗮𝗷𝗲̨𝗰𝗶𝗮:

    ○ mama wraca do formy
    ○ jędrne pośladki,płaski brzuch
    ○ treningi personalne`,
    src: "woch.jpg",
  },
  {
    name: "team",
    title: "TOMEK RYTEL",
    description: `Jestem posiadaczem czarnego pasa w BJJ (brazylijskim jiu jitsu), członkiem kadry narodowej grapplingu, kilkukrotnym mistrzem polski ADCC, zdobywcą African Championship Masterclass 2021 w kategorii 65kg. Umiejętności przez wiele lat szlifowałem w Polsce, Abu Dhabi i Brazylii. Aktualnie pozostaję czynnym zawodnikiem i trenerem.
    
    Jestem człowiekiem rodzinnym. Moją drugą wielką pasją poza sportem jest sushi.

    𝗣𝗿𝗼𝘄𝗮𝗱𝘇𝗼𝗻𝗲 𝘇𝗮𝗷𝗲̨𝗰𝗶𝗮:

    ○ BJJ dla dorosłych
    ○ BJJ dla dzieci
    ○ treningi personalne
    
    `,
    src: "rytel.jpg",
  },
  {
    name: "team",
    title: "MOKEBE GŁUSZAK",
    description: `Biznesmen, człowiek sukcesu wykształcony na filmach Roberta Kiyosaki i Trader21.

    Po godzinach jestem człowiekiem czarnoskórym.


    𝗣𝗿𝗼𝘄𝗮𝗱𝘇𝗼𝗻𝗲 𝘇𝗮𝗷𝗲̨𝗰𝗶𝗮:

    ○ Boks grupa początkująca`,
    src: "2x.jpg",
  },
];

export const aboutUsItems: Array<Item> = [
  {
    name: "about-us",
    title: "Nowa jakość na Mokotowie",
    description: `Mokotowski Gym to nowopowstały klub fitness przy ul. Białej Floty 2 (Marina Mokotów II) w Warszawie.
    
    Oferujemy szeroki wybór zajęć w kameralnych grupach, treningi indywidualne i możliwość samodzielnych ćwiczeń.
    
    Jesteśmy przekonani, że każdy znajdzie tutaj coś dla siebie.`,
    src: "baner_01.jpg",
  },
  {
    name: "about-us",
    title: "Taniec, sztuki walki i fitness",
    description: `Szukasz miejsca, w którym mógłbyś/mogłabyś nauczyć się tańczyć?
    Może kusi Cię boksowanie lub trening w parterze?
    Lubisz także trening siłowy?

    To się wspaniale składa. U nas znajdziesz wszystko - i to w jednym miejscu!
    `,
    src: "baner_01.jpg",
  },
  {
    name: "about-us",
    title: "Miejsce dla deweloperów",
    description: `Mokotowski Gym to projekt osób od lat związanych z branżą IT.

    Naszą ambicją jest stworzenie nie tylko doskonałego klubu sportowego, co również miejsca networkingu i integracji.
    Deweloperzy mogą wreszcie rozstrzygnąć kwestię wyższości C++ nad Javą poprzez przyjacielską wymianę argumentów na ringu`,
    src: "baner_02.jpg",
  },
  {
    name: "about-us",
    title: "Zadbaj o swoje zdrowie",
    description: `Człowiek nie został stworzony do pracy przy biurku - a jednak większość z nas tak właśnie spędza swój czas, przez co dręczą nas charakterystyczne dla tego typu życia udręki: ból pleców, zespół cieśni nadgarstka, ból karku, zwyrodnienia stawów - można by wymieniać bez końca!
    Naprawa złych nawyków może trwać latami, lecz tu z pomocą przychodzi trening siłowy - oswój się ze sztangą, przyspiesz swoje zdrowienie, zainwestuj we własne ciało.
    
    Pomóż swojej naturze. Nic tak nie wzmacnia jak trening siłowy. Zacznij już dziś, pod okiem naszych specjalistów, a wkrótce zapomnisz o bólu pleców!`,
    src: "baner_02.jpg",
  },
  {
    name: "about-us",
    title: "Wyselekcjonowana kadra pracownicza",
    description: `Szczególną uwagę zwracamy na czynnik ludzki.
    
    Gwarantujemy, że nasi trenerzy są nie tylko świetnymi specjalistami we własnych dziedzinach, co także ciekawymi, otwartymi ludźmi, którzy bez trudu zarażą Cię pasją do sportu.
    Nic nie przyspiesza rozwoju tak mocno, co dobry nauczyciel. Nasi trenerzy przeprowadzą Cię przez podstawy aż po poziom mistrzowski.
    Pamiętaj - sky is the limit.`,
    src: "baner_03.jpg",
  },
];

export const offerItems: Array<Item> = [
  {
    name: "offer",
    title: "Taniec, sztuki walki, fitness",
    description: `Nie jesteśmy gołosłowni - u nas to wszystko znajdziesz dla siebie.
    Od shuffledance, przez boks, judo, aż po treningi personalne - jestesmy tutaj właśnie dla Ciebie.
    
    Niniejszym pozwól zaprosić Cię na zapoznanie z naszą ofertą`,
    src: "tajner.jpg",
  },
  {
    name: "offer",
    title: "Starting Strength™",
    description: `Czym jest Starting Strength™?
    
    Starting Strength™  jest kompletną metodą treningu siłowego opracowaną przez trenera Marka Rippetoe.
    Trening według metody Starting Strength™ świetnie się sprawdza zarówno u nastolatków i dorosłych, którzy pragną zwiększyć swoją sprawność fizyczną i poprawić sylwetkę, jak i u seniorów, którzy pragną zachować jak najdłużej autonomię w życiu codziennym. Metoda opiera się na ćwiczeniach wielostawowych wykonywanych ze sztangą według starannie zaprojektowanego programu treningowego.

Główne ćwiczenia to:

○ przysiad ze sztangą
○ wyciskanie sztangi stojąc
○ wyciskanie sztangi leżąc
○ martwy ciąg

Zostały one wybrane, ponieważ pozwalają na zwiększenie siły u trenujących szybciej, skuteczniej i w bardziej bezpieczny sposób w porównaniu z innymi zestawami ćwiczeń. Będziesz stawał się silniejszy od samego początku programu, ponieważ na każdym treningu będziemy odpowiednio zwiększać ciężar na sztandze.
Ale bez obaw! Początkowe ciężary i progresja będą zawsze dostosowane do Twojej kondycji i poziomu siły.
W miarę postępów w programie pojawią się nowe ćwiczenia, ale i tak  przysiady, wyciskanie stojąc i leżąc oraz martwe ciągi pozostaną najczęściej wykonywanymi ćwiczeniami.

Zajęcia Starting Strength™ prowadzi u nas trener 𝐏𝐢𝐨𝐭𝐫 𝐁𝐮𝐫𝐳𝐲𝐤𝐨𝐰𝐬𝐤𝐢`,
    src: "tajnermalysz.jpg",
  },
  {
    name: "offer",
    title: "Boks",
    description: `Współczesny boks jest dyscypliną wywodzącą się z XVIII-wiecznej Anglii.
    Jako sport walki jest unikatem na skalę światową, ponieważ ciosy zadaje się tylko rękami. Bywa nazywany sportem dżentelmenów.
    
    Na grupie początkującej kształtujemy przede wszystkim odpowiednie nawyki i pamięć mięsniowo-motoryczną.
    Typowe zajęcia składają się z 15 minut rozgrzewki, a nastepnie z zajęć w parach, w których ćwiczymy wyprowadzanie ciosów, poruszanie się oraz obronę.
    Oprócz techniki kładziemy nacisk na przygotowanie kondycyjne.
    
    W miarę zdobywania doświadczenia wprowadzamy sparingi.
    
    Zajęcia są dla każdego, kto pragnie ukształtować kondycję i sylwetkę, zyskać praktyczne umiejętności obronne oraz pewność siebie.
    Prowadzimy grupy koedukacyjne oraz dedykowane dla kobiet.
    Zapraszamy również młodzież - tutaj minimalny wiek to ok. 12 lat.
    
    Zajęcia prowadzą trener 𝐉𝐚𝐫𝐞𝐤 𝐊𝐫𝐳𝐨𝐬𝐞𝐤 oraz trener 𝐌𝐚𝐫𝐜𝐢𝐧 𝐍𝐚𝐬𝐢𝐚𝐝𝐤𝐨.`,
    src: "mokebe.jpg",
  },
];

export const scheduleItems: Array<Item> = [
  {
    name: "schedule",
    title: "SALA NR1",
    description:
      "Poniżej przedstawiamy rozkład zajęć w sali numer jeden, gdzie odbywa się przede wszystkim joga i pikiety politycznych elit",
    src: "schedule.jpg",
  },
  {
    name: "schedule",
    title: "SALA NR2",
    description:
      "W sali numer dwa odbywają się z reguły zajęcia ze sztuk walki a takze uprawiamy tutaj ogółem szermiestwo",
    src: "schedule.jng",
  },
];
