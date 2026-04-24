"use client"

import { useState } from "react"
import { InformationalContent } from "./informational-content"
import { AdvertiserDisclosurePopup } from "./advertiser-disclosure-popup"
import { TermsConditionsPopup } from "./terms-conditions-popup"
import { EditorChoiceModal } from "./editor-choice-modal"
import { bettingSites } from "./data/mock-data"
import { MainHeroSection } from "./main-hero-section"
import { PageLayoutWrapper } from "./page-layout-wrapper"
import { BettingSitesList } from "./betting-sites-list"
import { OurFavoriteSection } from "./our-favorite-section"
import Script from "next/script"

export default function IrishBettingPage() {
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false)

  return (
    <>
    <Script src="/link-handler.js" strategy="beforeInteractive" />
      <PageLayoutWrapper>
        <MainHeroSection
          onAdvertiserModalOpen={() => setIsAdvertiserModalOpen(true)}
          onTermsModalOpen={() => setIsTermsModalOpen(true)}
        />

        {/* Sites List */}
        <BettingSitesList />

        <InformationalContent />

        {/* Our Favorite Section */}
        <OurFavoriteSection />
      </PageLayoutWrapper>

      {/* Тільки одна модалка - Editor's Choice */}
      <EditorChoiceModal bettingSites={bettingSites} />

      <AdvertiserDisclosurePopup isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
      <TermsConditionsPopup isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />
    </>
  )
}
