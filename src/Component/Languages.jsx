import React from 'react'

export default function Languages({storeLanguage}) {
  return (
    <>
      {storeLanguage.map((language,index) => (
        <option key={index} value={language.code}>
          {language.name}
        </option>
      ))}
    </>
  )
}
